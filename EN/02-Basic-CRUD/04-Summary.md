[slide hideTitle]
# Summary

# In this lesson we learned:

- What is the acronym **CRUD**.
- Capabilities of SQL **SELECT**
- How to retrieve data from the database with **queries**.

    ```Java
    SELECT
        concat(`first_name`,' ',`last_name`) AS 'full_name',
        `course` AS  'Course',  
        `grade` AS 'Grade'
    FROM students;
    ```

- How to visualize data.

    ```java
        SELECT concat_ws(' ', `first_name`, `last_name`) AS `full_name`
        FROM `students`
    ```

- How to filter our data.

    ```java
    SELECT `first_name` AS 'First Name'
           `second_name` AS 'Last Name'
           `age` AS 'Age'
    FROM `students
    WHERE course_id = 10
    ```
- What is **View** and how to make one.

    ```java
    CREATE VIEW `Combination of columns` 
    AS
    SELECT `full_name`, 
            `course`, 
            `study_hours` 
    FROM RandomColumns
    ```
- How to persist data in our database.

    ```java
    INSERT INTO students(`first_name`, `last_name`, `age`, `course_name`) 
    VALUES ('Maria', 'Richardson', '22', 'JavaScript Applications'),
           ('Jane', 'Doe', '12', 'JavaScript Basics'),
           ('John', 'Doe', '16', 'Java Advanced'), ...
    ```
- How to modify data with **UPDATE** and **DELETE** statements.

    - Update records like:
    ```java
    DELETE FROM `employees`      //Here we delete from table employees
    WHERE `employee_id` = 1;     //where the condition is true.
    ```

    - Delete like:
    ```java
    TRUNCATE TABLE `users`;
    ```


# In the next lesson, we will learn:

- Different build-in **functions** in MYSQL.
- Wildcards
- Regular expressions
- Grouping
- Having

[/slide]