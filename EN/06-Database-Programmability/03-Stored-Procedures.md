[slide hideTitle]

# Stored Procedures

Stored procedures, also refered to as just "**Procedure**", is a custom logic that is removed from the application server and set to the database server.

Procedures are a useful tool that bring many benefits to our applications.
	- The main reason behind that is because they are reducing the network traffic
	- It improves the security of the database server
	- You can run them on any platform that runs MySQL, which makes them portable
	- It creates a component from the data access routines, separating it from the business logic
	- You can access procedures through different programs and APIs.

When to use **procedures**: 

If you have repatative task like looping, multiple statements and no user interaction do it with a single call of a stored procedure or the database server.

[/slide]

[slide hideTitle]

# Creating Stored Procedure

Now let's see how you can create one: 

```java
DELIMITER $$
CREATE PROCEDURE usp_select_employees_by_seniority()            // The name of the stored procedure
BEGIN
  SELECT * 
  FROM employees                                                // The logic of the stored procedure
  WHERE ROUND((DATEDIFF(NOW(), hire_date) / 365.25)) < 15;
END $$

CALL usp_select_employees_by_seniority();                       // The calling of a procedure

DROP PROCEDURE usp_select_employees_by_seniority;               // Deleting the procedure

CREATE PROCEDURE usp_procedure_name                             // Creating a parameterized procedure
(parameter_1_name parameter_type,
parameter_2_name parameter_type,…)
```

[/slide]

[slide hideTitle]

# Defining Parameterized Procedure

Example of parameterized procedure:

```java
DELIMITER $$
CREATE PROCEDURE usp_select_employees_by_seniority(min_years_at_work INT)               // Defining the name of the procedure and its parameters.
BEGIN
  SELECT first_name, last_name, hire_date,
    ROUND(DATEDIFF(NOW(),DATE(hire_date)) / 365.25,0) AS 'years'
  FROM employees
  WHERE ROUND(DATEDIFF(NOW(),DATE(hire_date)) / 365.25,0) > min_years_at_work           // Usage of parameters in the logic
  ORDER BY hire_date;
END $$
CALL usp_select_employees_by_seniority(15);
```

[/slide]

[slide hideTitle]

# Returning Values Using Output Parameters

You can also return values with a stored procedure.
```java
CREATE PROCEDURE usp_add_numbers
(first_number INT
second_number INT,
   OUT result INT)
BEGIN
   SET result = first_number + second_number;
END $$
DELIMITER ;
SET @answer=0;
CALL usp_add_numbers(5, 6,@answer);
SELECT @answer;
```
[/slide]

[slide hideTitle]
# Problem with Solution: Employees Promotion
[code-task title="Employees Promotion" taskId="java-db-and-mysql-database-programmability-employees-promotion" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description
Create a stored procedure called **usp_raise_salaries(department_name)** that raises the **salary** of all employees in the given department as parameter by 5%. 

## Examples
| **first_name** | **salary** |
| --- | --- |
| Barbara | 27 720.00 |
| Bryan | 19 950.00 |
| Candy | 19 950.00 |
| … | … |
|  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Barbara
27720.0000
Bryan
19950.0000
Candy
19950.0000
[/input]
[output]
Barbara
27720.0000
Bryan
19950.0000
Candy
19950.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
