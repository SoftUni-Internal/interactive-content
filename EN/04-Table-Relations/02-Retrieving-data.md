[slide hideTitle]

# Retrieving Data

Let us have a look over one of the most common (if not the most) operations when we are talking about databases.

Retrieving data is the action where we demand records from our tables, through the keyword **SELECT**, which further gives us several possibilities: 

## Retrieve all available information from a table

``` java
SELECT * FROM students; // Gives us back all available records, with all available columns from the table "students".
```

[image assetsSrc="Retrieving-data.png" /]

##  Make a projection of a table

``` java
SELECT full_name, course, grade FROM students; //Makes a "projection" giving us only the information we need (full_name, course, grade). 
```

[image assetsSrc="Retrieving-data(1).png" /]

**Keynote** - when we make a projection, we take only data that we need, which optimizes our query and makes less traffic to the database.

## Make a filtration/take a subset of desired rows

``` java
SELECT `full_name`, `grade`                   // Makes a filtration, taking only the subset of records
FROM `students`                               // that meet our requirement of courseName.
WHERE courseName = "Java Advanced";
```


[image assetsSrc="Retrieving-data(2).png" /]

**Keynote** - This operation will not boost the performance, as the database has to iterate through all the records to find the one that meets the requirements, but it will find you only the records that you need.


## Combining tables

``` java
SELECT `course_name`, `course_schedule`, `teacher_full_name`    //Here we can choose information from
FROM `Orders`                                                   //two tables by using JOIN to join them
INNER JOIN Customers ON Courses.teacherId=Teachers.id;          //by two equal rows
```

[image assetsSrc="Retrieving-data(3).png" /]

Although we show you how **JOIN** works, we are not going to talk about it in this lecture, as you will have it in a further lesson.

[/slide]

[slide hideTitle]
# Problem: Select Employee Information
[code-task title="Problem: Select Employee Information" taskId="f7dc4efe-897c-4add-b40f-5982805687ab" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/03.MySQL-Basic-CRUD-Databases-Lab.zip) **for this task.**

Download and get familiar with the **hotel** database schemas and tables. 

You will use it in the following exercises to write queries.

Write a query to select all employees and retrieve information about their **id, first_name, last_name, and job_title ordered by id.**

**Run your query statements & submit the output from the queries as plain text.**


## Examples
| **id** | **first_name** | **last_name** | *job_title* | 
| --- | --- | --- | ---|
| 1  | John | Smith | Manager |
| 2  | John | Johnson | Customer Service |
| 3  | Smith | Johnson | Porter |
| … | … | … | … |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1
John
Smith
Manager
2
John
Johnson
Customer Service
3
Smith
Johnson
Porter
4
Peter
Petrov
Front Desk Clerk
5
Peter
Ivanov
Sales
6
Ivan
Petrov
Waiter
7
Jack
Jackson
Executive Chef
8
Pedro
Petrov
Front Desk Supervisor
9
Nikolay
Ivanov
Housekeeping
[/input]
[output]
1
John
Smith
Manager
2
John
Johnson
Customer Service
3
Smith
Johnson
Porter
4
Peter
Petrov
Front Desk Clerk
5
Peter
Ivanov
Sales
6
Ivan
Petrov
Waiter
7
Jack
Jackson
Executive Chef
8
Pedro
Petrov
Front Desk Supervisor
9
Nikolay
Ivanov
Housekeeping
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Select Employee Information
[/slide]

[slide hideTitle]

# Concatenation of columns

### concat()
As you may already know SQL is not only a tool for storing and retrieving data, but you can also use its built-in functions.

Let's learn one of the basic string functions, **Concatenation**.

```Java
SELECT
     concat(`first_name`,' ',`last_name`) AS 'full_name',    //The function concat is used to combine first_name, ' ' and last_name
    `course` AS  'Course',                                  // to result in a single column combination of them both - full_name.
    `grade` AS 'Grade'                                      //The keyword 'AS' may be used to give a column the desired name.
        FROM students;
```
The function **concat()** accepts columns further combining the values of its record's rows, into a single column.

Let's not forget that:
-> String literals should be enclosed by ['].
-> Table and column names that contain a special symbol should be surrounded by [`].

### concat_ws()

Then we have another function, which is similar to **concat()**

**concat_ws()** is used to join two or more rows, with a separator.

```Java
SELECT
    concat_ws(' ', `first_name`, `last_name`) AS 'full_name',   //Simillary the concat_ws function is used to combine rows, strings into a single column.
    `course` AS 'Course'
    `grade` AS 'Grade'
        FROM students
```
The separator is given as the first value in the argument than you list the rows you want to concatenate,
resulting in a new column combination of both. 


It's **important** to remember that concat_ws() has additional behavior of ignoring the records which have **NULL** value of the given rows.
[/slide]

[slide hideTitle]
# Problem: Select Employees with Filter
[code-task title="Problem: Select Employees with Filter" taskId="d2c5460b-6508-476c-8d95-7d860667c6d3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description
Write a query to select all employees **(id, first_name and last_name (as full_name), job_title, salary)** whose salaries are **higher than 1000.00, ordered by id.**

Concatenate fields **first_name and last_name into 'full_name'.**


**Run your query statements & submit the output from the queries as plain text.**


## Examples
| **id** | **full_name** | **job_title** | **salary** |
| --- | --- | --- | --- |
| 3 | Smith Johnson |  Porter | 1100 |
| 4 | Peter Petrov |  Front Desk Clerk | 1100 |
| 5 | Peter Ivanov |  Sales | 1500.23 |
| … | … |  … | … |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
Smith Johnson
Porter
1100
4
Peter Petrov
Front Desk Clerk
1100
5
Peter Ivanov
Sales
1500.23
7
Jack Jackson
Executive Chef
1800
8
Pedro Petrov
Front Desk Supervisor
2100
9
Nikolay Ivanov
Housekeeping
1600
[/input]
[output]
3
Smith Johnson
Porter
1100
4
Peter Petrov
Front Desk Clerk
1100
5
Peter Ivanov
Sales
1500.23
7
Jack Jackson
Executive Chef
1800
8
Pedro Petrov
Front Desk Supervisor
2100
9
Nikolay Ivanov
Housekeeping
1600
[/output]
[/test]
[test]
[input]
3
Smith Johnson
Porter
1100
4
Peter Petrov
Front Desk Clerk
1100
5
Peter Ivanov
Sales
1500.23
7
Jack Jackson
Executive Chef
1800
8
Pedro Petrov
Front Desk Supervisor
2100
9
Nikolay Ivanov
Housekeeping
1600
[/input]
[output]
3
Smith Johnson
Porter
1100
4
Peter Petrov
Front Desk Clerk
1100
5
Peter Ivanov
Sales
1500.23
7
Jack Jackson
Executive Chef
1800
8
Pedro Petrov
Front Desk Supervisor
2100
9
Nikolay Ivanov
Housekeeping
1600
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Select Employees with Filter
[/slide]

[slide hideTitle]

# Filtering the selected rows
We know how to take the information that we need and present it the way we want.

Let's have a look at how we can filter these results to get only the results that we desire.

There are several ways to achieve that:

### DISTINCT

First of them is the keyword **DISTINCT**


``` java
SELECT DISTINCT `course_name`  //Here we are trying to achieve  a result
FROM students;                 //where we will have only the unique course_names in our table.
```

When we put the keyword **DISTINCT** in action, it eliminates all duplicate results in our table, leaving us only with the unique results of the desired rows in our table.


### WHERE

The second way of filtering the results would be the keyword **WHERE**

``` java
SELECT
    concat_ws(' ', `first_name`, `last_name`) AS 'full_name',   //This query will result
    `course` AS 'Course'                                        //in returning us filtered
    `grade` AS 'Grade'                                          //results, where the renamed 'Course' column
        FROM students                                           //will have the value 'Java Basics'.
    WHERE Course = "Java Basics"
```

You can filter the rows in your table, by using the keyword **WHERE** which will result in returning only the records for which the condition is true.


We can use logical operators <>= in combination with **WHERE** to get better control over the information we want to receive.

```java
SELECT *                             //This query will result in a filtered
FROM `students`                      //collection of records
WHERE `age` >= 14                    //where all of our records will meet the requirements.
AND `course` = "Java Advanced"       //The keyword "AND" is used to combine conditions.
```
[/slide]

[slide hideTitle]

# Other comparison conditions

Few other comparison conditions make our lives easier as developers and make our queries easier to read.

### NOT, OR, AND

``` java
SELECT `first_name`                                             //As we don't want to meet any
FROM `students`                                                 //of the combined with the keyword 'AND' conditions
WHERE NOT (`course_name` = 'JS Basics' AND 'Java Basics')       //we use the keyword 'NOT' to reverse the logic
```

The keyword **NOT** is powerful, but you may have already used in your Java projects as the **operator '!'**.
Following the same logic, the keyword **AND** is equal to the **&& operator** in Java.


Let's have a look over the keyword 'OR'.

```java
SELECT concat_ws(' ', `first_name`, `last_name`) AS `full_name`       //Now we want only the full_name
FROM `students`                                                       //of students
WHERE `course_name` = 'JS Basics' AND 'Java Basics'                   //where their course is either 'JS Basics' or 'Java Basics'
```
The keyword equivalent of **OR** in Java would be **'||' operator**.


Let's have a look over a few operators that are native only to SQL.


### BETWEEN

```java
SELECT concat_ws(' ', `first_name`, `last_name`) AS `full_name`       //Here we want the students names
FROM `students`                                                       //where their age
WHERE `age` BETWEEN 14 AND 18                                         //is between the conditions we set.
```

The **BETWEEN** operator is used in combination with the **AND** operator to set the boundaries of the filtration we want.
The operator is inclusive, so it's taken into notice both boundaries. The values can be numbers, text, or dates.


### IN/NOT IN

```java                                                                   
SELECT *                                                                   //This query aims to return us
FROM `students`                                                            //all the information for students
WHERE `course` IN ('Java Basics', 'Java Fundamentals', 'Java Advanced')    //who's course is in between the values we stated.
```

We want to use **IN/NOT IN** operators when we know the exact value we want, following the same logic we can understand what the **NOT IN** operator does.
[/slide]

[slide hideTitle]
# Problem: Select Employees by Multiple Filters
[code-task title="Select Employees by Multiple Filters" taskId="785e330b-0635-4797-bbe7-30570f6b6938" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description
Write a query to retrieve information about employees, who are in **department 4** and have a salary **higher or equal to 1000**. Order the information by **id**.

**Run your query statements & submit the output from the queries as plain text**


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
Smith
Johnson
Porter
4
1100
9
Nikolay
Ivanov
Housekeeping
4
1600
[/input]
[output]
3
Smith
Johnson
Porter
4
1100
9
Nikolay
Ivanov
Housekeeping
4
1600
[/output]
[/test]
[test]
[input]
3
Smith
Johnson
Porter
4
1100
9
Nikolay
Ivanov
Housekeeping
4
1600
[/input]
[output]
3
Smith
Johnson
Porter
4
1100
9
Nikolay
Ivanov
Housekeeping
4
1600
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Solution: Employees by Multiple Filters
[/slide]

[slide hideTitle]

# Comparison with NULL

One tricky part of SQL is the **NULL** value, it may sometimes surprise you until you finally get the hang of it.

First, we have to understand something, **NULL** does not mean **No value** it conceptually means **unavailable, unassigned, unknown, or inapplicable** and it's treated somewhat differently from other values.

A null is not the same as zero or space. Zero is a number, and space is a character. 

### Arithmetic comparison and NULL

When we are talking about **NULL**, we should always be careful with its behavior when we compare it with **><=**, as it does not give us the results we expect.

```java
SELECT 1 = NULL, 1 <> NULL, 1 < NULL, 1 > NULL;
+----------+-----------+----------+----------+
| 1 = NULL | 1 <> NULL | 1 < NULL | 1 > NULL |
+----------+-----------+----------+----------+
|     NULL |      NULL |     NULL |     NULL |
+----------+-----------+----------+----------+
```

As you may see, any arithmetic comparison with **NULL** always returns the same result **NULL**. We should keep that in mind while we understand what is the proper way of working with **NULL**.


### IS NULL / IS NOT NULL

The proper way of checking if the given value of a record is **NULL** is by using the **IS NULL / IS NOT NULL** operators, they work simply by telling you if the given statement is true or false.

```java
SELECT 'A' IS NULL, 'A' IS NOT NULL
+-----------+---------------+
|'A' IS NULL| 'A' IS NOT NULL|
+-----------+---------------+
|   false   |          true |
+-----------+---------------+
```

Arithmetic divisions with **NULL** should also be taken into notice, if you want to make any arithmetic operation with **NULL** is always equal to **NULL**, for instance: 

```java
SELECT 3 - NULL // = NULL 
```

[/slide]

[slide hideTitle]

# Sorting the results

When we finish with selecting the information we need, filtering it, and before visualizing it the way we want we should consider ordering it the right way.

For this we can use the **ORDER BY** clause, which selects the information and orders it by chosen column or columns, the **ORDER BY** statement should always go last in the query.

Besides, you can use the keywords **ASC** and **DESC** to reverse the order in the results,  by default the **ORDER BY** clause uses **ASC** strategy.

```java
SELECT *                              //Here we choose all the information
FROM `students`                       //for the table students
WHERE `age` BETWEEN 14 AND 50         //filtered by where they meet the condition
ORDER BY `age` DESC                   // Ordered by their age descending.
```

You can chain **ORDER BY** clauses by declaring the second column by which you want to order them, separating them with a **,** in between just as in the example

```java
SELECT *                
FROM `student`
WHERE `age` BETWEEN 14 AND 50    
ORDER BY `age` DESC, `first_name` 
```

[/slide]

[slide hideTitle]

# Usage of Views

Views are virtual tables that do not store information by themselves.

It's used in the cases when you have written a complex query that takes records from a table or many tables and you would like to save for future use or when you want to restrict the access to data for certain users.

In other words **Views** are nothing but **saved SQL queries**.

For example:

```java
CREATE VIEW `Combination of columns AS                             //We declare the creation of view
SELECT `full_name`, `course`, `study_hours`, FROM RandomColumns    //and we set what information we want from a given table
```

[image assetsSrc="Retrieving-data(4).png" /]

[/slide]

[slide hideTitle]
# Problem: Top Paid Employee
[code-task title="Problem: Top Paid Employee" taskId="424cf37e-8a59-4172-bfe3-03948b9c73b5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description

Write a query to create a view that selects all information about the **top paid employee** from the **"employees"** table in the **hotel** database.

**Run your query statements & submit the output from the queries as plain text.**


[/task-description]
[code-io /]
[tests]
[test open]
[input]
8
Pedro
Petrov
Front Desk Supervisor
1
2100
[/input]
[output]
8
Pedro
Petrov
Front Desk Supervisor
1
2100
[/output]
[/test]
[test]
[input]
8
Pedro
Petrov
Front Desk Supervisor
1
2100
[/input]
[output]
8
Pedro
Petrov
Front Desk Supervisor
1
2100
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]


# Solution: Top Paid Employee

[/slide]
