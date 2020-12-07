[slide hideTitle]
# Problem: Division
[code-task title="Division" taskId="java-fund-02-Basic Syntax-Exercise-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

You will be given an integer and you have to print whether that number is divisible by the following numbers: **2**, **3**, **6**, **7**, **10**. 

You should always take the **bigger** division. 

If the number is divisible by **both 2 and 3** it is also **divisible by 6** and you should **print only the division by 6**. 

If the number is not divisible by any of the given numbers print "**Not divisible**". 

Otherwise print "The number is divisible by \{number\}".

### Example
| **Input** | **Output** |
| --- | --- |
| 15 | The number is divisible by 3 |

### Example
| **Input** | **Output** |
| --- | --- |
| 1643 | Not divisible |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
30
[/input]
[output]
The number is divisible by 10
[/output]
[/test]
[test open]
[input]
1643
[/input]
[output]
Not divisible
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
The number is divisible by 10
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
The number is divisible by 3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
