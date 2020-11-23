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

- `DATE_FORMAT()` - Formats the date as specified.

``` java
SELECT DATE_FORMAT('2015/01/16', '%Y %b %D') AS 'Date';
```

**Output:** 

```
Date
2015 Jan 16th
```

- `NOW()` - Obtains current date and time.


[/slide]

[slide hideTitle]

# Problem: Days Lived
[code-task title="Problem: Days Lived" taskId="32ebdcdc-957f-44c0-b255-fbdf9380c92a" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
# Description

Write a SQL query to calculate the days that the authors have lived. 

**NULL** values mean that the author is still alive. 

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

[slide hideTitle]

# Solution: Days Lived
[code-task title="Problem: Days Lived" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
# Description

Write a SQL query to calculate the days that the authors have lived. 

**NULL** values mean that the author is still alive. 

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