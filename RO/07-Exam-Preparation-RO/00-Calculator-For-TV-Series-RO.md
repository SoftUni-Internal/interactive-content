# Problemă: Calculator For TV Series

[slide hideTitle]
# Calculator For TV Series


[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/RO/interactive-programming-basics-with-java-exam-preparation-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Calculator For TV Series" taskId="java-basics-exam-prep-Calculator-For-TV-Series" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Descriere
Scrieți un program care calculează cât va dura să urmăriți toate episoadele unui serial în **minute**.

Veți primi **numărul de sezoane**, **numărul de episoade din sezon** și **durata fiecărui episod**.

În fiecare episod există **reclame**, care măresc durata finală a unui episod cu 20%.

De asemenea, trebuie să rețineți că fiecare sezon se încheie cu un episod special, care durează cu **10 minute mai mult decât de obicei**. 

## Intrare
Veți primi 4 linii de pe consolă:
- Numele serialului - **un șir**
- Numărul de sezoane - un **număr întreg** în intervalul [1 ... 10]
- Numărul episoadelor - un **număr întreg** în intervalul [10 ... 80]
- Durata unui episod obișnuit fără reclame - **double** în intervalul [40.0 ... 65.0]

## Ieșire
Trebuie să imprimați pe consolă timpul necesar pentru a viziona toate episoadele, rotunjit la cel mai apropiat număr întreg, în următorul format:
- "**Total time needed to watch the** \{**name of the series**\} **series is** \{**time**\} **minutes.**"

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- | 
| Lucifer | Total time needed to watch the Lucifer series is 3594 minutes. | 
| 3 | 
| 18 | 
| 55 | 

[hints]

[hint]
Calculați durata reclamelor pe episod.
[/hint]
[hint]

Stabiliți durata unui episod, incluzând reclamele.
[/hint]
[hint]

Adăugați durata suplimentară pentru episoadele **speciale**.
[/hint]
[hint]

Calculați timpul total necesar pentru a vedea tot serialul.
[/hint]

[/hints]
[/task-description]
[code-io /]
[tests]
[test open]
[input]
Lucifer
3
18
55
[/input]
[output]
Total time needed to watch the Lucifer series is 3594 minutes.
[/output]
[/test]
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
