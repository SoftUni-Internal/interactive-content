# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Train

[code-task title="Train" taskId="java-fund-1-arrays-Train" executionType="tests-execution" executionStrategy="java-code" requiresInput requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriеrе

Veți primi un număr întreg **n**, care reprezintă numărul de vagoane dintr-un tren. 

Pe următoarele **n linii** veți primi numărul persoanelor care vor urca în acel vagon.

La final imprimați **numărul de pasageri din fiecare vagon**, urmat de **numărul total de pasageri din tren*.

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3 | 13 24 8 |
| 13 | 45 |
| 24 | |
| 8 | |

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 1 | 100 |
| 100 | 100 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
13
24
8
[/input]
[output]
13 24 8
45
[/output]
[/test]
[test open]
[input]
1
100
[/input]
[output]
100
100
[/output]
[/test]
[test]
[input]
6
3
52
71
13
65
4
[/input]
[output]
3 52 71 13 65 4
208
[/output]
[/test]
[test]
[input]
5
1
2
3
45
5
[/input]
[output]
1 2 3 45 5
56
[/output]
[/test]
[test]
[input]
3
-100
-200
-300
[/input]
[output]
-100 -200 -300
-600
[/output]
[/test]
[test]
[input]
3
100
1
2
[/input]
[output]
100 1 2
103
[/output]
[/test]
[test]
[input]
3
1
1
1
[/input]
[output]
1 1 1
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Common Elements
[code-task title="Common Elements" taskId="java-fund-1-arrays-Common-Elements" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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

Creați un program care imprimă toate **elementele comune** a **două matrice**.

Trebuie să **comparați elementele** din **a doua matrice** cu elementele **primei matrice**.

### Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| Hey hello 2 4 | 4 hello |
| 10 hey 4 hello | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Hey hello 2 4
10 hey 4 hello
[/input]
[output]
4 hello
[/output]
[/test]
[test]
[input]
S of t un i
of i 10 un
[/input]
[output]
of i un
[/output]
[/test]
[test]
[input]
i love to code
code i love to
[/input]
[output]
code i love to
[/output]
[/test]
[test]
[input]
a b c d
a x e f
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
abc def xyz kmn lop
abc 213 xyz 5406 lop ####
[/input]
[output]
abc xyz lop
[/output]
[/test]
[test]
[input]
aaa bbb ccc ddd eee fff ggg
aaa xxx yyy zzz 123 ccc ggg
[/input]
[output]
aaa ccc ggg
[/output]
[/test]
[test]
[input]
aaa bbb ddd eee fff ggg
ggg
[/input]
[output]
ggg
[/output]
[/test]
[test]
[input]
111 222 333 444 555
666 777 888 999 111
[/input]
[output]
111
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Zig-Zag Arrays

[code-task title="Zig-Zag Arrays" taskId="java-fund-1-arrays-Zig-Zag-Array" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Creați un program care creează **două matrice**.

Veți primi un **număr întreg n**.

Pe **următoarele n linii** veți primi **2 numere întregi**.

Formați două matrice cu un tipar **zig-zag** așa cum este exemplificat **mai jos**.

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | 80 19 |
| 80 23 | 23 31 |
| 31 19 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
80 23
31 19
[/input]
[output]
80 19
23 31
[/output]
[/test]
[test]
[input]
4
1 5
9 10
31 81
41 20
[/input]
[output]
1 10 31 20
5 9 81 41
[/output]
[/test]
[test]
[input]
3
1 2
3 4
5 6
[/input]
[output]
1 4 5
2 3 6
[/output]
[/test]
[test]
[input]
4
1 2
3 4
5 6
7 8
[/input]
[output]
1 4 5 8
2 3 6 7
[/output]
[/test]
[test]
[input]
1
1 2
[/input]
[output]
1
2
[/output]
[/test]
[test]
[input]
3
1 2
3 2
4 2
[/input]
[output]
1 2 4
2 3 2
[/output]
[/test]
[test]
[input]
5
0 0
1 1
2 2
3 3
4 4
[/input]
[output]
0 1 2 3 4
0 1 2 3 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Array Rotation
[code-task title="Array Rotation" taskId="java-fund-1-arrays-Rotation" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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

Creați un program care **primește o matrice și numărul de rotații** pe care trebuie să le efectuați. Rotațiile sunt făcute prin schimbarea elementului corespunzător indicelui 0 cu elementul corespunzător ultimului indice.

**Imprimați** matricea rezultată.

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 51 47 32 61 21 | 32 61 21 51 47 |
| 2 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
51 47 32 61 21
2
[/input]
[output]
32 61 21 51 47
[/output]
[/test]
[test]
[input]
32 21 61 1
4
[/input]
[output]
32 21 61 1
[/output]
[/test]
[test]
[input]
2 4 15 31
5
[/input]
[output]
4 15 31 2
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
2
[/input]
[output]
3 4 5 6 1 2
[/output]
[/test]
[test]
[input]
1 2 3 4 5
5
[/input]
[output]
1 2 3 4 5
[/output]
[/test]
[test]
[input]
1 2 3
0
[/input]
[output]
1 2 3
[/output]
[/test]
[test]
[input]
1 2 3 4 5
6
[/input]
[output]
2 3 4 5 1
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 12
12
[/input]
[output]
5 6 7 12 1 2 3 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Top Integers

[code-task title="Top Integers" taskId="java-fund-1-arrays-Top-Integers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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

Creați un program pentru a **găsi numere întregi de tip top** dintr-o matrice.

Un număr întreg de tip **top** este un număr întreg care este **mai mare** decât toate elementele **din dreapta sa**.

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 14 24 3 19 15 17 | 24 19 17 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
14 24 3 19 15 17
[/input]
[output]
24 19 17
[/output]
[/test]
[test]
[input]
1 4 3 2
[/input]
[output]
4 3 2
[/output]
[/test]
[test]
[input]
27 19 42 2 13 45 48
[/input]
[output]
48
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 4
[/input]
[output]
6 4
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
0 1 0 0 0
[/input]
[output]
1 0
[/output]
[/test]
[test]
[input]
6 5 4 3 2 1
[/input]
[output]
6 5 4 3 2 1
[/output]
[/test]
[test]
[input]
1 6 4 2 1 0
[/input]
[output]
6 4 2 1 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Equal Sums
[code-task title="Equal Sums" taskId="java-fund-1-arrays-Equal-Sums" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Creați un program care determină dacă există **un element în matrice** astfel încât **suma tuturor elementelor din stânga sa** să fie **egală** cu **suma tuturor elementelor din dreapta sa**.

Dacă nu există **elemente în stânga / dreapta**, suma lor **este considerată ca fiind 0**.

**Imprimați** **indicele** elementului care îndeplinește condiția necesară sau **"no"** dacă nu există un astfel de element. 

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 1 2 **3** 3 | 2 |

[hints] 
[hint] 
În acest exemplu, elementul corespunzător indicelui 2 (arr\[2\]) satisface această condiție. 
[/hint] 
[hint] 
Suma elementelor din partea stângă (1, 2) este egală cu 3.
Suma elementelor din partea dreaptă (3) este egală cu 3.

arr\[0\] + arr\[1\] = arr\[3\]
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 3
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
1 2
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1 2 3
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
10 5 5 99 3 4 2 5 1 1 4
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
1 2
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
999
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
4 2 2 2 0
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
8 1 4 4 5 17
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
1 1 1 1 1 1 1 1 1 1 99999 10
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
11 555 1 1 1 1 1 1 1 1 1 1 1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
-5 1 1 1 1 1 1000
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1000 -5 1 1 1 1 1
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Max Sequence of Equal Elements

[code-task title="Max Sequence of Equal Elements" taskId="java-fund-1-arrays-Max-Sequence-of-Equal-Elements" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Creați un program care **găsește cea mai lungă secvență de elemente egale dintr-o matrice** de numere întregi.

Dacă există **mai multe secvențe cu aceeași lungime**, imprimați-o pe cea **din stânga**.

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 0 1 1 5 2 2 6 3 3 | 1 1 |
| 1 1 1 2 3 1 3 3 | 1 1 1 |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
0 1 1 5 2 2 6 3 3
[/input]
[output]
1 1
[/output]
[/test]
[test open]
[input]
1 1 1 2 3 1 3 3
[/input]
[output]
1 1 1
[/output]
[/test]
[test]
[input]
2 1 1 2 3 3 2 2 2 1
[/input]
[output]
2 2 2
[/output]
[/test]
[test]
[input]
4 4 4 4
[/input]
[output]
4 4 4 4
[/output]
[/test]
[test]
[input]
1 2 3 4
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
2 1 1 2 3 3 2 2 2 1
[/input]
[output]
2 2 2
[/output]
[/test]
[test]
[input]
9 9 9 9 9 9 9 9 9
[/input]
[output]
9 9 9 9 9 9 9 9 9
[/output]
[/test]
[test]
[input]
1 2 3 1 1 1 1 1 1 1
[/input]
[output]
1 1 1 1 1 1 1
[/output]
[/test]
[test]
[input]
1 2 2 2 1 2 2 2 3 1 1 1
[/input]
[output]
2 2 2
[/output]
[/test]
[test]
[input]
0 0 -1 -1 -1 -2 -3 -3 -4 -5
[/input]
[output]
-1 -1 -1
[/output]
[/test]
[test]
[input]
1 2 2
[/input]
[output]
2 2
[/output]
[/test]
[test]
[input]
3 3 3 1
[/input]
[output]
3 3 3
[/output]
[/test]
[test]
[input]
1 1 2 2 3 3 4 4 5 5
[/input]
[output]
1 1
[/output]
[/test]
[test]
[input]
0 1 1 1 0 2 2 0 3 3 3 0 4 4 0 5 5 5
[/input]
[output]
1 1 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Magic Sum
[code-task title="Magic Sum" taskId="java-fund-1-arrays-Magic-Sum" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Creați un program care **imprimă toate perechile unice** dintr-o matrice de numere întregi a căror **sumă este egală cu un număr dat**.
 
### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 1 7 6 2 19 23 | 1 7 |
| 8 | 6 2 |

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 14 20 60 13 7 19 8 | 14 13 |
| 27 | 20 7 |
| | 19 8 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 7 6 2 19 23
8
[/input]
[output]
1 7
6 2
[/output]
[/test]
[test open]
[input]
14 20 60 13 7 19 8
27
[/input]
[output]
14 13
20 7
19 8
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
6
[/input]
[output]
1 5
2 4
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
7
[/input]
[output]
1 6
2 5
3 4
[/output]
[/test]
[test]
[input]
101 102 103 104
205
[/input]
[output]
101 104
102 103
[/output]
[/test]
[test]
[input]
0 1 2 3 4
4
[/input]
[output]
0 4
1 3
[/output]
[/test]
[test]
[input]
9 8 7 6 5
15
[/input]
[output]
9 6
8 7
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: LadyBugs

[code-task title="LadyBugs" taskId="java-fund-1-arrays-LadyBugs" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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

Vă sunt date **dimensiunea unui câmp** și **indicii unde pot fi găsite buburuze** în interiorul câmpului.

După aceea, pe fiecare linie nouă, până când este dată comanda "**end**", o buburuză **își schimbă poziția** fie la **stânga**, fie la **dreapta**, cu o anumită **lungime a zborului**.

O **comandă** care descrie schimbarea poziției arată în acest mod: "0 right 1".

Acest lucru înseamnă că buburuza **plasată la indicele 0 trebuie să zboare cu un indice în dreapta sa**.

Dacă buburuză **aterizează pe locul unei alte buburuze**, aceasta **continuă să zboare în aceeași direcție cu aceeași lungime a zborului**.

Dacă buburuză **zboară în afara câmpului**, ea **dispare**.

De exemplu, imaginați-vă că vi se oferă un câmp **cu dimensiunea 3** și buburuze la indicii **0 și 1**.

Dacă buburuza **de la indicele 0 trebuie să zboare la dreapta sa cu lungimea de 1** (0 right 1) ea va încerca să **aterizeze la indicele 1**, dar din cauză că acolo există deja **o altă buburuză** ea va continua să zboare mai departe spre dreapta cu o lungime suplimentară de 1, aterizând la **indicele 2**.

După aceea, dacă aceeași buburuză trebuie să zboare la dreapta sa cu lungimea de 1 (2 right 1), va ateriza undeva **în afara câmpului**, așa că zboară **departe**.

Dacă vi se oferă un indice **care nu are o buburuză** acolo, **nu se întâmplă nimic**.

Dacă vi se oferă un indice care se află **în afara câmpului**, **nu se întâmplă nimic**.

La final, **imprimați toate celulele** câmpului, **separate** prin **spații**.

Pentru fiecare celulă care conține o buburuză imprimați '1' și pentru fiecare celulă goală imprimați '0'.

Pentru exemplul de mai sus, rezultatul ar trebui să fie '0 1 0'.

### Intrare

- Pe prima linie veți primi un număr întreg - dimensiunea câmpului

- Pe a doua linie veți primi indicii inițiali ai tuturor buburuzelor, separați printr-un spațiu

Indicii dați pot sau nu să fie în interiorul câmpului.

- Pe liniile următoare, până când veți primi comanda "**end**", veți primi comenzi în formatul: "\{ladybug index\} \{direction\} \{fly length\}"

### Ieșire
- Imprimați toate celulele din câmpul în formatul: "\{cell\} \{cell\} … \{cell\}"
    - dacă o celulă are buburuză, tipăriți '1'
    - dacă o celulă este goală, imprimați '0' 


### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3 | 0 1 0 |
| 0 1 | |
| 0 right 1 | |
| 2 right 1 | |
| end | |

[hints] 
[hint] 
Prima dată, primim dimensiunea câmpului - **3**.
Apoi, primim indicii cu buburuze - **0** și **1**.

Inițial, câmpul arată în felul următor: `1 1 0`.
[/hint] 
[hint] 
Prima comandă este "**0 right 1**":
- **0** - **indicele** buburuzei
- right - **direcția** zborului
- 1 - **lungimea zborului**

După această comandă, câmpul arată așa: `0 0 1`.
[/hint] 
[hint] 
A doua comandă este "**2 right 1**".

Din moment ce lungimea zborului duce buburuza în afara câmpului, aceasta **zboară mai departe**.

După această comandă, câmpul arată în felul următor: `0 1 0`.
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
0 1
0 right 1
2 right 1
end
[/input]
[output]
0 1 0
[/output]
[/test]
[test]
[input]
3
0 1 2
0 right 1
1 right 1
2 right 1
end
[/input]
[output]
0 0 0
[/output]
[/test]
[test]
[input]
5
3
3 left 2
1 left -2
end
[/input]
[output]
0 0 0 1 0
[/output]
[/test]
[test]
[input]
5
0 2 4
0 right 1
2 left 1
end
[/input]
[output]
1 1 0 0 1
[/output]
[/test]
[test]
[input]
5
0 1 2 3 4
0 right 1
2 left 1
end
[/input]
[output]
1 1 0 1 1
[/output]
[/test]
[test]
[input]
0
2 3 4
0 right 5
6 right 2
7 left 1
19 left 0
end
[/input]
[output]

[/output]
[/test]
[test]
[input]
10
2 3 4
0 right 5
6 right 2
7 left 1
19 left 0
end
[/input]
[output]
0 0 1 1 1 0 0 0 0 0
[/output]
[/test]
[test]
[input]
10
-2 -3 -4 12 32 89 6
0 right 5
6 right 2
7 left 1
19 left 0
end
[/input]
[output]
0 0 0 0 0 0 0 0 1 0
[/output]
[/test]
[test]
[input]
100
-2 -3 -4 12 32 89 6 1 12 32 89 6 1 12 32 1 1 11 1
0 right 5
6 right 2
7 left 1
19 left 0
-12 left 12
0 left 0
12 right 0
32 right 120
89 left 260
end
[/input]
[output]
0 1 0 0 0 0 0 0 1 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
[/output]
[/test]
[test]
[input]
0
0
end
[/input]
[output]

[/output]
[/test]
[test]
[input]
1
0
12 right 12
0 right 0
0 left 0
32 right 54
54 left 32
end
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
1000
100 200 300 400 500 600 700 800 900 1000
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
end
[/input]
[output]
1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
[/output]
[/test]
[test]
[input]
1000
100 200 300 400 500 600 700 800 900 1000
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
end
[/input]
[output]
0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

