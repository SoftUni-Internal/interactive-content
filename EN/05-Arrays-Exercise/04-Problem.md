# Problem: Top Integers

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421822945" default /]
[stream language="RO" videoId="428055401"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Top Integers
[code-task title="Top Integers" taskId="java-fund-08-Arrays-Exercise-problem-5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Write a program to **find all the top integer**s in an array.

A top integer is an integer which is **bigger** than all the elements **to its right**.

### Example
| **Input** | **Output** |
| --- | --- |
| 14 24 3 19 15 17 | 24 19 17 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
14 24 3 19 15 17
[/input]
[output]
24 19 17
[/output]
[/test]
[test]
[input]
1 4 3 2
[/input]
[output]
4 3 2
[/output]
[/test]
[test]
[input]
27 19 42 2 13 45 48
[/input]
[output]
48
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 4
[/input]
[output]
6 4
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
0 1 0 0 0
[/input]
[output]
1 0
[/output]
[/test]
[test]
[input]
6 5 4 3 2 1
[/input]
[output]
6 5 4 3 2 1
[/output]
[/test]
[test]
[input]
1 6 4 2 1 0
[/input]
[output]
6 4 2 1 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
