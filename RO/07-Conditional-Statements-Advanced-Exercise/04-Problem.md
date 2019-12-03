[slide]
# Problem: Point on Rectangle Border
[code-task title="Point on Rectangle Border" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

Write a program to check if a **point {x, y}** is **on** some of the sides of a rectangle **{x1, y1} – {x2, y2}**.  

# Input

The input comes from the console and it consists of **6 rows, introduced from the user: real numbers x1, y1, x2, y2, x and y** (it will be always true that **x1 < x2** and **y1 < y2**).

# Output

If the point lies on one of the rectangle's sides:
- Print "**Border**"

If the point does NOT lie on a side:
- Print "**Inside / Outside**"

# Example

| **Input** | | **Output** 
| --- | --- | --- |
| 2 | | Inside / Outside |
| -3 | | |
| 12 | | |
| 3 | | |
| 8 | | |
| -1 | | | 

| **Input** | | **Output** | 
|  --- | --- | --- |
| 2| | Border|
| -3| | |
| 12| | |
| 3| | |
| 12| | |
| -1| | |

\* **Hint**: use one or more conditional **if** statements with logical operations. A point **{x, y}** lies on aside of a rectangle **{x1, y1} – {x2, y2}**, if it's fulfilled one of the specified conditions:

- **x** equals **x1** or **x2** and at the same time **y** is between **y1** and **y2**
- **y** equals **y1** or **y2** and at the same time **x** is between **x1** and **x2**

You can check the conditions above using one more complicated **if**-**else** construction or using few more simple conditional statements or **nested if**-**else statements.**
[/task-description]
[tests]
[test]
[input]
2
-3
12
3
8
-1
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
12
-1
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
-8
-1
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
80
-1
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
-8
-10
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
8
100.5
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
-1
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
6.28
-3
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
10
3
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
3
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
1
3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
4
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
12
4
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
13.456
3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
14
-3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
12
-4
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
-5
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
1.43
-3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]