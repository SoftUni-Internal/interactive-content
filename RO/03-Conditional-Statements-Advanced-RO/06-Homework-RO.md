# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Fruit or Vegetable
[code-task title="Fruit or Vegetable" taskId="pb-java-Conditional-Statements-A-fruit-or-vegetable" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a verifica dacă o valoare introdusă este fruct sau legumă:

* Citiți o singură linie de intrare: un articol de la aprozar
* Fruct: banana, apple, kiwi, cherry, lemon, grapes
* Legumă: cucumber, pepper, carrot, onion
* Imprimați: **"vegetable"**, **"fruit"** sau **"unknown"**

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| lemon | fruit |
| carrot | vegetable |


[/task-description]
[tests]
[test open]
[input]
lemon
[/input]
[output]
fruit
[/output]
[/test]
[test open]
[input]
carrot
[/input]
[output]
vegetable
[/output]
[/test]
[test]
[input]
grapes
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
carrot
[/input]
[output]
vegetable
[/output]
[/test]
[test open]
[input]
pepper
[/input]
[output]
vegetable
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Day of Week

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-30-33-problem-solving-day-of-week-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Day of Week" taskId="pb-java-Conditional-Statements-A-day-of-week" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a imprima ziua săptămânii ca un cuvânt:

* Citiți și imprimați un număr întreg **n**: **ziua săptămânii** în intervalul [1 ... 7]
* Imprimați **numele zilei** (cuvânt, în limba engleză)
* Imprimați **"Error"** dacă numărul nu se află în intervalul dat

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 | Monday |
| 8 | Error |

[/task-description]
[tests]
[test open]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test open]
[input]
8
[/input]
[output]
Error
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
Tuesday
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
Error
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
Wednesday
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
Friday
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Vowel or Consonant
[code-task title="Vowel or Consonant" taskId="pb-java-Conditional-Statements-A-vowel-or-consonant" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a verifica dacă o literă este vocală sau consoană:

* Citiți o **literă** din alfabetul englez
* Imprimați **"Vowel"** sau **"Consonant"**

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| a | Vowel |
| B | Consonant |


[hints]
[hint]

Puteți utiliza o instrucțiune "if" pentru a verifica dacă litera este o vocală.

Dacă este, imprimați ieșirea corectă.

Dacă nu este, introduceți instrucțiunea "else" și imprimați ieșirea corespunzătoare.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
a
[/input]
[output]
Vowel
[/output]
[/test]
[test open]
[input]
B
[/input]
[output]
Consonant
[/output]
[/test]
[test]
[input]
E
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
A
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
e
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
O
[/input]
[output]
Vowel
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Product of 3 Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-37-problem-product-of-three-numbers-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Product of 3 Numbers" taskId="pb-java-Conditional-Statements-A-product-of-3-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Calculați semnul produsului a 3 numere:

* Citiți **3 numere în virgulă mobilă**
* Imprimați semnul produsului celor 3 numere introduse: **positive**, **negative** sau **zero**
* Încercați să faceți acest lucru **fără a înmulți** numerele

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 2 | negative |
| 3 |  |
| -1 |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| 2 | positive |
| 3 |  |
| 1 |  |

[/task-description]
[tests]
[test open]
[input]
-2
3
1
[/input]
[output]
negative
[/output]
[/test]
[test open]
[input]
2
3
1
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
-3
-4
5
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
1
2
0
[/input]
[output]
zero
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Sorted Numbers
[code-task title="Sorted Numbers" taskId="pb-java-Conditional-Statements-A-Sorted-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care citește 3 numere de la consolă și verifică dacă sunt ordonate:

* Citiți 3 numere reale
* Tipăriți **"Ascending"** dacă numerele sunt în ordine crescătoare
* Tipăriți **"Descending"** dacă numerele sunt în ordine descrescătoare
* Tipăriți **"Not sorted"** în orice alt caz

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 | Ascending |
| 2 |  |
| 3 |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| 3 | Not sorted |
| 5 |  |
| 2 |  |

|**Intrare** |**Ieșire**|
| --- | --- |
| 5 | Descending |
| 4 |  |
| 3 |  |

[/task-description]
[tests]
[test open]
[input]
1
2
3
[/input]
[output]
Ascending
[/output]
[/test]
[test open]
[input]
3
5
2
[/input]
[output]
Not sorted
[/output]
[/test]
[test open]
[input]
5
4
3
[/input]
[output]
Descending
[/output]
[/test]
[test]
[input]
3
1
2
[/input]
[output]
Not sorted
[/output]
[/test]
[test]
[input]
3
2
1
[/input]
[output]
Descending
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Vacation Expenses

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-41-problem-vacation-expenses-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Vacation Expenses" taskId="pb-java-Conditional-Statements-A-Vacation-Expenses" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care calculează cheltuielile de vacanță:

* Citiți **sezonul**, **tipul de cazare** și **numărul zilelor**
* Imprimați **cheltuielile totale**, pe baza tabelului de prețuri de mai jos, formatat la **a doua cifră** după punctul zecimal

| **Sezon** | **Hotel** | **Camping** | **Reducere** |
|---|---|---|---|
|Spring|30|10|20%|
|Summer|50|30|0%|
|Autumn|20|15|30%|
|Winter|40|10|10%|

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| Winter | 180.00 |
| Hotel |  |
| 5 |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| Summer |  90.00 |
| Camping |  |
| 3 |  |

[/task-description]
[tests]
[test open]
[input]
Winter
Hotel
5
[/input]
[output]
180.00
[/output]
[/test]
[test open]
[input]
Summer
Camping
3
[/input]
[output]
90.00
[/output]
[/test]
[test]
[input]
Winter
Camping
10
[/input]
[output]
90.00
[/output]
[/test]
[test]
[input]
Autumn
Camping
6
[/input]
[output]
63.00
[/output]
[/test]
[test]
[input]
Summer
Hotel
7
[/input]
[output]
350.00
[/output]
[/test]
[test]
[input]
Spring
Camping
8
[/input]
[output]
64.00
[/output]
[/test]
[test]
[input]
Summer
Hotel
9
[/input]
[output]
450.00
[/output]
[/test]
[test]
[input]
Autumn
Camping
10
[/input]
[output]
105.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Cinema
[code-task title="Cinema" taskId="pb-java-Conditional-Statements-A-Cinema" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Calculați **prețul** pentru toate biletele vândute pentru un film cinematografic:
* Citiți **tipul filmului**, **numărul de rânduri** și **numărul de locuri pe un rând** din cinematograf
* Tipăriți **prețul total** pentru toate locurile, **formatat** la a doua cifră după punctul zecimal

|**Tip**|**Preț**|
|---|---|
|Premiere|12.00|
|Normal|7.50|
|Discount|5.00|

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
|Premiere|1440.00|
|10||
|12|  |

| **Intrare** | **Ieșire** |
| --- | --- |
|Normal|2047.50 |
|21||
|13| |

| **Intrare** | **Ieșire** |
| --- | --- |
|Discount|1800.00|
|12||
|30| |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Premiere
10
12
[/input]
[output]
1440.00
[/output]
[/test]
[test open]
[input]
Normal
21
13
[/input]
[output]
2047.50
[/output]
[/test]
[test open]
[input]
Discount
12
30
[/input]
[output]
1800.00
[/output]
[/test]
[test]
[input]
Normal
88
44
[/input]
[output]
29040.00
[/output]
[/test]
[test]
[input]
Discount
43
15
[/input]
[output]
3225.00
[/output]
[/test]
[test]
[input]
Premiere
42
62
[/input]
[output]
31248.00
[/output]
[/test]
[test]
[input]
Discount
30
36
[/input]
[output]
5400.00
[/output]
[/test]
[test]
[input]
Premiere
94
17
[/input]
[output]
19176.00
[/output]
[/test]
[test]
[input]
Discount
34
7
[/input]
[output]
1190.00
[/output]
[/test]
[test]
[input]
Discount
34
93
[/input]
[output]
15810.00
[/output]
[/test]
[test]
[input]
Premiere
68
50
[/input]
[output]
40800.00
[/output]
[/test]
[test]
[input]
Normal
73
61
[/input]
[output]
33397.50
[/output]
[/test]
[test]
[input]
Normal
63
64
[/input]
[output]
30240.00
[/output]
[/test]
[test]
[input]
Normal
84
98
[/input]
[output]
61740.00
[/output]
[/test]
[test]
[input]
Normal
59
57
[/input]
[output]
25222.50
[/output]
[/test]
[test]
[input]
Premiere
52
35
[/input]
[output]
21840.00
[/output]
[/test]
[test]
[input]
Normal
36
75
[/input]
[output]
20250.00
[/output]
[/test]
[test]
[input]
Normal
65
68
[/input]
[output]
33150.00
[/output]
[/test]
[test]
[input]
Premiere
59
35
[/input]
[output]
24780.00
[/output]
[/test]
[test]
[input]
Discount
78
9
[/input]
[output]
3510.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Operations with Numbers
[code-task title="Operations with Numbers" taskId="pb-java-Conditional-Statements-A-operations-with-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a efectua un calcul folosind un operator particular:

* Citiți **două numere întregi** și **operatorul matematic** de pe consolă
* Operatorul aritmetic poate fi: "+", "-", "/", "%" și "*"
* Rezultatul trebuie să fie în următorul **format**: "\{**N1**\} \{**operator**\} \{**N2**\} = \{**result**\}"

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 12 | 12 + 10 = 22 |
| 10 |  |
| \+ |  |

[/task-description]
[tests]
[test open]
[input]
10
12
+
[/input]
[output]
10 + 12 = 22
[/output]
[/test]
[test]
[input]
12
10
\-
[/input]
[output]
12 \- 10 = 2
[/output]
[/test]
[test]
[input]
10
12
*
[/input]
[output]
10 * 12 = 120
[/output]
[/test]
[test]
[input]
6
2
/
[/input]
[output]
6 / 2 = 3
[/output]
[/test]
[test]
[input]
5
2
%
[/input]
[output]
5 % 2 = 1
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: ATM
[code-task title="ATM" taskId="pb-java-Conditional-Statements-A-ATM" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a simula retragerea de bani din bancomat:

Citiți: **balance**, **withdraw** și **limit**
* Imprimați **"The withdraw was successful."** dacă soldul este suficient
* Imprimați **"The daily limit was exceeded."** dacă limita este depășită
* Imprimați **"Insufficient availability."** dacă soldul nu este sufficient

## Example
  | **Intrare** | **Ieșire** |
| --- | --- |
|420|The withdraw was successful. |
|20||
|25| |

 | **Intrare** | **Ieșire** |
| --- | --- |
|10|The daily limit was exceeded.|
|50|Insufficient availability.|
|20|  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
420
20
25
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[test open]
[input]
10
50
20
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[test]
[input]
10
4565
345
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[test]
[input]
342
2
3
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[test]
[input]
10
50
20
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Biggest of Five Numbers
[code-task title="Biggest of Five Numbers" taskId="pb-java-Conditional-Statements-A-Biggest-of-five-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a găsi cel mai mare număr dintre 5 numere:
* Citiți **5 numere întregi**
* Imprimați cel mai mare număr

## Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
| \-1|\-1|
|\-2||
|\-3||
|\-4||
|\-5|  |

 | **Intrare** | **Ieșire** |
| --- | --- |
| 3|77|
|4||
|77||
|12||
|33|  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
-1
-2
-3
-4
-5
[/input]
[output]
-1
[/output]
[/test]
[test open]
[input]
3
4
77
12
33
[/input]
[output]
77
[/output]
[/test]
[test]
[input]
5
-2
-3
9
-8
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
-1
4
3
-4
1
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
4
2
5
43
1
[/input]
[output]
43
[/output]
[/test]
[test]
[input]
234234
2345
56756
67867
3453
[/input]
[output]
234234
[/output]
[/test]
[test]
[input]
3452
54756
6786
3453
4
[/input]
[output]
54756
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Personal Titles
[code-task title="Personal Titles" taskId="pb-java-Conditional-Statements-A-Personal-Titles" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un program de **consolă** care să citească **vârsta (număr în virgulă mobilă)** și **sexul** ("**m**" sau "**f**") și să imprime o formulă de adresare în funcție de aceste principii:
- "**Mr.**" - un bărbat (sex "**m**") cu vârsta de 16 ani sau mai mult
- "**Master**" - un băiat (sex "**m**") sub 16 ani
- "**Ms.**" - o femeie (sex "**f**") cu vârsta de 16 ani sau mai mult
- "**Miss**" - o fată (sex "**f**") sub 16 ani

## Intrare
Intrare de pe consolă:
- Vârstă - număr în virgulă mobilă
- Sex - "**m**"sau "**f**"

## Ieșire
Imprimați formula de adresare corespunzătoare pe o singură linie.


## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 25 | Ms. |
| f | |


| **Intrare** | **Ieșire** |
| --- |  --- |
| 13.5 | Master |
| m | |

[/task-description]
[tests]
[test open]
[input]
25
f
[/input]
[output]
Ms.
[/output]
[/test]
[test open]
[input]
13.5
m
[/input]
[output]
Master
[/output]
[/test]
[test]
[input]
12
f
[/input]
[output]
Miss
[/output]
[/test]
[test]
[input]
17
m
[/input]
[output]
Mr.
[/output]
[/test]
[test]
[input]
11
f
[/input]
[output]
Miss
[/output]
[/test]
[test]
[input]
19
m
[/input]
[output]
Mr.
[/output]
[/test]
[test]
[input]
30
f
[/input]
[output]
Ms.
[/output]
[/test]
[test]
[input]
14
m
[/input]
[output]
Master
[/output]
[/test]
[test]
[input]
4.5
m
[/input]
[output]
Master
[/output]
[/test]
[test]
[input]
16
m
[/input]
[output]
Mr.
[/output]
[/test]
[test]
[input]
16
f
[/input]
[output]
Ms.
[/output]
[/test]
[test]
[input]
15.9
m
[/input]
[output]
Master
[/output]
[/test]
[test]
[input]
15.9
f
[/input]
[output]
Miss
[/output]
[/test]
[test]
[input]
95.125
m
[/input]
[output]
Mr.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Fuel Tank
[code-task title="Fuel Tank" taskId="pb-java-Conditional-Statements-A-Fuel-tank" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care verifică dacă rezervorul unui vehicul necesită realimentare sau nu.

## Intrare
Intrarea este formată din 2 linii:
- Tipul de combustibil: "**Diesel**", "**Gasoline**" sau "**Gas**"
- Combustibilul din rezervor în litri

## Ieșire
- Dacă combustibilul este altul decât tipărirea specificată, tipăriți "**Invalid fuel!**"
- Dacă nivelul de combustibil din rezervor este mai mare sau egal cu 25 litri, imprimați:
     - "**You have enough** \{**type of fuel**\}."
     - tipul de combustibil trebuie imprimat cu litere mici
- Altfel tipăriți:
     - "**Fill your tank with** \{**type of fuel**\}!"
     - tipul de combustibil trebuie imprimat cu litere mici

## Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| Diesel | Fill your tank with diesel! |
| 10 | |

| **Intrare** | **Ieșire** |
| --- | --- |
| Gas | You have enough gas. |
| 25 | |

[/task-description]
[tests]
[test open]
[input]
Diesel
10
[/input]
[output]
Fill your tank with diesel!
[/output]
[/test]
[test open]
[input]
Gas
25
[/input]
[output]
You have enough gas.
[/output]
[/test]
[test]
[input]
Gasoline
40
[/input]
[output]
You have enough gasoline.
[/output]
[/test]
[test]
[input]
Kerosene
200
[/input]
[output]
Invalid fuel!
[/output]
[/test]
[test]
[input]
Diesel
25
[/input]
[output]
You have enough diesel.
[/output]
[/test]
[test]
[input]
Gasoline
28
[/input]
[output]
You have enough gasoline.
[/output]
[/test]
[test]
[input]
Gas
20
[/input]
[output]
Fill your tank with gas!
[/output]
[/test]
[test]
[input]
Kerosene
20
[/input]
[output]
Invalid fuel!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]



[slide hideTitle]
# Problemă: Trade Commissions
[code-task title="Trade Commissions" taskId="pb-java-Conditional-Statements-A-Trade-Commisions" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

O companie plătește angajaților săi următoarele comisioane în funcție de orașul în care lucrează și de valoarea vânzărilor:

| **Vânzări / Oraș** | **London** | **New York** | **Sydney**|
| --- | --- | --- | --- | 
| \[0-500\] | 5% | 4.5% | 5.5% |
| \[501-1000\] | 7% | 7.5% | 8% | 
| \[1001-10000\] | 8% | 10% | 12% |
| \> 10000| 12% | 13% | 14.5% |

Scrieți un program de consolă care să citească ca intrare **numele unui oraș** și **valoarea vânzărilor** și să calculeze valoarea **comisionului**.

## Intrare
Citiți de pe consolă două linii:
- Numele unui oraș - șir
- Valoarea vânzărilor - număr în virgulă mobilă

## Ieșire
- Tipăriți pe consolă valoarea calculată a comisionului 
- Rezultatul trebuie să fie **formatat la a doua zecimală**
- Dacă primiți un nume al orașului **invalid**  **sau** o valoare invalidă a vânzărilor (număr negativ), tipăriți "**error**"

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| London | 120.00 | 
| 1500 | |  


| **Intrare** | **Ieșire** |
| --- | --- | 
| Moscow | error |
| -50 | |

[/task-description]
[tests]
[test open]
[input]
London
1500
[/input]
[output]
120.00
[/output]
[/test]
[test open]
[input]
Moscow
-50
[/input]
[output]
error
[/output]
[/test]
[test]
[input]
Sydney
499.99
[/input]
[output]
27.50
[/output]
[/test]
[test]
[input]
New York
3874.50
[/input]
[output]
387.45
[/output]
[/test]
[test]
[input]
London
0.6
[/input]
[output]
0.03
[/output]
[/test]
[test]
[input]
London
501
[/input]
[output]
35.07
[/output]
[/test]
[test]
[input]
London
10005
[/input]
[output]
1200.60
[/output]
[/test]
[test]
[input]
New York
500
[/input]
[output]
22.50
[/output]
[/test]
[test]
[input]
New York
1000
[/input]
[output]
75.00
[/output]
[/test]
[test]
[input]
New York
9999.9999
[/input]
[output]
1000.00
[/output]
[/test]
[test]
[input]
New York
350824
[/input]
[output]
45607.12
[/output]
[/test]
[test]
[input]
Sydney
1.25
[/input]
[output]
0.07
[/output]
[/test]
[test]
[input]
Sydney
1000
[/input]
[output]
80.00
[/output]
[/test]
[test]
[input]
Sydney
8543.86
[/input]
[output]
1025.26
[/output]
[/test]
[test]
[input]
Sydney
10000.01
[/input]
[output]
1450.00
[/output]
[/test]
[test]
[input]
Madrid
1500
[/input]
[output]
error
[/output]
[/test]
[test]
[input]
Sydney
-20
[/input]
[output]
error
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Point on Rectangle Border
[code-task title="Point on Rectangle Border" taskId="pb-java-Conditional-Statements-A-Point-on-Rectangle-Border" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a verifica dacă un `punct {x, y}` este **pe** una dintre laturile unui dreptunghi `{x1, y1} - {x2, y2}`.

## Intrare
Intrarea provine de pe consolă și constă în **6 linii, introduse de utilizator: numere reale x1, y1, x2, y2, x și y** (va fi întotdeauna adevărat că **x1 < x2** și **y1 < y2**).

## Ieșire
Dacă punctul se află pe una dintre laturile dreptunghiului:
- Tipăriți "**Border**"

Dacă punctul NU se află pe o latură:
- Tipăriți "**Inside / Outside**"

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | Inside / Outside |
| -3 | |
| 12 | |
| 3 | |
| 8 | |
| -1 | | 

| **Intrare** | **Ieșire** |
|  --- | --- |
| 2 | Border|
| -3 | |
| 12 | |
| 3 | |
| 12 | |
| -1 | |

[hints]
[hint]
Utilizați una sau mai multe instrucțiuni condiționale **if** cu operații logice. Un punct `{x, y}` se află pe o latură a unui dreptunghi `{x1, y1} - {x2, y2}`, dacă una dintre condițiile specificate este îndeplinită:

- **x** este egal cu **x1** sau **x2** și în același timp **y** este între **y1** și **y2**
- **y** este egal cu **y1** sau **y2** și în același timp **x** este între **x** și **x2**
[/hint]
[hint]
Puteți verifica condițiile de mai sus folosind o construcție mai complicată **if** - **else** sau folosind câteva instrucțiuni condiționale mai simple sau **instrucțiuni imbricate if-else**.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
2
-3
12
3
8
-1
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test open]
[input]
2
-3
12
3
12
-1
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
-8
-1
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
80
-1
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
-8
-10
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
8
100.5
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
-1
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
6.28
-3
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
10
3
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
3
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
1
3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
4
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
12
4
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
13.456
3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
14
-3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
12
-4
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
-5
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
1.43
-3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Summer Outfit
[code-task title="Summer Outfit" taskId="pb-java-Conditional-Statements-A-Summer-Outfit" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a-l ajuta pe prietenul vostru să își aleagă hainele **în funcție de partea zilei și de temperatură (în grade; Celsius)**.

Prietenul vostru are planuri diferite pentru ținută în funcție de fiecare parte a zilei și de temperatură - vedeți **tabelul** de mai jos.

| **O parte din zi / Grade** | **Morning** | **Afternoon** | **Evening** |
| --- | --- | --- | --- |
| 10 <= deg <= 18 | Outfit: Sweatshirt | Outfit: Shirt | Outfit: Shirt |
| | Shoes: Sneakers | Shoes: Moccasins | Shoes: Moccasins |
| 18 < deg <= 24 | Outfit: Shirt | Outfit: T-Shirt | Outfit: Shirt |
| | Shoes: Moccasins | Shoes: Sandals | Shoes: Moccasins |
| deg >= 25 | Outfit: T-Shirt | Outfit: Swim Suit | Outfit: Shirt |
| | Shoes: Sandals | Shoes: Barefoot | Shoes: Moccasins |


## Intrare
**Citiți două linii de intrare:**
- **Grade** - un număr întreg în intervalul \[10…42\]
- **O parte din zi**: "Morning", "Afternoon", "Evening"

## Ieșire
- Imprimați pe consolă o linie **unică**:
    - "It's \{degrees\} degrees, get your \{outfit\} and \{shoes\}."

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 16 | It\'s 16 degrees, get your Sweatshirt and Sneakers. |
| Morning | |

[/task-description]
[tests]
[test open]
[input]
16
Morning
[/input]
[output]
It's 16 degrees, get your Sweatshirt and Sneakers.
[/output]
[/test]
[test open]
[input]
22
Afternoon
[/input]
[output]
It's 22 degrees, get your T-Shirt and Sandals.
[/output]
[/test]
[test]
[input]
28
Evening
[/input]
[output]
It's 28 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
18
Afternoon
[/input]
[output]
It's 18 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
24
Morning
[/input]
[output]
It's 24 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
32
Evening
[/input]
[output]
It's 32 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
18
Evening
[/input]
[output]
It's 18 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
25
Afternoon
[/input]
[output]
It's 25 degrees, get your Swim Suit and Barefoot.
[/output]
[/test]
[test]
[input]
25
Morning
[/input]
[output]
It's 25 degrees, get your T-Shirt and Sandals.
[/output]
[/test]
[test]
[input]
10
Morning
[/input]
[output]
It's 10 degrees, get your Sweatshirt and Sneakers.
[/output]
[/test]
[test]
[input]
24
Afternoon
[/input]
[output]
It's 24 degrees, get your T-Shirt and Sandals.
[/output]
[/test]
[test]
[input]
21
Morning
[/input]
[output]
It's 21 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
11
Evening
[/input]
[output]
It's 11 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Prolemă: Fishing Boat
[code-task title="Fishing Boat" taskId="pb-java-Conditional-Statements-A-Fishing-Boat" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Tony și prietenii săi au decis să închirieze o barcă de pescuit - tariful de închiriere depinde de **sezon** și de **numărul** de pescari.

**Prețul** în funcție de **sezon**:
- **Primăvara - 3000 $**
- **Vara și toamna - 4200 $**
- **Iarna - 2600 $**

**Prețul** pe baza **numărului** de pescari utilizează **reducerile:**
- Dacă grupul este **până la 6 persoane (inclusiv) - 10% reducere**
- Dacă membrii grupului se află în intervalul \[7 .... 11\] - **15% reducere**
- Dacă grupul are **12 sau mai multe persoane - 25% reducere**

Pescarii folosesc o reducere suplimentară de **5% dacă sunt un număr par**.

Dacă este **toamnă** - aceștia **NU** primesc reducere suplimentară.

Scrieți un **program** pentru **a calcula** dacă pescarii vor strânge **suficienți** bani pentru a închiria barca.

## Intrare
Intrarea este alcătuită exact din **3 linii**:
- **Bugetul** grupului - număr real în intervalul \[1 .... 8000\]
- **Sezon** - Șir: "**Spring**", "**Summer**", "**Autumn**", "**Winter**"
- **Numărul** de pescari - număr întreg în intervalul \[4 .... 18\]

## Ieșire
Imprimați pe consolă o linie **unică**:
- Dacă bugetul **ESTE** suficient: "**Yes! You have** \{**money left**\} **dollars left.**"
- Dacă bugetul **NU ESTE** suficient: "**Not enough money! You need** \{**money needed**\} **dollars.**"

**Prețurile trebuie formatate la a doua zecimală.**

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3000 | Not enough money! You need 570.00 dollars. |
| Summer | |
| 11 | |

| **Intrare** | **Ieșire** |
| --- | --- |
| 2000 | Yes! You have 50.00 dollars left. |
| Winter | |
| 13 | |

| **Intrare** | **Ieșire** |
| --- | --- |
| 3600 | Yes! You have 1035.00 dollars left. |
| Spring | |
| 6 | |

[hints]
[hint]
Determinați reducerea pentru pescari și dacă există vreo reducere suplimentară.
Vara, pescuitul costă 4200 USD
**11 pescari beneficiază de 15% reducere** -> **4200 - 15% = 3570** $, numărul lor este **impar**, deci **nu** folosesc **reducere suplimentară**.
3000 <= 3570, deci mai au nevoie de 570,00 $ 
[/hint]
[hint]
Imprimați rezultatul corect.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
3000
Summer
11
[/input]
[output]
Not enough money! You need 570.00 dollars.
[/output]
[/test]
[test open]
[input]
3600
Autumn
6
[/input]
[output]
Not enough money! You need 180.00 dollars.
[/output]
[/test]
[test open]
[input]
2000
Winter
13
[/input]
[output]
Yes! You have 50.00 dollars left.
[/output]
[/test]
[test]
[input]
3780
Autumn
6
[/input]
[output]
Yes! You have 0.00 dollars left.
[/output]
[/test]
[test]
[input]
1949
Winter
13
[/input]
[output]
Not enough money! You need 1.00 dollars.
[/output]
[/test]
[test]
[input]
3570
Summer
11
[/input]
[output]
Yes! You have 0.00 dollars left.
[/output]
[/test]
[test]
[input]
4100
Spring
15
[/input]
[output]
Yes! You have 1850.00 dollars left.
[/output]
[/test]
[test]
[input]
2860
Spring
4
[/input]
[output]
Yes! You have 295.00 dollars left.
[/output]
[/test]
[test]
[input]
2231
Winter
6
[/input]
[output]
Yes! You have 8.00 dollars left.
[/output]
[/test]
[test]
[input]
1390
Winter
4
[/input]
[output]
Not enough money! You need 833.00 dollars.
[/output]
[/test]
[test]
[input]
1000
Winter
1
[/input]
[output]
Not enough money! You need 1340.00 dollars.
[/output]
[/test]
[test]
[input]
2500
Winter
1
[/input]
[output]
Yes! You have 160.00 dollars left.
[/output]
[/test]
[test]
[input]
3650
Summer
8
[/input]
[output]
Yes! You have 258.50 dollars left.
[/output]
[/test]
[test]
[input]
3650
Summer
8
[/input]
[output]
Yes! You have 258.50 dollars left.
[/output]
[/test]
[test]
[input]
4100
Spring
1
[/input]
[output]
Yes! You have 1400.00 dollars left.
[/output]
[/test]
[test]
[input]
3800
Summer
10
[/input]
[output]
Yes! You have 408.50 dollars left.
[/output]
[/test]
[test]
[input]
4300
Spring
11
[/input]
[output]
Yes! You have 1750.00 dollars left.
[/output]
[/test]
[test]
[input]
4300
Spring
11
[/input]
[output]
Yes! You have 1750.00 dollars left.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Flowers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/RO/interactive-programming-basics-with-java-conditional-statements-advanced-42-problem-flowers-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Flowers" taskId="pb-java-Conditional-Statements-A-Flowers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

O piață de flori oferă **3 tipuri de flori: lilii**, **trandafiri** și **lalele**. 

Prețurile depind de sezon:

| **Season** | **Lilia** | **Rose** | **Tulip** |
| --- | --- | --- | --- |
| **Spring / Summer** | **2.00$** | **4.10$** | **2.50$** |
| **Autumn / Winter** | **3.75$** | **4.50$** | **4.15$** |

La sărbători prețurile tuturor florilor **cresc cu 15%**.

Piața oferă următoarele **reduceri**:
- Dacă cumpărați **7 sau mai multe lalele în timpul primăverii** - **5% din prețul întregului buchet**
- Dacă cumpărați **10 sau mai mulți trandafiri în timpul iernii** - **10% din prețul întregului buchet**
- Dacă cumpărați **mai mult de 20 de flori în total în orice anotimp - 20% din prețul întregului buchet**

**Toate reducerile trebuie aplicate după creșterea prețurilor în vacanță!**

Există un comision pentru aranjarea buchetului, care va fi **întotdeauna** 2 dolari și trebuie adăugat la sfărșitul calculelor.

Scrieți un program pentru a **calcula** prețul unui buchet.

## Intrare
Intrarea este citită din **consola** și este exact **5 linii**:
- Numărul **liliilor** cumpărate - număr întreg în intervalul \[0 ... 200\]
- Numărul de **trandafiri** cumpărați - număr întreg în intervalul \[0 ... 200\]
- Numărul de **lalele** cumpărate - număr întreg în intervalul \[0 ... 200\]
- **Sezon** - \[Spring, Summer, Аutumn, Winter\]
- Dacă ziua este **de sărbătoare** - \[Y - yes / N - no\]

## Ieșire
Imprimați pe consolă un **număr unic** - prețul buchetului, **formatat la a doua zecimală**.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | 46.14 |
| 4 | |
| 8 | |
| Spring | |
| Y | |

[/task-description]
[tests]
[test open]
[input]
2
4
8
Spring
Y
[/input]
[output]
46.14
[/output]
[/test]
[test]
[input]
3
10
9
Winter
N
[/input]
[output]
69.39
[/output]
[/test]
[test]
[input]
10
10
10
Autumn
N
[/input]
[output]
101.20
[/output]
[/test]
[test]
[input]
4
3
8
Winter
N
[/input]
[output]
63.70
[/output]
[/test]
[test]
[input]
3
14
0
Summer
N
[/input]
[output]
65.40
[/output]
[/test]
[test]
[input]
0
0
0
Summer
Y
[/input]
[output]
2.00
[/output]
[/test]
[test]
[input]
200
200
200
Winter
N
[/input]
[output]
1787.60
[/output]
[/test]
[test]
[input]
100
8
80
Spring
Y
[/input]
[output]
380.27
[/output]
[/test]
[test]
[input]
10
15
22
Winter
N
[/input]
[output]
143.34
[/output]
[/test]
[test]
[input]
33
33
33
Autumn
Y
[/input]
[output]
378.46
[/output]
[/test]
[test]
[input]
3
1
3
Winter
Y
[/input]
[output]
34.43
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]
