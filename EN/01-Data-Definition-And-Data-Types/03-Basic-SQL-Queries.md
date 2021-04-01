# Basic SQL Queries

[slide hideTitle]

# SQL Queries

We communicate with the database engine using SQL by writing queries that provide greater control and flexibility.

To create a database, type in the following command:

```Java
CREATE DATABASE employees;  // 'employees' is the name of our newly created database.
```

SQL keywords are conventionally `capitalized` - Example: **CREATE DATABASE**

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

In this example, `people` is the name of the table.

`id`, `email`, `first_name` and `last_name` are the names of the columns.

`INT` and `VARCHAR(50)` specify the data type.

`NOT NULL` is a custom property.

[/slide]

[slide hideTitle]

# Retrieving Records IN SQL

```Java
SELECT * FROM employees; // Get all the information from a table.
```

You can also specify the names of the columns that you want to get from the database.

```Java
SELECT first_name, last_name FROM employees; // List of columns
LIMIT 5;                                   // Count of records
```

[/slide]
