[slide hideTitle]
# Problem: Replace Repeating Chars
[code-task title="Replace Repeating Chars" taskId="python-fundamentals-text-processing-06" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program that **reads a string from the console** and **replaces any sequence of the same letters with a single corresponding letter**.

### Example
| **Input** | **Output** |
| --- | --- |
| aaaaabbbbbcdddeeeedssaa | abcdedsa |

### Example
| **Input** | **Output** |
| --- | --- |
| qqqwerqwecccwd | qwerqwecwd |

[/task-description]
[code-io /]
[tests]
[test]
[input]
aaaaabbbbbcdddeeeedssaa
[/input]
[output]
abcdedsa
[/output]
[/test]
[test]
[input]
qqqwerqwecccwd
[/input]
[output]
qwerqwecwd
[/output]
[/test]
[test]
[input]
aaaaaaaa
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
bbbbbbbbb
[/input]
[output]
b
[/output]
[/test]
[test]
[input]
aaaaabbbbbbbcccceeede
[/input]
[output]
abcede
[/output]
[/test]
[test]
[input]
kkddidkkgiiggbd
[/input]
[output]
kdidkgigbd
[/output]
[/test]
[test]
[input]
asdasdasd
[/input]
[output]
asdasdasd
[/output]
[/test]
[/tests]
[/code-task]
[/slide]