# Problem with Solution 1: Mu Online

[slide hideTitle]

# Mu Online

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/05.JS-Fundamentals-Exam-Preparation/EN/exam-prep-problem-1-mu-online-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Mu Online" taskId="js-fundamentals-examPreparation-Mu-Online" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function muOnline(input) {
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

Your character starts with **100 health points** and **0 bitcoins.**

You will receive a string **representing different occurrences** that you have to process.

The commands are **separated** by a vertical line ("\|").

Every command will contain a **word** and a **number**, separated by a **space**.

The possible commands you can receive are:

**"potion" command:**

- **Restores** the specified number of **health points** to your character (your health points **cannot exceed 100**)

- After successfully taking a potion, print:

    - "**Healed:** \{**amount**\} **hp.**"

- And after that, print your current health:

    - "**Current health:** \{**health**\} **hp.**"


**"chest" command:**

- You have found bitcoins, add this number to the value of your current bitcoins and print:
    - "**You found** \{**amount**\} **bitcoins.**"

**Fighting monsters**

Any other command you get means that you are **facing a monster**. 

The word at the **beginning of the command** will be the **monster's name** and the **number** \- the **damage that the monster deals to you**.

Examples: "**rat** \{**number**\}, **boss** \{**number**\}" (there could be other types of monsters).

You should **decrease your character's health** points by the **damage** that each monster deals to them.

If you are **not dead** (health >= 0) you have defeated the monster, and you should print:

- "**You defeated a** \{**monster**\}."

If **you have died** the expected output is:  

- "**You died! Killed by** \{**monster**\}."

**After this, your quest is over.**

Consider each pair of input to be a separate room in a dungeon that your character goes through. 

If you have the following input of "rat 10\|bat 20\|potion 10\|rat 10\", this means you will attempt to battle your way through 4 different rooms.

Once the game is over, print the **number** of the **last room you have managed to reach**: 

"**Highest level reached:** \{**last room**\}."

If you **managed to go through all the rooms in the dungeon**, print on the next three lines:

"**You've made it!**"

"**Bitcoins:** \{**bitcoins**\}"

"**Health:** \{**health**\}"

## Input
A **string**, with commands separated by vertical lines ("\|").

## Output
**Print** the corresponding **messages**, as shown in the description.

## Example One

| **Input** | **Output** |
| --- | --- |
|muOnline('rat 10\|bat 20\|potion 10\|rat 10\|chest 100\|boss 70\|chest 1000')| You defeated a rat.|
||You defeated a bat.|
||You healed for 10 hp.|
||Current health: 80 hp.|
||You defeated a rat.|
||You found 100 bitcoins.|
||You died! Killed by boss.|
||Highest level reached: 6|

[hints]
[hint]
Initialize the health points (**100**) and bitcoins (**0**), as well as the number of rooms reached (**0** at the beginning).
[/hint] 
[hint]
Split the commands and go through each one using a for-of loop.
[/hint] 
[hint]
Inside the for-of loop, create if-else statements for each command type or monster.
[/hint] 
[hint]
For every condition, modify the data and/or print the corresponding output.
[/hint] 
[/hints] 

## Example Two

| **Input** | **Output** |
| --- | --- |
|muOnline('cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110')| You defeated a cat.|
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
muOnline('rat 10\|bat 20\|potion 10\|rat 10\|chest 100\|boss 70\|chest 1000')
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
muOnline('cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110')
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
muOnline('rat 10\|bat 20')
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
muOnline('rat 10\|bat 20\|cat 30\|dog 39')
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
muOnline('rat 10\|bat 20\|cat 30\|dog 40')
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
muOnline('chest 1\|chest 2\|chest 3')
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
muOnline('chest 10\|chest 20\|chest 30')
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
muOnline('cat 40\|potion 30')
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
muOnline('cat 10\|potion 30')
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
muOnline('dog 10\|potion 30')
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
muOnline('a 10\|b 20\|potion 10\|c 30\|chest 10\|chest 1000\|d 50\|chest 1000')
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
muOnline('cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110\|chest 100\|potion 1000\|DRAGON 1000')
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
