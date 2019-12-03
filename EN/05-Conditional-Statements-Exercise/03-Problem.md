[slide]
# Problem: Time + 15 Minutes
[code-task title="Time + 15 Minutes" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program that reads from the console an **hour** and **minutes** from 24-hour day, and calculates what will be the time **after 15 minutes**. 

# Input
The input consists **two** lines:
- The hours - integer in range \[0...23\]
- The minutes - integer in range \[0...59\]

# Output
Print the result in the following format: "\{hours\}:\{minutes\}".
- The hours should be formatted **without leading zero**.
- The minutes should be formatted **with leading zero**.

# Example
| **Input** | | **Output** |
| --- | --- | --- |
| 11| | 11:23|
| 08| | |

| **Input** | | **Output** |
| --- | --- | --- |
| 1 || 2:01 | 
| 46 | | |
[/task-description]
[tests]
[test]
[input]
1
46
[/input]
[output]
2:01
[/output]
[/test]
[test]
[input]
0
01
[/input]
[output]
0:16
[/output]
[/test]
[test]
[input]
23
59
[/input]
[output]
0:14
[/output]
[/test]
[test]
[input]
11
08
[/input]
[output]
11:23
[/output]
[/test]
[test]
[input]
12
49
[/input]
[output]
13:04
[/output]
[/test]
[test]
[input]
0
0
[/input]
[output]
0:15
[/output]
[/test]
[test]
[input]
0
44
[/input]
[output]
0:59
[/output]
[/test]
[test]
[input]
0
45
[/input]
[output]
1:00
[/output]
[/test]
[test]
[input]
0
48
[/input]
[output]
1:03
[/output]
[/test]
[test]
[input]
0
59
[/input]
[output]
1:14
[/output]
[/test]
[test]
[input]
8
30
[/input]
[output]
8:45
[/output]
[/test]
[test]
[input]
12
35
[/input]
[output]
12:50
[/output]
[/test]
[test]
[input]
12
45
[/input]
[output]
13:00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]