[slide hideTitle]

# Executing Operations As a Whole

Transactions in MySQL are a **sequence of actions** that perform like one single unit.

When we execute our transaction, two things can happen:

- **Аll of the operations** are completed successfully
- Аll modifications that were made are **undone** when the **transaction is rollback**

Transactions cannot be **succesfully executed** without completing each operation in the statement. 

We can consider bank transactions for the accurate examples of **transactions.**

If withdraw or the deposit fails **the whole operation is cancelled.**

## Transactions: Lifecycle (Rollback)

[image assetsSrc="Transactions.png" /]

## Transactions: Lifecycle (Commit)

[image assetsSrc="Transactions(2).png" /]

Transactions are used to guarantee the **consistency** and the **integrity** of the database.

All changes in a transaction are **temporary**, and they are persisted when **COMMIT** is executed.

[/slide]


[slide hideTitle]

# Transaction Examples

Let us take a look at this example:

[image assetsSrc="Transactions(3).png" /]

We can consider the **checkpoint** in games as simple transactions.

If our character is able to survive through and reach next level, we can tell that our transaction is commited.

While, if he dies during the level the whole operation is canceled and **ROLLBACK** is executed.

[/slide]


