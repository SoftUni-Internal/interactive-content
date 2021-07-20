# Teme Pentru Acasă
[slide hideTitle]
# Problemă: Reverse Number with a Stack
[code-task title="Reverse Number with a Stack" taskId="java-advanced-stack-and-queue-Reverse-Number-with-a-Stack" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care citește **N numere întregi** din consolă și **le inversează ordinea cu ajutorul unei stive**.

Utilizați clasa `ArrayDeque<Integer>`.

Introduceți numerele în stivă și apoi extrageți-le pe rând.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 1 2 3 4 5 | 5 4 3 2 1 |
| 1 | 1 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5
[/input]
[output]
5 4 3 2 1
[/output]
[/test]
[test]
[input]
1 1 3 5 8 13 21
[/input]
[output]
21 13 8 5 3 1 1
[/output]
[/test]
[test open]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
10 11 12 13 14 15
[/input]
[output]
15 14 13 12 11 10
[/output]
[/test]
[test]
[input]
1 -2
[/input]
[output]
-2 1
[/output]
[/test]
[test]
[input]
0 0 0 0 0
[/input]
[output]
0 0 0 0 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Basic Stack Operations
[code-task title="Basic Stack Operations" taskId="java-advanced-stack-and-queue-Basic-Stack-Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Vi se va da un număr întreg **N** care reprezintă **numărul de elemente care trebuie adăugate în stivă**, un număr întreg **S** care reprezintă **numărul de elemente care trebuie extrase din stivă** și un număr întreg **X**. Trebuie să verificați dacă elementul X se află sau nu în stivă.

Dacă este prezent, imprimați **true** pe consolă.

Dacă nu este prezent, tipăriți cel mai mic element prezent la momentul respectiv în stivă.

## Intrare

- Pe prima linie vi se vor da numerele **N**, **S** și **X**, separate printr-un spațiu
- Pe următoarea linie veți primi numere **separate prin cel puțin un spațiu**

## Ieșire

- Imprimați **true** dacă **X** e prezent în stivă sau, în caz contrar, **imprimați cel mai mic** element din stivă
- Dacă stiva este goală, imprimați 0

## Exemple
| **Intrare** | **Ieșire** | **Comentarii** |
| --- | --- | --- |
| 5 2 13 | true | Trebuie să **adăugăm 5** elemente. Apoi, extragem **2** elemente. În final, trebuie să verificăm dacă 13 se găsește în stivă. Din moment ce se află în stivă, imprimăm **true**. |
| 1 13 45 32 4 |  |  |

| **Intrare** | **Ieșire** | **Comentarii** |
| --- | --- | --- |
| 4 1 666 | 13 | Scoatem un element (666) și apoi verificăm dacă 666 e prezent în stivă. Acesta nu se află în stivă, deci imprimăm cel mai mic element (13). |
| 420 69 13 666 |  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5 2 13
1 13 45 32 4
[/input]
[output]
true
[/output]
[/test]
[test open]
[input]
4 1 666
420 69 13 666
[/input]
[output]
13
[/output]
[/test]
[test]
[input]
3 3 90
90 90 90
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
10 3 105
105 0 54 389 34 5 -6 3 90 -542
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
10 5 1
0 0 0 0 1 0 0 0 0 1
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
10 6 0
1 1 1 1 0 1 1 1 1 0
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
10 10 50
10 20 30 40 50 60 70 80 90 100
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1 0 50
583874
[/input]
[output]
583874
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Maximum Element
[code-task title="Maximum Element" taskId="java-advanced-stack-and-queue-Maximum-Element" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Aveți o secvență goală și vi se vor da **N** comenzi.

Comenzile posibile sunt următoarele:

- `1 X` - **Adăugați** elementul **X** pe stivă
- `2` - **Ștergeți** elementul care se găsește în vârful stivei
- `3` - **Imprimați** pe consolă cel mai mare element din stivă

## Intrare

- Prima linie cu date de intrare conține un număr întreg **N** , unde `1 ≤ N ≤ 10 ^ 5`
- Următoarele **N** linii conțin comenzi; toate comenzile vor fi valide și vor respecta formatul descris
- Elementul **X** va fi în intervalul `1 ≤ X ≤ 10 ^ 9`
- **Tipul comenzii** va fi în intervalul `1 ≤ Type ≤ 3`

## Ieșire

- Pentru fiecare comandă de tipul `3`, **imprimați pe o linie nouă cel mai mare element** din stivă

## Exemplu
| **Intrare** | **Ieșire** | **Comentarii** |
| --- | --- | --- |
| 9 | 26 | 9 comenzi |
| 1 97 | 91 | Adăugați 97 |
| 2 |  | Extrageți un element |
| 1 20 |  | Adăugați 20 |
| 2 |  | Extrageți un element |
| 1 26 |  | Adăugați 26 |
| 1 20 |  | Adăugați 20 |
| 3 |  | Imprimați cel mai mare element (26) |
| 1 91 |  | Adăugați 91 |
| 3 |  | Imprimați cel mai mare element (91) |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
16
1 97
2
1 20
2
1 26
1 20
2
3
1 91
1 66
1 23
2
2
2
1 33
3
[/input]
[output]
26
33
[/output]
[/test]
[test]
[input]
12
1 5
3
1 10
3
1 9
3
2
3
2
3
1 6
3
[/input]
[output]
5
10
10
10
5
6
[/output]
[/test]
[test]
[input]
16
1 14
1 13
1 15
2
2
3
1 13
1 110
3
2
1 91
1 90
2
2
2
3
[/input]
[output]
14
110
14
[/output]
[/test]
[test]
[input]
9
1 1
1 2
1 3
1 4
1 5
1 100
3
2
3
[/input]
[output]
100
5
[/output]
[/test]
[test]
[input]
10
1 60
3
1 59
1 61
3
2
3
1 90
2
3
[/input]
[output]
60
61
60
60
[/output]
[/test]
[test]
[input]
28
1 90
1 91
1 92
1 93
3
2
3
1 100
3
2
3
2
3
1 10
1 11
1 12
1 13
1 14
1 15
2
2
2
2
3
2
2
2
3
[/input]
[output]
93
92
100
92
91
91
90
[/output]
[/test]
[test]
[input]
16
1 1
1 2
1 10
1 20
1 40
1 30
3
2
2
3
1 101
1 105
3
2
2
3
[/input]
[output]
40
20
105
20
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Basic Queue Operations
[code-task title="Basic Queue Operations" taskId="java-advanced-stack-and-queue-Basic-Queue-Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Se dă un număr întreg **N**, reprezentând **numărul de elemente care trebuie adăugate în coadă**, un număr întreg **S** care reprezintă **numărul de elemente care trebuie șterse** din coadă și, în final, un număr întreg **X**. **Verificați dacă X se află sau nu în coadă**.

Dacă se află în coadă, imprimați **true** pe consolă, iar dacă nu este prezent, **imprimați cel mai mic element prezent în coadă la momentul respectiv**.

## Exemplu
| **Intrare** | **Ieșire** | **Comentarii** |
| --- | --- | --- |
| 5 2 32 | true | Trebuie să adăugăm **5** elemente.  |
| 1 13 45 32 4 |  | Apoi, **scoatem 2** din ele.  |
|  |  | La final, trebuie să verificăm dacă 13 se găsește în coadă. Din moment ce se găsește, imprimăm **true**.  |


| **Intrare** | **Ieșire** |
| --- | --- |
| 4 1 666 | 13 |
| 666 69 13 420 |  |


| **Intrare** | **Ieșire** |
| --- | --- |
| 3 3 90 | 0 |
| 90 90 90 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5 2 32
1 13 45 32 4
[/input]
[output]
true
[/output]
[/test]
[test open]
[input]
4 1 666
666 69 13 420
[/input]
[output]
13
[/output]
[/test]
[test open]
[input]
3 3 90
90 90 90
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5 1 4
5 4 3 2 1
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
5 5 5
5 4 3 2 1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5 1 5
5 4 3 2 1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
10 5 13
45 54 14 54 9 13 34 251 353 153
[/input]
[output]
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Robotics
[code-task title="Robotics" taskId="java-advanced-stack-and-queue-Robotics" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Undeva în viitor, există o fabrică unde toți muncitorii din linia de ansamblare sunt roboți.

Fiecare robot are un **timp de procesare**, care este timpul de care robotul are nevoie pentru a procesa un produs. 

Când un **robot este liber**, el trebuie să **preia un produs pentru procesare** și să își logheze numele, produsul și timpul de începere al procesării.

Fiecare robot **procesează un produs venit pe linia de asamblare**. 

Câte un **produs vine** pe linie **o dată la fiecare secundă** (deci primul produs trebuie să apară la `[start time + 1 second]`). 

Dacă un produs trece de linie și **nu există un robot liber** pentru a-l prelua, acesta trebuie să fie **pus din nou la coadă**.

Roboții **stau în linia de ansamblare în ordinea introducerii lor**.

## Intrare

- Pe prima linie veți primi numele roboților și timpul lor de procesare în formatul `robotName-processTime;robotName-processTime;robotName-processTime`
- Pe a doua linie veți primi ora de începere în formatul `hh:mm:ss`
- Apoi, până la întâlnirea comenzii `End`, veți primi câte un produs pe fiecare linie

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| ROB-15;SS2-10;NX8000-3 | ROB - detail \[08:00:01\] |
| 8:00:00 | SS2 - glass \[08:00:02\] |
| detail | NX8000 - wood \[08:00:03\] |
| glass | NX8000 - apple \[08:00:06\] |
| wood |  |
| apple |  |
| End |  |

[hints] 
[hint]
Cât timp linia de produse este plină, măriți timpul total:

```java
while (!productLine.isEmpty()) {
  totalTime++;
  for (int i = 0; i < workingRobot.length; i++) {
    if (workingRobot[i] > 0) {
      workingRobot[i]--;
    }
  }

  // ... 
}
```
[/hint] 
[hint]
Obțineți produsul curent cu ajutorul metodei `.poll()`:

```java
String currentProduct = productLine.poll();
```
[/hint] 
[hint]
Implementați o metodă de formatare a timpului:

```java
private static String formatTime(long totalTime) {
  long hours = (totalTime / 3600) % 24;
  long minutes = (totalTime / 60) % 60;
  long seconds = totalTime % 60;

  return String.format("%02d:%02d:%02d", 
    hours, minutes, seconds);
}
```
[/hint] 
[/hints] 

| **Intrare** | **Ieșire** |
| --- | --- |
| ROB-60 | ROB - detail \[08:00:00\] |
| 7:59:59 | ROB - sock \[08:01:00\] |
| detail | ROB - wood \[08:02:00\] |
| glass | ROB - glass \[08:03:00\] |
| wood |  |
| sock |  |
| End |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
ROB-15;SS2-10;NX8000-3
8:00:00
detail
glass
wood
apple
End
[/input]
[output]
ROB - detail \[08:00:01\]
SS2 - glass \[08:00:02\]
NX8000 - wood \[08:00:03\]
NX8000 - apple \[08:00:06\]
[/output]
[/test]
[test open]
[input]
ROB-60
7:59:59
detail
glass
wood
sock
End
[/input]
[output]
ROB - detail \[08:00:00\]
ROB - sock \[08:01:00\]
ROB - wood \[08:02:00\]
ROB - glass \[08:03:00\]
[/output]
[/test]
[test]
[input]
ROB-90;SS2-120;NX8000-300
12:00:00
detail
glass
detail
glass
wood
detail
glass
wood
sock
sock
wood
detail
glass
wood
sock
sock
End
[/input]
[output]
ROB - detail \[12:00:01\]
SS2 - glass \[12:00:02\]
NX8000 - detail \[12:00:03\]
ROB - glass \[12:01:31\]
SS2 - glass \[12:02:02\]
ROB - wood \[12:03:01\]
SS2 - detail \[12:04:02\]
ROB - sock \[12:04:31\]
NX8000 - wood \[12:05:03\]
ROB - glass \[12:06:01\]
SS2 - wood \[12:06:02\]
ROB - sock \[12:07:31\]
SS2 - wood \[12:08:02\]
ROB - sock \[12:09:01\]
SS2 - detail \[12:10:02\]
NX8000 - sock \[12:10:03\]
[/output]
[/test]
[test]
[input]
BB-8;R2D-2;C3P-0
23:57:20
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
End
[/input]
[output]
BB - detail \[23:57:21\]
R2D - coffee \[23:57:22\]
C3P - glass \[23:57:23\]
R2D - detail \[23:57:24\]
C3P - beer \[23:57:25\]
R2D - glass \[23:57:26\]
C3P - wood \[23:57:27\]
R2D - detail \[23:57:28\]
BB - glass \[23:57:29\]
R2D - wood \[23:57:30\]
C3P - sock \[23:57:31\]
R2D - cigarettes \[23:57:32\]
C3P - sock \[23:57:33\]
R2D - wood \[23:57:34\]
C3P - phone \[23:57:35\]
R2D - detail \[23:57:36\]
BB - glass \[23:57:37\]
R2D - wood \[23:57:38\]
C3P - swine \[23:57:39\]
R2D - sock \[23:57:40\]
C3P - rocket \[23:57:41\]
R2D - sock \[23:57:42\]
C3P - duck \[23:57:43\]
[/output]
[/test]
[test]
[input]
BB-800;R2D-2400;C3P-3560
23:57:20
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
End
[/input]
[output]
BB - detail \[23:57:21\]
R2D - coffee \[23:57:22\]
C3P - glass \[23:57:23\]
BB - rocket \[00:10:41\]
BB - duck \[00:24:01\]
BB - sock \[00:37:21\]
R2D - cigarettes \[00:37:22\]
BB - glass \[00:50:41\]
C3P - sock \[00:56:43\]
BB - glass \[01:04:01\]
BB - glass \[01:17:21\]
R2D - wood \[01:17:22\]
BB - swine \[01:30:41\]
BB - wood \[01:44:01\]
C3P - sock \[01:56:03\]
BB - phone \[01:57:21\]
R2D - detail \[01:57:22\]
BB - sock \[02:10:41\]
BB - wood \[02:24:01\]
BB - wood \[02:37:21\]
R2D - detail \[02:37:22\]
BB - beer \[02:50:41\]
C3P - detail \[02:55:23\]
[/output]
[/test]
[test]
[input]
BB-80000;R2D-24000;C3P-35600
23:57:20
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
End
[/input]
[output]
BB - detail \[23:57:21\]
R2D - coffee \[23:57:22\]
C3P - glass \[23:57:23\]
R2D - sock \[06:37:22\]
C3P - sock \[09:50:43\]
R2D - glass \[13:17:22\]
C3P - detail \[19:44:03\]
R2D - rocket \[19:57:22\]
BB - wood \[22:10:41\]
R2D - beer \[02:37:22\]
C3P - swine \[05:37:23\]
R2D - glass \[09:17:22\]
C3P - detail \[15:30:43\]
R2D - duck \[15:57:22\]
BB - phone \[20:24:01\]
R2D - detail \[22:37:22\]
C3P - sock \[01:24:03\]
R2D - cigarettes \[05:17:22\]
C3P - wood \[11:17:23\]
R2D - glass \[11:57:22\]
BB - wood \[18:37:21\]
R2D - sock \[18:37:22\]
C3P - wood \[21:10:43\]
[/output]
[/test]
[test]
[input]
BB-80000;SARS-34300;GOD200R5-9800;Hammerhead-42000;R2D-24000;C3P-35600
23:57:20
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
End
[/input]
[output]
BB - detail \[23:57:21\]
SARS - coffee \[23:57:22\]
GOD200R5 - glass \[23:57:23\]
Hammerhead - detail \[23:57:24\]
R2D - beer \[23:57:25\]
C3P - glass \[23:57:26\]
GOD200R5 - glass \[02:40:43\]
GOD200R5 - detail \[05:24:03\]
R2D - wood \[06:37:25\]
GOD200R5 - wood \[08:07:23\]
SARS - sock \[09:29:02\]
C3P - glass \[09:50:46\]
GOD200R5 - sock \[10:50:43\]
Hammerhead - detail \[11:37:24\]
R2D - sock \[13:17:25\]
GOD200R5 - glass \[13:34:03\]
GOD200R5 - beer \[16:17:23\]
SARS - glass \[19:00:42\]
GOD200R5 - detail \[19:00:43\]
C3P - glass \[19:44:06\]
R2D - beer \[19:57:25\]
GOD200R5 - sock \[21:44:03\]
BB - cigarettes \[22:10:41\]
Hammerhead - detail \[23:17:24\]
GOD200R5 - wood \[00:27:23\]
R2D - cigarettes \[02:37:25\]
GOD200R5 - swine \[03:10:43\]
SARS - wood \[04:32:22\]
C3P - duck \[05:37:26\]
GOD200R5 - wood \[05:54:03\]
GOD200R5 - phone \[08:37:23\]
R2D - detail \[09:17:25\]
Hammerhead - duck \[10:57:24\]
GOD200R5 - wood \[11:20:43\]
SARS - duck \[14:04:02\]
GOD200R5 - wood \[14:04:03\]
C3P - sock \[15:30:46\]
R2D - wood \[15:57:25\]
GOD200R5 - beer \[16:47:23\]
GOD200R5 - detail \[19:30:43\]
BB - glass \[20:24:01\]
GOD200R5 - glass \[22:14:03\]
Hammerhead - wood \[22:37:24\]
R2D - swine \[22:37:25\]
SARS - sock \[23:35:42\]
GOD200R5 - detail \[00:57:23\]
C3P - wood \[01:24:06\]
GOD200R5 - rocket \[03:40:43\]
R2D - coffee \[05:17:25\]
GOD200R5 - glass \[06:24:03\]
SARS - sock \[09:07:22\]
GOD200R5 - wood \[09:07:23\]
Hammerhead - sock \[10:17:24\]
C3P - sock \[11:17:26\]
GOD200R5 - detail \[11:50:43\]
R2D - glass \[11:57:25\]
GOD200R5 - detail \[14:34:03\]
GOD200R5 - cigarettes \[17:17:23\]
BB - detail \[18:37:21\]
R2D - beer \[18:37:25\]
SARS - wood \[18:39:02\]
GOD200R5 - wood \[20:00:43\]
C3P - detail \[21:10:46\]
Hammerhead - swine \[21:57:24\]
GOD200R5 - duck \[22:44:03\]
R2D - detail \[01:17:25\]
GOD200R5 - cigarettes \[01:27:23\]
SARS - glass \[04:10:42\]
GOD200R5 - wood \[04:10:43\]
GOD200R5 - wood \[06:54:03\]
C3P - sock \[07:04:06\]
R2D - cigarettes \[07:57:25\]
GOD200R5 - wood \[09:37:23\]
Hammerhead - sock \[09:37:24\]
GOD200R5 - swine \[12:20:43\]
SARS - wood \[13:42:22\]
R2D - glass \[14:37:25\]
GOD200R5 - detail \[15:04:03\]
BB - wood \[16:50:41\]
C3P - rocket \[16:57:26\]
GOD200R5 - sock \[17:47:23\]
GOD200R5 - sock \[20:30:43\]
Hammerhead - swine \[21:17:24\]
R2D - rocket \[21:17:25\]
SARS - rocket \[23:14:02\]
GOD200R5 - sock \[23:14:03\]
GOD200R5 - detail \[01:57:23\]
C3P - phone \[02:50:46\]
R2D - glass \[03:57:25\]
GOD200R5 - cigarettes \[04:40:43\]
GOD200R5 - detail \[07:24:03\]
SARS - beer \[08:45:42\]
Hammerhead - swine \[08:57:24\]
GOD200R5 - detail \[10:07:23\]
R2D - coffee \[10:37:25\]
C3P - sock \[12:44:06\]
GOD200R5 - glass \[12:50:43\]
BB - sock \[15:04:01\]
GOD200R5 - rocket \[15:34:03\]
R2D - rocket \[17:17:25\]
SARS - detail \[18:17:22\]
GOD200R5 - beer \[18:17:23\]
Hammerhead - glass \[20:37:24\]
GOD200R5 - wood \[21:00:43\]
C3P - wood \[22:37:26\]
GOD200R5 - sock \[23:44:03\]
R2D - detail \[23:57:25\]
GOD200R5 - coffee \[02:27:23\]
SARS - glass \[03:49:02\]
GOD200R5 - swine \[05:10:43\]
R2D - glass \[06:37:25\]
GOD200R5 - rocket \[07:54:03\]
Hammerhead - wood \[08:17:24\]
C3P - duck \[08:30:46\]
GOD200R5 - sock \[10:37:23\]
BB - detail \[13:17:21\]
R2D - glass \[13:17:25\]
SARS - duck \[13:20:42\]
GOD200R5 - detail \[13:20:43\]
GOD200R5 - detail \[16:04:03\]
C3P - wood \[18:24:06\]
GOD200R5 - coffee \[18:47:23\]
Hammerhead - detail \[19:57:24\]
R2D - coffee \[19:57:25\]
GOD200R5 - phone \[21:30:43\]
SARS - phone \[22:52:22\]
GOD200R5 - phone \[00:14:03\]
R2D - glass \[02:37:25\]
GOD200R5 - sock \[02:57:23\]
C3P - glass \[04:17:26\]
GOD200R5 - detail \[05:40:43\]
Hammerhead - glass \[07:37:24\]
SARS - sock \[08:24:02\]
GOD200R5 - cigarettes \[08:24:03\]
R2D - wood \[09:17:25\]
GOD200R5 - wood \[11:07:23\]
BB - glass \[11:30:41\]
GOD200R5 - detail \[13:50:43\]
C3P - cigarettes \[14:10:46\]
R2D - sock \[15:57:25\]
GOD200R5 - sock \[16:34:03\]
SARS - glass \[17:55:42\]
GOD200R5 - sock \[19:17:23\]
Hammerhead - phone \[19:17:24\]
GOD200R5 - glass \[22:00:43\]
R2D - wood \[22:37:25\]
C3P - sock \[00:04:06\]
GOD200R5 - detail \[00:44:03\]
SARS - wood \[03:27:22\]
GOD200R5 - detail \[03:27:23\]
R2D - phone \[05:17:25\]
GOD200R5 - glass \[06:10:43\]
Hammerhead - wood \[06:57:24\]
GOD200R5 - rocket \[08:54:03\]
BB - glass \[09:44:01\]
C3P - glass \[09:57:26\]
GOD200R5 - coffee \[11:37:23\]
R2D - glass \[11:57:25\]
SARS - beer \[12:59:02\]
GOD200R5 - wood \[14:20:43\]
GOD200R5 - glass \[17:04:03\]
Hammerhead - sock \[18:37:24\]
R2D - rocket \[18:37:25\]
GOD200R5 - wood \[19:47:23\]
C3P - glass \[19:50:46\]
SARS - sock \[22:30:42\]
GOD200R5 - coffee \[22:30:43\]
GOD200R5 - swine \[01:14:03\]
R2D - sock \[01:17:25\]
GOD200R5 - detail \[03:57:23\]
C3P - glass \[05:44:06\]
Hammerhead - detail \[06:17:24\]
GOD200R5 - detail \[06:40:43\]
BB - duck \[07:57:21\]
R2D - sock \[07:57:25\]
SARS - detail \[08:02:22\]
GOD200R5 - glass \[09:24:03\]
GOD200R5 - detail \[12:07:23\]
R2D - sock \[14:37:25\]
GOD200R5 - cigarettes \[14:50:43\]
C3P - duck \[15:37:26\]
SARS - sock \[17:34:02\]
GOD200R5 - coffee \[17:34:03\]
Hammerhead - wood \[17:57:24\]
GOD200R5 - wood \[20:17:23\]
R2D - glass \[21:17:25\]
GOD200R5 - beer \[23:00:43\]
C3P - sock \[01:30:46\]
GOD200R5 - sock \[01:44:03\]
SARS - detail \[03:05:42\]
R2D - glass \[03:57:25\]
GOD200R5 - duck \[04:27:23\]
Hammerhead - wood \[05:37:24\]
BB - phone \[06:10:41\]
GOD200R5 - glass \[07:10:43\]
GOD200R5 - detail \[09:54:03\]
R2D - sock \[10:37:25\]
C3P - detail \[11:24:06\]
SARS - phone \[12:37:22\]
GOD200R5 - sock \[12:37:23\]
GOD200R5 - wood \[15:20:43\]
Hammerhead - swine \[17:17:24\]
R2D - wood \[17:17:25\]
GOD200R5 - wood \[18:04:03\]
GOD200R5 - sock \[20:47:23\]
C3P - wood \[21:17:26\]
SARS - sock \[22:09:02\]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Balanced Parentheses
[code-task title="Balanced Parentheses" taskId="java-advanced-stack-and-queue-Balanced-Parentheses" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Se dă o secvență care constă într-un număr de paranteze**. Determinați dacă **expresia e echilibrată**.

O secvență de paranteze **este echilibrată dacă** fiecare paranteză deschisă poate fi asociată în mod unic cu o paranteză de închidere.

De asemenea, **intervalul dintre ele trebuie să fie și el echilibrat**.

Vi se vor da 3 tipuri de paranteze: `(`, `{`, și `[`.

`{[()]}` - Acesta este un exemplu de secvență echilibrată.

`{[(])}` - Acesta este un exemplu de secvență neechilibrată.

## Intrare

- Fiecare intrare constă într-o singură linie, reprezentată de secvența de paranteze
- `1 ≤ Lungimea secvenței ≤ 1000`
- Fiecare caracter al secvenței va fi unul dintre următoarele: `{`, `}`, `(`, `)`, `[`, `]`

## Ieșire

- Pentru fiecare caz, tipăriți pe o linie nouă **"YES"**, dacă secvența este echilibrată; în caz contrar, tipăriți **"NO"**



## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| `{[()]}` | YES |
| `{[(])}` | NO |
| `{{[[(())]]}}`| YES |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
\{\[()\]\}
[/input]
[output]
YES
[/output]
[/test]
[test]
[input]
\{\{\{\[()\]\}\}\}
[/input]
[output]
YES
[/output]
[/test]
[test]
[input]
\{\[(\])\}
[/input]
[output]
NO
[/output]
[/test]
[test]
[input]
\{\{\[\[(())\]\]\}\}
[/input]
[output]
YES
[/output]
[/test]
[test]
[input]
()()()()()()()()()()
[/input]
[output]
YES
[/output]
[/test]
[test]
[input]
()\[\]\{\}\{\}\}
[/input]
[output]
NO
[/output]
[/test]
[test]
[input]
()\[\{\[\{\{\[\{\}\{\}\}\{\}\}\{\}\}\{\}\}\{\{\}())()))()))(\]\}\}\]\}\]
[/input]
[output]
NO
[/output]
[/test]
[test]
[input]
((((((())))))))))))))))
[/input]
[output]
NO
[/output]
[/test]
[test]
[input]
()((((\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\{\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\[\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\]\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}\}))))
[/input]
[output]
YES
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Recursive Fibonacci
[code-task title="Recursive Fibonacci" taskId="java-advanced-stack-and-queue-Recursive-Fibonacci" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Fiecare element al **șirului lui Fibonacci** este calculat prin **însumarea celor două elemente precedente**.

Primele 2 elemente sunt 1, 1.

Astfel, secvența va fi 1, 1, 2, 3, 5, 8, 13, 21, 34…

Secvența poate fi generată cu o matrice, dar această soluție este simplă, motiv pentru care **cerința voastră este să implementați secvența în mod recursiv**.

Dacă funcția `getFibonacci(n)` returnează al n-lea număr din șirul lui Fibonacci, putem exprima asta cu ajutorul expresiei umrătoare:
`getFibonacci(n) = getFibonacci(n-1) + getFibonacci(n-2)`

Totuși, recursivitatea acestei funcții nu are o finalitate, lucru care va genera o excepție de supraîncărcare a stivei (StackOverflowException). 

Pentru a opri recursivitatea, aceasta trebuie să aibă un caz de oprire.

Cazul de oprire a recursivității este `getFibonacci(1)`, care trebuie să returneze 1. Același lucru este valabil pentru `getFibonacci(0)`.

## Intrare

- Pe o singură linie, utilizatorul trebuie să introducă numărul dorit din șirul lui Fibonacci, N, unde `1 <= N <= 49` 

## Ieșire

- Datele de ieșire constă în al N-lea număr din șirul lui Fibonacci, începând de la 0

[hints]
[hint]
Pentru a genera al N-lea număr din șirul lui Fibonacci, calculăm numerele precedente `N - 1` și `N - 2`, dar pentru calculul elementului `N - 1` trebuie să calculăm numerele `N - 2` și `N - 3`, deci trebuie să repetăm multe calcule.
[/hint] 
[hint]
Dacă doriți să aflați cum puteți omite toate aceste calcule care nu sunt necesare, puteți căuta o tehnică numită [memoization](https://en.wikipedia.org/wiki/Memoization).
[/hint] 
[/hints] 


## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 | 8 |
| 10 | 89 |
| 21 | 17711 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
[/input]
[output]
8
[/output]
[/test]
[test open]
[input]
10
[/input]
[output]
89
[/output]
[/test]
[test open]
[input]
21
[/input]
[output]
17711
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
13
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
34
[/output]
[/test]
[test]
[input]
24
[/input]
[output]
75025
[/output]
[/test]
[test]
[input]
30
[/input]
[output]
1346269
[/output]
[/test]
[test]
[input]
37
[/input]
[output]
39088169
[/output]
[/test]
[test]
[input]
42
[/input]
[output]
433494437
[/output]
[/test]
[test]
[input]
49
[/input]
[output]
12586269025
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Simple Text Editor
[code-task title="Simple Text Editor" taskId="java-advanced-stack-and-queue-Simple-Text-Editor" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Aveți sarcina de a crea un editor simplu de text.

Cerința voastră e să implementați **4 tipuri de comenzi** pentru manipularea textului:

- 1 \[string\] - **lipește** un șir dat la finalul textului
- 2 \[count\] - **șterge** ultimele **\[count\]** elemente din text
- 3 \[index\] - **returnează** elementul de pe poziția **\[index\]** din text
- 4 - **anulează** ultima comandă de tip 1 sau 2 și returnează textul la starea dinaintea acelei operații

### Intrare

- Prima linie conține **N** , numărul de operații, unde `1 ≤ N ≤ 105`
- Fiecare dintre următoarele **N** linii conține numele operației, urmat de argumentul comenzii, dacă acesta există, separate de un spațiu în formatul următor: `comandă argument`
- **Lungimea textului** nu va depăși **1000000** de caractere
- Toate caracterele date sunt **litere din alfabetul limbii engleze**
- Este **garantat** că secvența de **operații date poate fi realizată**

### Ieșire

- Pentru fiecare operație de tip `3`, tipăriți o **singură linie care conține caracterul returnat de acea operație**

## Exemplu
| **Intrare** | **Ieșire** | **Comentarii** |
| --- | --- | --- |
| 8 |  | Există 8 operații. Inițial, textul este gol  |
| 1 abc |  | Adăugăm "abc" |
| 3 3 | c | Imprimăm al treilea caracter |
| 2 3 |  | Ștergem 3 caractere |
| 1 xy |  | Adăugăm "xy" |
| 3 2 | y | Imprimăm al doilea caracter |
| 4 |  | Anulăm ultima comandă - textul devine "" |
| 4 |  | Anulăm ultima comandă - textul devine "abc" |
| 3 1 | a | Imprimăm primul caracter |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
8
1 abc
3 3
2 3
1 xy
3 2
4 
4 
3 1
[/input]
[output]
c
y
a
[/output]
[/test]
[test]
[input]
9
1 ZdrKoPr
3 7
2 2
3 5
4
3 7
4
1 BegaiSToqTest
3 5
[/input]
[output]
r
o
r
i
[/output]
[/test]
[test]
[input]
8
1 aaaaaaaaab
1 aaaaaaaaab
2 10
2 10
4
4
3 10
3 20
[/input]
[output]
b
b
[/output]
[/test]
[test]
[input]
8
1 RapuncelBesheTuk
2 3
1 Tam
4
4
3 1
3 15
3 16
[/input]
[output]
R
u
k
[/output]
[/test]
[test]
[input]
10
1 Mo
2 2
4
1 Ti
2 2
4
1 Karq
2 1
3 1
3 5
[/input]
[output]
M
K
[/output]
[/test]
[test]
[input]
13
1 ASL
1 Opsi
1 Mopsi
2 5
2 4
2 3
4
4
4
1 Zdr
3 13
3 14
3 15
[/input]
[output]
Z
d
r
[/output]
[/test]
[test]
[input]
14
1 ANqkoiKara
1 Kolelo
2 6
1 MaikaTi
1 DaShieChorapi
2 30
1 ANqkoiPushi
1 Seno
4
4
1 TovaBeshe
3 4
3 6
3 9
[/input]
[output]
a
e
e
[/output]
[/test]
[test]
[input]
14
1 NaskoE
1 SlabNa
1 Unreal
2 6
1 CS
4
4
4
4
1 MnLosh
1 NaSeriousSam
3 6
3 15
3 22
[/input]
[output]
E
S
S
[/output]
[/test]
[test]
[input]
23
1 ToqTest
1 ELesen
3 1
3 4
4
4
1 Obache
2 3
2 3
1 ObacheKazah
4
4
4
1 Sledvashtiq
1 EDosta
1 Vesel
3 7
3 8
3 9
2 5
1 Lud
3 25
3 26
[/input]
[output]
T
T
S
l
e
u
d
[/output]
[/test]
[test]
[input]
9
1 aaa
1 bbb
2 3
3 1
2 3
4
4
4
3 3
[/input]
[output]
a
a
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Infix to Postfix
[code-task title="Infix to Postfix" taskId="java-advanced-stack-and-queue-Infix-to-Postfix" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Expresiile matematice sunt **scrise în notația infix**, de exemplu `5 / ( 3 + 2 )`.

Totuși, acest tip de notație **nu este eficientă pentru procesarea efectuată de computere**, deoarece mai întâi trebuie să evaluăm expresia din interiorul parantezelor, deci există multe mutări înainte-înapoi.

O metodă mai potrivită este **convertirea în notația postfix** (numită și [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)), în care **expresia este evaluată de la stânga la dreapta** , de exemplu `3 2 + 5 /`.

Implementați un **algoritm care convertește** o expresie matematică **din notația infix în notația postfix**. Utilizați faimosul [algoritm Shunting-yard](https://en.wikipedia.org/wiki/Shunting-yard_algorithm).

## Intrare

- Veți **primi o expresie matematică pe o singură linie**
- Caracterele pot fi numere de la 0 la 9, variabile de la a la z, operatorii `+, -, *, /` și parantezele `(` sau `)`
- Fiecare caracter este **separat printr-un singur spațiu**

## Ieșire

- **Datele de ieșire trebuie să fie afișate pe o singură linie**, constând în **caractere** **separate printr-un singur spațiu**

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| `5 / ( 3 + 2 )` | `5 3 2 + /` |
| `1 + 2 + 3` | `1 2 + 3 +` |
| `7 + 13 / ( 12 - 4 )` | `7 13 12 4 - / +` |
| `( 3 + x ) - y` | `3 x + y -` |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5 / ( 3 + 2 )
[/input]
[output]
5 3 2 + /
[/output]
[/test]
[test open]
[input]
1 + 2 + 3
[/input]
[output]
1 2 + 3 +
[/output]
[/test]
[test open]
[input]
7 + 13 / ( 12 - 4 )
[/input]
[output]
7 13 12 4 - / +
[/output]
[/test]
[test open]
[input]
( 3 + x ) - y
[/input]
[output]
3 x + y -
[/output]
[/test]
[test]
[input]
3 + 2 + 4 \* 1
[/input]
[output]
3 2 + 4 1 \* +
[/output]
[/test]
[test]
[input]
( 1 + 2 ) + ( 2 \* 6 ) / ( 7 - 2 )
[/input]
[output]
1 2 + 2 6 \* 7 2 - / +
[/output]
[/test]
[test]
[input]
( 1 + 2 ) + ( 2 \* 6 ) / ( 7 - 2 ) \* ( x \* ( 2 - 5 ) + ( 6 - 2 ) )
[/input]
[output]
1 2 + 2 6 \* 7 2 - / x 2 5 - \* 6 2 - + \* +
[/output]
[/test]
[test]
[input]
2 + 3 - 4 + ( 2 - 2 )
[/input]
[output]
2 3 + 4 - 2 2 - +
[/output]
[/test]
[test]
[input]
2 + 3 - ( 4 + ( 2 - 2 ) )
[/input]
[output]
2 3 + 4 2 2 - + -
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Poisonous Plants
[code-task title="Poisonous Plants" taskId="java-advanced-stack-and-queue-Poisonous-Plants" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Vi se dau **N** plante dintr-o grădină.

O anumită cantitate de pesticid a fost aplicată fiecărei plante.

În fiecare zi, dacă o plantă are **mai mult pesticid** decât planta din **stânga ei**, aceasta este considerată ca fiind mai vulnerabilă decât cea din stânga și **va muri**.

Vi se dau valorile inițiale de pesticid și poziția fiecărei plante.

Imprimați numărul de zile **după** care nu mai moare nicio plantă. Acesta este numărul de zile după care nu mai există plante cu mai mult pesticid decât planta din stânga lor.

### Intrare

- Datele de intrare constau într-un număr întreg **N**, care reprezintă numărul de plante
- Următoarea **linie unică** constă în **N** numere întregi, unde fiecare număr întreg reprezintă poziția și cantitatea de pesticid aplicată fiecărei plante - `1 ≤ N ≤ 100000`
- Cantitatea de pesticid pentru o plantă se află în intervalul 0-1000000000

### Ieșire

- Datele de ieșire constau într-o valoarea unică, egală cu numărul de zile după care nu mai moare nicio plantă


## Exemplu
| **Intrare** | **Ieșire** | **Comentarii** |
| --- | --- | --- |
| 7 | 2 | Inițial, toate plantele sunt vii.  |
| 6 5 8 4 7 10 9 |  | `Plants = {(6, 1), (5, 2), (8, 3), (4, 4), (7, 5), (10, 6), (9, 7)}`  |
|  |  | `Plants[k] = (i, j)` \=\> planta de pe poziția `j` are cantitatea de pesticid `i`  |
|  |  | După prima zi, 4 plante rămân vii. Plantele de pe pozițiile 3, 5, și 6 mor.  |
|  |  | `Plants = {(6, 1), (5, 2), (4, 4), (9, 7)}`  |
|  |  | După a doua zi supraviețuiesc 3 plante, în timp ce planta de pe poziția 7 moare. `Plants = {(6, 1), (5, 2), (4, 4)}`  |
|  |  | După a treia zi supraviețuiesc toate plantele rămase.  |
|  |  | `Plants = {(6, 1), (5, 2), (4, 4)}`  |
|  |  | După a doua zi, plantele se opresc din murit.  |

[hints]
[hint]
Creați o matrice `plants`, un `ArrayDeque` cu indici și `int[] days`:

```java
Scanner reader = new Scanner(System.in);

int n = Integer.parseInt(reader.nextLine());
String[] plants = reader.nextLine().split(" ");

ArrayDeque <Integer> indexes = 
  new ArrayDeque<>();

indexes.push(0);

int[] days = new int[n];
```
[/hint] 
[hint]
Creați o **buclă-for** de la **1** la **n**:

```java
for (int i = 1; i < n; i++) {
  int maxDays = 0;
  
  /** while(...) {
      maxDays = Math.max(maxDays, days[indexes.pop()]);
      } **/

  if (indexes.size() > 0) {
    days[i] = maxDays + 1;
  }

  indexes.push(i);
}
```
[/hint] 
[hint]
Implementați o metodă `getMaxDays`:

```java
private static int getMaxDays(int[] days) {
  int max = Integer.MIN_VALUE;

  for (int day: days) {
    if (day > max) {
      max = day;
    }
  }
  return max;
}
```
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
7
6 5 8 4 7 10 9
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
8
6 5 8 4 7 10 9 4
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
7 2 3 9 2
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
12
1 8 2 5 2 6 2 4 90 25 2 666
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
12
12398 382 752 9320 4282 9122 932 7742 91283 7427 128823 887
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
13
2139 8236 8129 92002 88429 1 2 3 32 5 123 5124 712
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
17
2832 42 1 2 45 63 1 2 3 35 12 563441 2 23 6422 421 91
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
20
128 462 582 472 291 284 762 293 865 675 679 200 672 534 123 123 321 431 321 98
[/input]
[output]
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

