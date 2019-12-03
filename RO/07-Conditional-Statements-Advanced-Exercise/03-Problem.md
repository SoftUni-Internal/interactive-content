[slide]
# Problem: Trade Commissions
[code-task title="Trade Commissions" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

A company gives the following **commissions** to its businessmen according to the **city** they work in and the **amount** of **sales s**:

| **Sales / City** | | London | | New York | | Sydney|
| --- | --- | --- | --- | --- | --- | --- |
| \[0-500\]| | 5%| | 4.5%| | 5.5%|
| \[501-1000\]| | 7%| | 7.5%| | 8%|
| \[1001-10000\]| | 8%| | 10%| | 12%|
| s > 10000| | 12%| | 13%| | 14.5%|

Write a console program **that reads as input the** name of a **city** and the **amount of sales** and calculates the value of the **trade commission**. 

# Input
Read from the console two lines:
- Name of a city - String
- Amount of sales - floating-point number

# Output
Print on the console the calculated value of trade commission.

The result should be **formatted to the second decimal point**. 

If you receive **invalid** name of city **or** amount of sales (negative number), print "**error**".

# Example
| **Input** | | **Output** |  
| --- | --- | --- |
| London | | 120.00 | 
| 1500 | | |  


| **Input** | | **Output** | 
| --- | --- | --- | 
| Moscow | | error |
| -50 | | |
[/task-description]
[tests]
[test]
[input]
London
1500
[/input]
[output]
120.00
[/output]
[/test]
[test]
[input]
Sydney
499.99
[/input]
[output]
27.50
[/output]
[/test]
[test]
[input]
New York
3874.50
[/input]
[output]
387.45
[/output]
[/test]
[test]
[input]
Moscow
-50
[/input]
[output]
error
[/output]
[/test]
[test]
[input]
London
0.6
[/input]
[output]
0.03
[/output]
[/test]
[test]
[input]
London
501
[/input]
[output]
35.07
[/output]
[/test]
[test]
[input]
London
10005
[/input]
[output]
1200.60
[/output]
[/test]
[test]
[input]
New York
500
[/input]
[output]
22.50
[/output]
[/test]
[test]
[input]
New York
1000
[/input]
[output]
75.00
[/output]
[/test]
[test]
[input]
New York
9999.9999
[/input]
[output]
1000.00
[/output]
[/test]
[test]
[input]
New York
350824
[/input]
[output]
45607.12
[/output]
[/test]
[test]
[input]
Sydney
1.25
[/input]
[output]
0.07
[/output]
[/test]
[test]
[input]
Sydney
1000
[/input]
[output]
80.00
[/output]
[/test]
[test]
[input]
Sydney
8543.86
[/input]
[output]
1025.26
[/output]
[/test]
[test]
[input]
Sydney
10000.01
[/input]
[output]
1450.00
[/output]
[/test]
[test]
[input]
Madrid
1500
[/input]
[output]
error
[/output]
[/test]
[test]
[input]
Sydney
-20
[/input]
[output]
error
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]