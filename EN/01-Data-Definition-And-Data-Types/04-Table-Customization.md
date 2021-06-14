# Table Customization

[slide hideTitle]

# Custom Column properties

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

TODO: Generate task

[/slide]

[slide hideTitle]

# Problem with Solution: Insert Data in Tables
TODO: Generate task

[/slide]
