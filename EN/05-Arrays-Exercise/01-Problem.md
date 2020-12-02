# Problem: Train

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421823066" default /]
[stream language="RO" videoId="428055445"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Train
[code-task title="Train" taskId="java-fund-08-Arrays-Exercise-problem-1" executionType="tests-execution" executionStrategy="java-code" requiresInput requiresInput]
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
You will be given a count of wagons in a train **n**. 

On the next **n lines** you will receive how many people are going to get on that wagon. 

At the end **print the whole train** and after that the **sum of the people in the train**.

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | 13 24 8 |
| 13 | 45 |
| 24 | |
| 8 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 1 | 100 |
| 100 | 100 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
13
24
8
[/input]
[output]
13 24 8
45
[/output]
[/test]
[test open]
[input]
1
100
[/input]
[output]
100
100
[/output]
[/test]
[test]
[input]
6
3
52
71
13
65
4
[/input]
[output]
3 52 71 13 65 4
208
[/output]
[/test]
[test]
[input]
5
1
2
3
45
5
[/input]
[output]
1 2 3 45 5
56
[/output]
[/test]
[test]
[input]
3
-100
-200
-300
[/input]
[output]
-100 -200 -300
-600
[/output]
[/test]
[test]
[input]
3
100
1
2
[/input]
[output]
100 1 2
103
[/output]
[/test]
[test]
[input]
3
1
1
1
[/input]
[output]
1 1 1
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
