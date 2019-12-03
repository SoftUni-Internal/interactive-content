[slide]
# Problem: Vegetable Market
[code-task title="Vegetable Market" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Gardener is selling his harvest at the vegetable market. 

He sells **vegetables for N dollars per kilogram** and **fruits for M dollars per kilogram**. 

Write a program that **calculates the income** from the harvest in **euros** (**1 USD = 0.89 EUR**).

# Input
The input will be **4 numbers**, each on a single line:
- **The price of kilogram vegetables** - floating-point number [0.00… 1000.00]
- **The price of kilogram fruits** - floating-point number [0.00… 1000.00]
- **The total kilograms of vegetables** - integer [0… 1000]
- **The total kilograms of fruits** - integer [0… 1000]

# Output
Print on the console **a single number**: the income from **all** of the fruits and vegetables in **euro**.

**The result should be formatted to the second decimal point.**

# Example

| **Input** | | **Output** | | **Comments** |
| --- | --- | --- | --- | --- |
| 0.194 | | 174.39 | | The vegetables cost - 0.194$ \* 10kg = 1.94$ |
| 19.4 | | | | The fruits cost - 19.4$ \* 10kg  = 194$ |
| 10 | | | | Total - 195.94$ = 174.39€ |
| 10 | | | | |

| **Input** | | **Output** |
| --- | --- | --- |
| 1.5 | | 35.60 |
| 2.5 | | |
| 10 | | | 
| 10 | | | 
[/task-description]
[tests]
[test]
[input]
0.194
19.4
10
10
[/input]
[output]
174.39
[/output]
[/test]
[test]
[input]
1.5
2.5
10
10
[/input]
[output]
35.60
[/output]
[/test]
[test]
[input]
12.23
10
153
12
[/input]
[output]
1772.16
[/output]
[/test]
[test]
[input]
0
0
0
0
[/input]
[output]
0.00
[/output]
[/test]
[test]
[input]
1
1
1
1
[/input]
[output]
1.78
[/output]
[/test]
[test]
[input]
19.4
0.0194
200
102
[/input]
[output]
3454.96
[/output]
[/test]
[test]
[input]
1000
1000
1000
1000
[/input]
[output]
1780000.00
[/output]
[/test]
[test]
[input]
999.999
1929212
75
23
[/input]
[output]
39557719.57
[/output]
[/test]
[test]
[input]
0.018
0.217
546
897
[/input]
[output]
181.98
[/output]
[/test]
[test]
[input]
14.85
13
932
123
[/input]
[output]
13740.89
[/output]
[/test]
[test]
[input]
232.21
329.99
10
10
[/input]
[output]
5003.58
[/output]
[/test]
[test]
[input]
42
42
42
42
[/input]
[output]
3139.92
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]