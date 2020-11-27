[slide]

# Stored Procedures

Stored procedures, also refered to as just "**Procedure**" is custom logic, removed from the application's server and set to live on the database server.

Procedures are pretty usefull tool in our arsenal as it brings many benefits to our applications.

- The are fast, the main reason behind that is because they are reducing the network traffic, if that's not enough MySQL also caches, just like prepared statements.

- It improves the security of the database server.

- You can run them on any platform that runs MySQL, which makes them portable.

- It creates a component from the data access routines, separating it from the business logic.

- You can access procedures through different programs and API's.

When to use it: 

If you have repatative task like looping, multiple statements and no user interaction do it with a single call of a stored procedure or the database server.

Now let's see how you can create one: 

```java
DELIMITER $$
CREATE PROCEDURE usp_select_employees_by_seniority()            //The stored procedure name.
BEGIN
  SELECT * 
  FROM employees                                                //Logic...
  WHERE ROUND((DATEDIFF(NOW(), hire_date) / 365.25)) < 15;
END $$

CALL usp_select_employees_by_seniority();                       //Call of a procedure.

DROP PROCEDURE usp_select_employees_by_seniority;               //Delete procedure.

CREATE PROCEDURE usp_procedure_name                             //Creating parameterized procedure.
(parameter_1_name parameter_type,
parameter_2_name parameter_type,…)
```

Example of parameterized procedure.
```java
DELIMITER $$
CREATE PROCEDURE usp_select_employees_by_seniority(min_years_at_work INT)               //Defining procedure's name and it's parameters.
BEGIN
  SELECT first_name, last_name, hire_date,
    ROUND(DATEDIFF(NOW(),DATE(hire_date)) / 365.25,0) AS 'years'
  FROM employees
  WHERE ROUND(DATEDIFF(NOW(),DATE(hire_date)) / 365.25,0) > min_years_at_work           //usage of parameters in the logic
  ORDER BY hire_date;
END $$
CALL usp_select_employees_by_seniority(15);
```

You can also return values with a stored procedure.
```java
CREATE PROCEDURE usp_add_numbers                    //name
(first_number INT,                                  //first parameter
second_number INT,                                  //second parameter
   OUT result INT)                                  //result + type
BEGIN
   SET result = first_number + second_number;       //Logic...
END $$
DELIMITER ;
SET @answer=0;
CALL usp_add_numbers(5, 6,@answer);
SELECT @answer;
```
[/slide]

[slide hideTitle]
# Problem: Employees Promotion
[code-task title="Problem: Employees Promotion" taskId="0a11a7ac-ac23-47d0-a8db-7227aaad029e" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a stored procedure **usp_raise_salaries(department_name)** to raise the **salary** of all employees in given department as parameter by 5%. 

Submit your queries using the "**MySQL Run Skeleton, run queries and check DB**" strategy. 
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
call usp_raise_salaries("Finance");
select first_name, salary from employees where department_id = 10 order by first_name,salary limit 3;
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
[test]
[input]
call usp_raise_salaries("Engineering");
select first_name, salary from employees where department_id = 1
order by first_name,salary limit 3;
[/input]
[output]
Gail
34335.0000
Jossef
34335.0000
Michael
37905.0000
[/output]
[/test]
[test]
[input]
call usp_raise_salaries("Production");
select first_name, salary from employees where department_id = 7 order by first_name,salary limit 3;
[/input]
[output]
Alejandro
15750.0000
Alex
10500.0000
Alice
11550.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Employees Promotion

[/slide]

[slide hideTitle]
# Problem: Employees Promotion by ID
[code-task title="Problem: Employees Promotion by ID" taskId="b3c583b8-f4ce-48ca-8512-d217ba257df0" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a stored procedure **usp_raise_salary_by_id(id)** that raises a given employee's **salary** (**by id as parameter**) by 5%. 

Consider that you cannot promote an employee that **doesn't exist** – if that happens, no changes to the database should be made. 

Submit your queries using the "**MySQL Run Skeleton, run queries and check DB**" strategy. 

## Examples
| **salary** |
| --- |
| 27720.0000 |
|  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
call usp_raise_salary_by_id(178);
select salary from employees as e where e.employee_id = 178;
[/input]
[output]
27720.0000
[/output]
[/test]
[test]
[input]
call usp_raise_salary_by_id(216);
select salary from employees as e where e.employee_id = 216;
[/input]
[output]
27720.0000
[/output]
[/test]
[test]
[input]
call usp_raise_salary_by_id(66);
select salary from employees as e where e.employee_id = 66;
[/input]
[output]
28770.0000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Employees Promotion by ID

[/slide]