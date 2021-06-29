# Homework

[slide hideTitle]
# Problem: Employee Summary Fixed Newest 2
[code-task title="Employee Summary" taskId="java-db-and-MySQL-subqueries-and-JOINs-employee-summary" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]
```
-- Write your query here Fixed Newest
```
[/code-editor]
[task-description]
# Description
Write a query that selects the following fields:

- **employee_id**

- **employee_name**

- **manager_name**	

- **department_name**

Show the first **5 employees** (only for employees who have a manager) with their **managers** and the **departments** they are in (show the departments of the **employees**). 

Order by **employee_id**.


## Example

| **employee_id** | **employee_name** |**manager_name** | **department_name** | 
| --- | --- | --- | --- | 
|1|	Guy Gilbert|	Jo Brown|	Production|
|2	|Kevin Brown|	David Bradley	|Marketing|
|...|	...|	...|	...|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
```
# test 1 : SELECT
#                e.employee_id, 
#                concat(e.first_name, ' ', e.last_name) as employee_name, 
#                concat(m.first_name, ' ', m.last_name) as manager_name,
#                d.name as department_name FROM employees AS e
#                INNER JOIN employees AS m ON m.employee_id = e.manager_id
#                INNER JOIN departments AS d ON d.department_id = e.department_id

CREATE TABLE IF NOT EXISTS `addresses` (
  `address_id` int(10) NOT NULL AUTO_INCREMENT,
  `address_text` varchar(100) NOT NULL,
  `town_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  UNIQUE KEY `pk_addresses` (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=292 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `departments` (
  `department_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `manager_id` int(10) NOT NULL,
  PRIMARY KEY (`department_id`),
  UNIQUE KEY `PK_Departments` (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

INSERT INTO `departments` (`department_id`, `name`, `manager_id`) VALUES
	(1, 'Engineering', 12),
	(2, 'Tool Design', 4),
	(3, 'Sales', 273),
	(4, 'Marketing', 46),
	(5, 'Purchasing', 6);

CREATE TABLE IF NOT EXISTS `employees` (
  `employee_id` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `job_title` varchar(50) NOT NULL,
  `department_id` int(10) NOT NULL,
  `manager_id` int(10) DEFAULT NULL,
  `hire_date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `salary` decimal(19,4) NOT NULL,
  `address_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `pk_employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `manager_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Antony', 'Gilbert', 'R', 'Production Technician', 7, null, '2006-07-31 00:00:00.000000', 12500.0000, 166),
	(2, 'Bob', 'Brown', 'F', 'Marketing Assistant', 4, null, '1999-02-26 00:00:00.000000', 13500.0000, 102),
	(3, 'Cidney', 'Andrews', NULL, 'Engineering Manager', 1, 5, '1999-12-12 00:00:00.000000', 43300.0000, 193),
	(4, 'Dadiv', 'Walters', NULL, 'Senior Tool Designer', 2, null, '2000-01-05 00:00:00.000000', 29800.0000, 155),
	(5, 'Fillip', 'D\'Hers', 'B', 'Tool Designer', 2, null, '2000-01-11 00:00:00.000000', 25000.0000, 40);


CREATE TABLE IF NOT EXISTS `employees_projects` (
  `employee_id` int(10) NOT NULL,
  `project_id` int(10) NOT NULL,
  PRIMARY KEY (`employee_id`,`project_id`),
  UNIQUE KEY `pk_employees_projects` (`employee_id`,`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `projects` (
  `project_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text,
  `start_date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `end_date` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`project_id`),
  UNIQUE KEY `pk_projects` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `towns` (
  `town_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`town_id`),
  UNIQUE KEY `pk_towns` (`town_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
```
[/input]
[output]
```
3
Cidney Andrews
Fillip D'Hers
Engineering
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]