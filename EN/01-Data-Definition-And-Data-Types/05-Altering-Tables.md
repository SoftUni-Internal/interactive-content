[slide hideTitle]

# Altering Tables

A table can be changed by using the `ALTER` keyword.

Altering a table or adding a constraint might not be possible if there is already data in the table.

That is why it is always best to plan ahead, or you will end up having to populate the table from scratch.

```Java
ALTER TABLE `employees`;
```

## Adding a New Column

Use the `ADD` keyword to add a new column.

```Java
ALTER TABLE `employees`
ADD `salary` DECIMAL;
```

The newly created column will be called `salary`, and its data type will be `DECIMAL`.

## Deleting a Column

Use the `DROP` keyword to remove (drop) a column.

```Java
ALTER TABLE `people`
DROP COLUMN `full_name`; 
```

It will delete the data in the `full_name` column.

## Modifying the Data Type

You can use `MODIFY` to change the data type of a column.

```Java
ALTER TABLE `people`
MODIFY COLUMN `email` VARCHAR(100); 
```

The `email` column of the `people` table will now be of type `VARCHAR(100)`.

## Adding a Primary Key

```Java
ALTER TABLE `people`
ADD CONSTRAINT `pk_id` 
PRIMARY KEY (`id`); 
```

This will add a primary key constraint on the `id` field.

`pk_id` is the arbitrary name that we gave to our constraint but it can be anything you want.

You can create more complex (composite) keys by specifying two columns instead of one.

## Adding a UNIQUE Constraint

```Java
ALTER TABLE `people`
ADD CONSTRAINT `unique_email` 
UNIQUE (`email`)
```

We have chosen `unique_email` for the constraint name but it could be any other meaningful name.

The above code will alter the `email` column in the `people` table and require any value that is inserted to be unique.

## Setting a Default Value

```Java
ALTER TABLE `people`
ALTER COLUMN `balance` SET DEFAULT 0; 
```

The default value for the `balance` column will be **0**.

[/slide]

[slide hideTitle]
# Problem with Solution: Alter Tables
[code-task title="Alter Tables" taskId="MySQL-Data-definitions-and-Data-Types-Alter-Tables" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your SQL query here
```
[/code-editor]
[code-adapter]
CREATE TABLE IF NOT EXISTS employees(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name varchar(50) not null,
	last_name varchar(50) not null
);
[/code-adapter]
[task-description]
# Description

Altering the tables is done via the `ALTER TABLE` clause. 

Add a `middle_name` column to the `employees` table. 

[/task-description]
[code-io /]
[tests]
[test]
[input]
SELECT lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'employees'
ORDER BY lower(COLUMN_NAME);
[/input]
[output]
first_name
id
last_name
middle_name
[/output]
[/test]
[/tests]
[/code-task]


[/slide]

[slide hideTitle]

# Problem with Solution: Adding Constraints

[code-task title="Adding Constraints" taskId="MySQL-Data-definitions-and-Data-Types-Adding-Constraints" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your SQL query here
```
[/code-editor]
[code-adapter]
CREATE TABLE categories(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name varchar(50) not null
);

CREATE TABLE products(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name varchar(50) not null,
	category_id int not null
);
[/code-adapter]
[task-description]
# Description

Create the connection via a **foreign key** between the `products` and `categories` tables that you've created earlier. 

Make the `category_id` foreign key **linked to** `id` **in the** `categories` **table.**

[/task-description]
[code-io /]
[tests]
[test]
[input]
SELECT lower(COLUMN_NAME) 
FROM information_schema.key_column_usage 
WHERE TABLE_SCHEMA = database() 
AND lower(TABLE_NAME) = 'products'
ORDER BY lower(COLUMN_NAME);
[/input]
[output]
category_id
id

[/output]
[/test]
[/tests]
[/code-task]


[/slide]

[slide hideTitle]

# Problem with Solution: Modifying Columns

[code-task title="Modifying Columns" taskId="MySQL-Data-definitions-and-Data-Types-Modifying-Columns" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your SQL query here
```
[/code-editor]
[code-adapter]
CREATE TABLE employees(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
        middle_name varchar(50) not null
);
[/code-adapter]
[task-description]
# Description

Change the `VARCHAR(50)` property to `VARCHAR(100)` in the `middle_name` column of the `employees` table.

[/task-description]
[code-io /]
[tests]
[test]
[input]
select COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
where DATA_TYPE = 'varchar'
and CHARACTER_MAXIMUM_LENGTH = 100
and TABLE_NAME = 'employees'
[/input]
[output]
middle_name
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
