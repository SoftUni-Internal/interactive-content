[slide hideTitle]
# Problem: Sum of Chars
[code-task title="Sum of Chars" taskId="java-fund-05-Data Types-Exercise-problem-4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Write a program, which **sums the ASCII codes of n characters**. 

**Print the sum** on the console.

### Input
-	On the first line, you will receive n – the number of lines, which will follow
-	On the next n lines – you will receive letters from the Latin alphabet

### Output
Print the total sum in the following format:
-   "The sum equals: \{totalSum\}"

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | The sum equals: 399 |
| A | |
| b | |
| C | |
| d | |
| E | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
A
b
C
d
E
[/input]
[output]
The sum equals: 399
[/output]
[/test]
[test]
[input]
12
S
o
f
t
U
n
i
R
u
l
z
z
[/input]
[output]
The sum equals: 1263
[/output]
[/test]
[test]
[input]
10
H
e
l
l
o
B
u
d
d
y
[/input]
[output]
The sum equals: 1004
[/output]
[/test]
[test]
[input]
20
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
[/input]
[output]
The sum equals: 1940
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
