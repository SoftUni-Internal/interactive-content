[slide]
# Problem: Harvest
[code-task title="Harvest" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
40 % of the wine-making crop is allocated from a vineyard of X square meters. 

From 1 square meter vineyard are earn **Y kilos of grapes**. 

For 1 liter of wine are needed **2.5 kg grapes**. 

The desired amount of wine for sale is **Z liters**. 

Write a program that calculates how much wine can be produced and whether this quantity is enough. 
- If sufficient, the remainder is divided equally between the workers of the vineyard.

# Input
The entrance is read from the console and consists of exactly 4 rows:
- **X sq. m is the vineyard** - integer in range \[10 … 5000\]
- **Y grapes for one sq. m** - floating-point number in range \[0.00 … 10.00\]
- **Z need liters of wine** - integer in range \[10 … 600\]
- **Number of workers** - integer in range \[1 … 20\]

# Output
The following should be printed on the console: 
-  If the wine produced is less than necessary:
    - "It will be a tough winter! More \{unattainable wine\} liters wine needed."
        - The result must be rounded to a lower integer
- If the wine produced is more than necessary:
    - "Good harvest this year! Total Wine: \{Total wine\} liters."
        - The result must be rounded to a lower integer
    -  "\{remaining wine\} liters left -> \{wine for 1 worker\} liters per person."
        - Both results must be rounded to the higher integer

# Example
| **Input** | | **Output** |
| --- | --- | --- |
| 650 | | Good harvest this year! Total wine: 208 liters. |
| 2 | | 33 liters left -> 11 liters per person. |
| 175 | | |
| 3 | | |

## Comments
- Total Grapes: 650 \* 2 = 1300
- Wine = 40% \* 1300/2.5 = 208
- 208 > 175 
- 208 \- 175 = 33 liters remain \-> 11 liters per person

# Example
| **Input** | | **Output** |
| --- | --- | --- |
| 1020 | | It will be a tough winter! More 180 liters wine needed.|
| 1.5 | | |
| 425 | | |
| 4 | | |

[/task-description]
[tests]
[test]
[input]
650
2
175
3
[/input]
[output]
Good harvest this year! Total wine: 208 liters.
33 liters left -> 11 liters per person.
[/output]
[/test]
[test]
[input]
1020
1.5
425
4
[/input]
[output]
It will be a tough winter! More 180 liters wine needed.
[/output]
[/test]
[test]
[input]
525
1.75
300
2
[/input]
[output]
It will be a tough winter! More 153 liters wine needed.
[/output]
[/test]
[test]
[input]
950
3
125
7
[/input]
[output]
Good harvest this year! Total wine: 456 liters.
331 liters left -> 48 liters per person.
[/output]
[/test]
[test]
[input]
2450
3.5
560
4
[/input]
[output]
Good harvest this year! Total wine: 1372 liters.
812 liters left -> 203 liters per person.
[/output]
[/test]
[test]
[input]
3000
0.5
333
10
[/input]
[output]
It will be a tough winter! More 93 liters wine needed.
[/output]
[/test]
[test]
[input]
320
0.00
600
5
[/input]
[output]
It will be a tough winter! More 600 liters wine needed.
[/output]
[/test]
[test]
[input]
750
2.5
300
5
[/input]
[output]
Good harvest this year! Total wine: 300 liters.
0 liters left -> 0 liters per person.
[/output]
[/test]
[test]
[input]
5000
5.5
245
20
[/input]
[output]
Good harvest this year! Total wine: 4400 liters.
4155 liters left -> 208 liters per person.
[/output]
[/test]
[test]
[input]
150
2.1
130
9
[/input]
[output]
It will be a tough winter! More 79 liters wine needed.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]