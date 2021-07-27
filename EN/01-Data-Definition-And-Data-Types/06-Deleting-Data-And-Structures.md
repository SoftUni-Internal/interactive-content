# Deleting Data and Structures

[slide hideTitle]
# Deleting Data and Structures

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Data-Definition-And-Data-Types/java-database-and-mysql-data-definition-and-data-types-32-33-deleting-from-database-and-structures-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Deleting structures from the database is done using the `DROP` keyword.

You can drop **keys**, **constraints**, **tables** and **entire databases**.

Deleting all data in a table is called **truncating**.

Both of these actions cannot be **reversed**, so use with caution.

[/slide]

[slide hideTitle]
# Dropping and Truncating

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Data-Definition-And-Data-Types/java-database-and-mysql-data-definition-and-data-types-34-35-dropping-and-truncating-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
