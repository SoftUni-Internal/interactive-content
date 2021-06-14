[slide hideTitle]

# Summary

## In this lesson you learned:

- What Data Types are and how to use them
    
    ```Java
    VARCHAR(50)
    DOUBLE(12,3)
    DATETIME
    ```
- The main types of data you can use are String, Numerical and DATETIME


- How we model databases

- SQL Queries
    - Table creation:
    ```Java
    CREATE TABLE `people`
    (`id` INT NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `first_name` VARCHAR(50),
    `last_name` VARCHAR(50)
    );
    ```
    - Selecting all records:

    ```Java
    SELECT * FROM `people`
    ```

    - Inserting records:
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
