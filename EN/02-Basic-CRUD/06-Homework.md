# Homework

[slide hideTitle]
# Part 1 - Queries for the SoftUni Database 

Here is a link to [the resources](ADD_THE_LINK) you will need for solving all the tasks in this Homework assignment.

For part 1 run the provided sql code to create the **soft_uni_crud** database in **MySQL Workbench** before you begin.


[/slide]

[slide hideTitle]
# Problem: Find All Information About Departments 

[code-task title="Find All Information About Departments " taskId="find-info-about-departments" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here

```
[/code-editor]

[task-description]
## Description

Write an SQL query to find **all available information about the departments in the SoftUni database**. 

**Sort the information by id**. 

## Example

| department_id | name | manager_id |
| --- | --- | --- |
| 1 | Engineering | 12 | 
| 2 | Tool Design | 4 | 
| 3 | Sales | 273 | 
| ... | ... | ... | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
```
CREATE TABLE IF NOT EXISTS `departments` (
  `department_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `manager_id` int(10) NOT NULL,
  PRIMARY KEY (`department_id`),
  UNIQUE KEY `PK_Departments` (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `departments` DISABLE KEYS \*/;
INSERT INTO `departments` (`department_id`, `name`, `manager_id`) VALUES
	(1, 'Engineering', 12),
	(2, 'Tool Design', 4),
	(3, 'Sales', 273),
	(4, 'Marketing', 46),
	(5, 'Purchasing', 6),
	(6, 'Research and Development', 42),
	(7, 'Production', 148),
	(8, 'Production Control', 21),
	(9, 'Human Resources', 30),
	(10, 'Finance', 3),
	(11, 'Information Services', 42),
	(12, 'Document Control', 90),
	(13, 'Quality Assurance', 274),
	(14, 'Facilities and Maintenance', 218),
	(15, 'Shipping and Receiving', 85),
	(16, 'Executive', 109);
/\*!40000 ALTER TABLE `departments` ENABLE KEYS \*/;
```
[/input]
[output]
1
Engineering
12
2
Tool Design
4
3
Sales
273
4
Marketing
46
5
Purchasing
6
6
Research and Development
42
7
Production
148
8
Production Control
21
9
Human Resources
30
10
Finance
3
11
Information Services
42
12
Document Control
90
13
Quality Assurance
274
14
Facilities and Maintenance
218
15
Shipping and Receiving
85
16
Executive
109
[/output]
[/test]
[test]
[input]
```
CREATE TABLE IF NOT EXISTS `departments` (
  `department_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `manager_id` int(10) NOT NULL,
  PRIMARY KEY (`department_id`),
  UNIQUE KEY `PK_Departments` (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;


/\*!40000 ALTER TABLE `departments` DISABLE KEYS \*/;
INSERT INTO `departments` (`department_id`, `name`, `manager_id`) VALUES
	(1, 'Engineering', 12),
	(2, 'Tool Design', 4),
	(3, 'Sales', 273),
	(4, 'Marketing', 46),
	(5, 'Purchasing', 6),
	(6, 'Research and Development', 42),
	(7, 'Production', 148),
	(8, 'Production Control', 21),
	(9, 'Human Resources', 30),
	(10, 'Finance', 3),
	(11, 'Information Services', 42),
	(12, 'Document Control', 90),
	(13, 'Quality Assurance', 274),
	(14, 'Facilities and Maintenance', 218),
	(15, 'Shipping and Receiving', 85),
	(16, 'Executive', 109);
/\*!40000 ALTER TABLE `departments` ENABLE KEYS \*/;
```
[/input]
[output]
1
Engineering
12
2
Tool Design
4
3
Sales
273
4
Marketing
46
5
Purchasing
6
6
Research and Development
42
7
Production
148
8
Production Control
21
9
Human Resources
30
10
Finance
3
11
Information Services
42
12
Document Control
90
13
Quality Assurance
274
14
Facilities and Maintenance
218
15
Shipping and Receiving
85
16
Executive
109
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[/slide]

[slide hideTitle]

# Problem: Find all Department Names

[code-task title="Find all Department Names" taskId="find-all-department-names" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]

```
-- Write your query here

```
[/code-editor]

[task-description]
## Description

Write an SQL query to find **all department names**. **Sort** the information **by id**. 

## Example

| name |
| --- |
| Engineering |
| Tool Design | 
| Sales |
| ... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
```
CREATE TABLE IF NOT EXISTS `departments` (
  `department_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `manager_id` int(10) NOT NULL,
  PRIMARY KEY (`department_id`),
  UNIQUE KEY `PK_Departments` (`department_id`),
  KEY `fk_departments_employees` (`manager_id`),
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;


/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` (`department_id`, `name`, `manager_id`) VALUES
	(1, 'Engineering', 12),
	(2, 'Tool Design', 4),
	(3, 'Sales', 273),
	(4, 'Marketing', 46),
	(5, 'Purchasing', 6),
	(6, 'Research and Development', 42),
	(7, 'Production', 148),
	(8, 'Production Control', 21),
	(9, 'Human Resources', 30),
	(10, 'Finance', 3),
	(11, 'Information Services', 42),
	(12, 'Document Control', 90),
	(13, 'Quality Assurance', 274),
	(14, 'Facilities and Maintenance', 218),
	(15, 'Shipping and Receiving', 85),
	(16, 'Executive', 109);
```
[/input]
[output]
Engineering
Tool Design
Sales
Marketing
Purchasing
Research and Development
Production
Production Control
Human Resources
Finance
Information Services
Document Control
Quality Assurance
Facilities and Maintenance
Shipping and Receiving
Executive
[/output]
[/test]
[test]
[input]
```
CREATE TABLE IF NOT EXISTS `departments` (
  `department_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `manager_id` int(10) NOT NULL,
  PRIMARY KEY (`department_id`),
  UNIQUE KEY `PK_Departments` (`department_id`),
  KEY `fk_departments_employees` (`manager_id`),
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;


/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` (`department_id`, `name`, `manager_id`) VALUES
	(1, 'Engineering', 12),
	(2, 'Tool Design', 4),
	(3, 'Sales', 273),
	(4, 'Marketing', 46),
	(5, 'Purchasing', 6),
	(6, 'Research and Development', 42),
	(7, 'Production', 148),
	(8, 'Production Control', 21),
	(9, 'Human Resources', 30),
	(10, 'Finance', 3),
	(11, 'Information Services', 42),
	(12, 'Document Control', 90),
	(13, 'Quality Assurance', 274),
	(14, 'Facilities and Maintenance', 218),
	(15, 'Shipping and Receiving', 85),
	(16, 'Executive', 109);
```
[/input]
[output]
Engineering
Tool Design
Sales
Marketing
Purchasing
Research and Development
Production
Production Control
Human Resources
Finance
Information Services
Document Control
Quality Assurance
Facilities and Maintenance
Shipping and Receiving
Executive
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Find Salary of Each Employee 

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Find Full Name of Each Employee 

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Find Email Address of Each Employee 

TODO: Generate tasks

[/slide]

[slide hideTitle]
# Problem: Find All Different Employee's Salaries 

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Find Names of All Employees  

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Find All Employees with salary More Than 50000 

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Find All Employees Except Marketing 

TODO: Generate tasks

[/slide]

[slide hideTitle]
# Problem: Sort Employees Table 

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Create View Employees with Salaries 

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Create View Employees with Job Titles

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Distinct Job Titles 

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Find First 10 Started Projects

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Last 7 Hired Employees 

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Increase Salaries

TODO: Generate tasks

[/slide]

[slide hideTitle]
# Problem: All Mountain Peaks 
TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: Countries and Currency (Euro / Not Euro) 

TODO: Generate tasks

[/slide]


[slide hideTitle]
# Problem: All Diablo Characters 

TODO: Generate tasks

[/slide]
