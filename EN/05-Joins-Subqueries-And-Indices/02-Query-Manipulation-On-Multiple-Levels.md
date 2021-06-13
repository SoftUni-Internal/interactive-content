# Query Manipulation on Multiple Levels

[slide hideTitle]

# Subqueries

A **subquery** is a query **nested within** another query like `SELECT`, `INSERT`, `UPDATE`, or `DELETE`.

It can also be **nested inside another subquery**.

The subquery is called an **inner query**, while the query that contains the subquery is called an **outer query**.

The **inner query** should always be within **parentheses**. 

Most of the time, subqueries are placed after a `WHERE` clause.

Here is an example of a simple subquery:

```Java
SELECT * FROM students
WHERE course_id = 1;
```

This is the resulting table:

| **id** | **name** | **course_id** |
| ------ | -------- | ------------- |
| 1      | Alice    | 1             |
| 2      | Michael  | 1             |

[/slide]

[slide hideTitle]

# Problem with Solution: Higher Salary TODO ADD TESTS

## Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/06.MySQL-Joins-Subqueries-and-Indices-Lab-Resources.zip) **for this task.**

Create a query that counts the number of employees who receive a **salary** that is higher than the **average** salary of all the employees.

**Run your query statements & submit the output from the queries as plain text**.

[/slide]
