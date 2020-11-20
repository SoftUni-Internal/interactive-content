[slide]

# Delete From Database

Deleting structures from the database is called `dropping`

You can drop `keys`, `constraints`, `tables` and entire `database`

Deleting all data in a table is called `truncating`

Both of these actions cannot be **undone** so use with caution!

### Dropping And Truncating(1)

To delete all the entries in a table

```java
TRUNCATE TABLE employees; // Table name
```

To drop a table - delete data and structure

```java
DROP TABLE employees; // Table name
```

To drop entire database

```java
DROP DATABASE soft_uni; // Database name
```

### Dropping And Truncating(2)

To remove a constraining rule from a column like Primary keys, value constraints and unique fields

```java
ALTER TABLE employees // Table name
DROP CONSTRAINT pk_id; // Constraint name
```

To remove DEFAULT value (if not specified, revert to NULL)

```java
ALTER TABLE employees // Table name
ALTER COLUMN clients // Column name
DROP DEFAULT;
```

[/slide]
