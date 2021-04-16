# Teme Pentru Acasă
[slide hideTitle]
# Problemă: Sum Even Numbers
[code-task title="Sum Even Numbers" taskId="js-fundamentals-1-Arrays-Sum-Even-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumEvenNumbers(input){
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
Creați un program care primește o **matrice de șiruri**, le parsează la **numere** și însumează doar numerele pare.

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| sumEvenNumbers(['1', '2', '3', '4', '5', '6']) | 12 |
| sumEvenNumbers(['3', '5', '7', '9']) | 0 |
| sumEvenNumbers(['2', '4', '6', '8', '10']) | 30 |

[/task-description]
[tests]
[test open]
[input]
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])
[/input]
[output]
12
[/output]
[/test]
[test open]
[input]
sumEvenNumbers(['3', '5', '7', '9'])
[/input]
[output]
0
[/output]
[/test]
[test open]
[input]
sumEvenNumbers(['2', '4', '6', '8', '10'])
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
sumEvenNumbers(['1', '1', '34', '64', '86'])
[/input]
[output]
184
[/output]
[/test]
[test]
[input]
sumEvenNumbers(['1', '2', '3', '4', '5', '6', '10'])
[/input]
[output]
22
[/output]
[/test]
[test]
[input]
sumEvenNumbers(['13', '55', '37', '19'])
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
sumEvenNumbers(['13', '55', '37', '19'])
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
sumEvenNumbers(['1', '156', '7', '18'])
[/input]
[output]
174
[/output]
[/test]
[test]
[input]
sumEvenNumbers(['3', '14', '0', '8', '18'])
[/input]
[output]
40
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Even and Odd Subtraction
[code-task title="Even and Odd Subtraction" taskId="js-fundamentals-1-Arrays-Even-and-Odd-Substraction" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function evenOdd(input){
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

Creați un program care calculează **diferența** dintre suma numerelor **pare** și suma numerelor **impare** dintr-o matrice.

## Exemple
| **Intrare** | **Ieșire** |**Comentarii** |
| :--- | :---: | :---:|
| evenOdd([1, 2, 3, 4, 5, 6]) | 3 | 2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3|
| evenOdd([3, 5, 7, 9]) |\-24 ||
| evenOdd([2, 4, 6, 8, 10]) |30 | |


[/task-description]
[tests]
[test open]
[input]
evenOdd([1, 2, 3, 4, 5, 6])
[/input]
[output]
3
[/output]
[/test]
[test open]
[input]
evenOdd([3, 5, 7, 9])
[/input]
[output]
\-24
[/output]
[/test]
[test open]
[input]
eveOdd([2, 4, 6, 8, 10])
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
evenOdd([1, 3, 13, 544, 65, 46])
[/input]
[output]
508
[/output]
[/test]
[test]
[input]
evenOdd([74, 16, 65, 110])
[/input]
[output]
135
[/output]
[/test]
[test]
[input]
evenOdd([53, 5, 27, 19])
[/input]
[output]
-104
[/output]
[/test]
[test]
[input]
evenOdd([-53, 485, 328, 194])
[/input]
[output]
90
[/output]
[/test]
[test]
[input]
evenOdd([24, 44, 16, 68, 15, 41])
[/input]
[output]
96
[/output]
[/test]
[test]
[input]
evenOdd([24, 14, 16, -48, 110])
[/input]
[output]
116
[/output]
[/test]
[test]
[input]
evenOdd([24, -6, 16, 68, 150])
[/input]
[output]
252
[/output]
[/test]
[test]
[input]
evenOdd([24, 84, 16, 68, -14])
[/input]
[output]
178
[/output]
[/test]
[test]
[input]
evenOdd([24, 84, 16, 68, -14])
[/input]
[output]
178
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Condense Array to Number
[code-task title="Condense Array to Number" taskId="js-fundamentals-1-Arrays-Condense-Array-To-Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function condense(input){
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

Creați un program care primește **o matrice de numere** și le condensează prin **însumarea** cuplurilor adiacente de elemente până se obține un **număr unic**.

## Exemple

De exemplu, dacă avem 3 elemente \[**2, 10, 3**\], însumăm primul și al doilea element și apoi pe al doilea și al treilea și obținem \{**2+10, 10+3**\} = \{**12, 13**\}, apoi însumăm din nou toate elementele adiacente și obținem \{**12+13**\} = \{**25**\}.

| **Intrare** | **Ieșire** |**Comentarii** |
| :--- | :---: | :---:|
| condense([2, 10, 3]) | 25 |2 10 3 \-\> 2+10 10+3 \-\> 12 13 -> 12 + 13 \-\> 25 |
| condense([5, 0, 4, 1, 2]) | 35 ||
| condense(\[1\]) | 1 ||

[hints]
[hint]
Creați o buclă **while**:

```js
while (nums.length > 1) {
  // ...
}
```
[/hint] 
[hint]
Cât timp aveți mai multe elemente în matricea **nums**\[\], repetați următoarele:

- Alocați o nouă matrice `condensed[]` de dimensiunea **nums**\.**length**\-**1**

```js
while (nums.length > 1) {
  let condensed = Array(nums.length - 1);
  // ...
}
```
[/hint] 
[hint]
Însumați numerele din **nums**\[\] în **condensed**\[\]:
  - **condensed**\[i\] = **nums**\[i\] \+ **nums**\[i\+1\]
  - **nums**\[\] = **condensed**\[\]

```js
while (nums.length > 1) {
  let condensed = Array(nums.length - 1);
  for (let i = 0; i < nums.length - 1; i++) {
    condensed[i] = 
      Number(nums[i]) + Number(nums[i + 1]);
  }
  nums = condensed;
}

console.log(nums[0]);
```
[/hint] 
[/hints] 

[/task-description]
[tests]
[test open]
[input]
condense([2, 10, 3])
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
condense([5, 0, 4, 1, 2])
[/input]
[output]
35
[/output]
[/test]
[test open]
[input]
condense([1])
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
condense([3, 4, 0, 3, 4, 0, 0, 0, 0, 1, 2])
[/input]
[output]
1255
[/output]
[/test]
[test]
[input]
condense([0, 0, 0])
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
condense([-5, -10, -15, -5])
[/input]
[output]
-85
[/output]
[/test]
[test]
[input]
condense([-1, 2, -3, 4, -5, 6, -7, 8, -9])
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
condense([-1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1])
[/input]
[output]
514214
[/output]
[/test]
[test]
[input]
condense([10])
[/input]
[output]
10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Add or Subtract
[code-task title="Add or Subtract"taskId="js-fundamentals-1-Arrays-Add-or-Substract" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function addOrSubstract(input){
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

Creați un program care modifică **valoarea** numerelor impare și pare într-o matrice de numere.

- Dacă numărul este **par** - **adăugați** la valoarea sa poziția indicelui său

- Dacă numărul este **impar** - **scădeți** din valoarea sa poziția indicelui său


## Ieșire

Pe prima linie tipăriți **matricea recent modificată**, pe a doua linie tipăriți suma numerelor din matricea **originală**, pe a treia linie tipăriți suma numerelor din **matricea modificată.**


## Exemplul Unu
   |**Intrare**|**Ieșire**|
| --- | --- |
| addOrSubtract([5, 15, 23, 56, 35]) | [ 5, 14, 21, 59, 31 ] |
|| 134|
|| 130 |

## Exemplul Doi
|**Intrare**|**Ieșire**|
| --- | --- |
| addOrSubtract([-5, 11, 3, 0, 2]) | [ 5, 14, 21, 59, 31 ] |
|| 11|
|| 15 |

[/task-description]
[tests]
[test open]
[input]
addOrSubtract([5, 15, 23, 56, 35])
[/input]
[output]
[ 5, 14, 21, 59, 31 ]
134
130
[/output]
[/test]
[test open]
[input]
addOrSubtract([-5, 11, 3, 0, 2])
[/input]
[output]
[ -5, 10, 1, 3, 6 ]
11
15
[/output]
[/test]
[test]
[input]
addOrSubtract([2, 5, -6, 32, 12])
[/input]
[output]
[ 2, 4, -4, 35, 16 ]
45
53
[/output]
[/test]
[test]
[input]
addOrSubtract([8, 32, -112, 21, 37])
[/input]
[output]
[ 8, 33, -110, 18, 33 ]
-14
-18
[/output]
[/test]
[test]
[input]
addOrSubtract([1, -4, 312, 124, -1])
[/input]
[output]
[ 1, -3, 314, 127, -5 ]
432
434
[/output]
[/test]
[test]
[input]
addOrSubtract([6, 15, -6, 16, 77])
[/input]
[output]
[ 6, 14, -4, 19, 73 ]
108
108
[/output]
[/test]
[test]
[input]
addOrSubtract([18, 15, 122, 11, 7])
[/input]
[output]
[ 18, 14, 124, 8, 3 ]
173
167
[/output]
[/test]
[test]
[input]
addOrSubtract([19, 5, 123, 17, 79])
[/input]
[output]
[ 19, 4, 121, 14, 75 ]
243
233
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Array Rotation
[code-task title="Array Rotation"taskId="js-fundamentals-1-Arrays-Array-Rotation" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function arrayRotation(arr, num){
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

Creați un program care primește o **matrice** și **numărul de rotații** pe care trebuie să le efectuați (primul element merge la sfârșit).

- **Primul element** al intrării este **matricea de numere** unde trebuie să efectuați rotațiile
- **Al doilea element** al intrării este **numărul de rotații** pe care trebuie să le efectuați 

## Ieșire

Imprimați elementele matricei rezultate, separațe printr-un singur spațiu.

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| arrayRotation([51, 47, 32, 61, 21], 2) | 32 61 21 51 47 |
| arrayRotation([32, 21, 61, 1], 4) | 32 21 61 1 |
| arrayRotation([2, 4, 15, 31], 5) |4 15 31 2|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
arrayRotation([51, 47, 32, 61, 21], 2)
[/input]
[output]
32 61 21 51 47
[/output]
[/test]
[test open]
[input]
arrayRotation([32, 21, 61, 1], 4)
[/input]
[output]
32 21 61 1
[/output]
[/test]
[test open]
[input]
arrayRotation([2, 4, 15, 31], 5)
[/input]
[output]
4 15 31 2
[/output]
[/test]
[test]
[input]
arrayRotation([1, 47, 32, 61, 91], 1)
[/input]
[output]
47 32 61 91 1
[/output]
[/test]
[test]
[input]
arrayRotation([451, 47, 32, 61, 12], 2)
[/input]
[output]
32 61 12 451 47
[/output]
[/test]
[test]
[input]
arrayRotation([31, 21, 69, 1], 3)
[/input]
[output]
1 31 21 69
[/output]
[/test]
[test]
[input]
arrayRotation([3, 21, 7, 1], 4) 
[/input]
[output]
3 21 7 1
[/output]
[/test]
[test]
[input]
arrayRotation([22, 4, 4, 15], 10)
[/input]
[output]
4 15 22 4
[/output]
[/test]
[test]
[input]
arrayRotation([15], 11)
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
arrayRotation([21, 69, 4], 0)
[/input]
[output]
21 69 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Magic Sum
[code-task title="Magic Sum"taskId="js-fundamentals-1-Arrays-Magic-Sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function magicSum(arr, num){
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

Creați un program care imprimă toate perechile **unice** care sunt într-o **matrice de numere întregi**, a căror **sumă** este **egală** cu un număr dat. 

## Exemplul Unu
|**Intrare**|**Ieșire**|
| --- | --- |
| magicSum([1, 7, 6, 2, 19, 23], 8) | 1 7 |
|| 6 2 |

## Exemplul Doi
|**Intrare**|**Ieșire**|
| --- | --- |
| magicSum([14, 20, 60, 13, 7, 19, 8], 27) | 14 13 |
||20 7 |
||19 8 |

## Exemplul Trei
|**Intrare**|**Ieșire**|
| --- | --- |
| magicSum([1, 2, 3, 4, 5, 6], 6) | 1 5 |
|| 2 4 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
magicSum([1, 7, 6, 2, 19, 23], 8)
[/input]
[output]
1 7
6 2
[/output]
[/test]
[test open]
[input]
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
[/input]
[output]
14 13
20 7
19 8
[/output]
[/test]
[test open]
[input]
magicSum([1, 2, 3, 4, 5, 6], 6)
[/input]
[output]
1 5
2 4
[/output]
[/test]
[test]
[input]
magicSum([1, 5, 3, 7, 7], 14)
[/input]
[output]
7 7
[/output]
[/test]
[test]
[input]
magicSum([14, 67, 43, 7, 19, 8], 15)
[/input]
[output]
7 8
[/output]
[/test]
[test]
[input]
magicSum([43, 1, 23, 43, 45, 5], 6)
[/input]
[output]
1 5
[/output]
[/test]
[test]
[input]
magicSum([6, 5, 3, 4, 3, 3], 7)
[/input]
[output]
3 4
4 3
4 3
[/output]
[/test]
[test]
[input]
magicSum([46, 3, 43], 46)
[/input]
[output]
3 43
[/output]
[/test]
[test]
[input]
magicSum([4, 1, 2, 3], 5)
[/input]
[output]
4 1
2 3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
