[slide]

# Basic SQL Queries

## SQL Queries

We communicate with the database engine using SQL by writing queries which provide greater control and flexibility.

To create a database using SQL type in the following command:

```Java
CREATE DATABASE employees;  // 'employees' is the name of our newly created database.
```

SQL keywords are conventionally `capitalized` - Example: **CREATE DATABASE**

## Table Creation IN SQL

```Java
CREATE TABLE people
(id INT NOT NULL,
email VARCHAR(50) NOT NULL,
firstName VARCHAR(50),
LastName VARCHAR(50)
);
```

In this example `people` is the name of the table.

`id`, `email`, `firstName` and `lastName` are the names of the columns

`INT` and `VARCHAR(50)` specify the data type

`NOT NULL` is a custom property

## Retrieving Records IN SQL

```Java
SELECT * FROM employees; // Get all the information from a table.
```

You can also specify the names of the columns that you want to get from the database

```Java
SELECT firstName, lastName FROM employees; // List of columns
LIMIT 5;                                   // Count of records
```

[/slide]
