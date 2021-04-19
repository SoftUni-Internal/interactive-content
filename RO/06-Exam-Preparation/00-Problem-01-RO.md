# Problema 1: Array Modifier

[slide hideTitle]

# Array Modifier

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/06.JS-Fundamentals-ExamPrep-2/Array Modifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Array Modifier" taskId="js-fundamentals-examPreparation-2-Array-Modifier" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function arrayModifier(input) {
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

Prima linie din intrare va fi o matrice de numere întregi.

Scrieți un program pentru a modifica matricea.

Posibilele modificări sunt: "**swap**", "**multiply**" sau "**decrease**".

* "**swap** \{**index1**\} \{**index2**\}": luați cele două elemente și schimbați-le locurile.

* "**multiply** \{**index1**\} \{**index2**\}": luați numărul de la primul indice specificat și multiplicați-l cu numărul de la al doilea indice

Salvați produsul celor două numere pe poziția indicelui care a corespuns primului număr.

* "**decrease**": micșorează toate elementele din matrice cu 1

## Intrare
Pe prima linie de intrare vi se vor da valorile matricei inițiale, separate printr-un singur spațiu.

Pe rândurile următoare veți primi una dintre comenzi. Programul trebuie să se oprească din a funcționa atunci când este primită comanda "end".

Comenzile pot fi:

* "**swap** \{**index1**\} \{**index2**\}"

* "**multiply** \{**index1**\} \{**index2**\}"

* "**decrease**"

## Ieșire

Forma finală a matricei trebuie tipărită pe consolă, fiecare dintre elementele sale fiind separate printr-o virgulă și un spațiu (", ").

## Constrângeri

* Comenzile sunt limitate la: "**swap**", "**multiply**", "**decrease**" și "**end**"

* Toate elementele matricei vor fi numere întregi în intervalul \[-231...231\]

* Numărul de elemente din matrice va fi în intervalul \[2...100\]

* Indicii vor fi întotdeauna în intervalul matricei

## Exemplul Unu

|**Intrare**|**Ieșire** |
| --- | --- |
|arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end'])| 86, 7382, 2369942, -124, 41, 89, -3|


[hints]
[hint]
Starea inițială a matricei este: `23 -2 321 87 42 90 -123`

* "**swap 1(-2)" and "3(87)**":

Starea matricei după prima comandă: `23 87 321 -2 42 90 -123`
[/hint] 
[hint]
* "**swap 3(-2)" and "6(-123)**":

Starea matricei după a doua comandă: `23 87 321 -123 42 90 -2`
[/hint] 
[hint]
* "**swap 1(87)" and "0(23)**":

Starea matricei după a treia comandă: `87 23 321 -123 42 90 -2`
[/hint] 
[hint]
* "**multiply 1(23) 2(321) = 7383**":

Starea matricei după a patra comandă: `87 7383 321 -123 42 290 -2`
[/hint] 
[hint]
* "**multiply 2(321) 1(7383) = 2369943**":

Starea matricei după a cincea comandă: `87 7383 2369943 -123 42 90 -2`
[/hint] 
[hint]
* "**decrease**":

Starea matricei după a șasea comandă: `86 7383 2369942 -124 41 89 -3`
[/hint] 
[/hints] 

## Exemplul Doi
**Intrare**|**Ieșire** |
| --- | --- |
|arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end'])| 1, 11, 3, 0|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3','swap 3 6','swap 1 0','multiply 1 2','multiply 2 1','decrease','end'])
[/input]
[output]
86, 7382, 2369942, -124, 41, 89, -3
[/output]
[/test]
[test open]
[input]
arrayModifier(['1 2 3 4','swap 0 1','swap 1 2','swap 2 3','multiply 1 2','decrease','end'])
[/input]
[output]
1, 11, 3, 0
[/output]
[/test]
[test]
[input]
arrayModifier(['213 312 5434 12456 123154 12 0', 'swap 0 1', 'swap 0 2', 'swap 0 3', 'multiply 1 2', 'decrease', 'multiply 0 6', 'end'])
[/input]
[output]
-12455, 66455, 311, 5433, 123153, 11, -1
[/output]
[/test]
[test]
[input]
arrayModifier(['20000000 5 5 5 5 5 5', 'multiply 0 1', 'end'])
[/input]
[output]
100000000, 5, 5, 5, 5, 5, 5
[/output]
[/test]
[test]
[input]
arrayModifier(['1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88', 'swap 1 23', 'swap 1 24', 'swap 21 24', 'swap 21 60', 'swap 71 60', 'swap 0 1', 'swap 12 43', 'multiply 60 61', 'multiply 60 61', 'multiply 60 61', 'end'])
[/input]
[output]
25, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 44, 14, 15, 16, 17, 18, 19, 20, 21, 61, 23, 2, 22, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 13, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 17159616, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 24, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88
[/output]
[/test]
[test]
[input]
arrayModifier(['0 0 0 0 0 0 0 0 0', 'decrease', 'decrease', 'decrease', 'decrease', 'decrease', 'decrease', 'decrease', 'multiply 1 5', 'multiply 5 6', 'swap 1 6', 'end'])
[/input]
[output]
-7, -7, -7, -7, -7, 49, 49, -7, -7
[/output]
[/test]
[test]
[input]
arrayModifier(['100 1 -120 23 432 29 43 14 83 328 392 328 121 676', 'multiply 0 13', 'multiply 1 12', 'multiply 2 11', 'multiply 3 10', 'multiply 4 9', 'multiply 5 8', 'multiply 6 7', 'multiply 7 6', 'multiply 8 5', 'multiply 9 4', 'multiply 10 3', 'multiply 11 2', 'multiply 12 1', 'multiply 13 0', 'end'])
[/input]
[output]
67600, 121, -39360, 9016, 141696, 2407, 602, 8428, 199781, 46476288, 3534272, -12910080, 14641, 45697600
[/output]
[/test]
[test]
[input]
arrayModifier(['100 1 -120 23 432 29 43 14 83 328 392 328 121 676', 'swap 0 13', 'swap 1 12', 'swap 2 11', 'swap 3 10', 'swap 4 9', 'swap 5 8', 'swap 6 7', 'swap 7 6', 'swap 8 5', 'swap 9 4', 'swap 10 3', 'swap 11 2', 'swap 12 1', 'swap 13 0', 'end'])
[/input]
[output]
100, 1, -120, 23, 432, 29, 43, 14, 83, 328, 392, 328, 121, 676
[/output]
[/test]
[test]
[input]
arrayModifier(['-1 123 123 123 123 123 123 -123', 'multiply 6 7', 'multiply 6 7', 'multiply 6 0', 'end'])
[/input]
[output]
-1, 123, 123, 123, 123, 123, -1860867, -123
[/output]
[/test]
[test]
[input]
arrayModifier(['42 42', 'multiply 0 1', 'decrease', 'swap 0 1', 'end'])
[/input]
[output]
41, 1763
[/output]
[/test]
[test]
[input]
arrayModifier(['-1 0 -1', 'swap 0 1', 'multiply 0 1', 'multiply 2 1', 'end'])
[/input]
[output]
0, -1, 1
[/output]
[/test]
[test]
[input]
arrayModifier(['1 2 3 4 5 6 7 8 9 10', 'swap 0 1', 'swap 1 2', 'swap 1 2', 'swap 2 3', 'swap 3 4', 'swap 4 5', 'swap 5 6', 'swap 6 7', 'swap 7 8', 'swap 8 9', 'swap 7 8', 'swap 6 7', 'swap 5 6', 'swap 4 5', 'swap 3 4', 'swap 2 3', 'swap 1 2', 'swap 0 1', 'swap 0 1', 'swap 1 2', 'swap 1 2', 'swap 2 3', 'swap 3 4', 'swap 4 5', 'swap 5 6', 'swap 6 7', 'swap 0 1', 'swap 1 2', 'swap 1 2', 'swap 2 3', 'swap 3 4', 'swap 4 5', 'swap 5 6', 'swap 6 7', 'swap 4 5', 'swap 3 4', 'swap 2 3', 'swap 1 2', 'swap 0 1', 'swap 0 1', 'swap 1 2', 'swap 1 2', 'swap 4 5', 'swap 3 4', 'swap 2 3', 'swap 1 2', 'swap 0 1', 'swap 0 1', 'swap 1 2', 'swap 1 2', 'end'])
[/input]
[output]
10, 7, 8, 2, 5, 6, 1, 4, 9, 3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
