[slide hideTitle]
# Problem: Array Rotation
[code-task title="Array Rotation" taskId="java-fund-08-Arrays-Exercise-problem-4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **receives an array and number of rotations** you have to perform (first element goes at the end).

**Print the resulting** array.

### Example
| **Input** | **Output** |
| --- | --- |
| 51 47 32 61 21 | 32 61 21 51 47 |
| 2 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
51 47 32 61 21
2
[/input]
[output]
32 61 21 51 47
[/output]
[/test]
[test]
[input]
32 21 61 1
4
[/input]
[output]
32 21 61 1
[/output]
[/test]
[test]
[input]
2 4 15 31
5
[/input]
[output]
4 15 31 2
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
2
[/input]
[output]
3 4 5 6 1 2
[/output]
[/test]
[test]
[input]
1 2 3 4 5
5
[/input]
[output]
1 2 3 4 5
[/output]
[/test]
[test]
[input]
1 2 3
0
[/input]
[output]
1 2 3
[/output]
[/test]
[test]
[input]
1 2 3 4 5
6
[/input]
[output]
2 3 4 5 1
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 12
12
[/input]
[output]
5 6 7 12 1 2 3 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
