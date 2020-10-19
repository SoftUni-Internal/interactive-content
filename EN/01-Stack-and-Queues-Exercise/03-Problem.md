[slide hideTitle]
# Problem: Maximum Element
[code-task title="Maximum Element" taskId="9a85ddc4-cc9d-4760-a871-b3d3c3b75233" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You have an empty sequence, and you will be given  **N**  commands.

Each command is one of the following types:

- **"1 X"** - **Push** the element **X** into the stack.
- **"2"** - **Delete** the element present at the top of the stack.
- **"3"** - **Print** the maximum element in the stack.

## Input

- The first line of input contains an integer **N** , where **1 ≤ N ≤ 10 ^ 5**
- The next  **N** lines contain commands. All commands will be valid and in the format described
- The element **X** will be in range **1 ≤ X ≤ 10 ^ 9**
- The **type of the command** will be in range **1 ≤ Type ≤ 3**

## Output

- For each command of **type "3"** , **print the maximum element** in the stack on a new line.

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 9 | 26 | 9 commands |
| 1 97 | 91 | Push 97 |
| 2 |  | Pop an element |
| 1 20 |  | Push 20 |
| 2 |  | Pop an element |
| 1 26 |  | Push 26 |
| 1 20 |  | Push 20 |
| 3 |  | Print the maximum element (26) |
| 1 91 |  | Push 91 |
| 3 |  | Print the maximum element (91) |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
16
1 97
2
1 20
2
1 26
1 20
2
3
1 91
1 66
1 23
2
2
2
1 33
3
[/input]
[output]
26
33
[/output]
[/test]
[test]
[input]
12
1 5
3
1 10
3
1 9
3
2
3
2
3
1 6
3
[/input]
[output]
5
10
10
10
5
6
[/output]
[/test]
[test]
[input]
16
1 14
1 13
1 15
2
2
3
1 13
1 110
3
2
1 91
1 90
2
2
2
3
[/input]
[output]
14
110
14
[/output]
[/test]
[test]
[input]
9
1 1
1 2
1 3
1 4
1 5
1 100
3
2
3
[/input]
[output]
100
5
[/output]
[/test]
[test]
[input]
10
1 60
3
1 59
1 61
3
2
3
1 90
2
3
[/input]
[output]
60
61
60
60
[/output]
[/test]
[test]
[input]
28
1 90
1 91
1 92
1 93
3
2
3
1 100
3
2
3
2
3
1 10
1 11
1 12
1 13
1 14
1 15
2
2
2
2
3
2
2
2
3
[/input]
[output]
93
92
100
92
91
91
90
[/output]
[/test]
[test]
[input]
16
1 1
1 2
1 10
1 20
1 40
1 30
3
2
2
3
1 101
1 105
3
2
2
3
[/input]
[output]
40
20
105
20
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
