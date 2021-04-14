# Problem 3: Inventory

[slide hideTitle]
# Inventory
[code-task title="Inventory" taskId="Java-Fundamentals-Part-1-Exam-Inventory" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

### Input / Constraints

You will receive a journal containing items, separated by ", " **(comma and space)**. After that, until you receive the command "**Craft!**", you will be receiving different commands.

The commands are split by " - " **(space dash space)**:

- "**Collect -** \{**item**\}": Receiving this command, you should **add** the given item to your inventory

If the item is already in your inventory, **you should skip it**.

- "**Drop -** \{**item**\}": You should **remove** the item from your inventory,  **if it is present in the inventory** 

- "**Combine Items -** \{**oldItem**\}:\{**newItem**\}": You should check if the old item is present, if so, place the new item after the old one 

Otherwise, ignore the command.

- "**Renew -** \{**item**\}": If the given item exists, you should change its position and **put it at the last position in your inventory**

### Output

After receiving "**Craft!**" print the items in your inventory, separated by ", " **(comma and space)**

## Examples One
| **Input** | **Output** |
| --- | --- |
| Iron, Wood, Sword | Iron, Sword, Gold  |
| Collect - Gold |  |
| Drop - Wood |  |
| Craft! |  |

[hints]
[hint]
Split the commands and items for each command by the hyphen, surrounded by spaces: **" - "**
[/hint] 
[hint]
Create a condition that checks if the items' string contains a colon (**":"**), and splits it.
[/hint] 
[hint]
Loop through each command/item and modify the inventory accordingly.
[/hint] 
[hint]
At the end, print the inventory to the console using the `String.join(delimiter, inventory)` method.
[/hint] 
[/hints] 

## Examples Two
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
