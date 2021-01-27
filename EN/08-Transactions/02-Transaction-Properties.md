[slide hideTitle]

# Transaction Properties

To maintain stability in our database, before and after transaction, there are properties that are followed.

They are called **ACID** properties.

- Atomicity

- Consistency

- Isolation

- Durability

## Atomicity 

Atomicity simply means that either all of our operations are successful or none of them, and the transaction is aborted.

If our transaction is canceled, all of the changes we made are not visible.

If commits, then all the changes made are visible.

## Consistency

As the name suggests we need to perserve consistency in our database. 

To make this possible, no other transaction should run concurrently when there is already running transaction.

For example account **A** is having a balance of 500$ and it is transferring **100$** to account **B** & **C** **both.**

So we have two transactions here. Let’s say these transactions run concurrently and both the transactions read **500$** balance, in that case the final balance of A would be **400$** instead of **300$.** This is incorrect.

## Isolation

Transactions execution must be **serialized.**

In the above example where we discuss the **consistency** property we already illustrated the **serialization** process.

In other words, one transaction should start executing only if previous transactions are finished.

## Durability

If we are working on banking software for example it is very important to ensure that after a transaction is completed, changes to data will persist permanently 
and would not be undone.

Even if there is a system failure our **recovery-management component** of database must ensure the **durability** of transaction.




[/slide]

[slide hideTitle]

# Problem: Employee Promotion by ID

**Use soft_uni database**

[Download Link](https://mega.nz/file/PIJXWaRZ#s4x7gN5hOng6QXNw60Ku2COWk__M8X4zWFa5GtDYpjY)

## Description:

Write a **transaction** that **raises** an employee's salary by **id** only **if the employee exists in the database.**

If not, **no changes** should be made.



[/slide]

[slide hideTitle]

# Solution: Employee Promotion by ID

## Description:

Write a **transaction** that **raises** an employee's salary by **id** only **if the employee exists in the database.**

If not, **no changes** should be made.

## Solution

``` java
CREATE PROCEDURE usp_raise_salary_by_id(id int)
BEGIN
	START TRANSACTION;
	IF((SELECT count(employee_id) FROM employees WHERE employee_id like id)<>1) THEN
	ROLLBACK;
	ELSE
		UPDATE employees AS e SET salary = salary + salary*0.05 
		WHERE e.employee_id = id;
	END IF; 
END
```


[/slide]
