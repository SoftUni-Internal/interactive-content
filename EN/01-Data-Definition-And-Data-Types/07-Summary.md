[slide hideTitle]

# Summary

## In this lesson you learned:

- What Data Types are and how to use them
    
    ```Java
    INT[(12)];
    DOUBLE[(12, 3)] 
    ```

- How we model databases

- SQL Queries
    
    ```Java
    CREATE TABLE people
    (id INT NOT NULL,
    email VARCHAR(50) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
    );

    SELECT *
    FROM people
    ```

- How to modify and delete structures in our database.

    ```Java
    TRUNCATE TABLE employees;

    DROP TABLE employees;

    ALTER TABLE employees
    DROP CONSTRAINT pk_id;
    ```

## In the next lesson, you will learn:

- The query basics 

- Retrieving data from the database

- Persisting data

- Modyfing existing records

[/slide]
