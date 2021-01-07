# Problem 1: Mu Online

[slide]
# Description

[vimeo-video]
[stream language="EN" videoId="497656935/bfde3ae27b" default /]
[stream language="RO" videoId="497656935/bfde3ae27b"  /]
[/video-vimeo]

Your character starts with a **100 health points** and **0 bitcoins.**

You will be given a string, **representing different occurrences**, that you have to process.

Each command is **separated** by a vertical bar `|`.

Each command will contain a word and a number, separated by a space.

The command can be:

* Command `potion`: 

Restores the specified number of health points to your character.

The health points **cannot exceed 100.**

After successfully taking a potion, print:

`Healed: {amount} hp.`

And after that, print your current health:

`Current health: {health} hp.`

* Command `chest`: 

You have found bitcoins add this number to the value of your current bitcoins.

Print:

`You found {amount} bitcoins.`

* Any other input you get means that you are **facing a monster**. 

The **word at the beginning of the command** will be the monster name and the **number** \- the **damage that the monster deals to you.**

Examples: `rat {number}`, `boss {number}`, there could be other types of monster.

You should **decrease you champion's health** points by the damage that each monster deals to them.

* If you are not dead (health <= 0) you have defeated the monster, and you should print out:

`You defeated a {monster}.`

* If you have died the expected output is:  

`You died! Killed by {monster}.`

**And your quest is over.**

Print the number of the last room you have managed to reach: 

`Highest level reached: {last room}.`.

If you **managed to go through all the rooms in the dungeon**, print on the next three lines:

`You've made it!`

`Bitcoins: {bitcoins}`

`Health: {health}`

## Input
A string, separated by a vertical bar `|`.

## Output
Print the corresponding messages, as shown in the description.

[code-task title="Problem: Sum Numbers" taskId="js-fundamentals-examPreparation-problem-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
|`['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']`| You defeated a rat.|
||You defeated a bat.|
||You healed for 10 hp.|
||Current health: 80 hp.|
||You defeated a rat.|
||You found 100 bitcoins.|
||You died! Killed by boss.|
||Highest level reached: 6|

| **Input** | **Output** |
| --- | --- |
|`[cat 10|potion 30|orc 10|chest 10|snake 25|chest 110]`| You defeated a cat.|
||You healed for 10 hp.|
||Current health: 100 hp.|
||You defeated a orc.|
||You found 10 bitcoins.|
||You defeated a snake.|
||You found 110 bitcoins.|
||You've made it!|
||Bitcoins: 120|
||Health: 65|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
rat 10\|bat 20\|potion 10\|rat 10\|chest 100\|boss 70\|chest 1000
[/input]
[output]
You defeated a rat.
You defeated a bat.
You healed for 10 hp.
Current health: 80 hp.
You defeated a rat.
You found 100 bitcoins.
You died! Killed by boss.
Highest level reached: 6
[/output]
[/test]
[test open]
[input]
cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110
[/input]
[output]
You defeated a cat.
You healed for 10 hp.
Current health: 100 hp.
You defeated a orc.
You found 10 bitcoins.
You defeated a snake.
You found 110 bitcoins.
You've made it!
Bitcoins: 120
Health: 65
[/output]
[/test]
[test]
[input]
rat 10\|bat 20
[/input]
[output]
You defeated a rat.
You defeated a bat.
You've made it!
Bitcoins: 0
Health: 70
[/output]
[/test]
[test]
[input]
rat 10\|bat 20\|cat 30\|dog 39
[/input]
[output]
You defeated a rat.
You defeated a bat.
You defeated a cat.
You defeated a dog.
You've made it!
Bitcoins: 0
Health: 1
[/output]
[/test]
[test]
[input]
rat 10\|bat 20\|cat 30\|dog 40
[/input]
[output]
You defeated a rat.
You defeated a bat.
You defeated a cat.
You died! Killed by dog.
Highest level reached: 4
[/output]
[/test]
[test]
[input]
chest 1\|chest 2\|chest 3
[/input]
[output]
You found 1 bitcoins.
You found 2 bitcoins.
You found 3 bitcoins.
You've made it!
Bitcoins: 6
Health: 100
[/output]
[/test]
[test]
[input]
chest 10\|chest 20\|chest 30
[/input]
[output]
You found 10 bitcoins.
You found 20 bitcoins.
You found 30 bitcoins.
You've made it!
Bitcoins: 60
Health: 100
[/output]
[/test]
[test]
[input]
cat 40\|potion 30
[/input]
[output]
You defeated a cat.
You healed for 30 hp.
Current health: 90 hp.
You've made it!
Bitcoins: 0
Health: 90
[/output]
[/test]
[test]
[input]
cat 10\|potion 30
[/input]
[output]
You defeated a cat.
You healed for 10 hp.
Current health: 100 hp.
You've made it!
Bitcoins: 0
Health: 100
[/output]
[/test]
[test]
[input]
dog 10\|potion 30
[/input]
[output]
You defeated a dog.
You healed for 10 hp.
Current health: 100 hp.
You've made it!
Bitcoins: 0
Health: 100
[/output]
[/test]
[test]
[input]
a 10\|b 20\|potion 10\|c 30\|chest 10\|chest 1000\|d 50\|chest 1000
[/input]
[output]
You defeated a a.
You defeated a b.
You healed for 10 hp.
Current health: 80 hp.
You defeated a c.
You found 10 bitcoins.
You found 1000 bitcoins.
You died! Killed by d.
Highest level reached: 7
[/output]
[/test]
[test]
[input]
cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110\|chest 100\|potion 1000\|DRAGON 1000
[/input]
[output]
You defeated a cat.
You healed for 10 hp.
Current health: 100 hp.
You defeated a orc.
You found 10 bitcoins.
You defeated a snake.
You found 110 bitcoins.
You found 100 bitcoins.
You healed for 35 hp.
Current health: 100 hp.
You died! Killed by DRAGON.
Highest level reached: 9
[/output]
[/test]
[/tests]
[/code-task]
[/slide]