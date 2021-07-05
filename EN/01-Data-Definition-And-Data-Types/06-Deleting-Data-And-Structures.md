# Deleting Data and Structures

[slide hideTitle]
# Deleting Data and Structures

Deleting structures from the database is done using the `DROP` keyword.

You can drop **keys**, **constraints**, **tables** and **entire databases**.

Deleting all data in a table is called **truncating**.

Both of these actions cannot be **reversed**, so use with caution.

## Dropping and Truncating

These are some examples of deleting data in a database:

- Deleting all the entries in a table

```Java
TRUNCATE TABLE `employees`; 
```

- Dropping a table

```Java
DROP TABLE `employees`;
```

- Dropping an entire database

```Java
DROP DATABASE `soft_uni`; 
```

## Removing Constraints

Follow the next example if you want to remove a constraining rule from a column such as **primary key constraints**, **value constraints**, and **unique fields**:

```Java
ALTER TABLE `employees`
DROP CONSTRAINT `pk_id`; 
```

The naming of the constraints is important as you need to know the exact name of the constraint in order to drop it.

If you remove the `DEFAULT` value, it will revert to `NULL` (if the column is nullable).

```Java
ALTER TABLE `employees` 
ALTER COLUMN `clients`
DROP DEFAULT;
```

The above query alters the `employees` table and targets the `clients` column, removing the `DEFAULT` constraint from it.

[/slide]
