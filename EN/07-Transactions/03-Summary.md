[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Databases-and-MySQL/EN/Transactions/interactive-mysql-database-transactions-12-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

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
    * atomicity
    * consistency
    * isolation
    * durability


[/slide]
