# Problem 2: Mu Online

[slide hideTitle]
# Mu Online
[code-task title="Mu Online" taskId="Java-Fundamentals-Part-1-Exam-Mu-Online" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

You start the game with **100 health and 0 bitcoins**.

You will be given a **String**, representing the rooms of the dungeon.

Each room is separated by a "\|" (vertical bar): room1\|room2\|room3…

The text of each room contains **2 values**. 

The first value can be:

- A potion:

   - you are healed in the amount of the second value

   - your health **cannot exceed** your **initial health (100)**

   - first print: "\{**amount**\} **health points restored.**"

   - after that, print your current health: "**Current health:** \{**health**\} **hp.**"

- A chest:

    - increase the amount of bitcoins with the amount of the second value

    - after that, print out: "**You found** \{**amount**\} **bitcoins.**"

- In any other case, you are facing a monster that you are going to fight

The second value of the room contains the attack points of the monster.

You should remove the value of the monster's attack from your health.

- If you are **still alive** (health \> 0), you have slayed the monster and you should print: "**You have slayed a** \{**type of monster**\}."

- If you died, print "**You died! Killed by** \{**monster**\}." and your quest is over

Print the best highest number of a room you have managed to reach: "**Best room:** \{**room**\}".

If you managed to go through all of the rooms in the dungeon, print on the next three lines:


"**You've made it!** 
**Bitcoins:** \{**bitcoins**\} 
**Health:** \{**health**\}" 


### Input \/ Constraints

You will receive a String, representing the rooms of the dungeon, separated by a "\|" (vertical bar): room1\|room2\|room3...".

### Output

Print the corresponding messages, described above.

## Examples One

| **Input** | **Output** |
| --- | --- |
| rat 10\|bat 20\|potion 10\|rat 10\|chest 100\|boss 70\|chest 1000 | You have slayed a rat. |
|  | You have slayed a bat. |
|  | 10 health points restored. |
|  | Current health: 80 hp. |
|  | You have slayed a rat. |
|  | You found 100 bitcoins. |
|  | You died! Killed by boss. |
|  | Best room: 6 |
|  |  |

[hints]
[hint]
Initialize the health points (**100**) and bitcoins (**0**), as well as the number of rooms reached (**0** at the beginning).
[/hint] 
[hint]
Split the commands and go through each one using a for loop.
[/hint] 
[hint]
Inside the for loop, create if-else statements for each command type or monster.
[/hint] 
[hint]
For every condition, modify the data and/or print the corresponding output.
[/hint] 
[/hints] 

## Examples Two

| **Input** | **Output** |
| --- | --- |
| cat 10\|potion 30\|ghoul 10\|chest 10\|snake 25\|chest 110 | You have slayed a cat. |
|  | 10 health points restored. |
|  | Current health: 100 hp. |
|  | You have slayed a ghoul. |
|  | You found 10 bitcoins. |
|  | You have slayed a snake. |
|  | You found 110 bitcoins. |
|  | You've made it! |
|  | Bitcoins: 120 |
|  | Health: 65 |
|  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
rat 10\|bat 20\|potion 10\|rat 10\|chest 100\|boss 70\|chest 1000
[/input]
[output]
You have slayed a rat.
You have slayed a bat.
10 health points restored.
Current health: 80 hp.
You have slayed a rat.
You found 100 bitcoins.
You died! Killed by boss.
Best room: 6
[/output]
[/test]
[test open]
[input]
cat 10\|potion 30\|ghoul 10\|chest 10\|snake 25\|chest 110
[/input]
[output]
You have slayed a cat.
10 health points restored.
Current health: 100 hp.
You have slayed a ghoul.
You found 10 bitcoins.
You have slayed a snake.
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
You have slayed a rat.
You have slayed a bat.
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
You have slayed a rat.
You have slayed a bat.
You have slayed a cat.
You have slayed a dog.
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
You have slayed a rat.
You have slayed a bat.
You have slayed a cat.
You died! Killed by dog.
Best room: 4
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
You have slayed a cat.
30 health points restored.
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
You have slayed a cat.
10 health points restored.
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
You have slayed a dog.
10 health points restored.
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
You have slayed a a.
You have slayed a b.
10 health points restored.
Current health: 80 hp.
You have slayed a c.
You found 10 bitcoins.
You found 1000 bitcoins.
You died! Killed by d.
Best room: 7
[/output]
[/test]
[test]
[input]
cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110\|chest 100\|potion 1000\|DRAGON 1000
[/input]
[output]
You have slayed a cat.
10 health points restored.
Current health: 100 hp.
You have slayed a orc.
You found 10 bitcoins.
You have slayed a snake.
You found 110 bitcoins.
You found 100 bitcoins.
35 health points restored.
Current health: 100 hp.
You died! Killed by DRAGON.
Best room: 9
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
