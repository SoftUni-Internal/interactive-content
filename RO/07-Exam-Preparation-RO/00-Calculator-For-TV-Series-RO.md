[slide hideTitle]
# Problem: Calculator For TV Series
[code-task title="Calculator For TV Series" taskId="java-basics-exam-prep-Calculator-For-TV-Series" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program, care calculează cât vă va dura să urmăriți toate episoadele unui serial în câteva minute.

Veți primi unui număr de sezoane, numărul de episoade pe sezon și durata fiecărui episod.

În fiecare episod există reclame, a căror durată este de 20% din durata episodului.

De asemenea, trebuie să rețineți că fiecare sezon se încheie cu un episod special, care durează cu 10 minute mai mult decât de obicei. 

## Intrare
De pe consolă primiți 4 linii:
- Numele seriei - un șir
- Numărați anotimpurile - un număr întreg în intervalul [1 ... 10]
- Numărați episoadele - un număr întreg în intervalul [10… 80]
- Durata unui episod obișnuit fără reclame - un număr cu două cifre și punct zecimal în intervalul [40.0… 65.0]

## Ieșire
Trebuie să imprimați pe consolă timpul necesar pentru a viziona toate episoadele, rotunjite la cel mai apropiat număr întreg, în următorul format:
- "Total time needed to watch the \{name of the series\} series is \{time\} minutes."

## Exemplu
|**Intrare**|**Ieșire**|**Comentarii**|
| --- | --- | --- |
| Lucifer | Total time needed to watch the Lucifer series is 3594 minutes. | Durata reclamei pe episod: 20% от 55 = 11.0 |
| 3 | | Durata unui episod cu reclame: 55 + 11 = 66,0 |
| 18 | | Timp suplimentar de la episodul special: 3 * 10 = 30 |
| 55 | | Timp total pentru a viziona episoadele: 66 * 18 * 3 + 30 = 3594.0 |
[/task-description]
[code-io /]
[tests]
[test]
[input]
Flash
5
20
51
[/input]
[output]
Total time needed to watch the Flash series is 6170 minutes.
[/output]
[/test]
[test]
[input]
Origin
10
19
50
[/input]
[output]
Total time needed to watch the Origin series is 11500 minutes.
[/output]
[/test]
[test]
[input]
Arrow
5
24
60
[/input]
[output]
Total time needed to watch the Arrow series is 8690 minutes.
[/output]
[/test]
[test]
[input]
Vampires
8
25
50
[/input]
[output]
Total time needed to watch the Vampires series is 12080 minutes.
[/output]
[/test]
[test]
[input]
Tom & Jerry
15
25
30
[/input]
[output]
Total time needed to watch the Tom & Jerry series is 13650 minutes.
[/output]
[/test]
[test]
[input]
Teen wolf
5
20
55
[/input]
[output]
Total time needed to watch the Teen wolf series is 6650 minutes.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]