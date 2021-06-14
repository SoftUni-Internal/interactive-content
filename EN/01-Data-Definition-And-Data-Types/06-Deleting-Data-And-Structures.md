# Deleting Data and Structures

[slide hideTitle]

# Deleting From the Database

Deleting structures from the database is done using the `DROP` keyword.

You can drop **keys**, **constraints**, **tables** and **entire databases**.

Deleting all data in a table is called **truncating**.

Both of these actions cannot be **undone** so use with caution!

[/slide]

[slide hideTitle]

# Dropping and Truncating

To delete all the entries in a table:

```Java
TRUNCATE TABLE `employees`; 
```

To drop a table - delete data and structure:

```Java
DROP TABLE `employees`;
```

To drop the entire databases:

```Java
DROP DATABASE `soft_uni`; 
```

## Removing Constraints

To remove a constraining rule from a column such as **primary key constraints**, **value constraints**, and **unique fields**:

```Java
ALTER TABLE `employees`
DROP CONSTRAINT `pk_id`; 
```

Here is where the naming of the constraints is important as you need to know the exact name of the constraint in order to drop it.

If you remove the DEFAULT value, the default value will revert to **NULL** (if the column is nullable).

```Java
ALTER TABLE `employees` 
ALTER COLUMN `clients`
DROP DEFAULT;
```

The above query alters the **employees** table and targets the **clients** column, removing the **DEFAULT** constraint from it.


[/slide]
