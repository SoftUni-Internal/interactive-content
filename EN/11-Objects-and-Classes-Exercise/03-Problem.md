# Problem: Students

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421822838" default /]
[stream language="RO" videoId="433936042"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Students
[code-task title="Students" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that receives **n count** of students with grades and prints whether they have successfully passed a test.

If the **grade** is **greater than or equal to 3.00**, the test is **passed**.

Each student should have **First name** (string), **Last name** (string) and **grade** (floating-point number).

### Input
- First line will be a **number n**
- Next **n lines** you will get a student info in the **format** 

"\{first name\} \{second name\} \{grade\}"

### Output
- If the **test is passed**, print:

"\{first name\} \{second name\}: \{PASS\}"

- If the **test isn't passed**, print:

"\{first name\} \{second name\}"

### Example
| **Input** | **Output** |
| --- | --- |
| 4 | Lakia Eason: PASS |
| Lakia Eason 3.90 | Prince Messing: PASS |
| Prince Messing 5.49 | Akiko Segers |
| Akiko Segers 2.85 | Rocco Erben: PASS |
| Rocco Erben 6.00 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Lakia Eason 3.90
Prince Messing 5.49
Akiko Segers 2.85
Rocco Erben 6.00
[/input]
[output]
Lakia Eason: PASS
Prince Messing: PASS
Akiko Segers
Rocco Erben: PASS
[/output]
[/test]
[test]
[input]
4
Sydnie Britton 5.79
Amias Mathews 2.30
Mora Tod 2.78
Pete Kendrick 2.61
[/input]
[output]
Sydnie Britton: PASS
Amias Mathews
Mora Tod
Pete Kendrick
[/output]
[/test]
[test]
[input]
3
Cletus Henry 4.34
Deena Banks 5.83
Asher West 5.76
[/input]
[output]
Cletus Henry: PASS
Deena Banks: PASS
Asher West: PASS
[/output]
[/test]
[test]
[input]
3
Cletus Henry 5.50
Deena Banks 5.33
Asher West 3.59
[/input]
[output]
Cletus Henry: PASS
Deena Banks: PASS
Asher West: PASS
[/output]
[/test]
[test]
[input]
6
Sydnie Britton 5.79
Cletus Henry 5.50
Deena Banks 5.24
Asher West 4.59
Mora Tod 2.78
Pete Kendrick 2.61
[/input]
[output]
Sydnie Britton: PASS
Cletus Henry: PASS
Deena Banks: PASS
Asher West: PASS
Mora Tod
Pete Kendrick
[/output]
[/test]
[test]
[input]
7
Cletus Henry 5.50
Deena Banks 5.33
Asher West 3.59
Sydnie Britton 5.79
Amias Mathews 2.30
Mora Tod 2.78
Pete Kendrick 2.61
[/input]
[output]
Cletus Henry: PASS
Deena Banks: PASS
Asher West: PASS
Sydnie Britton: PASS
Amias Mathews
Mora Tod
Pete Kendrick
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
