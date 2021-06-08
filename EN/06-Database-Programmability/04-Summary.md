[slide hideTitle]
# Summary

## In this lesson you learned:

- What a User-Defined-Function is
    ```java
    CREATE FUNCTION CalculateAmount(userid INT) RETURNS float(10,2)
    BEGIN
        DECLARE totalCredits FLOAT;
        SELECT SUM(amount) INTO totalAmount FROM credit_user WHERE id = userid;
        RETURN totalAmount;
    END  
    ```

- We can optimize with UDF

- Triggers: how to create them and how to use them before and after a certain event
    ```java
    CREATE TABLE account (
    acct_number INT PRIMARY KEY,
    totalAmount DECIMAL(10,2));

    CREATE TRIGGER ins_sum BEFORE INSERT ON account
    FOR EACH ROW SET @sum = @sum + NEW.totalAmount;

    DROP TRIGGER ins_sum;
    ```

- Stored procedures transfers logic from the application server to the 
    Example of parameterized procedure
    ```java
    DELIMITER $$
    CREATE PROCEDURE usp_select_employees_by_seniority(min_years_at_work INT)
    BEGIN
      SELECT first_name, last_name, hire_date,
        ROUND(DATEDIFF(NOW(),DATE(hire_date)) / 365.25,0) AS 'years'
      FROM employees
      WHERE ROUND(DATEDIFF(NOW(),DATE(hire_date)) / 365.25,0) > min_years_at_work
      ORDER BY hire_date;
    END $$
    CALL usp_select_employees_by_seniority(15);
    ```

## In the next lesson, you will learn:

- Transations
    - definition
- Improving the security and consistency

[/slide]
