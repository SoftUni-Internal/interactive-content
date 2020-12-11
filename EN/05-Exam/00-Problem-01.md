# Problem 1: Trip

[slide]
# Description

Some of your friends have decided to go on a rather long trip, however, they are really distracted right now, as they need to prepare for the road.

So, they have asked you to help them organize their trip by creating a program to process some changes to their initial travel plan.

You will be given a string containing the initial list of **travel destinations.**

Afterward you will receive **commands** which represent changes to the travel plan.

Until you **receive** this command: `Travel`

The commands may be:

* Command `Add Stop:{index}:{string}`:

**Insert** the given string at that index, **only if the index is valid.**

* Command `Remove Stop:{start_index}:{end_index}`:

**Remove** the elements of the string from the **starting index** to the end index \(inclusive\) if both indices are valid.

* Command `Switch:{old_string}:{new_string}`: 

If the **old string** is currently present in the travel plan string, **replace all occurrences with the new one.**

**Note: After each command print the current state of the string.**

After receiving the `Travel` command, print the following:

`Ready for the trip! Planned stops: {string}`

## Input

* You will receive a list of strings

## Output

* Print the proper output messages in the proper cases as described in the problem description.

[code-task title="Trip" taskId="js-fundamentals-2-finaleExam-problem-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Examples

 **Input**
`['Hawai::Cyprys-Greece', 'Add Stop:7:Rome', 'Remove Stop:11:1'6, 'Switch:Hawai:Hungary', Travel']`

**Output**
Hawai\:\:RomeCyprys\-Greece
Hawai\:\:Rome\-Greece
Hungary\:\:Rome-Greece
Ready for the trip\! Planned stops: Hungary\:\:Rome\-Greece

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Hawai\:\:Cyprys\-Greece
Add Stop\:7\:Rome
Remove Stop\:11\:16
Switch\:Hawai\:Hungary
Travel
[/input]
[output]
Hawai\:\:RomeCyprys-Greece
Hawai\:\:Rome\-Greece
Hungary\:\:Rome\-Greece
Ready for world tour\! Planned stops\: Hungary\:\:Rome-Greece
[/output]
[/test]
[test]
[input]
A\:B\:C
Add Stop\:0\:D
Travel
[/input]
[output]
DA:B:C
Ready for world tour\! Planned stops\: DA\:B\:C
[/output]
[/test]
[test]
[input]
A\:B\:C
Remove Stop\:4\:4
Travel
[/input]
[output]
A\:B\:
Ready for world tour\! Planned stops\: A\:B\:
[/output]
[/test]
[test]
[input]
A\:B\:C
Switch\:B\:D
Travel
[/input]
[output]
A:D:C
Ready for world tour\! Planned stops\: A\:D\:C
[/output]
[/test]
[test]
[input]
A\:B\:C\:D
Add Stop\:6\:F
Remove Stop\:7\:7
Travel
[/input]
[output]
A\:B\:C\:FD
A\:B\:C\:F
Ready for world tour\! Planned stops\: A\:B\:C\:F
[/output]
[/test]
[test]
[input]
A\:B\:C\:D
Remove Stop\:0\:1
Remove Stop\:9\:10
Switch\:C\:F
Travel
[/input]
[output]
B:C:D
B:C:D
B:F:D
Ready for world tour\! Planned stops\: B\:F\:D
[/output]
[/test]
[test]
[input]
A\:B\:C\:D
Add Stop\:3\:N
Remove Stop\:4\:8
Switch\:A\:AA
Travel
[/input]
[output]
A\:BN\:C\:D
A\:BN\:C\:D
AA\:BN\:C\:D
Ready for world tour\! Planned stops\: AA\:BN\:C\:D
[/output]
[/test]
[/tests]
[/code-task]
[/slide]