# Problema 1: SoftUni Reception 

[slide hideTitle]

# SoftUni Reception 

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/05.Java-Fundamentals-Exam-Preparation/RO/Java-Fund-Exam-Prep-1-Softuni-Receptionist-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="SoftUni Reception" taskId="java-fund-18-Exam-Preparation-problem-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Există **3 angajați care lucrează** la recepție.

Fiecare dintre ei poate gestiona **un număr diferit de persoane într-o oră**.

Sarcina voastră este să **calculați de cât timp au nevoie angajații pentru a răspunde la toate întrebările**.

Mai întâi, veți primi **3 rânduri cu numere întregi**, reprezentând **numărul de persoane pe care fiecare angajat le poate ajuta într-o oră**.

Pe linia următoare **veți primi numărul total de persoane** (număr întreg).

**La fiecare trei ore, toți angajații au o pauză de o oră** înainte de a începe din nou să lucreze.

**Calculați timpul necesar pentru a răspunde la toate întrebările** și **imprimați rezultatul în următorul format**: 

"**Time needed:** \{**time**\}**h.**"

## Intrare / Constrângeri
- Pe **primele 3** linii - **eficiența** fiecărui angajat - **numere întregi**
- Pe a **4-a** linie - numărul de persoane - un **număr întreg**

## Ieșire
- Imprimați o **singură linie**:

"**Time needed:** \{**time**\}**h.**"

## Exemplul 1
|**Intrare**|**Ieșire**|
| --- | --- |
| 5 | Time needed: 2h. |
| 6 | |
| 4 | |
| 20 | |

[hints]
[hint]
Angajații pot ajuta 15 persoane într-o oră.
[/hint] 
[hint]
După prima oră au mai rămas 5 persoane care trebuie să primească un răspuns.
[/hint] 
[hint]
Toți oamenii vor primi un răspuns în a doua oră.
[/hint] 
[/hints] 

## Exemplul 2
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 | Time needed: 10h. |
| 2 | |
| 3 | |
|45 | |

[hints]
[hint]
Angajații pot ajuta 6 persoane într-o oră.
[/hint] 
[hint]
În primele 3 ore ajută 18 persoane (6 \* 3).
După aceea, aceștia au o pauză de o oră.
[/hint] 
[hint]
După următoarele 3 ore 36 de persoane care au primit un răspuns (18 + 6 \* 3).
După încă o pauză de o oră, există doar 9 persoane care așteaptă un răspuns.
[/hint] 
[hint]
După 10 ore, toate persoanele au primit un răspuns.
[/hint] 
[/hints] 


## Exemplul 3
|**Intrare**|**Ieșire**|
| --- | --- |
| 3 | Time needed: 5h. |
| 2 | |
| 5 | |
| 40 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
6
4
20
[/input]
[output]
Time needed: 2h.
[/output]
[/test]
[test open]
[input]
1
2
3
45
[/input]
[output]
Time needed: 10h.
[/output]
[/test]
[test open]
[input]
3
2
5
40
[/input]
[output]
Time needed: 5h.
[/output]
[/test]
[test]
[input]
4
2
1
33
[/input]
[output]
Time needed: 6h.
[/output]
[/test]
[test]
[input]
1
2
3
100
[/input]
[output]
Time needed: 22h.
[/output]
[/test]
[test]
[input]
20
40
40
900
[/input]
[output]
Time needed: 11h.
[/output]
[/test]
[test]
[input]
32
21
6
1234
[/input]
[output]
Time needed: 27h.
[/output]
[/test]
[test]
[input]
1
1
1
4519
[/input]
[output]
Time needed: 2009h.
[/output]
[/test]
[test]
[input]
1
1
1
30
[/input]
[output]
Time needed: 13h.
[/output]
[/test]
[test]
[input]
2
4
4
70
[/input]
[output]
Time needed: 9h.
[/output]
[/test]
[test]
[input]
2
4
4
500
[/input]
[output]
Time needed: 66h.
[/output]
[/test]
[test]
[input]
3
3
3
27
[/input]
[output]
Time needed: 3h.
[/output]
[/test]
[test]
[input]
3
3
3
0
[/input]
[output]
Time needed: 0h.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
