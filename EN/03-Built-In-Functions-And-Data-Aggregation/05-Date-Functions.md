[slide hideTitle]

# The Date Functions

The **Date** functions are used to handle date and time data effectively.

## EXTRACT()

The `EXTRACT()` function extracts a segment from a date passed as argument.

``` java
SELECT EXTRACT(YEAR FROM "1995-11-24"); 
```

In this case, the function will extract only the year from `1995-11-24`.

**Output:**

```
1995
```

## TIMESTAMPDIFF()

`TIMESTAMPDIFF()` extracts the difference between two dates.

``` java
TIMESTAMPDIFF(Part, FirstDate, SecondDate)  
```

**Part** can be any part and format of a date or time.

Let us see a simple query example using our **soft_uni** database:

``` java
SELECT `employee_id`, `first_name`, `last_name`,
       TIMESTAMPDIFF(year, `hire_date`, '2017-05-31')
    AS 'Years In Service'
  FROM `employees`;
```

The **resulting table** will look as follows:

| employee_id | first_name | last_name | Years In Service |
| --- | --- | --- | --- |
| 1 | Guy | Gilbert | 18 |
| 2 | Kevin | Brown | 18 |
| 3 | Roberto | Tamburello | 17 |
| 4 | Rob | Walters | 17 |
| ... | ... | ... | ... |

## DATE_FORMAT()

The `DATE_FORMAT()` function formats the date as specified.

``` java
SELECT DATE_FORMAT('2015/01/16', '%Y %b %D') AS 'Date';
```

**Output**:

```
Date
2015 Jan 16th
```

## NOW()

`NOW()` obtains the **current** date and time.

```java
SELECT NOW();
```


[/slide]

[slide hideTitle]

# Problem with Solution: Days Lived - TODO: Add Tests

Create an SQL query to calculate the days that the authors have lived. 

The **NULL** values mean that the author is still alive. 

**Run your query statements & submit the output from the queries as plain text.**

## Example

| Full Name | Days Lived |
| --- | --- |
| Agatha Christie | 31164 |
| William Shakespeare | 18990 |
| Danielle Schuelein-Steel | NULL |
| .... | .... |

[/slide]
