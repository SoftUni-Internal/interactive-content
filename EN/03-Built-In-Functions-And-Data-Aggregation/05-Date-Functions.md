[slide hideTitle]

# The Date Functions

The **Date** functions can handle date and time data effectively.

- `EXTRACT()` - Extracts a segment from a date passed as argument.

``` java
SELECT EXTRACT(YEAR FROM "1995-11-24"); // It will extract only the year.
```

**Output:**

```
1995
```

- `TIMESTAMPDIFF()` - Extracts the difference between two dates.

``` java
TIMESTAMPDIFF(Part, FirstDate, SecondDate)  // Part can be any part and format of date or time
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

- `DATE_FORMAT()` - Formats the date as specified.

``` java
SELECT DATE_FORMAT('2015/01/16', '%Y %b %D') AS 'Date';
```

**Output**:

```
Date
2015 Jan 16th
```

- `NOW()` - Obtains current date and time.


[/slide]

[slide hideTitle]

# Problem with Solution: Days Lived
[code-task title="Days Lived" taskId="java-db-and-mysql-built-in-functions-and-data-aggregation-days-lived" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
# Description

Create an SQL query to calculate the days that the authors have lived. 

The **NULL** values mean that the author is still alive. 

**Run your query statements & submit the output from the queries as plain text.**

## Example:

| Full Name | Days Lived |
| --- | --- |
| Agatha Christie | 31164 |
| William Shakespeare | 18990 |
| Danielle Schuelein-Steel | NULL |
| .... | .... |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
Agatha Christie
31164
William Shakespeare
18990
Danielle Schuelein-Steel

Joanne Rowling

Lev Tolstoy
30021
Paulo Souza

Stephen King

John Tolkien
29827
Erika Mitchell
[/input]
[output]
Agatha Christie
31164
William Shakespeare
18990
Danielle Schuelein-Steel

Joanne Rowling

Lev Tolstoy
30021
Paulo Souza

Stephen King

John Tolkien
29827
Erika Mitchell
[/output]
[/test]
[test]
[input]
Agatha Christie
31164
William Shakespeare
18990
Danielle Schuelein-Steel 

Joanne Rowling

Lev Tolstoy
30021
Paulo Souza

Stephen King

John Tolkien
29827
Erika Mitchell
[/input]
[output]
Agatha Christie
31164
William Shakespeare
18990
Danielle Schuelein-Steel 

Joanne Rowling

Lev Tolstoy
30021
Paulo Souza

Stephen King

John Tolkien
29827
Erika Mitchell
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
