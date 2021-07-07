[slide hideTitle]

# What is SQL Injection

In the previous part of the lesson, we learned how to send **raw SQL statements** to the database.

This practice leaves us in danger of an **SQL injection attack**.

It is a technique with which a user with bad intentions can **insert** malicious SQL statements into a user input field.

This way the abuser can **harvest information** directly from our database, which is a **huge problem** for a web application.

If we do not learn what is SQL injection and how to **prevent it** we leave the web applications open for **such attacks**, which means that clients' data **will not be protected** from leaking.

To protect the web application from **SQL injections** we should use **SQL parameters**.

When we have parameters in our SQL statements, to protect our database we should always use the **"PreparedStatement"** interface.

It automatically **escapes all the bad characters** that can interact with our statement, keeping us safe from malicious SQL.

[/slide]

[slide hideTitle]

# SQL Injection example

A web application is used by clients, that is why we are accepting **custom data** from the **users** all the time.

Imagine we are having a **simple login form**, we ask the user to input **username** and **password** in fields. 

**Username = "example_user"**
**Password = "12345"**

The following query will be built:

```java
SELECT id FROM users
WHERE username = 'example_user' AND password = '12345';
```

The client's password is not saved raw, usually, [hashing](https://en.wikipedia.org/wiki/Cryptographic_hash_function) algorithms are used to **encode the password** into the database. 

But the user can type anything into the input field, including a raw SQL query, and the need to sanitize the input accrues.

For example:

**Username = "example_user"**
**Password = "'1' OR username = 'admin'"**

The SQL query would look like this:

```java
SELECT id FROM users
WHERE username = 'example_user'
AND password = '1' OR username = 'admin';
```
This way the user could log in to the application with the admin's credentials.

This could lead to a leak of potentially sensitive information from the database, which makes the data vulnerable.

This type of SQL injection is easily preventable through sanitizing the user's input, which means escaping special characters, checking length, digit, etc., by using `setDouble()`, `setString()`, etc.

This could be done by **NOT using concatenation**, and prepared statements should always be used.

[/slide]