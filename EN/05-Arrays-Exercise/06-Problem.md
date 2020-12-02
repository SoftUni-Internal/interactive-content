[slide hideTitle]
# Problem: Equal Sums
[code-task title="Equal Sums" taskId="java-fund-08-Arrays-Exercise-problem-6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that determines if there **exists an element in the array** such that the **sum of the elements on its left** is **equal** to **the sum of the elements on its right**.

If there are **no elements to the left / right**, their **sum is considered to be 0**.

**Print** the **index** that satisfies the required condition or "no" if there is no such index.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 2 3 3 | 2 |

### Comments
At a\[2\] -> left sum = 3, right sum = 3

a\[0\] + a\[1\] = a\[3\]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 3
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
1 2
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
0
[/output]
[/test]
[test]
[input]
1 2 3
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
10 5 5 99 3 4 2 5 1 1 4
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
1 2
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
999
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
4 2 2 2 0
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
8 1 4 4 5 17
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
1 1 1 1 1 1 1 1 1 1 99999 10
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
11 555 1 1 1 1 1 1 1 1 1 1 1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
-5 1 1 1 1 1 1000
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1000 -5 1 1 1 1 1
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
