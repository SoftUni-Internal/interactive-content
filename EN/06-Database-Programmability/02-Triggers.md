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

[/slide]
