[slide hideTitle]
# Problem: Test Problem
[code-task title="Rage Expenses" taskId="f666be38-a944-4e41-a5ae-5c1a12a70aaa95" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
John has the bad habit to trash his PC when he loses a game and rage quits. 

His gaming setup consists of **headset, mouse, keyboard and display**. You will receive John's **lost games count**. 

Every **second** lost game, John trashes his **headset**.

Every **third** lost game, John trashes his **mouse**.

When John trashes **both his mouse and headset** in the same lost game, he also trashes his **keyboard**.

Every **second** time, when he trashes his **keyboard**, he also trashes his **display**. 

You will receive the **price** of each item in his gaming setup. 

**Calculate** his **rage expenses** for renewing his gaming equipment.

### Input/ Constraints
-	On the first input line - lost games count – integer
-	On the second line - headset price - floating point number
-	On the third line - mouse price - floating point number
-	On the fourth line - keyboard price - floating point number
-	On the fifth line - display price - floating point number

### Output
Print John's total expenses: "Rage expenses: \{expenses\}$."

### Example
| **Input** | **Output** |
| --- | --- |
| 7 | Rage expenses: 16.00$. |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
2
3
[/input]
[output]
123
[/output]
[/test]
[test]
[input]
1
2
3
4
[/input]
[output]
1234
[/output]
[/test]
[/tests]
[/code-task]
[/slide]