# Problem: Train

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421823138" default /]
[stream language="RO" videoId="432473499"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Train
[code-task title="Train" taskId="java-fund-14-Lists-Exercise-problem-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
On the first line you will be given a **list of wagons** (integers).

Each **integer** represents the **number of passengers** that are currently in each wagon.

On the next line you will get the **max capacity of each wagon** (single integer).

**Until** you receive "end" you will be given two types of input:
- **Add** \{passengers\} – add a wagon to the end with the given number of passengers.
- \{passengers\} -  **find an existing wagon** to fit all the passengers (starting from the first wagon).
At the end **print** the final state of the train (all the wagons separated by a space)

### Example
| **Input** | **Output** |
| --- | --- |
| 32 54 21 12 4 0 23 | 72 54 21 12 4 75 23 10 0 |
| 75 | |
| Add 10 | |
| Add 0 | |
| 30 | |
| 10 | |
| 75 | |
| end | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
32 54 21 12 4 0 23
75
Add 10
Add 0
30
10
75
end
[/input]
[output]
72 54 21 12 4 75 23 10 0
[/output]
[/test]
[test]
[input]
0 0 0 10 2 4
10
Add 10
10
10
10
8
6
end
[/input]
[output]
10 10 10 10 10 10 10
[/output]
[/test]
[test]
[input]
57 64 60 7 39
100
24
79
32
6
158
end
[/input]
[output]
87 96 60 86 39
[/output]
[/test]
[test]
[input]
527 64 60 72 349
589
254
791
322
65
1528
end
[/input]
[output]
527 383 382 72 349
[/output]
[/test]
[test]
[input]
86 23 62 36 23 70 83 90
300
4684
7611
5029
740
6277
8480
1235
349
end
[/input]
[output]
86 23 62 36 23 70 83 90
[/output]
[/test]
[test]
[input]
4704 7637 5848
10000
Add 5755
Add 3631
Add 6616
Add 260
Add 4457
Add 3949
Add 8921
Add 7992
Add 2708
Add 4067
end
[/input]
[output]
4704 7637 5848 5755 3631 6616 260 4457 3949 8921 7992 2708 4067
[/output]
[/test]
[test]
[input]
1 2 3
10
Add 4
Add 5
Add 6
Add 7
Add 8
Add 9
Add 0
end
[/input]
[output]
1 2 3 4 5 6 7 8 9 0
[/output]
[/test]
[test]
[input]
245 658 123
1548
Add 414
Add 598
end
[/input]
[output]
245 658 123 414 598
[/output]
[/test]
[test]
[input]
10 25 35 9 5 44 15
80
26
100
200
58
Add 80
Add 80
end
[/input]
[output]
36 25 35 67 5 44 15 80 80
[/output]
[/test]
[test]
[input]
25 50 75 100
100
75
50
Add 0
25
100
end
[/input]
[output]
100 100 100 100 100
[/output]
[/test]
[test]
[input]
2 4 8 16 32
1000
750
Add 893
990
18
Add 999
254
Add 100
end
[/input]
[output]
770 994 262 16 32 893 999 100
[/output]
[/test]
[test]
[input]
46 28 18 8 7 158
248
15
69
Add 28
17
Add 148
Add 178
189
22
end
[/input]
[output]
169 217 18 8 7 158 28 148 178
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
