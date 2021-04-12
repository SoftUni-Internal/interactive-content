# Problem with Solution 2: Inventory

[slide hideTitle]
# Inventory

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/05.JS-Fundamentals-Exam-Preparation/EN/inventory-problem-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



[code-task title="Inventory" taskId="js-fundamentals-examPreparation-Inventory" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function inventory(input) {
	// Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description

You will receive a string containing the current items in your inventory.

The items will be separated by a comma and space \(", "\).

After that, until you receive "**Craft!**" you will be given different commands.

The commands are separated by (" - ") and can be one of the following:

- "**Collect -** \{**item**\}":

    - Add the given item to your inventory

    - Skip this command if the item is already in your inventory

- "**Drop -** \{**item**\}": 

    - Remove the item from your inventory if you have it

- "**Combine Items -** \{**oldItem**\}**:**\{**newItem**\}":

    - Check if the first item can be found in your inventory, and if it is, add the new item after the old one

    - Otherwise, ignore the command

- "**Renew -** \{**item**\}":

    - If the given item exists, you should change its position and put it in the last position of your inventory

## Output
After receiving the "**Craft!**" command, print out all the items in your inventory, separated by a comma and space \(", "\).

## Examples One
| **Input** | **Output** |
| --- | --- |
|inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])| Iron, Sword, Gold |

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
At the end, print the inventory to the console using the `.join(separator)` method.
[/hint] 
[/hints] 

## Examples Two
| **Input** | **Output** |
| --- | --- |
|inventory(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron', 'Craft!'])| Sword, Bow, Iron|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])
[/input]
[output]
Iron, Sword, Gold
[/output]
[/test]
[test open]
[input]
inventory(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron', 'Craft!'])
[/input]
[output]
Sword, Bow, Iron
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Collect - E', 'Collect - F', 'Craft!'])
[/input]
[output]
A, B, C, D, E, F
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Collect - D', 'Collect - E', 'Craft!'])
[/input]
[output]
A, B, C, D, E
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Drop - C', 'Drop - D', 'Craft!'])
[/input]
[output]
A, B
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Drop - D', 'Drop - E', 'Craft!'])
[/input]
[output]
A, B, C
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Renew - C', 'Craft!'])
[/input]
[output]
A, B, D, C
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Renew - D', 'Renew - E', 'Renew - B', 'Craft!'])
[/input]
[output]
A, C, D, B
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Combine Items - C:C1', 'Craft!'])
[/input]
[output]
A, B, C, C1, D
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Combine Items - C:C1', 'Combine Items - E:E1', 'Craft!'])
[/input]
[output]
A, B, C, C1, D
[/output]
[/test]
[test]
[input]
inventory(['N, S, F, T', 'Collect - U', 'Drop - F', 'Renew - N', 'Combine Items - S:B1', 'Combine Items - B1:O', 'Drop - B1', 'Combine Items - O:F', 'Collect - I', 'Craft!'])
[/input]
[output]
S, O, F, T, U, N, I
[/output]
[/test]
[/tests]
[/code-task]

[/slide]
