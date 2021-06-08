# Transaction Properties

[slide hideTitle]

# Transaction Properties

We must follow some properties before and after a transaction to keep our database stable.

They are named **ACID** properties, an acronym for:
- Atomicity
- Consistency
- Isolation
- Durability

## Atomicity 

Atomicity means that either all of our operations are successful, or none of them, and the transaction gets aborted.

If our transaction gets canceled, all of the changes we made are not visible.

If commits, all the changes made are visible.

## Consistency

As the name suggests, we need to preserve **consistency** in our database. 

For this to be possible, no other transaction should be concurrently running when there is an already running transaction.

For example account **A** is having a balance of 500$ and it is transferring **100$** to account **B** & **C** **both.**

So we have two transactions here. 

These transactions can run concurrently, and both of them read a **500$** balance. 

In that case, the final balance of A would be **400$** instead of **300$**, which is incorrect.

## Isolation

Transactions execution must be **serialized.**

In the previous example, where we discuss the **consistency** property, we already illustrated the **serialization** process.

In other words, one transaction should start executing only if previous transactions finish.

## Durability

If we are working on banking software, it is vital to ensure that after a transaction is complete, changes to data will persist permanently 
and would not be undone.

Even if there is a system failure, our **recovery-management component** of the database must ensure the **durability** of the transaction.


[/slide]

[slide hideTitle]
# Problem with Solution: Employee Promotion by ID TODO: Add desc and tests



[/slide]