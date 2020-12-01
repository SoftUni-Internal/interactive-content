[slide hideTitle]
# Problem: Magic Sum
[code-task title="Magic Sum" taskId="java-fund-08-Arrays-Exercise-problem-8" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program, which **prints all unique pairs** in an array of integers whose **sum is equal to a given number**.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 7 6 2 19 23 | 1 7 |
| 8 | 6 2 |

### Example
| **Input** | **Output** |
| --- | --- |
| 14 20 60 13 7 19 8 | 14 13 |
| 27 | 20 7 |
| | 19 8 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 7 6 2 19 23
8
[/input]
[output]
1 7
6 2
[/output]
[/test]
[test open]
[input]
14 20 60 13 7 19 8 
27
[/input]
[output]
14 13
20 7
19 8
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
6
[/input]
[output]
1 5
2 4
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
7
[/input]
[output]
1 6
2 5
3 4
[/output]
[/test]
[test]
[input]
101 102 103 104
205
[/input]
[output]
101 104
102 103
[/output]
[/test]
[test]
[input]
0 1 2 3 4
4
[/input]
[output]
0 4
1 3
[/output]
[/test]
[test]
[input]
9 8 7 6 5
15
[/input]
[output]
9 6
8 7
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
