[slide hideTitle]

# Executing Operations аs a Whole

Transactions in MySQL are a **sequence of actions** that perform like one single unit.

When we execute our transaction, two things can happen:

- **Аll of the operations** are completed successfully
- Аll modifications made are **undone** when the **transaction gets rolled back**

Transactions cannot be **successfully executed** without completing each operation in the statement. 

A classic example of a transaction is the **process of transferring money** from one bank account to another. 

Suppose we wanted to **transfer $100 from the first account** to the **second account** this would involve **subtracting $100** from the balance of the first account and **adding $100** to the balance of the second account. 

A database application could achieve this using **two separate database update statements**:
- **One update statement would deduct** some the money from the source account 
- **Second update statement would add** the amount of money to the target account

As these updates happen the **system might also keep a log of these changes** by inserting a new row into a table where **transfers are stored**.

What is crucial in this scenario is that **all of the changes are completed successfully** or that none of them happen at all.

When it comes to databases **any group of data modifications that must all be successful** or **must not happen at all** is called a transaction.

But be careful about the way **word transaction** is used.

A **bank's database** would no doubt store **detailed information of every deposit and every withdrawal** that has ever taken place and of course, every **transference of money between accounts** are commonly referred to as transactions.

But in **database terminology**, the word transaction means **an indivisible unit of work**, so the term transaction **can be applied to all sorts of database applications** that does **not involve money**.

## Transactions: Lifecycle (Rollback)

[image assetsSrc="Transactions.png" /]

## Transactions: Lifecycle (Commit)

[image assetsSrc="Transactions(2).png" /]

Transactions guarantee the **consistency** and the **integrity** of the database.

All changes in a transaction are **temporary**, and they only get persisted when the **COMMIT** statement gets executed.

[/slide]


[slide hideTitle]

# Transaction Examples

Let us take a look at this example:

[image assetsSrc="Transactions(3).png" /]

We can consider the **checkpoint** in games as simple transactions.

If our character can survive through it and reach the next level, we can be sure that our transaction is committed.

While, if they die during the level, the whole operation gets canceled, and **ROLLBACK** gets executed.

[/slide]


