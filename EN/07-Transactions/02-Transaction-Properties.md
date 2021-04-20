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

If commits, all the changes made are visible.

## Consistency

As the name suggests we need to perserve **consistency** in our database. 

To make this possible, no other transaction should run concurrently when there is already running transaction.

For example account **A** is having a balance of 500$ and it is transferring **100$** to account **B** & **C** **both.**

So we have two transactions here. These transactions can run concurrently and both the transactions read **500$** balance. In that case the final balance of A would be **400$** instead of **300$**. This is incorrect.

## Isolation

Transactions execution must be **serialized.**

In the previous example, where we discuss the **consistency** property we already illustrated the **serialization** process.

In other words, one transaction should start executing only if previous transactions are finished.

## Durability

If we are working on banking software, it is very important to ensure that after a transaction is completed, changes to data will persist permanently 
and would not be undone.

Even if there is a system failure our **recovery-management component** of database must ensure the **durability** of transaction.


[/slide]

[slide hideTitle]
# Problem with Solution: Employee Promotion by ID

[code-task title="Employee Promotion by ID" taskId="java-db-and-mysql-transactions-employee-promotion-by-id" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

[/code-editor]
[task-description]
## Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/07.MySQL-Database-Programmability-Lab-Resource.zip) **for this task.**

Create a **transaction** that **raises** the salary of an employee by the given **id** only **if the employee exists in the database.**

If not, **no changes** should be made.

[/slide]