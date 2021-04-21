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
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
# Descriere

Sunt **3 angajați care lucrează** la recepție toată ziua.

Fiecare dintre ei poate gestiona **un număr diferit de persoane pe oră**.

Sarcina dvs. este să **calculați cât timp va dura pentru a răspunde la toate întrebările** ale unui număr dat de persoane.

Mai întâi, veți primi **3 rânduri cu numere întregi**, reprezentând **numărul de persoane pe care fiecare angajat le poate ajuta pe zi**.

Pe linia următoare **veți primi numărul total de persoane** numărate ca un singur întreg.

**La fiecare patru ore, toți angajații au o pauză de o oră** înainte de a începe din nou să lucreze.

**Calculați timpul necesar pentru a răspunde la întrebările tuturor persoanelor** și **imprimați-l în următorul format**: 

"**Time needed:** \{**time**\}**h.**"

## Intrare / Limitări 
Pe primele 3 linii - **eficiența** fiecărui angajat -  **numere întregi**
- Pe a 4-a linie - numărul de persoane- un **număr întreg**

## Ieșire
- Imprimați o **singură linie**:

"**Time needed:** \{**time**\}**h.**"

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 5 | Time needed: 2h. |
| 6 | |
| 4 | |
| 20 | |

## Cometariu
- Toți angajații pot răspunde la 15 persoane pe oră

- După prima oră au mai rămas 5 persoane pentru a primi un răspuns

- Toți oamenii vor primi răspuns în a doua oră

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 | Time needed: 10h. |
| 2 | |
| 3 | |
|45 | |

## Cometariu
- Toți angajații pot răspunde la 6 persoane pe oră

- În primele 3 ore au răspuns 6 \* 3 = 18 persoane

- Atunci au o pauză de o oră

- După următoarele 3 ore sunt 18 + 6 \* 3 = 36 de persoane cu răspuns

- După pauză timp de o oră, există doar 9 persoane care așteaptă un răspuns 

- Ora 10 - toate întrebările oamenilor au primit un răspuns

## Exemplu
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