[slide]

# Date Functions

**Date type** functions can handle date and time data effectively.

Let's take a look at some built-in functions that SQL provides for us:

- `EXTRACT()` - Function that extract a segment from a date passed as argument.

``` java
SELECT EXTRACT(YEAR FROM "1995-11-24"); // It will extract only the year.
```

**Output:**

```
1995
```

- `TIMESTAMPDIFF()` - Extract the difference between two dates.

``` java
TIMESTAMPDIFF(Part, FirstDate, SecondDate) // Part can be any part and format of date or time
```

Let's see a simple query example using our **soft_uni** database:

``` java
SELECT `employee_id`, `first_name`, `last_name`,
       TIMESTAMPDIFF(year, `hire_date`, '2017-05-31')
    AS 'Years In Service'
  FROM `employees`;
```

The **Output** will be:

| employee_id | first_name | last_name | Years In Service |
| --- | --- | --- | --- |
| 1 | Guy | Gilbert | 18 |
| 2 | Kevin | Brown | 18 |
| 3 | Roberto | Tamburello | 17 |
| 4 | Rob | Walters | 17 |
| ... | ... | ... | ... |


[/slide]