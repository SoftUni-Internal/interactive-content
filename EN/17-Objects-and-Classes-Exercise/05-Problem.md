[slide]
# Students
[code-task title="Students" taskId="java-fundamentals-objects-and-classes-05" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that receives **n count** of students and **orders them by grade** (in **descending**).

Each student should have **First name** (string), **Last name** (string) and **grade** (floating-point number).

### Input
- First line will be a **number n**
- Next **n lines** you will get a student info in the **format** "\{first name\} \{second name\} \{grade\}"

### Output
- **Print** each student in the following **format** "\{first name\} \{second name\}: \{grade\}"

### Example
| **Input** | **Output** |
| --- | --- |
| 4 | Rocco Erben: 6.00 |
| Lakia Eason 3.90 | Prince Messing: 5.49 |
| Prince Messing 5.49 | Akiko Segers: 4.85 |
| Akiko Segers 4.85 | Lakia Eason: 3.90 |
| Rocco Erben 6.00 | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
4
Lakia Eason 3.90
Prince Messing 5.49
Akiko Segers 4.85
Rocco Erben 6.00
[/input]
[output]
Rocco Erben: 6.00
Prince Messing: 5.49
Akiko Segers: 4.85
Lakia Eason: 3.90
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
Sydnie Britton: 5.79
Mora Tod: 2.78
Pete Kendrick: 2.61
Amias Mathews: 2.30
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
Deena Banks: 5.83
Asher West: 5.76
Cletus Henry: 4.34
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
Cletus Henry: 5.50
Deena Banks: 5.33
Asher West: 3.59
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
Sydnie Britton: 5.79
Cletus Henry: 5.50
Deena Banks: 5.24
Asher West: 4.59
Mora Tod: 2.78
Pete Kendrick: 2.61
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
Sydnie Britton: 5.79
Cletus Henry: 5.50
Deena Banks: 5.33
Asher West: 3.59
Mora Tod: 2.78
Pete Kendrick: 2.61
Amias Mathews: 2.30
[/output]
[/test]
[/tests]
[/code-task]
[/slide]