# Homework

[slide hideTitle]
# Problem: Fruit or Vegetable
[code-task title="Fruit or Vegetable" taskId="pb-java-Conditional-Statements-A-fruit-or-vegetable" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a verifica fructele sau legumele:

* Citiți o singură linie de intrare: un articol din legume
* Fructe: banana, apple, kiwi, cherry, lemon, grapes
* Legume: cucumber, pepper, carrot, onion
* Imprimați: **"vegetable"**, **"fruit"** sau **"unknown"**

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| lemon | fruit |

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
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
# Problem: Day of Week
[code-task title="Day of Week" taskId="pb-java-Conditional-Statements-A-day-of-week" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a imprima ziua săptămânii ca un cuvânt:

* Citire și număr întreg **n**: **ziua săptămânii** în intervalul \[1..7\]
* Imprimați **numele zilei** (ca un cuvânt, în engleză)
* Imprimați **"Error"**, dacă numărul nu se află în intervalul dat

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 | Monday |

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
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
1
[/input]
[output]
Monday
[/output]
[/test]
[test]
[input]
8
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
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Vowel or Consonant
[code-task title="Vowel or Consonant" taskId="pb-java-Conditional-Statements-A-vowel-or-consonant" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code here
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a verifica o literă pentru vocală sau consoană:

* Citiți o **literă** din alfabetul englez
* Imprimați **"Vowel"** sau **"Consonant"**

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| a | Vowel |

## Exemplu
| --- | --- |
| B | Consonant |

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
b
[/input]
[output]
Consonant
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Product of 3 Numbers
[code-task title="Product of 3 Numbers" taskId="pb-java-Conditional-Statements-A-product-of-3-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code here
    }
}
```
[/code-editor]
[task-description]
# Descriere
Calculați semnul produsului de 3 numere:

* Citiți **3 numere în virgulă mobilă**
* Imprimați semnul al produsului celor 3 numere introduse: **positive**, **negative** sau **zero**
* Încercați să faceți acest lucru **fără a înmulți** numerele

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 2 | negative |
| 3 |  |
| -1 |  |

## Exemplu
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
# Problem: Sorted Numbers
[code-task title="Sorted Numbers" taskId="pb-java-Conditional-Statements-A-Sorted-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code here
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program, care verifică **3 numere sortate**:

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

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 3 | Not sorted |
| 5 |  |
| 2 |  |


## Exemplu
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
# Problem: Vacation Expenses
[code-task title="Vacation Expenses" taskId="pb-java-Conditional-Statements-A-Vacation-Expenses" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code here
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program, care calculează cheltuielile de vacanță:

* Citiți sezonul, tipul de cazare și numărul zilelor
* Imprimați **cheltuielile totale**, pe baza tabelului de prețuri de mai jos, formatat la **a doua cifră ** după punctul zecimal

| Sezon | Hotel | Camping | Reducere |
|-----|------|-------|--------|
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

[/task-description]
[tests]
[test]
[input]
Winter
Hotel
5
[/input]
[output]
180.00
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Cinema
[code-task title="Cinema" taskId="pb-java-Conditional-Statements-A-Cinema" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code here
    }
}
```
[/code-editor]
[task-description]
# Descriere
Calculați **prețul** pentru toate biletele pentru un film cinematografic:
* Citiți **tipul filmului**, **rândurile** și **locurile pe rând** din cinematograf
* Tipăriți **prețul total** pentru toate locurile **formatate** la a doua cifră după punctul zecimal

|Type|Price|
|-----|----|
|Premiere|12.00|
|Normal|7.50|
|Discount|5.00|

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| Normal | 810.00 |
| 12 |  |
| 9 |  |

[/task-description]
[tests]
[test]
[input]
Normal
12
9
[/input]
[output]
810.00
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Operations with Numbers
[code-task title="Operations with Numbers" taskId="pb-java-Conditional-Statements-A-operations-with-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code here
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a aplica un operator pentru două numere date:

* Citiți **două numere întregi** și **operatorul matematic** de pe consolă
* Operatorul aritmetic ar putea fi: "+", "-", "/", "%" și "*"
* Rezultatul trebuie să fie în următorul **format**: "\{N1\} \{operator\} \{N2\} = \{result\}"

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
# Problem: ATM
[code-task title="ATM" taskId="pb-java-Conditional-Statements-A-ATM" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code here
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a simula retragerea unui bancomat:

Citiți: **balance**, **withdraw** și **limit**
* Imprimați `The withdraw was successful.` Dacă soldul este suficient
* Imprimați `The daily limit was exceeded.` Dacă limita este depășită
* Imprimați `Insufficient availability.` dacă soldul nu este sufficient

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 420 | The withdraw was successful. |
| 20 |  |
| 25 |  |

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 10 | The daily limit was exceeded. |
| 50 | Insufficient availability. |
| 20 |  |

[/task-description]
[tests]
[test]
[input]
420
20
25
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Biggest of Five Numbers
[code-task title="Biggest of Five Numbers" taskId="pb-java-Conditional-Statements-A-Biggest-of-five-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code here
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a găsi cel mai mare dintre 5 numere
* Citiți **5 numere întregi**
* Imprimați cel mai mare număr.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| -1 | -1 |
| -2 |  |
| -3 |  |
| -4 |  |
| -5 |  |
[/task-description]
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
[test]
[input]
1
2
3
4
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Personal Titles
[code-task title="Personal Titles" taskId="pb-java-Conditional-Statements-A-Personal-Titles" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un program **consolă** care să citească **vârstă (număr în virgulă mobilă)** și **sex** ("**m**" sau "**f**") și să imprime o adresă în funcție de aceste principii:
- "**Mr.**" - un bărbat (sex "**m**") cu vârsta de 16 ani sau mai mult
- "**Master**" - un băiat (sex "**m**") sub 16 ani
- "**Ms.**" - o femeie (sex "**f**") cu vârsta de 16 ani sau mai mult
- "**Miss**" - o fată (sex "**f**") sub 16 ani

## Intrare
Intrat de pe consolă:
- vârstă - număr în virgulă mobilă
- sex - "**m**"sau "**f**"

## Ieșire
Imprimați adresa așteptată pe o singură linie.


## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 25 | Ms. |
| f | |

## Exemplu
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
25
f
[/input]
[output]
Ms.
[/output]
[/test]
[test]
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
# Problem: Fuel Tank
[code-task title="Fuel Tank" taskId="pb-java-Conditional-Statements-A-Fuel-tank" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care să știe dacă rezervorul unui vehicul necesită realimentare sau nu.

## Intrare
Intrarea este formată din 2 linii:
- Mai întâi trebuie să citiți de pe consolă tipul de combustibil - text cu opțiuni: "Diesel", "Gasoline" sau "Gas"
- A doua linie de intrare citește combustibilul din rezervor în litri

## Ieșire
- Dacă combustibilul este altul decât tipărirea specificată "Invalid fuel!".
- În caz contrar, dacă combustibilul din rezervor este mai mare sau egal cu 25 litri de imprimare:
     - "You have enough \{type of fuel\}."
     - Tipul de combustibil trebuie imprimat cu litere mici.
- Altfel tipăriți:
     - "Fill your tank with \{type of fuel\}!". 
     - Tipul de combustibil trebuie imprimat cu litere mici.

### Exemplu

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
# Problem: Trade Commissions
[code-task title="Trade Commissions" taskId="pb-java-Conditional-Statements-A-Trade-Commisions" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

O companie plătește angajaților săi următoarele comisioane în funcție de orașul în care lucrează și de valoarea vânzărilor:

| **Vânzări / Oraș** | London | New York | Sydney|
| --- | --- | --- | --- | 
| \[0-500\] | 5% | 4.5% | 5.5% |
| \[501-1000\] | 7% | 7.5% | 8% | 
| \[1001-10000\] | 8% | 10% | 12% |
| > 10000| 12% | 13% | 14.5% |

Scrieți un program de consolă care să citească ca intrare **numele unui oraș** și **suma vânzărilor** și să calculeze valoarea **comisionului comercial**.

## Intrare
Citiți de pe consolă două linii:
- Numele unui oraș - Șir
- Valoarea vânzărilor - număr în virgulă mobilă

## Ieșire
- Tipăriți pe consolă valoarea calculată a comisionului comercial.
- Rezultatul ar trebui să fie **formatat cu a doua zecimală**.
- Dacă primiți **invalid** numele orașului **sau** suma vânzărilor (număr negativ), tipăriți "**error**".

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
Moscow
-50
[/input]
[output]
error
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
# Problem: Point on Rectangle Border
[code-task title="Point on Rectangle Border" taskId="pb-java-Conditional-Statements-A-Point-on-Rectangle-Border" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a verifica dacă un **punct {x, y}** este **pe** una dintre laturile unui dreptunghi **{x1, y1} - {x2, y2}**.

## Intrare
Intrarea provine de pe consolă și constă din **6 linii, introduse de utilizator: numere reale x1, y1, x2, y2, x și y** (va fi întotdeauna adevărat că**x1 < x2** și **y1 < y2**).

## Ieșire
Dacă punctul se află pe una dintre laturile dreptunghiului:
- Tipăriți "**Border**"

Dacă punctul NU se află pe o latură:
- Tipăriți "**Inside / Outside**"

## Exemplu
| **Intrare** | **Ieșire** 
| --- | --- |
| 2 | Inside / Outside |
| -3 | |
| 12 | |
| 3 | |
| 8 | |
| -1 | | 

| **Intrare** | **Ieșire** 
|  --- | --- |
| 2 | Border|
| -3 | |
| 12 | |
| 3 | |
| 12 | |
| -1 | |

\* **Sugestie**: utilizați una sau mai multe instrucțiuni condiționale **if** cu operații logice. Un punct **{x, y}** se află lângă un dreptunghi **{x1, y1} - {x2, y2}**, dacă una dintre condițiile specificate este îndeplinită:

- **x** este egal cu **x1** sau **x2** și în același timp **y** este între **y1** și **y2**
- **y** este egal cu **y1** sau **y2** și în același timp **x** este între **x** și **x2**

Puteți verifica condițiile de mai sus folosind o construcție mai complicată **if** - **else** sau folosind câteva instrucțiuni condiționale mai simple sau **instrucțiunilor imbricate if-else**.

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
# Problem: Summer Outfit
[code-task title="Summer Outfit" taskId="pb-java-Conditional-Statements-A-Summer-Outfit" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Este vară cu vreme schimbătoare și Victor are nevoie de ajutorul vostru.

Scrieți un program care să-i recomande lui Victor ce haine să aleagă **în funcție de partea de zi și de grade (Celsius)**.

Prietenul vostru are planuri diferite pentru fiecare parte a zilei, cu ținute diferite - vedeți **tabelul** de mai jos.

| **O parte din zi / Grade** | Morning | Afternoon | Evening |
| --- | --- | --- | --- |
| 10 <= deg <= 18 | Outfit: Sweatshirt | Outfit: Shirt | Outfit: Shirt |
| | Shoes: Sneakers | Shoes: Moccasins | Shoes: Moccasins |
| 18 < deg <= 24 | Outfit: Shirt | Outfit: T-Shirt | Outfit: Shirt |
| | Shoes: Moccasins | Shoes: Sandals | Shoes: Moccasins |
| deg >= 25 | Outfit: T-Shirt | Outfit: Swim Suit | Outfit: Shirt |
| | Shoes: Sandals | Shoes: Barefoot | Shoes: Moccasins |


## Intrare
**Citiți două linii de intrare:**
- **grade** - un număr întreg în intervalul \[10…42\]
- **O parte din zi**- text - posibilități: "Morning", "Afternoon", "Evening"

## Ieșire
- Imprimați pe consolă o linie **unică**:
    - It's \{degrees\} degrees, get your \{outfit\} and \{shoes\}."

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
# Prolem: Fishing Boat
[code-task title="Fishing Boat" taskId="pb-java-Conditional-Statements-A-Fishing-Boat" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Tony și prietenii săi au decis să închirieze o barcă - chiria depinde de **sezon** și de **numărul** de pescari.

**Prețul** pe baza **sezonului**:
- **Primăvară - 3000 $**
- **Vara și toamna - 4200 $**
- **Iarna - 2600 $**

**Prețul** pe baza **numărului** de pescari utilizează **reducere:**
- Dacă grupul este **până la 6 persoane (inclusiv) - 10% reducere**
- Dacă membrii grupului se află în intervalul \[7…11\] -  **15% reducere**
- Dacă grupul are **12 sau mai multe persoane - 25% reducere**

Pescarii folosesc încă o reducere de **5% dacă sunt un număr par**, cu excepția cazului în care **NU** este toamna - atunci **NU** au reducere suplimentară.

Scrieți un **program** pentru ** a calcula** dacă pescarii vor strânge **suficienți** bani.

## Intrare
Intrarea este alcătuită exact din **3 linii**:
- **bugetul** al grupului - număr real în intervalul \[1…8000\]
- **Sezon** - Șir: "**Spring**", "**Summer**", "**Autumn**", "**Winter**"
- **Numărul** de pescari - număr întreg în intervalul \[4…18\]

## Ieșire
Imprimați pe consolă o linie **unică**:
- Dacă bugetul **ESTE** suficient: "Yes! You have \{money left\} dollars left."
- Dacă bugetul **NU este** suficient: "Not enough money! You need \{money needed\} dollars."

**Prețurile trebuie formatate cu a doua zecimală.**

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3000 | Not enough money! You need 570.00 dollars. |
| Summer | |
| 11 | |

### Comentarii
- Vara, pescuitul costă 4200 USD,
- **11 pescari beneficiază de 15% reducere** -> **4200 - 15% = 3570** $, numărul lor este **impar**, deci **nu** folosesc **reducere suplimentară**.
- 3000 <= 3570, deci au nevoie de 570,00 $ mai mult

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2000 | Yes! You have 50.00 dollars left. |
| Winter | |
| 13 | |

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3600 | Yes! You have 1035.00 dollars left. |
| Spring | |
| 6 | |

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
# Problem: Flowers
[code-task title="Flowers" taskId="pb-java-Conditional-Statements-A-Flowers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

O piață de flori oferă **3tipuri de flori: lilia**, **trandafiri** și **lalele**. Prețurile depind de sezon:

| **Season** | **Lilia** | **Rose** | **Tulip** |
| --- | --- | --- | --- |
| **Spring / Summer** | **2.00$** | **4.10$** | **2.50$** |
| **Autumn / Winter** | **3.75$** | **4.50$** | **4.15$** |

La sărbători prețurile tuturor florilor **cresc cu 15%**.

Piața oferă următoarele **reduceri**:
- Dacă cumpărați **7 sau mai multe lalele în timpul primăverii** - **5% din prețul întregului buchet**
- Dacă cumpărați **10 sau mai mulți trandafiri în timpul iernii** - **10% din prețul întregului buchet**
- Dacă cumpărați **mai mult de 20 de flori în total în TOATE anotimpurile - 20% din prețul întregului buchet**

**Toate reducerile trebuie aplicate după creșterea prețurilor în vacanță!**

Prețul aranjamentului buchetului este **întotdeauna** 2 dolari.

Scrieți un program pentru a **calcula** prețul unui buchet.

## Intrare
Intrarea este citită din **consola** și este exact **5 linii**:
- Numărul **liliilor** cumpărate - număr întreg în intervalul \[0 ... 200\]
- Numărul de **trandafiri** cumpărați - număr întreg în intervalul \[0 ... 200\]
- Numărul de **lalele** cumpărate - număr întreg în intervalul \[0 ... 200\]
- **Sezon** - \[Spring, Summer, Аutumn, Winter\]
- Dacă ziua este **de sărbătoare** - \[Y - yes / N - no\]

## Ieșire
Imprimați pe consolă un **număr unic** - prețul florilor, **formatat la a doua zecimală**.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | 46.14 |
| 4 | |
| 8 | |
| Spring | |
| Y | |

### Comentarii
- **Preț: 2\*2.00 + 4\*4.10 + 8\*2.50 = 40.40 $** 
- **Vacanță** 40.40 + **15%** = 46.46 $
- **Reducere de 5% pentru mai mult de 7 lalele în primăvară** - 44.14
- În total florile sunt de 20 sau mai puțin - nu există **o reducere**
- **44.14 + 2 pentru aranjament = 46.14 $** 

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









[slide]
# Homework Results

[tasks-results/]

[/slide]