# Table Customization

[slide hideTitle]

# Custom Column Properties

## Primary Key

```Java
`id` INT NOT NULL PRIMARY KEY // PRIMARY KEY is a column property
```

The primary key is a field that is used for identifying each record. 

Each record can have a primary key attached to it, used for indexing and retrieving the record.

For example, each product in a database can have its own unique ID and you can retrieve product details by it to display on some page.

Not every table needs to have a primary key.

## Auto-Increment (Identity)

```Java
`id` INT AUTO_INCREMENT PRIMARY KEY // Auto-Increment PRIMARY KEY
```

When auto-increment is enabled the value of the id field will be generated automatically when a new record is inserted.

The default value for AUTO_INCREMENT is 1.

It will increase by 1 for each subsequent record.

Let us take a look at some useful checks you can add to the columns.

These are called constraints because a set condition will be verified before any data is inserted.

If the conditions are not met, no data will be inserted.

## UNIQUE Constraint

```Java
`email_address` varchar(50) UNIQUE
```

Adding the UNIQUE constraint ensures that every **email_address** entered into the table will be unique.

## DEFAULT Constraint

```Java
`balance` DECIMAL(10, 2) DEFAULT 0
```

Specifies that the default value of the column should be 0.

If a default value is not specified the value will be set to NULL by default if null values are allowed.

[/slide]

[slide hideTitle]

# Problem with Solution: Create and Insert

1. Create a new database called `gamebar`
2. Create Tables:
   - `employees` - id, first_name, last_name
   - `categories` - id, name
   - `products` - id, name, category_id
3. Insert Data:
   - Populate the `employees` table with 3 test records.



**Solution:**
- Create the `gamebar` database visually in SQL Workbench or run the following query `CREATE DATABASE gamebar`

- Refresh the Schemas in the Object browser / Navigator Schema panel in SQL Workbench to be able to see the new database

- Double click on the newly created database in the Schemas panel or run the `USE gamebar` query to switch to it

- Write the query for creating the **employees table**

[image assetsSrc="Data-Definition-And-Data-Types-q3.png" /]

- Create the rest of the tables using the above logic

- Populate the `employees` table:

```Java
INSERT INTO `employees` (`id`, `first_name`, `last_name`) VALUES (1, 'Sean', 'Langhorne');
INSERT INTO `employees` (`id`, `first_name`, `last_name`) VALUES (2, 'Jordan', 'Blais');
INSERT INTO `employees` (`id`, `first_name`, `last_name`) VALUES (3, 'Priscilla', 'Graffin');
```

The above query should work if you did the previous steps correctly.

Run `SELECT * FROM employees` to make sure the 3 records were inserted correctly. 


[/slide]

[slide hideTitle]

# Problem with Solution: Create Tables

[code-task title="Create Tables" taskId="MySQL-Data-Definitions-and-Data-Types-Create-Table" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your SQL query here
```
[/code-editor]
[task-description]
## Description
When we create tables, we specify which database we want to add them to. This is done by using the "**USE**" clause.

**Submit your solutions in JUDGE without the "USE** \{**database name**\}**" row.**

`"employees":`

- id – **INT, primary key, AUTO_INCREMENT;**
- first_name – **VARCHAR, NOT NULL;**
- last_name – **VARCHAR, NOT NULL;**  

Create the "**categories**" and "**products**" tables analogically:

`"categories":`

- id – **INT, primary key, AUTO_INCREMENT;**

- name – **VARCHAR, NOT NULL;** 

`"products":`

- id –  **INT, primary key, AUTO_INCREMENT;**

- name – **VARCHAR, NOT NULL;** 

- category_id – **INT, NOT NULL** – it is not a foreign key for now.



[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'employees'
ORDER BY lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'employees'
    ORDER BY lower(COLUMN_NAME);
    
SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'categories'
ORDER BY lower(COLUMN_NAME);


SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'categories'
    ORDER BY lower(COLUMN_NAME);

SELECT lower(TABLE_NAME), lower(COLUMN_NAME) 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'products'
ORDER BY lower(COLUMN_NAME);

SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'products'
    ORDER BY lower(COLUMN_NAME);
[/input]
[output]
employees
first_name
employees
id
employees
last_name
id
categories
id
categories
name
id
products
category_id
products
id
products
name
id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(TABLE_NAME) as t
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'employees';
[/input]
[output]
employees
[/output]
[/test]
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
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'employees';
[/input]
[output]
id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(TABLE_NAME) as t
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'products';
[/input]
[output]
products
[/output]
[/test]
[test]
[input]
SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = database()
    and lower(TABLE_NAME) = 'products'
ORDER BY lower(COLUMN_NAME);
[/input]
[output]
category_id
id
name
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'products';
[/input]
[output]
id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(table_name)
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'categories';
[/input]
[output]
categories
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'categories'
ORDER BY lower(COLUMN_NAME);
[/input]
[output]
id
name
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and lower(table_name) = 'categories';
[/input]
[output]
id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Data Into Tables
[code-task title="Data into Tables" taskId="MySQL-Data-definitions-and-Data-Types-Data-into-Problem" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your SQL query here
```
[/code-editor]
[task-description]
## Description
Inserting data can be done with a query too. 

To do that we use the "**INSERT**" clause. Populate the "employees" table with 3 test values.
[/task-description]
[code-io /]
[tests]
[test]
[input]
SELECT count(id) from `employees`;
[/input]
[output]
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


