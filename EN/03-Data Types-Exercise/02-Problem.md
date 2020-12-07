# Problem: Elevator

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="425479929" default /]
[stream language="RO" videoId="425478254"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Elevator
[code-task title="Elevator" taskId="java-fund-05-Data Types-Exercise-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Calculate how many courses will be needed to **elevate n persons** by using an elevator with **capacity of p persons**. 

The **input** holds **two lines**: 
- the number of people **n**
- the capacity **p** of the elevator

### Example
| **Input** | **Output** | **Comments**
| --- | --- | --- |
| 17 | 6 | 5 courses * 3 people |
| 3 | | + 1 course * 2 people |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
17
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
4
5
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
16
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
16
4
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
2
5
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
