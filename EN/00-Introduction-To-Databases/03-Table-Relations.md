[slide hideTitle]
# Problem: Future Value Function
[code-task title="Future Value Function" taskId="java-db-and-MySQL-database-programmability-future-value-function" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
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
Your task is to write a function **ufn_calculate_future_value** that accepts three parameters - **sum** (with a precision of **4 digits** after the decimal point), **yearly interest rate (double)** and **a number of years (int)**. 

It should calculate and return the **future value of the initial sum**. 

The result from the function **must** be a number **with a precision** of **4 digits** after the decimal point.

Using the following formula:

$$
FV = I x ((1 + R)^T)
$$

[image assetsSrc="Database-Programmability-and-Transactions-1.png" /]

- **I** - Initial sum
- **R** - Yearly interest rate
- **T** - Number of years


## Examples



| **Input** |**Output** |
| --- | --- |
| **Initial sum:** 1000 | 7593.7500 |
| **Yearly Interest rate:** 50%  |   | 
| **Years:** 5 |  |
| ufn_calculate_future_value(1000, 0.5, 5) |  |




[/task-description]
[code-io /]
[tests]
[test open]
[input]
select sum, interest, years, ufn_calculate_future_value(sum, interest, years) as future_sum
from deposits order by sum;
[/input]
[output]
0.00
0.05
10
0.0000
1000.00
0.10
5
1610.5100
1000.55
0.08
5
1470.1362
1500.00
0.04
2
1622.4000
1750.21
0.02
1
1785.2142
1925.98
0.05
3
2229.5626
2500.98
0.05
0
2500.9800
3000.98
0.00
10
3000.9800
[/output]
[/test]
[test]
[input]
SELECT ufn_calculate_future_value(0.0000, 0.05, 10);
[/input]
[output]
0.0000
[/output]
[/test]
[test]
[input]
SELECT ufn_calculate_future_value(1000.0, 0.10, 5);
[/input]
[output]
1610.5100
[/output]
[/test]
[test]
[input]
SELECT ufn_calculate_future_value(1000.55, 0.08, 5);
[/input]
[output]
1470.1362
[/output]
[/test]
[test]
[input]
SELECT ufn_calculate_future_value(1500.0, 0.04, 2);
[/input]
[output]
1622.4000
[/output]
[/test]
[test]
[input]
SELECT ufn_calculate_future_value(1750.21, 0.02, 1);
[/input]
[output]
1785.2142
[/output]
[/test]
[test]
[input]
SELECT ufn_calculate_future_value(1925.98, 0.05, 3);
[/input]
[output]
2229.5626
[/output]
[/test]
[test]
[input]
SELECT ufn_calculate_future_value(2500.98, 0.05, 0);
[/input]
[output]
2500.9800
[/output]
[/test]
[test]
[input]
SELECT ufn_calculate_future_value(3000.98, 0.00, 10);
[/input]
[output]
3000.9800
[/output]
[/test]
[/tests]
[/code-task]
[/slide]