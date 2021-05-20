# Problema 2: Mu Online

[slide hideTitle]
# Mu Online
[code-task title="Mu Online" taskId="Java-Fundamentals-Part-1-Exam-Mu-Online" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Începeți jocul cu **100 health și 0 bitcoins**.

Vi se va oferi un **șir**, reprezentând camerele temniței.

Fiecare cameră este separată prin simbolul "\|" (bară verticală): room1\|room2\|room3…

Textul pentru fiecare cameră conține **2 valori**.

Prima valoare poate fi:

- O poțiune:

   - sunteți vindecat cu valoarea poțiunii

   - punctele de viață **nu pot depăși** **punctele de viață inițiale (100)**

   - priul mesaj imprimat: "\{**amount**\} **health points restored.**"

   - după aceea, tipăriți starea curentă: "**Current health:** \{**health**\} **hp.**"

- Un cufăr:

    - măriți cantitatea de bitcoin cu valoarea dată

    - după aceea, tipăriți: "**You found** \{**amount**\} **bitcoins.**"

- În orice alt caz, vă confruntați cu un monstru cu care urmează să luptați

    - a doua valoare reprezintă punctele de atac ale monstrului

    - trebuie să scădeți valoarea atacului monstrului din punctele voastre de viață

Dacă sunteți **încă în viață** (punctele de viață \> 0), ați ucis monstrul și trebuie să imprimați: "**You have slayed a** \{**type of monster**\}.".

Dacă ați murit, tipăriți "**You died! Killed by** \{**monster**\}.", iar misiunea voastră se încheie.

Imprimați numărul ultimei camere la care ați reușit să ajungeți: "**Best room:** \{**room**\}".

Dacă ați reușit să parcurgeți toate camerele din temniță, imprimați pe următoarele trei rânduri:


"**You've made it!** 
**Bitcoins:** \{**bitcoins**\} 
**Health:** \{**health**\}" 


### Intrare \/ Constrângeri

Veți primi un șir care reprezintă camerele temniței, separate prin simbolul „\|” (bară verticală): room1\|room2\|room3...".

### Ieșire

Imprimați mesajele corespunzătoare descrise mai sus.

## Primul Exemplu

| **Intrare** | **Ieșire** |
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
Inițializați punctele de viață (**100**) și bitcoins (**0**), dar și numărul de camere atinse (**0** la început).
[/hint] 
[hint]
Împărțiți comenzile din intrare, iar apoi parcurgeți-le pe fiecare folosind o buclă for.
[/hint] 
[hint]
Înăuntrul buclei for, creați o instrucțiune if-else pentru fiecare tip de comandă sau monstru.
[/hint] 
[hint]
Pentru fiecare condiție, modificați datele și/sau tipăriți ieșirea corespunzătoare.
[/hint] 
[/hints] 

## Al Doilea Exemplu

| **Intrare** | **Ieșire** |
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
