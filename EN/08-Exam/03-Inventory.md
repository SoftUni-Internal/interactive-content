[slide]
# Problem 3. Inventory
[code-task title="Problem 3. Inventory" taskId="b0c26cae-6fca-4aaa-918f-73367041a0de" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

### Input \/ Constraints

You will receive a journal with some Collecting items, separated with `, ` **(comma and space)**. After that, until receiving `Craft!` you will be receiving different commands.

Commands split by ` - ` **(space dash spase)**:

- `Collect - {item}` – Receiving this command, you should add the given item in your inventory.

If the item already **exists**, you should **skip** this line.

- `Drop - {item}` – You should remove the item from your inventory, **if it exists**.

- `Combine Items - {oldItem}:{newItem}` – You should check if the **old item exists**, if so, **add** the new item after the old one.

Otherwise, ignore the command.

- `Renew – {item}` – If the given item exists, you should change its position and **put it last** in your inventory.

### Output

After receiving `Craft!` print the items in your inventory, separated by `, ` **(comma and space)**.

## Examples
| **Input** | **Output** |
| --- | --- |
| Iron, Wood, Sword | Iron, Sword, Gold  |
| Collect - Gold |  |
| Drop - Wood |  |
| Craft! |  |

| **Input** | **Output** |
| --- | --- |
| Iron, Sword | Sword, Bow, Iron |
| Drop - Bronze |  |
| Combine Items - Sword:Bow |  |
| Renew - Iron |  |
| Craft! |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Iron, Wood, Sword
Collect - Gold
Drop - Wood
Craft!
[/input]
[output]
Iron, Sword, Gold
[/output]
[/test]
[test open]
[input]
Iron, Sword
Drop - Bronze
Combine Items - Sword:Bow
Renew - Iron
Craft!
[/input]
[output]
Sword, Bow, Iron
[/output]
[/test]
[test]
[input]
A, B, C, D
Collect - E
Collect - F
Craft!
[/input]
[output]
A, B, C, D, E, F
[/output]
[/test]
[test]
[input]
A, B, C, D
Collect - D
Collect - E
Craft!
[/input]
[output]
A, B, C, D, E
[/output]
[/test]
[test]
[input]
A, B, C, D
Drop - C
Drop - D
Craft!
[/input]
[output]
A, B
[/output]
[/test]
[test]
[input]
A, B, C, D
Drop - D
Drop - E
Craft!
[/input]
[output]
A, B, C
[/output]
[/test]
[test]
[input]
A, B, C, D
Renew - C
Craft!
[/input]
[output]
A, B, D, C
[/output]
[/test]
[test]
[input]
A, B, C, D
Renew - D
Renew - E
Renew - B
Craft!
[/input]
[output]
A, C, D, B
[/output]
[/test]
[test]
[input]
A, B, C, D
Combine Items - C:C1
Craft!
[/input]
[output]
A, B, C, C1, D
[/output]
[/test]
[test]
[input]
A, B, C, D
Combine Items - C:C1
Combine Items - E:E1
Craft!
[/input]
[output]
A, B, C, C1, D
[/output]
[/test]
[test]
[input]
N, S, F, T
Collect - U
Drop - F
Renew - N
Combine Items - S:B1
Combine Items - B1:O
Drop - B1
Combine Items - O:F
Collect - I
Craft!
[/input]
[output]
S, O, F, T, U, N, I
[/output]
[/test]
[/tests]
[/code-task]
[/slide]