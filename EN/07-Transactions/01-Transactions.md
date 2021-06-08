[slide hideTitle]

# Executing Operations As a Whole

Transactions in MySQL are a **sequence of actions** that perform like one single unit.

When we execute our transaction, two things can happen:

- **Аll of the operations** are completed successfully
- Аll modifications made are **undone** when the **transaction gets rolled back**

Transactions cannot be **successfully executed** without completing each operation in the statement. 

We can consider bank transactions for the accurate examples of **transactions.**

If withdraw or the deposit fails **the whole operation is canceled.**

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


