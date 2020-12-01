[slide hideTitle]
# Problem: Print Part of the ASCII Table
[code-task title="Print Part of the ASCII Table" taskId="java-fund-05-Data Types-Exercise-problem-5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Find online more information about ASCII www.ascii-code.com (American Standard Code for Information Interchange) and write a program that **prints part of the ASCII table** of characters at the console.  

On the first line of input you will receive the **char index** you should **start** with and on the second line - the index of the **last** character you should print.

### Example
| **Input** | **Output** |
| --- | --- |
| 60 | < = > ? @ A |
| 65 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
60
65
[/input]
[output]
< = > ? @ A
[/output]
[/test]
[test]
[input]
69
79
[/input]
[output]
E F G H I J K L M N O
[/output]
[/test]
[test]
[input]
97
104
[/input]
[output]
a b c d e f g h
[/output]
[/test]
[test]
[input]
40
55
[/input]
[output]
( ) * + , - . / 0 1 2 3 4 5 6 7
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
