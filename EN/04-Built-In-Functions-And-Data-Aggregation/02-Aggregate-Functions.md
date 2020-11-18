[slide]

In this chapter, we will examine the **aggregate** functions.

An aggregate function is used to performs a calculations on multiple values, then returning a single value.

We have 5 main functions:

- COUNT

- SUM

- AVG

- MIN

- MAX

This type of functions allows us to build **summarized** data information from our database.

**For this examples, we will use our soft_uni database.**

Usually **aggregate** functiions ignore **NULL** values.

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

# COUNT

We use `COUNT()` function when we need to count values (**not nulls**) in one or more columns based on grouping criteria.

[image assetsSrc="Built-in-Functions-Data-Aggregations.png" /]

[/slide]