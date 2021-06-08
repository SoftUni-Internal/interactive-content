# Joins

[slide hideTitle]

# Resources 

_Download the resources needed for this lesson from here:_ [Mega.nz](https://mega.nz/file/3IZTXSDR#FHeTo3uqIs6yEfIMQ1AXZh02WgkbUGaDsecPveCrSho)

[/slide]

[slide hideTitle]

# Gathering data from multiple tables

А relational database consists of multiple related tables.

Sometimes we will need to combine data from several tables into a new table.

A **JOIN** clause is used to combine rows from two or more tables, based on a related column between them.

The related column is a column, which exists as a **primary key** in the first table and as a **foreign key** in the second table.

[/slide]

[slide hideTitle]

# Cartesian Product

The following example will produce a **cartesian** product:

```Java
SELECT last_name, name, AS department_name
FROM employees, departments;
```

When there is no relationship defined between the two tables, each row in the first table is paired with all of the rows in the second table.

This is formed when:
  - A join condition is omitted
  - A join condition is invalid

To avoid this, always include a valid **JOIN condition**.

The result:

| **last_name** | **department_name** |
| ------------- | ------------------- |
| Gilbert       | Engineering         |
| Brown         | Engineering         |
| ...           | ...                 |
| Gilbert       | Sales               |
| Brown         | Sales               |

[/slide]

[slide hideTitle]

# Joins

- **JOINS** - used to collect data from **two** or **more** tables
- Types:
  - INNER JOIN
  - LEFT JOIN
  - RIGHT JOIN
  - OUTER (UNION) JOIN
  - CROSS JOIN

[/slide]

[slide hideTitle]

# Tables

Have a look at the example below.

Notice that the `course_id` column in the `students` table refers to the `id` column in the `Courses` table.

The relationship between the two tables is the courses "id" column.

Table students:

| **id** | **name** | **course_id** |
| ------ | -------- | ------------- |
| 1      | Alice    | 1             |
| 2      | Michael  | 1             |
| 3      | Caroline | 2             |
| 4      | David    | 5             |
| 5      | Emma     | NULL          |

Table courses:

| **id** | **name**   |
| ------ | ---------- |
| 1      | HTML5      |
| 2      | CSS3       |
| 3      | JavaScript |
| 4      | PHP        |
| 5      | MySQL      |

[/slide]

[slide hideTitle]

# Inner join

```Java
SELECT students.name, courses.name
FROM students
INNER JOIN courses  # Or just JOIN
ON students.course_id = courses.id
```

The **INNER JOIN** is used to return rows from both tables that satisfy a given condition.

In this case the condition is **students.course_id = courses.id**.

If you want to get a list of students and their courses, you can use an INNER JOIN for that, which returns rows from both tables that satisfy the condition above.

The resulting table would be:

| **students_name** | **course_name** |
| ----------------- | --------------- |
| Alice             | HTML5           |
| Michael           | HTML5           |
| Caroline          | CSS3            |
| David             | MySQL           |

Produces a set of records which **match in both tables**!

[image assetsSrc="Joins-Subqueries-And-Indices(1).png" /]

[/slide]

[slide hideTitle]

# LEFT JOIN

The **LEFT JOIN** returns all the rows from the table on the left even if no matching rows have been found in the table on the right.

Where no matches have been found in the table on the right, **NULL** is returned.

```Java
SELECT students.name, courses.name
FROM students
LEFT JOIN courses
ON students.course_id = courses.id  # Matching condition
```

And this is the resulting table:

| **students_name** | **courses_name** |
| ----------------- | ---------------- |
| Alice             | HTML5            |
| Michael           | HTML5            |
| Caroline          | CSS3             |
| David             | MySQL            |
| Emma              | NULL             |

Matches, every entry in the **left** table, regardless of the match in the **right** one.

There was no match found for Emma, so we have **NULL** in the courses_name column.

[image assetsSrc="Joins-Subqueries-And-Indices(2).png" /]

[/slide]

[slide hideTitle]

# RIGHT JOIN

The **RIGHT JOIN** is the opposite of the **LEFT JOIN**.

It returns all the columns from the table on the right even if no matching rows have been found in the table on the left.

If no matches have been found in the table on the left, **NULL** is returned.

```Java
SELECT students.name, courses.name
FROM students
RIGHT JOIN courses
ON students.course_id = courses.id
```

And this is the resulting table:

| **students_name** | **courses_name** |
| ----------------- | ---------------- |
| Alice             | HTML5            |
| Michael           | HTML5            |
| Caroline          | CSS3             |
| NULL              | JavaScript       |
| NULL              | PHP              |
| David             | MySQL            |

Matches every entry in the **right** table regardless of the match in the **left** one.

As a result, we have **NULL** for **JavaScript** and **PHP**.

[image assetsSrc="Joins-Subqueries-And-Indices(3).png" /]

[/slide]

[slide hideTitle]

# OUTER JOIN - FULL JOIN

Returns all records in both tables regardless of **any** match.

- Less useful than **INNER**, **LEFT** or **RIGHT JOINs** and it is **not implemented in MySQL**
- We can use **UNION** of a **LEFT** and **RIGHT JOIN**

[image assetsSrc="Joins-Subqueries-And-Indices(4).png" /]

[/slide]

[slide hideTitle]

# Union of LEFT and RIGHT JOINs

```Java
SELECT students.name, courses.name
FROM students
LEFT JOIN courses
ON students.course_id = courses.id

UNION

SELECT students.name, courses.name
FROM students
RIGHT JOIN courses
ON students.course_id = courses.id
```

And this is the resulting table:

| **students_name** | **courses_name** |
| ----------------- | ---------------- |
| Alice             | HTML5            |
| Michael           | HTML5            |
| Caroline          | CSS3             |
| David             | MySQL            |
| Emma              | NULL             |
| NULL              | JavaScript       |
| NULL              | PHP              |

[/slide]

[slide hideTitle]

# CROSS JOIN

The **CROSS JOIN** produces a result set, which is the product of rows of two associated tables when no **WHERE** clause is used with a CROSS JOIN.

- Produces a set of associated rows of two tables
  - Multiplication of each row in the first table with each in second
  - The result is a **Cartesian** product when there's **no condition** in the **WHERE** clause

```Java
SELECT * FROM courses AS c
CROSS JOIN students AS s;  # No Join Condition
```

Cross JOIN is the simplest form of JOIN, which matches each row from one database table to all rows of another.

In MySQL, the **CROSS JOIN** behaves like a **JOIN** and an **INNER JOIN** without using any condition.

Have a look at the following example below:

[image assetsSrc="Joins-Subqueries-And-Indices(5).png" /]

[/slide]


[slide hideTitle]

# Problem with Solution: Managers

[code-task title="Managers" taskId="java-db-and-mysql-joins-subqueries-and-indices-managers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]

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

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
Roberto Tamburello
10
Finance
4
Rob Walters
2
Tool Design
6
David Bradley
5
Purchasing
12
Terri Duffy
1
Engineering
21
Peter Krebs
8
Production Control
[/input]
[output]
3
Roberto Tamburello
10
Finance
4
Rob Walters
2
Tool Design
6
David Bradley
5
Purchasing
12
Terri Duffy
1
Engineering
21
Peter Krebs
8
Production Control
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem with Solution: Towns Addresses

[code-task title="Towns Addresses" taskId="java-db-and-mysql-joins-subqueries-and-indices-town-addresses" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]

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

[/task-description]
[code-io /]
[tests]
[test open]
[input]
9
San Francisco
1234 Seaside Way
9
San Francisco
5725 Glaze Drive
15
Carnation
1411 Ranch Drive
15
Carnation
3074 Arbor Drive
15
Carnation
390 Ridgewood Ct.
15
Carnation
9666 Northridge Ct.
15
Carnation
9752 Jeanne Circle
32
Sofia
163 Nishava Str, ent A, apt. 1
[/input]
[output]
9
San Francisco
1234 Seaside Way
9
San Francisco
5725 Glaze Drive
15
Carnation
1411 Ranch Drive
15
Carnation
3074 Arbor Drive
15
Carnation
390 Ridgewood Ct.
15
Carnation
9666 Northridge Ct.
15
Carnation
9752 Jeanne Circle
32
Sofia
163 Nishava Str, ent A, apt. 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem with Solution: Employees Without Managers

[code-task title="Employees Without Managers" taskId="java-db-and-mysql-joins-subqueries-and-indices-employees-without-managers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]

## Description

Create a query that retrieves information about **employee_id**, **first_name**, **last_name**, **department_id** and **salary** for all employees who **do not have** a manager.

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
109
Ken
Sanchez
16
125500.0000
291
Svetlin
Nakov
6
48000.0000
292
Martin
Kulov
6
48000.0000
293
George
Denchev
6
48000.0000
[/input]
[output]
109
Ken
Sanchez
16
125500.0000
291
Svetlin
Nakov
6
48000.0000
292
Martin
Kulov
6
48000.0000
293
George
Denchev
6
48000.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
