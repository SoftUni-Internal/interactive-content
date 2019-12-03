[slide]
# Problem: Odd / Even Position
[code-task title="Odd / Even Position" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program that reads the **n** - **count** of **numbers** entered by the user, and **calculates** the **amount** of the **minimum** and **maximum** numbers of **odd** and **even** positions (counting from **1**). 

If there **is not** minimum/maximum element print "**No**".

# Input
- On the first input line read count of numbers - N - integer \[0...100\]
- On every next line read a number - floating-point number \[-100...100\]

# Output
The output should be **formatted** in the following form:
**"OddSum="** + \{**sum** of the numbers on **odd** positions\},

**"OddMin="** + \{**minimum** value of the numbers of **odd** positions\} / \{**"No"**\},

**"OddMax="** + \{**maximum** value of the numbers of **odd** positions\} / \{**"No"**\},

**"EvenSum="** + \{**sum** of the numbers of **even** positions\},

**"EvenMin="** + \{**minimum** value of the numbers of **even** positions\} / \{**"No"**\},

**"EvenMax="** + \{**maximum** value of the numbers of **even** positions\} / \{**"No"**\}

**Each number should be formatted to the second decimal point.**

# Example

| **Input** | | **Output** |   
| --- | --- | --- |
| 5 | | OddSum=8.00, | |
| 3 | | OddMin=-3.00, |
| -2 | | OddMax=8.00, | | |
| 8 | | EvenSum=9.00, | |
| 11 | | EvenMin=-2.00, | | 
| -3 | | EvenMax=11.00 |

| **Input** | | **Output** |
| --- | --- | --- |
| 0 | | OddSum=0.00, |
| | | OddMin=No, |
| | | OddMax=No, |
| | | EvenSum=0.00, |
| | | EvenMin=No, |
| | | EvenMax=No |
[/task-description]
[tests]
[test]
[input]
6
2
3
5
4
2
1
[/input]
[output]
OddSum=9.00,
OddMin=2.00,
OddMax=5.00,
EvenSum=8.00,
EvenMin=1.00,
EvenMax=4.00
[/output]
[/test]
[test]
[input]
2
1.5
-2.5
[/input]
[output]
OddSum=1.50,
OddMin=1.50,
OddMax=1.50,
EvenSum=-2.50,
EvenMin=-2.50,
EvenMax=-2.50
[/output]
[/test]
[test]
[input]
1
1
[/input]
[output]
OddSum=1.00,
OddMin=1.00,
OddMax=1.00,
EvenSum=0.00,
EvenMin=No,
EvenMax=No
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
OddSum=0.00,
OddMin=No,
OddMax=No,
EvenSum=0.00,
EvenMin=No,
EvenMax=No
[/output]
[/test]
[test]
[input]
5
3
-2
8
11
-3
[/input]
[output]
OddSum=8.00,
OddMin=-3.00,
OddMax=8.00,
EvenSum=9.00,
EvenMin=-2.00,
EvenMax=11.00
[/output]
[/test]
[test]
[input]
4
1.5
1.75
1.5
1.75
[/input]
[output]
OddSum=3.00,
OddMin=1.50,
OddMax=1.50,
EvenSum=3.50,
EvenMin=1.75,
EvenMax=1.75
[/output]
[/test]
[test]
[input]
1
-5
[/input]
[output]
OddSum=-5.00,
OddMin=-5.00,
OddMax=-5.00,
EvenSum=0.00,
EvenMin=No,
EvenMax=No
[/output]
[/test]
[test]
[input]
3
-1
-2
-3
[/input]
[output]
OddSum=-4.00,
OddMin=-3.00,
OddMax=-1.00,
EvenSum=-2.00,
EvenMin=-2.00,
EvenMax=-2.00
[/output]
[/test]
[test]
[input]
5
1.5
-4.5
7
-8.5
9
[/input]
[output]
OddSum=17.50,
OddMin=1.50,
OddMax=9.00,
EvenSum=-13.00,
EvenMin=-8.50,
EvenMax=-4.50
[/output]
[/test]
[test]
[input]
10
-4.5
3433.5
-180.33
323.2
-55.55
28.28
-30.30
44.44
-77.77
88.88
[/input]
[output]
OddSum=-348.45,
OddMin=-180.33,
OddMax=-4.50,
EvenSum=3918.30,
EvenMin=28.28,
EvenMax=3433.50
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]