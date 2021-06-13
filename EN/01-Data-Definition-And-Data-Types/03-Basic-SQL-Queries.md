# Basic SQL Queries

[slide hideTitle]

# SQL Queries

We use SQL queries to do any data operations on the database such as creating new tables, inserting records, retrieving records, modifying information and so on.

To create a database, type in the following command:

```Java
CREATE DATABASE employees;  
```

The syntax for creating a new database is `CREATE DATABASE [name]`.

In the example above, we created a database called "employees".


SQL keywords are conventionally `capitalized` - Example: **CREATE DATABASE**.

[/slide]

[slide hideTitle]

# Table Creation in SQL

```Java
CREATE TABLE people
(id INT NOT NULL,
email VARCHAR(50) NOT NULL,
first_name VARCHAR(50),
last_name VARCHAR(50)
);
```

In this example, the name of the table is **people**.

`id`, `email`, `first_name` and `last_name` are the names of the columns.

`INT` and `VARCHAR(50)` specify the data type, in this case an INT for the **id** and `VARCHAR(50)` for the first and last names.

`VARCHAR(50)` makes it so that the value held inside this column for a particular record will not exceed a length of 50 characters.

`NOT NULL` is a custom property that makes it so  this table will require to be passed when inserting a record into this table.


[/slide]

[slide hideTitle]

# Inserting & Retrieving Records IN SQL


This is the syntax for **inserting records** into a table.

```java
INSERT INTO [TABLE_NAME] (column1, column2, column3, column...)
VALUES (value1, value2, value3, value...);
```

If we were to successfully insert a record into an employees table that has an **id** (manually added, not auto-increment), **email**,  **first_name**, and **last_name** fields we would need to write this query:

```java
INSERT INTO employees (id, email, first_name, last_name)
VALUES (1, 'john.doe@gmail.com', 'John', 'Doe')
```

When adding data to all the columns of a table, you do not need to specify the column names but the values must be in the exact order of the columns.

```Java
SELECT * FROM employees; 
```

[image assetsSrc="DData-Definition-And-Data-Types-q1.png" /]


The `SELECT * FROM [table]` query retrieves all the columns and all records from a table, which is not always recommended, especially if your database contains a lot of records.


You can also specify the names of the columns that you want to get from the database as well as the number of records to retrieve.

```Java
SELECT first_name, last_name FROM employees; 
LIMIT 5;                                  
```

[image assetsSrc="DData-Definition-And-Data-Types-q2.png" /]


The code above retrieves 5 records from the **employees** table, while selecting only the first_name and last_name columns.



[/slide]
