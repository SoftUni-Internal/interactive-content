# Problem: Max Sequence of Equal Elements

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421821171" default /]
[stream language="RO" videoId="428055605"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Max Sequence of Equal Elements
[code-task title="Max Sequence of Equal Elements" taskId="java-fund-08-Arrays-Exercise-problem-7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **finds the longest sequence of equal elements in an array** of integers.

If **several longest sequences exist**, print the **leftmost** one.

### Example
| **Input** | **Output** |
| --- | --- |
| 0 1 1 5 2 2 6 3 3 | 1 1 |

### Example
| **Input** | **Output** |
| --- | --- |
| 1 1 1 2 3 1 3 3 | 1 1 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
0 1 1 5 2 2 6 3 3
[/input]
[output]
1 1
[/output]
[/test]
[test open]
[input]
1 1 1 2 3 1 3 3
[/input]
[output]
1 1 1
[/output]
[/test]
[test]
[input]
2 1 1 2 3 3 2 2 2 1
[/input]
[output]
2 2 2
[/output]
[/test]
[test]
[input]
4 4 4 4
[/input]
[output]
4 4 4 4
[/output]
[/test]
[test]
[input]
1 2 3 4
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
2 1 1 2 3 3 2 2 2 1
[/input]
[output]
2 2 2
[/output]
[/test]
[test]
[input]
1 1 1 2 3 1 3 3
[/input]
[output]
1 1 1
[/output]
[/test]
[test]
[input]
9 9 9 9 9 9 9 9 9
[/input]
[output]
9 9 9 9 9 9 9 9 9
[/output]
[/test]
[test]
[input]
1 2 3 1 1 1 1 1 1 1
[/input]
[output]
1 1 1 1 1 1 1
[/output]
[/test]
[test]
[input]
1 2 2 2 1 2 2 2 3 1 1 1
[/input]
[output]
2 2 2
[/output]
[/test]
[test]
[input]
0 0 -1 -1 -1 -2 -3 -3 -4 -5
[/input]
[output]
-1 -1 -1
[/output]
[/test]
[test]
[input]
1 2 2
[/input]
[output]
2 2
[/output]
[/test]
[test]
[input]
3 3 3 1
[/input]
[output]
3 3 3
[/output]
[/test]
[test]
[input]
1 1 2 2 3 3 4 4 5 5
[/input]
[output]
1 1
[/output]
[/test]
[test]
[input]
0 1 1 1 0 2 2 0 3 3 3 0 4 4 0 5 5 5
[/input]
[output]
1 1 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
