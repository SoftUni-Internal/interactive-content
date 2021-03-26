# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Generic Box
[code-task title="Generic Box" taskId="oop-basics-java-generics-Generic-Box" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Creați o **Generic Class Box** care poate depozita orice. 

**Override** o metodă `toString()` pentru a imprima tipul și valoarea datelor stocate în formatul: 

"\{**class full name**\}: \{**value**\}"

Folosiți clasa pe care ați creat-o și testați-o cu clasa "**java.lang.String**". 

Pe prima linie, veți primi numărul  **n** - numărul de șiruri pe care le veți citi în consolă. 

Pe următoarele **n** linii, veți primi șirurile curente. 

Pentru fiecare dintre ele creași o cutie și apelați metoda ei `toString()` pentru a imprima datele sale în consolă. 

## Exemple
| **Input** | **Output** |
| --- | --- |
| 2 | java.lang.String: life in a box |
| life in a box | java.lang.String: box in a life |
| box in a life |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
2
life in a box
box in a life
[/input]
[output]
java.lang.String: life in a box
java.lang.String: box in a life
[/output]
[/test]
[test]
[input]
3
Pesho
Simo
Gosho
[/input]
[output]
java.lang.String: Pesho
java.lang.String: Simo
java.lang.String: Gosho
[/output]
[/test]
[test]
[input]
5
jega
mi
e
tezi
dni
[/input]
[output]
java.lang.String: jega
java.lang.String: mi
java.lang.String: e
java.lang.String: tezi
java.lang.String: dni
[/output]
[/test]
[test]
[input]
6
kolko
mnogo
muka
ima
po
tozi
[/input]
[output]
java.lang.String: kolko
java.lang.String: mnogo
java.lang.String: muka
java.lang.String: ima
java.lang.String: po
java.lang.String: tozi
[/output]
[/test]
[test]
[input]
1
I am an Integer
[/input]
[output]
java.lang.String: I am an Integer
[/output]
[/test]
[test]
[input]
10
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
[/input]
[output]
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Generic Box of Integer
[code-task title="Generic Box of Integer" taskId="oop-basics-java-generics-Generic-Box-of-Integer" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Creați o **generic class Box** care poate stica orice tip de date.

**Override** metoda `toString()` pentru a imprima tipul și valoarea datelor stocate în formatul : 

"\{**class full name**\}: \{**value**\}"

Folosiți clasa pe care ați creat-o și testați-o cu clasa  "**java.lang.String**". 

Pe prima linie de cod, veși primi numărul **n** - numprul de Integeri pe care îi veți citi în consolă.

Pe următoarele **n** linii, veți primi Integerii curenți.  

Pentru fiecare dintre ei, creați o cutie și apelați metoda ei `toString()` pentru a-i imprima datele în consolă. 

## Exemple
| **Input** | **Output** |
| --- | --- |
| 3 | java.lang.Integer: 7 |
| 7 | java.lang.Integer: 123 |
| 123 | java.lang.Integer: 42 |
| 42 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
7
123
42
[/input]
[output]
java.lang.Integer: 7
java.lang.Integer: 123
java.lang.Integer: 42
[/output]
[/test]
[test]
[input]
3
1
2
3
[/input]
[output]
java.lang.Integer: 1
java.lang.Integer: 2
java.lang.Integer: 3
[/output]
[/test]
[test]
[input]
5
12
13
14
15
16
[/input]
[output]
java.lang.Integer: 12
java.lang.Integer: 13
java.lang.Integer: 14
java.lang.Integer: 15
java.lang.Integer: 16
[/output]
[/test]
[test]
[input]
1
-2147483648
[/input]
[output]
java.lang.Integer: -2147483648
[/output]
[/test]
[test]
[input]
1
0
[/input]
[output]
java.lang.Integer: 0
[/output]
[/test]
[test]
[input]
1
2147483647
[/input]
[output]
java.lang.Integer: 2147483647
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Generic Swap Method String
[code-task title="Generic Swap Method String" taskId="oop-basics-java-generics-Generic-Swap-Method-String" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Creați o metodă generică pentru a primi o listă care să conțină **any type of data** și schimbați elememntele la două indexuri date. 

Ca și în problemele anteriaore, citiți numărul de cutii **n** de tip **String** și adăugați-le listei.

Pe următoarea linie, veți primi o comandă swap care va consta din **two indexes**. 

Folosiți metoda creată pentru a schimba elementele care corespund indexurilor date și **print each** element în listă.

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| 3 | java.lang.String: Swap me with John |
| John | java.lang.String: George |
| George | java.lang.String: John |
| Swap me with John |  |
| 0 2 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
John
George
Swap me with John
0 2
[/input]
[output]
java.lang.String: Swap me with John
java.lang.String: George
java.lang.String: John
[/output]
[/test]
[test]
[input]
3
1
2
3
0 0
[/input]
[output]
java.lang.String: 1
java.lang.String: 2
java.lang.String: 3
[/output]
[/test]
[test]
[input]
5
12
13
14
15
16
0 3
[/input]
[output]
java.lang.String: 15
java.lang.String: 13
java.lang.String: 14
java.lang.String: 12
java.lang.String: 16
[/output]
[/test]
[test]
[input]
1
-2147483648
0 0
[/input]
[output]
java.lang.String: -2147483648
[/output]
[/test]
[test]
[input]
2
pulien
haos
0 1
[/input]
[output]
java.lang.String: haos
java.lang.String: pulien
[/output]
[/test]
[test]
[input]
5
abc
d
e
f
ghi
0 1
[/input]
[output]
java.lang.String: d
java.lang.String: abc
java.lang.String: e
java.lang.String: f
java.lang.String: ghi
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Generic Swap Method Integer
[code-task title="Generic Swap Method Integer" taskId="oop-basics-java-generics-Generic-Swap-Method-Integer" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Creați o metodă generică pentru a primi o listă care să conțină **any type of data** și să schimbe elementele de la două indexuri date. 

Ca în problemele anterioare, citiți numărul de cutii **n** de tip **Integer** și adăugați-le listei. 

Pe următoarea linie, veți primi o comandă swap care va consta din **two indexes**. 

Folosiți metoda pe care ați creat-o pentru a schimba elementele corespunzătoare celor indexurilor date și **print each** element în această listă. 

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| 3 | java.lang.Integer: 42 |
| 7 | java.lang.Integer: 123 |
| 123 | java.lang.Integer: 7 |
| 42 |  |
| 0 2 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
7
123
42
0 2
[/input]
[output]
java.lang.Integer: 42
java.lang.Integer: 123
java.lang.Integer: 7
[/output]
[/test]
[test]
[input]
3
1
2
3
0 1
[/input]
[output]
java.lang.Integer: 2
java.lang.Integer: 1
java.lang.Integer: 3
[/output]
[/test]
[test]
[input]
5
12
13
14
15
16
3 4
[/input]
[output]
java.lang.Integer: 12
java.lang.Integer: 13
java.lang.Integer: 14
java.lang.Integer: 16
java.lang.Integer: 15
[/output]
[/test]
[test]
[input]
1
-2147483648
0 0
[/input]
[output]
java.lang.Integer: -2147483648
[/output]
[/test]
[test]
[input]
1
0
0 0
[/input]
[output]
java.lang.Integer: 0
[/output]
[/test]
[test]
[input]
1
2147483647
0 0
[/input]
[output]
java.lang.Integer: 2147483647
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Generic Count Method String
[code-task title="Generic Count Method String" taskId="oop-basics-java-generics-Generic-Count-Method-String" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Creați o  **method** care primește ca argument o **list of any type that can be compared** și un **element of the given type**.

Metoda trebuie să **return the count of elements that are greater than the value of the given element**.

**Modify your Box class** pentru a suporta **comparing by value** pentru datele stocate.

Pe  **first line**, veți primi **n** - numărul de elemente pe care le veți adăuga listei. 

Pe următoarele **n** linii, veți primi elementele curente. 

Pe **last line**, veți primi valoarea elementului cu care trebuie să comparați fiecare element din listă. 

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| 3 | 2 |
| aa |  |
| aaa |  |
| bb |  |
| aa |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
aa
aaa
bb
aa
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
3
1
2
3
1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
12
13
14
15
16
3
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1
aaa
aa
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
10
a
b
c
d
e
f
g
h
i
j
k
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5
p
pp
ppp
pppp
ppppp
pp
[/input]
[output]
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Generic Count Method Double
[code-task title="Generic Count Method Double" taskId="oop-basics-java-generics-Generic-Count-Method-Double" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Creați o **method** care primește ca argument 
o **list of Double** și un **element of the given type**.

Metoda va trebui să **return the count of elements that are greater than the value of the given element**.

**Modify your Box class** pentru a suporta **comparing by value** pentru datele stocate.

Pe **first line**, veți primi **n** - numărul de elemente pe care trebuie să le adăugați listei. 

Pe următoarele **n** linii, veți primi elementele curente.

Pe **last line**, veți primi valoarea elementului cu care trebuie să comparați fiecare element din listă.

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| 3 | 2 |
| 7.13 |  |
| 123.22 |  |
| 42.78 |  |
| 7.55 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
7.13
123.22
42.78
7.55
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
3
1
2
3
1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
12
13
14
15
16
3
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
1
1231542.123
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
3
-1
0
1
-1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
11.11
22.22
33.33
44.44
55.55
66.66
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Custom List
[code-task title="Custom List" taskId="oop-basics-java-generics-Custom-List" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Creați o structură de date generică ce poate stoca **any type** care pot fi **compared**.

Implementați funcțiile:

- void add(T element)
- T remove(int index)
- boolean contains(T element)
- void swap(int index, int index)
- int countGreaterThan(T element)
- T getMax()
- T getMin()

Creați un cititor de comenzi care să citească aceste comenzi și să modifice lista specifică pe care ați creat-o. Implementați comenzile :

- "**Add** \<**element**\>" - Adaugă elementul dat la finalul listei 
- "**Remove** \<**index**\>" - Elimină elementul de la indexul dat 
- "**Contains** \<**element**\>" - Imprimă dacă lista conține elementul dat **(true or false)**
- "**Swap** \<**index**\> \<**index**\>" - Schimbă elementele de la indexurile date 
- "**Greater** \<**element**\>" - Numără elementele care sunt mai mari decât un element dat și imprimă numărul acestora
- "**Max**" - Imprimă elementul maximum din listă 
- "**Min**" - Imprimă elementul minim din listă 
- "**Print**" - Imprimă toate elementele din listă, fiecare pe o linie separată 
- "**END**" - oprește citirea comenzilor

**Note** : Pentru **tests**, folosiți **String** ca **T**.

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| Add aa | cc |
| Add bb | aa |
| Add cc | 2 |
| Max | true |
| Min | cc |
| Greater aa | bb |
| Swap 0 2 | aa |
| Contains aa |  |
| Print |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Add aa
Add bb
Add cc
Max
Min
Greater aa
Swap 0 2
Contains aa
Print
END
[/input]
[output]
cc
aa
2
true
cc
bb
aa
[/output]
[/test]
[test]
[input]
Add P
Print
END
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Max
END
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Swap 0 0
Swap 1 1
Swap 0 1
Swap 1 0
Swap 0 1
Print
END
[/input]
[output]
G
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Contains 123
Contains falsd
Contains @\#!@\\$
Contains .
Contains P
Contains G
Greater P
Greater G
Greater aa
Greater zz
Greater true
Greater false
Greater 123
Greater ...
Greater @\#%!@\#
END
[/input]
[output]
false
false
false
false
true
true
0
1
0
0
0
0
2
2
2
[/output]
[/test]
[test]
[input]
Add a
Add b
Add c
Add d
Add e
Add f
Print
Max
Min
Greater a
Greater b
Greater c
Greater d
Greater e
Greater f
Remove 0
Remove 0
Remove 0
Print
END
[/input]
[output]
a
b
c
d
e
f
f
a
5
4
3
2
1
0
d
e
f
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Custom List Sorter
[code-task title="Custom List Sorter" taskId="oop-basics-java-generics-Custom-List-Sorter" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Extend the previous problem by creating an additional **Sorter class**. 

It should have a single static method `sort()` which can sort objects of type **CustomList** containing any type that can be compared.

**Extend the command list** to support one additional command:

- "**Sort**" - Sort the elements in the list in ascending order.


## Examples
| **Intrare**|**Ieșire**|
|---|---|
| Add cc | aa |
| Add bb | bb |
| Add aa | cc |
| Sort |  |
| Print |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Add cc
Add bb
Add aa
Sort
Print
END
[/input]
[output]
aa
bb
cc
[/output]
[/test]
[test]
[input]
Add P
Sort
Print
END
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Max
Sort
Print
END
[/input]
[output]
P
G
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Swap 0 0
Swap 1 1
Swap 0 1
Swap 1 0
Swap 0 1
Sort
Print
END
[/input]
[output]
G
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Contains 123
Contains falsd
Contains @\#!@\\$
Contains .
Contains P
Contains G
Greater P
Greater G
Greater aa
Greater zz
Greater true
Greater false
Greater 123
Greater ...
Greater @\#%!@\#
Sort
Swap 0 1
Print
END
[/input]
[output]
false
false
false
false
true
true
0
1
0
0
0
0
2
2
2
P
G
[/output]
[/test]
[test]
[input]
Add a
Add b
Add c
Add d
Add e
Add f
Print
Max
Min
Greater a
Greater b
Greater c
Greater d
Greater e
Greater f
Remove 0
Remove 0
Remove 0
Sort
Print
END
[/input]
[output]
a
b
c
d
e
f
f
a
5
4
3
2
1
0
d
e
f
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Custom List Iterator
[code-task title="Custom List Iterator" taskId="oop-basics-java-generics-Custom-List-Iterator" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Extindeți problema anterioară făcând clasa listei specifice să implementeze **Iterable**.

Pentru a imprima comanda, ați folosit, probabil, o buclă **for** .

Aceasta trebuia să vă permită să iterați lista voastră în declarația **foreach** .

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| Add aa | cc |
| Add bb | aa |
| Add cc | 2 |
| Max | cc |
| Min | bb |
| Greater aa | aa |
| Swap 0 2 |  |
| Print |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Add aa
Add bb
Add cc
Max
Min
Greater aa
Swap 0 2
Contains aa
Print
END
[/input]
[output]
cc
aa
2
true
cc
bb
aa
[/output]
[/test]
[test]
[input]
Add P
Print
END
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Max
END
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Swap 0 0
Swap 1 1
Swap 0 1
Swap 1 0
Swap 0 1
Print
END
[/input]
[output]
G
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Contains 123
Contains falsd
Contains @\#!@\\$
Contains .
Contains P
Contains G
Greater P
Greater G
Greater aa
Greater zz
Greater true
Greater false
Greater 123
Greater ...
Greater @\#%!@\#
END
[/input]
[output]
false
false
false
false
true
true
0
1
0
0
0
0
2
2
2
[/output]
[/test]
[test]
[input]
Add a
Add b
Add c
Add d
Add e
Add f
Print
Max
Min
Greater a
Greater b
Greater c
Greater d
Greater e
Greater f
Remove 0
Remove 0
Remove 0
Print
END
[/input]
[output]
a
b
c
d
e
f
f
a
5
4
3
2
1
0
d
e
f
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Tuple
[code-task title="Tuple" taskId="oop-basics-java-generics-Tuple" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Aceasta este o secvență de elemente numităi **"Tuple"**.

Este o clasă care conține două obiecte : primul este **"item1"**; al doilea este **"item2"**.

Este la fel ca **Map.Entry** dar **only has items**, care sunt **neither key nor value**.

Nu se cunoaște ce conțin aceste obiecte. 

Numele clasei nu ne dă destule informații, nici metoda.

Sarcina voastră este să încercați să implementați asta în Java, doar în scopuri de practică.

Creați clasa **"Tuple"**, care să conțină două obiecte.

Primul obiect va fi **"item1"** și al doilea  - **"item2"**. 

Clasa trebuie să conțină **Generics**. 

Când creați un nou obiect al clasei -  **"Tuple"**, trebuie să specificați tipurile de itemi, separat. 

## Input

Datele de intrare vor consta din trei linii :

- Prima linie cuprinde un **person's name** și **city of residence**. Cele două sunt **separated by space(s)**. Trebuie să le colectați în Tuple și să le imprimați în consolă. Aceste date vor veni în formatul: 

"\{\{**first name**\} \{**last name**\}\} \{**city**\}"

- A doua linie cuprinde un **name** de persoană și **amount of hobbies** pe care aceasta le are și apare în următorul format :

"\{**name**\} \{**hobbies**\}"

- Ultima linie va cuprinde un **Integer** și un **Double** în următorul format:

"\{**Integer**\} \{**Double**\}"

## Output

- Printați itemii Tuple items in următorul format: 

"\{**item1**\} **->** \{**item2**\}"

## Constrângeri

Folosiți bunele practici pe care le-ați învățat. 

Creați clasa astfel încât să aibă getteri și setteri pentru variabilele clasei. 

Datele de intrare vor fi valide, nu este necesar să le verificați explicit !

## Exemple
| **Intrare**|**Ieșire**|
| --- | --- |
| Sofia Tucker London | Sofia Tucker -> London |
| john 2 | john -> 2 |
| 23 21.23212321 | 23 -> 21.23212321 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Sofia Tucker London
John 2
23 21.23212321
[/input]
[output]
Sofia Tucker -\> London
John -\> 2
23 -\> 21.23212321
[/output]
[/test]
[test]
[input]
Sean Paul NY
Adam 6
29 21.121212
[/input]
[output]
Sean Paul -\> NY
Adam -\> 6
29 -\> 21.121212
[/output]
[/test]
[test]
[input]
Steven Adams Madrid
Peter 9
21 21
[/input]
[output]
Steven Adams -\> Madrid
Peter -\> 9
21 -\> 21.0
[/output]
[/test]
[test]
[input]
Garet = Geneva
G 2999999
21 21
[/input]
[output]
Garet = -\> Geneva
G -\> 2999999
21 -\> 21.0
[/output]
[/test]
[test]
[input]
Charls King Westcastle
Shamsky 2999999
21 21.212
[/input]
[output]
Charls King -\> Westcastle
Shamsky -\> 2999999
21 -\> 21.212
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Threeuple
[code-task title="Threeuple" taskId="oop-basics-java-generics-Threeuple" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Următoarea sarcină este să creați un alt Tuple.

Creați o clasă **Threeuple**. Numele său arată că **Threeuple** trebuie să **hold three objects**.  Trebuie, de asemenea, să aibă getteri și setteri. Puteți extinde clasa anterioară-Tuple.

## Input
Datele de intrare constau din trei linii :

- Prima linie conține un nume de persoană, orașul și țara de reședință, în următorul format: 

"\{\{**first name**\} \{**last name**\}\} \{**city**\} \{**country**\}"

- A doua linie conține un nume, număr de hobbie-uri și o variabilă **Boolean variable** - mulțumit sau nu, în următorul format :

"\{**name**\} \{**hobbies**\} \{**happy or not**\}"

- Ultima linie va conține un nume, o balanță bancară (dublu) și un nume de bancă. Format: 

"\{**name**\} \{**account balance**\} \{**bank name**\}"

## Output

- Printați obiectele Triple în următorul format: 

"\{**firstElement**\} **->** \{**secondElement**\} **->** \{**thirdElement**\}"


## Exemple
| **Input** | **Output** |
| --- | --- |
| Sofia Tucker London UK | Sofia Tucker -> London -> UK |
| John 2 happy | John -> 2 -> false |
| Peter 0.10 Expressbank | Peter -> 0.1 -> Expressbank |

| **Input** | **Output** |
| --- | --- |
| Kevin Johnson Sofia Bulgaria | Kevin Johnson -> Sofia -> Bulgaria |
| Mat 18 not | Mat -> 18 -> false |
| Adam 0.10 NGB | Adam -> 0.1 -> NGB |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Sofia Tucker London UK
John 2 happy
Peter 0.10 Expressbank
[/input]
[output]
Sofia Tucker -\> London -\> UK
John -\> 2 -\> false
Peter -\> 0.1 -\> Expressbank
[/output]
[/test]
[test open]
[input]
Kevin Johnson Sofia Bulgaria
Mat 18 not
Adam 0.10 NGB
[/input]
[output]
Kevin Johnson -\> Sofia -\> Bulgaria
Mat -\> 18 -\> false
Adam -\> 0.1 -\> NGB
[/output]
[/test]
[test]
[input]
John Johnson Muiami USA
John 3 happy
John 11.11 AmericanExpress
[/input]
[output]
John Johnson -\> Muiami -\> USA
John -\> 3 -\> false
John -\> 11.11 -\> AmericanExpress
[/output]
[/test]
[test]
[input]
K K Varna Bulgaria
K 18 not
K 0.00 DSK
[/input]
[output]
K K -\> Varna -\> Bulgaria
K -\> 18 -\> false
K -\> 0.0 -\> DSK
[/output]
[/test]
[test]
[input]
Aaa Aaa B B
AA 3333 veryHappy
AA 10.01 aaa
[/input]
[output]
Aaa Aaa -\> B -\> B
AA -\> 3333 -\> false
AA -\> 10.01 -\> aaa
[/output]
[/test]
[test]
[input]
A B C D
E 18 HAPPY
F 0.10 G
[/input]
[output]
A B -\> C -\> D
E -\> 18 -\> false
F -\> 0.1 -\> G
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
