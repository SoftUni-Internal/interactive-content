# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Listy Iterator
[code-task title="Listy Iterator" taskId="oop-basics-java-iterators-and-comparators-Listy-Iterator" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
 
[task-description]
## Descriere
Creați o `class ListyIterator`.

Aceasta trebuie să primească colecția de **Strings** pe care o va itera, prin intermediul constructorului său. 
Trebuie să listați elementele într-o **List**.

Clasa trebuie să aibă trei funcții principale :

- `Move` - trebuie să mute o poziție **index** la următorul index din lista, metoda trebuie să returneze **true** dacă este mutată suficient și **false** dacă nu mai există un index următor

- `HasNext` - trebuie să returneze **true** dacă există un index următor și **false** dacă indexul este deja la elementul **last** din listă
- `Print` - trebuie să **print** elementul la indexul curent, solicitând Print colecției fără elemente care trebuie să **throw** o **exception** corespunzătoare cu mesajul "**Invalid Operation!**"

Automat, indexul intern trebuie să ducă spre **the zero index** din listă. Programul trebuie să primească următoarele comenzi: 

| **Command** | **Return Type** | **Description** |
| --- | --- | --- |
| Create \{e1 e2 …\} | void | Creates a ListyIterator from the specified collection. In case of a Create command without any elements, you should create a ListyIterator with an empty collection. |
| Move | boolean | This command should move the internal index to the next index. |
| Print | void | This command should print the element at the current internal index. |
| HasNext | boolean | Returns whether the collection has the next element. |
| END | void | Stops the input. |

## Date de Intrare

Datele de intrare vor veni din consolă sub formă de **lines** de comenzi. 

Prima linie va fi **always** și va **Create** comanda în datele de intrare. 

Ultima comandă primită ca fi **always** aceea de `END`.

## Date de Ieșire

Pentru orice comandă din input (cu excepția **END** și **Create** ) imprimați rezultatul acelei comenzi în consolă, pentru fiecare **new line**. 

In cazul comenzilor **Move** sau **HasNext** imprimați **returned value** a metodei, în cazul unei comenzi **Print** nu este nevoie să faceți nimic în plus, metoda se va printa pe consolă. 

Programul trebuie să prindă **any exceptions thrown** pentru validare (apelează Print pentru o colecție goală) și imprimă mesajele acestora în loc. 

## Constrângeri

- Va exista întotdeauna doar o comandă **one Create** și va fi mereu prima comandă transmisă
- Numărul de comenzi primite va fi **between** [1 ... 100]
- Ultima comandă va fi întotdeauna comanda `END`


## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| Create | Invalid Operation! |
| Print | false |
| Move | false |
| HasNext |  |
| END |  |

| **Intrare**|**Ieșire**|
| --- | --- |
| Create Stan Johnson | true |
| HasNext | Stan |
| Print | true |
| Move | Johnson |
| Print |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Create
Print
Move
HasNext
END
[/input]
[output]
Invalid Operation!
false
false
[/output]
[/test]
[test open]
[input]
Create Stan Johnson
HasNext
Print
Move
Print
END
[/input]
[output]
true
Stan
true
Johnson
[/output]
[/test]
[test]
[input]
Create
Print
END
[/input]
[output]
Invalid Operation!
[/output]
[/test]
[test]
[input]
Create Steven Grand
HasNext
Print
Move
Print
END
[/input]
[output]
true
Steven
true
Grand
[/output]
[/test]
[test]
[input]
Create 1 2 3
HasNext
Move
HasNext
HasNext
Move
HasNext
END
[/input]
[output]
true
true
true
true
true
false
[/output]
[/test]
[test]
[input]
Create Steven Grand
HasNext
Print
Move
Print
Move
Print
Move
Print
END
[/input]
[output]
true
Steven
true
Grand
false
Grand
false
Grand
[/output]
[/test]
[test]
[input]
Create Steven Grand
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
Print
END
[/input]
[output]
true
true
true
true
true
true
true
true
true
true
true
true
true
true
true
true
true
true
Steven
[/output]
[/test]
[test]
[input]
Create Steven Grand
END
[/input]
[output]

[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Collection
[code-task title="Collection" taskId="oop-basics-java-iterators-and-comparators-Collection" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Folosind `ListyIterator` din ultima problemă, extindeți prin implenetarea unei interfețe `Iterable`.

Implementați **all** metode dorite prin interfață, manual.

Adăugați o nouă metodă clasei `PrintAll()`, metoda trebuie să folosească `foreach` al colecției și să imprime toate elementele pe o **single line** separate printr-un spațiu.

## Datele de intrare
Inputul va veni din consolă ca **lines** de comenzi. Prima linie va fi întotdeauna comanda`Create`. 

Ultima comandă **last** primită va fi întotdeauna comanda `END`.

## Date de ieșire
Pentru fiecare comandă din input (cu excepția comenzilor `END` și `Create`) imprimați rezultatul comenzii în consolă, fiecare pe o **new line**. 

In cazul comenzilor `Move` sau `HasNext` printați valoarea returnată a metodei, în cazul unei comenzi `Print`, nu este nevoie să faceți nimic în plus, comanda se va imprima prin consolă. 

In cazul unei comenzi `PrintAll`, trebuie să imprimați toate elementele pe o singură linie **separated by spaces**. Programul vostru trebuie să prindă **any exceptions** apărută, din cauza validărilor și să imprime mesajele lor, în loc. 

## Constrângeri
- **Do not use the built-in iterators!**
- Va fi întotdeauna numai **one** `Create` **command** și va fi  **always** prima comandă transmisă
- Numărul de comenzi primite va fi **between** [1 ... 100]
- Ultima comandă **last** command va fi întotdeauna  comanda `END`

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| Create 1 2 3 4 5 | true |
| Move | 1 2 3 4 5 |
| PrintAll |  |
| END |  |


| **Intrare**|**Ieșire**|
| --- | --- |
| Create Steven John Kevin | Steven John Kevin  |
| PrintAll | true |
| Move | true |
| Move | Kevin |
| Print | false |
| HasNext |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Create 1 2 3 4 5
Move
PrintAll
END
[/input]
[output]
true
1 2 3 4 5
[/output]
[/test]
[test open]
[input]
Create Steven John Kevin
PrintAll
Move
Move
Print
HasNext
END
[/input]
[output]
Steven John Kevin 
true
true
Kevin
false
[/output]
[/test]
[test]
[input]
Create Steven John Kevin
PrintAll
Move
Move
Print
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
HasNext
END
[/input]
[output]
Steven John Kevin 
true
true
Kevin
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
false
[/output]
[/test]
[test]
[input]
Create Steven John Kevin
PrintAll
Move
Move
Print
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
HasNext
HasNext
asd
asd
asd
asd
asd
PrintAll
END
[/input]
[output]
Steven John Kevin 
true
true
Kevin
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
false
false
Steven John Kevin
[/output]
[/test]
[test]
[input]
Create Steven John Kevin
PrintAll
Move
END
[/input]
[output]
Steven John Kevin 
true
[/output]
[/test]
[test]
[input]
Create Steven John Kevin
PrintAll
Move
Move
Move
Move
Move
Move
Move
Move
Move
Move
Move
PrintAll
END
[/input]
[output]
Steven John Kevin 
true
true
false
false
false
false
false
false
false
false
false
Steven John Kevin
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Stack Iterator
[code-task title="Stack Iterator" taskId="oop-basics-java-iterators-and-comparators-Stack-Iterator" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Aveți ca sarcină să creați o anumită stivă.

Cunoașteși deja structura Stivei.

Elementele sunt stocate într-o colecție. 

Aceasta are două funcții ( nu din programarea funcțională)  - `push` și `pop` un element.

Primul element **popped** se află pe **last position** in colecție.

Metoda `push` adaugă un element în capătul **top** al colecției și metoda `pop` returnează elementul din **top** și îl elimină **removes**.

Scrieți modul de implementare al `Stack<Integer>` și implementați **iterator** dorit. 

Clasa Stivă trebuie să implementeze o interfață `Iterable<Integer>` și  **Iterator Class** trebuie să implementeze interfața `Iterator<Integer>`. 

Interatorul dorit trebuie să urmeze regulile **Abstract Data Type - Stack**. 

Primul element este elementul din capăt și așa mai departe. 

Iteratorii sunt folosiți doar pentru iterarea în cadrul colecției, ei  **should not** elimine sau să mute elementele. 

## Input
Datele de intrare pot fi de doar două tipuri `Push` și `Pop`, urmate de integerii pentru comanda `Push` și **no other** dată pentru comanda `Pop`. 

Fiecare comandă va veni pe o linie separată. 

Format:
- `Push {element, secondElement…}`
- `Pop`

## Output
Programul se va opri când vom primi comanda `END`. 

Pentru fiecare stivă  **twice** imprimăm toate elementele. Fiecare element trebuie să fie pe o **new line**.

## Constrângeri
- Elementele din comanda `Push` vor fi **valid** integeri **between** [2 ^ -32 ... 2 ^ 32 - 1]
- Comanda va fi întotdeauna **valid** (întotdeauna va fi fie `Push`, `Pop`, sau `END`)
- Nu vor putea fi mai mult de **16** elemente în comanda `Push`
- Dacă comanda `Pop` **could not** să fie executată așa cum ne așteptăm( e.g. nu există elemente în stivă), imprimăm în consolă: `No elements`

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| Push 1, 2, 3, 4 | 2 |
| Pop | 1 |
| Pop | 2 |
| END | 1 |

| **Intrare**|**Ieșire**|
| --- | --- |
| Push 1, 2, 3, 4  | 1 |
| Pop | 3 |
| Push 1 | 2 |
| END | 1 |
|  | 1 |
|  | 3 |
|  | 2 |
|  | 1 |

| **Intrare**|**Ieșire**|
| --- | --- |
| Push 1, 2, 3, 4  | No elements |
| Pop |  |
| Pop |  |
| Pop |  |
| Pop |  |
| Pop |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Push 1, 2, 3, 4
Pop
Pop
END
[/input]
[output]
2
1
2
1
[/output]
[/test]
[test open]
[input]
Push 1, 2, 3, 4 
Pop
Push 1
END
[/input]
[output]
1
3
2
1
1
3
2
1
[/output]
[/test]
[test open]
[input]
Push 1, 2, 3, 4 
Pop
Pop
Pop
Pop
Pop
END
[/input]
[output]
No elements
[/output]
[/test]
[test]
[input]
Push 1, 2, 3, 4, 5
Pop
Pop
Pop
END
[/input]
[output]
2
1
2
1
[/output]
[/test]
[test]
[input]
Push 1, 2, 3, 4, 5 
Pop
Pop
Push 1
END
[/input]
[output]
1
3
2
1
1
3
2
1
[/output]
[/test]
[test]
[input]
Push 1, 2, 3, 4, 5 
Pop
Pop
Pop
Pop
END
[/input]
[output]
1
1
[/output]
[/test]
[test]
[input]
Push 1, 2, 3, 4 
Pop
Pop
Pop
Pop
END
[/input]
[output]

[/output]
[/test]
[test]
[input]
Push 1, 2, 3, 4, 5 
Pop
Pop
Pop
Pop
Pop
Pop
END
[/input]
[output]
No elements
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Program: Froggy
[code-task title="Froggy" taskId="oop-basics-java-iterators-and-comparators-Froggy" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Să jucăm un joc. 

Avem o mică, fragilă **Frog**, și un **Lake** cu numere.

 **Lake** și numerele sale le vom primi ca date de intrare din consolă.

Imaginați-vă că **Frog** aparține **Lake**.

 **Frog jumps** numai când primim comanda`END`

Când **Frog** începe să sară, imprimăm în consolă **each number** prin care **Frog** a sărit. 

Pentru a calcula săriturile, folosim liniile ghid.

Săriturile încep de la  **zero index**. 

Folosing paternul - mai întâi toate indexurile pare, în ordine **ascending** (0 -> 2 -> 4 -> 6 and so on)și apoi toate indexurile impare în ordine **ascending** (1 -> 3 -> 5 -> 7 și așa mai departe). 

Considerăm indexul **zero** ca fiind **even**.

Povestea pe scurt: Creați o Clasă `Lake`, care trebuie să implementeze interfața - `Iterable`. 

Inăuntrul  `Lake`, creați o clasă - `Frog`și implementați interfața `Iterator`. 

Veți primi **only integers**.

## Input
Datele de intrare vor consta din două linii. Prima linie-numerele **initial** din lake, **separated** prin virgulă și un singur spațiu.

A doua linie de comandă este `END`.

## Output
Când primiți `END`, datele de intrare s-au terminat. 

**Foreach** colecție de numere, **Frog** a sărit peste și a printat **each** element.

Ieșirea va fi imprimată pe o **single** linie.

Format:

`{number}, {second number}, {third number} ...`

## Constrângeri
- Numerele **Lake's**  vor fi integeri **valid** în gama **range** [2 ^ -32 ... 2 ^ 32 - 1]
- Comanda va fi întotdeauna **valid** - `END`

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| 1, 2, 3, 4, 5, 6, 7, 8 | 1, 3, 5, 7, 2, 4, 6, 8 |
| END |  |

| **Intrare**|**Ieșire**|
| --- | --- |
| 1, 2, 3 | 1, 3, 2 |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
1, 2, 3, 4, 5, 6, 7, 8
END
[/input]
[output]
1, 3, 5, 7, 2, 4, 6, 8
[/output]
[/test]
[test open]
[input]
1, 2, 3
END
[/input]
[output]
1, 3, 2
[/output]
[/test]
[test]
[input]
1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
END
[/input]
[output]
1, 3, 5, 7, 1, 3, 5, 7, 2, 4, 6, 8, 2, 4, 6, 8
[/output]
[/test]
[test]
[input]
1, 2, 3, 4
END
[/input]
[output]
1, 3, 2, 4
[/output]
[/test]
[test]
[input]
1, 2, 3, 4, -3, -0, 0
END
[/input]
[output]
1, 3, -3, 0, 2, 4, 0
[/output]
[/test]
[test]
[input]
0
END
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
10000000, 100000000, 100000000
END
[/input]
[output]
10000000, 100000000, 100000000
[/output]
[/test]
[test]
[input]
3, 3, 3
END
[/input]
[output]
3, 3, 3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Comparing Objects
[code-task title="Comparing Objects" taskId="oop-basics-java-iterators-and-comparators-Comparing-Objects" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Este o interfață comparabilă pe care deja, probabil, o știți. 

Sarcina este simplă.

Creați o **Class Person**.

Fiecare persoană trebuie să aibă **name**, **age** și **town**.

Trebuie să implementați interfața - `Comparable` și să încercați să scrieți peste metoda  `compareTo`.

Când comparați două persoane, în primul rând trebuie să le comparați  **names**, apoi, **age** și în final, dar nu în ultimul rând, **town**.


## Input
Pe o singură linie, veți primi oamenii în formatul :

`{name} {age} {town}`

Colectați datele până veți primi `END`

După aceea, veți primi un integer **N** - persoana cu numărul **Nth** din colecția voastră.

## Output
Pe o singură linie de ieșire, veți aduce statisticile, câți oameni sunt **equal** cu persoana **Nth person**, câți oameni sunt **not** egali cu această persoană și câte persoane aveți în **total** în colecție. 

Format:

`{number of equal people} {number of not equal people} {total number of people}`

## Constrângeri
- Numele, vârstele și adresele vor fi **valid**
- Numărul de intrare va fi întotdeauna un integer **valid** în **range** [2 ... 100]
- Dacă nu avem persoane egale, imprimăm: `No matches`

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| Peter 22 Venice | No matches |
| George 14 San Francisco |  |
| END |  |
| 2 |  |

| **Intrare**|**Ieșire**|
| --- | --- |
| John 22 Miami | 2 1 3 |
| Adam 22 Miami |  |
| Adam 22 Miami |  |
| END |  |
| 2 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Peter 22 Venice
George 14 San Francisco
END
2
[/input]
[output]
No matches
[/output]
[/test]
[test open]
[input]
John 22 Miami
Adam 22 Miami
Adam 22 Miami
END
2
[/input]
[output]
2 1 3
[/output]
[/test]
[test]
[input]
John 22 Venice
George 14 San Francisco
END
2
[/input]
[output]
No matches
[/output]
[/test]
[test]
[input]
Peter 22 Miami
Adam 22 Miami
Adam 22 Miami
END
2
[/input]
[output]
2 1 3
[/output]
[/test]
[test]
[input]
P 22 V
G 22 V
G 22 V
P 22 V
P 22 V
G 22 V
G 22 V
P 22 V
P 22 V
G 22 V
G 22 V
P 22 V
P 22 V
G 22 V
G 22 V
P 22 V
END
2
[/input]
[output]
8 8 16
[/output]
[/test]
[test]
[input]
P 22 V
END
1
[/input]
[output]
No matches
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Strategy Pattern
[code-task title="Strategy Pattern" taskId="oop-basics-java-iterators-and-comparators-Strategy-Pattern" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Un pattern interesant despre care probabil ați auzit este Paternul de Strategie. 

Dacă aveți mai multe moduri de a rezolva o problemă (să spunem să sortați o colecție), acesta oferă clientului ocazia să aleagă ceea ce se potrivește mai bine cu nevoile sale.

O implementare celebră a patternului în Java este metoda `Collections.sort()` care necesită **Comparator**.

Creați o clasă `Person` care cuprinde **name** și **age**. 

Creați 2 Comparatori pentru Person (clase care implementează `Comparator<Person>` **interface**). 

Primul comparator trebuie să compare oamenii, în funcție de **length of their name** ca prim parametru. 

Dacă două persoane au nume cu  **same** lungime, scrieți un  **case-insensitive** bazat pe **first letter of their name** în loc. 

Al doilea comparator trebuie să îi compare în funcție de **age**. 

Creați 2 **TreeSets** pentru tipurile de persoane, prima va implementa comparatorul de nume, al doilea comparatorul de vârstă. 

## Input
Pe prima linie, veți primi un număr  **N**. 

Pe fiecare dintre următoarele **N** linii, veți primi informații despre oameni, în formatul `{name} {age}`. 

Adăugați oamenii din datele de intrare în **both** seturi.

## Output
**Foreach** seturile și imprimați fiecare persoană din set pe o **new line** în același format în care i-ați primit.

Începeți cu un set care implementează comparatorul de nume. 

## Constrângeri
- Numele unei persoane va fi un șir care va conține **only** caractere alphanumerice cu lungimea **between** simblourile[1 ... 50]
- Vârsta unei persoane va fi un integer **positive** **between** [1 ... 100]
- Numărul de oameni **N** va fi un integer **positive**  **between** [0 ... 100]

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| 3 | John 100 |
| Peter 20 | Peter 20 |
| John 100 | Penelope 1 |
| Penelope 1 | Penelope 1 |
|  | Peter 20 |
|  | John 100 |

| **Intrare**|**Ieșire**|
| --- | --- |
| 5 | aria 33 |
| Ivan 17 | Ivan 17 |
| aria 33 | John 3 |
| Steven 25 | Nicko 99 |
| Nicko 99 | Steven 25 |
| John 3 | John 3 |
|  | Ivan 17 |
|  | Steven 25 |
|  | aria 33 |
|  | Nicko 99 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
Peter 20
John 100
Penelope 1
[/input]
[output]
John 100
Peter 20
Penelope 1
Penelope 1
Peter 20
John 100
[/output]
[/test]
[test open]
[input]
5
Ivan 17
aria 33
Steven 25
Nicko 99
John 3
[/input]
[output]
aria 33
Ivan 17
John 3
Nicko 99
Steven 25
John 3
Ivan 17
Steven 25
aria 33
Nicko 99
[/output]
[/test]
[test]
[input]
3
Peter 33
John 11
Penelope 2
[/input]
[output]
John 11
Peter 33
Penelope 2
Penelope 2
John 11
Peter 33
[/output]
[/test]
[test]
[input]
5
Ivan 27
aria 43
Steven 35
Nicko 99
John 13
[/input]
[output]
aria 43
Ivan 27
John 13
Nicko 99
Steven 35
John 13
Ivan 27
Steven 35
aria 43
Nicko 99
[/output]
[/test]
[test]
[input]
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
2
Ivan 17
aria 33
[/input]
[output]
aria 33
Ivan 17
Ivan 17
aria 33
[/output]
[/test]
[test]
[input]
5
Ivan 17
aria 33
aaRia 20
aaRias 20
Vans1 13
[/input]
[output]
aria 33
Ivan 17
aaRia 20
Vans1 13
aaRias 20
Vans1 13
Ivan 17
aaRia 20
aria 33
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Equality Logic
[code-task title="Equality Logic" taskId="oop-basics-java-iterators-and-comparators-Equality-Logic" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Creați o **class** `Person` după **name** și **age**.

O persoană cu  **same** nume și vârstă trebuie să fie considerată una singură, să scrie peste orice altă metodă pentru a întări această logică.

Clasa voastră trebuie să funcționeze cu **both** standarde și colecții. 

Creați o `TreeSet` și o `HashSet` cu tipuri de Persoane.

## Input

Pe prima linie, veți primi un număr **N**. 

Pe fiecare dintre următoarele **N** linii, veți primi informații despre oameni, în formatul `{name} {age}`. 

Adăugați oamenii din datele de intrare în **both** seturi (ambele trebuie să cuprindă toți oamenii din datele de intrare). 

## Output

Datele de ieșire trebuie să constea din **exactly** 2 linii. 

Pe prima, vom imprima **size** a `TreeSet` și pe cea de-a doua- **size** pentru `HashSet`.

## Constrângeri

- Numele unei persoane va fi un șir care conține **only** caractere alphanumerice cu lungimi **between** [1 ... 50].
- Vârsta unei persoane va fi un integer **positive** **between** [1 ... 100].
- Numărul de persoane **N** va fi un integer pozitiv **between** [0 ... 100].

## Hint

Trebuie să scrieți peste **both** metodele egale și **hashCode**. 

Puteți căuta online pentru implementarea hashCode - nu este nevoie să fie perfect, dar trebuie să fie destul de bun pentru a produce același hash code pentru obiecte cu **same** nume și vârstă și să fie îndeajuns de diferit ca hash codes pentru obiectele cu **different** nume și/sau vârstă.


## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| 3 | John 100 |
| Peter 20 | Peter 20 |
| John 100 | Penelope 1 |
| Penelope 1 | Penelope 1 |
|  | Peter 20 |
|  | John 100 |

| **Intrare**|**Ieșire**|
| --- | --- |
| 5 | aria 33 |
| Ivan 17 | Ivan 17 |
| aria 33 | John 3 |
| Steven 25 | Nicko 99 |
| Nicko 99 | Steven 25 |
| John 3 | John 3 |
|  | Ivan 17 |
|  | Steven 25 |
|  | aria 33 |
|  | Nicko 99 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
4
Peter 20
Pete 20
John 15
Peter 21
[/input]
[output]
4
4
[/output]
[/test]
[test open]
[input]
7
Ivan 17
ivan 17
Stan 25
Ivan 18
Ivan 17
Stann 25
Stan 25
[/input]
[output]
5
5
[/output]
[/test]
[test]
[input]
4
Peter 30
Pete 30
John 25
Peter 31
[/input]
[output]
4
4
[/output]
[/test]
[test]
[input]
7
Ivan 27
ivan 27
Stan 35
Ivan 28
Ivan 27
Stann 35
Stan 35
[/input]
[output]
5
5
[/output]
[/test]
[test]
[input]
14
Ivan 17
ivan 17
Stan 25
Ivan 18
Ivan 17
Stann 25
Stan 25
Ivan 17
ivan 17
Stan 25
Ivan 18
Ivan 17
Stann 25
Stan 25
[/input]
[output]
5
5
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
0
0
[/output]
[/test]
[test]
[input]
2
P 100
Y 1
[/input]
[output]
2
2
[/output]
[/test]
[test]
[input]
2
I 3
I 3
[/input]
[output]
1
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Pet Clinics
[code-task title="Pet Clinics" taskId="oop-basics-java-iterators-and-comparators-Pet-Clinics" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Sunteți tineri și ambițioși și dețineți o Clinică de Animale. 

Cereți angajaților să creeze un program care să stocheze toate informațiile despre animale în baza de date. 

Fiecare animal trebuie să aibă **name**, **age** și **kind**.


Aplicația voastră trebuie să poată face câteva operații de bază, ca **creating** un animal, **creating** o clinică, **adding** un animal clinicii,  **releasing** un animal din clinică, **printing** informații despre o cabinet **specific** din clinică sau să printeze informația despre  **all** camerele din clinică. 

Clinicile trebuie să aibă un număr **odd** de camere, să încerce să creeze o clinică cu un număr **even** și să poată să **fail** și **throw** o **exception**.

## Ordinea de Primire 

De exemplu, să aruncăm o privire la clinicile cu 5 camere. 

 **first** cameră va primi un animal pentru tratament și va fi considerată **central** (camera 3). 

Deci, ordinea în care un animal intră în clinică este: primul animal merge în camera **center** (3) și după aceea, următoarele animale intră primele în camera din **left** (2) și apoi în camera din **right** (4). 

Ultimele camere în care animalele intră sunt camerele 1 și 5. 

In cazul că o cameră este deja ocupată, sărim peste ea și mergem la următoarea, în ordinea de mai sus. Sarcina noastră este să modelăm aplicația și să o facem să susțină anumite comenzi. 

Primul animal intră în camera 3. -> 1 2 **3** 4 5

Apoi, următorul animal intră în camera 2. -> 1 **2** 3 4 5

Al treilea animal intră în camera 4. -> 1 2 3 **4** 5

Ultimele două animale vor merge la camerele - 1 și 5. -> **1** 2 3 4 **5**

Acum, după ce am terminat adăugarea animalelor, e timpul să vedem cum le dăm drumul. 

Procesul de eliberare a animalelor nu este atăt de simplu când apelăm metoda release, începem de la camera **center** (3) și continuăm cu **right** (4, 5… samd) până când găsim un pet sau ajungem la camera **last**. 

Dacă am ajuns la ultima cameră, vom începe de la **first** (1) și vom merge din nou spre dreapta până ajungem la **center** (3). 

Dacă găsim deja un animal, il **remove** din colecție, oprim căutarea și **return** `true`, dacă un animal este  **NOT** found, operația **returns** `false`.

Când o comandă `Print` este apelată pentru o cameră, dacă aceasta conține deja un animal vom imprima pe o singură linie animalul, în formatul `{pet name} {pet age} {pet kind}`. 

Alternativ, dacă acea cameră este goală, imprimăm **"Room empty"** în loc. 

Când comanda `Print` pentru clinică este apelată trebuie să imprimăm **all** camerele din clinică, în **order** numerelor lor. 

### Comenzi

| **Command** | **Return Type** | **Description** |
| --- | --- | --- |
| `Create Pet {name} {age} {kind}` | void | Creates a pet with the specified name and age (true if the operation is successful and false if it is not) |
| `Create Clinic {name} {rooms}` | void | Creates a Clinic with the specified name and number of rooms (if the rooms are not odd, throws an exception) |
| `Add {pet's name} {clinic's name}` | boolean | This command should add the given pet in the specified clinic (true if the operation is successful and false if it is not) |
| `Release {clinic's name}` | boolean | This command should release an animal from the specified clinic (true if the operation is successful and false if it is not) |
| `HasEmptyRooms {clinic's name}` | boolean | Returns whether the clinic has any empty rooms (true if it has and false if it does not) |
| `Print {clinic's name}` | void | This command should print each room in the specified clinic, ordered by room number |
| `Print {clinic's name} {room}` | void | Prints the pets that are currently being treated in the specified room on a single line |

## Input

On the first line, you will be given an integer **N** - the number of commands you will receive. On each of the next **N** lines, you will receive a command. 

Commands and parameters will always be **correct** ( `Add`, `Release`, `HasEmptyRooms` and `Print` commands will always be passed to **existing** clinics/pets), except for the number of rooms in the **Create Clinic** command which can be any **valid** integer **between 1 and 101**.

## Output

Pentru fiecare comandă cu un **return** boolean primit prin date de intrare, trebuie să imprimăm valoarea returnată pe o linie **separate**. 

In cazul că metoda **throwing** o **exception** (ca atunci când încercăm să creăm o clinică cu număr impar de numere sau vrem să adăugăm un animal care nu există) trebuie să **catch** excepțiile și în loc să imprimăm `Invalid Operation!`. 

Comanda `Print` cu o clinică și o cameră, trebuie să imprime informația despre acea cameră în formatul **specified** mai sus.

Comanda `Print` cu doar o singură clinică trebuie să imprime informația **for each** cameră din clinică, în **order** numerelor lor. 

## Constrângeri

- Numărul de comenzi **N** - va fi un integer valid **between** [1 ... 1000], nu este nevoie să verificăm explicit.
- **Pet names** , **Clinic names** , și **kind** vor fi șiruri care vor consta din caractere alfabetice cu lungimea **between** [1 ... 50].
- **Pet age** va fi un integer pozitiv **between** [1 ... 100].
- **Clinic rooms** vor fi integeri pozitivi **between** [1 ... 101].
- **Room number** in comanda **Print** va fi întotdeauna **between 1** și **number of rooms** în acea clinică.
- Inputul va consta **only** din **correct commands** și vor avea **always** tipul corect de parametri.

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| 9 | Invalid Operation! |
| Create Pet Garet 7 Cat | true |
| Create Clinic VetClinic 4 | false |
| Create Clinic PetClinic 1 | true |
| HasEmptyRooms PetClinic | false |
| Release PetClinic | false |
| Add Garet PetClinic |  |
| HasEmptyRooms PetClinic |  |
| Create Pet Shabby 2 Dog |  |
| Add Shabby PetClinic |  |



| **Intrare**|**Ieșire**|
| --- | --- |
| 8 | true |
| Create Pet Sherry 7 Cat | true |
| Create Pet Tom 1 Cata | Sherry 7 Cat |
| Create Clinic PetClinic 5 | true |
| Add Sherry PetClinic | Room empty |
| Add Tom PetClinic | Tom 1 Cata |
| Print PetClinic 3 | Room empty |
| Release PetClinic | Room empty |
| Print PetClinic | Room empty |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
9
Create Pet Garet 7 Cat
Create Clinic VetClinic 4
Create Clinic PetClinic 1
HasEmptyRooms PetClinic
Release PetClinic
Add Garet PetClinic
HasEmptyRooms PetClinic
Create Pet Shabby 2 Dog
Add Shabby PetClinic
[/input]
[output]
Invalid Operation!
true
false
true
false
false
[/output]
[/test]
[test open]
[input]
8
Create Pet Sherry 7 Cat
Create Pet Tom 1 Cata
Create Clinic PetClinic 5
Add Sherry PetClinic
Add Tom PetClinic
Print PetClinic 3
Release PetClinic
Print PetClinic
[/input]
[output]
true
true
Sherry 7 Cat
true
Room empty
Tom 1 Cata
Room empty
Room empty
Room empty
[/output]
[/test]
[test]
[input]
9
Create Pet Garet 8 Cat
Create Clinic VetClinic 4
Create Clinic PetClinic 1
HasEmptyRooms PetClinic
Release PetClinic
Add Garet PetClinic
HasEmptyRooms PetClinic
Create Pet Shabby 2 Dog
Add Shabby PetClinic
[/input]
[output]
Invalid Operation!
true
false
true
false
false
[/output]
[/test]
[test]
[input]
8
Create Pet Sherry 9 Cat
Create Pet Tom 1 Cata
Create Clinic PetClinic 5
Add Sherry PetClinic
Add Tom PetClinic
Print PetClinic 3
Release PetClinic
Print PetClinic
[/input]
[output]
true
true
Sherry 9 Cat
true
Room empty
Tom 1 Cata
Room empty
Room empty
Room empty
[/output]
[/test]
[test]
[input]
14
Create Pet Garet 7 Cat
Create Pet Sherry 1 Cat
Create Pet Shabby 3 Dog
Create Pet Tom 4 Cat
Create Pet Victor 17 Giraffe
Create Clinic PetClinic 5
Add Garet PetClinic
Add Sherry PetClinic
Add Shabby PetClinic
Add Tom PetClinic
Add Victor PetClinic
Release PetClinic
Release PetClinic
Print PetClinic
[/input]
[output]
true
true
true
true
true
true
true
Tom 4 Cat
Sherry 1 Cat
Room empty
Room empty
Victor 17 Giraffe
[/output]
[/test]
[test]
[input]
12
Create Pet Garet 7 Cat
Create Pet Sam 1 Cat
Create Pet Graf 100 Wolf
Create Clinic PetClinic 5
Add Garet PetClinic
Add Sam PetClinic
Add Graf PetClinic
Print PetClinic 3
Print PetClinic 1
Print PetClinic 2
Release PetClinic
Print PetClinic
[/input]
[output]
true
true
true
Garet 7 Cat
Room empty
Sam 1 Cat
true
Room empty
Sam 1 Cat
Room empty
Graf 100 Wolf
Room empty
[/output]
[/test]
[test]
[input]
11
Create Pet Doggy 1 Dog
Create Pet Cat 2 Cat
Create Pet Turtle 3 Turle
Create Pet Elephant 4 Elephant
Create Clinic Random 3
Create Clinic OtherRandom 17
Add Doggy Random
Add Cat Random
Add Elephant Random
Add Turtle Random
Print Random
[/input]
[output]
true
true
true
false
Cat 2 Cat
Doggy 1 Dog
Elephant 4 Elephant
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Linked List Traversal
[code-task title="Linked List Traversal" taskId="oop-basics-java-iterators-and-comparators-Linked-List-Traversal" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Trebuie să scrieți o metodă simplificată de implementare a unei liste generice Linked List care are un Iterator. 

Lista trebuie să suporte operațiile `Add` și `Remove` care trebuie să arate numărul de elemente pe care le are cu o funcție`getSize` și trebuie să aibă un iterator implementat (poate fi **foreachable**).

Metoda `add` poate adăuga un element nou la finalul colecției. 

Metoda `remove` trebuie să elimine prima apariție a unui obiect de la începutul colecției, dacă elementul este eliminat cu succes, metoda **returns true**, altfel, dacă elementul nu este în colecție, metoda trebuie să **return false**.

Metoda `getSize` trebuie să **return** numărul de elemente care se află în lista curentă. 

 **iterator** trebuie să itereze peste colecție, începând de la primul element introdus. 


## Input

Pe prima linie de intrare, vom primi un număr **N**. 

Pe fiecare dintre următoarele **N** linii, vom primi o comandă într-unul dintre următoarele formate :

- `Add {number}` - adaugă un număr listei
- `Remove {number}` - elimină prima apariție a numărului din linked list. Dacă nu există un astfel de element, această comandă lasă colecția **unchanged**

## Output

Datele de ieșire vor consta din exact 2 linii.

Pe prima linie de cod, vom printa rezultatele apelării funcției `getSize` pe lista Linked list. 

Pe următoarele două linii, vom imprima **all elements** din colecție, apelând **for each** din colecție.

## Constrângeri

- Toate numerele din intrare vor fi integeri **valid** cuprinși **between** [2 ^ -32 ... 2 ^ 32 - 1]
- Toate comenzile primite la intrare vor fi **valid** (numai `Add` sau `Remove`)
- Numărul **N** va fi un integer pozitiv **between** [1 ... 500]

## Hint

Puteți folosi o listă Linked List din **Workshop**.

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| 5 | 2 |
| Add 7 | -50 20 |
| Add -50 |  |
| Remove 3 |  |
| Remove 7 |  |
| Add 20 |  |

| **Intrare**|**Ieșire**|
| --- | --- |
| 6 | 4 |
| Add 13 | 13 20 4 4 |
| Add 4 |  |
| Add 20 |  |
| Add 4 |  |
| Remove 4 |  |
| Add 4 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
5
Add 7
Add -50
Remove 3
Remove 7
Add 20
[/input]
[output]
2
-50 20
[/output]
[/test]
[test open]
[input]
6
Add 13
Add 4
Add 20
Add 4
Remove 4
Add 4
[/input]
[output]
4
13 20 4 4
[/output]
[/test]
[test]
[input]
5
Add 8
Add -50
Remove 3
Remove 7
Add 20
[/input]
[output]
3
8 -50 20
[/output]
[/test]
[test]
[input]
6
Add 11
Add 4
Add 20
Add 4
Remove 4
Add 4
[/input]
[output]
4
11 20 4 4
[/output]
[/test]
[test]
[input]
11
Add 13
Add 4
Add 0
Add 333333
Add 20
Add 4
Add 4
Add 0
Add 0
Add -10
Add -12335435
[/input]
[output]
11
13 4 0 333333 20 4 4 0 0 -10 -12335435
[/output]
[/test]
[test]
[input]
9
Add 13
Add 4
Add 0
Add 333333
Add 20
Add 4
Remove 4
Remove 0
Add 4
[/input]
[output]
5
13 333333 20 4 4
[/output]
[/test]
[test]
[input]
11
Add 13
Add 4
Add 0
Add 333333
Add 20
Add 4
Remove 4
Remove 0
Add 4
Add 0
Add 0
[/input]
[output]
7
13 333333 20 4 4 0 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
