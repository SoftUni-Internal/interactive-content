# Teme Pentru Acasă

[slide hideTitle]
# Problemă: List of Products
[code-task title="List of Products" taskId="js-fundamentals-1-Arrays-Advanced-List-of-Products" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function listProducts(input){
  // Scrieți codul dvs. aici
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

Veți primi o **matrice de produse.**

Imprimați o matrice numerotată a tuturor produselor **ordonate după nume.**

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
|listProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])| 1\.Apples
||2\.Onions|
||3\.Potatoes|
||4\.Tomatoes|
 
[/task-description]
[code-io /]
[tests]
[test open]
[input]
listProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
[/input]
[output]
1\.Apples
2\.Onions
3\.Potatoes
4\.Tomatoes
[/output]
[/test]
[test]
[input]
listProducts(['A', 'B', 'C'])
[/input]
[output]
1\.A
2\.B
3\.C
[/output]
[/test]
[test]
[input]
listProducts(['C', 'Z', 'A', 'K'])
[/input]
[output]
1\.A
2\.C
3\.K
4\.Z
[/output]
[/test]
[test]
[input]
listProducts(['Pgf', 'Zh', 'fA', 'K', 'Z', 'Aa'])
[/input]
[output]
1\.Aa
2\.K
3\.Pgf
4\.Z
5\.Zh
6\.fA
[/output]
[/test]
[test]
[input]
listProducts(['Ca', 'erfZ', 'fdAg', 'fgK'])
[/input]
[output]
1\.Ca
2\.erfZ
3\.fdAg
4\.fgK
[/output]
[/test]
[test]
[input]
listProducts(['fC', 'fdZ'])
[/input]
[output]
1\.fC
2\.fdZ
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Train
[code-task title="Train" taskId="js-fundamentals-1-Arrays-Advanced-Train" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function train(arr){
  // Scrieți codul dvs. aici
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

Vi se va oferi o matrice de șiruri.

Primul element va fi un șir care conține vagoane (numere).

Fiecare număr din șir reprezintă numărul de pasageri care se află în prezent într-un vagon.

Al doilea element al matricei va fi capacitatea maximă a fiecărui vagon (număr unic).

Restul elementelor vor fi comenzi în următorul format:

- "**Add** \{**passengers**\}" - adăugați un vagon la final, cu numărul dat de pasageri

- "\{**passengers**\}" - găsiți un vagon existent care să găzduiască toți pasagerii (începând cu primul vagon)

La final, tipăriți starea finală a trenului (toate vagoanele, separate printr-un spațiu).


## Exemple
| **Intrare**|**Ieșire** |
| --- | --- |
|train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])| 72 54 21 12 4 75 23 10 0|
|train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])| 10 10 10 10 10 10 10|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
[/input]
[output]
72 54 21 12 4 75 23 10 0
[/output]
[/test]
[test open]
[input]
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])
[/input]
[output]
10 10 10 10 10 10 10
[/output]
[/test]
[test]
[input]
train(['0 0 13 15 23 12', '24', 'Add 1', 'Add 15', '18', 'Add 5', '10'])
[/input]
[output]
18 10 13 15 23 12 1 15 5
[/output]
[/test]
[test]
[input]
train(['10 52 0 10 2 4 23 15 43', '110', 'Add 100', 'Add 10', '10', 'Add 45', '8', '6'])
[/input]
[output]
34 52 0 10 2 4 23 15 43 100 10 45
[/output]
[/test]
[test]
[input]
train(['52 0 15 43', '80', 'Add 10', 'Add 50', '10', 'Add 45'])
[/input]
[output]
62 0 15 43 10 50 45
[/output]
[/test]
[test]
[input]
train(['10 5 10 10 2 4 3 15 3', '15', 'Add 10', 'Add 1', '10', 'Add 5', '5', '9'])
[/input]
[output]
15 15 10 10 11 4 3 15 3 10 1 5
[/output]
[/test]
[test]
[input]
train(['0', '10', 'Add 10', '10', '0', '0', 'Add 10', 'Add 5', 'Add 5'])
[/input]
[output]
10 10 10 5 5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Distinct Array
[code-task title="Distinct Array" taskId="js-fundamentals-1-Arrays-Advanced-Distinct-Array" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function distinctArray(arr){
  // Scrieți codul dvs. aici
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

Veți primi o matrice de numere întregi pe prima linie a intrării (separate printr-un spațiu).

Eliminați din matrice toate elementele care se repetă.

Imprimați elementele rezultate (cele care au rămas), separate printr-un singur spațiu. 

## Exemple
| **Intrare** | **Ieșire** | **Comentarii** |
| :---:       |    :----:   |   :---:     |
|distinctArray([1, 2, 3, 4])| 1 2 3 4| No repeating elements |
|distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])| 7 8 9 2 3 4 1| 7 and 2 are already present in the array \-\> remove them |
|distinctArray([20, 8, 12, 13, 4, 4, 8, 5])| 20 8 12 13 4 5| 4 and 8 are already present in the array \-\> remove them |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
distinctArray([1, 2, 3, 4])
[/input]
[output]
1 2 3 4
[/output]
[/test]
[test open]
[input]
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
[/input]
[output]
7 8 9 2 3 4 1
[/output]
[/test]
[test open]
[input]
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
[/input]
[output]
20 8 12 13 4 5
[/output]
[/test]
[test]
[input]
distinctArray([11, 20, 51, 1, 1, 51, 13, 9])
[/input]
[output]
11 20 51 1 13 9
[/output]
[/test]
[test]
[input]
distinctArray([7, 1, 2, 3, 54, 7, 2, 2, 1])
[/input]
[output]
7 1 2 3 54
[/output]
[/test]
[test]
[input]
distinctArray([9, 10, 7, 2, 2, 120, 51, 1])
[/input]
[output]
9 10 7 2 120 51 1
[/output]
[/test]
[test]
[input]
distinctArray([20, 4, 4, 8, 5, 12, 2, 35, 5, 4])
[/input]
[output]
20 4 8 5 12 2 35
[/output]
[/test]
[test]
[input]
distinctArray([0, 8, 5, 12, 0, 15, 5, 4, 8, 4])
[/input]
[output]
0 8 5 12 15 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: HouseParty
[code-task title="HouseParty" taskId="js-fundamentals-1-Arrays-Advanced-HouseParty" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function houseParty(arr){
  // Scrieți codul dvs. aici
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

Scrieți o funcție care ține evidența **invitaților** care merg la o petrecere într-o locuință.

Vi se va oferi o **matrice de șiruri.**

Fiecare șir va fi unul dintre următoarele:

- "\{**name**\} **is going!**"

- "\{**name**\} **is not going!**"

Dacă primiți primul tip de intrare, trebuie să **adăugați** persoana dacă aceasta nu se află în listă.

Dacă el/ea se află în lista, tipăriți:

"\{**name**\} **is already in the list!**"

Dacă primiți al doilea tip de intrare, trebuie să **eliminați** persoana dacă se află în listă.

Dacă nu, tipăriți:

"\{**name**\} **is not in the list!**"

La final, tipăriți toți invitații, fiecare pe o linie separată.


## Exemplul Unu
|**Intrare**|**Ieșire**|
| :---:       |    :----:   |
|houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])| John is not in the list!|
||Allie|

## Exemplul Doi
|**Intrare**|**Ieșire**|
| :---:       |    :----:   |  
|houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])|Tom is already in the list!|
||Tom|
||Annie|
||Garry|
||Jerry|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
[/input]
[output]
John is not in the list!
Allie
[/output]
[/test]
[test open]
[input]
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])
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
houseParty(['A is going!', 'Ge is going!', 'J is not going!', 'G is not going!'])
[/input]
[output]
J is not in the list!
G is not in the list!
A
Ge
[/output]
[/test]
[test]
[input]
houseParty(['T is going!', 'A is going!', 'T is going!', 'G is going!', 'J is going!', 'J is not going!', 'G is not going!'])
[/input]
[output]
T is already in the list!
T
A
[/output]
[/test]
[test]
[input]
houseParty(['T is going!', 'A is going!', 'T is going!', 'G is going!', 'J is going!'])
[/input]
[output]
T is already in the list!
T
A
G
J
[/output]
[/test]
[test]
[input]
houseParty(['T is going!', 'A is going!', 'T is going!', 'J is not going!', 'G is not going!'])
[/input]
[output]
T is already in the list!
J is not in the list!
G is not in the list!
T
A
[/output]
[/test]
[test]
[input]
houseParty(['T is going!', 'G is going!', 'J is going!', 'J is not going!', 'G is not going!'])
[/input]
[output]
T
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problemă: Sorting
[code-task title="Sorting" taskId="js-fundamentals-1-Arrays-Advanced-Sorting" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sorting(arr){
  // Scrieți codul dvs. aici
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

Scrieți o funcție care sortează o matrice de numere, astfel încât primul element este cel mai mare, al doilea este cel mai mic, al treilea este al doilea cel mai mare, al patrulea este al doilea cel mai mic și așa mai departe.

Imprimați elementele pe o singură linie, separate printr-un singur spațiu.


# Exemplu
|**Intrare**|**Ieșire**| 
| :---:       |    :----:   | 
|sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])| 94 1 69 2 63 3 52 18 31 21|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
[/input]
[output]
94 1 69 2 63 3 52 18 31 21
[/output]
[/test]
[test]
[input]
sorting([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])
[/input]
[output]
63 2 54 3 22 9 21 11 19 18
[/output]
[/test]
[test]
[input]
sorting([11, 91, 18])
[/input]
[output]
91 11 18
[/output]
[/test]
[test]
[input]
sorting([21, 18, 4, 15, 21, 98])
[/input]
[output]
98 4 21 15 21 18
[/output]
[/test]
[test]
[input]
sorting([12, 9, 63, 23, 14, 11, 21, 38])
[/input]
[output]
63 9 38 11 23 12 21 14
[/output]
[/test]
[test]
[input]
sorting([2, 9, 3, 13, 18])
[/input]
[output]
18 2 13 3 9
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Sort an Array by 2 Criteria
[code-task title="Sort an Array by 2 Criteria" taskId="js-fundamentals-1-Arrays-Advanced-Sort-an-Array" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sort(input){
  // Scrieți codul dvs. aici
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

Scrieți o funcție care sortează o matrice de șiruri după lungimea lor în ordine crescătoare, ca criteriu primar, și după valoarea alfabetică în ordine crescătoare, ca criteriu secundar.

Intrarea este o matrice de șiruri.

Ieșirea este matricea sortată de șiruri. 


## Exemplul Unu
|**Intrare**|**Ieșire** |
| --- | --- |
|sort(['alpha', 'beta', 'gamma'])|beta|
||alpha|
||gamma|


## Exemplul Doi
|**Intrare**|**Ieșire** |
| --- | --- |
|sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])|Jack|
||Isacc|
||George|
 ||Theodor|
||Harrison|

[hints]
[hint]
O matrice poate fi sortată transmițând o funcție de comparare pentru funcția `Array.sort()`.
[/hint] 
[hint]
Crearea unei **funcții de comparare** cu două criterii poate fi realizată comparând mai întâi după criteriile principale și dacă cele două elemente sunt diferite \(rezultatul comparației nu este 0\) - returnează rezultatul **funcției de comparare**.

```js
let sorted = array.sort((a, b) =>
  a.length - b.length || 
  a.localeCompare(b)).join('\n');
```
[/hint] 
[hint]
Dacă cele două elemente sunt identice după criteriile principale \(rezultatul comparației este 0\), trebuie să le comparăm după al doilea criteriu, iar rezultatul acestei comparații va fi rezultatul **funcției de comparare.** 

`return sorted;`
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
sort(['alpha', 'beta', 'gamma'])
[/input]
[output]
beta
alpha
gamma
[/output]
[/test]
[test open]
[input]
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
[/input]
[output]
Jack
Isacc
George
Theodor
Harrison
[/output]
[/test]
[test]
[input]
sort(['test', 'Deny', 'omen', 'Default'])
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
sort(['sa', 'fs', 'fdsf'])
[/input]
[output]
fs
sa
fdsf
[/output]
[/test]
[test]
[input]
sort(['agg', 'add', 'gga', 'dfsj'])
[/input]
[output]
add
agg
gga
dfsj
[/output]
[/test]
[test]
[input]
sort(['gss', 'rwq', 'ngf', 'aaa', 'vf'])
[/input]
[output]
vf
aaa
gss
ngf
rwq
[/output]
[/test]
[test]
[input]
sort(['vds', 'jkl', 'weq', 'mdsc', 'nc'])
[/input]
[output]
nc
jkl
vds
weq
mdsc
[/output]
[/test]
[test]
[input]
sort(['fee', 'cz', 'fe', 'kcld'])
[/input]
[output]
cz
fe
fee
kcld
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Array Manipulations
[code-task title="Array Manipulations" taskId="js-fundamentals-1-Arrays-Advanced-Array-Manipulation" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function arrayManipulations(input){
  // Scrieți codul dvs. aici
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

Scrieți o funcție care manipulează o matrice de numere.

- "**Add** \{**number**\}": adăugați un număr la sfârșitul matricei

- "**Remove** \{**number**\}": eliminați un număr de la sfârșitul matricei

-	"**RemoveAt** \{**index**\}": eliminați din matrice numărul care corespunde indicelui dat

- "**Insert** \{**number**\} \{**index**\}": introduceți un număr la un indice dat

**Notă: toți indicii vor fi valizi!**

Imprimați starea finală a matricei (separarea trebuie făcută printr-un singur spațiu).

Primul element va fi un șir care conține matricea care trebuie manipulată.

Fiecare alt element (comandă) pe care îl primim va fi, de asemenea, un șir.

Ieșirea este matricea manipulată, pe care trebuie să o imprimăm pe consolă pe o singură linie, separată printr-un spațiu. 


# Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
|arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])|4 53 6 8 43 3|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
arrayManipulations(['4 19 2 53 6 43', 'Add 3','Remove 2','RemoveAt 1','Insert 8 3'])
[/input]
[output]
4 53 6 8 43 3
[/output]
[/test]
[test]
[input]
arrayManipulations(['14 19 52 33 16 3 15 78 19 20 30', 'Add 7', 'Remove 12', 'RemoveAt 0', 'Insert 5 1', 'RemoveAt 5', 'RemoveAt 7', 'RemoveAt 8', 'Insert 10 1'])
[/input]
[output]
19 10 5 52 33 16 15 78 20 7
[/output]
[/test]
[test]
[input]
arrayManipulations(['14 33 16 3 15 78 30', 'Add 9', 'Remove 12', 'RemoveAt 6', 'RemoveAt 1', 'RemoveAt 8', 'Insert 10 1'])
[/input]
[output]
14 10 16 3 15 78 9
[/output]
[/test]
[test]
[input]
arrayManipulations(['14 1 9 3 15 8', 'Remove 1', 'RemoveAt 0', 'Add 12', 'RemoveAt 1', 'Insert 10 1'])
[/input]
[output]
9 10 15 8 12
[/output]
[/test]
[test]
[input]
arrayManipulations(['14 1 9 3 15 12 19 30 5 8', 'Add 12', 'RemoveAt 2', 'Add 11', 'RemoveAt 3', 'Add 12', 'RemoveAt 1', 'Insert 10 1'])
[/input]
[output]
14 10 3 12 19 30 5 8 12 11 12
[/output]
[/test]
[test]
[input]
arrayManipulations(['4 1 9 3 25 12 9 3 55 12 19 30 65 18', 'Add 12', 'RemoveAt 2', 'RemoveAt 1', 'Insert 10 1'])
[/input]
[output]
4 10 3 25 12 9 3 55 12 19 30 65 18 12
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

