[slide hideTitle]
# Problem: Basic Queue Operations
[code-task title="Basic Queue Operations" taskId="bd0b9605-7801-417d-9cc0-ab3caa08a8ea" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will be given an integer **N** representing the **number of elements to enqueue** (add), an integer **S** representing the **number of elements to dequeue** (remove/poll) from the queue and finally an integer **X**, an element that you should **check whether is present in the queue**.

If it is print **true** on the console, if it is not **print the smallest element currently present in the queue**.

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 5 2 32 | true | We have to **push 5** elements.  |
| 1 13 45 32 4 |  | Then we **pop 2** of them.  |
|  |  | Finally, we have to check whether 13 is present in the stack. Since it is we print **true**.  |


| **Input** | **Output** |
| --- | --- |
| 4 1 666 | 13 |
| 666 69 13 420 |  |


| **Input** | **Output** |
| --- | --- |
| 3 3 90 | 0 |
| 90 90 90 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5 2 32
1 13 45 32 4
[/input]
[output]
true
[/output]
[/test]
[test open]
[input]
4 1 666
666 69 13 420
[/input]
[output]
13
[/output]
[/test]
[test open]
[input]
3 3 90
90 90 90
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5 1 4
5 4 3 2 1
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
5 5 5
5 4 3 2 1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5 1 5
5 4 3 2 1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
10 5 13
45 54 14 54 9 13 34 251 353 153
[/input]
[output]
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
