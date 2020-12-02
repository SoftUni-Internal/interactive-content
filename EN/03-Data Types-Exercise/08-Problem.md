# Problem: Beer Kegs

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="425480025" default /]
[stream language="RO" videoId="425478330"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Beer Kegs
[code-task title="Beer Kegs" taskId="java-fund-05-Data Types-Exercise-problem-8" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program, which **calculates the volume** of **n** beer kegs. 

You will **receive** in total **3 * n lines**.

Each **three lines** will hold information for a **single keg**. 

**First** up is the **model** of the keg, **after that** is the **radius** (a floating-point number) of the keg, and **lastly** is the **height** of the keg.

Calculate the **volume** using the following formula:

π * r^2 * h. 

At the end, **print the model of the biggest keg**.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | Bigger Keg |
| Smaller Keg | |
| 2.41 | |
| 10 | |
| Bigger Keg | |
| 5.12 | |
| 20 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
Smaller Keg
2.41
10
Bigger Keg
5.12
20
[/input]
[output]
Bigger Keg
[/output]
[/test]
[test]
[input]
3
Keg 1
10
10
Keg 2
20
20
Keg 3
10
30
[/input]
[output]
Keg 2
[/output]
[/test]
[test]
[input]
3
Keg 1
15
15
Keg 2
20
10
Keg 3
10
20
[/input]
[output]
Keg 2
[/output]
[/test]
[test]
[input]
5
Keg 1
10
10
Keg 2
20
20
Keg 3
10
30
Keg 4
213213.123
1234124124
Keg 5
1236.345534
21321124
[/input]
[output]
Keg 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
