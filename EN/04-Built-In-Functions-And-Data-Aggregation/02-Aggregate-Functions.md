[slide]

# Aggregate Functions

In this chapter, we will examine the **aggregate** functions.

An aggregate function is used to performs a calculations on multiple values, then returning a single value.

We have 5 main functions:

- COUNT

- SUM

- MAX

- MIN

- AVG

This type of functions allows us to build **summarized** data information from our database.

**For this examples, we will use our soft_uni database.**

Usually **aggregate** functions ignore **NULL** values.

Let's take a look at the following example:

``` java
SELECT e.`department_id`, 
 MIN(e.`salary`) AS 'MinSalary'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

This SQL query will produce the following result:

| department_id | MinSalary | 
| --- | --- |
| 1 | 32700.0000 |
| 2 | 25000.0000 |
| 3 | 23100.0000 |
| 4 | 13500.0000 |
| 5 | 12800.0000 | 
| 6 | 40900.0000 |
| 7 | 9500.0000 |

After knowing this, let's take a look at the functions and their syntax:


[/slide]

[slide]

# COUNT Function

We use `COUNT()` function when we need to count values (**not nulls**) in one or more columns based on grouping criteria.

When we use `COUNT()` we will ignore any employees with **NULL** salary.

[image assetsSrc="Built-in-Functions-Data-Aggregations.png" /]

Here is a simple example using our **soft_uni** database:

``` java
SELECT e.`department_id`, 
  COUNT(e.`salary`) AS 'Salary Count'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

**Output** from executing this query:

| department_id | name | manager_id |
| --- | --- | --- |
| 1 | Engineering | 12 |
| 2 | Tool Design | 4 |
| 3 | Sales | 273 |
| 4 | Marketing | 46 |
| 5 | Purchasing | 6 |
| 6 | Research and Development | 42 |
| 7 | Production | 148 |
| 8 | Production Control | 21 |
| 9 | Human Resources | 30 |
| 10 | Finance | 3 |
| 11 | Information Services | 42 |
| 12 | Document Control | 90 |
| 13 | Quality Assurance | 274 |
| 14 | Facilities and Maintenance | 218 |
| 15 | Shipping and Receiving | 85 |
| 16 | Executive | 109 |


[/slide]

[slide]

# SUM Function

`SUM()` function sums all the values in a column.

[image assetsSrc="Built-in-Functions-Data-Aggregations(1).png" /]

If any department has no salaries, **NULL** will be displayed.

``` java
SELECT e.`department_id`, SUM(e.`salary`) AS 'TotalSalary'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

**Output** from the following query will be:

| department_id | TotalSalary |
| --- | --- |
| 1 | 241000,0000 |
| 2 | 108600,0000 |
| 3 | 539800,0000 |
| 4 | 112500,0000 |
| 5 | 227800,0000 |
| 6 | 318800,0000 |
| 7 | 2535100.0000 | 
| 8 | 112100.0000 |
| ..... | ...... |
[/slide]

[slide]

# MAX Function



[/slide]