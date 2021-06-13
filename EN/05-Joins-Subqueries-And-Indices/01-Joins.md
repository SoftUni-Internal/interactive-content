# Joins

[slide hideTitle]

# Resources TODO: fix resources

_Download the resources needed for this lesson from here:_ [Mega.nz](https://mega.nz/file/3IZTXSDR#FHeTo3uqIs6yEfIMQ1AXZh02WgkbUGaDsecPveCrSho)

[/slide]

[slide hideTitle]

# Gathering data from multiple tables

А relational database consists of multiple related tables.

Sometimes you will need to combine data from several tables into a new table.

A `JOIN` clause combines rows from two or more tables based on a column they share.

The related column is a column, which exists as a **primary key** in the first table and as a **foreign key** in the second table.

[/slide]

[slide hideTitle]

# Cartesian Product 

A **Cartesian Product** in databases is when each row of a table is paired with all the rows from another table.

The following example will produce a cartesian product:

```Java
SELECT last_name, name, AS department_name
FROM employees, departments;
```

This product of rows occurs because no relationship is defined between the two tables.

There are two ways to get a cartesian product:

- If a `JOIN` condition is **omitted**
- If a `JOIN` condition is **invalid**

After running the query, we will see the following table:

| **last_name** | **department_name** |
| ------------- | ------------------- |
| Gilbert       | Engineering         |
| Brown         | Engineering         |
| ...           | ...                 |
| Gilbert       | Sales               |
| Brown         | Sales               |

If you want to avoid this result, always include a valid `JOIN` condition.

[/slide]

[slide hideTitle]

# JOINs and Tables

There are several different types of `JOIN` clauses:

- **INNER JOIN**
- **LEFT JOIN**
- **RIGHT JOIN**
- **OUTER (UNION) JOIN**
- **CROSS JOIN**

The following slides will cover each of them in detail.

We will use the two tables below for the next examples.

The `brand_id` column in the `racers` table refers to the `id` column in the `bikes` table.

This column defines the relationship between the two tables.

Table `racers`:

| **id** | **name** | **brand_id**  |
| ------ | -------- | ------------- |
| 1      | Max      | 1             |
| 2      | Jennifer | 1             |
| 3      | Kate     | 2             |
| 4      | Rob      | 5             |
| 5      | Mike     | NULL          |

Table `bikes`:

| **id** | **brand**   |
| ------ | ----------  |
| 1      | BMW         |
| 2      | Honda       |
| 3      | Kawasaki    |
| 4      | Ducati      |
| 5      | Suzuki      |

[/slide]

[slide hideTitle]

# Inner join

The `INNER JOIN` is used to return rows from both tables that satisfy a given condition.

```Java
SELECT racers.name, bikes.brand
FROM racers
INNER JOIN bikes
ON racers.brand_id = bikes.id
```

In this case the condition is `racers.brand_id = bikes.id`.

We are using `INNER JOIN` to retrieve bikers and the brand of their bike.

The resulting table would be:

| **racers_name**   | **bikes_brand** |
| ----------------- | --------------- |
| Max               | BMW             |
| Jennifer          | BMW             |
| Kate              | Honda           |
| Rob               | Suzuki          |

This type of join clause produces a set of records which **match in both tables**.

[image assetsSrc="Joins-Subqueries-And-Indices(1).png" /]

[/slide]

[slide hideTitle]

# LEFT JOIN

The `LEFT JOIN` returns **all the rows** from the table on the **left** even if no matching rows have been found in the table on the right.

If there are no matches in the table on the right, `NULL` will be returned.

```Java
SELECT racers.name, bikes.brand
FROM racers
LEFT JOIN bikes
ON racers.brand_id = bikes.id
```

In this case, `racers.brand_id = bikes.id` is our **matching condition**.

This is the resulting table:

| **racers_name**   | **bikes_brand** |
| ----------------- | --------------- |
| Max               | BMW             |
| Jennifer          | BMW             |
| Kate              | Honda           |
| Rob               | Suzuki          |
| Mike              | NULL            |

This type of join clause matches, every entry in the **left** table, regardless of the match in the **right** one.

There was no matching course for the last entry, so there is `NULL` in the `courses_name` column.

[image assetsSrc="Joins-Subqueries-And-Indices(2).png" /]

[/slide]

[slide hideTitle]

# RIGHT JOIN

The `RIGHT JOIN` works like `LEFT JOIN`, but in the opposite direction.

It returns **all the rows** from the table on the **right** even if no matching rows have been found in the table on the left.

It will also set a `NULL` value if there is no match for a given row.

```Java
SELECT racers.name, bikes.brand
FROM racers
RIGHT JOIN bikes
ON racers.brand_id = bikes.id
```

This is the result of our query:

| **racers_name** | **bikes_brand**   |
| --------- | ------------------ |
| Max       | BMW               |
| Jennifer  | BMW               |
| Kate      | Honda             |
| NULL      | Kawasaki          |
| NULL      | Ducati            |
| Rob       | Suzuki            |

This type of join clause matches every entry in the **right** table regardless of the match in the **left** one.

As a result, we have a `NULL` value for `Kawasaki` and `Ducati`.

[image assetsSrc="Joins-Subqueries-And-Indices(3).png" /]

[/slide]

[slide hideTitle]

# OUTER JOIN - FULL JOIN

The `OUTER JOIN` returns all records in both tables regardless of **any** match.

It is not as useful as the other join types and is **not implemented** in **MySQL**.

However, it is still good to know about it.

As an alternative, you can use `UNION` of a `LEFT` and `RIGHT JOIN`.

This image is a representation of how `OUTER JOIN` matches records in the database:

[image assetsSrc="Joins-Subqueries-And-Indices(4).png" /]

[/slide]

[slide hideTitle]

# The "UNION" clause

You can use the `UNION` clause to combine the results from **two or more** `SELECT` statements.

In the following example, we use it to combine a `LEFT JOIN` with a `RIGHT JOIN`:

```Java
SELECT racers.name, bikes.brand
FROM racers
LEFT JOIN bikes
ON racers.brand_id = bikes.id

UNION

SELECT racers.name, bikes.brand
FROM racers
RIGHT JOIN bikes
ON racers.brand_id = bikes.id
```

This table is the result of our query:

| **racers_name** | **bikes_brand** |
| ----------------- | ---------------- |
| Max             | BMW            |
| Jennifer           | BMW            |
| Kate          | Honda             |
| Rob             | Suzuki            |
| Mike              | NULL             |
| NULL              | Kawasaki       |
| NULL              | DUCATI              |

[/slide]

[slide hideTitle]

# CROSS JOIN

The `CROSS JOIN` returns the product of rows of two associated tables.

The result is a **Cartesian** product without a **condition** in the `WHERE` clause.

This is the correct way of using it:

```Java
SELECT * FROM bikes AS c
CROSS JOIN racers AS s;
```

It is the simplest one of the join clauses, which matches each row from one database table to all rows of another.

In MySQL, `CROSS JOIN` behaves like `JOIN` and `INNER JOIN` without a given condition.

The following image illustrates how this join clause works:

[image assetsSrc="Joins-Subqueries-And-Indices(5).png" /]

[/slide]


[slide hideTitle]

# Problem with Solution: Managers TODO ADD TESTS

## Description

Create a query that retrieves information about the managers – **id**, **full_name**, **deparment_id** and **department_name**.

Select the **first 5** departments ordered by **employee_id**.

**Run your query statements & submit the output from the queries as plain text**.

## Examples

| **employee_id** | **full_name**      | **department_id** | **department_name** |
| --------------- | ------------------ | ----------------- | ------------------- |
| 3               | Roberto Tamburello | 10                | Finance             |
| 4               | Rob Walters        | 2                 | Tool Design         |
| ...             | ...                | ...               | ...                 |

[/slide]

[slide hideTitle]

# Problem with Solution: Towns Addresses TODO ADD TESTS

## Description

Create a query that retrieves information about the **addresses** in the database that are in **San Francisco**, **Sofia**, or **Carnation**.

Retrieve **town_id**, **town_name**, **address_text**.

Order the result by **town_id** then by **address_id**.

**Run your query statements & submit the output from the queries as plain text**.

## Examples

| **town_id** | **town_name** | **address_text** |
| ----------- | ------------- | ---------------- |
| 9           | San Fransisco | 1234 Seaside Way |
| 9           | San Fransisco | 5725 Glaze Drive |
| 15          | Carnation     | 1411 Ranch Drive |
| ...         | ...           | ...              |

[/slide]

[slide hideTitle]

# Problem with Solution: Employees Without Managers TODO ADD TESTS

## Description

Create a query that retrieves information about **employee_id**, **first_name**, **last_name**, **department_id** and **salary** for all employees who **do not have** a manager.

**Run your query statements & submit the output from the queries as plain text**.

[/slide]
