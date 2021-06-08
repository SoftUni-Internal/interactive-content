
# Matrice imbricate

[slide hideTitle]

# Matrice imbricate în JavaScript

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-38-39-Nested-Arrays-in-JS-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Matricele pe care le-am folosit până acum au avut doar **o singură coloană** de date.

Dar putem configura o matrice pentru a conține mai multe coloane, numită **matrice multidimensională**.

De exemplu, gândiți-vă la o **foaie de calcul** cu rânduri și coloane.

Dacă aveți 6 rânduri și 5 coloane, atunci **foaia dvs. de calcul** poate conține 30 de numere, ceea ce este un exemplu clasic de **matrice**.

Ar putea arăta astfel:

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-1.png" /]

Există, de asemenea, un alt tip de **tablouri multi-dimensionale**, numite **matrice zimțate**, în care fiecare rând are un număr **diferit** de elemente:

[image assetsSrc="java-js-adv-arrays-03.png" /]

În acest exemplu, există o matrice de patru matrice (**matrice zimțată**) și fiecare rând are un număr diferit de elemente.

Reprezentarea JavaScript a acestui exemplu este:

```js live
let arr = [
    [4, 6, 3, 0],
    [2, 1, -2],
    [-5, 17],
    [7, 3, 9, 12]
];


console.log(arr[2][0])
```

[/slide]

[slide hideTitle]

# Buclarea printr-o matrice imbricată

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-40-Looping-through-a-nested-array-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem imprima elemente de matrice imbricate cu mai multe bucle.

Aruncați o privire la următorul exemplu:

```js live
let arr = [[4, 5, 6],
           [6, 5, 4],
           [5, 5, 5]];

arr.forEach(printRow);

function printRow(row){
    console.log(row);
    row.forEach(el => console.log(el));
}
```

**Matricea** este tipărită folosind o buclă **forEach**, unde un argument (rândul curent) este transmis unei funcții.

În acea funcție, un alt **forEach** este **folosit** pentru a itera prin fiecare **element** din **rând** și pentru a-l imprima pe **consolă**.

[/slide]

[slide hideTitle]

# Problemă cu soluțue: Diagonal Sums

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-41-Problem-Diagonal-Sums-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Diagonal Sums" taskId="java-path-js-advanced-arrays-Diagonal-Sums" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function diagonalSums(input){
  // Scrieți codul aici
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

Scrieți o funcție care găsește suma celor două diagonale într-o matrice pătrată.

**Intrarea** vine ca **matrice de matrice**, care conține elemente numerice (matrice 2D de numere).

**Ieșirea** este tipărită pe consolă pe o singură linie, separată de spațiu.

Mai întâi, tipăriți suma diagonalei principale, apoi suma diagonalei secundare.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|diagonalSums([ [ 20, 40 ], [ 10, 60 ] ]) | 80 50  |
|diagonalSums([ [ 3, 5, 17 ], [ -1, 7, 14 ], [ 1, -8, 89 ] ]) | 99 25   |

[/task-description]
[code-io /]
[tests]
[test]
[input]
diagonalSums([ [ 6, 45 ], [ 1, 17 ] ])
[/input]
[output]
23 46
[/output]
[/test]
[test]
[input]
diagonalSums([ [10] ])
[/input]
[output]
10 10
[/output]
[/test]
[test]
[input]
diagonalSums([ [ 54, 123, 130, 63 ], [ 51, 181, 112, 35 ], [ 47, 35, 110, 77 ], [ 14, 106, 156, 117 ] ])
[/input]
[output]
462 224
[/output]
[/test]
[test]
[input]
diagonalSums([ [ -8, 13 ], [ 22, 8 ] ])
[/input]
[output]
0 35
[/output]
[/test]
[test open]
[input]
diagonalSums([ [ 20, 40 ], [ 10, 60 ] ])
[/input]
[output]
80 50
[/output]
[/test]
[test open]
[input]
diagonalSums([ [ 3, 5, 17 ], [ -1, 7, 14 ], [ 1, -8, 89 ] ])
[/input]
[output]
99 25
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
