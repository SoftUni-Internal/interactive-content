# Transaction Properties

[slide hideTitle]

# Transaction Properties

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Transactions/interactive-mysql-database-transactions-11-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We should **follow some principles** before and after a transaction to keep our database stable.

They are named **ACID**, an acronym for:
- **A**tomicity
- **C**onsistency
- **I**solation
- **D**urability

## Atomicity 

Atomicity means that **either all of our operations are successful**, or **none of them**, and the transaction gets aborted.

If our transaction gets **cancelled**, all of the changes we made **are not visible**.

If there are no errors, all the changes made are visible.

## Consistency

As the name suggests, we need to preserve the **consistency** in our database. 

For this to be possible, **no other transaction should be concurrently running** when there is already a running transaction.

For example, account **A** has a balance of $500 and is transferring **$100** to account **B** and **C**.

There are two transactions in this example. 

If they run concurrently, both of them will be working with a balance of **$500**.

In that case, the final balance of A would be **$400** instead of **$300**, which is incorrect.

## Isolation

Transactions execution must be **serialized.**

In the previous example, where we discuss the **consistency** property, we already illustrated the **serialization** process.

In other words, **one transaction should start executing** only if the previous transactions finish.

That way, no other **person or process can change any part of the data** while the transaction is running.

For example, it should **not be possible to update** someone's bank balance if it is already being **accessed by a transaction in progress**.


## Durability

If we are working on banking software, **it is vital to ensure that after a transaction is complete**, changes to data will persist **permanently** and would **not be undone**.

Even if there is a system failure, our **recovery-management component** of the database must ensure the **durability** of the transaction.

[/slide]

[slide hideTitle]
# Problem with Solution: Employee Promotion by ID

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Transactions/problem-and-solution-employees-promotion-by-id-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Write a transaction that **raises** an employee's salary by **5%** if their "**id**" exists in the database.

If they are not in the database, no changes should be made.

Use the [SoftUni Database](https://videos.softuni.org/resources/java/java-mysql/soft_uni_database_database_programmability_lab.zip)

[/slide]
