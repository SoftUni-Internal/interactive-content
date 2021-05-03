# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Train

[code-task title="Train" taskId="java-fund-1-Lists-Train" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;
public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Pe prima linie veți primi o **listă de vagoane** (numere întregi).

Fiecare **număr întreg** reprezintă **numărul de pasageri** care se află în fiecare vagon al trenului de pasageri.

Pe linia următoare veți primi **capacitatea maximă a fiecărui vagon**, reprezentată ca un **număr întreg**.

**Până** la primirea comenzii "**end**", vi se vor oferi două tipuri de intrări:
- "**Add** \{**passengers**\}"  - adaugați un vagon la final cu numărul dat de pasageri
- "\{**passengers**\}" - **găsiți un vagon existent** care să găzduiască numărul de pasageri introdus (începând cu primul vagon)
La sfârșit, **tipăriți** starea finală a trenului (toate vagoanele separate printr-un spațiu).

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 32 54 21 12 4 0 23 | 72 54 21 12 4 75 23 10 0 |
| 75 | |
| Add 10 | |
| Add 0 | |
| 30 | |
| 10 | |
| 75 | |
| end | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
32 54 21 12 4 0 23
75
Add 10
Add 0
30
10
75
end
[/input]
[output]
72 54 21 12 4 75 23 10 0
[/output]
[/test]
[test]
[input]
0 0 0 10 2 4
10
Add 10
10
10
10
8
6
end
[/input]
[output]
10 10 10 10 10 10 10
[/output]
[/test]
[test]
[input]
57 64 60 7 39
100
24
79
32
6
158
end
[/input]
[output]
87 96 60 86 39
[/output]
[/test]
[test]
[input]
527 64 60 72 349
589
254
791
322
65
1528
end
[/input]
[output]
527 383 382 72 349
[/output]
[/test]
[test]
[input]
86 23 62 36 23 70 83 90
300
4684
7611
5029
740
6277
8480
1235
349
end
[/input]
[output]
86 23 62 36 23 70 83 90
[/output]
[/test]
[test]
[input]
4704 7637 5848
10000
Add 5755
Add 3631
Add 6616
Add 260
Add 4457
Add 3949
Add 8921
Add 7992
Add 2708
Add 4067
end
[/input]
[output]
4704 7637 5848 5755 3631 6616 260 4457 3949 8921 7992 2708 4067
[/output]
[/test]
[test]
[input]
1 2 3
10
Add 4
Add 5
Add 6
Add 7
Add 8
Add 9
Add 0
end
[/input]
[output]
1 2 3 4 5 6 7 8 9 0
[/output]
[/test]
[test]
[input]
245 658 123
1548
Add 414
Add 598
end
[/input]
[output]
245 658 123 414 598
[/output]
[/test]
[test]
[input]
10 25 35 9 5 44 15
80
26
100
200
58
Add 80
Add 80
end
[/input]
[output]
36 25 35 67 5 44 15 80 80
[/output]
[/test]
[test]
[input]
25 50 75 100
100
75
50
Add 0
25
100
end
[/input]
[output]
100 100 100 100 100
[/output]
[/test]
[test]
[input]
2 4 8 16 32
1000
750
Add 893
990
18
Add 999
254
Add 100
end
[/input]
[output]
770 994 262 16 32 893 999 100
[/output]
[/test]
[test]
[input]
46 28 18 8 7 158
248
15
69
Add 28
17
Add 148
Add 178
189
22
end
[/input]
[output]
169 217 18 8 7 158 28 148 178
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Change List
[code-task title="Change List" taskId="java-fund-1-Lists-Change-List" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care **citește o listă de numere întregi** de pe consolă și primește **comenzi** care **manipulează lista**.

Programul vostru poate primi următoarele **comenzi**:
- "**Delete** \{**element**\}" - ștergeți toate elementele din matrice care sunt egale cu elementul dat
- "**Insert** \{**element**\} \{**position**\}" - introduceți elementul în poziția dată

Trebuie să **opriți programul** când primiți comanda "**end**". 

Imprimați toate numerele din matrice, **separate printr-un spațiu**.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 2 3 4 5 5 5 6 | 1 10 2 3 4 6 |
| Delete 5 | |
| Insert 10 1 | |
| Delete 5 | |
| end | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5 5 5 6
Delete 5
Insert 10 1
Delete 5
end
[/input]
[output]
1 10 2 3 4 6
[/output]
[/test]
[test]
[input]
20 12 4 319 21 31234 2 41 23 4
Insert 50 2
Insert 50 5
Delete 4
end
[/input]
[output]
20 12 50 319 50 21 31234 2 41 23
[/output]
[/test]
[test]
[input]
429 816 83 411
Delete 816
Delete 83
end
[/input]
[output]
429 411
[/output]
[/test]
[test]
[input]
750 747 827 55
Delete 750
Delete 750
Delete 83
Delete 54
Delete 55
end
[/input]
[output]
747 827
[/output]
[/test]
[test]
[input]
56 95
Insert 198 0 
Insert 18 2 
Insert 178 3 
Insert 8 1 
Insert 25 0 
end
[/input]
[output]
25 198 8 56 18 178 95
[/output]
[/test]
[test]
[input]
21 85 29
Insert 275  0 
Insert 744  2 
Insert 73  3 
Insert 798 1 
Insert 248 0 
end
[/input]
[output]
248 275 798 21 744 73 85 29
[/output]
[/test]
[test]
[input]
444 868 119 891 717 755 564 52 246 876
Delete 119
Delete 755
Insert 755 0
Delete 876
Insert 666 5
Insert 949 6
end
[/input]
[output]
755 444 868 891 717 666 949 564 52 246
[/output]
[/test]
[test]
[input]
67 26 161 985 709 373 830
Delete 0
Delete 26
Insert 0 0
Delete 373
Delete 985
Insert 666 5
Insert 949 6
end
[/input]
[output]
0 67 161 709 830
[/output]
[/test]
[test]
[input]
216 467 876
Delete 216
Delete 876
Insert 0 0
Delete 373
Delete 985
Insert 13 0
Insert 468 1
end
[/input]
[output]
13 468 0 467
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: House Party

[code-task title="House Party" taskId="java-fund-1-Lists-House-Party" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]

## Descriere
Creați un program care ține evidența invitaților care merg la o petrecere care are loc la cineva acasă.

Pe prima linie de intrare veți primi **numărul comenzilor**.

Pe liniile următoare veți primi următoarele intrări:

"\{**name**\} **is going!**"

- Trebuie să **adăugați persoana dacă nu se află deja pe lista de invitați**
- Dacă **persoana este pe listă** tipăriți pe consolă următorul mesaj: "\{**name**\} **is already in the list!**"


"\{**name**\} **is not going!**"

- Trebuie să eliminați persoana dacă se află în listă
- Dacă nu, tipăriți următorul mesaj pe consolă: "\{**name**\} **is not in the list!**"


La sfârșitul programului, tipăriți toți invitații, fiecare pe o nouă linie.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 4 | John is not in the list! |
| Allie is going! | Allie |
| George is going! | |
| John is not going! | |
| George is not going! | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Allie is going!
George is going!
John is not going!
George is not going!
[/input]
[output]
John is not in the list!
Allie

[/output]
[/test]
[test]
[input]
5
Tom is going!
Annie is going!
Tom is going!
Garry is going!
Jerry is going!
[/input]
[output]
Tom is already in the list!
Tom
Annie
Garry
Jerry
[/output]
[/test]
[test]
[input]
5
Denny is going!
Annie is going!
Gregory is going!
Jack is going!
Sam is going!
[/input]
[output]
Denny
Annie
Gregory
Jack
Sam
[/output]
[/test]
[test]
[input]
7
Denny is going!
Sofiya is going!
Rosica is going!
Ivica is going!
Kveta is going!
Giosetta is going!
Chip is going!
[/input]
[output]
Denny
Sofiya
Rosica
Ivica
Kveta
Giosetta
Chip
[/output]
[/test]
[test]
[input]
8
Adriana is going!
Posie is going!
Eldon is going!
Posie is going!
Jack is going!
Adriana is going!
Nataly is going!
Jack is going!
[/input]
[output]
Posie is already in the list!
Adriana is already in the list!
Jack is already in the list!
Adriana
Posie
Eldon
Jack
Nataly
[/output]
[/test]
[test]
[input]
5
Adriana is going!
Posie is going!
Eldon is going!
Adriana is not going!
Posie is not going!
[/input]
[output]
Eldon
[/output]
[/test]
[test]
[input]
5
Adriana is not going!
Posie is not going!
Posie is not going!
Jack is not going!
Jack is going!
[/input]
[output]
Adriana is not in the list!
Posie is not in the list!
Posie is not in the list!
Jack is not in the list!
Jack
[/output]
[/test]
[test]
[input]
7
Adriana is going!
Nataly is going!
Posie is not going!
Nataly is going!
Jack is not going!
Nataly is not going!
Jack is going!
[/input]
[output]
Posie is not in the list!
Nataly is already in the list!
Jack is not in the list!
Adriana
Jack
[/output]
[/test]
[test]
[input]
9
Nataly is going!
Nataly is going!
Nataly is going!
Posie is not going!
Ivan is going!
Jack is not going!
Nata is not going!
Jack is going!
Pesho is going!
[/input]
[output]
Nataly is already in the list!
Nataly is already in the list!
Posie is not in the list!
Jack is not in the list!
Nata is not in the list!
Nataly
Ivan
Jack
Pesho
[/output]
[/test]
[test]
[input]
5
Misho is going!
Pesho is going!
Pesho is going!
Adriana is not going!
Adriana is going!
[/input]
[output]
Pesho is already in the list!
Adriana is not in the list!
Misho
Pesho
Adriana
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: List Operations
[code-task title="List Operations" taskId="java-fund-1-Lists-List-Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Veți primi o listă de numere **întregi** pe prima linie de intrare.

Până la primirea comenzii "**End**" vi se vor da **operații** pe care trebuie să le efectuați asupra listei.

**Comenzile posibile** sunt:
- "**Add** \{**number**\}" - adăugați un număr la sfârșit
- "**Insert** \{**number**\} \{**index**\}" - introduceți numărul la indicele dat
- "**Remove** \{**index**\}" - eliminați numărul corespunzător indicelui dat
- "**Shift left** \{**count**\}" - primul număr devine ultimul; repetați această operație de numărul indicat de ori
- "**Shift right** \{**count**\}" - ultimul număr devine primul; repetați această operație de numărul indicat de ori

**Notă**: este posibil ca indicele dat să fie în afara limitelor listei. 

În acest caz, tipăriți "**Invalid index**".

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 23 29 18 43 21 20  | 43 20 5 1 23 29 18 |
| Add 5 |  |
| Remove 5 | |
| Shift left 3 | |
| Shift left 1 | |
| End | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 23 29 18 43 21 20 
Add 5
Remove 5
Shift left 3
Shift left 1
End
[/input]
[output]
43 20 5 1 23 29 18
[/output]
[/test]
[test]
[input]
5 12 42 95 32 1
Insert 3 0
Remove 10
Insert 8 6
Shift right 1
Shift left 2
End
[/input]
[output]
Invalid index
5 12 42 95 32 8 1 3
[/output]
[/test]
[test]
[input]
73 57 29
Add 15
Add 58
Add 17
Add 97
End
[/input]
[output]
73 57 29 15 58 17 97
[/output]
[/test]
[test]
[input]
39 54 66
Add 1500
Add 59588
Add 1718
Add 9227
End
[/input]
[output]
39 54 66 1500 59588 1718 9227
[/output]
[/test]
[test]
[input]
39 54 66
Insert 1500 1
Insert 59588 0
Insert 1718 4
Insert 9227 2
End
[/input]
[output]
59588 39 9227 1500 54 1718 66
[/output]
[/test]
[test]
[input]
25 87
Insert 23 1
Insert 1 0
Insert 22 3
Insert 0 2
Insert 80 2
Insert 15 2
Insert 52 2
Insert 16 2
End
[/input]
[output]
1 25 16 52 15 80 0 23 22 87
[/output]
[/test]
[test]
[input]
90 29 49 20 0 84 64 62 50 2
Remove 0
Remove 5
Remove 4
Remove 6
Remove 0
Remove 1
Remove 3
Remove 1
End
[/input]
[output]
49 62
[/output]
[/test]
[test]
[input]
91 33 11 34 20 23 47 70 53 19 31 25 20 12 50 39 86 94 98 97 30 46 84 79 95 45 89 29 34 4 43 1 81 81 31 18 11 81 52 90 24 92 36 97 6 26 57 74 18 0
Remove 0
Remove 25
Remove 34
Remove 16
Remove 10
Remove 11
Remove 13
Remove 24
End
[/input]
[output]
33 11 34 20 23 47 70 53 19 31 20 50 39 98 97 30 46 84 79 95 45 29 34 4 1 81 81 31 18 81 52 90 24 92 36 97 6 26 57 74 18 0
[/output]
[/test]
[test]
[input]
67 50 97 67 29
Shift left 5
Shift left 5
Shift left 5
End
[/input]
[output]
67 50 97 67 29
[/output]
[/test]
[test]
[input]
58 27 8 43 72
Shift left 2
Shift left 7
Shift left 20
End
[/input]
[output]
72 58 27 8 43
[/output]
[/test]
[test]
[input]
58 27 8 43 72
Shift right 2
Shift right 7
Shift right 20
End
[/input]
[output]
27 8 43 72 58
[/output]
[/test]
[test]
[input]
13 764 666 89 27 24
Shift right 3
Shift right 17
Shift right 7
Shift right 8
End
[/input]
[output]
764 666 89 27 24 13
[/output]
[/test]
[test]
[input]
58 27
Add 24
Insert 89 1
Insert 666 1
Add 764
Remove 0
Remove 185
Insert 13 4
Remove -9
Insert 245 -54
Shift left 17
Shift right 7
End
[/input]
[output]
Invalid index
Invalid index
Invalid index
13 764 666 89 27 24
[/output]
[/test]
[test]
[input]
58 27 8 43 72
Add 24
Remove 3
Remove 27
Insert 13 4
Insert 9999 -54
Shift right 20
Shift left 3
End
[/input]
[output]
Invalid index
Invalid index
27 8 72 13 24 58
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Bomb Numbers

[code-task title="Bomb Numbers" taskId="java-fund-1-Lists-Bomb-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește **o secvență de numere și un număr special care corespunde unei bombe** și care are o anumită putere.

Sarcina voastră este să **detonați fiecare apariție a numărului special** și în funcție de puterea sa **numerele din stânga și din dreapta sa**.

Puterea bombei se referă la câte numere adiacente vor fi eliminate, oricare ar fi valoarea acestora.

Detonările se efectuează **de la stânga la dreapta** și toate numerele detonate **dispar**.

La final, **tipăriți suma elementelor rămase** în secvență.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 2 2 4 2 2 2 9  | 12 |
| 4 2 | |

[hints]
[hint]
Numărul special este 4 și are puterea 2.
[/hint] 
[hint]
După detonare rămâne următoarea secvență: \[1, 2, 9\]. Suma numerelor este 12.
[/hint] 
[/hints] 

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 4 4 2 8 9 1 | 5 |
| 9 3 | |

[hints]
[hint]
Numărul special este 9 și are puterea 3.
[/hint] 
[hint]
După detonare rămâne următoarea secvență: \[1, 4\], iar suma numerelor este 5.
[/hint] 
[hint]
Deoarece 9 are doar 1 vecin în dreapta, eliminăm doar numărul 1 (eliminăm doar un număr, în loc de 3).
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 2 4 2 2 2 9
4 2
[/input]
[output]
12
[/output]
[/test]
[test open]
[input]
1 4 4 2 8 9 1
9 3
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
1 7 7 1 2 3
7 1
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1 1 2 1 1 1 2 1 1 1
2 1
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 2 1 1 1
2 3
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1 1 2 1 1
2 2
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
8 1 8 1 1 8 1 8 0 0 9
8 2
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
1 2 1 1 2 1 1 2 2 1
2 0
[/input]
[output]
6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Card Game
[code-task title="Card Game" taskId="java-fund-1-Lists-Cards-Game" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]

## Descriere
Vi se vor oferi două mâini de cărți, care vor fi reprezentate de **numere întregi**.

Să presupunem că sunt **doi jucători**.

Trebuie să **aflați** mâna câștigătoare și câștigătorul.

Începeți de la începutul ambelor pachete deținute de jucători. **Comparați** cărțile din prima mâna cu cărțile din cea de-a doua mână.

Jucătorul **care are cartea cea mai mare la iterația curentă** ia ambele cărți și le pune la finalul pachetului din mână sa - cartea celui de-al doilea jucător este ultima, iar cartea primei persoane (cea câștigătoare) este înaintea ei. Jucătorul cu cartea mai mică trebuie să scoată cartea din pachetul său de cărți.

Dacă cărțile jucătorilor **au aceeași valoare** nu există un câștigător, iar cele două cărți trebuie scoase din ambele pachete.

**Jocul se termină**, când unul dintre jucători rămâne **fără nicio carte**.

Trebuie să **tipăriți câștigătorul pe consolă** și **suma cărților rămase în pachet**: "\{**First/Second**\} **player wins! Sum:** \{**sum**\}".

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 20 30 40 50  | First player wins! Sum: 240 |
| 10 20 30 40 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
20 30 40 50
10 20 30 40
[/input]
[output]
First player wins! Sum: 240
[/output]
[/test]
[test]
[input]
10 20 30 40 50
50 40 30 30 10
[/input]
[output]
Second player wins! Sum: 50
[/output]
[/test]
[test]
[input]
42 83 37 84 75 47 99
54 3 20 48 91 25 88
[/input]
[output]
First player wins! Sum: 796
[/output]
[/test]
[test]
[input]
21 19 59 47 99 92 87 19 50 34
14 10 20 51 71 77 82 13 54 50
[/input]
[output]
First player wins! Sum: 969
[/output]
[/test]
[test]
[input]
200 157 300
100 200 300
[/input]
[output]
Second player wins! Sum: 257
[/output]
[/test]
[test]
[input]
70 92 27 70 56 28 73 10
53 47 97 89 7 37 18 52
[/input]
[output]
Second player wins! Sum: 826
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Append Arrays

[code-task title="Append Arrays" taskId="java-fund-1-Lists-Append-Arrays" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program pentru a **alătura mai multe matrice** de numere.

- **Matricele** sunt **separate** prin '\|'

- **Valorile** sunt **separate** prin spații (' ', unul sau mai multe)

- Începeți cu matricea din **dreapta** (mergând spre cea din **stânga**) și plasați matricele într-o matrice nouă în ordinea stabilită

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 2 3 \|4 5 6 \|  7  8  | 7 8 4 5 6 1 2 3 |
| 7 \| 4  5\|1 0\| 2 5 \|3  | 3 2 5 1 0 4 5 7 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 \|4 5 6 \|  7  8
[/input]
[output]
7 8 4 5 6 1 2 3
[/output]
[/test]
[test open]
[input]
7 \| 4  5\|1 0\| 2 5 \|3
[/input]
[output]
3 2 5 1 0 4 5 7
[/output]
[/test]
[test]
[input]
1\| 4 5 6 7 \| 8 9
[/input]
[output]
8 9 4 5 6 7 1
[/output]
[/test]
[test]
[input]
1 2 3 \|4 5 6 \|  7  8
[/input]
[output]
7 8 4 5 6 1 2 3
[/output]
[/test]
[test]
[input]
1\| 4 5 6 7 \| 8 9
[/input]
[output]
8 9 4 5 6 7 1
[/output]
[/test]
[test]
[input]
1 \| \| \|\|\|2   3 \|4   5 6 \| 7 8\| -3 2   1\|\|1 2\|3\|4\|99 77
[/input]
[output]
99 77 4 3 1 2 -3 2 1 7 8 4 5 6 2 3 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Pokemon Don't Go

[code-task title="Pokemon Don't Go" taskId="java-fund-1-Lists-Pokemon-Don't-Go" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
În **Pokemon Don't Go**, când vă îndreptați spre un anumit pokemon, pokemonii mai apropiați de voi se îndepărtează, iar cei aflați mai departe de voi se apropie.

Veți primi **o secvență de numere întregi, separate prin spații** - **distanțe** până la pokemon.

Apoi, veți începe **să primiți numere întregi**, care vor corespunde cu **indicii** din secvență.

**Când primiți un indice**, trebuie să **eliminați din secvență elementul corespunzător acelui indice** (ca și cum ați fi capturat pokemonul).

- Trebuie să măriți valoarea tuturor elementelor din secvență care sunt **mai mici sau egale cu valoarea elementului eliminat**, cu **valoarea** **elementului eliminat**

- Trebuie să scădeți valoarea tuturor elementelor din secvență care sunt **mai mari decât elementul eliminat**, cu **valoarea elementului eliminat**

Dacă indicele dat este **mai decât 0**, **eliminați primul element al secvenței** și **copiați ultimul element în locul acestuia**.

Dacă indicele dat este **mai mare decât ultimul indice al secvenței**, **eliminați ultimul element din secvență** și **copiați primul element în locul său**.

Mărirea și micșroarea elementelor trebuie făcută și în aceste cazuri. 

Elementul a cărui valoare trebuie utilizată este **elementul eliminat**.

**Programul se încheie** când **nu mai rămâne** niciun element în secvență.


### Intrare

- Pe prima linie de intrare veți primi o secvență de numere întregi, separate prin spații

- Pe următoarele câteva linii veți primi numere întregi - indici

### Ieșire

Când programul se termină, trebuie să imprimați pe consolă suma tuturor elementelor **ELIMINATE**.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 4 5 3 | 14 |
| 1 | |
| 1 | |
| 0 | |

[hints]
[hint]
Matricea este \{**4, 5, 3**\}.

Primul indice primit este **1**.
Eliminăm **5** și mărim toate elementele care sunt mai mici decât 5 și micșorăm toate elementele mai mari.
În acest caz, toate elementele sunt mai mici decât 5.

Rezultatul este \{**9, 8**\}.
[/hint] 
[hint]
Următorul indice primit este **1**. 
Prin urmare, eliminăm **8** și scădem toate elementele mai mari decât acesta.

Rezultatul este \{**1**\}.
[/hint] 
[hint]
Ultimul indice este **0**. 

Prin urmare, eliminăm **1**.
Nu mai există elemente, deci trebuie să imprimăm suma tuturor elementelor eliminate:
**5 + 8 + 1 = 14**

`System.out.println(sum); // Output: 14`
[/hint] 
[/hints] 

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 5 10 6 3 5 | 31 |
| 4 | |
| 1 | |
| 1 | |
| 3 | |
| 0 | |
| 0 | |

[hints]
[hint]
Matricea este \{**5, 10, 6, 3, 5**\}.

Pasul 1: \{**11, 4, 9, 11**\}.
[/hint] 
[hint]
Pasul 2: \{**22, 15, 20, 22**\}.
[/hint] 
[hint]
Pasul 3: \{**7, 5, 7**\}
[/hint] 
[hint]
Pasul 4: \{**2, 2**\}
[/hint] 
[hint]
Pasul 5: \{**4, 4**\}
[/hint] 
[hint]
Pasul 6: \{**8**\}
[/hint] 
[hint]
Pasul 7: \{\} (empty)

Nu mai există elemente, așa că imprimăm suma tuturor elementelor eliminate:
**6 + 11 + 15 + 5 + 2 + 4 + 8 = 51**

`System.out.println(sum); // Output: 51`
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4 5 3
1
1
0

[/input]
[output]
14

[/output]
[/test]
[test open]
[input]
5 10 6 3 5
2
4
1
1
3
0
0

[/input]
[output]
51

[/output]
[/test]
[test]
[input]
1 2 3 4 5
2
0
2
1
0

[/input]
[output]
42

[/output]
[/test]
[test]
[input]
10 5 2 3 104 4 30 2 1
4
5
0
0
2
1
1
0
0

[/input]
[output]
31365

[/output]
[/test]
[test]
[input]
1 1 1 1 1
4
3
2
1
0
[/input]
[output]
31

[/output]
[/test]
[test]
[input]
4 8 15 16 23 42
0
1
3
1
0
0

[/input]
[output]
105

[/output]
[/test]
[test]
[input]
124 56 93 20 31 40 59 2 11 3 11
10
3
2
0
5
1
2
1
0
0
0

[/input]
[output]
995

[/output]
[/test]
[test]
[input]
1 2 3 4 3 2 1
3
2
2
1
1
0
0

[/input]
[output]
427

[/output]
[/test]
[test]
[input]
102 31 24 54
3
10
0
-1
0
0

[/input]
[output]
748

[/output]
[/test]
[test]
[input]
123 321
-12491287
12412831
0
0

[/input]
[output]
1509

[/output]
[/test]
[test]
[input]
1 1
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
0
0

[/input]
[output]
65535

[/output]
[/test]
[test]
[input]
-2 1
1
0

[/input]
[output]
0

[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: SoftUni Course Planning
[code-task title="SoftUni Course Planning" taskId="java-fund-1-Lists-SoftUni-Course-Planning" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Trebuie să participați la planificarea următorului curs Programming Fundamentals prin monitorizarea lecțiilor care vor fi incluse în curs, precum și a exercițiilor din cadrul lecțiilor.

Pe prima linie din intrare veți primi planificarea inițială a lecțiilor și exercițiilor care vor face parte din curs, separate prin virgulă și spațiu ", ".

Înainte de începerea cursului, trebuie făcute câteva modificări.

Până la primirea comenzii "**course start**", vi se vor oferi câteva **comenzi pentru a modifica planificarea cursului**.

**Comenzile posibile** sunt:
- "**Add:**\{**lessonTitle**\}" - **adăugați lecția la sfârșitul** planificării, dacă **nu există**
- "**Insert**:\{**lessonTitle**\}:\{**index**\}" - **introduceți** lecția la **indicele dat**, dacă **nu există**
- "**Remove:**\{**lessonTitle**\}" - **eliminați lecția**, dacă **există**
- "**Swap:**\{**lessonTitle**\}:\{**lessonTitle**\}" - **schimbați locul** celor două lecții, **dacă există**
- "**Exercise:**\{**lessonTitle**\}" - dacă lecția există și nu există încă un exercițiu, **adăugați exercițiul în program, imediat după indicele lecției**, în următorul format: "**- - -** \{**lessonTitle**\}**-Exercise**"
    - dacă **lecția nu există**, **adăugați** lecția **la sfârșitul** programului cursului, **urmat de exercițiu**

De fiecare dată când **schimbați sau eliminați o lecție,** trebuie **să faceți același lucru cu exercițiile** care urmează după lecții, în cazul în care acestea există.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| Data Types, Objects, Lists | 1.Arrays |
| Add:Databases | 2.Data Types |
| Insert:Arrays:0 | 3.Objects |
| Remove:Lists | 4.Databases |
| course start | |

[hints]
[hint]
Primim planificarea inițială.

Apoi, adăugăm lecția **Databases**, deoarece acesta nu există:

```java
if (!schedule.contains(lessonTitle)) {
    schedule.add(lessonTitle);
}
```
[/hint] 
[hint]
Inserăm lecția **Arrays** la indicele dat, fiindcă nu este prezentă în program:

```java
if (!schedule.contains(lessonTitle)) {
    if (index >= 0 && index < schedule.size()) {
        schedule.add(index, lessonTitle);
    }
}
```
[/hint] 
[hint]
După ce am primit ultima comanda și am eliminat lecția **Lists**, imprimăm întreaga planificare.

`schedule.remove(lessonTitle);`

```java
for (int i = 1; i <= schedule.size(); i++) {
    System.out.println(i + "." + schedule.get(i - 1));
}
```
[/hint] 
[/hints] 

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| Arrays, Lists, Methods | 1.Methods |
| Swap:Arrays:Methods | 2.Databases |
| Exercise:Databases | 3.Databases-Exercise |
| Swap:Lists:Databases | 4.Arrays |
| Insert:Arrays:0 | 5.Lists |
| course start | |


[hints]
[hint]
Schimbăm lecțiile date, deoarece ambele există în planificare:

```java
swapping(schedule, lessonTitle, swapLessonWith);
```

Puteți implementa o metodă `swapping` personalizată.
[/hint] 
[hint]
După primirea comenzii **Exercise**, vedem că o astfel de lecție nu există, așa că adăugăm lecția la final, urmată de exercițiu:

```java
if (!schedule.contains(lessonTitle + "-Exercise")) {
    schedule.add(lessonTitle);
    schedule.add(lessonTitle + "-Exercise");
}
```
[/hint] 
[hint]
Schimbăm lecțiile **Lists** și **Databases**.
**Exercițiul** este de asemenea mutat după lecția **Databases**:

```java
swapping(schedule, lessonTitle, swapLessonWith);
```
[/hint] 
[hint]
Omitem următoarea comandă, deoarece avem deja o astfel de lecție în programul nostru.
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Data Types, Objects, Lists
Add:Databases
Insert:Arrays:0
Remove:Lists
course start
[/input]
[output]
1.Arrays
2.Data Types
3.Objects
4.Databases
[/output]
[/test]
[test open]
[input]
Arrays, Lists, Methods
Swap:Arrays:Methods
Exercise:Databases
Swap:Lists:Databases
Insert:Arrays:0
course start
[/input]
[output]
1.Methods
2.Databases
3.Databases-Exercise
4.Arrays
5.Lists
[/output]
[/test]
[test]
[input]
aa, bb, cc
Add:dd
course start
[/input]
[output]
1.aa
2.bb
3.cc
4.dd
[/output]
[/test]
[test]
[input]
aa, dd, cc
Add:bb
course start
[/input]
[output]
1.aa
2.dd
3.cc
4.bb
[/output]
[/test]
[test]
[input]
aa, bb, cc
Insert:dd:2
course start
[/input]
[output]
1.aa
2.bb
3.dd
4.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Remove:bb
course start
[/input]
[output]
1.aa
2.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Remove:cc
course start
[/input]
[output]
1.aa
2.bb
[/output]
[/test]
[test]
[input]
aa, bb, cc
Exercise:bb
course start
[/input]
[output]
1.aa
2.bb
3.bb-Exercise
4.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Exercise:cc
Exercise:cc
Exercise:dd
course start
[/input]
[output]
1.aa
2.bb
3.cc
4.cc-Exercise
5.dd
6.dd-Exercise
[/output]
[/test]
[test]
[input]
aa, bb, cc
Swap:aa:bb
Swap:aa:dd
course start
[/input]
[output]
1.bb
2.aa
3.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Add:dd
Insert:dd:2
Insert:ff:1
Remove:bb
Exercise:bb
Exercise:cc
Swap:aa:bb
Swap:aa:dd
course start
[/input]
[output]
1.bb
2.bb-Exercise
3.ff
4.cc
5.cc-Exercise
6.aa
7.dd
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


