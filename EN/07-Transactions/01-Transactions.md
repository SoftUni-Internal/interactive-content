# Executing Operations as a Whole

[slide hideTitle]

# Transactions

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Transactions/interactive-mysql-database-transactions-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Transactions in MySQL are a **sequence of actions** that perform like one single unit.

When we execute our transaction, two things can happen:

- **Аll of the operations** are completed successfully
- Аll modifications made are **undone** when the **transaction gets rolled back**

Transactions cannot be **successfully executed** without completing every operation in the statement. 

A classic example of a transaction is the **process of transferring money** from one bank account to another. 

Suppose we wanted to **transfer $100 from the first account** to the **second account** this would involve **subtracting $100** from the balance of the first account and **adding $100** to the balance of the second account. 

A database application could achieve this using **two separate database update statements**:
- **One update statement would deduct** some the money from the source account 
- The **second update statement would add** the amount of money to the target account

As these updates happen, the **system might also keep a log of these changes** by inserting a new row into a table where **transfers are stored**.

What is crucial in this scenario is that **all of the changes are completed successfully** or that none of them happen at all.

When it comes to databases **any group of data modifications that must all be successful** or **must not happen at all** is called a transaction.

[/slide]

[slide hideTitle]

# Transaction Lyfecycle

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Transactions/interactive-mysql-database-transactions-4-5-6-7-8-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Transactions: Lifecycle (Rollback)

[image assetsSrc="Transactions.png" /]

## Transactions: Lifecycle (Commit)

[image assetsSrc="Transactions(2).png" /]

Transactions guarantee the **consistency** and the **integrity** of the database.

All changes in a transaction are **temporary**, and they only get persisted when the `COMMIT` statement gets executed.

## Example

Let us take a look at this example:

[image assetsSrc="Transactions(3).png" /]

We can consider the **checkpoint** in games as simple transactions.

If our character can survive through it and reach the next level, we can be sure that our transaction is committed.

While, if they die during the level, the whole operation gets canceled, and the `ROLLBACK` gets executed.

[/slide]
