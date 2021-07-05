[slide hideTitle]

# Summary

## In this lesson you learned:

- The data types in MySQL, their uses and limitations
    
    ```Java
    VARCHAR(50)
    DOUBLE(12,3)
    DATETIME
    ```
- The main types of data you can use are `STRING`, `NUMERICAL` and `DATETIME`


- How to model databases using MySQL Workbench

- SQL Queries
    - table creation:
    ```Java
    CREATE TABLE `people`
    (`id` INT NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `first_name` VARCHAR(50),
    `last_name` VARCHAR(50)
    );
    ```
    - selecting all records:

    ```Java
    SELECT * FROM `people`
    ```

    - inserting records:
    ```Java
    INSERT INTO [TABLE_NAME] (column1, column2, column3, column...)
    VALUES (value1, value2, value3, value...);
    ```

- How to modify and delete structures in our database

    ```Java
    TRUNCATE TABLE `employees`;

    DROP TABLE `employees`;

    ALTER TABLE `employees`
    DROP CONSTRAINT `pk_id`;
    ```

## In the next lesson, you will learn:

- More queries

- Retrieving data from the database

- Persisting data

- Modifying existing records

[/slide]
