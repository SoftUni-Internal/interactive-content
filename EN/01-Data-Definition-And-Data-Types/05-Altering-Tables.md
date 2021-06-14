[slide hideTitle]

# Altering Tables

A table can be changed using the `ALTER` keyword.

Altering a table or adding a constraint might not be possible if there is already data in the table.

That is why, it is always best to plan ahead, else you will end up having to populate the table from scratch.


```Java
ALTER TABLE `employees`;
```

## Adding a New Column

Use the `ADD` keyword to add a new column.

```Java
ALTER TABLE `employees`
ADD `salary` DECIMAL;
```

The name of the new column will be **salary** and the data type is **DECIMAL**.

## Deleting a Column

Use the `DROP` keyword to remove (drop) a column.


```Java
ALTER TABLE `people`
DROP COLUMN `full_name`; 
```

**DROP** will delete the data in the **full_name** column.

## Modifying the Data Type

```Java
ALTER TABLE `people`
MODIFY COLUMN `email` VARCHAR(100); 
```

The **email** column of the **people** table will now be of type `VARCHAR(100)`.


## Adding a Primary Key

```Java
ALTER TABLE `people`
ADD CONSTRAINT `pk_id` 
PRIMARY KEY (`id`); 
```

This will add a primary key constraint on the **id** field.

**pk_id** is the arbitrary name that we gave to our constraint but it can be anything you want.

You can create more complex (composite) keys by specifying two columns instead of one.

## Adding a UNIQUE Constraint

```Java
ALTER TABLE `people`
ADD CONSTRAINT `unique_email` 
UNIQUE (`email`)
```

We have chosen **unique_email** for the constraint name but it could be any other meaningful name.

The above code will alter the **email** column in the **people** table and require any value that is inserted to be unique.

## Setting a Default Value

```Java
ALTER TABLE `people`
ALTER COLUMN `balance` SET DEFAULT 0; 
```

The default value for the **balance** column will be 0.


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
