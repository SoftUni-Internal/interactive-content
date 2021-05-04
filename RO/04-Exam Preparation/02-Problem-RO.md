# Problema 3: Numbers
[slide hideTitle]
# Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/05.Java-Fundamentals-Exam-Preparation/RO/Java-Fund-Exam-Prep-1-Numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Numbers" taskId="java-fund-18-Exam-Preparation-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Creați un program care **procesează o secvență de numere întregi separate printr-un spațiu.**

Găsiți și tipăriți **primele 5** numere care sunt **mai mari decât valoarea medie** a secvenței, sortate în **ordine descrescătoare.**

Imprimați "**No**" dacă nu există numere mai mari decât valoarea medie.

## Intrare

Intrarea este formată dintr-o secvență de numere întregi separate printr-un spațiu.

## Ieșire

Imprimați numerele pe o singură linie separate printr-un spațiu.

## Constrângeri

Toate numerele din intrare sunt întregi.

Numărul de elemente nu va depăși 10000.

## Exemplul 1
| **Intrare** | **Ieșire** |
| --- | --- |
| 10 20 30 40 50  | 50 40  |

[hints]
[hint]
Valoarea medie este egală cu 30.
Numerele mai mari decât 30 sunt: `{40, 50}`.

Acestea trebuie sortate în ordine descrescătoare: `{50, 40}`.
Deoarece există doar două numere care îndeplinesc criteriile, acestea vor fi incluse în rezultatul final.
[/hint] 
[/hints] 


## Exemplul 2
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 2 3 4 -10 30 40 50 20 50 60 60 51  | 60 60 51 50 50  |

[hints]
[hint]
Valoarea medie este egală cu 28,08.

Numerele mai mari decât 28.08 sunt: `{30, 40, 50, 50, 60, 60, 51}`.

Cele mai mari 5 numere sortate în ordine descrescătoare sunt: `{60, 60, 51, 50, 50}`.
[/hint] 
[/hints] 



## Exemplul 3
| **Intrare** | **Ieșire** |
| --- | --- |
| 1  | No  |

[hints]
[hint]
Valoarea medie este egală cu 1.

Nu există numere mai mari decât 1.
[/hint] 
[/hints] 


## Exemplul 4
| **Intrare** | **Ieșire** |
| --- | --- |
| -1 -2 -3 -4 -5 -6  | -1 -2 -3   |

[hints]
[hint]
Valoarea medie este egală cu -3.5.

Numerele mai mari decât -3.5 sunt: `{-1, -2, -3}`.

Primele 5 numere sortate în ordine descrescătoare sunt `{-1, -2, -3}`.
[/hint] 
[/hints] 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 20 30 40 50
[/input]
[output]
50 40
[/output]
[/test]
[test open]
[input]
5 2 3 4 -10 30 40 50 20 50 60 60 51
[/input]
[output]
60 60 51 50 50
[/output]
[/test]
[test open]
[input]
1
[/input]
[output]
No
[/output]
[/test]
[test open]
[input]
-1 -2 -3 -4 -5 -6
[/input]
[output]
-1 -2 -3
[/output]
[/test]
[test]
[input]
20 -3 -5 150 700
[/input]
[output]
700
[/output]
[/test]
[test]
[input]
-100000 100 300 200 500 700
[/input]
[output]
700 500 300 200 100
[/output]
[/test]
[test]
[input]
100 200 100 100 200 200 100
[/input]
[output]
200 200 200
[/output]
[/test]
[test]
[input]
243 3421 423 432 43 342 2413421 342 4231 4233421 3421 3251 -3241 3421 3214 -324 3 3 -3 3 324 342
[/input]
[output]
4233421 2413421
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
[/input]
[output]
20 19 18 17 16
[/output]
[/test]
[test]
[input]
231 34 23 423 -2324 3 3 -100000 2347 3247 36 3 3247 363 34 27243 10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60
[/input]
[output]
27243 3247 3247 2347 423
[/output]
[/test]
[test]
[input]
100
[/input]
[output]
No
[/output]
[/test]
[test]
[input]
100 100 100 100 100 100 100 100 100 100
[/input]
[output]
No
[/output]
[/test]
[test]
[input]
10 10 10 10 10 20 20 20 20 20 5 5 5 5 5 30 30 30 30 30
[/input]
[output]
30 30 30 30 30
[/output]
[/test]
[test]
[input]
100 203 300 100 200 300 50 20 100 182 70 200 400 500 10 200 300 100 200 300 5 20 100 180 700 200 40 500 100 200 300 100 200 303 50 20 100 180 700 200 403 509 100 20 300 100 200 390 20 20 10 180 700 209 400 500 100 -22 309 101 200 302 50 21 101 186 999
[/input]
[output]
999 700 700 700 509
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
