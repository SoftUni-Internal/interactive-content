[slide]

# Summary

- Joins
    ```Java
    SELECT * FROM employees AS e
    JOIN departments AS d
    ON d.department_id = e.department_id;
    ```

- Subqueries are used to nest queries

    ```java
    SELECT COUNT(e.employee_id) AS 'count'
    FROM employees AS e​
    WHERE e.salary >​
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

[/slide]
