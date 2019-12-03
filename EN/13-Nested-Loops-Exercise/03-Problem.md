[slide]
# Problem: Combinations
[code-task title="Combinations" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

Write a program that calculates **how many solutions in natural numbers (including zero)** has the equation:

```
**x1** \+ **x2** \+ **x3** \+ **x4** \+ **x5** = **n**
```

# Input
- The input consits a single number - n - integer

# Output
- Print on the console the total number of solutions

# Example
| **Input** | **Output** | **Comments** | 
| --- | --- | --- |
| 25 | 23751 | Generate all combinations of 5 digits, the first is: |
| | | 0\+0\+0\+0\+0=0, but because it is not equal to 25,|
| | | continuing 0\+0\+0\+0\+1=1 - again, it\'s not 25, etc. |
| | | We come to the first valid combination: |
| | | 0\+0\+0\+0\+25=25, expanding the number of valid |
| | | combinations of 1, the second valid combination is:| 
| | | 0\+0\+0\+1\+24=25|
| | | The third: 0\+0\+0\+2\+23=25  etc.|
| | | After generating all possible combinations,|
| | | the number of valid combinations is 23751.|
[/task-description]
[tests]
[test]
[input]
25
[/input]
[output]
23751
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
10626
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
126
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
35
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
70
[/output]
[/test]
[test]
[input]
-1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
210
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
1001
[/output]
[/test]
[test]
[input]
13
[/input]
[output]
2380
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]