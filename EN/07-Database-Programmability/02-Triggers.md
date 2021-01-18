[slide]

# Triggers

Triggers are small named programs in our database, which wait for a given event to occur.

We don't call triggers explicitly, they are attached to our database and called only when a specific event, which is set on trigger creation occurs.

These triggers can happen **BEFORE** the **event**.

[image assetsSrc="Database-Programabillity.png" /]

Or **AFTER** the given **event**.

[image assetsSrc="Database-Programabillity(1).png" /]


The events that can activate the **Triggers** can either be **INSERT**, **UPDATE** or **DELETE** queries.

[image assetsSrc="Database-Programabillity(2).png" /]

The syntax for creation of a trigger would be: 

```java
CREATE TABLE account (          //Here we declare a table acount
acct_number INT PRIMARY KEY,    //with account_number PK
 totalAmount DECIMAL(10,2));    //and totalAmount DECIMAL.

CREATE TRIGGER ins_sum BEFORE INSERT ON account     //Here we declare a BEFORE INSERT Trigger on table account
FOR EACH ROW SET @sum = @sum + NEW.totalAmount;     //and than we totalSum to the balance before and the new sum.

DROP TRIGGER ins_sum; // Drop the trigger
```

[/slide]

[slide hideTitle]
# Problem: Triggered
[code-task title="Problem: Triggered" taskId="80d6dd43-becd-444f-920f-ff91885bbacf" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a table **deleted_employees(employee_id PK, first_name,last_name,middle_name,job_title,deparment_id,salary)** 

that will hold information about **fired(deleted)** employees from the employees table. 

Add a trigger to employees table that inserts the corresponding information in **deleted_employees**. 

Submit your queries using the "**MySQL Run Skeleton, run queries and check DB**" strategy.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
deleted_employees
employee_id
first_name
last_name
middle_name
job_title
department_id
salary
employee_id
1
Mike
Seamans
[/input]
[output]
deleted_employees
employee_id
first_name
last_name
middle_name
job_title
department_id
salary
employee_id
1
Mike
Seamans
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Triggered

## Trigger:
```java
CREATE TABLE deleted_employees(
	employee_id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(20),
	last_name VARCHAR(20),
	middle_name VARCHAR(20),
	job_title VARCHAR(50),
	department_id INT,
	salary DOUBLE 
);


CREATE TRIGGER tr_deleted_employees
AFTER DELETE
ON employees
FOR EACH ROW
BEGIN
	INSERT INTO deleted_employees     (first_name,last_name,middle_name,job_title,department_id,salary)
	VALUES(OLD.first_name,OLD.last_name,OLD.middle_name,OLD.job_title,OLD.department_id,OLD.salary);
END;
);
```
[/slide]
