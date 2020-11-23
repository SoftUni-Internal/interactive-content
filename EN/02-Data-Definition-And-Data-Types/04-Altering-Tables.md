[slide]

# Altering Tables Using SQL

A table can be changed using the keyword `ALTER TABLE`

```Java
ALTER TABLE employees;
```

Adding a new column using the keyword `ADD`

```Java
ALTER TABLE employees
ADD salary DECIMAL; // `salary` is the name of the column and `DECIMAL` specifies the data type
```

## Altering Tables Using SQL(2)

Delete existing column

```Java
ALTER TABLE people
DROP COLUMN full_name; // Delete column with name `fullName`
```

Modify data type of existing column

```Java
ALTER TABLE people
MODIFY COLUMN email VARCHAR(100); // `VARCHAR(100)` is the new data type
```

## Altering Tables Using SQL(3)

Add primary key to existing column

```Java
ALTER TABLE people
ADD CONSTRAINT pk_id // Constraint name
PRIMARY KEY (id); // Column name which can be more than one for composite key
```

Add unique constraint

```Java
ALTER TABLE people
ADD CONSTRAINT uq_email // Constraint name
UNIQUE (email) // Columns
```

## Altering Tables Using SQL(4)

Set default value

```Java
ALTER TABLE people
ALTER COLUMN balance SET DEFAULT 0; // Default value - 0, column name `balance`
```

## Problem: Alter Tables

1. Alter Table
   - Add a new column `middle_name` to the `employees` table
2. Add Constraints
   - Make `category_id` foreign key linked to `id` in table `categories`
3. Modify Columns - Change the property `VARCHAR(50)` to `VARCHAR(100)` of the `middleName` column in `employees` table

[/slide]
