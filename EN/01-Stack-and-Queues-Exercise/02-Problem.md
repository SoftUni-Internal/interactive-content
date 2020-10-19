[slide hideTitle]
# Problem: Basic Stack Operations
[code-task title="Basic Stack Operations" taskId="10bea7e5-eab5-4110-828f-ec56851bb090" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will be given an integer **N** representing the **number of elements to push onto the stack**, an integer **S** representing the **number of elements to pop from the stack** and finally an integer **X** , an element **that you should check whether is present in the stack**.

If it is, print **true** on the console.

If it is not, print the smallest element currently present in the stack.

## Input

- On the first line, you will be given **N** , **S** and **X** separated by a single space.
- On the next line, you will be given a line of numbers **separated by one or more white spaces**.

## Output

- On a single line print either **true** if **X** is present in the stack otherwise **print the smallest** element in the stack.
- If the stack is empty print 0.

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 5 2 13 | true | We have to **push 5** elements. Then we **pop 2** of them. Finally, we have to check whether 13 is present in the stack. Since it is we print **true**. |
| 1 13 45 32 4 |  |  |

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 4 1 666 | 13 | Pop one element (666) and then check if 666 is present in the stack. It is not, so print the smallest element (13) |
| 420 69 13 666 |  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5 2 13
1 13 45 32 4
[/input]
[output]
true
[/output]
[/test]
[test open]
[input]
4 1 666
420 69 13 666
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
10 3 105
105 0 54 389 34 5 -6 3 90 -542
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
10 5 1
0 0 0 0 1 0 0 0 0 1
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
10 6 0
1 1 1 1 0 1 1 1 1 0
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
10 10 50
10 20 30 40 50 60 70 80 90 100
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1 0 50
583874
[/input]
[output]
583874
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
