[slide]
# Modyfing Existing Records

[/slide]

[slide]
# Updating data

Persisting our records in the database is the first step, but we also want to keep this data in up to date, in order to always recieve the results we expect and need.

In help comes the second part of our ancronym CR**UD**.

Updating data is an important part of our work if we want to keep our data relevant.

This can be done with the keyword **UPDATE**. 

```java
UPDATE `students`                                                //On the first line we declare the operation 'UPDATE' and the choosen table
SET `age` = 14                                                   //with the keyword SET we choose the column/columns we want to change
WHERE `first_name` = 'Mary' AND `last_name` = 'Johnson';         //we should not forget to add 'WHERE' clause, otherwise we may change our whole table.
```

Make sure you don't forget to filter the records you want to change otherwise the **UPDATE** operation will change your whole table, without you aiming for that.

[/slide]

[slide hideTitle]
# Problem: Update Employees Salary
[code-task title="Problem: Update Employees Salary" taskId="e8371b74-d484-4bf3-8cf1-45f5f491bc31" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Update all employees' salaries whose **job_title** is **"Manager"** by **adding 100**. 

**Retrieve** information about **salaries** from table **employees**.

**Run your query statements & submit the output from the queries as plain text.**

## Examples


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
	('Smith', 'Johnson', 'Porter', 4, 1100.00),
	('Peter', 'Petrov', 'Front Desk Clerk', 1, 1100.00),
	('Peter', 'Ivanov', 'Sales', 2, 1500.23),
	('Ivan' ,'Petrov', 'Waiter', 3, 990.00),
	('Jack', 'Jackson', 'Executive Chef', 3, 1800.00),
	('Pedro', 'Petrov', 'Front Desk Supervisor', 1, 2100.00),
	('Nikolay', 'Ivanov', 'Housekeeping', 4, 1600.00);
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
	('Smith', 'Johnson', 'Porter', 4, 1100.00),
	('Peter', 'Petrov', 'Front Desk Clerk', 1, 1100.00),
	('Peter', 'Ivanov', 'Sales', 2, 1500.23),
	('Ivan' ,'Petrov', 'Waiter', 3, 990.00),
	('Jack', 'Jackson', 'Executive Chef', 3, 1800.00),
	('Pedro', 'Petrov', 'Front Desk Supervisor', 1, 2100.00),
	('Nikolay', 'Ivanov', 'Housekeeping', 4, 1600.00);
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

[slide]

# Solution: Update Employees Salary

[/slide]

[slide]

# Deleting data

Keeping our data in check and removing the records we don't need anymore is as imporant as persisting our records. 

We should learn how to do it properly as well, lets have a look.

You can delete specific rows from a given table:

```java
DELETE FROM `employees`      //Here we delete from table employees
WHERE `employee_id` = 1;	 //where the condition is true.
```

As well as in the **UPDATE** action, you should not forget to add an **WHERE** clause in order to filter and **DELETE** only the results you want. 

Be carefull, the **DELETE** is pernament and it's only reversable if you have a back-up of your database.

You can also delete all records from a given table by using the keyword **TRUNCATE** (it works faster than **DELETE**).

```java
TRUNCATE TABLE users;    //here we delete the whole information we persisted in the users table.
```

[/slide]

[slide hideTitle]
# Problem: Delete from Table
[code-task title="Problem: Delete from Table" taskId="cf9712a7-79a0-4a93-8fea-ed1ab835ce22" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query to delete all employees from the **"employees"** table who are in **department 2 or 1**.

 Order the information by **id**.

**Run your query statements & submit the output from the queries as plain text.**

## Examples


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
	('Smith', 'Johnson', 'Porter', 4, 1100.00),
	('Peter', 'Petrov', 'Front Desk Clerk', 1, 1100.00),
	('Peter', 'Ivanov', 'Sales', 2, 1500.23),
	('Ivan' ,'Petrov', 'Waiter', 3, 990.00),
	('Jack', 'Jackson', 'Executive Chef', 3, 1800.00),
	('Pedro', 'Petrov', 'Front Desk Supervisor', 1, 2100.00),
	('Nikolay', 'Ivanov', 'Housekeeping', 4, 1600.00);
[/input]
[output]
3
Smith
Johnson
Porter
4
1100
6
Ivan
Petrov
Waiter
3
990
7
Jack
Jackson
Executive Chef
3
1800
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
	('Smith', 'Johnson', 'Porter', 4, 1100.00),
	('Peter', 'Petrov', 'Front Desk Clerk', 1, 1100.00),
	('Peter', 'Ivanov', 'Sales', 2, 1500.23),
	('Ivan' ,'Petrov', 'Waiter', 3, 990.00),
	('Jack', 'Jackson', 'Executive Chef', 3, 1800.00),
	('Pedro', 'Petrov', 'Front Desk Supervisor', 1, 2100.00),
	('Nikolay', 'Ivanov', 'Housekeeping', 4, 1600.00);
[/input]
[output]
3
Smith
Johnson
Porter
4
1100
6
Ivan
Petrov
Waiter
3
990
7
Jack
Jackson
Executive Chef
3
1800
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

[slide]

# Solution: Delete from Table

[/slide]