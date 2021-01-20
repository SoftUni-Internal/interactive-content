# Teme pentru acasa

[slide hideTitle]
# Problem: Guess the Password
[code-task title="Guess the Password" taskId="pb-java-Conditional-Statements-guess-the-password" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a verifica o parolă:

  * Citește un șir: parola **ghici**.
  * Imprima **"Welcome"** acă presupunerea parolei este **"s3cr3t!"**.
  * PImprima **"Wrong password!"** în toate celelalte cazuri.

## Exemplu:
| **Input** | **Output** |
| --- | --- |
| s3cr3t! | Welcome |
| | |

| **Input** | **Output** |
| --- | --- |
| qwerty | Wrong password! |
| | |

[/task-description]
[tests]
[test open]
[input]
s3cr3t!
[/input]
[output]
Welcome
[/output]
[/test]
[test open]
[input]
random password
[/input]
[output]
Wrong password!
[/output]
[/test]
[test]
[input]
s3cr3t!
[/input]
[output]
Welcome
[/output]
[/test]
[test]
[input]
wrong
[/input]
[output]
Wrong password!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Boiling Water
[code-task title="Boiling Water" taskId="pb-java-Conditional-Statements-Boiling-water" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care să verifice dacă este apă caldă:

  * Citește un număr în virgulă mobilă: **temperatura** a apei (în ° C).
  * Imprima **"The water is boiling"** dacă numărul este **> 100**.
  * Imprima **"The water is not hot enough"** în toate celelalte cazuri.

  
## Exemplu
| **Input** | **Output** |
| --- | --- |
| 104.8 | The water is boiling |
| | |

| **Input** | **Output** |
| --- | --- |
| 29 | The water is not hot enough |
| | |

[/task-description]
[tests]
[test open]
[input]
104.8
[/input]
[output]
The water is boiling
[/output]
[/test]

[test open]
[input]
29
[/input]
[output]
The water is not hot enough
[/output]
[/test]
[test]
[input]
105
[/input]
[output]
The water is boiling
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
The water is not hot enough
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Speed Info
[code-task title="Speed Info" taskId="pb-java-Conditional-Statements-Speed-Info" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a verifica viteza rapidă/lentă:

  * Citește **speed** (un număr în virgulă mobilă).
  * Imprima **"Slow"** dacă viteza este **<= 30**.
  * Imprima **"Fast"** dacă viteza este **> 30**.


## Exemplu
| **Input** | **Output** |
| --- | --- |
| 30 | Slow |
| | | 

| **Input** | **Output** |
| --- | --- |
| 60 | Fast |
| | | 

[/task-description]
[tests]
[test open]
[input]
30
[/input]
[output]
Slow
[/output]
[/test]
[test open]
[input]
60
[/input]
[output]
Fast
[/output]
[/test]
[test]
[input]
25
[/input]
[output]
Slow
[/output]
[/test]
[test]
[input]
43
[/input]
[output]
Fast
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Area of Figures
[code-task title="Area of Figures" taskId="pb-java-Conditional-Statements-Area-of-Figures" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a calcula aria diferitelor figuri:
  * Citește un șir: figura ** tip **.
  * Verifică dacă cifra introdusă este **square**, **rectangle** sau **circle**.
  * Citește un număr pentru pătrat și cerc sau două numere pentru dreptunghi.
    * Numerele vor fi în virgulă mobilă.
  * Imprimă zona calculată **formatată** la a doua cifră după punctul zecimal.
  * * Pentru figura necunoscută imprima **"Unknown figure"**.

## Exemple:

| **Input** | **Output** |
| --- | --- |
| square | 25.00 |
| 5 |  |
| | |

| **Input** | **Output** |
| --- | --- |
| rectangle | 30.00 |
| 3 |  |
| 10 |  |
| | | 

| **Input** | **Output** |
| --- | --- |
| trapezoid | Unknown figure |
| | | 

| **Input** | **Output** |
| --- | --- |
| circle | 19.63 |
| 2.5 | |
| | | 
[/task-description]
[tests]
[test open]
[input]
square
5
[/input]
[output]
25.00
[/output]
[/test]
[test open]
[input]
rectangle
3
10
[/input]
[output]
30.00
[/output]
[/test]
[test open]
[input]
trapezoid
[/input]
[output]
Unknown figure
[/output]
[/test]
[test open]
[input]
circle
2.5
[/input]
[output]
19.63
[/output]
[/test]
[test]
[input]
square
6
[/input]
[output]
36.00
[/output]
[/test]
[test]
[input]
rectangle
5
10
[/input]
[output]
50.00
[/output]
[/test]
[test]
[input]
circle
3.5
[/input]
[output]
38.48
[/output]
[/test]
[test]
[input]
figure
[/input]
[output]
Unknown figure
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Tickets
[code-task title="Tickets" taskId="pb-java-Conditional-Statements-Tickets" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a **calcula** prețul biletului:

  * Citește tipul biletului: fie **student**, fie **obișnuit**
  * Imprima **prețul** în următorul format "$\{price\}":
    * Prețul trebuie să fie **formatat** la a doua cifră după punctul zecimal.
  * Prețul biletului de tip student: **1.00**.
  * Prețul biletului d etip regulat: **1.60**.
  * Pentru un tip nevalid imprima **"Invalid ticket type!"**.
  
## Exemplu
| **Input** | **Output** |
| --- | --- |
| student | $1.00 |
| | | 

[/task-description]
[tests]
[test open]
[input]
student
[/input]
[output]
$1.00
[/output]
[/test]
[test open]
[input]
regular
[/input]
[output]
$1.60
[/output]
[/test]
[test open]
[input]
discount
[/input]
[output]
Invalid ticket type!
[/output]
[/test]
[test]
[input]
student
[/input]
[output]
$1.00
[/output]
[/test]
[test]
[input]
regular
[/input]
[output]
$1.60
[/output]
[/test]
[test]
[input]
ticket
[/input]
[output]
Invalid ticket type!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Coffee Shop
[code-task title="Coffee Shop" taskId="pb-java-Conditional-Statements-Coffee-Shop" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a calcula prețul băuturii într-o cafenea:

  * Citește o băutură: fie **"cafea"** ori **"ceai"**.
  * Citește adăugare: fie **"zahăr"** sau **"no"**.
  * Imprima prețul în formatul`"Final price: ${price}"`.
    * Prețul trebuie să fie **formatat** la a doua cifră după punctul zecimal.
  
Prețuri:

  * Preţul de cafea: **1.00**
  * Preţul de ceai: **0.60**
  * Sugar price: **0.40**

## Exemple
| **Input** | **Output** |
| --- | --- |
| coffee | Final price: $1.40 |
| sugar |  |
| | |

## Example
| **Input** | **Output** |
| --- | --- |
| tea | Final price: $0.60 |
| no |  |
| | |

[/task-description]
[tests]
[test open]
[input]
coffee
sugar
[/input]
[output]
Final price: $1.40
[/output]
[/test]
[test open]
[input]
tea
no
[/input]
[output]
Final price: $0.60
[/output]
[/test]
[test]
[input]
coffee
sugar
[/input]
[output]
Final price: $1.40
[/output]
[/test]
[test]
[input]
coffee
no
[/input]
[output]
Final price: $1.00
[/output]
[/test]
[test]
[input]
tea
sugar
[/input]
[output]
Final price: $1.00
[/output]
[/test]
[test]
[input]
tea
no
[/input]
[output]
Final price: $0.60
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Valid Triangle
[code-task title="Valid Triangle" taskId="pb-java-Conditional-Statements-Valid-triangle" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a verifica dacă un triunghi este valid după dimensiunile sale:

  * Citește 3 numere întregi: the **laturile unui triunghi**.
  * Verifică dacă fiecare parte este mai mică decât suma celorlalte 2.
    * Imprima **"Valid Triangle"** dacă condiția de mai sus este îndeplinită.
    * Imprima **"Invalid Triangle"** în caz contrar.

    
## Exemplu:
| **Input** | **Output** |
| --- | --- |
| 3 | Valid Triangle |
| 4 |  |
| 5 |  |
| | |

[/task-description]
[tests]
[test open]
[input]
3
4
5
[/input]
[output]
Valid Triangle
[/output]
[/test]
[test open]
[input]
10
16
6
[/input]
[output]
Invalid  Triangle
[/output]
[/test]
[test]
[input]
6
8
10
[/input]
[output]
Valid Triangle
[/output]
[/test]
[test]
[input]
5
8
3
[/input]
[output]
Invalid Triangle
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Harvest
[code-task title="Harvest" taskId="pb-java-Conditional-Statements-Harvest" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

# Descriere
40% din cultura vinicolă este alocată dintr-o vie de X metri pătrați.

Din via de  1 metru pătrat se câștigă **Y kilograme de struguri**. 

Pentru 1 litru de vin sunt necesare **2.5 kg struguri**.

Cantitatea dorită de vin pentru vânzare este de **Z litri**. 

Scrieți un program care să calculeze cât de mult vin poate fi produs și dacă această cantitate este suficientă.
- - Dacă este suficient, restul este împărțit în mod egal între lucrătorii viei.

## Input
Intrarea este citită de pe consolă și constă din exact 4 rânduri:
- **X metru pătrat este via** - număr întreg în intervalul \[10 ... 5000 \]
- **struguri Y pentru un metru pătrat** - număr în virgulă mobilă în intervalul\[0.00 … 10.00\]
- **Z litre necesare pentru vin** - număr întreg în intervalul \[10 ... 600 \]
- **Număr de lucrători** - număr întreg în intervalul \[1 ... 20 \]

## Output
Următoarele ar trebui să fie tipărite pe consolă: 
-  Dacă vinul produs este mai mic decât este necesar:
    - "It will be a tough winter! More \{unattainable wine\} liters wine needed."
        - Rezultatul trebuie rotunjit la un număr întreg
- Dacă vinul produs este mai mare sau egal cu ceea ce era necesar:
    - "Good harvest this year! Total wine: \{Total wine\} liters."
        - Rezultatul trebuie rotunjit la un număr întreg
    -  "\{remaining wine\} liters left -> \{wine for 1 worker\} liters per person."
        - Ambele rezultate trebuie rotunjite la numărul întreg superior

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 650 | Good harvest this year! Total wine: 208 liters. |
| 2 | 33 liters left -> 11 liters per person. |
| 175 | |
| 3 | |
| | |

### Comentarii
- Struguri in total: 650 \* 2 = 1300
- Vin = 40% \* 1300/2.5 = 208
- 208 > 175 
- 208 \- 175 = 33 de litre rămân \-> 11 litre pentru persoana

## Exemplu
| **Input** | **Output** |
| --- |  --- |
| 1020 | It will be a tough winter! More 180 liters wine needed.|
| 1.5 | |
| 425 | |
| 4 | |
| | |

[/task-description]
[tests]
[test open]
[input]
650
2
175
3
[/input]
[output]
Good harvest this year! Total wine: 208 liters.
33 liters left -> 11 liters per person.
[/output]
[/test]
[test open]
[input]
1020
1.5
425
4
[/input]
[output]
It will be a tough winter! More 180 liters wine needed.
[/output]
[/test]
[test]
[input]
525
1.75
300
2
[/input]
[output]
It will be a tough winter! More 153 liters wine needed.
[/output]
[/test]
[test]
[input]
950
3
125
7
[/input]
[output]
Good harvest this year! Total wine: 456 liters.
331 liters left -> 48 liters per person.
[/output]
[/test]
[test]
[input]
2450
3.5
560
4
[/input]
[output]
Good harvest this year! Total wine: 1372 liters.
812 liters left -> 203 liters per person.
[/output]
[/test]
[test]
[input]
3000
0.5
333
10
[/input]
[output]
It will be a tough winter! More 93 liters wine needed.
[/output]
[/test]
[test]
[input]
320
0.00
600
5
[/input]
[output]
It will be a tough winter! More 600 liters wine needed.
[/output]
[/test]
[test]
[input]
750
2.5
300
5
[/input]
[output]
Good harvest this year! Total wine: 300 liters.
0 liters left -> 0 liters per person.
[/output]
[/test]
[test]
[input]
5000
5.5
245
20
[/input]
[output]
Good harvest this year! Total wine: 4400 liters.
4155 liters left -> 208 liters per person.
[/output]
[/test]
[test]
[input]
150
2.1
130
9
[/input]
[output]
It will be a tough winter! More 79 liters wine needed.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]





[slide hideTitle]
# Problem: Time + 15 Minutes
[code-task title="Time + 15 Minutes" taskId="pb-java-Conditional-Statements-time-15minutes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care citește de pe consolă **oră** și **minute** dintr-o zi de 24 de ore

## Input

Intrarea constă în **două** linii:
- Ore - numere întregi în intervalul \[0...23\]
- Minute - numere întregi în intervalul \[0...59\]

## Output
Imprima rezultatul în următorul format:"\{hours\}:\{minutes\}".
- Orele trebuie să fie formatate **fără zero**.
- Minutele trebuie trebuie să fie formatate **cu zero**.

## Exemplu:
| **Input** | **Output** |
| --- | --- |
| 11 | 11:23|
| 08 | |
| | |

| **Input** | **Output** |
| --- | --- |
| 1 | 2:01 | 
| 46 | |
| | |
[/task-description]
[tests]
[test open]
[input]
1
46
[/input]
[output]
2:01
[/output]
[/test]
[test open]
[input]
0
01
[/input]
[output]
0:16
[/output]
[/test]
[test]
[input]
23
59
[/input]
[output]
0:14
[/output]
[/test]
[test]
[input]
11
08
[/input]
[output]
11:23
[/output]
[/test]
[test]
[input]
12
49
[/input]
[output]
13:04
[/output]
[/test]
[test]
[input]
0
0
[/input]
[output]
0:15
[/output]
[/test]
[test]
[input]
0
44
[/input]
[output]
0:59
[/output]
[/test]
[test]
[input]
0
45
[/input]
[output]
1:00
[/output]
[/test]
[test]
[input]
0
48
[/input]
[output]
1:03
[/output]
[/test]
[test]
[input]
0
59
[/input]
[output]
1:14
[/output]
[/test]
[test]
[input]
8
30
[/input]
[output]
8:45
[/output]
[/test]
[test]
[input]
12
35
[/input]
[output]
12:50
[/output]
[/test]
[test]
[input]
12
45
[/input]
[output]
13:00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Day of Week
[code-task title="Day of Week" taskId="pb-java-Conditional-Statements-day-of-week" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un program care citește un număr întreg de pe consolă și imprima **ziua săptămânii** (în engleză) în intervalul\ [1 ... 7 \] și "**Error**" dacă numărul este **nevalid**.

## Exemplu

| **Input** | **Output** |
| --- |  --- |
| 2 | Tuesday |
| | |

| **Input** | **Output** |
| --- | --- |
| -1 | Error |
| | |
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
-2
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
2
[/input]
[output]
Tuesday
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
4
[/input]
[output]
Thursday
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
[test]
[input]
6
[/input]
[output]
Saturday
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
8
[/input]
[output]
Error
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Animal Type
[code-task title="Animal Type" taskId="pb-java-Conditional-Statements-Animal-Type" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un program care imprima **tipul** unui animal în funcție de **numele său**.

## Input / Output
- **dog -> mammal**
- **crocodile, tortoise, snake -> reptile**
- **others -> unknown**

## Exemplu:

| **Input** | **Output** |
| --- | | --- |
| dog | mammal |

| **Input** | **Output** |
| --- | --- |
| snake | reptile |

| **Input** | **Output** |
| --- | --- |
| cat | unknown |
[/task-description]
[tests]
[test open]
[input]
dog
[/input]
[output]
mammal
[/output]
[/test]
[test open]
[input]
snake
[/input]
[output]
reptile
[/output]
[/test]
[test open]
[input]
cat
[/input]
[output]
unknown
[/output]
[/test]
[test]
[input]
crocodile
[/input]
[output]
reptile
[/output]
[/test]
[test]
[input]
tortoise
[/input]
[output]
reptile
[/output]
[/test]
[test]
[input]
snake
[/input]
[output]
reptile
[/output]
[/test]
[test]
[input]
cat
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Pets 
[code-task title="Pets" taskId="pb-java-Conditional-Statements-pets" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un **program** care să calculeze **cantitatea de kilograme** de mâncare animalelor ale Martinei care vor mânca in timp ce ea este **în aventură** și **verifică dacă mâncarea este suficientă**.
Fiecare animal mănâncă o anumită cantitate de mâncare pe zi.

## Input
Citește **cinci** rânduri de pe consolă:
- **numărul de zile** - un număr întreg în intervalul \[1 ... 5000 \]
- ** mâncare rămasă în kilograme** - un număr întreg în intervalul \[0 ... 100000 \]
- **mâncare pentru câine pe zi în kilograme** -  dublă în intervalul \[0.00…100.00\]
- **mâncare pentru pisică pe zi în kilograme** - dublă în intervalul \[0.00…100.00\]
- **mâncare pentru broască țestoasă pe zi în grame** - dublă în intervalul \[0.00…10000.00\]

## Output
Imprima pe consolă o linie **unică**:
- Dacă mâncarea rămasă **este suficientă**:
  - "\{kilograms remain\} kilos of food left." Rezultatul trebuie să fie **rotunjit la cel mai apropiat număr întreg inferior**.
- Dacă mâncarea rămasă **nu este suficientă**:
  - "\{kilograms needed\} more kilos of food are needed." Rezultatul trebui să fie **rotunjit la cel mai apropiat număr întreg superior**.

## Exeamplu
| **Input**  | **Output** |
| --- | --- |
| 2 | 3 kilos of food left. |
| 10 | |
| 1 | |
| 1 | |
| 1200 | |

### Comentarii
- ** Mâncare necesară pentru: **
- **câine** = 2 zile \* 1 kg = **2** kg;
- **pisica** = 2 zile \* 1 kg = **2** kg;
- **broască-ţestoasă** = 2 zile \* 1200 g = **2.4** kg;
- **Cantitatea totală de mâncare** = 2 + 2 + 2.4 = **6.4** kg;
- **6.4 < 10** => 10 - 6.4 = **3.6** -> **3 kg de mâncare rămân**

## Exemplu
| **Input**  | **Output** |
| --- | --- |
| 5 | 7 more kilos of food are needed. |
| 10 | |
| 2.1 | |
| 0.8 | |
| 321 | |

### Comentarii
- **Needed food for:**
- **dog** = **10.5** kg;
- **pisica** = 5 zile \* 0.8 kg = **4** kg;
- **broască-ţestoasă** = 5 zile \* 321 g = **1.605** kg;
- **Cantitatea totală de mâncare** = 10.5 + 4 + 1.605 = **16.105** ;
- 16.105 – 10 = 6.105 -> 7 kg de mâncare sunt necesare

[/task-description]
[tests]
[test open]
[input]
2
10
1
1
1200
[/input]
[output]
3 kilos of food left.
[/output]
[/test]
[test open]
[input]
5
10
2.1
0.8
321
[/input]
[output]
7 more kilos of food are needed.
[/output]
[/test]
[test]
[input]
2
8
1.2
0.8
342
[/input]
[output]
3 kilos of food left.
[/output]
[/test]
[test]
[input]
4
8
3.3
2.3
1345
[/input]
[output]
20 more kilos of food are needed.
[/output]
[/test]
[test]
[input]
1
50
25
24
1000
[/input]
[output]
0 kilos of food left.
[/output]
[/test]
[test]
[input]
14
20
2.5
1.5
999
[/input]
[output]
50 more kilos of food are needed.
[/output]
[/test]
[test]
[input]
49
197
100
100
0
[/input]
[output]
9603 more kilos of food are needed.
[/output]
[/test]
[test]
[input]
86
124
0
0
0
[/input]
[output]
124 kilos of food left.
[/output]
[/test]
[test]
[input]
512
2562
2
2
3405
[/input]
[output]
1230 more kilos of food are needed.
[/output]
[/test]
[test]
[input]
987
2345
1.1
0.5
1
[/input]
[output]
764 kilos of food left.
[/output]
[/test]
[test]
[input]
5000
100000
2.5
2.01
10
[/input]
[output]
77400 kilos of food left.
[/output]
[/test]
[test]
[input]
10
319
1
1
1
[/input]
[output]
298 kilos of food left.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Pipes In Pool
[code-task title="Pipes In Pool" taskId="pb-java-Conditional-Statements-pipes-in-pool" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
O piscină cu **volum V** are **două țevi** care o umplu.

**Fiecare țeava are un anumit flux cert** (litri de apapă care trec printr-o singură țeava pe oră). 

Muncitorul aprinde conductele **în același timp** și iese **N ore**.

Scrieți un program care să arate starea piscinei **în momentul în care lucrătorul revine**.

## Input
** Patru ** linii de intrare:
- **V** - **Volumul piscinei în litri** - numere întregi în intervalul \[1…10000\]
- **P1** - **fluxul primei țevi pe oră** - numere întregi în intervalul \[1…5000\]
- **P2** - **fluxul celei de-a doua țevi pe oră** - numere întregi în intervalul \[1…5000\]
- **H** - **ore lucrătorului in timp ce lipsește** - număr cu virgulă mobilă în intervalul \[1.0…24.00\]

## Output
Imprima pe consolă **una dintre ambele posibilități**:
- Cât de mult a fost umplută piscina și care dintre țevile cât a contribuit în procente
  - "The pool is \{occupancy of the pool in percent\}% full. Pipe 1: \{percent water from the first pipe\}%. Pipe 2: \{percent water from the second pipe\}%."
- Dacă piscina este debordantă - câți litri sunt debordați pentru timpul dat
  - "For \{hours pipes are filling the pool\} hours the pool overflows with \{liters water overflow\} liters."
- Toate numerele din ieșire trebuie formatate la a doua cifră după punctul zecimal.

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 1000 | The pool is 66.00% full. Pipe 1: 45.45%. Pipe 2: 54.55%. |
| 100 | |
| 120 | |
| 3 | |

### Commentarii
- Pentru 3 ore: Prima țeavă se umple cu 300 de  litri
- A doua țeavă se umple cu 360 de litri
- In total – 660 l < 1000 l => 66% sunt umplute
- Prima țeavă a contribuit cu 45% (300 din  660 litri).
- A doua țeavă a contribuit cu 54% (360 din 660 litri).

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 100 | For 2.50 hours the pool overflows with 400.00 liters. |
| 100 | |
| 100 | |
| 2.5 | |

### Comentarii
- Pentru 2.5 ore: Prima țeavă se umple cu 300 de  litri
- A doua țeavă se umple cu 250 de litri
- In total – 500 l > 100 l => 400 de litre sunt debordate.

[/task-description]
[tests]
[test open]
[input]
1000
100
120
3
[/input]
[output]
The pool is 66.00% full. Pipe 1: 45.45%. Pipe 2: 54.55%.
[/output]
[/test]
[test open]
[input]
100
100
100
2.5
[/input]
[output]
For 2.50 hours the pool overflows with 400.00 liters.
[/output]
[/test]
[test]
[input]
12345
123
123
10
[/input]
[output]
The pool is 19.93% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
8685
3
3
100
[/input]
[output]
The pool is 6.91% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
3942
12
32
5
[/input]
[output]
The pool is 5.58% full. Pipe 1: 27.27%. Pipe 2: 72.73%.
[/output]
[/test]
[test]
[input]
929
123
321
12
[/input]
[output]
For 12.00 hours the pool overflows with 4399.00 liters.
[/output]
[/test]
[test]
[input]
10000
5000
5000
24
[/input]
[output]
For 24.00 hours the pool overflows with 230000.00 liters.
[/output]
[/test]
[test]
[input]
2000
100
120
5.4
[/input]
[output]
The pool is 59.40% full. Pipe 1: 45.45%. Pipe 2: 54.55%.
[/output]
[/test]
[test]
[input]
1258
321
333
7.7
[/input]
[output]
For 7.70 hours the pool overflows with 3777.80 liters.
[/output]
[/test]
[test]
[input]
5946
1000
1
5
[/input]
[output]
The pool is 84.17% full. Pipe 1: 99.90%. Pipe 2: 0.10%.
[/output]
[/test]
[test]
[input]
7869
1
12
23.99
[/input]
[output]
The pool is 3.96% full. Pipe 1: 7.69%. Pipe 2: 92.31%.
[/output]
[/test]
[test]
[input]
2
2
1
1
[/input]
[output]
For 1.00 hours the pool overflows with 1.00 liters.
[/output]
[/test]
[test]
[input]
2
1
1
0.5
[/input]
[output]
The pool is 50.00% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
2222
1111
1111
1
[/input]
[output]
The pool is 100.00% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
4501
12
10
21.93
[/input]
[output]
The pool is 10.72% full. Pipe 1: 54.55%. Pipe 2: 45.45%.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

