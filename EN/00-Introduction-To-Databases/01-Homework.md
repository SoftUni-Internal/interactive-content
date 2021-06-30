[slide hideTitle]
# Problem: Find the Names of All Employees

[code-task title="Find the Names of All Employees" taskId="java-db-and-MySQL-basic-crud-find-names-all-employees-2" executionType="tests-execution" executionStrategy="mysql-prepare-db-and-run-queries" requiresInput]
[code-editor language=sql]

```
-- Write your query here

```
[/code-editor]

[task-description]
## Description

Write an SQL query to find the **full name** of all employees **whose salary is 25000, 14000, 12500, or 23600**. 

The **full name** is a **combination of first, middle, and last names** (separated by space). 

Call the resulting column **Full Name**. 



## Example

| Full Name |
| --- |
| Guy R Gilbert | 
| Thierry B D'Hers |
| JoLynn M Dobney  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
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
  UNIQUE KEY `PK_Employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Guy', 'Gilbert', 'R', 'Production Technician', 7, '1998-07-31 00:00:00.000000', 25000.0000, 166),
	(2, 'Kevin', 'Brown', 'F', 'Marketing Assistant', 4, '1999-02-26 00:00:00.000000', 25000.0000, 102),
	(3, 'Roberto', 'Tamburello', 'S', 'Engineering Manager', 12, '1999-12-12 00:00:00.000000', 25000.0000, 193),
	(4, 'Rob', 'Walters', 'G', 'Senior Tool Designer', 2, '2000-01-05 00:00:00.000000', 25000.0000, 155),
	(5, 'Thierry', 'D''Hers', 'B', 'Tool Designer', 2, '2000-01-11 00:00:00.000000', 25000.0000, 40);
[/input]
[output]
Guy R Gilbert
Kevin F Brown
Roberto S Tamburello
Rob G Walters
Thierry B D'Hers
[/output]
[/test]
[test]
[input]
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
  UNIQUE KEY `PK_Employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Guy', 'Gilbert', 'R', 'Production Technician', 7, '1998-07-31 00:00:00.000000', 25000.0000, 166),
	(2, 'Kevin', 'Brown', 'F', 'Marketing Assistant', 4, '1999-02-26 00:00:00.000000', 25000.0000, 102),
	(3, 'Roberto', 'Tamburello', 'S', 'Engineering Manager', 12, '1999-12-12 00:00:00.000000', 25000.0000, 193),
	(4, 'Rob', 'Walters', 'G', 'Senior Tool Designer', 2, '2000-01-05 00:00:00.000000', 25000.0000, 155),
	(5, 'Thierry', 'D''Hers', 'B', 'Tool Designer', 2, '2000-01-11 00:00:00.000000', 25000.0000, 40);
[/input]
[output]
Guy R Gilbert
Kevin F Brown
Roberto S Tamburello
Rob G Walters
Thierry B D'Hers
[/output]
[/test]
[test]
[input]
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
  UNIQUE KEY `PK_Employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Guy', 'Gilbert', 'R', 'Production Technician', 7, '1998-07-31 00:00:00.000000', 25000.0000, 166),
	(2, 'Kevin', 'Brown', 'F', 'Marketing Assistant', 4, '1999-02-26 00:00:00.000000', 25000.0000, 102),
	(3, 'Roberto', 'Tamburello', 'S', 'Engineering Manager', 12, '1999-12-12 00:00:00.000000', 25000.0000, 193),
	(4, 'Rob', 'Walters', 'G', 'Senior Tool Designer', 2, '2000-01-05 00:00:00.000000', 9999999.0000, 155),
	(5, 'Thierry', 'D''Hers', 'B', 'Tool Designer', 2, '2000-01-11 00:00:00.000000', 8888888.0000, 40);
[/input]
[output]
Guy R Gilbert
Kevin F Brown
Roberto S Tamburello
[/output]
[/test]
[test]
[input]
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
  UNIQUE KEY `PK_Employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Guy', 'Gilbert', 'R', 'Production Technician', 7, '1998-07-31 00:00:00.000000', 25000.0000, 166),
	(2, 'Kevin', 'Brown', 'F', 'Marketing Assistant', 4, '1999-02-26 00:00:00.000000', 25000.0000, 102),
	(3, 'Roberto', 'Tamburello', 'S', 'Engineering Manager', 12, '1999-12-12 00:00:00.000000', 14000.0000, 193),
	(4, 'Rob', 'Walters', 'G', 'Senior Tool Designer', 2, '2000-01-05 00:00:00.000000', 9999999.0000, 155),
	(5, 'Thierry', 'D''Hers', 'B', 'Tool Designer', 2, '2000-01-11 00:00:00.000000', 14000.0000, 40);
[/input]
[output]
Guy R Gilbert
Kevin F Brown
Roberto S Tamburello
Thierry B D'Hers
[/output]
[/test]
[test]
[input]
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
  UNIQUE KEY `PK_Employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Guy', 'Gilbert', 'R', 'Production Technician', 7, '1998-07-31 00:00:00.000000', 25000.0000, 166),
	(2, 'Kevin', 'Brown', 'F', 'Marketing Assistant', 4, '1999-02-26 00:00:00.000000', 12500.0000, 102),
	(3, 'Roberto', 'Tamburello', 'S', 'Engineering Manager', 12, '1999-12-12 00:00:00.000000', 14000.0000, 193),
	(4, 'Rob', 'Walters', 'G', 'Senior Tool Designer', 2, '2000-01-05 00:00:00.000000', 9999999.0000, 155),
	(5, 'Thierry', 'D''Hers', 'B', 'Tool Designer', 2, '2000-01-11 00:00:00.000000', 14000.0000, 40);
[/input]
[output]
Guy R Gilbert
Kevin F Brown
Roberto S Tamburello
Thierry B D'Hers
[/output]
[/test]
[test]
[input]
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
  UNIQUE KEY `PK_Employees` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;


INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `middle_name`, `job_title`, `department_id`, `hire_date`, `salary`, `address_id`) VALUES
	(1, 'Guy', 'Gilbert', 'R', 'Production Technician', 7, '1998-07-31 00:00:00.000000', 25000.0000, 166),
	(2, 'Kevin', 'Brown', 'F', 'Marketing Assistant', 4, '1999-02-26 00:00:00.000000', 12500.0000, 102),
	(3, 'Roberto', 'Tamburello', 'S', 'Engineering Manager', 12, '1999-12-12 00:00:00.000000', 14000.0000, 193),
	(4, 'Rob', 'Walters', 'G', 'Senior Tool Designer', 2, '2000-01-05 00:00:00.000000', 9999999.0000, 155),
	(5, 'Thierry', 'D''Hers', 'B', 'Tool Designer', 2, '2000-01-11 00:00:00.000000', 23600.0000, 40);
[/input]
[output]
Guy R Gilbert
Kevin F Brown
Roberto S Tamburello
Thierry B D'Hers
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
