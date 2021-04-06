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
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriере

Veți primi un număr de vagoane într-un tren, reprezentate ca  **n**

În următoarele **n linii** veți primi numărul persoanelor care vor urca pe acel vagon.

La final **imprimați întregul tren** și după aceea **calculați câte persoane vor fi in trenul**.

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
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Creați un program, care imparima **elemente comune** în **două matrice**.

Trebuie să **comparați elementele** din **a doua matricea** cu elementele din cea **prima**.

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
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]

## Descriere
Creați un program care creează **2 matrice**.

Aveți un număr **întreg n**.

Pe **următoarele n linii** primiți **2 numere întregi**.

Formați 2 matrici așa cum este arătat **mai jos**.

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
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Creați un program care **primește o matrice și un număr de rotații** pe care trebuie să le efectuați (primul element merge la final).

**Imprimați** rezultatul  matricei.

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
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Creați un program pentru a **găsi cele mai mari numere întregi** dintr-o matrice.

Un integer de top  este un  număr întreg care este **mai mare** decât toate elementele **din dreapta sa**.

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
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program care să determine dacă există **un element în matrice** astfel încât **suma elementelor din stânga sa** să fie **egală** cu **suma elementelor din dreapta sa** .

Dacă nu există **elemente în stânga/dreapta**, suma lor **este considerată să fie 0**.

**Imprimați** **indexul** care îndeplinește condiția necesară sau "no" dacă nu există un astfel de index. 

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 1 2 3 3 | 2 |

### Comentarii
At a\[2\] -> left sum = 3, right sum = 3

a\[0\] + a\[1\] = a\[3\]

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
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program care **găsește cea mai lungă secvență de elemente egale într-o matrice** de numere întregi.

Dacă există **câteva secvențe mai lungi**, imprimați-o pe cea **din stânga**.

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
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
 Creați un program, care **imprima toate perechile unice** dintr-o matrice de numere întregi a căror **sumă este egală cu un număr dat**.
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

Aveți o **dimensinue a câmpului** și **indicii de buburuze** în interiorul câmpului.

După aceea, pe fiecare nouă linie, până când este dată comanda "**end**", o buburuză **își schimbă poziția** fie la **stânga**, fie la **dreapta** cu o anumită lungime de zbor.

O **comandă** pentru o buburuză arată in acest mod:"0 right 1".

Aceasta înseamnă că insectă mică **plasată pe index-ul 0 ar trebui să zboare un index spre dreapta sa**.

Dacă buburuză **aterizează pe locul colegele sale**, aceasta **continuă să zboare în aceeași direcție cu aceeași lungime a zborului**.

Dacă buburuză **zboară din afară din câmpului**, ea **dispare**.

De exemplu, imaginați-vă că vi se oferă un câmp **cu dimensiunea de 3** și buburuze pe indexuri **0 și 1**.

Dacă buburuza **din index-ul 0 trebuie să zboare la dreapta sa cu lungimea de 1** (0 right 1) ea va încerca să **aterizeze pe index-ul 1** dar, din cauză că acolo există **o altă buburuză** ea va continua mai departe spre dreapta cu o lungime suplimentară de 1, aterizând pe **index-ul 2**.

După aceea, dacă aceeași buburuză trebuie să zboare la dreapta sa cu lungimea de 1 (2 right 1), va ateriza undeva **în afara câmpului**, așa că zboară **departe**: 

Dacă vi se oferă un index de buburuză **care nu are buburuză** acolo, **nu se întâmplă nimic**.

Dacă vi se oferă un index de buburuză care este **în afara câmpului**, **nu se întâmplă nimic**.

Sarcina dvs. este de a crea un program care simulează buburuzele care zboară fără să facă nimic.

La final, **imprimați toate celulele** in câmpul **separate** prin **spațiile goale**.

Pentru fiecare celulă care conține buburuze imprimați '1' și pentru fiecare celulă goală imprimați '0'.

Pentru exemplul de mai sus, rezultatul ar trebui să fie '0 1 0'.

### Intrare

- Pe prima linie veți primi un număr întreg - dimensiunea câmpului

- Pe a doua linie veți primi indecșii inițiali ai tuturor buburuzelor separate printr-un spațiu gol

Indecșii dați pot fi sau nu în interiorul domeniului câmpului

- Pe liniile următoare, până când veți obține comanda "**end**" veți primi comenzi în formatul: "\{ladybug index\} \{direction\} \{fly length\}"

### Ieșire
- Imprimați toate celulele din câmpul în formatul: "\{cell\} \{cell\} … \{cell\}"
    - dacă o celulă are buburuză, tipăriți '1'
    - dacă o celulă este goală, imprimați'0' 


### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3 | 0 1 0 |
| 0 1 | |
| 0 right 1 | |
| 2 right 1 | |
| end | |

### Comentarii
- 1 1 0 - Câmpul inițial
- 0 1 1 - câmpul după "0 right 1"
- 0 1 0 - câmpul după "2 right 1"

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

