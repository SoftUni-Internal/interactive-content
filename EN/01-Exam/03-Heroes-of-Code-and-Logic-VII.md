[slide]
# Problem 3. Heroes of Code and Logic VII
[code-task title="Problem 3. Heroes of Code and Logic VII" taskId="85860f3a-cef6-45a9-9042-a5a0baeb0b5e" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

On the first line of the standard input, you will receive an integer `n` – the number of heroes that you can choose for your party.

On the next `n` lines, the heroes themselves will follow with their **hit points** and **mana points** separated by empty space in the following format:

`{hero name} {HP} {MP}`

Where **HP** stands for hit points and **MP** for mana points and a hero can have a **maximum** of **100 HP** and **200 MP**.

After you have successfully picked your heroes, you can start playing the game.

You will be receiving different commands, each on a new line, separated by ` – ` (space dash space), until the `End` command is given.

There are several actions that can be performed by the heroes:

- `CastSpell – {hero name} – {MP needed} – {spell name}`:

If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 

`{hero name} has successfully cast {spell name} and now has {mana points left} MP!`

If the hero is unable to cast the spell print:

`{hero name} does not have enough MP to cast {spell name}!`

- `TakeDamage – {hero name} – {damage} – {attacker}`:

Reduce the hero HP by the given damage amount.

If the hero is still alive (his HP is greater than 0) print:

`{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!`

If the hero has died, remove him from your party and print:

`{hero name} has been killed by {attacker}!`

- `Recharge – {hero name} – {amount}`:

The hero increases his MP.

If a command is given that would bring the MP of the hero above `200`, MP is increased so that it reaches the maximum.

Print the following message:

`{hero name} recharged for {amount recovered} MP!`

- `Heal – {hero name} – {amount}`:

The hero increases his HP.

If a command is given that would bring the HP of the hero above `100`, HP is increased so that it reaches the maximum.

Print the following message:

- `{hero name} healed for {amount recovered} HP!`

### Input

- On the first line of the standard input, you will receive an integer `n`

- On the next `n` lines, the heroes themselves will follow with their **hit points** and **mana points** separated by empty space in the following format

- You will be receiving different **commands**, each on a new line, separated by ` – ` (space dash space ), until the `End` command is given

### Output

- Print all members of your party who are **still alive**, sorted by their **HP in descending order**, then by their **name in ascending order**, in the following format (their HP/MP need to be indented 2 spaces):

`{hero name}`

`HP: {current HP}`

`MP: {current MP}`

`...`

### Constraints

- The starting HP\/MP of the heroes will be valid, 32-bit integers, will never be negative, or exceed the respective limits.

- The HP\/MP amounts in the commands will never be negative.

- The hero names in the commands will always be valid members of your party. No need to check that explicitly

| **Input** | **Output** |
| --- | --- |
| 4 | SirMullich healed for 30 HP! |
| Adela 90 150 | Adela recharged for 50 MP! |
| SirMullich 70 40 | Tyris does not have enough MP to cast Fireball! |
| Ivor 1 111 | Tyris has been killed by Fireball! |
| Tyris 94 61 | Ivor has been killed by Mosquito! |
| Heal - SirMullich - 50 | SirMullich |
| Recharge - Adela - 100 | HP: 100 |
| CastSpell - Tyris - 1000 - Fireball | MP: 40 |
| TakeDamage - Tyris - 99 - Fireball | Adela |
| TakeDamage - Ivor - 3 - Mosquito | HP: 90 |
| End | MP: 200 |
|  |  |

### Comments

`Heal` – SirMullich healed for 30 HP due to the HP max limit.

`Recharge` – Adela recharged for 50 MP due to the MP max limit.

`CastSpell` – Tyris does not have enough MP to cast the spell.

`TakeDamage` – Tyris`s HP is reduced by 99, thus becoming -5, which means that he is dead.

`TakeDamage` – Ivor`s HP is now -2, so he is dead too.

After the `End` command we print the remaining living heroes, sorted by their HP in reverse order.


## Examples
| **Input** | **Output** |
| --- | --- |
| 2 | Solmyr healed for 10 HP! |
| Solmyr 85 120 | Solmyr recharged for 50 MP! |
| Kyrre 99 50 | Kyrre was hit for 66 HP by Orc and now has 33 HP left! |
| Heal - Solmyr - 10 | Kyrre has successfully cast ViewEarth and now has 35 MP! |
| Recharge - Solmyr - 50 | Solmyr |
| TakeDamage - Kyrre - 66 - Orc | HP: 95 |
| CastSpell - Kyrre - 15 - ViewEarth | MP: 170 |
| End | Kyrre |
|  | HP: 33 |
|  | MP: 35 |
|  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
Solmyr 85 120
Kyrre 99 50
Heal - Solmyr - 10
Recharge - Solmyr - 50
TakeDamage - Kyrre - 66 - Orc
CastSpell - Kyrre - 15 - ViewEarth
End
[/input]
[output]
Solmyr healed for 10 HP!
Solmyr recharged for 50 MP!
Kyrre was hit for 66 HP by Orc and now has 33 HP left!
Kyrre has successfully cast ViewEarth and now has 35 MP!
Solmyr
  HP: 95
  MP: 170
Kyrre
  HP: 33
  MP: 35
[/output]
[/test]
[test open]
[input]
4
Adela 90 150
SirMullich 70 40
Ivor 1 111
Tyris 94 61
Heal - SirMullich - 50
Recharge - Adela - 100
CastSpell - Tyris - 1000 - Fireball
TakeDamage - Tyris - 99 - Fireball
TakeDamage - Ivor - 3 - Mosquito
End
[/input]
[output]
SirMullich healed for 30 HP!
Adela recharged for 50 MP!
Tyris does not have enough MP to cast Fireball!
Tyris has been killed by Fireball!
Ivor has been killed by Mosquito!
SirMullich
  HP: 100
  MP: 40
Adela
  HP: 90
  MP: 200
[/output]
[/test]
[test]
[input]
1
SirMullich 75 120
Heal - SirMullich - 24
End
[/input]
[output]
SirMullich healed for 24 HP!
SirMullich
  HP: 99
  MP: 120
[/output]
[/test]
[test]
[input]
1
SirMullich 75 120
Heal - SirMullich - 100
End
[/input]
[output]
SirMullich healed for 25 HP!
SirMullich
  HP: 100
  MP: 120
[/output]
[/test]
[test]
[input]
1
SirMullich 75 120
Recharge - SirMullich - 33
End
[/input]
[output]
SirMullich recharged for 33 MP!
SirMullich
  HP: 75
  MP: 153
[/output]
[/test]
[test]
[input]
1
SirMullich 75 120
Recharge - SirMullich - 100
End
[/input]
[output]
SirMullich recharged for 80 MP!
SirMullich
  HP: 75
  MP: 200
[/output]
[/test]
[test]
[input]
1
SirMullich 75 120
TakeDamage - SirMullich - 74 - Dragon
End
[/input]
[output]
SirMullich was hit for 74 HP by Dragon and now has 1 HP left!
SirMullich
  HP: 1
  MP: 120
[/output]
[/test]
[test]
[input]
1
SirMullich 75 120
TakeDamage - SirMullich - 75 - Rabbit
End
[/input]
[output]
SirMullich has been killed by Rabbit!
[/output]
[/test]
[test]
[input]
1
SirMullich 75 120
CastSpell - SirMullich - 120 - LighteningStrike
End
[/input]
[output]
SirMullich has successfully cast LighteningStrike and now has 0 MP!
SirMullich
  HP: 75
  MP: 0
[/output]
[/test]
[test]
[input]
1
SirMullich 75 120
CastSpell - SirMullich - 121 - TownPortal
End
[/input]
[output]
SirMullich does not have enough MP to cast TownPortal!
SirMullich
  HP: 75
  MP: 120
[/output]
[/test]
[test]
[input]
3
Stamat 50 50
Manol 100 100
Yanaki 1 111
TakeDamage - Stamat - 40 - Manol
Heal - Stamat - 72
Heal - Manol - 7
TakeDamage - Manol - 120 - Yanaki
Heal - Yanaki - 99
TakeDamage - Yanaki - 0 - Stamat
TakeDamage - Yanaki - 101 - YanakiCommitedSuicide
End
[/input]
[output]
Stamat was hit for 40 HP by Manol and now has 10 HP left!
Stamat healed for 72 HP!
Manol healed for 0 HP!
Manol has been killed by Yanaki!
Yanaki healed for 99 HP!
Yanaki was hit for 0 HP by Stamat and now has 100 HP left!
Yanaki has been killed by YanakiCommitedSuicide!
Stamat
  HP: 82
  MP: 50
[/output]
[/test]
[test]
[input]
2
Manol 100 100
Stamat 50 50
CastSpell - Manol - 50 - DrinkRakia
CastSpell - Manol - 50 - DrinkRakia
CastSpell - Stamat - 100 - SleepWithWife
Recharge - Manol - 200
Recharge - Stamat - 200
CastSpell - Manol - 100 - DrinkVodka
CastSpell - Stamat - 100 - CheatOnWife
CastSpell - Stamat - 1000 - MakeMoney
CastSpell - Stamat - 50 - SleepNaked
CastSpell - Manol - 1 - ...
Recharge - Manol - 0 - ...
Recharge - Manol - 1 - ...
End
[/input]
[output]
Manol has successfully cast DrinkRakia and now has 50 MP!
Manol has successfully cast DrinkRakia and now has 0 MP!
Stamat does not have enough MP to cast SleepWithWife!
Manol recharged for 200 MP!
Stamat recharged for 150 MP!
Manol has successfully cast DrinkVodka and now has 100 MP!
Stamat has successfully cast CheatOnWife and now has 100 MP!
Stamat does not have enough MP to cast MakeMoney!
Stamat has successfully cast SleepNaked and now has 50 MP!
Manol has successfully cast ... and now has 99 MP!
Manol recharged for 0 MP!
Manol recharged for 1 MP!
Manol
  HP: 100
  MP: 100
Stamat
  HP: 50
  MP: 50
[/output]
[/test]
[test]
[input]
4
Pesho 1 100
Gosho 1 100
Atanas 1 100
Az 1 100
Heal - Atanas - 70
Heal - Atanas - 40
Heal - Gosho - 0
Heal - Gosho - 10
Heal - Pesho - 38
End
[/input]
[output]
Atanas healed for 70 HP!
Atanas healed for 29 HP!
Gosho healed for 0 HP!
Gosho healed for 10 HP!
Pesho healed for 38 HP!
Atanas
  HP: 100
  MP: 100
Pesho
  HP: 39
  MP: 100
Gosho
  HP: 11
  MP: 100
Az
  HP: 1
  MP: 100
[/output]
[/test]
[test]
[input]
4
Pesho 100 100
Gosho 100 100
Atanas 100 100
Az 100 100
TakeDamage - Pesho - 64 - Mouse
TakeDamage - Az - 38 - Dog
TakeDamage - Atanas - 0 - Cat
TakeDamage - Gosho - 100 - CoronaVirus
End
[/input]
[output]
Pesho was hit for 64 HP by Mouse and now has 36 HP left!
Az was hit for 38 HP by Dog and now has 62 HP left!
Atanas was hit for 0 HP by Cat and now has 100 HP left!
Gosho has been killed by CoronaVirus!
Atanas
  HP: 100
  MP: 100
Az
  HP: 62
  MP: 100
Pesho
  HP: 36
  MP: 100
[/output]
[/test]
[test]
[input]
4
Pesho 100 100
Gosho 100 100
Atanas 100 100
Az 100 100
Recharge - Pesho - 11
Recharge - Gosho - 0
Recharge - Atanas - 999
Recharge - Az - 73
End
[/input]
[output]
Pesho recharged for 11 MP!
Gosho recharged for 0 MP!
Atanas recharged for 100 MP!
Az recharged for 73 MP!
Atanas
  HP: 100
  MP: 200
Az
  HP: 100
  MP: 173
Gosho
  HP: 100
  MP: 100
Pesho
  HP: 100
  MP: 111
[/output]
[/test]
[test]
[input]
4
Pesho 100 100
Gosho 100 100
Atanas 100 100
Az 100 100
CastSpell - Pesho - 43 - SomeSpell
CastSpell - Gosho - 175 - SomeSpell
CastSpell - Atanas - 0 - SomeSpell
CastSpell - Az - 100 - SomeSpell
End
[/input]
[output]
Pesho has successfully cast SomeSpell and now has 57 MP!
Gosho does not have enough MP to cast SomeSpell!
Atanas has successfully cast SomeSpell and now has 100 MP!
Az has successfully cast SomeSpell and now has 0 MP!
Atanas
  HP: 100
  MP: 100
Az
  HP: 100
  MP: 0
Gosho
  HP: 100
  MP: 100
Pesho
  HP: 100
  MP: 57
[/output]
[/test]
[test]
[input]
10
Solmyr 75 150
Kyrre 100 125
Adela 60 120
Zubin 100 60
Cielle 55 170
Ellesar 45 200
Sorsha 55 50
PacoTigara 66 66
BlagoJesusa 100 0
Popeto 1 1
CastSpell - Solmyr - 140 - Chain Lightening
TakeDamage - Kyrre - 42 - Solmyr (Chain Lightening)
Recharge - Solmyr - 50
Heal - Kyrre - 13
CastSpell - Adela - 120 - Lightening Bolt
TakeDamage - Zubin - 45 - Adela (lightening Bolt)
Recharge - Adela - 0
Heal - Zubin - 0
CastSpell - Cielle - 200 - TownPortal
TakeDamage - Ellesar - 0 - Ciele (Town Portal)
Recharge - Cielle - 100
Heal - Ellesar - 56
CastSpell - Sorsha - 50 - Fireball
TakeDamage - PacoTigara - 66 - Sorsha (Fireball)
Recharge - Sorsha - 44
CastSpell - BlagoJesusa - 0 - Dribble
TakeDamage - Popeto - 1111 - BlagoJesusa (Dribble)
End
[/input]
[output]
Solmyr has successfully cast Chain Lightening and now has 10 MP!
Kyrre was hit for 42 HP by Solmyr (Chain Lightening) and now has 58 HP left!
Solmyr recharged for 50 MP!
Kyrre healed for 13 HP!
Adela has successfully cast Lightening Bolt and now has 0 MP!
Zubin was hit for 45 HP by Adela (lightening Bolt) and now has 55 HP left!
Adela recharged for 0 MP!
Zubin healed for 0 HP!
Cielle does not have enough MP to cast TownPortal!
Ellesar was hit for 0 HP by Ciele (Town Portal) and now has 45 HP left!
Cielle recharged for 30 MP!
Ellesar healed for 55 HP!
Sorsha has successfully cast Fireball and now has 0 MP!
PacoTigara has been killed by Sorsha (Fireball)!
Sorsha recharged for 44 MP!
BlagoJesusa has successfully cast Dribble and now has 0 MP!
Popeto has been killed by BlagoJesusa (Dribble)!
BlagoJesusa
  HP: 100
  MP: 0
Ellesar
  HP: 100
  MP: 200
Solmyr
  HP: 75
  MP: 60
Kyrre
  HP: 71
  MP: 125
Adela
  HP: 60
  MP: 0
Cielle
  HP: 55
  MP: 200
Sorsha
  HP: 55
  MP: 44
Zubin
  HP: 55
  MP: 60
[/output]
[/test]
[/tests]
[/code-task]
[/slide]