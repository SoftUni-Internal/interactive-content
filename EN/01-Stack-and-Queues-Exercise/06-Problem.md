[slide hideTitle]
# Problem: Balanced Parentheses
[code-task title="Balanced Parentheses" taskId="76ac9c4c-07e3-4a40-9e66-c9d3190f0e1e" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Given a sequence consisting of parentheses**, determine **whether the expression is balanced**.

A sequence of parentheses **is balanced if** every open parenthesis can be paired uniquely with a closing parenthesis that occurs after the former.

Also, **the interval between them must be balanced**.

You will be given three types of parentheses: **(**,  **{**, and **\[**.

{\[()\]} - This is a balanced parenthesis.

{\[(\])} - This is not a balanced parenthesis.

## Input

- Each input consists of a single line, the sequence of parentheses.
- **1 ≤ Length of sequence ≤ 1000**
- Each character of the sequence will be one of the following:  **{**, **}**, **(**, **)**, **[**, **]**.

## Output

- For each test case, print on a new line **"YES"** if the parentheses are balanced. Otherwise, print **"NO"**.



## Examples
| **Input** | **Output** |
| --- | --- |
| {[()]} | YES |


| **Input** | **Output** |
| --- | --- |
| {[(])} | NO |


| **Input** | **Output** |
| --- | --- |
| {{[[(())]]}} | YES |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
\{\[()\]\}
[/input]
[output]
YES
[/output]
[/test]
[test]
[input]
\{\{\{\[()\]\}\}\}
[/input]
[output]
YES
[/output]
[/test]
[test]
[input]
\{\[(\])\}
[/input]
[output]
NO
[/output]
[/test]
[test]
[input]
\{\{\[\[(())\]\]\}\}
[/input]
[output]
YES
[/output]
[/test]
[test]
[input]
()()()()()()()()()()
[/input]
[output]
YES
[/output]
[/test]
[test]
[input]
()\[\]\{\}\{\}\}
[/input]
[output]
NO
[/output]
[/test]
[test]
[input]
()\[\{\[\{\{\[\{\}\{\}\}\{\}\}\{\}\}\{\}\}\{\{\}())()))()))(\]\}\}\]\}\]
[/input]
[output]
NO
[/output]
[/test]
[test]
[input]
((((((())))))))))))))))
[/input]
[output]
NO
[/output]
[/test]
[test]
[input]
()((((\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}))))
[/input]
[output]
YES
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
