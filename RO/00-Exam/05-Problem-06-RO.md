# Problemă: Tournament for Christmas
[slide hideTitle]
# Tournament for Christmas
[code-task title="Tournament for Christmas" taskId="pb-java-exam-tournament-for-christmas" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java 
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    // Scrieți codul dvs. aici
  }
}
```
[/code-editor]
[task-description]
## Descriere

Scrieți un program care urmărește performanța echipei voastre la un turneu de caritate de Crăciun.

Pentru fiecare zi a turneului veți primi **diferite nume de jocuri**, până când se primește comanda "**Finish**".

**Câștigând** fiecare joc, câștigați **20 euro** pentru caritate.

Trebuie să **calculați câți bani** ați câștigat la sfârșitul fiecărei zile.

**Dacă ați câștigat mai multe jocuri decât ați pierdut** - sunteți câștigătorul zilei și premiul dvs. primește **o creștere de 10%**.

La sfârșitul turneului, dacă ați câștigat în majoritatea zilelor, câștigați turneul și **suma câștigată este majorată cu 20%**.

**Nu va exista un caz în care numărul de jocuri câștigate și pierdute să fie egal**.

## Intrare

**Inițial, numărul de zile al turneului este citit de pe consolă - un număr întreg în intervalul [1 ... 20 ]**

Până când primiți comanda "**Finish**", citiți:

  - Numele jocului - **un șir**

Pentru fiecare joc citiți:

  - Rezultat - **un șir cu opțiuni: "win" sau "lose"**


## Ieșire

Ieșirea constă dintr-o singură linie:

- Dacă **câștigați** turneul:

     "**You won the tournament! Total money raised:** \{**earned money**\}"

- Dacă **pierdeți** turneul:

     "**You lost the tournament! Total money raised:** \{**earned money**\}"

**Suma trebuie formatată la a doua cifră după punctul zecimal.**

## Exemplu:

| **Intrare** | **Ieșire** |
| --- | --- | 
 **2** | You won the tournament! Total money raised: 132.00 |
| volleyball | |
| win | | 
| football | |
| lose | |
| basketball | |
| win | |
| **Finish** | |
| golf | | 
| win | |
| tennis | |
| win | |
| badminton | |
| win | |
| **Finish** | |

| **Input** | **Output** |
| --- | --- | 
| **3** | You lost the tournament! Total money raised: 84.00 |
| darts | |
| lose | | 
| handball | |
| lose | |
| judo | |
| win | |
| **Finish** | |
| snooker | | 
| lose | |
| swimming | |
| lose | |
| squash | |
| lose | |
| table tennis | |
| win | |
| **Finish** | |
| volleyball | |
| win | |
| basketball | |
| win | |
| **Finish** | |

[hints]
[hint]
Calculați câți bani ați câștigat în fiecare zi a turneului. Dacă în ziua respectivă ați câstigat mai multe jocuri decât ați pierdut, majorați câștigurile cu 10%.
[/hint]
[hint]
La întâlnirea comenzii "Finish", adăugați suma de bani câștigată și dacă ați câștigat în majoritatea zilelor, câștigați turneul și trebuie să majorați suma câștigată cu 20%.  
Tipăriți ieșirea corectă.
[/hint]
[/hints]



[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
volleyball
win
football
lose
basketball
win
Finish
golf
win
tennis
win
badminton
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 132.00
[/output]
[/test]
[test open]
[input]
3
darts
lose
handball
lose
judo
win
Finish
snooker
lose
swimming
lose
squash
lose
table tennis
win
Finish
volleyball
win
basketball
win
Finish
[/input]
[output]
You lost the tournament! Total money raised: 84.00
[/output]
[/test]
[test]
[input]
2
sport
lose
Finish
sport
lose
Finish
[/input]
[output]
You lost the tournament! Total money raised: 0.00
[/output]
[/test]
[test]
[input]
2
sport
win
Finish
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 52.80
[/output]
[/test]
[test]
[input]
3
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
win
Finish
sport
win
sport
win
sport
lose
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 156.00
[/output]
[/test]
[test]
[input]
5
sport
win
sport
win
sport
win
Finish
sport
win
sport
win
sport
win
sport
win
sport
win
sport
win
Finish
sport
win
sport
win
sport
win
Finish
sport
win
Finish
sport
win
sport
win
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 422.40
[/output]
[/test]
[test]
[input]
3
sport
win
sport
win
sport
win
sport
lose
sport
lose
Finish
sport
win
sport
win
sport
lose
Finish
sport
lose
sport
lose
sport
win
sport
lose
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 180.00
[/output]
[/test]
[test]
[input]
4
sport
lose
sport
lose
sport
win
sport
lose
Finish
sport
lose
sport
lose
sport
lose
Finish
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
lose
sport
win
Finish
[/input]
[output]
You lost the tournament! Total money raised: 84.00
[/output]
[/test]
[test]
[input]
2
sport
win
sport
win
sport
win
sport
lose
sport
lose
sport
lose
sport
lose
Finish
sport
lose
sport
lose
Finish
[/input]
[output]
You lost the tournament! Total money raised: 60.00
[/output]
[/test]
[test]
[input]
1
sport
win
sport
lose
sport
win
sport
lose
sport
win
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 105.60
[/output]
[/test]
[test]
[input]
4
sport
win
sport
win
sport
win
sport
lose
sport
lose
sport
win
Finish
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
win
Finish
sport
win
Finish
[/input]
[output]
You won the tournament! Total money raised: 208.80
[/output]
[/test]
[test]
[input]
4
sport
lose
sport
lose
sport
win
sport
lose
sport
lose
sport
win
Finish
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
win
Finish
sport
lose
Finish
[/input]
[output]
You lost the tournament! Total money raised: 104.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
