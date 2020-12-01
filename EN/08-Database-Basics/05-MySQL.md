# MySQL

[slide]
# Video

[vimeo-video startTimeInSeconds="501"]
[stream language="EN" videoId="442293114" default /]
[stream language="RO" videoId="" /]
[/video-vimeo]

[/slide]

[slide]
# MySQL - Live Demo

[vimeo-video startTimeInSeconds="0"]
[stream language="EN" videoId="442293532" default /]
[stream language="RO" videoId="" /]
[/video-vimeo]

[/slide]

[slide]
# MySQL / MariaDB

[image assetsSrc="mssql11.png" /]

The equivalent name to **MySQL** is **MariaDB**.

It is an **open-source relational** database management system.

It is free and thus we **don't need to pay** as we would do for MS SQL or Oracle.

MySQL is a good DBMS option for a small application.

MySQL is used also in **many large-scale websites**.

Most likely it isn't used for all the data they store, but just some of it.

That's because such websites require better optimization.

The examples are **Amazon**, **Apple**, **Facebook**.

MySQL is a **cross-platform software**, so it works on many system platforms, such as Windows, MacOS, and Linux.

# Developer Tools

The best way to install and work with MySQL would be to **install XAMPP**.

It is a web **server** stack.

A stack means a bunch of technologies that are needed.

In this case, it is the **Apache web server**, MariaDB (MySQL), the PHP programming language, and Perl.

**XAMPP is cross-platform**.

HeidiSQL is a client used to connect to the MySQL database.

It is used for managing **MySQL**, **MSSQL**, and **PostgreSQL**.

In the client, we'll be writing queries to retrieve or modify the data in the database.

With it, we can also explore the database structure and objects.

[/slide]

[slide]
# SQL Commands

With the SQL commands, also called queries, we can **communicate with the database engine**.

Then, they will be **processed** and **executed** by it.

Via queries, we can have **greater control** and **flexibility** over the data.

Queries can be simple, but also much more complex.

To create a database in MySQL:

 ```
 CREATE DATABASE employees;
 ```

As you see, the command-like keywords are written with **uppercase letters**.

It would work if we write them with lowercase letters too, but it is always better to follow **established conventions**.

Names of databases, tables, etc., are written with **lowercase letters**.

Our database will be called `employees`.

# Creating Table and Inserting Values

```
CREATE TABLE people (
   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   email VARCHAR(40) NOT NULL,
   first_name VARCHAR(40) NOT NULL,
   last_name VARCHAR(40) NOT NULL
)
```

```
INSERT INTO `people` (`email`, `first_name`, `last_name`)
VALUES ('b@b.bg', 'John', 'Smith');
```

We starts with the keyword `CREATE` but then it is followed by the keyword `TABLE` because we want to **create a table**, not a database.

Then, we open brackets and start d**efining the columns the table** will have.

Each column definition should be on a new line.

The first one is ID:

- The keyword `INT` tells that in this column only **whole numbers will be stored**.
If we try to add an entity with a string ID, an error will be raised.

- The keywords `NOT NULL` tell the engine that the value of this field can never be null, it always has to have a value.

- The keywords `PRIMARY KEY` tell the engine that this is the key with which rows will be accessed and referred.

- The keyword `AUTO_INCREMENT` makes it so that whenever a new entity is added to the `people` table, its ID will be automatically set to the ID of the last entity plus one.

The next columns are pretty much the same, except for their names.

- The `VARCHAR(40)` keywords tell that values in this column can never be anything but a string with a **maximum length of 40 symbols**.


At the beginning of each line for defining columns is its name.

This table will have 4 columns:

- `id`
- `email`
- `first_name`
- `last_name`

As you may have guessed it, `INT` and `VARCHAR(*)` are defining the data type to be stored in the column.

The keywords we are using to specify the structure of the column are **called attributes**.

# Insert records into a table

```
INSERT INTO `people` (`email`, `first_name`, `last_name`)
VALUES ('b@b.bg', 'John', 'Smith');
```

We need to write the command `INSERT INTO` which tells the engine that we want to **insert a record**.

Afterward, we specify into **which table we want to insert**.

Then, in brackets, we **specify the columns we want to add values to**.

On the next line, we write the keyword `VALUES` which is followed by brackets and **values separated by a comma and space**.

We have to keep the order of columns we listed in the `INSERT INTO` command line.

[/slide]

[slide]
# Retrieve Records 

That way we retrieve data from the database:
```
SELECT * FROM people;
```

The first one is `SELECT * FROM people;`.

The `SELECT` keyword tells the engine which columns to retrieve from a table.

The `*` means `all`.

In that example, all the columns are selected (retrieved).

The `FROM` keyword tells the engine from which table to retrieve records.

Then, we have the name of a table, in our case – `people`, as it is the only table we have created.

We can specify the names of the columns we want to **retrieve**:
```
SELECT first_name, last_name FROM people;
```

This query will retrieve only the **first** and **last** names of the people from the table.

Notice that we list the column names **separated** by a **comma** and **space**.

If we don't need some of the columns, don't select all.

The fewer things selected, the faster the query is executed.


We can also limit the number of rows we retrieve:
```
SELECT first_name, last_name FROM people LIMIT 5;
```

It is the same as the previous example, but with the addition of the `LIMIT` keyword, followed by a number.

It tells the engine to retrieve **only the first X numbers**, where `X` is equal to the number after the keyword.

[/slide]

[slide]

# Update and Delete Records

## Update Records

While retrieving records, you can filter rows by specific conditions with the `WHERE` keyword.

```
SELECT first_name, last_name, email
 FROM people
 WHERE last_name = 'Smith'
 ```

This query will retrieve all records that have the last name equal to `Smith`.

To **update already added entities**, start the query with the `UPDATE` keyword.

In the example above:

- `UPDATE people` tells the engine that we will be updating the `people` table.

- `SET last_name = 'Adams'` will update the last name of the records to `Adams`.

It is much like **assigning** or **changing** the value of a variable in programming languages.

- `WHERE first_name = 'John'` tells the engine to make the change only to records with first name equal to `John`.

If we executed the query without the `WHERE` clause, it would **update** the last name of all records of the `people` table.

We don't want that, so don't skip the `WHERE` clause.

To summarize, the last example updates the last name of records in the `people` table for which the condition is true.

## Delete Records

Deleting structures is called **dropping**.

Emptying a structure is called **truncating**.

```
TRUNCATE TABLE people;
```

What this query will do is that it will **delete all records** in the `people` table.

Notice that it will **delete** only the records, it will empty the table.

But the **table itself** won't be deleted.

If you want to delete the whole table, you have to use the `DROP` keyword:
```
DROP TABLE people;
```
It will **delete all the records in this table** and **the table itself** too.

If you want to delete the whole database, this can be done as shown:
```
DROP DATABASE employees;
```
It will delete the **entire database**, all the tables, and the records in them too.

What you should know is that both of these actions, **truncate** and **drop**, cannot be **undone**.

[/slide]