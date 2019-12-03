[slide]
# Problem: Fishland
[code-task title="Fishland" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
George decides to buy **tuna, scads** and **mussels**. 

Read from the console prices **of mackerel and sprats**, the **quantity of tuna**, **scads and mussels** in **kilograms**. 

**Calculate how much money** will he need to pay his bill, if the **prices** at the Fishland are:
- Tuna - **60% more expensive than the mackerel**
- Scads - **80% more expensive than the sprats**
- Mussels - **7.50 dollars per kilogram**

# Input
You have to read **5** numbers from the console:
- **the price of the mackerel per kilogram** - floating-point number in range [0.00…40.00]
- **the price of the sprats per kilogram** - floating-point number in range [0.00…30.00]
- **kilograms of tuna** - floating-point number in range [0.00…50.00]
- **kilograms of scads** - floating-point number in range [0.00…70.00]
- **kilograms of mussels** - integer number in range [0...100]

# Output
Print on the console a **single** number with floating point: **the money** George will need to pay the bill, **formatted to the second decimal point**.

# Example
| **Input** | | **Output** |
| --- | --- | --- |
| 6.90 | | 42.96 |
| 4.20 | | |
| 1.50 | | |
| 2.50 | | |
| 1 | | |

# Comments
- The price of the tuna = 6.90 + 6.90 \* 0.60 = 11.04 $/kg
- Total sum of tuna = 1.5 \* 11.04 = 16.56
- The price of the scads = 4.20 + 4.20 \* 0.80 =  7.56$/kg
- Total sum of scads = 2.5 \* 7.56 = 18.90
- The total sum of mussels = 1 \* 7.50 = 7.50
- Bill = 16.56 + 18.90 + 7.50 = 42.96

[/task-description]
[tests]
[test]
[input]
6.90
4.20
1.5
2.5
1
[/input]
[output]
42.96
[/output]
[/test]
[test]
[input]
5.55
3.57
4.3
3.6
7
[/input]
[output]
113.82
[/output]
[/test]
[test]
[input]
7.79
5.35
9.3
0
0
[/input]
[output]
115.92
[/output]
[/test]
[test]
[input]
2.22
2.52
3
4
5
[/input]
[output]
66.30
[/output]
[/test]
[test]
[input]
7.5432
9.432
0.4
0.2
9
[/input]
[output]
75.72
[/output]
[/test]
[test]
[input]
10.50
9.25
12.2
13.2
5
[/input]
[output]
462.24
[/output]
[/test]
[test]
[input]
16.121
26.27
25
52
26
[/input]
[output]
3298.71
[/output]
[/test]
[test]
[input]
19.99
12.24
23
29
2
[/input]
[output]
1389.56
[/output]
[/test]
[test]
[input]
27
22
10
10
10
[/input]
[output]
903.00
[/output]
[/test]
[test]
[input]
31
12
22.22
11.11
43
[/input]
[output]
1664.59
[/output]
[/test]
[test]
[input]
29.99
29.99
29.99
29.99
29
[/input]
[output]
3275.46
[/output]
[/test]
[test]
[input]
39.99
29.99
39.98
58.85
69
[/input]
[output]
6252.42
[/output]
[/test]
[test]
[input]
39.99
29.99
49.99
69.99
99
[/input]
[output]
7719.26
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]