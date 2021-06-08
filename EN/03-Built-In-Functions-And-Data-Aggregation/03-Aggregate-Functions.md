[slide hideTitle]

# Aggregate Functions


An **aggregate** function performs calculations on multiple values and then returns a single value.

We have 5 main functions:

- COUNT()
- SUM()
- MAX()
- MIN()
- AVG()

These functions allow us to build **summarized** data information from our database.

**For these examples, we will use our soft_uni database.**

Usually **aggregate** functions ignore **NULL** values.

**Example**:

``` java
SELECT e.`department_id`, MIN(e.`salary`) AS 'MinSalary'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

This SQL query will produce the following result:

| department_id | MinSalary | 
| --- | --- |
| 1 | 32700,0000 |
| 2 | 25000,0000 |
| 3 | 23100,0000 |
| 4 | 13500,0000 |
| 5 | 12800,0000 | 
| 6 | 40900,0000 |
| 7 | 9500,0000 |

After knowing this, let us take a look at the functions and their syntax:


[/slide]

[slide hideTitle]

## The COUNT() Function

We use the `COUNT()` function when we need to count values (**not nulls**) in one or more columns based on grouping criteria.

When using `COUNT()`, we ignore any employees with **NULL** salary.

[image assetsSrc="Built-in-Functions-Data-Aggregations.png" /]

Here is a simple example using our **soft_uni** database:

``` java
SELECT e.`department_id`, COUNT(e.`salary`) AS 'Salary Count'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

**Output**:

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

[slide hideTitle]

## The SUM() Function

The `SUM()` function sums all the values in a column.

[image assetsSrc="Built-in-Functions-Data-Aggregations(1).png" /]

If any department has no salaries, **NULL** will be displayed.

``` java
SELECT e.`department_id`, SUM(e.`salary`) AS 'TotalSalary'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

**Output**:

| department_id | TotalSalary |
| --- | --- |
| 1 | 241000,0000 |
| 2 | 108600,0000 |
| 3 | 539800,0000 |
| 4 | 112500,0000 |
| 5 | 227800,0000 |
| 6 | 318800,0000 |
| 7 | 2535100,0000 | 
| 8 | 112100,0000 |
| ..... | ...... |
[/slide]

[slide hideTitle]

# The MAX() Function

The `MAX()` function will take the maximum value from a column.

[image assetsSrc="Built-in-Functions-Data-Aggregations(2).png" /]

``` java
SELECT e.`department_id`, MAX(e.`salary`) AS 'MaxSalary'
FROM `employees` AS e 
GROUP BY e.`department_id`; 
```

**Output**:

| department_id | Max_salary |
| --- | --- |
| 1 | 63500,0000 |
| 2 | 29800,0000 |
| 3 | 72100,0000 |
| 4 | 14400,0000 |
| 5 | 37500,0000 |
| 6 | 50500,0000 |
| 7 | 84100,0000 | 
| 8 | 24500,0000 |
| ..... | ...... |


[/slide]

[slide hideTitle]

# The MIN() Function

The `MIN()` function will take the minimum value from a column.

[image assetsSrc="Built-in-Functions-Data-Aggregations(3).png" /]

``` java
SELECT e.`department_id`, MIN(e.`salary`) AS 'MinSalary'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

**Output**:

| department_id | Min_salary |
| --- | --- |
| 1 | 32700,0000 |
| 2 | 25000,0000 |
| 3 | 23100,0000 |
| 4 | 13500,0000 |
| 5 | 12800,0000 |
| 6 | 40900,0000 |
| 7 | 9500,0000 | 
| 8 | 16000,0000 |
| ..... | ...... |

[/slide]

[slide hideTitle]

# The AVG() Function

The `AVG()` function will calculate the average value in a column.

[image assetsSrc="Built-in-Functions-Data-Aggregations(4).png" /]

``` java
SELECT e.`department_id`, AVG(e.`salary`) AS 'AvgSalary'
FROM `employees` AS e
GROUP BY e.`department_id`;
```

**Output:**

| department_id | Average_Salary |
| --- | --- |
| 1 | 40166,66666667 |
| 2 | 27150,00000000 |
| 3 | 29988,88888889 |
| 4 | 14062,50000000 |
| 5 | 18983,33333333 |
| 6 | 45542,85714286 |
| 7 | 14162,56983240| 
| 8 | 18683,33333333 |
| ..... | ...... |


[/slide]

