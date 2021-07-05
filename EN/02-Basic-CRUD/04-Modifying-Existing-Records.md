[slide hideTitle]

# Updating data

Persisting our records in the database is the first step but we will often need to modify existing data.

This can be done with the keyword **UPDATE**. 

```java
UPDATE `students`                                               
SET `age` = 14                                               
WHERE `first_name` = 'Mary' AND `last_name` = 'Johnson';
```
We choose the column or columns we want to change with the **SET** keyword.

Make sure you do not forget to filter the records you want to change otherwise the **UPDATE** operation will change the whole table.

[/slide]

[slide hideTitle]
# Problem with Solution: Update Employees' Salary

[code-task title="Update Employees' Salary" taskId="java-db-and-MySQL-basic-crud-update-employees-salary" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here

```
[/code-editor]

[task-description]
# Description

Update the salary of all employees whose **job_title** is "**Manager**", **increasing it by 100**.

Retrieve information about all the salaries from the employees table.

**Hint**: Running this query in MySQL Workbench might produce the following error - Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.

You can solve it by disabling safe mode and trying to run the query again.

To disable safe mode, execute the following query:

```sql
SET SQL_SAFE_UPDATES = 0
```

## Example

| **salary** |
| --- |
| 1000 | 
| 880 | 
| 1100 | 
| 1100 | 
| 1500.23 | 
| ... | 


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
	('Jack', 'Jackson', 'Executive Chef', 3, 1800.00),
	('Maxwell', 'Pearson', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
[/input]
[output]
1000
880
1100
1100
1500.23
990
1800
2100
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
	('Jack', 'Jackson', 'Executive Chef', 3, 1800.00),
	('Maxwell', 'Pearson', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
[/input]
[output]
1000
880
1100
1100
1500.23
990
1800
2100
1600
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Deleting Data

Keeping our data in check and removing the records we don't need anymore is as important as persisting our records. 

You can delete specific rows:

```java
DELETE FROM `employees`      
WHERE `employee_id` = 1;    
```

As well as in the **UPDATE** action, you should not forget to add a **WHERE** clause to filter and **DELETE** only the results you want. 

Be careful, the **DELETE** is permanent unless you have a back-up of your database.

You can also delete all records from a given table by using the **TRUNCATE** keyword (it works faster than **DELETE**).

```java
TRUNCATE TABLE `users`;   
```

[/slide]

[slide hideTitle]
# Problem with Solution: Delete from Table

[code-task title="Delete from Table" taskId="java-db-and-MySQL-basic-crud-delete-from-table" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here

```
[/code-editor]


[task-description]
# Description

Write a query that **deletes all employees who are in departments 1 or 2** from the **employees** table. Then select all the records from the **employees** table and **order the results by id**.

## Example

| id | first_name | last_name | job_title | department_id | salary |
| --- | --- | --- | --- | --- | --- |
| 3 | Samuel | Bridges | Porter | 4 | 1100 |
| 6 | Edwin | Young | Waiter | 3 | 990 |
| 7 | Alexander | Garner | Executive Chef | 3 | 1800 |
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
	('Peter', 'Petrov', 'Front Desk Clerk', 1, 1100.00),
	('Peter', 'Ivanov', 'Sales', 2, 1500.23),
	('Edwin' ,'Young', 'Waiter', 3, 990.00),
	('Alexander', 'Garner', 'Executive Chef', 3, 1800.00),
	('Pedro', 'Petrov', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
[/input]
[output]
3
Samuel
Bridges
Porter
4
1100
6
Edwin
Young
Waiter
3
990
7
Alexander
Garner
Executive Chef
3
1800
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
	('Peter', 'Petrov', 'Front Desk Clerk', 1, 1100.00),
	('Peter', 'Ivanov', 'Sales', 2, 1500.23),
	('Edwin' ,'Young', 'Waiter', 3, 990.00),
	('Alexander', 'Garner', 'Executive Chef', 3, 1800.00),
	('Pedro', 'Petrov', 'Front Desk Supervisor', 1, 2100.00),
	('Eileen', 'Clayton', 'Housekeeping', 4, 1600.00);
[/input]
[output]
3
Samuel
Bridges
Porter
4
1100
6
Edwin
Young
Waiter
3
990
7
Alexander
Garner
Executive Chef
3
1800
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
