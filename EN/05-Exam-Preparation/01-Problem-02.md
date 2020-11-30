[slide]
# Problem 2: Inventory
## Description
You will receive a journal with some Collecting items, separated with `, ` (comma and space). 

After that, until receiving `Craft!` you will be receiving different commands. 

Commands (split by ` - `):

* `Collect - {item}` – Receiving this command, you should add the given item in your inventory.
If the item already exists, you should skip this line.

* `Drop - {item}` – You should remove the item from your inventory, if it exists.

* `Combine Items - {oldItem}:{newItem}` – You should check if the old item exists, if so, add the new item after the old one. Otherwise, ignore the command.

* `Renew – {item}` – If the given item exists, you should change its position and put it last in your inventory.

## Output
After receiving `Craft!` print the items in your inventory, separated by `, ` (comma and space).

[code-task title="Time for Lunch" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
[test]
[input]
A, B, C, D
Collect \- E
Collect \- F
Craft\!
[/input]
[output]
A, B, C, D, E, F
[/output]
[/test]
[test]
[input]
A, B, C, D
Collect \- D
Collect \- E
Craft\!
[/input]
[output]
A, B, C, D, E
[/output]
[/test]
[test]
[input]
A, B, C, D
Drop \- C
Drop \- D
Craft\!
[/input]
[output]
A, B
[/output]
[/test]
[test]
[input]
A, B, C, D
Drop \- D
Drop \- E
Craft\!
[/input]
[output]
A, B, C
[/output]
[/test]
[test]
[input]
A, B, C, D
Renew \- C
Craft\!
[/input]
[output]
A, B, D, C
[/output]
[/test]
[test]
[input]
A, B, C, D
Renew \- D
Renew \- E
Renew \- B
Craft\!
[/input]
[output]
A, C, D, B
[/output]
[/test]
[test]
[input]
A, B, C, D
Combine Items \- C:C1
Craft!
[/input]
[output]
A, B, C, C1, D
[/output]
[/test]
[test]
[input]
A, B, C, D
Combine Items \- C:C1
Combine Items \- E:E1
Craft\!
[/input]
[output]
A, B, C, C1, D
[/output]
[/test]
[test]
[input]
N, S, F, T
Collect \- U
Drop \- F
Renew \- N
Combine Items \- S:B1
Combine Items \- B1:O
Drop \- B1
Combine Items \- O:F
Collect \- I
Craft\!
[/input]
[output]
S, O, F, T, U, N, I
[/output]
[/test]
[/tests]
[/code-task]
[/slide]