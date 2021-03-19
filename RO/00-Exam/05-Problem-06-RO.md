# Problem: Tournament for Christmas
[slide hideTitle]
# Tournament for Christmas
[code-task title="Tournament for Christmas" taskId="pb-java-exam-tournament-for-christmas" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java 
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    // Scrieți codul aici
  }
}
```
[/code-editor]
[task-description]
## Descriere

Scrie un program care urmărește performanța echipei tale la un turneu de caritate de Crăciun.

Pentru fiecare zi a turneului veți primi **diferite tipuri de nume de joc**, până când se primește comanda "**Finish**".

**Câștigând** fiecare joc, câștigi **20 euro** pentru caritate.

Trebuie să **calculați câți bani** ați câștigat la sfârșitul fiecărei zile.

**Dacă ați câștigat mai multe jocuri decât ați pierdut** - sunteți câștigătorul zilei și premiul dvs. primește **o creștere de 10%**.

La sfârșitul turneului, dacă ați câștigat în majoritatea zilelor, câștigați turneul și **creșteți totalul banilor cu 20%**.

**Nu va exista un caz în care numărul de jocuri câștigate și pierdute să fie egal**.

## Intrare

**Inițial, numărul de zile al turneului este citit de pe consolă - un număr întreg în intervalul [1 ... 20 ]**

Până când primiți comanda "**Finish**", citiți:

  - sport - **un șir**

Pentru fiecare sport citiți:

  * rezultat - **un șir cu opțiuni: "win" sau "lose"**


## Ieșire

Ieșirea constă dintr-o singură linie:

- Dacă **câștigi** turneul:

     "**You won the tournament! Total money raised:** \{**earned money**\}"

- Dacă **pierzi** turneul:

     "**You lost the tournament! Total money raised:** \{**earned money**\}"

**Banii ar trebui formatați la a doua cifră după punctul zecimal.**

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


## Comentarii:

Turneul durează 2 zile.

**Prima zi:**

Jucăm volei și câștigăm -> am câștigat 20 de euro.

Jucăm fotbal și pierdem -> 0 Euro.

Jucăm baschet și câștigăm -> am câștigat încă 20 de euro.

Primim comanda Finish și jocurile pentru ziua respectivă s-au încheiat.

Câștigat pentru ziua 20 + 0 + 20 = 40 euro. 

Am câștigat mai multe jocuri decât am pierdut, prin urmare sporim banii zilei cu 10% -> 44 euro.

**A doua zi:**

Jucăm golf și câștigăm -> 20 euro.

Jucăm tenis și câștigăm -> 20 euro.

Jucăm badminton și câștigăm -> 20 euro.

Primim comanda "**Finish**" și jocurile pentru ziua respectivă s-au încheiat.

Câștigat 20 + 20 + 20 = 60 euro. Am câștigat doar jocuri, respectiv mărim banii zilei cu 10% -> 66 euro.

Banii câștigați din cele două zile: 44 + 66 = 110 euro.

Deoarece avem mai multe victorii decât pierderi, câștigăm turneul și creștem banii cu 20% -> 132 euro.



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
