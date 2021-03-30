# Deleting Data and Structures

[slide hideTitle]

# Deleting from Database

Deleting structures from the database is called `DROP-ping`

You can drop `keys`, `constraints`, `tables` and entire `databases`

Deleting all data in a table is called `truncating`

Both of these actions cannot be **undone** so use with caution!

[/slide]

[slide hideTitle]

# Dropping and Truncating(1)

To delete all the entries in a table:

```Java
TRUNCATE TABLE employees; // Table name
```

To drop a table - delete data and structure:

```Java
DROP TABLE employees; // Table name
```

To drop entire databases:

```Java
DROP DATABASE soft_uni; // Database name
```
[/slide]

[slide hideTitle]

# Dropping and Truncating(2)

To remove a constraining rule from a column like Primary keys, value constraints, and unique fields:

```Java
ALTER TABLE employees // Table name
DROP CONSTRAINT pk_id; // Constraint name
```

To remove the **DEFAULT** value, if not specified, revert to **NULL**:

```Java
ALTER TABLE employees // Table name
ALTER COLUMN clients // Column name
DROP DEFAULT;
```

[/slide]
