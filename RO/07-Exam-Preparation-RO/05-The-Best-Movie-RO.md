[slide hideTitle]
# Problem: The Best Movie
[code-task title="The Best Movie" taskId="java-basics-exam-prep-the-best-movie" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Până la comanda "STOP" veți primi titlurile filmelor voastre preferate.

Cel mai bun film pentru voi va fi cel care are cele mai multe puncte.

Punctele sunt calculate ca suma valorilor caracterelor ASCII din titlul filmului.

Nu va exista un caz în care să avem două filme cu un număr egal de puncte.

Rețineți următoarele:
- Pentru fiecare literă minusculă din titlu, trebuie să scădem din sumă de două ori lungimea titlului filmului.
- Pentru fiecare literă majusculă din titlu, lungimea titlului filmului trebuie scăzută din sumă.
Puteți avea maximum 7 titluri de film.

## Intrare
Primiți mai multe linii de pe consolă până la comanda "STOP" sau până la atingerea limitei de 7 filme:
- Titlul filmului - un șir;

## Ieșire
Imprimați pe consolă:
- Dacă ați atins limita de 7 filme, trebuie să imprimați: "The limit is reached."
- Imprimați cel mai bun film pentru dvs.: "The best movie for you is \{movie title\} with \{sum of symbols\} ASCII sum."

## Exemplu
|**Intrare**|**Ieșire**|**Comentarii** |
| --- | --- | --- |
| Matrix | The best movie for you is Breaking bad with 878 ASCII sum. | Mai întâi obținem Matrix, prima literă este M cu o valoare de 77, dar este o literă mare și scădem din ea lungimea titlului: 77 - 6 = 71. |
| Breaking bad | | A doua literă este a cu o valoare de 97 și scădem de două ori titlul filmului: 97 - 12 = 85. |
| Legend | | În mod similar, continuăm cu fiecare literă ulterioară și primim o sumă de 563. |
| STOP | | La primirea comenzii STOP, imprimăm titlul cu cea mai mare valoare, care este Breaking bad cu suma de 878. |

[/task-description]
[code-io /]
[tests]
[test]
[input]
The maze
School story 2
Shrek 2
Ice age
STOP
[/input]
[output]
The best movie for you is School story 2 with 1013 ASCII sum.
[/output]
[/test]
[test]
[input]
Tomorrow Land
NEW BEGINNING
STOP
[/input]
[output]
The best movie for you is Tomorrow Land with 1002 ASCII sum.
[/output]
[/test]
[test]
[input]
The maze
Scorch
Killing zone
Danger alert
Harry Poter
Shrek
Hobbit
[/input]
[output]
The limit is reached.
The best movie for you is Killing zone with 938 ASCII sum.
[/output]
[/test]
[test]
[input]
The Maze
New Beggining
Trials
STOP
[/input]
[output]
The best movie for you is New Beggining with 950 ASCII sum.
[/output]
[/test]
[test]
[input]
Dark Knight Raises
Game of thrones
STOP
[/input]
[output]
The best movie for you is Dark Knight Raises with 1156 ASCII sum.
[/output]
[/test]
[test]
[input]
New Beggining
Pretty Little Liars
Hobbit New Beggining
STOP
[/input]
[output]
The best movie for you is Pretty Little Liars with 1252 ASCII sum.
[/output]
[/test]
[test]
[input]
Frozen
Kill machine
Mad Max
Fury
Rage
Stone cold
Matrix
[/input]
[output]
The limit is reached.
The best movie for you is Kill machine with 901 ASCII sum.
[/output]
[/test]
[test]
[input]
Rage
Fury
Cold
Ice
Fire
Furrry
ROAD RAGE
[/input]
[output]
The limit is reached.
The best movie for you is Furrry with 584 ASCII sum.
[/output]
[/test]
[test]
[input]
Heavy Metal
Armagedon
War of Titans
TROY
Elysium
Vortex
Ice Age
[/input]
[output]
The limit is reached.
The best movie for you is War of Titans with 942 ASCII sum.
[/output]
[/test]
[test]
[input]
Heavy Metal
Armagedon
War of Titans
TROY
Elysium
Vortex
STOP
[/input]
[output]
The best movie for you is War of Titans with 942 ASCII sum.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]