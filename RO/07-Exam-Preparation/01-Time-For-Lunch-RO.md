[slide hideTitle]
# Problem: Time For Lunch
[code-task title="Time For Lunch" taskId="java-exam-prep-Time-For-Lunch" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
În pauza de masă doriți să urmăriți un episod din serialul preferat.

Sarcina dvs. este să scrieți un program care vă va ajuta să determinați dacă aveți suficient timp pentru a viziona episodul.

În pauza de masă petreceți timpul pentru a lua masa și pentru a vă relaxa.

Timpul pentru prânz va fi 1/8 din pauza, iar timpul pentru relaxare va fi 1/4 din pauza.

## Intrare
Primiți 3 linii de pe consolă:
- Numele seriei - un șir
- Durata unui episod - un număr întreg în intervalul [10… 90]
- Durata pauzei - un număr întreg în intervalul [10 ... 120]

## Ieșire
Imprimați pe consolă o linie:
- Dacă timpul este suficient pentru a viziona episodul: "You have enough time to watch \{name of the series\} and left with \{time left\} minutes free time."
- Dacă timpul nu este suficient: "You don't have enough time to watch \{name of the series\}, you need \{time needed\} more minutes."
    - Rotunjiți timpul până la cel mai apropiat număr întreg.

## Exemplu
|**Intrare**|**Ieșire**|**Comentarii**|
| --- | --- | --- |
| Game of Thrones | You have enough time to watch Game of Thrones and left with 0 minutes free time. | Ora prânzului: 96 * 1/8 = 12,0 |
| 60 | | Timp de relaxare: 96 * 1/4 = 24.0 |
| 96 | | Timp rămas: 96 - 12 - 24 = 60 |
| | | Timpul care ne-a rămas este mai mare sau egal cu durata episodului, așa că imprimăm rezultatul potrivit. |

[/task-description]
[code-io /]
[tests]
[test]
[input]
Riverdale
57
90
[/input]
[output]
You don't have enough time to watch Riverdale, you need 1 more minutes.
[/output]
[/test]
[test]
[input]
Gotham
45
120
[/input]
[output]
You have enough time to watch Gotham and left with 30 minutes free time.
[/output]
[/test]
[test]
[input]
Arrow
45
60
[/input]
[output]
You don't have enough time to watch Arrow, you need 8 more minutes.
[/output]
[/test]
[test]
[input]
CW
45
51
[/input]
[output]
You don't have enough time to watch CW, you need 14 more minutes.
[/output]
[/test]
[test]
[input]
Lucifer
50
75
[/input]
[output]
You don't have enough time to watch Lucifer, you need 4 more minutes.
[/output]
[/test]
[test]
[input]
Riverdale
45
80
[/input]
[output]
You have enough time to watch Riverdale and left with 5 minutes free time.
[/output]
[/test]
[test]
[input]
Game of thrones
56
90
[/input]
[output]
You have enough time to watch Game of thrones and left with 1 minutes free time.
[/output]
[/test]
[test]
[input]
Lucifer
45
80
[/input]
[output]
You have enough time to watch Lucifer and left with 5 minutes free time.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]