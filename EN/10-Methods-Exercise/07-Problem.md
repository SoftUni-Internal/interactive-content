# Problem: NxN Matrix

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421821470" default /]
[stream language="RO" videoId="430366442"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: NxN Matrix
[code-task title="NxN Matrix" taskId="java-fund-11-Methods-Exercise-problem-7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a method that receives a single integer n and prints nxn matrix with that number.

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | 3 3 3 |
| | 3 3 3 |
| | 3 3 3 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
[/input]
[output]
3 3 3
3 3 3
3 3 3
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
7 7 7 7 7 7 7	
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2 2
2 2

[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 4 4 4
4 4 4 4
4 4 4 4
4 4 4 4
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10
[/output]
[/test]
[test]
[input]
13
[/input]
[output]
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
5 5 5 5 5 
5 5 5 5 5 
5 5 5 5 5 
5 5 5 5 5 
5 5 5 5 5 
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
6 6 6 6 6 6 
6 6 6 6 6 6 
6 6 6 6 6 6 
6 6 6 6 6 6 
6 6 6 6 6 6 
6 6 6 6 6 6 
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
