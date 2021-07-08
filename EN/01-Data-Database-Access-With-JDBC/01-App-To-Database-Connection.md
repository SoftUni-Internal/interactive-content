# App to Database Connection

[slide hideTitle]
# ORM Frameworks Overview

In this course, we will learn how to **manipulate a database** by using the application layer, which is a **specialized program** dedicated to database **manipulation**.

When object-oriented programming is used there are **two different paradigms** to manipulate objects in the world:

- **Relational paradigm**, where propositional and predicate logic is used and it is most often implemented in the databases
- **Object paradigm** is followed by object-oriented programming languages

Hence a **necessity to translate data** between the relational model in the form of tables and object model which is more suitable for programming languages.

The mapping of Java classes and data types to **DB tables** and **SQL data types** is done by using metadata that comes in XML or Java annotations.

The **translation (mapping)** of data from Java objects to MySQL tables is called **objects to relational mapping (ORM)**, which is a declarative approach where Java annotations are used.

When the mapping between MySQL tables and Java objects is **successfully done**, we can use a library (Java Persistence API, Hibernate) to **generate SQL calls** and ** relieve** the developer from **manual handling**.

**Example:**

```Java
User user = new User("Peter", 25);
dbManager.saveToDB(user);
```

In this example, a **new user has been created**, and this new user is **saved** into the database. 

The saving is done **automatically**, which means that the **ORM generates the SQL query**, that **saves** the user into the database. 


Learning SQL is a **necessity** because otherwise, it is impossible to use the MySQL database.

ORM helps to write **most of the queries** by using a programming language (Java, C#, Python, etc.), but in rare cases, a **SQL language** should be used to customize or optimize a query.

- ORM Frameworks examples:
  - Java - Hibernate, EclipseLink, TopLink
  - .NET - Entity Framework, NHibernate
  - PHP - Doctrine, Laravel(Eloquent)

[/slide]