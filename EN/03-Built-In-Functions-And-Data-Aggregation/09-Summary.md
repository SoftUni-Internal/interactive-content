[slide hideTitle]

# Summary

# In this lesson you learned:

- Functions in MySQL
  * String Functions
    ``` java
    SELECT SUBSTRING('softuni.org',2);
    SELECT RTRIM('Softuni rocks!'     )
    SELECT REPLACE('aaa.softuni.org','a','w');
    SELECT REVERSE('softuni');
    ```
  * Aggregate Functions
    ``` java
    SELECT e.`department_id`, 
    AVG(e.`salary`) AS 'AvgSalary'
    FROM `employees` AS e
    GROUP BY e.`department_id`;
    ```

  * Math Functions
    ``` java
    SELECT ABS(-243.5);
    SELECT SQRT(1024);
    SELECT POW(5, 2);
    ```

  * Date Functions
    ```java
    SELECT EXTRACT(YEAR FROM "1995-11-24");
    SELECT DATE_FORMAT('2015/01/16', '%Y %b %D') AS 'Date';
    ```

  * Wildcards
    ```java
    WHERE ContactName LIKE 'a%o';  # It will find values that starts with "a" and ends with "o".
    WHERE CustomerName LIKE '_r%'; # It will find values that have "r" in second position.
    WHERE CustomerName LIKE 'a%';  # It will find any values that starts with "a" (Customer name in our case).
    ```

  * Grouping
    ``` java
    SELECT e.`job_title`, count(employee_id) # This query would return a list of position 
    FROM `employees` AS e                    # titles and the number of employees assigned to each one of them.
    GROUP BY e.`job_title`;
    ```

  * Having 
    ``` java
    SELECT e.`department_id`,
    SUM(e.salary) AS 'TotalSalary'
    FROM `employees` AS e
    GROUP BY e.`department_id`
    HAVING 'TotalSalary' < 25000;
    ```

# In the next lesson you will learn:

- Table Relation

[/slide]
