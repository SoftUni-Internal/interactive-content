# Altering Tables

[slide hideTitle]

# Altering tables using SQL (1)

A table can be changed using the `ALTER` keyword.

```Java
ALTER TABLE employees;
```

Use the keyword `ADD` to add a new column.

```Java
ALTER TABLE employees
ADD salary DECIMAL; // `salary` is the name of the column and `DECIMAL` specifies the data type
```

[/slide]

[slide hideTitle]

# Altering Tables Using SQL (2)

Delete an existing column:

```Java
ALTER TABLE people
DROP COLUMN full_name; // Delete column with name `full_name`
```

Modify data type of existing column:

```Java
ALTER TABLE people
MODIFY COLUMN email VARCHAR(100); // `VARCHAR(100)` is the new data type
```

[/slide]

[slide hideTitle]

# Altering Tables Using SQL (3)

Add a primary key to an existing column:

```Java
ALTER TABLE people
ADD CONSTRAINT pk_id // Constraint name
PRIMARY KEY (id); // Column name which can be more than one for composite key
```

Add unique constraint:

```Java
ALTER TABLE people
ADD CONSTRAINT uq_email // Constraint name
UNIQUE (email) // Columns
```

[/slide]

[slide hideTitle]

# Altering Tables Using SQL (4)

Set default value:

```Java
ALTER TABLE people
ALTER COLUMN balance SET DEFAULT 0; // Default value - 0, column name `balance`
```

[/slide]

[slide hideTitle]

# Problem with Solution: Alter Tables

TODO: Add task

[/slide]

[slide hideTitle]

# Problem with Solution: Adding Constraints

TODO: Add task
[/slide]

[slide hideTitle]

# Problem with Solution: Modifying Columns

TODO: Add task
[/slide]