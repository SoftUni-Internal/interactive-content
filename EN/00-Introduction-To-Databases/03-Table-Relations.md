[slide hideTitle]
# Problem: Salary Level Function
[code-task title="Salary Level Function" taskId="java-db-and-MySQL-database-programmability-salary-level-function" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
```
create table salaries (
	salary decimal(10,2)
);
insert into salaries values ('13500.00'), ('43300.00'), ('125500.00'),
('30000.00'), ('50000.00');
```
[/code-adapter]
[task-description]
# Description

Write a function **ufn_get_salary_level** that receives the **salary of an employee** and returns their salary level.

- If the salary is **< 30000**, return "**Low**"
- If the salary is **between 30000 and 50000** (inclusive), return "**Average**"
- If the salary is** > 50000**, return "**High**"


## Examples
Here is a list of employees **living in Sofia**.

| **salary** | **salary_Level** |
| --- | --- | 
| 13500.00 | Low |
| 43300.00  | Average |
| 125500.00 | High |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
select salary, ufn_get_salary_level(salary) from salaries order by salary;
[/input]
[output]
13500.00
Low
30000.00
Average
43300.00
Average
50000.00
Average
125500.00
High
[/output]
[/test]
[test]
[input]
select ufn_get_salary_level(13500.00);
[/input]
[output]
Low
[/output]
[/test]
[test]
[input]
select ufn_get_salary_level(43300.00);
[/input]
[output]
Average
[/output]
[/test]
[test]
[input]
select ufn_get_salary_level(125500.00);
[/input]
[output]
High
[/output]
[/test]
[test]
[input]
select ufn_get_salary_level(30000.00);
[/input]
[output]
Average
[/output]
[/test]
[test]
[input]
select ufn_get_salary_level(50000.00);
[/input]
[output]
Average
[/output]
[/test]
[/tests]
[/code-task]
[/slide]