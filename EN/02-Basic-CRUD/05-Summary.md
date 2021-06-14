[slide hideTitle]
# Summary

## In this lesson you learned:

- The **CRUD** operations - Create, Read, Update Delete
- The capabilities of SQL **SELECT**

- Retrieving data from the database with **queries**

    ```Java
    SELECT
        concat(`first_name`,' ',`last_name`) AS 'full_name',
        `course` AS  'Course',  
        `grade` AS 'Grade'
    FROM `students`;
    ```

- Visualizing data

    ```java
        SELECT concat_ws(' ', `first_name`, `last_name`) AS `full_name`
        FROM `students`
    ```

- Filtering data

    ```java
    SELECT `first_name` AS 'First Name'
           `second_name` AS 'Last Name'
           `age` AS 'Age'
    FROM `students`
    WHERE `course_id` = 10
    ```
- The definition of **Views** and how to make one

    ```java
    CREATE VIEW [any combination of columns] 
    AS (SELECT `full_name`, `course`, `study_hours`)
    FROM `RandomColumns`
    ```
- Persisting data

    ```java
    INSERT INTO `students`(`first_name`, `last_name`, `age`, `course_name`) 
    VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications'),
           ('Jane', 'Doe', '12', 'JavaScript Basics'),
           ('John', 'Doe', '16', 'Java Advanced'), ...
    ```
- Modifying data with **UPDATE** and **DELETE** statements

    - Updating:
    ```java
    DELETE FROM `employees`      
    WHERE `employee_id` = 1;   
    ```

    - Deleting:
    ```java
    TRUNCATE TABLE `users`;
    ```


## In the next lesson you will learn:

- Built-in functions
- Wildcards
- Regular expressions
- Grouping
- The HAVING clause

[/slide]
