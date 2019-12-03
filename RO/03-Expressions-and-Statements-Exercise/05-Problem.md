[slide]
# Problem: Pet Shop
[code-task title="Pet Shop" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program that **calculates the expenses** for buying food for dogs and other animals. 

Each package of **food for dogs costs 2.5 dollars**, and every other that\'s **NOT** for them - 4 dollars.

# Input

The input will be **two** lines from the console:
- Number of **dogs** - integer in range \[0… 100\]
- Number of the **others animals** - integer in range \[0… 100\]

# Output
Print on the console: **"\{total sum\} dollars"**. The result should be **formatted to the second decimal point**.

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| 5 | | 28.50 dollars |
| 4 | | |


| **Input** | | **Output** |
| --- | --- | --- |
| 13 | | 68.50 dollars |
| 9 | | |
[/task-description]
[tests]
[test]
[input]
5
4
[/input]
[output]
28.50 dollars
[/output]
[/test]
[test]
[input]
13
9
[/input]
[output]
68.50 dollars
[/output]
[/test]
[test]
[input]
11
3
[/input]
[output]
39.50 dollars
[/output]
[/test]
[test]
[input]
15
2
[/input]
[output]
45.50 dollars
[/output]
[/test]
[test]
[input]
14
12
[/input]
[output]
83.00 dollars
[/output]
[/test]
[test]
[input]
11
17
[/input]
[output]
95.50 dollars
[/output]
[/test]
[test]
[input]
19
0
[/input]
[output]
47.50 dollars
[/output]
[/test]
[test]
[input]
20
4
[/input]
[output]
66.00 dollars
[/output]
[/test]
[test]
[input]
0
0
[/input]
[output]
0.00 dollars
[/output]
[/test]
[test]
[input]
6
15
[/input]
[output]
75.00 dollars
[/output]
[/test]
[test]
[input]
24
88
[/input]
[output]
412.00 dollars
[/output]
[/test]
[test]
[input]
30
20
[/input]
[output]
155.00 dollars
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]