# Data Management

[slide hideTitle]

# Storage vs. Management

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Databases-Introduction/java-databases-and-mysql-databases-introduction-3-6-data-management-storage-vs-management-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

MySQL is a **relational database** that stores data in a **tabular structure** and is grouped by **tables**.  

It uses **SQL** as a language for **communicating with the database**, which allows us to create both **simple** and **complex queries** to retrieve and structure data as we want.    

A relational database is used when the data needs to be stored in different tables that are connected.

NoSQL is a grouping of several different technologies defined as any database technology that is not SQL like a **Document Store** or a **Key-Value Store**.

A **Document Store** works by storing the data as **JSON-objects** in documents without predefining their structure. 

As opposed to relational databases, these objects **do not need** to have a **common structure** and can also be nested.

The support of nesting data removes the need to join data the same way as it is done in relational databases and can improve performance drastically.

Here is an example of how data is structured in a relational and NoSQL database:

[image assetsSrc="Introduction-To-Databases.png" /]

If we only use flat storage for storing data, we would run into some problems with:

- **Sizing**
- **Accuracy**
- **Security**
- **Redundancy**
- **Importance**

Here are some of the benefits of having well-structured databases:

- Querying data and looking up data happens relatively quickly
- Joining data from two different tables together using the **JOIN** clauses
- Creating meaningful reports from data in a database because data has a built-in structure to it
- Information of a given type is always stored once
- Databases use the **ACID** set of properties
- They are **fault-tolerant** and can handle large data sets
- Databases are **concurrent**, meaning multiple users can use them at the same time without corrupting the data
- They are **scalable**

[/slide]

[slide hideTitle]

# Databases

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Databases-Introduction/java-databases-and-mysql-databases-introduction-7-8-databases-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A database is an organized collection of structured information, or data, typically stored electronically in a computer system. 

It is usually controlled by a database management system (**DBMS**).

A **DBMS** is a piece of software for **storing** and **retrieving** user data while following the appropriate security measures. 

It consists of a group of programs, which manipulate the database.  

The **DBMS** accepts the request for data from an application and instructs the operating system to provide the specific data. 

In large systems, the **DBMS** helps users and other third-party software to store and retrieve data. 

Together, the data and **DBMS**, along with the applications that are associated with them, are referred to as a database system, often shortened to just а **database**. 

Relational storage was first proposed by Edgar Codd in 1970.

## Relational Databases

A relational database is a type of database that stores and provides **access to data points** that are **related to one another**. 

Relational databases are based on the **relational model**: an intuitive, straightforward way of **representing data in tables**. 

In a relational database, each row in the table represents a record with a unique **ID** called **key**. 

The columns of the table hold attributes of the data.

Еаch record usually has a **value** for each attribute, making it easy to establish the relationships among data points.

The language used to write and query data in a database is called **SQL**, which stands for **Structured Query Language**.

The following are relational databases:

- **Oracle**
- **Microsoft SQL Server**
- **MySQL**
- **PostgreSQL**
- **Web SQL in HTML5**

NoSQL databases are **non-tabular** and store data differently than relational tables.

They come in a variety of types based on their data model. 

The main types are: 

- **document**
- **key-value**
- **wide-column**
- **graph**

They provide flexible schemas and scale easily with large amounts of data and high user loads.

Here are some examples of non-relational databases:

- **MongoDB**
- **DocumentDB**
- **Cassandra**
- **Redis**

[/slide]

[slide hideTitle]

# RDBMS

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Databases-Introduction/java-databases-and-mysql-databases-introduction-9-rdbms-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A database typically requires a comprehensive database software program known as a database management system **DBMS**. 

It serves as an interface between the database and its end-users or programs, allowing them to **retrieve**, **update** and **manage** how the information is organized and optimized.

The **DBMS** parses requests from the user and takes the appropriate action.

The user does not have direct access to the stored data.

Data is stored in **tables**. 

The relation between the tables made by **primary** and **secondary** keys.

[/slide]

[slide hideTitle]

# Database Engine Flow

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Databases-Introduction/java-databases-and-mysql-databases-introduction-10-database-engine-flow-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is an example of the database engine flow:

[image assetsSrc="Introduction-To-Databases(1).png" /]

[/slide]
