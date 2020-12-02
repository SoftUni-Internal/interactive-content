# Problem: Bomb Numbers

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421819141" default /]
[stream language="RO" videoId="432473311"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Bomb Numbers
[code-task title="Bomb Numbers" taskId="java-fund-14-Lists-Exercise-problem-5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads **sequence of numbers and special bomb number** with a certain power.

Your task is to **detonate every occurrence of the special bomb number** and according to its power **his neighbors from left and right**.

Detonations are performed **from left to right** and all detonated numbers **disappear**.

Finally **print the sum of the remaining elements** in the sequence.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 2 2 4 2 2 2 9  | 12 |
| 4 2 | |

**Comments:**
- Special number is 4 with power 2. 
- After detonation we left with the sequence \[1, 2, 9\] with sum 12.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 4 4 2 8 9 1 | 5 |
| 9 3 | |

**Comments:**
- Special number is 9 with power 3. 
- After detonation we left with the sequence \[1, 4\] with sum 5. 
- Since the 9 has only 1 neighbor from the right we remove just it (one number instead of 3).

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 2 4 2 2 2 9
4 2

[/input]
[output]
12
[/output]
[/test]
[test open]
[input]
1 4 4 2 8 9 1
9 3

[/input]
[output]
5
[/output]
[/test]
[test]
[input]
1 7 7 1 2 3
7 1

[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1 1 2 1 1 1 2 1 1 1
2 1

[/input]
[output]
4

[/output]
[/test]
[test]
[input]
1 2 1 1 1
2 3
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1 1 2 1 1
2 2
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
8 1 8 1 1 8 1 8 0 0 9
8 2
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
1 2 1 1 2 1 1 2 2 1
2 0
[/input]
[output]
6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
