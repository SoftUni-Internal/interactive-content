[slide hideTitle]
# Problem: Cinema Income
[code-task title="Cinema Income" taskId="java-basics-exam-prep-cinema-income" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

## Descriere
Ați fost angajat la un cinematograf pentru a scrie un program care calculează dacă un film va fi suficient, astfel încât sala cinematografului să fie umplută și de câți bani va fi profitul.

Veți primi numărul de locuri în sală și pe rândurile următoare până la comanda "Movie time!", Câți oameni intră în sală.

Prețul pentru un bilet este de 5 $.

Dacă numărul actual de persoane care intră în sală poate fi împărțit la 3 fără rest, există 5 $. reducere din prețul total.

Dacă nu există suficiente locuri libere pentru persoanele care doresc să intre, înseamnă că nu mai sunt locuri și programul trebuie să oprească citirea intrărilor de pe consolă.

Dacă mai mulți oameni decât locurile disponibile încearcă să intre în sală, acesta este considerat complet și programul ar trebui să nu mai primească informații.

## Intrare
Citiți de pe consolă:
- Prima linie - capacitatea sălii - un număr întreg în intervalul \[50 ... 150\]

Pe fiecare dintre următoarele rânduri până la comanda "Movie time!":
- Numărul de persoane care intră în cinematograf - un număr întreg în intervalul \[1… 15\]

## Ieșire
Mai întâi, tipăriți pe consolă o linie:
- Dacă ați primit comanda "Movie time!": "There are \{seats left\} seats left in the cinema."
- Dacă nu mai sunt locuri libere în sală: "The cinema is full."
- Ulterior, tipăriți: "Cinema income - \{income\}$"

## Example
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 60 | There are 6 seats left in the cinema. | Dacă primim capacitatea sălii - 60 de locuri.|
| 10 | Cinema income - 255$ | Pe rândul următor primim persoanele care au intrat în sală - 10. |
| 6 | | Prețul pe care îl vor plăti este de 10 * 5 = 50. |
| 3 | | După aceea primim că 6 persoane intră în sală și 6 pot fi împărțite la 3, deci plătesc cu 5 $ mai puțin. |
| 20 | | Continuăm până primim comanda "Ora Filmului!” și apoi imprimăm o ieșire adecvată. |
| 15 | | |
| Movie time! | | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
140
15
15
10
5
6
7
8
9
Movie time!
[/input]
[output]
There are 65 seats left in the cinema.
Cinema income - 355$
[/output]
[/test]
[test]
[input]
150
15
15
15
15
15
10
10
10
Movie time!
[/input]
[output]
There are 45 seats left in the cinema.
Cinema income - 500$
[/output]
[/test]
[test]
[input]
50
10
15
15
10
9
[/input]
[output]
The cinema is full.
Cinema income - 240$
[/output]
[/test]
[test]
[input]
100
15
15
15
15
15
15
15
[/input]
[output]
The cinema is full.
Cinema income - 420$
[/output]
[/test]
[test]
[input]
120
10
10
10
10
10
10
10
10
10
10
10
10
Movie time!
[/input]
[output]
There are 0 seats left in the cinema.
Cinema income - 600$
[/output]
[/test]
[test]
[input]
50
15
15
10
6
3
3
[/input]
[output]
The cinema is full.
Cinema income - 225$
[/output]
[/test]
[test]
[input]
100
15
3
6
9
12
15
10
Movie time!
[/input]
[output]
There are 30 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[test]
[input]
50
15
15
10
9
9
[/input]
[output]
The cinema is full.
Cinema income - 230$
[/output]
[/test]
[test]
[input]
120
10
15
3
6
9
12
15
Movie time!
[/input]
[output]
There are 50 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]