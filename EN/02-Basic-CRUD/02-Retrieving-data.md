[slide hideTitle]

# Retrieving Data

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/java-database-and-mysql-basic-crud-6-7-retrieving-data-and-sql-select-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Retrieving data is one of the most common operations you can perform when working with databases.

It is the action of pulling data from our database based on specific criteria.

There are several ways to do it:

- **Retrieving all available information from a table**

``` java
SELECT * FROM `students`;
```

- **Retrieving only the columns you need**

``` java
SELECT `full_name`, `course`, `grade` FROM `students`; 
```

When retrieving data this way, the resulting dataset is called a projection. 

We take only data that we need, which optimizes our query.

- **Retrieving a subset of rows**

``` java
SELECT `full_name`, `grade`                  
FROM `students`                              
WHERE `courseName` = "Java Advanced";
```

This operation will not boost the performance, as the database has to iterate through all the records to find the one that meets the requirements.

But it will find you only the records that you need based on the condition after the `WHERE` keyword.

- **Joining tables**

``` java
SELECT `course_name`, `course_schedule`, `teacher_full_name`  
FROM `Orders`                                                  
INNER JOIN `Customers` ON `Courses`.teacherId=Teachers.id;          
```

[image assetsSrc="Retrieving-data(3).png" /]

We will learn how to do this in the next lesson. For now, just note that there is a way to display **related** data from two separate tables.

[/slide]

[slide hideTitle]

# Problem with Solution: Select Employee Information

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/problem-and-solution-select-employee-information-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Select Employee Information" taskId="java-db-and-MySQL-basic-crud-select-employee-information" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here

```
[/code-editor]

[task-description]
# Description

Familiarize yourself with the **Hotel Database**.

Write a query to select all employees and retrieve information about their **id**, **first_name**, **last_name**, and **job_title** ordered by **id**.

## Example

| **id** | **first_name** | **last_name** | **job_title** | 
| --- | --- | --- | --- |
| 1 | John | Smith | Manager |
| 2 | John | Johnson | Customer Service |
| 3 | Samuel | Bridges | Porter |
| ...  | ... | ...  | ... |


[/task-description]
[code-io /]
[tests]
[test]
[input]
CREATE TABLE departments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO departments(name) VALUES('Front Office'), ('Support'), ('Kitchen'), ('Other');

CREATE TABLE employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	job_title VARCHAR(50) NOT NULL,
	department_id INT NOT NULL,
	salary DOUBLE NOT NULL,
	CONSTRAINT `fk_department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
);
INSERT INTO `employees` (`first_name`,`last_name`, `job_title`,`department_id`,`salary`) VALUES
	('John', 'Smith', 'Manager',1, 900.00),
	('John', 'Johnson', 'Customer Service',2, 880.00),
	('Samuel', 'Bridges', 'Porter', 4, 1100.00),
	('Carl', 'Reeves', 'Front Desk Clerk', 1, 1100.00),
	('Stanley', 'Gibbs', 'Sales', 2, 1500.23),
	('Edwin' ,'Young', 'Waiter', 3, 990.00),
	('Alexander', 'Garner', 'Executive Chef', 3, 1800.00),
	('Maxwell', 'Pearson', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
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
Samuel
Bridges
Porter
4
Carl
Reeves
Front Desk Clerk
5
Stanley
Gibbs
Sales
6
Edwin
Young
Waiter
7
Alexander
Garner
Executive Chef
8
Maxwell
Pearson
Front Desk Supervisor
9
Eileen
Clayton
Housekeeping
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Concatenation

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/problem-and-solution-select-employees-with-a-filter-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## concat_ws()

We use the `concat()` method to **concatenate** the input arguments into a single string output:

```java
SELECT CONCAT(`name`, ' is a ', `breed`) AS 'introduction',
FROM dogs;
```

## concat_ws()

`concat_ws` is a function that concatenates two or more columns using a specified separator.

```java
SELECT concat_ws(' ', `first_name`, `last_name`) AS 'full_name'      
FROM people
WHERE city = 'London' AND 'Paris';                
```

It has the following syntax - `CONCAT_WS (separator, argument1, argument2, ... )`

Additionally, we are displaying the concatenated information in a column called `full_name`.

[/slide]

[slide hideTitle]
# Problem with Solution: Select Employees with Filter

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/problem-and-solution-select-employees-with-a-filter-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Select Employees with Filter" taskId="java-db-and-MySQL-basic-crud-select-employee-info-filter" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here

```
[/code-editor]

[task-description]
# Description

Use the database that is called "**Hotel Database**".

Write a query to select all employees (**id**, **first_name**, **last_name**, **job_title**, and **salary**) whose salaries are **higher than 1000**. 

Order the results by **id**. Concatenate the **first_name** and **last_name** fields into a column called **full_name**.

## Example

| **id** | **full_name** | **job_title** | **salary** | 
| --- | --- | --- | --- |
| 3 | Samuuel Bridges | Porter | 1100 |
| 4 | Carl Reeves | Front Desk Clerk | 1100 |
| 5 | Stanley Gibbs | Sales | 1500.23 |
| ...  | ... | ...  | ... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE departments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO departments(name) VALUES('Front Office'), ('Support'), ('Kitchen'), ('Other');

CREATE TABLE employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	job_title VARCHAR(50) NOT NULL,
	department_id INT NOT NULL,
	salary DOUBLE NOT NULL,
	CONSTRAINT `fk_department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
);

INSERT INTO `employees` (`first_name`,`last_name`, `job_title`,`department_id`,`salary`) VALUES
	('John', 'Smith', 'Manager',1, 900.00),
	('John', 'Johnson', 'Customer Service',2, 880.00),
	('Samuel', 'Bridges', 'Porter', 4, 1100.00),
	('Carl', 'Reeves', 'Front Desk Clerk', 1, 1100.00),
	('Stanley', 'Gibbs', 'Sales', 2, 1500.23),
	('Edwin' ,'Young', 'Waiter', 3, 990.00),
	('Alexander', 'Garner', 'Executive Chef', 3, 1800.00),
	('Maxwell', 'Pearson', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
[/input]
[output]
3
Samuel Bridges
Porter
1100
4
Carl Reeves
Front Desk Clerk
1100
5
Stanley Gibbs
Sales
1500.23
7
Alexander Garner
Executive Chef
1800
8
Maxwell Pearson
Front Desk Supervisor
2100
9
Eileen Clayton
Housekeeping
1600
[/output]
[/test]
[test]
[input]
CREATE TABLE departments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO departments(name) VALUES('Front Office'), ('Support'), ('Kitchen'), ('Other');

CREATE TABLE employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	job_title VARCHAR(50) NOT NULL,
	department_id INT NOT NULL,
	salary DOUBLE NOT NULL,
	CONSTRAINT `fk_department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
);
INSERT INTO `employees` (`first_name`,`last_name`, `job_title`,`department_id`,`salary`) VALUES
	('John', 'Smith', 'Manager',1, 900.00),
	('John', 'Johnson', 'Customer Service',2, 880.00),
	('Samuel', 'Bridges', 'Porter', 4, 1100.00),
	('Carl', 'Reeves', 'Front Desk Clerk', 1, 1100.00),
	('Stanley', 'Gibbs', 'Sales', 2, 1500.23),
	('Edwin' ,'Young', 'Waiter', 3, 990.00),
	('Alexander', 'Garner', 'Executive Chef', 3, 1800.00),
	('Maxwell', 'Pearson', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
[/input]
[output]
3
Samuel Bridges
Porter
1100
4
Carl Reeves
Front Desk Clerk
1100
5
Stanley Gibbs
Sales
1500.23
7
Alexander Garner
Executive Chef
1800
8
Maxwell Pearson
Front Desk Supervisor
2100
9
Eileen Clayton
Housekeeping
1600
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Filtering the Selected Rows

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/java-database-and-mysql-basic-crud-15-filterting-the-selected-rows-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Filtering can be done in **multiple** ways.

## Using `DISTINCT`

You can use the `DISTINCT` keyword to remove any **duplicate** results from the output:

```java
SELECT DISTINCT `class_id`
FROM `students`;
```

## Using `WHERE`

The `WHERE` clause can be used to **filter** rows by one or multiple condition:

```java
SELECT `first_name`, `class_id`
FROM `students`
WHERE `class_id` = 8;
```

## Using Other Logical Operators

You can other **logical operators** for more precise quering:

```java
SELECT `first_name`
FROM `students`
WHERE gpa == 4;
```

[/slide]

[slide hideTitle]

# Other Comparison Conditions

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/java-database-and-mysql-basic-crud-16-other-comparison-conditions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here are some other useful conditions you can specify after the `WHERE` keyword.

``` java
SELECT `first_name`                                        
FROM `students`                                               
WHERE NOT (`course_name` = 'JS Basics' AND 'Java Basics')       
```

This will select all records where `course_name` is **not equal** to the specified values.

This is an alternative to the previous example - `WHERE course_name NOT IN('JS Basics', 'Java Basics')`.

The `NOT` keyword is something you may have already used in your Java projects as the `!` logical NOT operator.

Following the same logic, the `AND` keyword is equal to the `&&` in Java.

```java
SELECT concat_ws(' ', first_name, last_name) AS full_name      
FROM students                                                    
WHERE course_name = 'JS Basics' AND 'Java Basics'                 
```

The equivalent of `OR` in Java is the `||` operator.

The following operators are native only to SQL.

```java
SELECT concat_ws(' ', `first_name`, `last_name`) AS `full_name`     
FROM `students`                                                     
WHERE `age` BETWEEN 14 AND 18                                       
```

The `BETWEEN` operator is used in combination with the `AND` operator to set the boundaries of the filtration we want.

The operator is inclusive, so it is taken into notice both boundaries. 

The values can be numbers, text, or even dates.

```java                                                                   
SELECT *                                                               
FROM `students`                                                          
WHERE `course` IN ('Java Basics', 'Java Fundamentals', 'Java Advanced')  
```

We want to use the `IN` or `NOT IN` operators when we know the exact value we want. 
[/slide]

[slide hideTitle]
# Problem with Solution: Select Employees by Multiple Criteria

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/problem-and-solution-select-employees-by-multiple-criteria-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Select Employees by Multiple Criteria" taskId="java-db-and-MySQL-basic-crud-select-employee-info-filter-multiple" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here

```
[/code-editor]

[task-description]
# Description

Use the database that is called "**Hotel Database**".

Write a query to retrieve information about employees, who are in **department 4** and have a **salary higher than or equal to 1000**. 

Order the information by **id**.

## Example

| **id** | **first_name** | **last_name** | **job_title** | **department_id** | **salary** |
| --- | --- | --- | --- | --- | --- |
| 3 | Samuel | Bridges | Porter | 4 | 1100 |
| 9 | Eileen | Clayton | Housekeeping | 4 | 1600 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE departments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO departments(name) VALUES('Front Office'), ('Support'), ('Kitchen'), ('Other');



CREATE TABLE employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	job_title VARCHAR(50) NOT NULL,
	department_id INT NOT NULL,
	salary DOUBLE NOT NULL,
	CONSTRAINT `fk_department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
);

INSERT INTO `employees` (`first_name`,`last_name`, `job_title`,`department_id`,`salary`) VALUES
	('John', 'Smith', 'Manager',1, 900.00),
	('John', 'Johnson', 'Customer Service',2, 880.00),
	('Samuel', 'Bridges', 'Porter', 4, 1100.00),
	('Carl', 'Reeves', 'Front Desk Clerk', 1, 1100.00),
	('Stanley', 'Gibbs', 'Sales', 2, 1500.23),
	('Edwin' ,'Young', 'Waiter', 3, 990.00),
	('Alexander', 'Garner', 'Executive Chef', 3, 1800.00),
	('Maxwell', 'Pearson', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
[/input]
[output]
3
Samuel
Bridges
Porter
4
1100
9
Eileen
Clayton
Housekeeping
4
1600
[/output]
[/test]
[test]
[input]
CREATE TABLE departments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO departments(name) VALUES('Front Office'), ('Support'), ('Kitchen'), ('Other');



CREATE TABLE employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	job_title VARCHAR(50) NOT NULL,
	department_id INT NOT NULL,
	salary DOUBLE NOT NULL,
	CONSTRAINT `fk_department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
);

INSERT INTO `employees` (`first_name`,`last_name`, `job_title`,`department_id`,`salary`) VALUES
	('John', 'Smith', 'Manager',1, 900.00),
	('John', 'Johnson', 'Customer Service',2, 880.00),
	('Samuel', 'Bridges', 'Porter', 4, 1100.00),
	('Carl', 'Reeves', 'Front Desk Clerk', 1, 1100.00),
	('Stanley', 'Gibbs', 'Sales', 2, 1500.23),
	('Edwin' ,'Young', 'Waiter', 3, 990.00),
	('Alexander', 'Garner', 'Executive Chef', 3, 1800.00),
	('Maxwell', 'Pearson', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
[/input]
[output]
3
Samuel
Bridges
Porter
4
1100
9
Eileen
Clayton
Housekeeping
4
1600
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Comparison with NULL

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/java-database-and-mysql-basic-crud-18-comparing-with-null-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `NULL` value is often confusing to students, so it is important to understand what it is.

First, you need to understand that `NULL` does not mean **"No value"**.

It conceptually means **"unavailable", "unassigned", "unknown", or "inapplicable"** and is treated somewhat differently from other values.

It is not the same as a zero or a whitespace.

## Arithmetic Comparison and NULL

When using `NULL` with the comparison operators, we should always be careful, as it does not give us the results we expect.

```java
SELECT 1 = NULL, 1 <> NULL, 1 < NULL, 1 > NULL;
+----------+-----------+----------+----------+
| 1 = NULL | 1 <> NULL | 1 < NULL | 1 > NULL |
+----------+-----------+----------+----------+
|     NULL |      NULL |     NULL |     NULL |
+----------+-----------+----------+----------+
```

Any arithmetic comparison with `NULL` always returns the same result. 

## IS NULL / IS NOT NULL

The proper way of checking if the given value of a record is `NULL` is by using the `IS NULL` or `IS NOT NULL` operators. 

All they do is check if the given statement is true or false.

```java
SELECT 'A' IS NULL, 'A' IS NOT NULL
+-----------+---------------+
|'A' IS NULL| 'A' IS NOT NULL|
+-----------+---------------+
|   false   |          true |
+-----------+---------------+
```

Arithmetic division with `NULL` **always** results in `NULL`: 

```java
SELECT 3 - NULL // = NULL 
```

[/slide]

[slide hideTitle]

# Sorting Results

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/java-database-and-mysql-basic-crud-19-sorting-with-order-by-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we finish with selecting and filtering the info, we can sort it in any way we want.

We use the `ORDER BY` clause, which orders the information by a chosen column/s. It is always placed last in the query.

You can use `ASC` (ascending) and `DESC` (descending) to change the order of the results.

By default, everything is ordered in **ascending** order.

```java
SELECT *                              //Here we choose all the information
FROM `students`                      //for the table students
WHERE `age` BETWEEN 14 AND 50         //filtered by where they meet the condition
ORDER BY `age` DESC                   // Ordered by their age descending.
```

We select all the information from the `students` table, retrieve everyone who is between **14** and **50** years old, and **order them by age** in **descending order**.

You can chain `ORDER BY` clauses by declaring the second column by which you want to order them, separating them with a **","** in between just as in the example

```java
SELECT *                
FROM `student`
WHERE `age` BETWEEN 14 AND 50    
ORDER BY `age` DESC, `first_name` 
```

In the example above, the results would be ordered in descending order by `age` and then by the `first_name` in ascending order.

[/slide]

[slide hideTitle]

# Using Views

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/java-database-and-mysql-basic-crud-20-22-views-and-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Views are virtual tables that do not store information by themselves.

They are used when you have a complex query that takes records from a table and you would like to save them for future use.

In other words, **Views** are nothing but **saved SQL queries**.

In the following example, we create a basic view:

```java
CREATE VIEW `StudentsView` AS                             
SELECT `full_name`, `course`, `study_hours`
FROM `students`
```

This is how views can also be used to restrict access to data.

Imagine you are working in an organization where only you are supposed to know the salaries of the other employees, but you want to grant access to someone else who needs to only be able to see contact details.

You could create a view for them and include only the relevant columns.

After that, grant them access only to that view and not to the `employees` table.

This way of access management is quite common in organizations where certain people should have limited access but still be able to access parts of the database.

[/slide]

[slide hideTitle]
# Problem with Solution: Top Paid Employee

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Basic-CRUD/problem-and-solution-top-paid-employee-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Top Paid Employee" taskId="java-db-and-MySQL-basic-crud-top-paid-employee" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here

```
[/code-editor]

[task-description]
# Description

Use the database that is called "**Hotel Database**".

Write a query to **create a view** that selects all information about the **top paid employee** from the **employees** table in the **hotel** database.

## Example

| **id** | **first_name** | **last_name** | **job_title** | **department_id** | **salary** |
| --- | --- | --- | --- | --- | --- |
| 8 | Maxwell | Pearson | Front Desk Supervisor | 1 | 2100 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CREATE TABLE departments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO departments(name) VALUES('Front Office'), ('Support'), ('Kitchen'), ('Other');

CREATE TABLE employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	job_title VARCHAR(50) NOT NULL,
	department_id INT NOT NULL,
	salary DOUBLE NOT NULL,
	CONSTRAINT `fk_department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
);

INSERT INTO `employees` (`first_name`,`last_name`, `job_title`,`department_id`,`salary`) VALUES
	('John', 'Smith', 'Manager',1, 900.00),
	('John', 'Johnson', 'Customer Service',2, 880.00),
	('Samuel', 'Bridges', 'Porter', 4, 1100.00),
	('Carl', 'Reeves', 'Front Desk Clerk', 1, 1100.00),
	('Stanley', 'Gibbs', 'Sales', 2, 1500.23),
	('Edwin' ,'Young', 'Waiter', 3, 990.00),
	('Alexander', 'Garner', 'Executive Chef', 3, 1800.00),
	('Maxwell', 'Pearson', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
[/input]
[output]
8
Maxwell
Pearson
Front Desk Supervisor
1
2100
[/output]
[/test]
[test]
[input]
CREATE TABLE departments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO departments(name) VALUES('Front Office'), ('Support'), ('Kitchen'), ('Other');


CREATE TABLE employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	job_title VARCHAR(50) NOT NULL,
	department_id INT NOT NULL,
	salary DOUBLE NOT NULL,
	CONSTRAINT `fk_department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
);

INSERT INTO `employees` (`first_name`,`last_name`, `job_title`,`department_id`,`salary`) VALUES
	('John', 'Smith', 'Manager',1, 900.00),
	('John', 'Johnson', 'Customer Service',2, 880.00),
	('Samuel', 'Bridges', 'Porter', 4, 1100.00),
	('Carl', 'Reeves', 'Front Desk Clerk', 1, 1100.00),
	('Stanley', 'Gibbs', 'Sales', 2, 1500.23),
	('Edwin' ,'Young', 'Waiter', 3, 990.00),
	('Alexander', 'Garner', 'Executive Chef', 3, 1800.00),
	('Maxwell', 'Pearson', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
[/input]
[output]
8
Maxwell
Pearson
Front Desk Supervisor
1
2100
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
