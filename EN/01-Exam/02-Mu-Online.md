[slide]
# Problem 2. Mu Online
[code-task title="Problem 2. Mu Online" taskId="21e09168-9697-44e1-bf1c-b912db629dbd" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

You have initial **health 100 and initial bitcoins 0**.

You will be given a string, representing the rooms of the dungeon.

Each room is separated with `|` (vertical bar): `room1|room2|room3…`

- `potion`:

   - You are healed with the number in the second part.

   - But your health **cannot exceed** your **initial health (100)**.

   - First print: `You healed for {amount} hp.`

   - After that, print your current health: `Current health: {health} hp.`

- `chest`:

   - You've found some bitcoins, the number in the second part.

   - Print: `You found {amount} bitcoins.`

- In any other case, you are facing a monster, you are going to fight.

The second part of the room contains the attack of the monster.

You should remove the monster's attack from your health.

- If you are **not dead** (health \> 0) you've slain the monster, and you should print `You slew {monster}.`

- If you've died, print `You died! Killed by {monster}.` and your quest is over.

Print the best room you've manage to reach: `Best room: {room}`.

If you managed to go through all the rooms in the dungeon, print on the next three lines:

`You've made it!`, `Bitcoins: {bitcoins}`, `Health: {health}`

### Input \/ Constraints

You receive a string, representing the rooms of the dungeon, separated with `|` (vertical bar): `room1|room2|room3…`.

### Output

Print the corresponding messages, described above.

## Examples
| **Input** | **Output** |
| --- | --- |
| rat 10\|bat 20\|potion 10\|rat 10\|chest 100\|boss 70\|chest 1000 | You slew rat. |
|  | You slew bat. |
|  | You healed for 10 hp. |
|  | Current health: 80 hp. |
|  | You slew rat. |
|  | You found 100 bitcoins. |
|  | You died! Killed by boss. |
|  | Best room: 6 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110 | You slew cat. |
|  | You healed for 10 hp. |
|  | Current health: 100 hp. |
|  | You slew orc. |
|  | You found 10 bitcoins. |
|  | You slew snake. |
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
You slew rat.
You slew bat.
You healed for 10 hp.
Current health: 80 hp.
You slew rat.
You found 100 bitcoins.
You died! Killed by boss.
Best room: 6
[/output]
[/test]
[test open]
[input]
cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110
[/input]
[output]
You slew cat.
You healed for 10 hp.
Current health: 100 hp.
You slew orc.
You found 10 bitcoins.
You slew snake.
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
You slew rat.
You slew bat.
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
You slew rat.
You slew bat.
You slew cat.
You slew dog.
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
You slew rat.
You slew bat.
You slew cat.
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
You slew cat.
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
You slew cat.
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
You slew dog.
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
You slew a.
You slew b.
You healed for 10 hp.
Current health: 80 hp.
You slew c.
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
You slew cat.
You healed for 10 hp.
Current health: 100 hp.
You slew orc.
You found 10 bitcoins.
You slew snake.
You found 110 bitcoins.
You found 100 bitcoins.
You healed for 35 hp.
Current health: 100 hp.
You died! Killed by DRAGON.
Best room: 9
[/output]
[/test]
[/tests]
[/code-task]
[/slide]