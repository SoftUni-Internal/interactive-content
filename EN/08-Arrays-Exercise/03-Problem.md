[slide]
# Zig-Zag Arrays
[code-task title="Zig-Zag Arrays" taskId="python-fundamentals-arrays-3" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program which creates **2 arrays**.

You will be given an **integer n**.

On the **next n lines** you get **2 integers**.

Form 2 arrays as **shown below**.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | 80 19 |
| 80 23 | 23 31 |
| 31 19 | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
4
1 5
9 10
31 81
41 20
[/input]
[output]
1 10 31 20
5 9 81 41
[/output]
[/test]
[test]
[input]
2
80 23
31 19
[/input]
[output]
80 19
23 31
[/output]
[/test]
[test]
[input]
3
1 2
3 4
5 6
[/input]
[output]
1 4 5
2 3 6
[/output]
[/test]
[test]
[input]
4
1 2
3 4
5 6
7 8
[/input]
[output]
1 4 5 8
2 3 6 7
[/output]
[/test]
[test]
[input]
1
1 2
[/input]
[output]
1
2
[/output]
[/test]
[test]
[input]
3
1 2
3 2
4 2
[/input]
[output]
1 2 4
2 3 2
[/output]
[/test]
[test]
[input]
5
0 0
1 1
2 2
3 3
4 4
[/input]
[output]
0 1 2 3 4
0 1 2 3 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]