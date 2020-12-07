[slide hideTitle]
# Problem: Strong Number
[code-task title="Strong Number" taskId="java-fund-02-Basic Syntax-Exercise-problem-6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program to **check** if a given number is a **strong number** or not. 

A number is strong if the **sum of the Factorial of each digit is equal to the number**. 

For example **145** is a strong number, because **1! + 4! + 5! = 145**. 

**Print** "**yes**" if the number is strong and "**no**" if the number is not strong.

### Example
| **Input** | **Output** |
| --- | --- |
| 40585 | yes |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
3451
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
40585
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
123
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
