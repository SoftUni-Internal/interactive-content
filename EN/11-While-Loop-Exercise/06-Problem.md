[slide]
# Problem: Walking
[code-task title="Walking" executionType="tests-execution" executionStrategy="python-code" requiresInput ]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Gaby wants to start healthy life and shesets a goal to walk **10000 steps** a **day**.

Write a program **that reads from the console how many steps** Gaby walks every time she is out and **when she reaches the set goal**, print a message: 
- "**Goal reached! Good job!**".

In case she wants to go home **before** reaching the goal, she will enter "**Going home**" command and the **steps** she had **walked** while she was **going home**. 

After that, if she didn\'t manage to reach her goal, you have to print the following massage on the console: 
- "\{difference in steps\} more steps to reach goal."

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| 1000 | | Goal reached! Good job! |
| 1500| | | 
| 2000| | | 
| 6500| | |


| **Input** | | **Output** |
| --- | --- | --- |
| 1500 | | 2500 more steps to reach goal. |
| 300| | |
| 2500| | |
| 3000| | |
| Going home| | |
| 200| | |
[/task-description]
[tests]
[test]
[input]
1000
1500
2000
6500
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
1500
300
2500
3000
Going home
200
[/input]
[output]
2500 more steps to reach goal.
[/output]
[/test]
[test]
[input]
1500
3000
250
1548
2000
Going home
2000
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
125
250
4000
30
2678
4682
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
Going home
10000
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
Going home
2000
[/input]
[output]
8000 more steps to reach goal.
[/output]
[/test]
[test]
[input]
1000
1000
2333
1234
12455
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
10000
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
50
505
50
50
50
50
50
50
50
20
450
30
30
30
20
10
30
1
20
30
340
1000
30
40
200
30
200
20
20
1000
1000
305
5066
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
100
100
200
3004
3445
2344
Going home
4000
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
1321
1345
457
6577
Going home
20
[/input]
[output]
280 more steps to reach goal.
[/output]
[/test]
[test]
[input]
Going home
4500
[/input]
[output]
5500 more steps to reach goal.
[/output]
[/test]
[test]
[input]
350
120
1204
1245
7432
[/input]
[output]
Goal reached! Good job!
[/output]
[/test]
[test]
[input]
5000
344
234
2344
Going home
200
[/input]
[output]
1878 more steps to reach goal.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]