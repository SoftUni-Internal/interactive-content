[slide hideTitle]
# Problem: Multiply Big Number
[code-task title="Multiply Big Number" taskId="python-fundamentals-text-processing-05" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
You are given **two lines** - **the first one can be a really big number** (0 to 1050).

The **second one will be a single digit** number (0 to 9).

You must display the product of these numbers.

**Note**: do not use the BigInteger class.

### Example
| **Input** | **Output** |
| --- | --- |
| 23 | 46 | 
| 2 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 923847238931983192462832102 | 3695388955727932769851328408 | 
| 4 | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
23
2
[/input]
[output]
46
[/output]
[/test]
[test]
[input]
9999
9
[/input]
[output]
89991
[/output]
[/test]
[test]
[input]
923847238931983192462832102
4
[/input]
[output]
3695388955727932769851328408
[/output]
[/test]
[test]
[input]
2398482374762387432193481894638
4
[/input]
[output]
9593929499049549728773927578552
[/output]
[/test]
[test]
[input]
2938413876134964736
7
[/input]
[output]
20568897132944753152
[/output]
[/test]
[test]
[input]
000002
5
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
999999999999999999999999999999999999999999
0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
230947329471398784192398431894
1
[/input]
[output]
230947329471398784192398431894
[/output]
[/test]
[/tests]
[/code-task]
[/slide]