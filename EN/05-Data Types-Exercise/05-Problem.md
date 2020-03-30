[slide]
# Problem: Print Part of the ASCII Table
[code-task title="Print Part of the ASCII Table" taskId="PF-02-05" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Find online more information about ASCII www.ascii-code.com (American Standard Code for Information Interchange) and write a program that **prints part of the ASCII table** of characters at the console.  

On the first line of input you will receive the **char index** you should **start** with and on the second line - the index of the **last** character you should print.

### Example
| **Input** | **Output** |
| --- | --- |
| 60 | < = > ? @ A |
| 65 | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
60
65
[/input]
[output]
< = > ? @ A
[/output]
[/test]
[test]
[input]
69
79
[/input]
[output]
E F G H I J K L M N O
[/output]
[/test]
[test]
[input]
97
104
[/input]
[output]
a b c d e f g h
[/output]
[/test]
[test]
[input]
40
55
[/input]
[output]
( ) * + , - . / 0 1 2 3 4 5 6 7
[/output]
[/test]
[/tests]
[/code-task]
[/slide]