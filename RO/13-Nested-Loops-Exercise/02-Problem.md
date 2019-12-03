[slide]
# Problem: Clock - Part 2
[code-task title="Clock - Part 2" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program to print **the hours of the day** from given hour, minutes, seconds to 23:59:59 (**inclusive**), each on a separate line. 

# Input
The input is entered from the console as **3** lines:
- First line - **hours** - integer in range \[0...23\]
- Second line - **minutes** - integer in range \[0...59\]
- Third line - **seconds** - integer in range \[0...59\]

# Output
- The output should be printed in the following format "\{hour\} : \{minutes\} : \{seconds\}".

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| 21 | | 21 : 59 : 58 |
| 59 | | 21 : 59 : 59 |
| 58 | | 22 : 00 : 00 |
| | | 22 : 00 : 01 |
| | | ... |
| | | 23 : 59 : 58 |
| | | 23 : 59 : 59 |

[/task-description]
[tests]
[test]
[input]
23
59
27
[/input]
[output]
23 : 59 : 27
23 : 59 : 28
23 : 59 : 29
23 : 59 : 30
23 : 59 : 31
23 : 59 : 32
23 : 59 : 33
23 : 59 : 34
23 : 59 : 35
23 : 59 : 36
23 : 59 : 37
23 : 59 : 38
23 : 59 : 39
23 : 59 : 40
23 : 59 : 41
23 : 59 : 42
23 : 59 : 43
23 : 59 : 44
23 : 59 : 45
23 : 59 : 46
23 : 59 : 47
23 : 59 : 48
23 : 59 : 49
23 : 59 : 50
23 : 59 : 51
23 : 59 : 52
23 : 59 : 53
23 : 59 : 54
23 : 59 : 55
23 : 59 : 56
23 : 59 : 57
23 : 59 : 58
23 : 59 : 59
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]