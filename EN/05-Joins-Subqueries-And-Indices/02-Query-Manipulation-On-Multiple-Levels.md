# Query Manipulation on Multiple Levels

[slide hideTitle]

# Subqueries

A **subquery** is a query **nested within** another query such as a **SELECT**, an **INSERT**, an **UPDATE**, or a **DELETE**.

A subquery can also be **nested inside another subquery**.

The subquery is called an **inner query**, while the query that contains the subquery is called an **outer query**.

A subquery can be used anywhere that expression is used and must be closed in parentheses.

- Can be nested in **SELECT**, **INSERT**, **UPDATE**, **DELETE**
  - Usually added within a **WHERE** clause

```Java
SELECT * FROM students
WHERE course_id = 1;
```

And the resulting table is:

| **id** | **name** | **course_id** |
| ------ | -------- | ------------- |
| 1      | Alice    | 1             |
| 2      | Michael  | 1             |

[/slide]

[slide hideTitle]

# Problem with Solution: Higher Salary

[code-task title="Higher Salary" taskId="java-db-and-mysql-joins-subqueries-and-indices-higher-salary" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]


[/code-editor]
[task-description]

## Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/06.MySQL-Joins-Subqueries-and-Indices-Lab-Resources.zip) **for this task.**

Create a query that counts the number of employees who receive a **salary** that is higher than the **average** salary of all the employees.

**Run your query statements & submit the output from the queries as plain text**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
88
[/input]
[output]
88
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
