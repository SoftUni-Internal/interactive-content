# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Guess the Password
[code-task title="Guess the Password" taskId="pb-java-Conditional-Statements-guess-the-password" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a verifica o parolă:

  * Citiți un șir: parola
  * Imprimați **"Welcome"** dacă parola introdusă este **"s3cr3t!"**
  * Imprimați **"Wrong password!"** în toate celelalte cazuri

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| s3cr3t! | Welcome |
| qwerty | Wrong password! |

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
qwerty
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
# Problemă cu Soluție: Boiling Water

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-38-problem-and-solution-boiling-water-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Boiling Water" taskId="pb-java-Conditional-Statements-Boiling-water" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care să verifice dacă apa dintr-un vas fierbe:

  * Citiți un număr în virgulă mobilă: **temperatura** apei (în °C)
  * Imprimați **"The water is boiling"** dacă numărul este **> 100**
  * Imprimați **"The water is not hot enough"** în toate celelalte cazuri

  
## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 104.8 | The water is boiling |
| 29 | The water is not hot enough |

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
# Problemă: Speed Info
[code-task title="Speed Info" taskId="pb-java-Conditional-Statements-Speed-Info" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a verifica dacă un obiect se mișcă rapid sau încet în funcție de viteza sa:

  * Citiți **viteza** (un număr în virgulă mobilă)
  * Imprimați **"Slow"** dacă viteza este **<= 30**
  * Imprimați **"Fast"** dacă viteza este **> 30**


## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 30 | Slow |
| 60 | Fast |

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
# Problemă cu Soluție: Area of Figures

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-42-problem-and-solution-area-of-figures-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Area of Figures" taskId="pb-java-Conditional-Statements-Area-of-Figures" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a calcula aria diferitelor figuri:
  * Citește un șir: **type**
  * Verifică dacă figura introdusă este **square**, **rectangle** sau **circle**
  * Citește un număr pentru pătrat și cerc sau două numere pentru dreptunghi
    * numerele vor fi în virgulă mobilă
  * Imprimă aria calculată, **formatată** la a doua cifră după punctul zecimal
  * Pentru figuri necunoscute imprimă **"Unknown figure"**

## Exemple

|**Intrare**|**Ieșire** |
| --- | --- |
| square | 25.00 |
| 5 |  |


|**Intrare**|**Ieșire** |
| --- | --- |
| rectangle | 30.00 |
| 3 |  |
| 10 |  |


|**Intrare**|**Ieșire** |
| --- | --- |
| trapezoid | Unknown figure |


|**Intrare**|**Ieșire** |
| --- | --- |
| circle | 19.63 |
| 2.5 | |

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
# Problemă: Tickets
[code-task title="Tickets" taskId="pb-java-Conditional-Statements-Tickets" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]

## Descriere
Scrieți un program pentru a **calcula** prețul unui bilet:

  * Citiți tipul biletului: fie **student**, fie **regular**
  * Imprimați **prețul** în următorul format: "$\{**price**\}":
    * prețul trebuie să fie **formatat** la a doua cifră după punctul zecimal
  * Prețul biletului de tip student: **1.00**
  * Prețul biletului de tip regular: **1.60**
  * Pentru un tip non-valid imprimați **"Invalid ticket type!"**
  
## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| student | $1.00 |

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
# Problemă cu Soluție: Coffee Shop

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-46-problem-and-solution-coffee-shop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Coffee Shop" taskId="pb-java-Conditional-Statements-Coffee-Shop" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a calcula prețul unei băuturi într-o cafenea:

  * Prima linie de intrare va fi **"coffee"** sau **"tea"**
  * A doua linie: **"sugar"** sau **"no"**
  * Imprimați prețul în formatul: "**Final price:** $\{**price**\}"
    * prețul trebuie să fie **formatat** la a doua cifră după punctul zecimal
  
Prețuri:

  * Preţul cafelei: **1.00**
  * Preţul ceaiului: **0.60**
  * Prețul zahărului: **0.40**

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
| coffee | Final price: $1.40 |
| sugar |  |

|**Intrare**|**Ieșire** |
| --- | --- |
| tea | Final price: $0.60 |
| no |  |

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
# Problemă: Valid Triangle
[code-task title="Valid Triangle" taskId="pb-java-Conditional-Statements-Valid-triangle" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a verifica dacă un triunghi este valid după dimensiunile sale:

  * Citiți 3 numere întregi: **laturile unui triunghi**
  * Verificați dacă fiecare latură este mai mică decât suma celorlalte 2
    * imprimă **"Valid Triangle"** dacă condiția de mai sus este îndeplinită
    * imprimă **"Invalid Triangle"** în caz contrar

    
## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 3 | Valid Triangle |
| 4 |  |
| 5 |  |

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
Invalid Triangle
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
# Problemă: Harvest
[code-task title="Harvest" taskId="pb-java-Conditional-Statements-Harvest" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Compania Happy Wine Brothers** v-a cerut să creați un program simplu pentru a determina dacă va reuși să atingă ținta de producție pentru vin în una din viile lor.

**Această vie este responsabilă pentru 40% din recolta vinicolă.**

Dintr-o vie de 1 metru pătrat se recoltează **Y kilograme de struguri**. Această valoare va fi furnizată ca intrare.

Pentru a produce 1 litru de vin sunt necesare **2.5 kg struguri**.

Compania are o țintă de producție pentru vinul care urmează să fie vândut. Această valoare va fi de asemenea furnizată ca intrare.

Scrieți un program care să calculeze cât de mult vin poate fi produs și dacă această cantitate este suficientă pentru atingerea țintei de producție.

Dacă cantitatea produsă este suficientă, restul este împărțită în mod egal între lucrătorii viei.

## Intrare
Intrarea este citită de pe consolă și constă în:
- **Suprafața viei în metri pătrați** - număr întreg în intervalul \[10 ... 5000 \]
- **Recolta pentru un metru pătrat** - număr în virgulă mobilă în intervalul\[0.00 ... 10.00\]
- **Ținta de producție în litri** - număr întreg în intervalul \[10 ... 600 \] 
    - țineți cont că această vie este responsabilă pentru 40% din producție)
- **Număr de lucrători** - număr întreg în intervalul \[1 ... 20 \]

## Ieșire
Imprimați unul dintre următoarele șabloane pe consolă, în funcție de rezultat: 
-  Dacă cantitatea de vin produsă este mai mică decât este ținta de producșie:
    - "**It will be a tough winter!** \{**amount of wine needed**\} **liters of wine needed to reach the goal.**"
        - rezultatul trebuie rotunjit în jos la cel mai apropiat număr întreg
- Dacă cantitatea de vin produsă este mai mare sau egală cu ținta de producție:
    - "**Good harvest this year! Total wine:** \{**Total wine**\} **liters.**"
        - rezultatul trebuie rotunjit în jos la cel mai apropiat număr întreg
    -  "\{**remaining wine**\} **liters left** **->** \{**wine for 1 worker**\} **liters per person.**"
        - cantitatea de vin rămasă și cantitatea de vin pentru fiecare lucrător trebuie rotunjite în sus la cel mai apropiat număr întreg 

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 650 | Good harvest this year! Total wine: 208 liters. |
| 2 | 33 liters left -> 11 liters per person. |
| 175 | |
| 3 | |

[hints]
[hint]
Calculați producția totală în kilograme.
Producția totală în kg: 650 \* 2 = 1300
[/hint]
[hint]
Determinați cantitatea de vin produsă și verificați dacă obiectivul a fost atins.
Apoi tipăriți rezultatul corect.
Vin produs de această vie = (40% \* 1300) / 2.5 = 208
208 > 175 - ținta a fost atinsă
208 \- 175 = 33 de litri rămași \-> 11 litri pentru fiecare lucrător
[/hint]
[/hints]

## Exemplu
|**Intrare**|**Ieșire** |
| --- |  --- |
| 1020 | It will be a tough winter! 180 liters of wine needed to reach the goal.|
| 1.5 |  |
| 425 | |
| 4 | |

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
It will be a tough winter! 180 liters of wine needed to reach the goal.
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
It will be a tough winter! 153 liters of wine needed to reach the goal.
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
It will be a tough winter! 93 liters of wine needed to reach the goal.
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
It will be a tough winter! 600 liters of wine needed to reach the goal.
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
It will be a tough winter! 79 liters of wine needed to reach the goal.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]





[slide hideTitle]
# Problemă: Time + 15 Minutes
[code-task title="Time + 15 Minutes" taskId="pb-java-Conditional-Statements-time-15minutes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care citește de pe consolă două numere întregi care reprezintă ora fixă în formatul: "\{**hours**\}:\{**minutes**\}" și tipărește ce oră va fi dupa 15 minute.

## Intrare

Intrarea constă în **două** linii:
- Ora - număr întreg în intervalul \[0...23\]
- Minute - număr întreg în intervalul \[0...59\]

## Ieșire
Imprimați rezultatul în următorul format:"\{**hours**\}:\{**minutes**\}".
- Ora trebuie să fie formatată **fără zero**
- Minutele trebuie să fie formatate **cu zero**

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 11 | 11:23|
| 08 | |


|**Intrare**|**Ieșire** |
| --- | --- |
| 1 | 2:01 | 
| 46 | |


[/task-description]
[tests]
[test open]
[input]
11
08
[/input]
[output]
11:23
[/output]
[/test]
[test open]
[input]
1
46
[/input]
[output]
2:01
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
# Problemă: Day of Week
[code-task title="Day of Week" taskId="pb-java-Conditional-Statements-day-of-week" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un program care citește de pe consolă un număr întreg în intervalul \[1 ... 7\] și imprimă **ziua săptămânii** (în engleză) sau "**Error**" dacă numărul este **non-valid**.

## Exemplu

|**Intrare**|**Ieșire** |
| --- |  --- |
| 2 | Tuesday |
| -1 | Error |

[/task-description]
[tests]
[test]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test open]
[input]
-1
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
[test open]
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
# Problemă: Animal Type
[code-task title="Animal Type" taskId="pb-java-Conditional-Statements-Animal-Type" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Scrieți un program care imprimă **tipul** unui animal. 

Există trei variante posibile de ieșire: **mammal**, **reptile** și **unknown**.

## Intrare / Ieșire
Intrarea poate să aibă următoarele valori:
- mammals: **dog** 
- reptiles: **crocodile**, **tortoise**, **snake** 
- **others -> unknown**

## Exemplu

|**Intrare**|**Ieșire** |
| --- | --- |
| dog | mammal |
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
bee
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
# Problemă cu Soluție: Pets 

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-47-problem-and-solution-pets-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Pets" taskId="pb-java-Conditional-Statements-pets" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Prietena voastră are 3 animale.

Aceasta își dorește să plece într-o excursie și vă cere să o ajutați să determine dacă are mâncare suficientă pentru a hrăni animalele cât timp ea este plecată.

## Intrare
Citiți **cinci** rânduri de pe consolă:
- **Numărul de zile** - un număr întreg în intervalul \[1 ... 5000 \]
- **Mâncare rămasă în kilograme** - un număr întreg în intervalul \[0 ... 100000 \]
- **Mâncare pentru câine pe zi în kilograme** -  double în intervalul \[0.00 ... 100.00\]
- **Mâncare pentru pisică pe zi în kilograme** - double în intervalul \[0.00 ... 100.00\]
- **Mâncare pentru broască țestoasă pe zi în grame** - double în intervalul \[0.00 ... 10000.00\]

## Ieșire
Imprimă pe consolă o linie **unică**:
- Dacă mâncarea **este suficientă**:
  - "\{**kilograms remain**\} **kilos of food left.**" 
  
Rezultatul trebuie să fie **rotunjit în jos la cel mai apropiat număr întreg**.

- Dacă mâncarea rămasă **nu este suficientă**:
  - "\{**kilograms needed**\} **more kilos of food are needed.**"
  
Rezultatul trebuie să fie **rotunjit în sus la cel mai apropiat număr întreg superior**.

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 2 | 3 kilos of food left. |
| 10 | |
| 1 | |
| 1 | |
| 1200 | |


|**Intrare**|**Ieșire** |
| --- | --- |
| 5 | 7 more kilos of food are needed. |
| 10 | |
| 2.1 | |
| 0.8 | |
| 321 | |

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
# Problemă: Pipes In Pool
[code-task title="Pipes In Pool" taskId="pb-java-Conditional-Statements-pipes-in-pool" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
O piscină cu **volum V** este umplută prin **două conducte**.

**Fiecare conductă are un anumit flux** (litri de apă care trec printr-o singură conductă într-o oră). 

Muncitorul pornește conductele **în același timp** și le lasă pornite pentru **N ore**.

Scrieți un program care să arate starea piscinei **în momentul în care lucrătorul revine**.

## Intrare
**Patru** linii de intrare:
- **V** - **Volumul piscinei în litri** - număr întreg în intervalul \[1 ... 10000\]
- **P1** - **fluxul primei conducte pe oră** - număr întreg în intervalul \[1 ... 5000\]
- **P2** - **fluxul celei de-a doua conducte pe oră** - număr întreg în intervalul \[1 ... 5000\]
- **H** - **ore în care lucrătorul lipsește** - număr în virgulă mobilă în intervalul \[1.0 ... 24.00\]

## Ieșire
Imprimați pe consolă **una dintre posibilitățile**:
- Cât de mult a fost umplută piscina și cât a contribuit fiecare conductă în procente
  - "**The pool is** \{**percentage of volume**\}**%** **full.** **Pipe 1:** \{**transferred percentage**\}**%.** **Pipe 2:** \{**transferred percentage**\}**%.**"
- Dacă piscina este debordantă - câți litri sunt debordați pentru timpul dat
  - "**For** \{**amount of time**\} **hours the pool overflows with** \{**liters of unnecessary water transferred**\} **liters.**"
- Toate numerele din ieșire trebuie formatate la a doua cifră după punctul zecimal

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 1000 | The pool is 66.00% full. Pipe 1: 45.45%. Pipe 2: 54.55%. |
| 100 | |
| 120 | |
| 3 | |

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 100 | For 2.50 hours the pool overflows with 400.00 liters. |
| 100 | |
| 100 | |
| 2.5 | |

[hints]
[hint]
Calculați capacitatea pentru fiecare conductă. 
Pentru 3 ore: prima conductă are capacitatea de 300 de litri.
A doua conductă are capacitatea de 360 de litri.
În total – 660 l < 1000 l => piscina este umplută în proporție de 66%
[/hint]
[hint]
Verificați dacă capacitatea totală a ambelor conducte este suficientă pentru a umple piscina.
Apoi tipăriți rezultatul corect.
Prima conductă a contribuit în procent de 45% (300 l din 660 l)
A doua conductă a contribuit în procent de 55%. (360 l din 660 l)
[/hint]

[/hints]

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

