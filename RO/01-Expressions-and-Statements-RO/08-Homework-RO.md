# Teme pentru acasă

[slide hideTitle]
# Problem[: Calculate Speed
[code-task title="Calculate Speed" taskId="pb-java-statements-calculate-speed" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    // Scrieți codul aici
  }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a calcula viteza în funcție de timp și distanță:
  * Citește 2 numere în virgulă mobilă: distanță și timp.
  * Calculează viteza necesară pentru a parcurge o distanță dată pentru un anumit timp.
  * Imprima rezultatul calculat.
  * Folosește formula: **viteză = distanță/timp**.
  
## Exemplu
| **Input** | **Output** |
| --- | --- |
| 15 | 7.5 |
| 2|  |

[/task-description]
[tests]
[test open]
[Input]
15
2
[/Input]
[output]
7.5
[/output]
[/test]
[test]
[Input]
10.0
2.0
[/Input]
[output]
5.0
[/output]
[/test]
[test]
[Input]
2.0
10.0
[/Input]
[output]
0.2
[/output]
[/test]
[test]
[Input]
4.0
5.0
[/Input]
[output]
0.8
[/output]
[/test]
[test]
[Input]
4.5
10.0
[/Input]
[output]
0.45
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Currency Converter
[code-task title="Currency Converter" taskId="pb-java-statements-currency-converter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru convertirea din USD la EUR:
  * Citește **numărul în virgulă mobilă**: dolarii care urmează să fie convertite.
  * Convertează **dolari în euro** (utilizați **rata fixă** de dolari în euro: 0.88).
  * Imprima valoarea convertită în euro.

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 17 | 14.96 |


| **Input** | **Output** |
| --- | --- |
| 87 | 76.56 |
[/task-description]
[tests]
[test open]
[Input]
17
[/Input]
[output]
14.96
[/output]
[/test]
[test open]
[Input]
87
[/Input]
[output]
76.56
[/output]
[/test]
[test]
[Input]
10.0
[/Input]
[output]
8.8
[/output]
[/test]
[test]
[Input]
5.0
[/Input]
[output]
4.4
[/output]
[/test]
[test]
[Input]
25.5
[/Input]
[output]
22.44
[/output]
[/test]
[test]
[Input]
12.0
[/Input]
[output]
10.56
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Area of Triangle
[code-task title="Area of Triangle" taskId="pb-java-statements-Area-of-Triangle" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a calcula aria triunghiului:

   * Citește din intrare `latura` și `înălțimea` - **numere în virgulă mobilă**.
   * Calculeaza aria triunghiului.
   * Imprima aria, formatată la a doua cifră după punctul zecimal.
  
## Exemplu
| **Input** | **Output** |
| --- | --- |
| 5 | 25.00 |
| 10 |  |

[hints]
[hint]
Formula pentru calcularea ariei unui triunghi este- Area = 1/2 * a * h
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[Input]
5
10
[/Input]
[output]
25.00
[/output]
[/test]
[test]
[Input]
12.0
2.0
[/Input]
[output]
12.00
[/output]
[/test]
[test]
[Input]
5.0
4.0
[/Input]
[output]
10.00
[/output]
[/test]
[test]
[Input]
10.5
2.5
[/Input]
[output]
13.13
[/output]
[/test]
[test]
[Input]
1.6
2.8
[/Input]
[output]
2.24
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Four Operations
[code-task title="Four Operations" taskId="pb-java-statements-Four-Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:
  * Citește 2 **numere reale** de pe consolă.
  * Efectuează 4 **operații aritmetice** pe cele 2 numere obținute, în următoarea ordine:``+``, ``-``, ``*``, ``/``.
  * * Formatează și imprimă rezultatele ca în acest exemplu:

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 5 | 5.00 + 10.00 = 15.00 |
| 10 | 5.00 - 10.00 = -5.00 |
|  | 5.00 * 10.00 = 50.00 |
|  | 5.00 / 10.00 = 0.50 |

[/task-description]
[tests]
[test open]
[Input]
10.0
5.0
[/Input]
[output]
10.00 + 5.00 = 15.00
10.00 - 5.00 = 5.00
10.00 * 5.00 = 50.00
10.00 / 5.00 = 2.00
[/output]
[/test]
[test]
[Input]
2.5
6.5
[/Input]
[output]
2.50 + 6.50 = 9.00
2.50 - 6.50 = -4.00
2.50 * 6.50 = 16.25
2.50 / 6.50 = 0.38
[/output]
[/test]
[test]
[Input]
10.5
2.5
[/Input]
[output]
10.50 + 2.50 = 13.00
10.50 - 2.50 = 8.00
10.50 * 2.50 = 26.25
10.50 / 2.50 = 4.20
[/output]
[/test]
[test]
[Input]
1.6
2.8
[/Input]
[output]
1.60 + 2.80 = 4.40
1.60 - 2.80 = -1.20
1.60 * 2.80 = 4.48
1.60 / 2.80 = 0.57
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Days to Minutes
[code-task title="Days to Minutes" taskId="pb-java-statements-Days-to-Minutes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a converti **zile** în **minute**:
  * Citește un **singur număr întreg** (zilele vor fi transformate).
  * Transforma zilele în minute (utilizați calcule).
  * **Imprima** minutele.

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 2 | 2880 |

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 5 | 7200 |

[hints]
[hint]
O zi are 24 de ore, o oră are 60 de minute, deci o zi are 1440 de minute.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[Input]
2
[/Input]
[output]
2880
[/output]
[/test]
[test open]
[Input]
5
[/Input]
[output]
7200
[/output]
[/test]
[test]
[Input]
6
[/Input]
[output]
8640
[/output]
[/test]
[test]
[Input]
10
[/Input]
[output]
14400
[/output]
[/test]
[test]
[Input]
32
[/Input]
[output]
46080
[/output]
[/test]
[test]
[Input]
9
[/Input]
[output]
12960
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Circle Area and Perimeter
[code-task title="Circle Area and Perimeter" taskId="pb-java-statements-Circle-Area-and-Perimeter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;
 
public class Program {
  public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a calcula aria și perimetrul cercului:
  * Citește un **număr cu virgulă mobilă**: raza unui cerc.
  * Calculeaza **aria și perimetrul** unui cerc.
  * Imprima valorile calculate.
  * Utilizați **formatarea implicită** pentru numerele cu virgulă mobilă în Java în Output (ca în exemplul de mai jos).

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 7 | Area = 153.938040 |
|  | Perimeter = 43.982297 |

[hints]
[hint]
Formula pentru calcularea perimetrului unui cerc este: P = 2 * π * R.
"R" esta raza cercului.
[/hint]
[hint]
Formula pentru calcularea ariei unui cerc: A = π * R * R.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[Input]
7
[/Input]
[output]
Area = 153.938040
Perimeter = 43.982297
[/output]
[/test]
[test]
[Input]
12.0
[/Input]
[output]
Area = 452.389342
Perimeter = 75.398224
[/output]
[/test]
[test]
[Input]
10.0
[/Input]
[output]
Area = 314.159265
Perimeter = 62.831853
[/output]
[/test]
[test]
[Input]
5.5
[/Input]
[output]
Area = 95.033178
Perimeter = 34.557519
[/output]
[/test]
[test]
[Input]
9.4
[/Input]
[output]
Area = 277.591127
Perimeter = 59.061942
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Person Info
[code-task title="Person Info" taskId="pb-java-statements-Person-Info" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner; 

public class Program {
  public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]

## Descriere
Scrieți un program care:
* Citește **4 rânduri** de șiruri: nume, prenume, țară și oraș.
* Tipărește informațiile despre o persoană în următorul format: `"{firstName} {lastName} from {country} - {town}!"`.

## Exemplu
| **Input** | **Output** |
| --- | --- |
| Kelly | Kelly Smith from Ireland - Cork! |
| Smith |  |
| Ireland |  |
| Cork |  |

[/task-description]
[tests]
[test open]
[Input]
Kelly
Smith
Ireland
Cork
[/Input]
[output]
Kelly Smith from Ireland - Cork!
[/output]
[/test]
[test]
[Input]
John
Smith
USA
LA
[/Input]
[output]
John Smith from USA - LA!
[/output]
[/test]
[test]
[Input]
Ann
Green
France
Paris
[/Input]
[output]
Ann Green from France - Paris!
[/output]
[/test]
[test]
[Input]
Pesho
Peshov
Bulgaria
Sofia
[/Input]
[output]
Pesho Peshov from Bulgaria - Sofia!
[/output]
[/test]
[test]
[Input]
A
B
C
D
[/Input]
[output]
A B from C - D!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Town Info
[code-task title="Town Info" taskId="pb-java-statements-Town-Info" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:
  * Citește **3 rânduri** de Input: nume (**șir**), populație și zonă (**numere întregi**)..
  * Tipărește informațiile despre un oraș în următorul format: "Town \{name\} has population of \{population\} and area \{area\} square km."

## Exemplu
| **Input** | **Output** |
| --- | --- |
| Berlin | Town Berlin has population of 3675000 and area 984 square km. |
| 3675000 |  |
| 984 |  |
[/task-description]
[tests]
[test open]
[Input]
Berlin
3675000
984
[/Input]
[output]
Town Berlin has population of 3675000 and area 984 square km.
[/output]
[/test]
[test]
[Input]
Sofia
100000
13000
[/Input]
[output]
Town Sofia has population of 100000 and area 13000 square km.
[/output]
[/test]
[test]
[Input]
Paris
20065
1200
[/Input]
[output]
Town Paris has population of 20065 and area 1200 square km.
[/output]
[/test]
[test]
[Input]
London
350000
1000
[/Input]
[output]
Town London has population of 350000 and area 1000 square km.
[/output]
[/test]
[test]
[Input]
A
123456
789
[/Input]
[output]
Town A has population of 123456 and area 789 square km.
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Square Area
[code-task title="Square Area" taskId="pb-java-statements-Square-Areaa" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {r
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Scrieți un program de consolă care citește un număr **întreg** \'a\' și calculează aria pătratului cu dimensiunea \'a\'.

## Intrare

Citiți de pe consolă:
- dimensiunea pătratului - un număr **întreg** în intervalul \ [1 ... 1000 \

## Ieșire

Imprimați pe consolă aria calculată.

## Exemple

| Input | Output |
| --- | --- |
| 5 | 25 |

| Input | Output |
| --- | --- |
| 6 | 36 |
[/task-description]
[tests]
[test open]
[Input]
5
[/Input]
[output]
25
[/output]
[/test]
[test]
[Input]
2
[/Input]
[output]
4
[/output]
[/test]
[test]
[Input]
3
[/Input]
[output]
9
[/output]
[/test]
[test]
[Input]
100
[/Input]
[output]
10000
[/output]
[/test]
[test]
[Input]
1
[/Input]
[output]
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Projects Creation
[code-task title="Project Creation" taskId="pb-java-statements-Projects-Creation" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care să calculeze câte ore va fi necesar unui arhitect pentru a crea proiecte ale unor obiecte de construcție.

Crearea unui proiect durează aproximativ 3 ore.

## Intrare
Citiți **două rânduri** de pe consolă:
- Numele arhitectului - **String**
- Numărul de proiecte - **integer** în intervalul \ [0 ... 100 \]

## Ieșire

Imprimați pe consolă:

-  "The architect \{name of the architect\} will need \{necessary hours\} hours to complete \{number of projects\} project/s."

## Exemple

| Input | Output | 
| --- | --- |
| George | The architect George will need 12 hours to complete 4 project/s. |
| 4 | |

| Input | Output |  
| --- | --- |
| Peter | The architect Peter will need 27 hours to complete 9 project/s. |
| 9 | |
[/task-description]
[tests]
[test open]
[Input]
George
4
[/Input]
[output]
The architect George will need 12 hours to complete 4 project/s.
[/output]
[/test]
[test open]
[Input]
Peter
9
[/Input]
[output]
The architect Peter will need 27 hours to complete 9 project/s.
[/output]
[/test]
[test]
[Input]
Maria
20
[/Input]
[output]
The architect Maria will need 60 hours to complete 20 project/s.
[/output]
[/test]
[test]
[Input]
Ivan
11
[/Input]
[output]
The architect Ivan will need 33 hours to complete 11 project/s.
[/output]
[/test]
[test]
[Input]
Dimitar
2
[/Input]
[output]
The architect Dimitar will need 6 hours to complete 2 project/s.
[/output]
[/test]
[test]
[Input]
Yana
14
[/Input]
[output]
The architect Yana will need 42 hours to complete 14 project/s.
[/output]
[/test]
[test]
[Input]
Radi
24
[/Input]
[output]
The architect Radi will need 72 hours to complete 24 project/s.
[/output]
[/test]
[test]
[Input]
Jivko
21
[/Input]
[output]
The architect Jivko will need 63 hours to complete 21 project/s.
[/output]
[/test]
[test]
[Input]
Preslava
40
[/Input]
[output]
The architect Preslava will need 120 hours to complete 40 project/s.
[/output]
[/test]
[test]
[Input]
Alisiya
37
[/Input]
[output]
The architect Alisiya will need 111 hours to complete 37 project/s.
[/output]
[/test]
[test]
[Input]
Galin
50
[/Input]
[output]
The architect Galin will need 150 hours to complete 50 project/s.
[/output]
[/test]
[test]
[Input]
Gergana
22
[/Input]
[output]
The architect Gergana will need 66 hours to complete 22 project/s.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Trapezoid Area
[code-task title="Trapezoid Area" taskId="pb-java-statements-Trapezoid-Area" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care **calculează** aria trapezului cu bazele **b1** și **b2** și înălțimea **h**.

Formula pentru calcularea ariei unui trapez este ((b1 + b2)/2) * h.

## Intrare

Citiți trei numere de pe consolă:
- baze - b1 și b2 - numere reale în intervalul\ [1 ... 1000 \]
- înălțime - h - număr real în intervalul\ [1 ... 1000 \]

## Ieșire

Imprimați pe consolă un singur număr - aria trapezului, formatat la **a doua zecimală**.

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 8 | 73.50 |
| 13 | |
| 7 | |
[/task-description]
[tests]
[test open]
[Input]
8
13
7
[/Input]
[output]
73.50
[/output]
[/test]
[test]
[Input]
4
6
8
[/Input]
[output]
40.00
[/output]
[/test]
[test]
[Input]
100
200
300
[/Input]
[output]
45000.00
[/output]
[/test]
[test]
[Input]
3
4
5
[/Input]
[output]
17.50
[/output]
[/test]
[test]
[Input]
8
13
7
[/Input]
[output]
73.50
[/output]
[/test]
[test]
[Input]
1.2
2.5
3.7
[/Input]
[output]
6.85
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]





[slide hideTitle]
# Problemă: Vegetable Market
[code-task title="Vegetable Market" taskId="pb-java-statements-Vegetable-Market" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Grădinarul își vinde recolta la piața de legume.

El vinde legume cu **N dolari** pe kilogram și fructe cu **M dolari** pe kilogram.

Scrieți un program care calculează veniturile din recoltă în euro (**1 USD = 0.89 EUR**).

## Intrare
Intrarea va fi de **4 numere**, fiecare pe o **singură linie**:
- Prețul kilogramului de legume - **număr în virgulă mobilă** [0.00 ... 1000.00]
- Prețul kilogramului de fructe - **număr în virgulă mobilă** [0.00 ... 1000.00]
- Kilograme in total de legume - **un număr întreg** [0… 1000]
- Kilograme in total de fructe - **un număr întreg** [0… 1000]

## Ieșire
Imprimați pe consolă un ** singur număr**: venitul din toate fructele și legumele în euro.

Rezultatul ar trebui formatat la **a doua zecimală**.

## Exemple

| Input | Output | Comments |
| --- | --- | --- |
| 0.194 | 174.39 | The vegetables cost - 0.194$ \* 10kg = 1.94$ |
| 19.4 | | The fruits cost - 19.4$ \* 10kg  = 194$ |
| 10 | | Total - 195.94$ = 174.39€ |
| 10 | | |

| Input | Output |
| --- | --- |
| 1.5 | 35.60 |
| 2.5 | |
| 10 | | 
| 10 | | 


[/task-description]
[tests]
[test open]
[Input]
0.194
19.4
10
10
[/Input]
[output]
174.39
[/output]
[/test]
[test open]
[Input]
1.5
2.5
10
10
[/Input]
[output]
35.60
[/output]
[/test]
[test]
[Input]
12.23
10
153
12
[/Input]
[output]
1772.16
[/output]
[/test]
[test]
[Input]
0
0
0
0
[/Input]
[output]
0.00
[/output]
[/test]
[test]
[Input]
1
1
1
1
[/Input]
[output]
1.78
[/output]
[/test]
[test]
[Input]
19.4
0.0194
200
102
[/Input]
[output]
3454.96
[/output]
[/test]
[test]
[Input]
1000
1000
1000
1000
[/Input]
[output]
1780000.00
[/output]
[/test]
[test]
[Input]
999.999
1929212
75
23
[/Input]
[output]
39557719.57
[/output]
[/test]
[test]
[Input]
0.018
0.217
546
897
[/Input]
[output]
181.98
[/output]
[/test]
[test]
[Input]
14.85
13
932
123
[/Input]
[output]
13740.89
[/output]
[/test]
[test]
[Input]
232.21
329.99
10
10
[/Input]
[output]
5003.58
[/output]
[/test]
[test]
[Input]
42
42
42
42
[/Input]
[output]
3139.92
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Pet Shop
[code-task title="Pet Shop" taskId="pb-java-statements-Pet-Shop" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Scrieți un program care să calculeze cheltuielile pentru cumpărarea alimentelor pentru câini și alte animale.

Fiecare pachet de alimente pentru câini costă 2.5 dolari, iar fiecare altul care NU este pentru ei - 4 dolari.
## Intrare
Input va fi două linii de pe consolă:
- Număr de câini - un număr întreg în intervalul \ [0 ... 100 \]
- Numărul de celelalte animale -un număr întreg în intervalul \ [0 ... 100 \]

## Ieșire
Imprimați pe consolă: "\{total sum\} dollars". Rezultatul trebuie să fie formatat la al doilea punct zecimal.

## Exemple

| Input | Output |
| --- | --- |
| 5 | 28.50 dollars |
| 4 | |


| Input | Output |
| --- | --- |
| 13 | 68.50 dollars |
| 9 | |
[/task-description]
[tests]
[test open]
[Input]
5
4
[/Input]
[output]
28.50 dollars
[/output]
[/test]
[test open]
[Input]
13
9
[/Input]
[output]
68.50 dollars
[/output]
[/test]
[test]
[Input]
11
3
[/Input]
[output]
39.50 dollars
[/output]
[/test]
[test]
[Input]
15
2
[/Input]
[output]
45.50 dollars
[/output]
[/test]
[test]
[Input]
14
12
[/Input]
[output]
83.00 dollars
[/output]
[/test]
[test]
[Input]
11
17
[/Input]
[output]
95.50 dollars
[/output]
[/test]
[test]
[Input]
19
0
[/Input]
[output]
47.50 dollars
[/output]
[/test]
[test]
[Input]
20
4
[/Input]
[output]
66.00 dollars
[/output]
[/test]
[test]
[Input]
0
0
[/Input]
[output]
0.00 dollars
[/output]
[/test]
[test]
[Input]
6
15
[/Input]
[output]
75.00 dollars
[/output]
[/test]
[test]
[Input]
24
88
[/Input]
[output]
412.00 dollars
[/output]
[/test]
[test]
[Input]
30
20
[/Input]
[output]
155.00 dollars
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]




[slide hideTitle]
# Problemă: Fishland
[code-task title="Fishland" taskId="pb-java-statements-Fishland" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
George decide să cumpere ton, macrou și midii.

Ciiți de la consola **prețurile** de macrou și șprot, cantitatea de ton, macrou și midii în **kilograme**.

**Calculați** de  câți bani va avea nevoie ca să plătească factura, în cazul în care prețurile la Fishland sunt:
- Ton - **cu 60% mai scump decât macroul**
- Macrou - **cu 80% mai scump decât șprot**
- Midii - **7.50 dolari pe kilogram**

## Intrare
Trebuie să citiți **5 numere** de pe consolă:
- prețul macrouului pe kilogram - **în virgulă mobilă** număr în intervalul [0.00… 40.00]
- prețul șproturilor pe kilogram - **în virgulă mobilă** număr în intervalul [0.00 ... 30.00]
- kilograme de ton - **în virgulă mobilă** număr în intervalul [0.00 ... 50.00]
- kilograme de macrou - **număr în virgulă mobilă** în intervalul [0.00 ... 70.00]
- kilograme de midii - **număr întreg** în intervalul [0 ... 100]

## ieșire

Imprimați pe consolă un singur număr cu virgulă mobilă: banii pe care George îi va trebui să plătească factura, formatate la **a doua zecimală**.

## Exemplu
| Input | Output |
| --- | --- |
| 6.90 | 42.96 |
| 4.20 | |
| 1.50 | |
| 2.50 | |
| 1 | |


[/task-description]
[tests]
[test open]
[Input]
6.90
4.20
1.5
2.5
1
[/Input]
[output]
42.96
[/output]
[/test]
[test]
[Input]
5.55
3.57
4.3
3.6
7
[/Input]
[output]
113.82
[/output]
[/test]
[test]
[Input]
7.79
5.35
9.3
0
0
[/Input]
[output]
115.92
[/output]
[/test]
[test]
[Input]
2.22
2.52
3
4
5
[/Input]
[output]
66.30
[/output]
[/test]
[test]
[Input]
7.5432
9.432
0.4
0.2
9
[/Input]
[output]
75.72
[/output]
[/test]
[test]
[Input]
10.50
9.25
12.2
13.2
5
[/Input]
[output]
462.24
[/output]
[/test]
[test]
[Input]
16.121
26.27
25
52
26
[/Input]
[output]
3298.71
[/output]
[/test]
[test]
[Input]
19.99
12.24
23
29
2
[/Input]
[output]
1389.56
[/output]
[/test]
[test]
[Input]
27
22
10
10
10
[/Input]
[output]
903.00
[/output]
[/test]
[test]
[Input]
31
12
22.22
11.11
43
[/Input]
[output]
1664.59
[/output]
[/test]
[test]
[Input]
29.99
29.99
29.99
29.99
29
[/Input]
[output]
3275.46
[/output]
[/test]
[test]
[Input]
39.99
29.99
39.98
58.85
69
[/Input]
[output]
6252.42
[/output]
[/test]
[test]
[Input]
39.99
29.99
49.99
69.99
99
[/Input]
[output]
7719.26
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Yard Greening
[code-task title="Yard Greening" taskId="pb-java-statements-Yard-Greening" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un program care să calculeze cheltuielile pentru amenajarea curții.

Prețul pentru **un metru pătrat** este de 7.61 dolari cu TVA. 

Compania oferă 18% **reducere** din prețul total.

## Intrare

Singură linie de la consolă:

- Metri pătrați care vor fi amenajate - **număr în virgulă mobila** în intervalul [0.00 ... 10000.00

## Ieșire

Imprimați pe consolă două linii:   
- "Prețul final este: \{total price\} dollars"
- "Reducerea este: \{discount\} dollars"

Prețurile trebuie să fie formatate la **a doua zecimală**.

## Exemplu
| Input |  Output |
| --- | --- |
| 540 | The final price is: 3369.71 dollars |
|  | The discount is: 739.69 dollars |

[hints]
[hint]
Calculate the price for greening the whole yard.
[/hint]
[hint]
Calculate the discount and determine the final price.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[Input]
540
[/Input]
[output]
The final price is: 3369.71 dollars
The discount is: 739.69 dollars
[/output]
[/test]
[test]
[Input]
135
[/Input]
[output]
The final price is: 842.43 dollars
The discount is: 184.92 dollars
[/output]
[/test]
[test]
[Input]
335
[/Input]
[output]
The final price is: 2090.47 dollars
The discount is: 458.88 dollars
[/output]
[/test]
[test]
[Input]
412
[/Input]
[output]
The final price is: 2570.96 dollars
The discount is: 564.36 dollars
[/output]
[/test]
[test]
[Input]
500
[/Input]
[output]
The final price is: 3120.10 dollars
The discount is: 684.90 dollars
[/output]
[/test]
[test]
[Input]
650
[/Input]
[output]
The final price is: 4056.13 dollars
The discount is: 890.37 dollars
[/output]
[/test]
[test]
[Input]
123
[/Input]
[output]
The final price is: 767.54 dollars
The discount is: 168.49 dollars
[/output]
[/test]
[test]
[Input]
811
[/Input]
[output]
The final price is: 5060.80 dollars
The discount is: 1110.91 dollars
[/output]
[/test]
[test]
[Input]
250
[/Input]
[output]
The final price is: 1560.05 dollars
The discount is: 342.45 dollars
[/output]
[/test]
[test]
[Input]
211.05
[/Input]
[output]
The final price is: 1316.99 dollars
The discount is: 289.10 dollars
[/output]
[/test]
[test]
[Input]
348.49
[/Input]
[output]
The final price is: 2174.65 dollars
The discount is: 477.36 dollars
[/output]
[/test]
[test]
[Input]
74.44
[/Input]
[output]
The final price is: 464.52 dollars
The discount is: 101.97 dollars
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

