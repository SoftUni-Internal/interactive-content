[slide hideTitle]

# Triggers

**Triggers** are small named programs in our database, which we can create, that will define a certain action that should happen when a certain operation gets performed on the database.

We could write a trigger that would tell MySQL to act when an event acquire like an entry was added or deleted into a particular table in the database. 

We do not call triggers explicitly, they are attached to our database and called only when a specific event, which is set on trigger creation occurs.

We could say like anytime when a row gets deleted from this table we want you to insert for example new row into a table which makes triggers extremely powerful аnd extremely useful.

[/slide]

[slide hideTitle]

# MySQL Types of Triggers

Тhere is no type of triggers but the triggers are differentiated on the behalf of the event (insert, update, delete) activation time.

By the differentiation of trivial activation, time triggers are divided into two types

- **Before the even**

These triggers are activated **BEFORE** the **event**.

[image assetsSrc="Database-Programabillity.png" /]

- After the even
These triggers are activated **AFTER** the given **event**.

[image assetsSrc="Database-Programabillity(1).png" /]с

[/slide]

[slide hideTitle]

# Events

The events that can activate the **triggers** can either be **INSERT**, **UPDATE**, or **DELETE** queries.

[image assetsSrc="Database-Programabillity(2).png" /]

The syntax for the creation of a trigger would be: 

```java
CREATE TABLE account (          // Here we declare a table account
acct_number INT PRIMARY KEY,    // with sn account_number PK
 totalAmount DECIMAL(10,2));    // and a totalAmount DECIMAL.

CREATE TRIGGER ins_sum BEFORE INSERT ON account     // Here we declare a BEFORE INSERT Trigger on the table account
FOR EACH ROW SET @sum = @sum + NEW.totalAmount;     // and then we set the sum to each row to be equal to the sum and the new total amount

DROP TRIGGER ins_sum; // The syntax for dropping a trigger
```

[/slide]

[slide hideTitle]
# Problem with Solution: Triggered

[/slide]
