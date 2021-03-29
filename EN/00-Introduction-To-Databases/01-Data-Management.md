# Data Management

[slide hideTitle]

# Storage vs. Management 1

MySQL is a **relational database** that stores data in a **tabular structure** and is grouped by **tables**.  

It uses **SQL** as a language for **communicating with the database**, which allows for a very powerful syntax to **create both simple** and **complex queries** to retrieve and structure data as we want.  

A relational database is used when the data, which we want to store in different tables, has a relation between each other.

NoSQL is a grouping of several different technologies defined as any database technology that is not SQL such as, **Document Store** or **Key-Value Store**.

**Document Store** works by storing the data as **JSON-objects** in documents whose structure does not have to be predefined. 

As opposed to relational databases, these objects **do not need** to have a **common structure** and can also be nestled.

The support of nestling data removes the need to join data the same way as it is done in relational databases and can improve performance drastically.

Here is an example of how data is structured in a relational and NoSQL database:

[image assetsSrc="Introduction-To-Databases.png" /]

[/slide]

[slide hideTitle]

# Storage vs. Management 2

If we use databases for only storing data, we would run into some problems with:

- Sizing
- Accuracy
- Security
- Redundancy
- Importance

So here are some of the benefits of having well-structured databases:

- Querying data in a database and look up the data from a database relatively quickly
- Relating data from two different tables together using **JOINs**
- Creating meaningful reports from data in a database because data has a built-in structure to it
- Information of a given type is always stored once
- Databases use the **ACID** set of properties
- They are **fault-tolerant** and can handle very large data sets
- Databases are **concurrent**, meaning multiple users can use them at the same time without corrupting the data.
- They are **scalable**.

[/slide]

[slide hideTitle]

# Databases

A database is an organized collection of structured information, or data, typically stored electronically in a computer system. 

A database is usually controlled by a database management system (**DBMS**).

A **DBMS** is software for storing and retrieving user data while considering the appropriate security measures. 

It consists of a group of programs, which manipulate the database. 

The **DBMS** accepts the request for data from an application and instructs the operating system to provide the specific data. 

In large systems, **DBMS** helps users and other third-party software to store and retrieve data. 

Together, the data and **DBMS**, along with the applications that are associated with them, are referred to as a database system, often shortened to just а **database**. 

Relational storage was first proposed by Edgar Codd in 1970.

[/slide]

[slide hideTitle]

# Relational Databases

A relational database is a type of database that stores and provides **access to data points** that are **related to one another**. 

Relational databases are based on the **relational model**: an intuitive, straightforward way of **representing data in tables**. 

In a relational database, each row in the table is a record with a unique **ID** called **key**. 

The columns of the table hold attributes of the data.

Еаch record usually has a **value** for each attribute, making it easy to establish the relationships among data points.

The language used to write and query data in a database is called **SQL**, which stands for **Structured Query Language**.

Examples of relational databases:

- Oracle
- Microsoft SQL Server
- MySQL
- PostgreSQL
- Web SQL in HTML5

NoSQL databases are **non tabular**, and store data differently than relational tables.

They come in a variety of types based on their data model. 

The main types are **document**, **key-value**, **wide-column**, and **graph**. 

They provide flexible schemas and scale easily with large amounts of data and high user loads.

Examples of non-relational databases:

- MongoDB
- DocumentDB
- Cassandra
- Redis

[/slide]

[slide hideTitle]

# RDBMS

A database typically requires a comprehensive database software program known as a database management system **DBMS**. 

A **DBMS** serves as an interface between the database and its end-users or programs, allowing users to retrieve, update and manage how the information is organized and optimized.

It parses requests from the user and takes the appropriate action.

The user does not have direct access to the stored data.

Data is stored in **tables**. The relation between the tables is done by **primary** and **secondary** keys.

Here is an example of the database engine flow:

[image assetsSrc="Introduction-To-Databases(1).png" /]

[/slide]
