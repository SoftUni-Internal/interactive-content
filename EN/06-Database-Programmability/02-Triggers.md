[slide hideTitle]

# Triggers

**Triggers** are small named programs in our database, which wait for a given event to occur.

We do not call triggers explicitly, they are attached to our database and called only when a specific event, which is set on trigger creation occurs.

[/slide]

[slide hideTitle]

# MySQL Types of Triggers

These triggers can happen **BEFORE** the **event**.

[image assetsSrc="Database-Programabillity.png" /]

Or **AFTER** the given **event**.

[image assetsSrc="Database-Programabillity(1).png" /]

[/slide]

[slide hideTitle]

# Events

The events that can activate the **triggers** can either be **INSERT**, **UPDATE** or **DELETE** queries.

[image assetsSrc="Database-Programabillity(2).png" /]

The syntax for creation of a trigger would be: 

```java
CREATE TABLE account (          // Here we declare a table account
acct_number INT PRIMARY KEY,    // with sn account_number PK
 totalAmount DECIMAL(10,2));    // and a totalAmount DECIMAL.

CREATE TRIGGER ins_sum BEFORE INSERT ON account     // Here we declare a BEFORE INSERT Trigger on the table account
FOR EACH ROW SET @sum = @sum + NEW.totalAmount;     // and then we set the sum to each rool to be equal to the sum and the new total amount

DROP TRIGGER ins_sum; // The syntax for dropping a trigger
```

[/slide]

[slide hideTitle]
# Problem with Solution: Triggered
[code-task title="Triggered" taskId="java-db-and-mysql-database-programmability-triggered" executionType="tests-execution" executionStrategy="java-code" requiresInput]

[code-editor language=java]
[/code-editor]

[task-description]

## Description
Create a table caled **deleted_employees(employee_id PK, first_name, last_name, middle_name, job_title, deparment_id, salary)** 

that will hold information about the **fired(deleted)** employees from the employees table. 

Add a trigger to the employees table that inserts the corresponding information in **deleted_employees**. 

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
