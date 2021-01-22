# Homework

[slide hideTitle]
# Problem: Biggest Number
[code-task title="Biggest Number" taskId="pb-java-for-loop-biggest-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește **n** - număr care reprezintă cantitatea de numere de intrare
* Citește **n numere întregi**
* Găsește și imprimă **cel mai mare număr**

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3 | 90 |
| 40 | |
| 90 | |
| 50 | |
[/task-description]
[tests]
[test open]
[input]
3
40
90
50
[/input]
[output]
90
[/output]
[/test]
[test]
[input]
3
30
80
40
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
3
-30
-80
-40
[/input]
[output]
-30
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Max and Min Numbers
[code-task title="Max and Min Numbers" taskId="pb-java-for-loop-max-and-min" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește **n** reprezentând numărul de numere de citit în continuare
* Găsește numerele **max** și **min**
* Le imprimă pe consolă în următorul format:
   - Max number: \{max number\}
   - Min number: \{min number\}

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 | Max number: 304 |
| 10 | Min number: 0 |
| 304 | |
| 0 | |
| 0 | |
| 50 | |
[/task-description]
[tests]
[test open]
[input]
5
10
304
0
0
50
[/input]
[output]
Max number: 304
Min number: 0
[/output]
[/test]
[test]
[input]
4
100
200
0
300
[/input]
[output]
Max number: 300
Min number: 0
[/output]
[/test]
[test]
[input]
1
100
[/input]
[output]
Max number: 100
Min number: 100
[/output]
[/test]
[test]
[input]
3
-1
-2
0
[/input]
[output]
Max number: 0
Min number: -2
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Power of Number
[code-task title="Power of Number" taskId="pb-java-for-loop-power-of-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește **p - puterea** și **n - numărul**
* Tipărește rezultatul lui n alimentat de p
* Nu utilizați `Math.pow ()`

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 | 32 |
| 2 | |
[/task-description]
[tests]
[test open]
[input]
5
2
[/input]
[output]
32
[/output]
[/test]
[test]
[input]
6
2
[/input]
[output]
64
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Equal Pairs
[code-task title="Equal Pairs" taskId="pb-java-for-loop-equal-pairs" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește numărul **n** și **n perechi** de numere
* Tipărește "Yes, value=\{sum\}", dacă **suma tuturor** perechilor este **aceeași**
* **În caz contrar**, imprimă "No, maxdiff=\{diff\}"
* diff este **diferența maximă** în suma dintre două perechi

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | Yes, value=-1 |
| -1 | |
| 0 | |
| 0 | |
| -1 | |
[/task-description]
[tests]
[test open]
[input]
2
-1
0
0
-1
[/input]
[output]
Yes, value=-1
[/output]
[/test]
[test open]
[input]
2
1
2
2
2
[/input]
[output]
No, maxdiff=1
[/output]
[/test]
[test]
[input]
3
1
2
0
3
4
-1
[/input]
[output]
Yes, value=3
[/output]
[/test]
[test]
[input]
4
1
1
3
1
2
2
0
0
[/input]
[output]
No, maxdiff=4
[/output]
[/test]
[test]
[input]
1
5
5
[/input]
[output]
Yes, value=10
[/output]
[/test]
[test]
[input]
2
-1
0
0
-1
[/input]
[output]
Yes, value=-1
[/output]
[/test]
[test]
[input]
2
-1
2
0
-1
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
8
5
5
70
-60
3
7
2
8
20
-10
15
-5
0
10
10
0
[/input]
[output]
Yes, value=10
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Zig Zag Sum
[code-task title="Zig Zag Sum" taskId="pb-java-for-loop-zig-zag-sum" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește **n** - număr care reprezintă cantitatea de numere de intrare
* Citește **n numere întregi**
    * Pentru fiecare linie **pară**  **se adaugă** numărul la rezultat
    * Pentru fiecare linie  **impară**  **se scade** numărul din rezultat
    * Numărarea începe de la 1.
* **Tipărește** rezultatul

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | 10 |
| 10 | |
| 20 | |
[/task-description]
[tests]
[test open]
[input]
2
10
20
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
4
20
20
20
20
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2
10
20
[/input]
[output]
10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Divide Without Remainder
[code-task title="Divide Without Remainder" taskId="pb-java-for-loop-Divide-without-reminder" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește **n** și **n numere**
* Găsește în **procente** câte dintre acetea pot fi **împărțite fără rest** la **2**, **3** și **4**
* Imprimă procentele p1, p2 and p3, **formatate** până la a două zecimală

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3 | 33.33% |
| 3 | 100.00% |
| 6 | 0.00% |
| 9 | |
[/task-description]
[tests]
[test open]
[input]
3
3
6
9
[/input]
[output]
33.33%
100.00%
0.00%
[/output]
[/test]
[test]
[input]
3
12
27
6
[/input]
[output]
66.67%
100.00%
33.33%
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Vowel Sum
[code-task title="Vowel Sum" taskId="pb-java-for-loop-vowel-sum" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește **n**- numărul de caractere:
* Dacă caracterul este o **vocală** își adaugă valoarea rezultatului

|caracter|a|e|i|o|u|
|---------|-|-|-|-|-|
|valoare|1|2|3|4|5|

* Tipărește rezultatul

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | 1 |
| a | |
| g | |
[/task-description]
[tests]
[test open]
[input]
2
a
g
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
2
i
u
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
5
a
u
n
m
s
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1
a
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
8
a
e
i
o
u
a
a
s
[/input]
[output]
17
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Rollercoaster
[code-task title="Rollercoaster" taskId="pb-java-for-loop-rollearcoaster" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește **locuri** rollercoaster, **vârsta minimă**, **numărul de persoane** la coadă și **vârsta** pentru fiecare persoană
* Dacă toate locurile sunt luate, tipăriți - **"Plecările cu valul montan"**
* Într-un alt caz, tipărește **"În așteptare ..."**

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | The rollercoaster departures |
| 10 | |
| 2 | |
| 15 | |
| 24 | |

[/task-description]
[tests]
[test open]
[input]
2
10
2
15
24
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test open]
[input]
2
25
5
10
15
18
5
30
[/input]
[output]
Waiting...
[/output]
[/test]
[test]
[input]
4
18
10
15
57
14
35
68
45
23
14
24
26
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test]
[input]
3
21
5
25
45
34
12
24
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Multiply

[code-task title="Multiply" taskId="pb-java-for-loop-multiply" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:

* Citește **n**
* Tipărește **multiplii n** în formatul "\{n\} x \{i\} = \{result\}"
* Unde sunt i sunt numerele de la **1 până la 10**(**inclusiv**)

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | 2 x 1 = 2 |
| | 2 x 2 = 4 |
| | 2 x 3 = 6 |
| | 2 x 4 = 8 |
| | 2 x 5 = 10 |
| | 2 x 6 = 12 |
| | 2 x 7 = 14 |
| | 2 x 8 = 16 |
| | 2 x 9 = 18 |
| | 2 x 10 = 20 |
[/task-description]
[tests]
[test open]
[input]
2
[/input]
[output]
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Back to the Past
[code-task title="Back to the Past" taskId="pb-java-for-loop-back-to-the-past" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description
Josh are 18 ani și primește o moștenire care constă din suma de bani X și mașina timpului.

A decis să se întoarcă până în 1800, dar nu știa dacă banii ar fi suficienți pentru a trăi fără să muncească.

Scrieți un program care să calculeze dacă Josh va avea suficienți bani pentru a nu fi nevoit să lucreze până la un anumit an.
- Presupunând că pentru fiecare an (1800, 1802 etc.) se vor cheltui 12 000 de dolari.
- Pentru fiecare an impar (1801, 1803 etc.) se vor cheltui 12 000 + 50 \* \[vârsta de abni într-un anumit an\].

## Intrare
Intrarea este citită de pe consolă și conține exact 2 linii:
- Banii vechi - număr real în intervalul \[1,00 ... 1,000,000,00\]
- An de trăit (inclusiv) - un număr întreg în intervalul \[1801 ... 1900\]


## Ieșire
Imprimați pe consolă o singură linie. Suma trebuie formatată cu două cifre zecimale:
- Dacă banii sunt suficienți:
     - "Yes! He will live a carefree life and will have \{N\} dollars left." - unde N sunt banii care vor rămâne
- Dacă banii NU sunt suficienți:
     - "He will need \{М\} dollars to survive." - unde M sunt bani de care are nevoie

## Exemplu
| Intrare | Ieșire |
| --- | --- |
| 50000 | Yes! He will live a carefree life and will have 13050.00 dollars left. |
| 1802 | |

### Comentarii
- 1800 -> an par;
     - Josh cheltuie 12000 de dolari
     - 50000 - 12000 = rămân 38000 de dolari
- 1801 -> an impar
     - cheltuie 12000 + 19 \* 50 = 12000 + 950 = 12950 dolari
     - 38000 - 12950 = rămân 25050 de dolari
- 1802 -> an par
     - el cheltuie 12000 de dolari
     - 25050 - 12000 = 13050 dolari rămân

[/task-description]
[tests]
[test open]
[input]
50000
1802
[/input]
[output]
Yes! He will live a carefree life and will have 13050.00 dollars left.
[/output]
[/test]
[test]
[input]
100000.15
1808
[/input]
[output]
He will need 12399.85 dollars to survive.
[/output]
[/test]
[test]
[input]
1000000
1860
[/input]
[output]
Yes! He will live a carefree life and will have 196000.00 dollars left.
[/output]
[/test]
[test]
[input]
1000000.42
1874
[/input]
[output]
He will need 1749.58 dollars to survive.
[/output]
[/test]
[test]
[input]
1.6
1800
[/input]
[output]
He will need 11998.40 dollars to survive.
[/output]
[/test]
[test]
[input]
12000
1800
[/input]
[output]
Yes! He will live a carefree life and will have 0.00 dollars left.
[/output]
[/test]
[test]
[input]
234657.89
1816
[/input]
[output]
Yes! He will live a carefree life and will have 20257.89 dollars left.
[/output]
[/test]
[test]
[input]
50000.99
1803
[/input]
[output]
Yes! He will live a carefree life and will have 0.99 dollars left.
[/output]
[/test]
[test]
[input]
60043.5
1900
[/input]
[output]
He will need 1321956.50 dollars to survive.
[/output]
[/test]
[test]
[input]
234789.5
1970
[/input]
[output]
He will need 2254960.50 dollars to survive.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Bills
[code-task title="Bills" taskId="pb-java-for-loop-bills" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un program pentru a calcula costul mediu pe lună pentru o familie pe o perioadă de timp. Pentru fiecare lună, costurile sunt următoarele:

- Pentru electricitate - în fiecare lună factura este diferită și va fi citită de pe consolă
- Pentru apă - 20 $
- Pentru internet - 15 $
- Pentru altele - suma facturilor pentru electricitate, apă și Internet și adăugați 20%

Pentru fiecare factură, trebuie să calculați suma totală plătită pentru toate lunile.

# Intrare

Intrarea este citită de pe consolă:

- Lunile pentru care se caută costul mediu - număr întreg în intervalul \[1 ... 100 \]
- Pentru fiecare lună - factura pentru electricitate - un număr real în intervalul \[1.00... 1000.00\]

# Ieșire
Imprimați pe consolă 5 rânduri:
- "Electricity: \{electricity for all months\} $" 
- "Water: \{water for all months\} $" 
- "Internet: \{Internet for all months\} $" 
- "Other: \{Other for all months\} $" 
- "Average: \{Average all costs per month\} $ "

Toate facturile ar trebui să fie formatate la a doua cifră după punctul zecimal.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 | Electricity: 447.16 $ |
| 68.63 | Water: 100.00 $ |
| 89.25 | Internet: 75.00 $ |
| 132.53 | Other: 746.59 $ |
| 93.53 | Average: 273.75 $ |
| 63.22 | |

### Comentarii
Pentru 5 luni:
- Electricitate -> 68.63 \+ 89.25 \+ 132.53 \+ 93.53 \+ 63.22 = 447.16$
- Apă -> 5 luni \* 20$ = 100$
- Internet -> 5 luni \* 15$ = 75$
- Alții:
    - 68.63+20+15) + 20% = 124.356  
    - (89.25+20+15) + 20% = 149.1
    - (132.53+20+15) + 20% = 201.036
    - (93.53+20+15) + 20% = 154.236
    - (63.22+20+15) + 20% = 117.864
- Totalul = 746.592$
- Facturi medii pe lună = (447.16+100+75+746.592)/5 = 273.7504$

[/task-description]
[tests]
[test open]
[input]
5
68.63
89.25
132.53
93.53
63.22
[/input]
[output]
Electricity: 447.16 $
Water: 100.00 $
Internet: 75.00 $
Other: 746.59 $
Average: 273.75 $
[/output]
[/test]
[test]
[input]
8
123.54
231.54
140.23
100
122.4
430
178.52
64.2
[/input]
[output]
Electricity: 1390.43 $
Water: 160.00 $
Internet: 120.00 $
Other: 2004.52 $
Average: 459.37 $
[/output]
[/test]
[test]
[input]
10
123
321
123
321
123
321
123
321
123
321
[/input]
[output]
Electricity: 2220.00 $
Water: 200.00 $
Internet: 150.00 $
Other: 3084.00 $
Average: 565.40 $
[/output]
[/test]
[test]
[input]
50
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
[/input]
[output]
Electricity: 1275.00 $
Water: 1000.00 $
Internet: 750.00 $
Other: 3630.00 $
Average: 133.10 $
[/output]
[/test]
[test]
[input]
23
123.34
432.23
213.12
231.3
266.1
677
1000
23
54
765
23
54
23
54
87
236
353
847
357
346
335
643
523
[/input]
[output]
Electricity: 7666.09 $
Water: 460.00 $
Internet: 345.00 $
Other: 10165.31 $
Average: 810.28 $
[/output]
[/test]
[test]
[input]
1
123.34
[/input]
[output]
Electricity: 123.34 $
Water: 20.00 $
Internet: 15.00 $
Other: 190.01 $
Average: 348.35 $
[/output]
[/test]
[test]
[input]
10
1
2
3
4
5
6
7
8
9
10
[/input]
[output]
Electricity: 55.00 $
Water: 200.00 $
Internet: 150.00 $
Other: 486.00 $
Average: 89.10 $
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Hospital
[code-task title="Hospital" taskId="pb-java-for-loop-Hospital" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Pentru o perioadă de timp, pacienții ajung în fiecare zi la spital pentru examinare.

ASpitalul are inițial 7 medici.

Fiecare medic poate examina doar un pacient pe zi, dar uneori există un deficit de medici, astfel încât alți pacienți sunt trimiși la alte spitale.

La fiecare trei zile, spitalul face calcule și dacă numărul pacienților neevaluați este mai mare decât numărul de revizuit, este numit încă un medic.

Deoarece numirea medicului are loc înainte de administrarea pacienților pentru o zi.

Scrieți un program care să calculeze numărul de pacienți examinați și neexaminați pentru perioada dată.

## Intrare
Intrarea este citită de pe consolă și conține:

- Perioada pentru care trebuie să efectuați calcule - număr întreg în intervalul \[1... 1000\] 
-În rândurile următoare (egal cu numărul de zile) - numărul de pacienți care sosesc pentru examinare pentru ziua curentă - un număr întreg în intervalul \[0... 10 000\]

Imprimați pe consolă 2 linii:
- Prima linie: "Treated patients: \{Number of patients reviewed\}." 
- A doua linie: "Untreated patients: \{Number of unreviewed patients\}."

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 4 | Treated patients: 23. |
| 7 | Untreated patients: 21. |
| 27 | |
| 9 | |
| 1 | |

### Comentarii
- Ziua 1: 7 pacienți tratați și 0 pacienți netratați pentru ziua respectivă
- Ziua 2: 7 pacienți tratați și 20 de pacienți netratați pentru ziua respectivă
- Ziua 3: Până în prezent, pacienții tratați erau 14 și cei netratați - 20 -> Se numește un nou medic -> 8 pacienți tratați și 1 pacient netratat pentru ziua respectivă
- Ziua 4: 1 pacient tratat și 0 pacienți netratați pentru ziua respectivă
- Total: 23 pacienți tratați și 21 pacienți netratați

[/task-description]
[tests]
[test open]
[input]
4
7
27
9
1
[/input]
[output]
Treated patients: 23.
Untreated patients: 21.
[/output]
[/test]
[test]
[input]
6
25
25
25
25
25
2
[/input]
[output]
Treated patients: 40.
Untreated patients: 87.
[/output]
[/test]
[test]
[input]
3
7
7
7
[/input]
[output]
Treated patients: 21.
Untreated patients: 0.
[/output]
[/test]
[test]
[input]
9
25
25
25
25
25
25
25
25
25
[/input]
[output]
Treated patients: 75.
Untreated patients: 150.
[/output]
[/test]
[test]
[input]
3
7
7
8
[/input]
[output]
Treated patients: 21.
Untreated patients: 1.
[/output]
[/test]
[test]
[input]
1
200
[/input]
[output]
Treated patients: 7.
Untreated patients: 193.
[/output]
[/test]
[test]
[input]
2
9
9
[/input]
[output]
Treated patients: 14.
Untreated patients: 4.
[/output]
[/test]
[test]
[input]
10
0
0
0
0
0
0
0
0
0
0
[/input]
[output]
Treated patients: 0.
Untreated patients: 0.
[/output]
[/test]
[test]
[input]
3
10000
10000
10000
[/input]
[output]
Treated patients: 22.
Untreated patients: 29978.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Numbers Ending in 7
[code-task title="Numbers Ending in 7" taskId="pb-java-for-loop-Numbers-ending-in-7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere

Scrieți un program care tipărește numerele din intervalul \[1...1000\], care se termină cu 7.

Imprimați numerele pe o singură linie, separate printr-un singur spațiu.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- | --- |
| (no input) | | 7 17 27 ... 997 |
[/task-description]
[tests]
[test open]
[input]
[/input]
[output]
7 17 27 37 47 57 67 77 87 97 107 117 127 137 147 157 167 177 187 197 207 217 227 237 247 257 267 277 287 297 307 317 327 337 347 357 367 377 387 397 407 417 427 437 447 457 467 477 487 497 507 517 527 537 547 557 567 577 587 597 607 617 627 637 647 657 667 677 687 697 707 717 727 737 747 757 767 777 787 797 807 817 827 837 847 857 867 877 887 897 907 917 927 937 947 957 967 977 987 997
[/output]
[/test]
[test]
[input]
[/input]
[output]
7 17 27 37 47 57 67 77 87 97 107 117 127 137 147 157 167 177 187 197 207 217 227 237 247 257 267 277 287 297 307 317 327 337 347 357 367 377 387 397 407 417 427 437 447 457 467 477 487 497 507 517 527 537 547 557 567 577 587 597 607 617 627 637 647 657 667 677 687 697 707 717 727 737 747 757 767 777 787 797 807 817 827 837 847 857 867 877 887 897 907 917 927 937 947 957 967 977 987 997
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]




[slide hideTitle]
# Problem: Odd / Even Position
[code-task title="Odd / Even Position" taskId="pb-java-for-loop-odd-even-position" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care citește n - numărul din numerele introduse de utilizator și calculează suma numărului minim și maxim de poziții impar si par (numărând de la 1). 

Dacă nu există element minim / maxim tipăriți "No".

## Intrare
- Pe prima linie de intrare citiți numărul din numerele - N - întreg \[0 ... 100\]
- La fiecare rând următor, citiți un număr - număr cu floating-point \[-100...100\]

## Ieșire
Rezultatul trebuie formatat în următoarea formă:

- "OddSum=" + \{sum of the numbers on odd positions\},
- "OddMin=" + \{minimum value of the numbers of odd positions\} / \{"No"\},
- "OddMax=" + \{maximum value of the numbers of odd positions\} / \{"No"\},
- "EvenSum=" + \{sum of the numbers of even positions\},
- "EvenMin=" + \{minimum value of the numbers of even positions\} / \{"No"\},
- "EvenMax=" + \{maximum value of the numbers of even positions\} / \{"No"\}
- Fiecare număr trebuie formatat la a doua zecimală.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 | OddSum=8.00, |
| 3 | OddMin=-3.00, |
| -2 | OddMax=8.00, |
| 8 | EvenSum=9.00, |
| 11 | EvenMin=-2.00, |
| -3 | EvenMax=11.00 |

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 0 | OddSum=0.00, |
| | OddMin=No, |
| | OddMax=No, |
| | EvenSum=0.00, |
| | EvenMin=No, |
| | EvenMax=No |
[/task-description]
[tests]
[test open]
[input]
5
3
-2
8
11
-3
[/input]
[output]
OddSum=8.00,
OddMin=-3.00,
OddMax=8.00,
EvenSum=9.00,
EvenMin=-2.00,
EvenMax=11.00
[/output]
[/test]
[test]
[input]
6
2
3
5
4
2
1
[/input]
[output]
OddSum=9.00,
OddMin=2.00,
OddMax=5.00,
EvenSum=8.00,
EvenMin=1.00,
EvenMax=4.00
[/output]
[/test]
[test]
[input]
2
1.5
-2.5
[/input]
[output]
OddSum=1.50,
OddMin=1.50,
OddMax=1.50,
EvenSum=-2.50,
EvenMin=-2.50,
EvenMax=-2.50
[/output]
[/test]
[test]
[input]
1
1
[/input]
[output]
OddSum=1.00,
OddMin=1.00,
OddMax=1.00,
EvenSum=0.00,
EvenMin=No,
EvenMax=No
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
OddSum=0.00,
OddMin=No,
OddMax=No,
EvenSum=0.00,
EvenMin=No,
EvenMax=No
[/output]
[/test]
[test]
[input]
5
3
-2
8
11
-3
[/input]
[output]
OddSum=8.00,
OddMin=-3.00,
OddMax=8.00,
EvenSum=9.00,
EvenMin=-2.00,
EvenMax=11.00
[/output]
[/test]
[test]
[input]
4
1.5
1.75
1.5
1.75
[/input]
[output]
OddSum=3.00,
OddMin=1.50,
OddMax=1.50,
EvenSum=3.50,
EvenMin=1.75,
EvenMax=1.75
[/output]
[/test]
[test]
[input]
1
-5
[/input]
[output]
OddSum=-5.00,
OddMin=-5.00,
OddMax=-5.00,
EvenSum=0.00,
EvenMin=No,
EvenMax=No
[/output]
[/test]
[test]
[input]
3
-1
-2
-3
[/input]
[output]
OddSum=-4.00,
OddMin=-3.00,
OddMax=-1.00,
EvenSum=-2.00,
EvenMin=-2.00,
EvenMax=-2.00
[/output]
[/test]
[test]
[input]
5
1.5
-4.5
7
-8.5
9
[/input]
[output]
OddSum=17.50,
OddMin=1.50,
OddMax=9.00,
EvenSum=-13.00,
EvenMin=-8.50,
EvenMax=-4.50
[/output]
[/test]
[test]
[input]
10
-4.5
3433.5
-180.33
323.2
-55.55
28.28
-30.30
44.44
-77.77
88.88
[/input]
[output]
OddSum=-348.45,
OddMin=-180.33,
OddMax=-4.50,
EvenSum=3918.30,
EvenMin=28.28,
EvenMax=3433.50
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Grades
[code-task title="Grades" taskId="pb-java-for-loop-grades" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a calcula statisticile notelor examenului.

La început, programul primește numărul de elevi care au participat la examen și nota obținută de fiecare elev.

În cele din urmă, programul ar trebui să imprime procentul de elevi cu nota cuprinsă între 2,00 și 2,99, între 3,00 și 3,99, 4,00 și 4,99 și între 5,00 sau mai mult.

De asemenea, nota medie a examenului.

## Intrare
Citiți de pe consolă o serie de numere, fiecare pe o linie separată:
- Prima linie - numărul de elevi care au participat la examen - un număr întreg în intervalul \[1 ... 1000\]
- Pentru fiecare elev pe o linie separată - nota examenului - număr real în intervalul \[2.00 ... 6.00\]

## Ieșire
Imprimați pe consolă 5 linii care conțin următoarele informații:
- "Top students: \{percent student with grade 5.00 or more\}%"
- "Between 4.00 and 4.99: \{between 4.00 and 4.99 inclusive\}%"
- "Between 3.00 and 3.99: \{between 3.00 and 3.99 inclusive\}%"
- "Fail: \{less than 3.00\}%"
- "Average: \{average grade\}"

Toate numerele trebuie formatate la a doua zecimală.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- | 
| 10 | Top students: 30.00% |
| 3.00 | Between 4.00 and 4.99: 30.00% |
| 2.99| Between 3.00 and 3.99: 20.00% |
| 5.68| Fail: 20.00% |
| 3.01| Average: 4.06 |
| 4| | 
| 4| | | 
| 6.00| |
| 4.50| |
| 2.44| |
| 5| | 

### Comments
- Students with grade 5 and more – three = 30% of 10
- Between 4 and 4.99 – three = 30% of 10
- Between 3 and 3.99 – two = 20% of 10
- Less than 3 – two = 20% of 10
- Average grade: 3 + 2.99 + 5.68 + 3.01 + 4 + 4 + 6 + 4.50 + 2.44 + 5 = 40.62 / 10 = 4.062
[/task-description]
[tests]
[test open]
[input]
10
3
2.99
5.68
3.01
4
4
6
4.5
2.44
5
[/input]
[output]
Top students: 30.00%
Between 4.00 and 4.99: 30.00%
Between 3.00 and 3.99: 20.00%
Fail: 20.00%
Average: 4.06
[/output]
[/test]
[test]
[input]
6
2
3
4
5
6
2.2
[/input]
[output]
Top students: 33.33%
Between 4.00 and 4.99: 16.67%
Between 3.00 and 3.99: 16.67%
Fail: 33.33%
Average: 3.70
[/output]
[/test]
[test]
[input]
100
6
6
5
5
4
4
3
3
2
2
2.1
2.2
2.3
2.4
2.5
2.6
2.7
2.8
2.9
3
3.1
3.2
3.3
3.4
3.5
3.6
3.7
3.8
3.9
4
4.1
4.2
4.3
4.4
4.5
4.6
4.7
4.8
4.9
5
5.1
5.2
5.3
5.4
5.5
5.6
5.7
5.8
5.9
2.02
2.12
2.22
2.32
2.42
2.52
2.62
2.72
2.82
2.92
2.02
3.09
3.19
3.29
3.39
3.49
3.59
3.69
3.79
3.89
3.99
4.09
4.19
4.29
4.39
4.49
4.59
4.69
4.79
4.89
4.99
5.09
5.19
5.29
5.39
5.49
5.59
5.69
5.79
5.89
5.99
3
4.1
5.2
6.0
5.4
4.5
3.6
2.7
2.8
5.9
[/input]
[output]
Top students: 28.00%
Between 4.00 and 4.99: 24.00%
Between 3.00 and 3.99: 24.00%
Fail: 24.00%
Average: 4.02
[/output]
[/test]
[test]
[input]
263
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
5.9
6
6
5.7
5.8
5.5
5.4
6
5.88
5.88
5.88
5.88
5.88
5.3
5.3
5.3
5.75
5.85
5.63
5.63
5.63
5.63
5.63
5.63
5.06
5.96
5.5
5.5
5.5
5.5
5.5
5.5
5.5
5
5
5
4.7
5.41
5
4.6
5.31
4.51
4.88
4.5
4.63
4.3
4.95
4.5
4.75
4.75
4.27
4.25
4.25
4.25
4.25
4.25
4.25
4.25
4.25
4.25
4
4
4
4
4
4
4
4
4
4.13
4.13
3.88
4.15
3.36
3.33
3.13
3.13
3.75
3.75
3.75
3.03
3.02
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
[/input]
[output]
Top students: 50.57%
Between 4.00 and 4.99: 12.55%
Between 3.00 and 3.99: 29.28%
Fail: 7.60%
Average: 4.56
[/output]
[/test]
[test]
[input]
20
3
6
6
6
5.7
5.4
5.63
3
2
2
3
5.3
4
4.7
3
2
2
6
3
6
[/input]
[output]
Top students: 45.00%
Between 4.00 and 4.99: 10.00%
Between 3.00 and 3.99: 25.00%
Fail: 20.00%
Average: 4.19
[/output]
[/test]
[test]
[input]
15
3
3
2
2
3
2
5.7
6
6
5.4
5.3
4
3
2
6
[/input]
[output]
Top students: 40.00%
Between 4.00 and 4.99: 6.67%
Between 3.00 and 3.99: 26.67%
Fail: 26.67%
Average: 3.89
[/output]
[/test]
[test]
[input]
10
6
6
6
6
6
6
6
6
6
6
[/input]
[output]
Top students: 100.00%
Between 4.00 and 4.99: 0.00%
Between 3.00 and 3.99: 0.00%
Fail: 0.00%
Average: 6.00
[/output]
[/test]
[test]
[input]
10
6
3
6
6
6
6
6
6
6
5.3
[/input]
[output]
Top students: 90.00%
Between 4.00 and 4.99: 0.00%
Between 3.00 and 3.99: 10.00%
Fail: 0.00%
Average: 5.63
[/output]
[/test]
[test]
[input]
38
3
6
5.3
2
6
3
6
6
6
3
3.9
4.75
6
5.05
6
3
5.3
3.75
6
4.5
3
3
6
5
3
6
5.75
6
5.5
3
4
6
6
5
3
4
2
6
[/input]
[output]
Top students: 55.26%
Between 4.00 and 4.99: 10.53%
Between 3.00 and 3.99: 28.95%
Fail: 5.26%
Average: 4.65
[/output]
[/test]
[test]
[input]
22
2
2.90
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
[/input]
[output]
Top students: 0.00%
Between 4.00 and 4.99: 0.00%
Between 3.00 and 3.99: 0.00%
Fail: 100.00%
Average: 2.04
[/output]
[/test]
[test]
[input]
188
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
5.84
5.73
5.7
5.62
5.6
5.51
5.51
5.29
5.29
5.29
5.29
5.17
5.15
5.07
5.07
4.98
4.95
4.95
4.91
4.87
4.85
4.76
4.7
4.68
4.66
4.58
4.58
4.56
4.56
4.56
4.55
4.51
4.48
4.44
4.44
4.43
4.39
4.31
4.27
4.24
4.24
4.24
4.22
4.18
4.13
4.09
4.04
4.04
4.04
3.98
3.98
3.98
3.98
3.98
3.94
3.9
3.87
3.83
3.76
3.74
3.71
3.71
3.67
3.59
3.56
3.55
3.52
3.49
3.45
3.44
3.44
3.44
3.44
3.4
3.37
3.34
3.22
3.11
3.07
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
[/input]
[output]
Top students: 25.00%
Between 4.00 and 4.99: 18.09%
Between 3.00 and 3.99: 28.19%
Fail: 28.72%
Average: 3.78
[/output]
[/test]
[test]
[input]
267
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
5.97
5.97
5.95
5.89
5.73
5.73
5.73
5.62
5.56
5.54
5.45
5.35
5.35
5.23
5.22
5.19
5.18
5.18
5.16
5.15
5.12
5.09
5.08
5.07
5.07
5.07
5.07
5.07
5.07
5.03
5
4.99
4.95
4.9
4.87
4.81
4.81
4.77
4.77
4.77
4.75
4.74
4.73
4.73
4.7
4.67
4.66
4.64
4.64
4.64
4.64
4.64
4.64
4.64
4.64
4.64
4.59
4.59
4.55
4.54
4.54
4.54
4.53
4.53
4.53
4.53
4.53
4.53
4.53
4.52
4.51
4.5
4.49
4.45
4.43
4.42
4.42
4.37
4.36
4.32
4.31
4.29
4.29
4.26
4.24
4.24
4.21
4.2
4.19
4.17
4.15
4.14
4.14
4.09
4.09
4.09
4.09
4.08
4.08
4.06
4.04
4.03
4.03
4.01
3.98
3.98
3.98
3.95
3.93
3.91
3.91
3.89
3.87
3.87
3.87
3.87
3.86
3.85
3.76
3.75
3.74
3.7
3.68
3.67
3.65
3.65
3.65
3.65
3.62
3.6
3.55
3.55
3.55
3.55
3.55
3.55
3.55
3.55
3.55
3.55
3.55
3.52
3.47
3.46
3.46
3.45
3.44
3.44
3.44
3.44
3.44
3.44
3.44
3.39
3.37
3.35
3.34
3.33
3.33
3.32
3.31
3.29
3.22
3.22
3.21
3.2
3.14
3.07
3.04
3.03
3.03
3.02
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
[/input]
[output]
Top students: 24.72%
Between 4.00 and 4.99: 27.34%
Between 3.00 and 3.99: 32.96%
Fail: 14.98%
Average: 4.05
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]
