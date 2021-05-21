# Problem 1: Trip
[slide hideTitle]
# Trip

[code-task title="Trip" taskId="js-fundamentals-2-finalExam-Trip" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function trip(travelDestinations, commands) {
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

Some of your friends have decided to go on a rather long trip, however, they are really distracted right now, as they need to prepare for the road.

So, they have asked you to help them organize their trip by creating a program that will process some changes to their initial travel plan. 

You will be given a string containing the initial list of **travel destinations.**

Afterward, you will receive **commands**, which represent changes to the travel destination string, until you receive the
command **"Travel"**.

The commands may be:

* Command "**Add Stop:**\{**index**\}**:**\{**string**\}":

**Insert** the given string at that index, **only if the index is valid.**

* Command "**Remove Stop:**\{**start_index**\}**:**\{**end_index**\}":

**Remove** the elements of the string from the **start index** to the **end index** (inclusive) if both indices are valid. 

* Command "**Switch:**\{**oldString**\}**:**\{**newString**\}":

If the **old string** is currently present in the travel plan string, **replace all occurrences with the new string.** 

**Note: After each command, print the current state of the string.**

After receiving the "**Travel**" command, print the following message: 

"**Ready for a world tour! Planned stops:** \{**string**\}"

## Input

* You will receive a string that you have to modify, and also a list with commands

## Output

* Print the proper output messages for each of the cases, as described in the problem description

## Example

| **Input** | **Output** |
| --- | --- |
|trip('Hawai::Cyprys-Greece', ['Add Stop:7:Rome', 'Remove Stop:11:16', 'Switch:Hawai:Bulgaria', 'Travel'])|Hawai::RomeCyprys-Greece|
||Hawai::Rome-Greece|
||Bulgaria::Rome-Greece|
||Ready for a world tour! Planned stops: Bulgaria::Rome-Greece|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
trip('Hawai\:\:Cyprys\-Greece', ['Add Stop\:7\:Rome', 'Remove Stop\:11\:16', 'Switch\:Hawai\:Bulgaria', 'Travel'])
[/input]
[output]
Hawai\:\:RomeCyprys\-Greece
Hawai\:\:Rome\-Greece
Bulgaria\:\:Rome\-Greece
Ready for a world tour\! Planned stops\: Bulgaria\:\:Rome\-Greece
[/output]
[/test]
[test]
[input]
trip('A:B:C', ['Add Stop:0:D', 'Travel'])
[/input]
[output]
DA:B:C
Ready for a world tour! Planned stops: DA:B:C
[/output]
[/test]
[test]
[input]
trip('A:B:C', ['Remove Stop:4:4', 'Travel'])
[/input]
[output]
A:B:
Ready for a world tour! Planned stops: A:B:
[/output]
[/test]
[test]
[input]
trip('A:B:C', ['Switch:B:D', 'Travel'])
[/input]
[output]
A:D:C
Ready for a world tour! Planned stops: A:D:C
[/output]
[/test]
[test]
[input]
trip('A:B:C:D', ['Add Stop:6:F', 'Remove Stop:7:7', 'Travel'])
[/input]
[output]
A:B:C:FD
A:B:C:F
Ready for a world tour! Planned stops: A:B:C:F
[/output]
[/test]
[test]
[input]
trip('A:B:C:D', ['Remove Stop:0:1', 'Remove Stop:9:10', 'Switch:C:F', 'Travel'])
[/input]
[output]
B:C:D
B:C:D
B:F:D
Ready for a world tour! Planned stops: B:F:D
[/output]
[/test]
[test]
[input]
trip('A:B:C:D', ['Add Stop:3:N', 'Remove Stop:4:8', 'Switch:A:AA', 'Travel'])
[/input]
[output]
A:BN:C:D
A:BN:C:D
AA:BN:C:D
Ready for a world tour! Planned stops: AA:BN:C:D
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
