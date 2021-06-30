[slide hideTitle]
# Problem: Calculating Interest
[code-task title="Calculating Interest" taskId="java-db-and-MySQL-database-programmability-calculating-interest" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
```
create table deposits (
	sum decimal(10, 2),
	interest decimal(10, 2),
	years int(4)
);

insert into deposits values (1000.0, 0.10, 5), (1000.55, 0.08, 5), 
(1500.0, 0.04, 2), (1750.21, 0.02, 1), (1925.98, 0.05, 3), (2500.98, 0.05, 0), 
(3000.98, 0.00, 10), (0.0000, 0.05, 10);
```
[/code-adapter]
[task-description]
# Description
Your task is to write a stored procedure **usp_calculate_future_value_for_account** that accepts two parameters - an account **id** and an **interest** rate. 

The procedure uses the function from the previous problem to calculate the future value of a person's account **for 5 years**, along with information about their **account id**, **first name**, **last name** and **current balance**, as shown in the example below. 

As mentioned above, it accepts the **account_id** and the **interest_rate** as parameters. 

The interest rate should have precision up to 0.0001, the same as the calculated balance after 5 years. 

**It is important to achieve the specified precision.**

## Examples

Here is the result for **account_id = 1** and **interest_rate = 0.1**.

| **account_id** |**first_name** |**last_name** |**current_balance** |**balance_in_5_years** |
| --- | --- |--- |--- |--- |
| 1 | Susan | Cane | 123.1200 |198.2860|




[/task-description]
[code-io /]
[tests]
[test open]
[input]
CALL usp_calculate_future_value_for_account (1, 0.1);
[/input]
[output]
1
Susan
Cane
123.1200
198.2860
[/output]
[/test]
[test]
[input]
CALL usp_calculate_future_value_for_account (1, 0.1);
[/input]
[output]
1
Susan
Cane
123.1200
198.2860
[/output]
[/test]
[test]
[input]
CALL usp_calculate_future_value_for_account (5, 0.01);
[/input]
[output]
5
Zlock
Zlotowitz
36521.2000
38384.1482
[/output]
[/test]
[test]
[input]
CALL usp_calculate_future_value_for_account (1, 0.0000);
[/input]
[output]
1
Susan
Cane
123.1200
123.1200
[/output]
[/test]
[test]
[input]
CALL usp_calculate_future_value_for_account (1, 0.0001);
[/input]
[output]
1
Susan
Cane
123.1200
123.1816
[/output]
[/test]
[test]
[input]
CALL usp_calculate_future_value_for_account (5, 0.00001);
[/input]
[output]
5
Zlock
Zlotowitz
36521.2000
36521.2000
[/output]
[/test]
[test]
[input]
CALL usp_calculate_future_value_for_account (10, 0.00007);
[/input]
[output]
10
Kim
Novac
543.3000
543.5717
[/output]
[/test]
[/tests]
[/code-task]
[/slide]