[slide]

## Custom Column Properties

### Primary Key

```Java
id INT NOT NULL PRIMARY KEY // PRIMARY KEY is a column property
```

### Auto-Increment (Identity)

```Java
id INT AUTO_INCREMENT PRIMARY KEY // Auto-Increment PRIMARY KEY
```

### Unique constraint – no repeating values in entire table

```jAVA
EMAIL varchar(50) UNIQUE
```

### Default value – if not specified (otherwise set to NULL)

```Java
balance DECIMAL(10, 2) DEFAULT 0 // Default value set to 0
```

### Problem: Create Table and Insert data into it

1. Create new database called `gamebar`
2. Create Tables:
   - `employees` - id, firstName, lastName
   - `categories` - id, name
   - `products` - id, name, categoryId
3. Insert Data:
   - Populate the `employees` table with 3 test values

[/slide]
