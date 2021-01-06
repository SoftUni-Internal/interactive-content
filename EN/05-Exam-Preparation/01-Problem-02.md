# Problem 2: Inventory

[slide]
# Description

[vimeo-video]
[stream language="EN" videoId="497656637/db5855df33" default /]
[stream language="RO" videoId="497656637/db5855df33"  /]
[/video-vimeo]

You will receive a string, containing the current items in your inventory, separated by a comma and a space `, `.

After that, until receiving `Craft!` you will be given different commands.

The commands are separated by ` - `:

* Command `Collect - {item}`: 

Receiving this command, you should add the given item to your inventory.

If the item already exists, you should skip this command.

* Command `Drop - {item}`: 

You should remove the item from your inventory, if you have it.

* Command `Combine Items - {oldItem}:{newItem}`: 

You should check if the first item can be found in your inventory, if so, add the new item after the it.

Otherwise, ignore the command.

* Command `Renew – {item}`:

If the given item exists, you should change its position and put it in the last position of your inventory.

## Output
After receiving `Craft!` print out all items in your inventory, separated by `, ` a comma and a space.

[code-task title="Problem: Inventory" taskId="js-fundamentals-examPreparation-problem-2" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Examples
| **Input** | **Output** |
| --- | --- |
|`[ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]`| Iron, Sword, Gold |

| **Input** | **Output** |
| --- | --- |
|`['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron','Craft!']`| Sword, Bow, Iron|


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