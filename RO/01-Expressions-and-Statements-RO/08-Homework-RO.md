# Teme pentru acasă

[slide hideTitle]
# Problem: Calculate Speed
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
  * Citește 2 numere cu virgulă mobilă: distanță și timp.
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
[input]
15
2
[/input]
[output]
7.5
[/output]
[/test]
[test]
[input]
10.0
2.0
[/input]
[output]
5.0
[/output]
[/test]
[test]
[input]
2.0
10.0
[/input]
[output]
0.2
[/output]
[/test]
[test]
[input]
4.0
5.0
[/input]
[output]
0.8
[/output]
[/test]
[test]
[input]
4.5
10.0
[/input]
[output]
0.45
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Currency Converter
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
  * Citește **numărul cu virgulă mobilă**: dolarii care urmează să fie convertite.
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
[input]
17
[/input]
[output]
14.96
[/output]
[/test]
[test open]
[input]
87
[/input]
[output]
76.56
[/output]
[/test]
[test]
[input]
10.0
[/input]
[output]
8.8
[/output]
[/test]
[test]
[input]
5.0
[/input]
[output]
4.4
[/output]
[/test]
[test]
[input]
25.5
[/input]
[output]
22.44
[/output]
[/test]
[test]
[input]
12.0
[/input]
[output]
10.56
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Area of Triangle
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

   * Citește din intrarea a `laturii a` și `înălțime` - **numere în virgulă mobilă**.
   * Calculeaza aria triunghiului.
   * Imprima aria, formatată la a doua cifră după punctul zecimal.
  
## Exemplu
| **Input** | **Output** |
| --- | --- |
| 5 | 25.00 |
| 10 |  |

[/task-description]
[tests]
[test open]
[input]
5
10
[/input]
[output]
25.00
[/output]
[/test]
[test]
[input]
12.0
2.0
[/input]
[output]
12.00
[/output]
[/test]
[test]
[input]
5.0
4.0
[/input]
[output]
10.00
[/output]
[/test]
[test]
[input]
10.5
2.5
[/input]
[output]
13.13
[/output]
[/test]
[test]
[input]
1.6
2.8
[/input]
[output]
2.24
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Four Operations
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
[input]
10.0
5.0
[/input]
[output]
10.00 + 5.00 = 15.00
10.00 - 5.00 = 5.00
10.00 * 5.00 = 50.00
10.00 / 5.00 = 2.00
[/output]
[/test]
[test]
[input]
2.5
6.5
[/input]
[output]
2.50 + 6.50 = 9.00
2.50 - 6.50 = -4.00
2.50 * 6.50 = 16.25
2.50 / 6.50 = 0.38
[/output]
[/test]
[test]
[input]
10.5
2.5
[/input]
[output]
10.50 + 2.50 = 13.00
10.50 - 2.50 = 8.00
10.50 * 2.50 = 26.25
10.50 / 2.50 = 4.20
[/output]
[/test]
[test]
[input]
1.6
2.8
[/input]
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
# Problem: Days to Minutes
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
  * Citește un **singur întreg** (zilele vor fi transformate).
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

[/task-description]
[tests]
[test open]
[input]
2
[/input]
[output]
2880
[/output]
[/test]
[test open]
[input]
5
[/input]
[output]
7200
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
8640
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
14400
[/output]
[/test]
[test]
[input]
32
[/input]
[output]
46080
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
12960
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Circle Area and Perimeter
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
  * Utilizați **formatarea implicită** pentru numerele cu virgulă mobilă în Java în ieșire (ca în exemplul de mai jos).

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 7 | Area = 153.938040 |
|  | Perimeter = 43.982297 |
[/task-description]
[tests]
[test open]
[input]
7
[/input]
[output]
Area = 153.938040
Perimeter = 43.982297
[/output]
[/test]
[test]
[input]
12.0
[/input]
[output]
Area = 452.389342
Perimeter = 75.398224
[/output]
[/test]
[test]
[input]
10.0
[/input]
[output]
Area = 314.159265
Perimeter = 62.831853
[/output]
[/test]
[test]
[input]
5.5
[/input]
[output]
Area = 95.033178
Perimeter = 34.557519
[/output]
[/test]
[test]
[input]
9.4
[/input]
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
[input]
Kelly
Smith
Ireland
Cork
[/input]
[output]
Kelly Smith from Ireland - Cork!
[/output]
[/test]
[test]
[input]
John
Smith
USA
LA
[/input]
[output]
John Smith from USA - LA!
[/output]
[/test]
[test]
[input]
Ann
Green
France
Paris
[/input]
[output]
Ann Green from France - Paris!
[/output]
[/test]
[test]
[input]
Pesho
Peshov
Bulgaria
Sofia
[/input]
[output]
Pesho Peshov from Bulgaria - Sofia!
[/output]
[/test]
[test]
[input]
A
B
C
D
[/input]
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
  * Citește **3 rânduri** de intrare: nume (**string**), populație și zonă (**integers**)..
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
[input]
Berlin
3675000
984
[/input]
[output]
Town Berlin has population of 3675000 and area 984 square km.
[/output]
[/test]
[test]
[input]
Sofia
100000
13000
[/input]
[output]
Town Sofia has population of 100000 and area 13000 square km.
[/output]
[/test]
[test]
[input]
Paris
20065
1200
[/input]
[output]
Town Paris has population of 20065 and area 1200 square km.
[/output]
[/test]
[test]
[input]
London
350000
1000
[/input]
[output]
Town London has population of 350000 and area 1000 square km.
[/output]
[/test]
[test]
[input]
A
123456
789
[/input]
[output]
Town A has population of 123456 and area 789 square km.
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Square Area
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

Scrieți un program de consolă care citește un **integer** \'a\' și calculează aria pătratului cu dimensiunea \'a\'.

## Intrare

Citiți de pe consolă:
- dimensiunea pătratului - **interger** în intervalul \ [1 ... 1000 \

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
[input]
5
[/input]
[output]
25
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
100
[/input]
[output]
10000
[/output]
[/test]
[test]
[input]
1
[/input]
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
[input]
George
4
[/input]
[output]
The architect George will need 12 hours to complete 4 project/s.
[/output]
[/test]
[test open]
[input]
Peter
9
[/input]
[output]
The architect Peter will need 27 hours to complete 9 project/s.
[/output]
[/test]
[test]
[input]
Maria
20
[/input]
[output]
The architect Maria will need 60 hours to complete 20 project/s.
[/output]
[/test]
[test]
[input]
Ivan
11
[/input]
[output]
The architect Ivan will need 33 hours to complete 11 project/s.
[/output]
[/test]
[test]
[input]
Dimitar
2
[/input]
[output]
The architect Dimitar will need 6 hours to complete 2 project/s.
[/output]
[/test]
[test]
[input]
Yana
14
[/input]
[output]
The architect Yana will need 42 hours to complete 14 project/s.
[/output]
[/test]
[test]
[input]
Radi
24
[/input]
[output]
The architect Radi will need 72 hours to complete 24 project/s.
[/output]
[/test]
[test]
[input]
Jivko
21
[/input]
[output]
The architect Jivko will need 63 hours to complete 21 project/s.
[/output]
[/test]
[test]
[input]
Preslava
40
[/input]
[output]
The architect Preslava will need 120 hours to complete 40 project/s.
[/output]
[/test]
[test]
[input]
Alisiya
37
[/input]
[output]
The architect Alisiya will need 111 hours to complete 37 project/s.
[/output]
[/test]
[test]
[input]
Galin
50
[/input]
[output]
The architect Galin will need 150 hours to complete 50 project/s.
[/output]
[/test]
[test]
[input]
Gergana
22
[/input]
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
[input]
8
13
7
[/input]
[output]
73.50
[/output]
[/test]
[test]
[input]
4
6
8
[/input]
[output]
40.00
[/output]
[/test]
[test]
[input]
100
200
300
[/input]
[output]
45000.00
[/output]
[/test]
[test]
[input]
3
4
5
[/input]
[output]
17.50
[/output]
[/test]
[test]
[input]
8
13
7
[/input]
[output]
73.50
[/output]
[/test]
[test]
[input]
1.2
2.5
3.7
[/input]
[output]
6.85
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]





[slide hideTitle]
# Problem: Vegetable Market
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

## Input
Input-ul va fi de **4 numere**, fiecare pe o **singură linie**:
- Prețul kilogramului de legume - **număr în virgulă mobilă** [0.00 ... 1000.00]
- Prețul kilogramului de fructe - **număr în virgulă mobilă** [0.00 ... 1000.00]
- Kilograme in total de legume - **integer** [0… 1000]
- Kilograme in total de fructe - **integer** [0… 1000]

## Output
Imprimați pe consolă un **număr unic**: venitul din toate fructele și legumele în euro.

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
[input]
0.194
19.4
10
10
[/input]
[output]
174.39
[/output]
[/test]
[test open]
[input]
1.5
2.5
10
10
[/input]
[output]
35.60
[/output]
[/test]
[test]
[input]
12.23
10
153
12
[/input]
[output]
1772.16
[/output]
[/test]
[test]
[input]
0
0
0
0
[/input]
[output]
0.00
[/output]
[/test]
[test]
[input]
1
1
1
1
[/input]
[output]
1.78
[/output]
[/test]
[test]
[input]
19.4
0.0194
200
102
[/input]
[output]
3454.96
[/output]
[/test]
[test]
[input]
1000
1000
1000
1000
[/input]
[output]
1780000.00
[/output]
[/test]
[test]
[input]
999.999
1929212
75
23
[/input]
[output]
39557719.57
[/output]
[/test]
[test]
[input]
0.018
0.217
546
897
[/input]
[output]
181.98
[/output]
[/test]
[test]
[input]
14.85
13
932
123
[/input]
[output]
13740.89
[/output]
[/test]
[test]
[input]
232.21
329.99
10
10
[/input]
[output]
5003.58
[/output]
[/test]
[test]
[input]
42
42
42
42
[/input]
[output]
3139.92
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Pet Shop
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
## Input
Input va fi două linii de pe consolă:
- Număr de câini - număr întreg în intervalul \ [0 ... 100 \]
- Numărul de celelalte animale - număr întreg în intervalul \ [0 ... 100 \]

## Output
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
[input]
5
4
[/input]
[output]
28.50 dollars
[/output]
[/test]
[test open]
[input]
13
9
[/input]
[output]
68.50 dollars
[/output]
[/test]
[test]
[input]
11
3
[/input]
[output]
39.50 dollars
[/output]
[/test]
[test]
[input]
15
2
[/input]
[output]
45.50 dollars
[/output]
[/test]
[test]
[input]
14
12
[/input]
[output]
83.00 dollars
[/output]
[/test]
[test]
[input]
11
17
[/input]
[output]
95.50 dollars
[/output]
[/test]
[test]
[input]
19
0
[/input]
[output]
47.50 dollars
[/output]
[/test]
[test]
[input]
20
4
[/input]
[output]
66.00 dollars
[/output]
[/test]
[test]
[input]
0
0
[/input]
[output]
0.00 dollars
[/output]
[/test]
[test]
[input]
6
15
[/input]
[output]
75.00 dollars
[/output]
[/test]
[test]
[input]
24
88
[/input]
[output]
412.00 dollars
[/output]
[/test]
[test]
[input]
30
20
[/input]
[output]
155.00 dollars
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]




[slide hideTitle]
# Problem: Fishland
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
George decide să cumpere ton, scaduri și midii.

Ciiți de la consola **prețurile** de macrou și șprot, cantitatea de ton, scads și midii în **kilograme**.

**Calculați** de  câți bani va avea nevoie ca să plătească factura, în cazul în care prețurile la Fishland sunt:
- Ton - **cu 60% mai scump decât macroul**
- Scads - **cu 80% mai scumpe decât șprot**
- Midii - **7.50 dolari pe kilogram**

## Input
Trebuie să citiți **5 numere** de pe consolă:
- prețul macrouului pe kilogram - **în virgulă mobilă** număr în intervalul [0.00… 40.00]
- prețul șproturilor pe kilogram - **în virgulă mobilă** număr în intervalul [0.00 ... 30.00]
- kilograme de ton - **în virgulă mobilă** număr în intervalul [0.00 ... 50.00]
- kilograme de scaduri - **număr în virgulă mobilă** în intervalul [0.00 ... 70.00]
- kilograme de midii - **număr întreg** în intervalul [0 ... 100]

## Output

Imprimați pe consolă un singur număr cu virgulă mobilă: banii pe care George îi va trebui să plătească factura, formatate la **a doua zecimală**.

## Exemplu
| Input | Output |
| --- | --- |
| 6.90 | 42.96 |
| 4.20 | |
| 1.50 | |
| 2.50 | |
| 1 | |

### Sugestii
- Prețul tonului = 6.90 + 6.90 \* 0.60 = 11.04 $/kg
- Suma totală de ton = 1.5 \* 11.04 = 16.56
- Prețul scadului = 4.20 + 4.20 \* 0.80 =  7.56$/kg
- Suma totală de scaduri = 2.5 \* 7.56 = 18.90
- Suma totală a midiilor = 1 \* 7.50 = 7.50
- Factură = 16.56 + 18.90 + 7.50 = 42.96

[/task-description]
[tests]
[test open]
[input]
6.90
4.20
1.5
2.5
1
[/input]
[output]
42.96
[/output]
[/test]
[test]
[input]
5.55
3.57
4.3
3.6
7
[/input]
[output]
113.82
[/output]
[/test]
[test]
[input]
7.79
5.35
9.3
0
0
[/input]
[output]
115.92
[/output]
[/test]
[test]
[input]
2.22
2.52
3
4
5
[/input]
[output]
66.30
[/output]
[/test]
[test]
[input]
7.5432
9.432
0.4
0.2
9
[/input]
[output]
75.72
[/output]
[/test]
[test]
[input]
10.50
9.25
12.2
13.2
5
[/input]
[output]
462.24
[/output]
[/test]
[test]
[input]
16.121
26.27
25
52
26
[/input]
[output]
3298.71
[/output]
[/test]
[test]
[input]
19.99
12.24
23
29
2
[/input]
[output]
1389.56
[/output]
[/test]
[test]
[input]
27
22
10
10
10
[/input]
[output]
903.00
[/output]
[/test]
[test]
[input]
31
12
22.22
11.11
43
[/input]
[output]
1664.59
[/output]
[/test]
[test]
[input]
29.99
29.99
29.99
29.99
29
[/input]
[output]
3275.46
[/output]
[/test]
[test]
[input]
39.99
29.99
39.98
58.85
69
[/input]
[output]
6252.42
[/output]
[/test]
[test]
[input]
39.99
29.99
49.99
69.99
99
[/input]
[output]
7719.26
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Yard Greening
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

Scrieți un program care să calculeze cheltuielile pentru ecologizarea curții.

Prețul pentru **un metru pătrat** este de 7.61 dolari cu TVA. 

Compania oferă 18% **reducere** din prețul total.

## Input

Singură linie de la consolă:

- Metri pătrați care vor fi verzi - **număr cu virgulă mobila** în intervalul [0.00 ... 10000.00

## Output

PrImprimați pe consolă două linii:   
- "Prețul final este: \{total price\} dollars"
- "Reducerea este: \{discount\} dollars"

Prețurile trebuie să fie formatate la **a doua zecimală**.

## Examplu
| Input |  Output |
| --- | --- |
| 540 | The final price is: 3369.71 dollars |
|  | The discount is: 739.69 dollars |

### Comentarii
- Calculați prețul pentru ecologizarea întregii curți: 540 \* 7.61 = 4109.40 $
- Calculați reducerea: 0.18 \* 4109.40 = 739.69 $
- Calculați prețul final: 4109.40 – 739.69 = 3369.71 $

[/task-description]
[tests]
[test open]
[input]
540
[/input]
[output]
The final price is: 3369.71 dollars
The discount is: 739.69 dollars
[/output]
[/test]
[test]
[input]
135
[/input]
[output]
The final price is: 842.43 dollars
The discount is: 184.92 dollars
[/output]
[/test]
[test]
[input]
335
[/input]
[output]
The final price is: 2090.47 dollars
The discount is: 458.88 dollars
[/output]
[/test]
[test]
[input]
412
[/input]
[output]
The final price is: 2570.96 dollars
The discount is: 564.36 dollars
[/output]
[/test]
[test]
[input]
500
[/input]
[output]
The final price is: 3120.10 dollars
The discount is: 684.90 dollars
[/output]
[/test]
[test]
[input]
650
[/input]
[output]
The final price is: 4056.13 dollars
The discount is: 890.37 dollars
[/output]
[/test]
[test]
[input]
123
[/input]
[output]
The final price is: 767.54 dollars
The discount is: 168.49 dollars
[/output]
[/test]
[test]
[input]
811
[/input]
[output]
The final price is: 5060.80 dollars
The discount is: 1110.91 dollars
[/output]
[/test]
[test]
[input]
250
[/input]
[output]
The final price is: 1560.05 dollars
The discount is: 342.45 dollars
[/output]
[/test]
[test]
[input]
211.05
[/input]
[output]
The final price is: 1316.99 dollars
The discount is: 289.10 dollars
[/output]
[/test]
[test]
[input]
348.49
[/input]
[output]
The final price is: 2174.65 dollars
The discount is: 477.36 dollars
[/output]
[/test]
[test]
[input]
74.44
[/input]
[output]
The final price is: 464.52 dollars
The discount is: 101.97 dollars
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

