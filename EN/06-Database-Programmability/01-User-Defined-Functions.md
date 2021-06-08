# Encapsulating Custom Logic

[slide hideTitle]

# User-Defined Functions

MySQL can **accomplish things** far beyond just **storing** and **managing** your data.

To better understand this fact, we will have a look at his **programmability** and how we can **introduce custom logic** to our database.

This lesson we **will have a look at**: 

- **User-defined functions**
- **Triggers**
- **Stored procedures**

When we need to work with our data but the functions introduced in SQL are **just not enough**, we have an option of **writing custom logic** and even more, **encapsulate custom logic** for future use.

That is when User-Defined Functions come in handy.

As mentioned before, **U.D.F.** is a way of **encapsulating custom logic** and introducing it for **future use**.

But actually, they bring **much more value than** just that:

- **Faster execution** - once the execution plan is built for the **U.D.F.** it is stored for **future use**, which **removes the need for reparsing and reoptimizing** with each use

- **Breaks complex logic in smaller code blocks** - this makes our queries **easier to read**, **comprehend** and allow us to have single-responsibility

- **Modular programming** - we write it **once** and **re-use it** as many times as we need it

Functions can be two types: 

- **Scalar** - you put in the parameters and it returns just a **single value** or **NULL**

- **Table-Valued Function** - similar to view, you give her a **SELECT** statement resulting in a table and it stores the table for future use

Think of User-Defined-Functions as methods, which accepts parameters, does **custom logic**, and returns a result which is a **Scalar** or a **Table**

There are **built-in functions in MySQL**, just like: `LENGTH()`, `REPLACE()`, `REVERSE()` etc

Declaring user-defined function:

```java
CREATE FUNCTION CalculateAmount(userid INT) RETURNS float(10,2)                  // Declaring that we want to create a function, its parameters and return type.
BEGIN                                                                            // We always set the beginning of a function
    DECLARE totalCredits FLOAT;
    SELECT SUM(amount) INTO totalAmount FROM credit_user WHERE id = userid;      // The Logic
    RETURN totalAmount;
END                                                                              // End the function
```
[/slide]

[slide hideTitle]
# Problem with Solution: Count Employees by Town

[/slide]

