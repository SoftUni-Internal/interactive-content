# Sets

[slide hideTitle]
# Ce sunt Sets în Java?

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-3-4-Sets-In-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Java **Collection Framework** conține numeroase **interfețe**, dintre care una este interfața **Set**.

Aceasta este modelată după abstractizarea setului matematic.

Interfața **Set** extinde interfața **Collection**.

**Interfețele** în Java reprezintă un **comportament**, fără să specifice vreo formă de **implementare**.

Scopul interfeței este să **specifice existența unor metode** cu un comportament particular, care pot fi implementate de orice clasă.

**Interfețele** nu sunt **subiectul acestui curs**. Vom învăța mai multe despre ele în cursul despre Java OOP.

**Există trei tipuri diferite de seturi:**
- `HashSet<E>`
- `TreeSet<E>`
- `LinkedHashSet<E>`

**Principalele caracteristici ale seturilor sunt:**
- Nu sunt permise elemente duplicate
- Elementele nu sunt stocate în ordine
- Oferă performanțe foarte rapide
- Pot conține **cel mult o valoare nulă**
- Spre deosebire de liste și matrice, seturile **NU** acceptă indici sau poziționarea elementelor lor

**Pe baza caracteristicilor seturilor, acestea poti fi utilizate atunci când:**
- Doriți să stocați elemente unice fără duplicate
- Vreți o performanță rapidă, iar ordinea elementelor nu este importantă

**De exemplu**, puteți utiliza un set pentru a stoca:
- **numere întregi unice**
- **cărți unice într-un joc de cărți**
- **numere în ordine aleatorie**, etc.

[/slide]

[slide hideTitle]

# HashSet

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-7-Hashset-Add-Remove-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasa **HashSet** implementează interfața **Set**, susținută de un **Hash Table**.

**Nu oferă garanții** în legătură cu **succesiunea elementelor** în timpul parcurgerii acestora.

Clasa **HashSet** oferă **performanță** constantă de timp pentru operațiile de bază - `add()`, `remove()`, `contains()` și `size()`.

- Inițializare:
```java
Set<String> hash = new HashSet<String>();
```

- `add()` - adaugă un element în `HashSet` și returnează `true` dacă elementul a fost **adăugat** cu succes

Dacă setul conține deja elementul, acesta rămâne neschimbat, iar metoda returnează `false`.

```java live
Set<String> hash = new HashSet<>();

hash.add("Peter");
hash.add("Alice");
System.out.println(hash.add("George"));

System.out.println(hash);

System.out.println(hash.add("Alice"));
```

- `remove()` - caută elemental specificat, returnează `true` dacă elementul specificat există în `HashSet`, iar apoi îl elimină; altfel, returnează `false`

```java live
Set<String> hash = new HashSet<>();

hash.add("Peter");
hash.add("Alice");
hash.add("George");

System.out.println(hash.remove("Alice"));

System.out.println(hash);

System.out.println(hash.remove("Ana"));
```


- `contains()` - returnează `true` dacă elementul există în `HashSet`, iar în caz contrar, returnează `false`

```java live
Set<String> hash = new HashSet<>();

hash.add("Peter");
hash.add("Alice");
hash.add("George");

System.out.println(hash.contains("Alice"));
System.out.println(hash.contains("Ana"));
```

- `size()` - returnează numărul de elemente care sunt stocate în `HashSet`

```java live
Set<String> hash = new HashSet<>();

hash.add("Peter");
hash.add("Alice");
hash.add("George");

System.out.println(hash.size());

```

[/slide]

[slide hideTitle]
# TreeSet

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-9-TreeSet-Add-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Elementele sunt sortate pe baza **ordinii lor naturale**.

**TreeSet** garantează costuri de timp **log(n)** pentru operațiile de bază - `add()`, `remove()` și `contains()`.

**Valorile nule** **nu sunt acceptate** de `TreeSet`.

- Inițializare:
```java
Set<String> tree = new TreeSet<>();
```

- `add()` - adaugă un element în `TreeSet`, returnează `true` dacă elementul a fost adăugat cu succes

Dacă setul conține deja elementul, acesta rămâne neschimbat, iar metoda returnează `false`.

```java live
Set<String> tree = new TreeSet<>();

tree.add("Peter");
tree.add("Alice");
tree.add("George");

System.out.println(tree);
```

- `remove()` - caută elemental specificat, returnează `true` dacă elementul specificat există în `TreeSet`, iar apoi elimină elementul; altfel, returnează `false`

```java live
Set<String> tree = new TreeSet<>();

tree.add("Peter");
tree.add("Alice");
tree.add("George");

System.out.println(tree.remove("Alice"));
System.out.println(tree.remove("Ana"));

System.out.println(tree);
```

- `contains()` - returnează `true` dacă elementele există în `TreeSet`; altfel, returnează `false`

```java live
Set<String> tree = new TreeSet<>();

tree.add("Peter");
tree.add("Alice");
tree.add("George");

System.out.println(tree.contains("Alice"));
System.out.println(tree.contains("Ana"));
```
[/slide]

[slide hideTitle]
# LinkedHashSet

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-10-LinkedHashSet-Add-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un **LinkedHashSet** este o **versiune ordonată a HashSet-lui**, care menține o listă dublă legată între toate elementele.

Un **LinkedHashSet** oferă **performanță** constantă de timp pentru operațiile de bază - `add()`, `contains()` și `remove()`.

Un LinkedHashSet permite maxim **un element nul**.

- Inițializare:
```java
Set<String> linkedHashSet = new LinkedHashSet<>();
```

- `add()` - adaugă un element în `LinkedHashSet` și returnează `true` dacă elementul a fost adăugat cu succes

Dacă setul conține deja elementul, acesta rămâne neschimbat, iar metoda returnează `false`.

```java live
Set<String> linkedHashSet = new LinkedHashSet<>();

linkedHashSet.add("Peter");
linkedHashSet.add("Alice");

System.out.println(linkedHashSet.add("George"));

System.out.println(linkedHashSet);

System.out.println(linkedHashSet.add("Alice"));
```


-  `remove()` - caută elemental specificat, returnează `true` dacă elementul specificat există în `LinkedHashSet`, iar apoi elimină elementul; altfel, returnează `false`

```java live
Set<String> linkedHashSet = new LinkedHashSet<>();

linkedHashSet.add("Peter");
linkedHashSet.add("Alice");
linkedHashSet.add("George");

System.out.println(linkedHashSet.remove("Alice"));
System.out.println(linkedHashSet.remove("Ana"));

System.out.println(linkedHashSet);

```

-  `contains()` - returnează `true` dacă elementul există în `LinkedHashSet`, iar în caz contrar, returnează `false` 

```java live
Set<String> linkedHashSet = new LinkedHashSet<>();

linkedHashSet.add("Peter");
linkedHashSet.add("Alice");
linkedHashSet.add("George");

System.out.println(linkedHashSet.contains("Alice"));
System.out.println(linkedHashSet.contains("Ana"));
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Parking Lot

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-11-Problem-and-solution-Parking-Lot-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Parking Lot" taskId="java-advanced-sets-and-maps-advanced-lab-Parking-Lot" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:
  - Înregistrează numărul corespunzător fiecărei mașini care intră în parcare
  - Elimină numărul când mașina părăsește parcarea

## Intrare
Intrarea constă într-un șir care respectă formatul \[**direction**, **carNumber**\].

Datele de intrare se opresc după introducerea șirului `END`.

## Ieșire
Rezultatul afișat este reprezentat de toate numerele mașinilor care se află în parcare.

Dacă parcarea este goală, tipăriți: `Parking Lot is Empty`.

# Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| IN, CA2844AA | CA9999TT |
| IN, CA1234TA | CA2844AA |
| OUT, CA2844AA | CA9876HH |
| IN, CA9999TT | CA2822UU |
| IN, CA2866HI |  |
| OUT, CA1234TA |  |
| IN, CA2844AA |  |
| OUT, CA2866HI |  |
| IN, CA9876HH |  |
| IN, CA2822UU |  |
| END |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| IN, CA2844AA | Parking Lot is Empty |
| IN, CA1234TA |  |
| OUT, CA2844AA |  |
| OUT, CA1234TA |  |
| END |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
IN, CA2844AA
IN, CA1234TA
OUT, CA2844AA
IN, CA9999TT
IN, CA2866HI
OUT, CA1234TA
IN, CA2844AA
OUT, CA2866HI
IN, CA9876HH
IN, CA2822UU
END
[/input]
[output]
CA9999TT
CA2844AA
CA9876HH
CA2822UU
[/output]
[/test]
[test open]
[input]
IN, CA2844AA
IN, CA1234TA
OUT, CA2844AA
OUT, CA1234TA
END
[/input]
[output]
Parking Lot is Empty
[/output]
[/test]
[test]
[input]
IN, CA2844AA
IN, CA1234TA
IN, CA9999TT
IN, CA2866HI
IN, CA2844AA
IN, CA9876HH
IN, CA2822UU
END
[/input]
[output]
CA2844AA
CA1234TA
CA9999TT
CA2866HI
CA9876HH
CA2822UU
[/output]
[/test]
[test]
[input]
END
[/input]
[output]
Parking Lot is Empty
[/output]
[/test]
[test]
[input]
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
END
[/input]
[output]
Parking Lot is Empty
[/output]
[/test]
[test]
[input]
IN, CA2844AA
IN, CA1234TA
IN, CA9999TT
IN, CA2866HI
IN, CA2844AA
IN, CA9876HH
IN, CA2822UU
OUT, CA2844AA
OUT, CA1234TA
OUT, CA9999TT
OUT, CA2866HI
OUT, CA2844AA
OUT, CA9876HH
END
[/input]
[output]
CA2822UU
[/output]
[/test]
[test]
[input]
IN, CA2844AA
IN, CA1234TA
IN, CA9999TT
IN, CA2866HI
IN, CA2844AA
IN, CA9876HH
IN, CA2822UU
IN, CA2844AA
IN, CA1234TA
IN, CA9999TT
IN, CA2866HI
IN, CA2844AA
IN, CA9876HH
IN, CA2822UU
END
[/input]
[output]
CA2844AA
CA1234TA
CA9999TT
CA2866HI
CA9876HH
CA2822UU
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: SoftUni Party

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-12-13-Problem-and-Solution-Softuni-Party-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="SoftUni Party" taskId="java-advanced-sets-and-maps-advanced-lab-SoftUni-Party" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Există o petrecere la SoftUni. Invitații pot fi de două tipuri: **VIP** și **Regular**.

Când invitatul sosește, trebuie să verificați **dacă acesta există** în oricare dintre cele **două liste de rezervare**.

Toate **numerele de rezervare** sunt formate din **8 caractere**.

Toate **numerele de rezervare VIP** încep cu o **cifră**.

## Intrare
- Până la introducerea comenzii `PARTY`, veți primi rezervări pentru invitați
- Până la introducerea comenzii `END`, veți primi o a doua listă cu invitații care au participat la petrecere
  
## Ieșire
- Pe prima linie, tipăriți **numărul invitaților** care nu au venit la petrecere
- Pe rândurile următoare, imprimați toți invitații care nu au venit la petrecere (**cei din categoria VIP trebuie să fie imprimați primii**)



## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 7IK9Yo0h | 2 |
| 9NoBUajQ | 7IK9Yo0h |
| Ce8vwPmE | tSzE5t0p |
| SVQXQCbc |  |
| tSzE5t0p |  |
| PARTY |  |
| 9NoBUajQ |  |
| Ce8vwPmE |  |
| SVQXQCbc |  |
| END |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| m8rfQBvl | 2 |
| fc1oZCE0 | MDzcM9ZK |
| UgffRkOn | xys2FYzn |
| 7ugX7bm0 |  |
| 9CQBGUeJ |  |
| 2FQZT3uC |  |
| dziNz78I |  |
| mdSGyQCJ |  |
| LjcVpmDL |  |
| fPXNHpm1 |  |
| HTTbwRmM |  |
| B5yTkMQi |  |
| 8N0FThqG |  |
| xys2FYzn |  |
| MDzcM9ZK |  |
| PARTY |  |
| 2FQZT3uC |  |
| dziNz78I |  |
| mdSGyQCJ |  |
| LjcVpmDL |  |
| fPXNHpm1 |  |
| HTTbwRmM |  |
| B5yTkMQi |  |
| 8N0FThqG |  |
| m8rfQBvl |  |
| fc1oZCE0 |  |
| UgffRkOn |  |
| 7ugX7bm0 |  |
| 9CQBGUeJ |  |
| END |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
PARTY
9NoBUajQ
Ce8vwPmE
SVQXQCbc
END
[/input]
[output]
2
7IK9Yo0h
tSzE5t0p
[/output]
[/test]
[test open]
[input]
m8rfQBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
xys2FYzn
MDzcM9ZK
PARTY
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
m8rfQBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
END
[/input]
[output]
2
MDzcM9ZK
xys2FYzn
[/output]
[/test]
[test]
[input]
m8rfQBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
xys2FYzn
MDzcM9ZK
PARTY
m8rfQBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
xys2FYzn
MDzcM9ZK
END
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
PARTY
END
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
m8rfQBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
xys2FYzn
MDzcM9ZK
PARTY
END
[/input]
[output]
15
2FQZT3uC
7ugX7bm0
8N0FThqG
9CQBGUeJ
B5yTkMQi
HTTbwRmM
LjcVpmDL
MDzcM9ZK
UgffRkOn
dziNz78I
fPXNHpm1
fc1oZCE0
m8rfQBvl
mdSGyQCJ
xys2FYzn
[/output]
[/test]
[test]
[input]
7IK9Yo0h
9NoBPajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
PARTY
9NoBPajQ
Ce8vwPmE
SVQXQCbc
END
[/input]
[output]
2
7IK9Yo0h
tSzE5t0p
[/output]
[/test]
[test]
[input]
m8rfSBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
xys2FYzn
MDzcM9ZK
PARTY
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
m8rfSBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
END
[/input]
[output]
2
MDzcM9ZK
xys2FYzn
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Card Game

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/RO/interactive-java-advanced-sets-and-maps-15-Solution-Card-Game-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Card Game" taskId="java-advanced-sets-and-maps-advanced-lab-Card-Game" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care:
   - Citește 20 de numere pentru doi jucători, separate printr-un **singur spațiu**
   - Fiecare jucător poate **să dețină numai numere unice**
   
În fiecare rundă, ambii jucători extrag numărul din partea de sus a pachetului.

Jucătorul cu numărul mai mare primește ambele numere și le adaugă în partea de jos a pachetului.

Jocul se termină după 50 de runde sau dacă un jucător își pierde toate numerele.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 26 58 16 92 44 65 65 77 57 23 71 57 7 52 85 44 32 70 38 23 | Second player wins! |
| 43 95 33 51 62 93 57 55 0 31 32 95 68 34 30 51 37 32 11 97 |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 74 78 82 42 19 39 29 69 20 42 31 77 57 36 76 26 4 9 83 42 | First player wins! |
| 15 43 80 71 22 88 78 35 28 30 46 41 76 51 76 18 14 52 47 38 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
26 58 16 92 44 65 65 77 57 23 71 57 7 52 85 44 32 70 38 23 
43 95 33 51 62 93 57 55 0 31 32 95 68 34 30 51 37 32 11 97
[/input]
[output]
Second player wins!
[/output]
[/test]
[test open]
[input]
74 78 82 42 19 39 29 69 20 42 31 77 57 36 76 26 4 9 83 42
15 43 80 71 22 88 78 35 28 30 46 41 76 51 76 18 14 52 47 38
[/input]
[output]
First player wins!
[/output]
[/test]
[test]
[input]
47 41 79 33 54 30 77 67 27 52 80 41 76 90 22 42 70 84 46 92 
42 15 96 41 37 11 29 10 94 69 98 60 22 13 0 68 84 58 76 15
[/input]
[output]
First player wins!
[/output]
[/test]
[test]
[input]
30 73 24 85 5 45 87 87 59 43 16 47 99 25 43 18 31 4 77 57 
81 63 52 85 72 63 35 46 81 29 20 3 63 44 77 51 21 41 13 30
[/input]
[output]
First player wins!
[/output]
[/test]
[test]
[input]
43 76 30 64 49 5 33 41 48 68 59 14 62 87 4 90 89 79 52 75 
9 8 90 60 74 8 28 64 22 49 27 22 65 36 65 37 2 68 95 6
[/input]
[output]
First player wins!
[/output]
[/test]
[test]
[input]
91 0 91 45 0 46 0 78 9 50 63 45 6 88 90 79 83 21 25 72 
67 60 93 9 8 88 0 86 13 68 32 80 38 87 5 17 89 26 88 8
[/input]
[output]
First player wins!
[/output]
[/test]
[test]
[input]
44 86 55 21 74 65 80 67 5 29 66 8 24 35 67 4 34 11 43 78 
44 5 31 38 2 64 50 94 52 85 75 84 34 51 79 43 13 96 38 25
[/input]
[output]
Second player wins!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
