# Nested for Loops

[slide]
# Video

[vimeo-video startTimeInSeconds="2796" endTimeInSeconds="3508"]
[stream language="EN" videoId="345185854"  /]
[stream language="RO" videoId="393622973" default /]
[/vimeo-video]

[/slide]

[slide]
# Nested for Loops
Statements that consist of several **for loops** located **inside each other**

**Nested for loops** are used:

* To execute an **action**, which **executes** multiple **actions**
* To make more **complex** calculations and variations

The syntax for a **nested for loop in Python** is as follows:
```py live
a = 3
b = 3

for i in range(0, a):
    print(f'i = {i}')
    for j in range(0, b):
        print(f'  j = {j}')
```
[/slide]

[slide]
# Problem: Triangle of Stars
[code-task title="Triangle of Stars" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads the height of a triangle from the console
* Prints a triangle of stars

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | \* |
| | \*\* |
| | \*\*\* |
| | \*\*\*\*\ |
| | \*\*\*\*\* |
[/task-description]
[tests]
[test]
[input]
3
[/input]
[output]
*
**
***
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Triangle of Stars
[code-task title="Triangle of Stars" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
height = int(input())
for i in range(1, height + 1):
    for j in range(1, i + 1):
        print("*", end="");
    print()
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads the height of a triangle from the console
* Prints a triangle of stars

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | \* |
| | \*\* |
| | \*\*\* |
| | \*\*\*\*\ |
| | \*\*\*\*\* |
[/task-description]
[tests]
[test]
[input]
3
[/input]
[output]
*
**
***
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]