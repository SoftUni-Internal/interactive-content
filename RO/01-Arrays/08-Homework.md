
# Teme pentru acasă
[slide hideTitle]

# Problemă: Last K Numbers Sequence 

[code-task title="Last K Numbers Sequence" taskId="java-path-js-advanced-arrays-Last-K-Numbers-Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function sequence(n, k){
  // Scrie codul aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

Vi se dau două numere întregi **n** și **k**.

Scrieți o funcție JS care generează și tipărește următoarea succesiune de numere:

- Primul număr este 1

- Orice alt număr este egal cu suma numerelor **k** anterioare

- Lungimea secvenței este de **n** numere

**Intrarea** vine ca două **numere întregi**.

**Ieșirea** este tipărită pe consolă pe o singură linie, separată de spații.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|sequence(6, 3) | 1 1 2 4 7 13 |
|sequence(8, 2) | 1 1 2 3 5 8 13 21 |

## Explicaţie 

Al doilea element (1) este suma celor trei elemente dinaintea acestuia sau a tuturor, dacă acestea sunt mai mici de trei.

Al treilea element este suma primelor două elemente (1 și 1).

Al patrulea element este suma de 1, 1 și 2.

Al 5-lea element este suma celui de-al 2-lea, al 3-lea și al 4-lea (1, 2 și 4) și așa mai departe.

[/task-description]
[code-io /]
[tests]
[test]
[input]
sequence(1, 20)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
sequence(20, 1)
[/input]
[output]
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
[/output]
[/test]
[test]
[input]
sequence(14, 13)
[/input]
[output]
1 1 2 4 8 16 32 64 128 256 512 1024 2048 4096
[/output]
[/test]
[test]
[input]
sequence(15, 4)
[/input]
[output]
1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536
[/output]
[/test]
[test open]
[input]
sequence(6, 3)
[/input]
[output]
1 1 2 4 7 13
[/output]
[/test]
[test open]
[input]
sequence(8, 2)
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
sequence(9, 5)
[/input]
[output]
1 1 2 4 8 16 31 61 120
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Problemă: Print an Array with a Given Delimiter 

[code-task title="Print an Array with a Given Delimiter " taskId="java-path-js-advanced-arrays-Print-an-Array-with-a-Given-Delimiter" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function print(input){
  // Scrie codul aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

Scrieți o funcție care **separă** elementele unei matrice cu un **delimitator** dat.

**Intrarea** vine ca o **matrice de șiruri**.

Ultimul element al matricei este delimitatorul.

**Ieșirea** este aceeași matrice, tipărită pe consolă, unde fiecare element este separat de celelalte prin delimitatorul dat.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|print([ 'One', 'Two', 'Three', 'Four', 'Five', '-' ]) | One-Two-Three-Four-Five |
|print([ 'How about no?', 'I', 'will', 'not', 'do', 'it!', '_' ]) | How about no?_I_will_not_do_it! |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
print([ 'One', 'Two', 'Three', 'Four', 'Five', '-' ])
[/input]
[output]
One-Two-Three-Four-Five
[/output]
[/test]
[test open]
[input]
print([ 'How', 'about', 'no?', 'I', 'will', 'not', 'do', 'it!', '_' ])
[/input]
[output]
How_about_no?_I_will_not_do_it!
[/output]
[/test]
[test]
[input]
print([ 'count', 'Of', 'Elements', 'That', 'Meet', 'The', 'Current', 'Condition', '_' ])
[/input]
[output]
count_Of_Elements_That_Meet_The_Current_Condition
[/output]
[/test]
[test]
[input]
print([ 'The', 'Car', 'Was', 'Empty!', '\|' ])
[/input]
[output]
The\|Car\|Was\|Empty!
[/output]
[/test]
[test]
[input]
print([ 'There have been a majority of emergencies like huricanes', 'firestorms', 'murders', 'robberies', ' and many more on the way...', ',' ])
[/input]
[output]
There have been a majority of emergencies like huricanes,firestorms,murders,robberies, and many more on the way...
[/output]
[/test]
[test]
[input]
print([ 'Object', 'prototype', 'add()', '.' ])
[/input]
[output]
Object.prototype.add()
[/output]
[/test]
[test]
[input]
print([ 'test', '005', 'out', 'txt', '.' ])
[/input]
[output]
test.005.out.txt
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problemă: Print Every N-th Element of an Array 

[code-task title="Print Every N-th Element of an Array" taskId="java-path-js-advanced-arrays-Print-Every-N-th-Element-of-an-Array" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function print(input){
  // Scrie codul aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

Scrieți o funcție care va **itera** printr-o matrice cu un **pas dat** și tipărește valorile după fiecare pas.

**Intrarea** vine ca o **matrice de șiruri**.

Ultimul element este **N - pasul de iterație**.

**Ieșirea** ar trebui să fie fiecare **al N-lea** element **începând cu primul**.

Dacă pasul este "**3**", trebuie să imprimați pe **primul**, **al-4-lea**, **al-7-lea** și așa mai departe, până când ajungeți la sfârșitul matricei.

Elementele trebuie imprimate fiecare pe o nouă linie.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|print([ '5', '20', '31', '4', '20', '2' ]) | 5 |
||31 |
||20  |

| **Intrare** | **Ieșire** |
| --- | --- |
|print([ 'dsa', 'asd', 'test', 'tset', '2' ]) | dsa |
||test |

| **Intrare** | **Ieșire** |
| --- | --- |
|print([ '1', '2', '3', '4', '5', '6' ]) | 1 |

## Sugestii
Folosiți ceea ce ați văzut din **problema anterioară** pentru a **extrage ultimul element** al tabloului.

Creați o variabilă **pas** pentru a menține **pasul dat** al matricei.

Apoi, **tipăriți toate elementele** cu o buclă **for**, **incrementând** variabila **buclă** cu valoarea variabilei pas.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
print([ '5', '20', '31', '4', '20', '2' ])
[/input]
[output]
5
31
20
[/output]
[/test]
[test open]
[input]
print([ 'dsa', 'asd', 'test', 'tset', '2' ])
[/input]
[output]
dsa
test
[/output]
[/test]
[test open]
[input]
print([ '1', '2', '3', '4', '5', '6' ])
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
print([ '12', '23', '34', '45', '56', '67', '78', '89', '910', '2' ])
[/input]
[output]
12
34
56
78
910
[/output]
[/test]
[test]
[input]
print([ '0', '0', '1', '0', '2', '0', '3', '0', '4', '0', '5', '0', '6', '0', '7', '0', '8', '0', '9', '2' ])
[/input]
[output]
0
1
2
3
4
5
6
7
8
9
[/output]
[/test]
[test]
[input]
print([ 'abcdefg', 'bcdefgh', 'cdefghi', 'defghij', 'efghijk', 'fghijkl','ghijklm', 'hijklmn', 'ijklmno', 'jklmnop', 'klmnopq', 'lmnopqr', 'mnopqrs', 'nopqrst', 'opqrstu', 'pqrstuv', 'qrstuvw', 'rstuvwx', 'stuvwxy', 'tuvwxyz', 'uvwxyz', 'vwxyz', '7' ])
[/input]
[output]
abcdefg
hijklmn
opqrstu
vwxyz
[/output]
[/test]
[test]
[input]
print([ 'What', 'the', 'fuck', 'are', 'you', 'doing', 'you', 'fucking', 'stupid', 'motherfuckers', 'god', 'damn', 'doing?', '3' ])
[/input]
[output]
What
are
you
motherfuckers
doing?
[/output]
[/test]
[test]
[input]
print([ 'This', 'is', 'the', 'last', 'thing,', 'I', 'can', 'think', 'of...', '1' ])
[/input]
[output]
This
is
the
last
thing,
I
can
think
of...
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problemă: Add and Remove Elements 

[code-task title="Add and Remove Elements" taskId="java-path-js-advanced-arrays-Add-and-Remove-Elements" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function andAndRemove(input){
  // Scrie codul aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

Scrieți o funcție JS care **adaugă** și **elimină** numerele din / dintr-o matrice.

Veți primi o comandă care poate fi "**add**" sau "**remove**".

**Numărul inițial** este 1 și nu este stocat inițial în matrice.

Fiecare comandă de intrare trebuie să **mărească acel număr**, indiferent de ce este.

La primirea unei comenzi "**add**", ar trebui să adăugați numărul curent în matricea dvs.

După ce primiți comanda "**remove**", trebuie să eliminați ultimul număr introdus, existent în prezent în matrice.

**Intrarea** vine ca o **matrice de șiruri**.

Fiecare element deține o **comandă**.

**Ieșirea** este matricea însăși, cu fiecare element imprimat pe o nouă linie.

În cazul unei matrice goale, pur și simplu tipăriți "**Empty**".


## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|andAndRemove([ 'add', 'add', 'add', 'add' ]) | 1 |
||2 |
||3  |
||4  |


| **Intrare** | **Ieșire** |
| --- | --- |
|andAndRemove([ 'add', 'add', 'remove', 'add', 'add' ]) | 1 |
||4 |
||5 |

| **Intrare** | **Ieșire** |
| --- | --- |
|andAndRemove([ 'remove', 'remove', 'remove' ]) | Empty|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
andAndRemove([ 'add', 'add', 'add', 'add' ])
[/input]
[output]
1
2
3
4
[/output]
[/test]
[test open]
[input]
andAndRemove([ 'add', 'add', 'remove', 'add', 'add' ])
[/input]
[output]
1
4
5
[/output]
[/test]
[test open]
[input]
andAndRemove([ 'remove', 'remove', 'remove' ])
[/input]
[output]
Empty
[/output]
[/test]
[test]
[input]
andAndRemove([ 'add', 'add', 'add', 'add', 'add', 'remove', 'add' ])
[/input]
[output]
1
2
3
4
7
[/output]
[/test]
[test]
[input]
andAndRemove([ 'remove', 'remove', 'remove', 'add' ])
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
andAndRemove([ 'remove', 'remove', 'remove', 'add', 'remove', 'add' ])
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
andAndRemove([ 'add', 'add', 'add', 'add', 'remove', 'remove', 'remove', 'remove' ])
[/input]
[output]
Empty
[/output]
[/test]
[test]
[input]
andAndRemove([ 'add', 'remove', 'add', 'remove', 'add', 'remove', 'add', 'remove', 'add', 'remove', 'add', 'remove', 'add' ])
[/input]
[output]
13
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problemă: Rotate an Array  

[code-task title="Rotate an Array" taskId="java-path-js-advanced-arrays-Rotate-an-Array" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function rotateAnArray(input){
  // Scrie codul aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

Scrieți o funcție JS care rotește o matrice.

Matricea trebuie rotită **spre partea dreaptă**, ceea ce înseamnă că ultimul element ar trebui să devină primul la rotație.

**Intrarea** vine ca o **matrice de șiruri**.

**Ultimul element** al tabloului este numărul de rotații pe care trebuie să le efectuați.

**Ieșirea** este noua matrice după rotații.

Elementele trebuie să fie tipărite pe o singură linie, separate printr-un **spațiu unic**.

## Exemple
| **Intrare** | **Output** |
| --- | --- |
|rotateAnArray([ '1', '2', '3', '4', '2' ]) | 3 4 1 2  |
|rotateAnArray([ 'Banana', 'Orange', 'Coconut', 'Apple', '15' ]) | Orange Coconut Apple Banana |

## Sugestii 

Verificați dacă există o **funcție încorporată** pentru inserarea elementelor **la începutul** matricei.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
rotateAnArray([ '1', '2', '3', '4', '2' ])
[/input]
[output]
3 4 1 2
[/output]
[/test]
[test open]
[input]
rotateAnArray([ 'Banana', 'Orange', 'Coconut', 'Apple', '15' ])
[/input]
[output]
Orange Coconut Apple Banana
[/output]
[/test]
[test]
[input]
rotateAnArray([ 'Yoda-', 'This', 'Will', 'Be', 'Rotated', 'Times', '2' ])
[/input]
[output]
Rotated Times Yoda- This Will Be
[/output]
[/test]
[test]
[input]
rotateAnArray([ '01', '32', '54', '76', '98', '4' ])
[/input]
[output]
32 54 76 98 01
[/output]
[/test]
[test]
[input]
rotateAnArray([ '.003', '.out', '.txt', 'test', '1' ])
[/input]
[output]
test .003 .out .txt
[/output]
[/test]
[test]
[input]
rotateAnArray([ '1', '2', '3', '4', '0' ])
[/input]
[output]
1 2 3 4
[/output]
[/test]
[test]
[input]
rotateAnArray([ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '2000000000' ])
[/input]
[output]
0 1 2 3 4 5 6 7 8 9
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problemă: Extract Increasing Subsequence from Array 

[code-task title="Extract Increasing Subsequence from Array" taskId="java-path-js-advanced-arrays-Extract-Increasing-Subsequence-from-Array" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function extractSubsequence(input){
  // Scrie codul aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

Scrieți o funcție care extrage numai acele numere care **formează o subsecvență nedescrescătoare**.

Cu alte cuvinte, începeți de la **primul element** și continuați până la **sfârșitul**  **matricei de numere date**.

Dacă un număr este **MAI MIC decât** **cel mai mare număr actual**, **ignorați-l**.

Alternativ, dacă este egal sau mai mare decât **cel mai mare** actual, îl setați ca **nou cel mai mare număr** și continuați.

**Intrarea** vine ca o **matrice de numere**.

**Ieșirea** este matricea procesată după filtrare, care ar trebui să fie o subsecvență care nu descrește.

Fiecare element trebuie să fie tipărit pe o nouă linie.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|extractSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24 ]) |1 |
||3|
||8|
||10|
||12|
||24|


| **Intrare** | **Ieșire** |
| --- | --- |
|extractSubsequence([ 1, 2, 3, 4 ]) |1 |
||2|
||3|
||4|

| **Intrare** | **Ieșire** |
| --- | --- |
|extractSubsequence([ 20, 3, 2, 15, 6, 1 ]) |20 |

## Sugestii 

Funcția încorporată `Array.reduce ()` vă poate ajuta foarte mult cu această problemă.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
extractSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24 ])
[/input]
[output]
1
3
8
10
12
24
[/output]
[/test]
[test open]
[input]
extractSubsequence([ 1, 2, 3, 4 ])
[/input]
[output]
1
2
3
4
[/output]
[/test]
[test open]
[input]
extractSubsequence([ 20, 3, 2, 15, 6, 1 ])
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
extractSubsequence([ 0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9 ])
[/input]
[output]
0
1
2
3
4
5
6
7
8
9
[/output]
[/test]
[test]
[input]
extractSubsequence([ 20, 45, 32, 12, 71, 23, 100 ])
[/input]
[output]
20
45
71
100
[/output]
[/test]
[test]
[input]
extractSubsequence([ 100, 101, 100, 102, 100, 13 ])
[/input]
[output]
100
101
102
[/output]
[/test]
[test]
[input]
extractSubsequence([ 12, 21, 34, 43, 56, 65, 78, 87, 910, 109, 910, 910 ])
[/input]
[output]
12
21
34
43
56
65
78
87
910
910
910
[/output]
[/test]
[test]
[input]
extractSubsequence([ 0, -1, -2, -3, -4 ])
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problemă: Sort an Array by 2 Criteria  

[code-task title="Sort an Array by 2 Criteria" taskId="java-path-js-advanced-arrays-Sort-an-Array-by-2-Criteria" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function sort(input){
  // Scrie codul aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

Scrieți o funcție care sortează o **matrice dată de șiruri** după **lungime** în **ordine crescătoare** ca **criterii primare** și după **valoare alfabetică** în ordine crescătoare ca **criterii secundare**.

Comparația ar trebui să fie **diferențiată de majuscule**.

**Intrarea** vine ca o **matrice de șiruri**.

**Ieșirea** este matricea ordonată de șiruri în care fiecare element este tipărit pe o nouă linie. 

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|sort([ 'alpha', 'beta', 'gamma' ]) |beta |
||alpha|
||gamma|


## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|sort([ 'Isacc', 'Theodor', 'Jack', 'Harrison', 'George' ]) |Jack |
||Isacc |
||George |
||Theodor|
||Harrison|


## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|sort([ 'test', 'Deny', 'omen', 'Default' ]) |Deny |
||omen|
||test|
||Default|

## Sugestii 

O matrice poate fi sortată prin trecerea unei funcții de comparare la metoda `Array.sort()`.

Crearea unei funcții de comparare cu 2 criterii poate fi realizată prin compararea mai întâi cu **criteriile principale**.

Dacă cele 2 elemente sunt diferite (rezultatul funcției de comparare nu este 0), returnează rezultatul.

Dacă cele două elemente sunt aceleași după **criteriile principale** (rezultatul funcției de comparare este 0), trebuie să comparăm după **criteriile secundare** și rezultatul acestei comparații este rezultatul comparării funcţie.

Puteți afla mai multe despre `Array.sort()` [aici](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

[/task-description]
[code-io /]
[tests]
[test open]
[input]
sort([ 'alpha', 'beta', 'gamma' ])
[/input]
[output]
beta
alpha
gamma
[/output]
[/test]
[test open]
[input]
sort([ 'Isacc', 'Theodor', 'Jack', 'Harrison', 'George' ])
[/input]
[output]
Jack
Isacc
George
Theodor
Harrison
[/output]
[/test]
[test open]
[input]
sort([ 'test', 'Deny', 'omen', 'Default' ])
[/input]
[output]
Deny
omen
test
Default
[/output]
[/test]
[test]
[input]
sort([ '0', '9', '3', '6', '1', '5', '2', '4', '8', '7' ])
[/input]
[output]
0
1
2
3
4
5
6
7
8
9
[/output]
[/test]
[test]
[input]
sort([ 'Adolf', 'Ariel', 'Rusalka', 'Mermaid', 'Blueberry', 'Blackberry', 'Borovinka', 'Kapinchica' ])
[/input]
[output]
Adolf
Ariel
Mermaid
Rusalka
Blueberry
Borovinka
Blackberry
Kapinchica
[/output]
[/test]
[test]
[input]
sort([ 'there', 'Will', 'be any', 'evidences', 'of the case?' ])
[/input]
[output]
Will 
there 
be any 
evidences 
of the case?
[/output]
[/test]
[test]
[input]
sort([ 'WriteLine', 'Console', '(parsedInput)' ])
[/input]
[output]
Console
WriteLine
(parsedInput)
[/output]
[/test]
[test]
[input]
sort([ 'this', 'I swear it is!', 'the last one.', 'Is' ])
[/input]
[output]
Is
this
the last one.
I swear it is!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problemă: Magic Matrices   

[code-task title="Magic Matrices" taskId="java-path-js-advanced-arrays-Magic-Matrices" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function magicMatrices(input){
  // Scrieti codul aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

Scrieți o funcție care verifică dacă o anumită matrice de numere este **magică**.

O matrice este magică dacă **sumele celulelor** din fiecare rând și **fiecare coloană** sunt **egale**.

**Intrarea** vine ca o **matrice de matrice**, care conține numere (matricea numărului 2D).

Numerele de intrare **vor fi întotdeauna pozitive**.

**Ieșirea** este un rezultat boolean care indică dacă matricea este magică sau nu.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|magicMatrices([ [ 4, 5, 6 ], [ 6, 5, 4 ], [ 5, 5, 5 ] ]) |true |
|magicMatrices([ [ 11, 32, 45 ], [ 21, 0, 1 ], [ 21, 1, 1 ] ])|false|
|magicMatrices([ [ 1, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ] ])|true|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
magicMatrices([ [ 4, 5, 6 ], [ 6, 5, 4 ], [ 5, 5, 5 ] ])
[/input]
[output]
true
[/output]
[/test]
[test open]
[input]
magicMatrices([ [ 11, 32, 45 ], [ 21, 0, 1 ], [ 21, 1, 1 ] ])
[/input]
[output]
false
[/output]
[/test]
[test open]
[input]
magicMatrices([ [ 1, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ] ])
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
magicMatrices([ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ])
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
magicMatrices([ [ 1, 0, 1, 0, 1, 0 ], [ 0, 1, 0, 1, 0, 1 ], [ 1, 0, 1, 0, 1, 0 ], [ 0, 1, 0, 1, 0, 1, ], [ 1, 0, 1, 0, 1, 0 ], [ 0, 1, 0, 1, 0, 1 ] ])
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
magicMatrices([ [ 1, 0, 0 ], [ 0, 0, 1 ] ])
[/input]
[output]
false
[/output]
[/test]
[test]
[input]
magicMatrices([ [ 3, 6, 3 ], [ 6, 3, 6 ], [ 3, 6, 3 ] ])
[/input]
[output]
false
[/output]
[/test]
[test]
[input]
magicMatrices([ [ 12, 25, 67 ], [ 40, 40, 24 ], [ 52, 39, 13 ] ])
[/input]
[output]
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problemă: Tic-Tac-Toe   

[code-task title="Tic-Tac-Toe" taskId="java-path-js-advanced-arrays-Tic-Tac-Toe" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function ticTacToe(input){
  // Scrie codul aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Descriere
Creați o aplicație pentru consolă tic-tac-toe.

Veți primi o serie de matrici.

După cum știți, există doi jucători în acest joc, deci primul element al intrării va fi coordonatele alese de primul jucător.

Al doilea element va fi coordonatele celui de-al doilea jucător și așa mai departe.

Starea inițială a tabloului de bord este: 

```js
[[false, false, false], 
[false, false, false], 
[false, false, false]] 
```
Marca primului jucător este **X**, iar marca celui de-al doilea jucător este **O**. 

## Intrare 

Un parametru:

- O matrice - **mișcările** pe care le fac jucătorii

## Ieșire

- Există doi jucători - X și O

- Dacă un jucător încearcă să facă rândul său să aibă loc deja, trebuie să facă din nou un rând și ar trebui să tipăriți următorul mesaj:

"**This place is already taken. Please choose another!**" 

- Dacă nu există spații libere pe tabloul de bord și nimeni nu câștigă, jocul ar trebui să se încheie și ar trebui să imprimați următorul mesaj:

"**The game ended! Nobody wins :(**" 

- Dacă cineva câștigă, trebuie să imprimați următorul mesaj și **starea actuală** a **tabloului de bord**:

"**Player** \{ **X/0** \} **wins**" 

**Notă**: la tipărirea stării tabloului de bord, elementele fiecărui rând al tabloului de bord trebuie separate de "**\ t**" și fiecare rând trebuie să fie pe o nouă linie.

 

## Constrângeri

Elementele din matricea de intrare vor fi întotdeauna suficiente pentru a încheia jocul.


## Exemplul Unu
|**Intrare**|**Ieșire**| 
| --- | --- |
|ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0' ]) |Player O wins!|
||O X	X |
||X	O	X|
||O	false	O |

|**Intrare**|**Ieșire**| 
| --- | --- |
|ticTacToe([ '0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1' ]) |This place is already taken. Please choose another! |
||Player X wins!  |
||X	X X |
||false	O	O  |
||false	false	false| 


|**Intrare**|**Ieșire**| 
| --- | --- |
|ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0' ]) |The game ended! Nobody wins :(  |
||O	X	X  |
||X	X	O  |
||O	O	X   |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0' ])
[/input]
[output]
Player O wins!
O	X	X
X	O	X
O	false	O
[/output]
[/test]
[test open]
[input]
ticTacToe([ '0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1' ])
[/input]
[output]
This place is already taken. Please choose another!
Player X wins!
X	X	X
false	O	O
false	false	false
[/output]
[/test]
[test open]
[input]
ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0' ])
[/input]
[output]
The game ended! Nobody wins :(
O	X	X
X	X	O
O	O	X
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '0 1', '1 0', '0 2', '2 0' ])
[/input]
[output]
Player X wins!
X	O	O
X	false	false
X	false	false
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 1', '0 0', '0 2', '1 0', '2 2', '2 0' ])
[/input]
[output]
Player O wins!
O	X	X
O	false	false
O	false	X
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '2 2', '1 0', '1 1', '2 0' ])
[/input]
[output]
Player X wins!
X	false	false
X	O	false
X	false	O
[/output]
[/test]
[test]
[input]
ticTacToe([ '2 2', '0 0', '1 1', '1 0', '1 2', '2 0' ])
[/input]
[output]
Player O wins!
O	false	false
O	X	X
O	false	X
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '0 2', '1 1', '1 2', '2 2' ])
[/input]
[output]
Player X wins!
X	false	O
false	X	O
false	false	X
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 2', '0 0', '1 2', '1 1', '2 1', '2 2' ])
[/input]
[output]
Player O wins!
O	false	X
false	O	X
false	X	O
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1' ])
[/input]
[output]
This place is already taken. Please choose another!
Player X wins!
X	X	X
false	O	O
false	false	false
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '0 2', '1 0', '2 0', '0 0', '2 1', '1 1' ])
[/input]
[output]
This place is already taken. Please choose another!
Player O wins!
X	false	O
X	O	false
O	X	false
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0' ])
[/input]
[output]
The game ended! Nobody wins :(
O	X	X
X	X	O
O	O	X
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '1 1', '0 2', '0 1', '2 1', '1 0', '1 2', '2 2', '0 2', '2 0' ])
[/input]
[output]
This place is already taken. Please choose another!
The game ended! Nobody wins :(
X	O	X
O	O	X
X	X	O
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
