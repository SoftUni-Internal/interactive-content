# Basic SQL Queries

[slide hideTitle]

# SQL Queries

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Data-Definition-And-Data-Types/java-database-and-mysql-data-definition-and-data-types-19-20-sql-queries-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We use SQL queries to perform any data operations on the database, such as creating new tables, inserting records, retrieving records, and modifying information.

To create a database, type in the following command:

```Java
CREATE DATABASE `employees`;  
```

The syntax for creating a new database is `CREATE DATABASE [name]`.

In the example above, we created a database called "employees".

SQL keywords conventionally contain only **capital letters**.

[/slide]

[slide hideTitle]

# Table Creation

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Data-Definition-And-Data-Types/java-database-and-mysql-data-definition-and-data-types-21-table-creation-in-sql-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In the following example, we will create a table called `people`:

```Java
CREATE TABLE `people`
(id INT NOT NULL,
`email` VARCHAR(50) NOT NULL,
`first_name` VARCHAR(50),
`last_name` VARCHAR(50)
);
```

The `id`, `email`, `first_name`, and `last_name` are the names of the columns.

`INT` and `VARCHAR(50)` specify the data type, in this case an INT for the **id** and `VARCHAR(50)` for the rest of the columns.

When we specify the `VARCHAR(50)` data type, we set a limit of **50 characters** per record.

When using a `NOT NULL` property, we specify that the given field is **required** and must be filled.

[/slide]

[slide hideTitle]

# Inserting & Retrieving Records

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Data-Definition-And-Data-Types/java-database-and-mysql-data-definition-and-data-types-22-retrieve-records-in-sql-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This is the syntax for **inserting records** into a table:

```java
INSERT INTO [TABLE_NAME] (column1, column2, column3, column...)
VALUES (value1, value2, value3, value...);
```

For the following example, we will insert a record into a table with the fields:

- **id** (manually added, not auto-increment)
- **email**
- **first_name**
- **last_name**

```java
INSERT INTO `employees` (id, email, first_name, last_name)
VALUES (1, 'john.doe@gmail.com', 'John', 'Doe')
```

When adding data to all the columns of a table, you do not need to specify the column names, but the values must be in the exact order of the columns.

The `SELECT * FROM [table]` query retrieves all the columns and all records from a table. 

It is used in very specific cases because it could be very slow if your database contains a lot of records.

```Java
SELECT * FROM `employees`; 
```

[image assetsSrc="Data-Definition-And-Data-Types-q1.png" /]

You have the option of **limiting** a `SELECT` query with by using the `LIMIT` clause.

The following query selects all columns from the first **five** records in the `employees` table:

[image assetsSrc="Data-Definition-And-Data-Types-q2.png" /]

You can also specify the names of the columns that you want to get from the database, as well as the number of records to retrieve.

```Java
SELECT `first_name`, `last_name` FROM `employees`; 
LIMIT 5;                                  
```

The code above retrieves the `first_name` and `last_name` columns of the first **five** records in the **employees** table.

[/slide]
