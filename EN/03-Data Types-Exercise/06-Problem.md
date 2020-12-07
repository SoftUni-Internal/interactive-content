# Problem: Water Overflow

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="425479963" default /]
[stream language="RO" videoId="425478301"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Water Overflow
[code-task title="Water Overflow" taskId="java-fund-05-Data Types-Exercise-problem-7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
You have a **water tank** with capacity of 255 liters.

On the **first** line, you will receive n.

On the next **n lines**, you will **receive liters** of water, which you have to **pour in your tank**. 

If the **capacity is not enough**, print "Insufficient capacity!" and **continue reading** the next line. 

On the **last** line, **print the liters** in the tank.

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | Insufficient capacity! |
| 20 | 240 |
| 100 | |
| 100 | |
| 100 | |
| 20 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
20
100
100
100
20
[/input]
[output]
Insufficient capacity!
240
[/output]
[/test]
[test]
[input]
1
1000
[/input]
[output]
Insufficient capacity!
0
[/output]
[/test]
[test]
[input]
7
10
20
30
10
5
10
20
[/input]
[output]
105
[/output]
[/test]
[test]
[input]
10
3
10
12
50
30
40
10
20
60
20
[/input]
[output]
255
[/output]
[/test]
[test]
[input]
4
100
150
5
1
[/input]
[output]
Insufficient capacity!
255
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
