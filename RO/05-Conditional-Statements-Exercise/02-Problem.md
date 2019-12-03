[slide]
# Problem: Area of Figures
[code-task title="Area of Figures" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

Write a program where user enters type and dimensions of a geometric figure and calculates its area. 

Figures are four types: **square, rectangle, circle and triangle**. 

On the first line of the input you will receive the type of the figure.
- If it\'s **square**, on the next line you will be given a **number** representing **length** of his size. 
- If the type is **rectangle**, on the next **two** lines you have to read its **dimensions**. 
- If it\'s **circle** - on the next line you will receive a single number - the **radius**. 
- If the figure is **triangle**, on the next **two** lines you will be given the **length** of its size and the **height** to it. 

The result should be **formatted to the third decimal point**.

# Example

| **Input** | | **Output** |
| --- | --- | --- | 
| square | | 25.000 | 
| 5 | | |
| | | |

| **Input** | | **Output** |
| --- | --- | --- |
| rectangle | | 17.500|
| 7| | |
| 2.5| | |

| **Input** | | **Output** |
| --- | --- | --- |
| circle| | 113.097|
| 6| | |

| **Input** | | **Output** |
| --- | --- | --- |
| triangle| | 45.000|
| 4.5| | |
| 20| | |
[/task-description]
[tests]
[test]
[input]
square
5
[/input]
[output]
25.000
[/output]
[/test]
[test]
[input]
rectangle
7
2.5
[/input]
[output]
17.500
[/output]
[/test]
[test]
[input]
circle
6
[/input]
[output]
113.097
[/output]
[/test]
[test]
[input]
triangle
4.5
20
[/input]
[output]
45.000
[/output]
[/test]
[test]
[input]
square
7.5
[/input]
[output]
56.250
[/output]
[/test]
[test]
[input]
rectangle
17.2
2.5
[/input]
[output]
43.000
[/output]
[/test]
[test]
[input]
circle
8.55
[/input]
[output]
229.658
[/output]
[/test]
[test]
[input]
triangle
4.5
7.5
[/input]
[output]
16.875
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]