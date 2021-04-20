[slide hideTitle]

# Summary

- Transactions
  ``` java
  CREATE PROCEDURE usp_raise_salary_by_id(id int)
  BEGIN
  	START TRANSACTION;
  	IF((SELECT count(employee_id) FROM employees WHERE employee_id like id)<>1) THEN
  	ROLLBACK;
  	ELSE
  		UPDATE employees AS e SET salary = salary + salary*0.05 
  		WHERE e.employee_id = id;
  	END IF; 
  END
  ```


- Transaction Properties
  - Atomicity
  - Consistency
  - Isolation
  - Durability


[/slide]
