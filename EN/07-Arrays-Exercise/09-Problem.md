# Problem: LadyBugs

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421820773" default /]
[stream language="RO" videoId="428055528"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: LadyBugs
[code-task title="LadyBugs" taskId="java-fund-08-Arrays-Exercise-problem-9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given a **field size** and the **indexes of ladybugs** inside the field.

After that on every new line until the "end" command is given, a ladybug **changes its position** either to its **left** or to its **right** by a given fly length.

A **command** to a ladybug looks like this: "0 right 1".

This means that the little insect **placed on index 0 should fly one index to its right**.

If the ladybug **lands on a fellow ladybug**, it **continues to fly in the same direction by the same fly length**.

If the ladybug **flies out of the field**, it is **gone**.

For example, imagine you are given a **field with size 3** and ladybugs on indexes **0 and 1**.

If the ladybug **on index 0 needs to fly to its right by the length of 1** (0 right 1) it will attempt to **land on index 1** but as there is **another ladybug** there it will continue further to the right by additional length of 1, landing on **index 2**.

After that, if the same ladybug needs to fly to its right by the length of 1 (2 right 1), it will land somewhere **outside** of the field, so it flies **away**: 

If you are given ladybug **index that does not have ladybug** there, **nothing** happens.

If you are given ladybug index that is **outside the field**, **nothing** happens.

Your job is to create the program, simulating the ladybugs flying around doing nothing.

At the end, **print all cells** in the field **separated** by **blank spaces**.

For each cell that has a ladybug on it print '1' and for each empty cells print '0'.

For the example above, the output should be '0 1 0'.

### Input
- On the first line you will receive an integer - the size of the field
- On the second line you will receive the initial indexes of all ladybugs separated by a blank space. The given indexes may or may not be inside the field range
- On the next lines, until you get the "end" command you will receive commands in the format: "\{ladybug index\} \{direction\} \{fly length\}"

### Output
- Print the all cells within the field in format: "\{cell\} \{cell\} … \{cell\}"
    - If a cell has ladybug in it, print '1'
    - If a cell is empty, print '0' 


### Example
| **Input** | **Output** |
| --- | --- |
| 3 | 0 1 0 |
| 0 1 | |
| 0 right 1 | |
| 2 right 1 | |
| end | |

### Comments
- 1 1 0 - Initial field
- 0 1 1 - field after "0 right 1"
- 0 1 0 - field after "2 right 1"

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
0 1
0 right 1
2 right 1
end
[/input]
[output]
0 1 0
[/output]
[/test]
[test]
[input]
3
0 1 2
0 right 1
1 right 1
2 right 1
end
[/input]
[output]
0 0 0
[/output]
[/test]
[test]
[input]
5
3
3 left 2
1 left -2
end
[/input]
[output]
0 0 0 1 0
[/output]
[/test]
[test]
[input]
5
0 2 4
0 right 1
2 left 1
end
[/input]
[output]
1 1 0 0 1
[/output]
[/test]
[test]
[input]
5
0 1 2 3 4
0 right 1
2 left 1
end
[/input]
[output]
1 1 0 1 1
[/output]
[/test]
[test]
[input]
0
2 3 4
0 right 5
6 right 2
7 left 1
19 left 0
end
[/input]
[output]

[/output]
[/test]
[test]
[input]
10
2 3 4
0 right 5
6 right 2
7 left 1
19 left 0
end
[/input]
[output]
0 0 1 1 1 0 0 0 0 0
[/output]
[/test]
[test]
[input]
10
-2 -3 -4 12 32 89 6
0 right 5
6 right 2
7 left 1
19 left 0
end
[/input]
[output]
0 0 0 0 0 0 0 0 1 0
[/output]
[/test]
[test]
[input]
100
-2 -3 -4 12 32 89 6 1 12 32 89 6 1 12 32 1 1 11 1
0 right 5
6 right 2
7 left 1
19 left 0
-12 left 12
0 left 0
12 right 0
32 right 120
89 left 260
end
[/input]
[output]
0 1 0 0 0 0 0 0 1 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
[/output]
[/test]
[test]
[input]
0
0
end
[/input]
[output]

[/output]
[/test]
[test]
[input]
1
0
12 right 12
0 right 0
0 left 0
32 right 54
54 left 32
end
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
1000
100 200 300 400 500 600 700 800 900 1000
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
end
[/input]
[output]
1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
[/output]
[/test]
[test]
[input]
1000
100 200 300 400 500 600 700 800 900 1000
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
end
[/input]
[output]
0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
