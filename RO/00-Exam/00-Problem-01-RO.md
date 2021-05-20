# Problema 1: Bonus Scoring System
[slide hideTitle]

# Bonus Scoring System
[code-task title="Bonus Scoring System" taskId="Java-Fundamentals-Part-1-Exam-Bonus-Scoring-System" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Creați un program care calculează **punctele bonus** pentru fiecare **student**, pentru un anumit curs.

Pe prima linie veți primi **numărul de studenți** care participă la curs.

**Pe a doua linie** veți primi **numărul prelegerilor** din curs.

Pe a treia linie veți primi **bonusul suplimentar** pentru curs.

În rândurile următoare, veți primi **numărul de prezențe pentru fiecare student**.

Punctele bonus sunt calculate utilizând următoarea **formulă**:

\{bonus total\} = \{prezențe studenți\} \/ \{numărul prelegerilor\} \* (5 + \{bonus suplimentar\})

Găsiți studentul cu **cele mai multe puncte bonus** și tipăriți **punctele acestuia** împreună cu **numărul de prezențe** în următorul format:


"**Max Bonus:** \{**maxBonusPoints**\}."
"**The student has attended** \{**studentAttendances**\} **lectures.**"


La final, rotunjiți punctele bonus în sus la **următorul număr întreg**.

### Intrare / Constrângeri

- Pe **prima linie** veți primi numărul de studenți - un număr întreg în intervalul \[0...50\]

- Pe **a doua linie** veți primi numărul de prelegeri - un număr întreg în intervalul \[0...50\]

- Pe **a treia linie** veți primi **bonusul inițial** - un număr întreg în intervalul \[0...100\]

- **În următoarele rânduri** veți primi numărul de **prezențe ale fiecărui student**

- Nu vor fi **studenți cu aceeași valoare finală de puncte bonus**

### Ieșire

- Imprimați punctele bonus maxime, rotunjite în sus la cel mai apropiat număr întreg, împreună cu prezențele studentului dat, în formatul descris mai sus

## Primul Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 | Max Bonus: 34. |
| 25 | The student has attended 24 lectures. |
| 30 |  |
| 12 |  |
| 19 |  |
| 24 |  |
| 16 |  |
| 20 |  |

[hints]
[hint]
În primul rând, primim **numărul de studenți** înscriși la curs - **5**.

**Numărul** total al **prelegerilor** este de **25**, iar **bonusul** inițial este de **30**.
[/hint] 
[hint]
Apoi, **calculăm bonusul** studentului cu **12** prezențe, adică **16,8**.

**Continuăm** să calculăm **punctele bonus ale fiecărui student**.
[/hint] 
[hint]
Cel **cu** 24 **prezențe** are **cel mai mare bonus** - 33,6 (34 **rotunjit**), așa că imprimăm mesajul corespunzător pe consolă.
[/hint] 
[/hints] 

## Al Doilea Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 10 | Max Bonus: 18. |
| 30 | The student has attended 28 lectures. |
| 14 |  |
| 8 |  |
| 23 |  |
| 27 |  |
| 28 |  |
| 15 |  |
| 17 |  |
| 25 |  |
| 26 |  |
| 5 |  |
| 18 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
25
30
12
19
24
16
20
[/input]
[output]
Max Bonus: 34.
The student has attended 24 lectures.
[/output]
[/test]
[test open]
[input]
10
30
14
8
23
27
28
15
17
25
26
5
18
[/input]
[output]
Max Bonus: 18.
The student has attended 28 lectures.
[/output]
[/test]
[test]
[input]
3
10
5
4
6
3
[/input]
[output]
Max Bonus: 6.
The student has attended 6 lectures.
[/output]
[/test]
[test]
[input]
2
5
4
5
4
[/input]
[output]
Max Bonus: 9.
The student has attended 5 lectures.
[/output]
[/test]
[test]
[input]
4
4
4
4
3
2
1
[/input]
[output]
Max Bonus: 9.
The student has attended 4 lectures.
[/output]
[/test]
[test]
[input]
3
2
1
1
2
1
[/input]
[output]
Max Bonus: 6.
The student has attended 2 lectures.
[/output]
[/test]
[test]
[input]
3
10
7
5
4
1
[/input]
[output]
Max Bonus: 6.
The student has attended 5 lectures.
[/output]
[/test]
[test]
[input]
0
0
0
[/input]
[output]
Max Bonus: 0.
The student has attended 0 lectures.
[/output]
[/test]
[test]
[input]
5
8
12
7
8
6
5
4
[/input]
[output]
Max Bonus: 17.
The student has attended 8 lectures.
[/output]
[/test]
[test]
[input]
2
8
3
5
4
[/input]
[output]
Max Bonus: 5.
The student has attended 5 lectures.
[/output]
[/test]
[test]
[input]
2
6
5
6
5
[/input]
[output]
Max Bonus: 10.
The student has attended 6 lectures.
[/output]
[/test]
[test]
[input]
2
15
11
5
15
[/input]
[output]
Max Bonus: 16.
The student has attended 15 lectures.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
