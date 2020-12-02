# Problem: Append Arrays

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421818862" default /]
[stream language="RO" videoId="432473568"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Append Arrays
[code-task title="Append Arrays" taskId="java-fund-14-Lists-Exercise-problem-7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program to **append several arrays** of numbers.
- **Arrays** are **separated** by '\|'
- **Values** are **separated** by spaces (' ', one or several)
- Order the arrays from the last to the first, and their values from left to right

### Example
| **Input** | **Output** |
| --- | --- |
| 1 2 3 \|4 5 6 \|  7  8  | 7 8 4 5 6 1 2 3 |

### Example
| **Input** | **Output** |
| --- | --- |
| 7 \| 4  5\|1 0\| 2 5 \|3  | 3 2 5 1 0 4 5 7 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 \|4 5 6 \|  7  8
[/input]
[output]
7 8 4 5 6 1 2 3
[/output]
[/test]
[test open]
[input]
7 \| 4  5\|1 0\| 2 5 \|3
[/input]
[output]
3 2 5 1 0 4 5 7
[/output]
[/test]
[test]
[input]
1\| 4 5 6 7 \| 8 9
[/input]
[output]
8 9 4 5 6 7 1
[/output]
[/test]
[test]
[input]
1 2 3 \|4 5 6 \|  7  8
[/input]
[output]
7 8 4 5 6 1 2 3
[/output]
[/test]
[test]
[input]
1\| 4 5 6 7 \| 8 9
[/input]
[output]
8 9 4 5 6 7 1
[/output]
[/test]
[test]
[input]
1 \| \| \|\|\|2   3 \|4   5 6 \| 7 8\| -3 2   1\|\|1 2\|3\|4\|99 77
[/input]
[output]
99 77 4 3 1 2 -3 2 1 7 8 4 5 6 2 3 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
