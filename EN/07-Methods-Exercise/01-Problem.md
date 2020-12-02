# Problem: Smallest of Three Numbers

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421822503" default /]
[stream language="RO" videoId="430366304"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Smallest of Three Numbers
[code-task title="Smallest of Three Numbers" taskId="java-fund-11-Methods-Exercise-problem-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a method to **print the smallest of three integer numbers**.

Use an appropriate name for the method.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | 2 |
| 5 | |
| 3 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 25 | -21 |
| -21 | |
| 4 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
5
3
[/input]
[output]
2
[/output]
[/test]
[test open]
[input]
25
-21
4
[/input]
[output]
-21
[/output]
[/test]
[test]
[input]
600
600
123
[/input]
[output]
123
[/output]
[/test]
[test]
[input]
-5
-10
-100
[/input]
[output]
-100
[/output]
[/test]
[test]
[input]
-1
0
1
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
-12345
0
12312
[/input]
[output]
-12345
[/output]
[/test]
[test]
[input]
5
5
5
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
-5
5
-5
[/input]
[output]
-5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
