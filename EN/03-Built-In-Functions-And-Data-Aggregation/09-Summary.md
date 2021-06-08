[slide hideTitle]

# Summary

# In this lesson you learned:

- **Functions** in MySQL are small pieces of code that manipulate data
  
    * **String** functions modify the characters in a string
    ``` java
    SELECT SUBSTRING('softuni.org',2);
    SELECT RTRIM('Softuni rocks!'     )
    SELECT REPLACE('aaa.softuni.org','a','w');
    SELECT REVERSE('softuni');
    ```

    * **Aggregate** functions make calculations on multiple multiple values, returning a single result
    ``` java
    SELECT e.`department_id`, 
    AVG(e.`salary`) AS 'AvgSalary'
    FROM `employees` AS e
    GROUP BY e.`department_id`;
    ```

    * **Math** functions perform arithmetic operations
    ``` java
    SELECT ABS(-243.5);
    SELECT SQRT(1024);
    SELECT POW(5, 2);
    ```

    * **Date** functions are used for handling date and time
    ```java
    SELECT EXTRACT(YEAR FROM "1995-11-24");
    SELECT DATE_FORMAT('2015/01/16', '%Y %b %D') AS 'Date';
    ```

- **Wildcards** substitute string characters
```java
WHERE ContactName LIKE 'a%o';  // It will find values that starts with "a" and ends with "o".
WHERE CustomerName LIKE '_r%'; // It will find values that have "r" in second position.
WHERE CustomerName LIKE 'a%';  // It will find any values that starts with "a" (Customer name in our case).
```

- **Grouping** helps us obtain data in separeate groups, based on a single property
``` java
SELECT e.`job_title`, count(employee_id) // This query would return a list of position 
FROM `employees` AS e                    // titles and the number of employees assigned to each one of them.
GROUP BY e.`job_title`;
```

- **Having** summarises records, returned by the **GROUP BY** clause
``` java
SELECT e.`department_id`,
SUM(e.salary) AS 'TotalSalary'
FROM `employees` AS e
GROUP BY e.`department_id`
HAVING 'TotalSalary' < 25000;
```

# In the next lesson you will learn:

- **Table Relations**
    * **One-to-many** 
    * **Many-to-many**
    * **One-to-one**
  
- How to **design** a database
  
- What **JOIN statements** are
  
- How to use **cascade** operations
  

[/slide]
