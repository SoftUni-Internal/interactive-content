[slide]
# Problem 1: Mu Online
## Description
You have initial health 100 and initial bitcoins 0. You will be given a string, representing the dungeons rooms. Each room is separated with `|` (vertical bar): `room1|room2|room3…`

Each room contains a command and a number, separated by space. 

The command can be:

- `potion`: You are healed with the number in the second part. 
But your health **cannot exceed your initial health (100).**
First print: `You healed for {amount} hp.`
After that, print your current health: `Current health: {health} hp.`

- `chest`: You've found some bitcoins, the number in the second part.
Print: `You found {amount} bitcoins.`

- In any other case you are facing a monster, you are going to fight. 

The second part of the room, contains the attack of the monster. 

You should remove the monster's attack from your health. 

- If you are not dead (health \<\= 0) you've slain the monster, and you should print `You slayed {monster}.`

- If you've died, print `You died! Killed by {monster}.` and your quest is over. Print the best room you've manage to reach: `Best room: {room}`.
If you managed to go through all the rooms in the dungeon, print on the next three lines: 
`You've made it!`
`Bitcoins: {bitcoins}`
`Health: {health}`


## Input
You receive a string, representing the dungeons rooms, separated with `|` (vertical bar): `room1|room2|room3…`.

## Output
Print the corresponding messages, described above.

[code-task title="Calculator for TV series" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
# Example
| **Input** | **Output** |
| --- | --- |
|`['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']`| You slayed cat.|
||You healed for 10 hp.|
||Current health: 100 hp.|
||You slayed orc.|
||You found 10 bitcoins.|
||You slayed snake.|
||You found 110 bitcoins.|
||You've made it!|
||Bitcoins: 120|
||Health: 65|


[/task-description]
[code-io /]
[tests]
[test]
[input]
rat 10
bat 20
potion 10
rat 10
chest 100
boss 70
chest 1000
[/input]
[output]
You slayed rat.
You slayed bat.
You healed for 10 hp.
Current health: 80 hp.
You slayed rat.
You found 100 bitcoins.
You died! Killed by boss.
Best room: 6
[/output]
[/test]
[test]
[input]
Origin
10
19
50
[/input]
[output]
Total time needed to watch the Origin series is 11500 minutes.
[/output]
[/test]
[test]
[input]
Arrow
5
24
60
[/input]
[output]
Total time needed to watch the Arrow series is 8690 minutes.
[/output]
[/test]
[test]
[input]
Vampires
8
25
50
[/input]
[output]
Total time needed to watch the Vampires series is 12080 minutes.
[/output]
[/test]
[test]
[input]
Tom & Jerry
15
25
30
[/input]
[output]
Total time needed to watch the Tom & Jerry series is 13650 minutes.
[/output]
[/test]
[test]
[input]
Teen wolf
5
20
55
[/input]
[output]
Total time needed to watch the Teen wolf series is 6650 minutes.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]