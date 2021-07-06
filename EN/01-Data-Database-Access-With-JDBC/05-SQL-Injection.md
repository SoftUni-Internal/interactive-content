[slide hideTitle]

# What is SQL Injection

In the previous part of the lesson, we learned how to send raw SQL statements to the database.

This practice leaves us in danger of an SQL injection attack.

It is a technique with which a user with bad intentions can insert malicious SQL statements into a user input field.

This way the abuser can harvest information directly from our database, which is a huge problem for our web applications.

If we do not learn what is SQL injection and how to prevent it we leave our site open for this kind of attacks, which means that our customer's data will not be protected from leaking.

To protect our application from SQL injections we should use SQL parameters.

When we have parameters in our SQL statements, to protect our database we should always use the **"PreparedStatement"** interface.

It automatically escapes all the bad characters that can interact with our statement, keeping us safe from malicious SQL.

[/slide]

[slide hideTitle]

# SQL Injection example

SQL injection is best explained through an example. 

Now let us have one and see where the danger comes. 

Our applications are used by people, that is why we are accepting custom data from the users all the time.

Imagine we are having a simple login form, we ask the user to input username and password in fields. 

**Username = "example_user"**
**Password = "12345"**

The following query will be built.

```java
SELECT id FROM users
WHERE username = 'example_user' AND password = '12345';
```

Of course, we do not save our passwords raw, we are hashing them with hashing algorithms, but we will talk about it further in our lessons. 

But you get the point they can type anything they want in there even SQL queries.

If we do not sanitize the input we become victims of SQL injection.

Imagine what would happen if the user gives us this input.

**Username = "example_user"**
**Password = "'1' OR username = 'admin'"**

Our SQL query would look like this.

```java
SELECT id FROM users
WHERE username = 'example_user'
AND password = '1' OR username = 'admin';
```

This may potentially leak sensitive information from our database and we want our data protected.

The only way of preventing this kind of attack is through sanitizing our input.

This means escaping special characters, checking length, digit, etc.

It's best practice to set up validations both in the front-end and back-end.
[/slide]