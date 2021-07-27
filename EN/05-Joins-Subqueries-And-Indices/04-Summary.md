[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Joins-Subqueries-and-Indices/interactive-java-databases-and-mysql-joins-subqueries-and-indices-31-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- How join data from different tables
    ```Java
    SELECT * FROM employees AS e
    JOIN departments AS d
    ON d.department_id = e.department_id;
    ```

- Subqueries are used to nest queries

    ```java
    SELECT COUNT(e.employee_id) AS 'count'
    FROM employees AS e
    WHERE e.salary >
    (
    SELECT AVG(salary) AS
    'average_salary' FROM employees
    );
    ```

- Indices improve SQL search performance if used properly
    ```java
    CREATE INDEX ix_users_first_name_last_name​
    ON users(first_name, last_name);
    ```

## In the next lesson you will learn:

- What UDF is and where to use it

- Triggers and their usage

- Stored procedure, their differences with UDF, and usage

[/slide]
