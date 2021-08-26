# App to Database Connection

[slide hideTitle]
# ORM Frameworks Overview

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/01.Data-Database-Access-With-JDBC/01-Data-Database-Access-With-JDBC-3-5-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In this course, we will learn how to **manipulate a database** by using the application layer, which is a **specialized program** that has the ability to manipulate the database.

On one side we have an **object-oriented language such as Java**, which is great in combining variables and methods into classes and objects.

On the other side, we have **a relational database such as MySQL**, which is great in its relationships between individual tables through the use of foreign keys.

Hence a **necessity to translate and manipulate data** between the relational model in the form of tables and the object model in form of classes, properties, and methods, which is more suitable for programming languages.

The mapping between Java classes, data types, and methods to **database tables and relations** (**SQL data types**) is done by using metadata that comes in XML or Java annotations.

The **translation (mapping)** of data from Java objects to MySQL tables is called **objects to relational mapping (ORM)**, which is a declarative approach where Java annotations are used.

When the mapping between MySQL tables and Java objects is **successfully done**, we can use a library (Java Persistence API, Hibernate) to **generate SQL calls** and **relieve** the developer from **writing SQL queries manually**.

**Example:**

```Java
User user = new User("Peter", 25);
dbManager.saveToDB(user);
```

In this example, a **new user has been created**, and this new user is **saved** into the database. 

The saving is done **automatically**, which means that the **ORM generates the SQL query**, that **saves** the user into the database. 

Learning SQL is a **necessity** because otherwise, it is extremely hard to use the MySQL database.

ORM helps to write **most of the queries** by using a programming language (Java, C#, Python, etc.), but in rare cases, a **SQL language** should be used to customize or optimize a query.

- ORM Frameworks examples:
  - Java - Hibernate, EclipseLink, TopLink
  - .NET - Entity Framework, NHibernate
  - PHP - Doctrine, Laravel(Eloquent)

[/slide]