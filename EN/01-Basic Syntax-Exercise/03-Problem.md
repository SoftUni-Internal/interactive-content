# Problem: Print and Sum

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421822005" default /]
[stream language="RO" videoId="423949557"  /]
[/video-vimeo]

[/slide]

[slide hideTitle]
# Problem: Print and Sum
[code-task title="Print and Sum" taskId="java-fund-02-Basic Syntax-Exercise-problem-4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a program to **display numbers** from given start to given end and their sum. 

All the numbers will be **integers**. 

On the **first line** you will receive the **start** number, on the **second** the **end** number.

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | 5 6 7 8 9 10|
| 10 | Sum: 45 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
10
[/input]
[output]
5 6 7 8 9 10
Sum: 45
[/output]
[/test]
[test]
[input]
0
26
[/input]
[output]
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
Sum: 351
[/output]
[/test]
[test]
[input]
50
60
[/input]
[output]
50 51 52 53 54 55 56 57 58 59 60
Sum: 605
[/output]
[/test]
[test]
[input]
24
29
[/input]
[output]
24 25 26 27 28 29
Sum: 159
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
