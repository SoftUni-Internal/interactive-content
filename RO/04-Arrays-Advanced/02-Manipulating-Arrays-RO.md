# Manipularea Matricelor

[slide hideTitle]
# Împărțirea Matricei
[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-15-16-slicing-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.slice()` returnează elementele selectate într-o matrice, ca un nou obiect al matricei.

Selectează elementele începând de la argumentul dat și se termină, dar nu include, argumentul dat. 

``` js live
let myArray = ['one', 'two', 'three', 'four', 'five'];
let sliced = myArray.slice(2);

console.log(myArray);
console.log(sliced);

console.log(myArray.slice(2,4));
```
[/slide]

[slide hideTitle]
# Splice: Tăierea și Înserarea Elementelor de Matrice

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-17-cutting-and-inserting-elements-with-splice-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`array.splice()` adaugă sau elimină elemente în/dintr-o matrice și returnează elementele eliminate.

Această metodă **schimbă matricea originală.**

``` js live
let nums = [5, 10, 15, 20, 25, 30];

let mid = nums.splice(2, 3);

console.log(mid.join('|'));
console.log(nums.join('|'));

nums.splice(3, 2, 'twenty', 'twenty-five');
console.log(nums.join('|'));
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: First and Last K Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-problem-03-solution-first-and-last-k-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="First and Last K Numbers" taskId="fundamentals-js-arrays-advanced-lab-First-and-Last-K-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
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

Scrieți o funcție care imprimă primele elemente **k** și ultimele **k** ale unui set de numere.

**Intrare** apare ca o **matrice** de numere întregi.

**Primul element** reprezintă numărul **k**.

Toate **celelalte elemente** formează **matricea care trebuie procesată**.

Pe **prima linie**, tipăriți **primele elemente k** , separate printr-un **spațiu**.

Pe **a doua linie**, tipăriți **ultimele elemente k** , separate printr-un **spațiu**. 

## Examplul Unu
|**Intrare**|**Ieșire** |
| --- | --- |
|numbers([2, 7, 8, 9]) | 7 8 |
| | 8 9 |

## Examplul Doi
|**Intrare**|**Ieșire** |
| --- | --- |
|numbers([3, 6, 7, 8, 9]) | 6 7 8 |
| | 7 8 9 |

[hints]
[hint]
Utilizați `slice ()` pentru a **împărți** matricea în **două părți**.
[/hint] 
[/hints] 

[/task-description]
[tests]
[test open]
[input]
numbers([2, 7, 8, 9])
[/input]
[output]
7 8
8 9
[/output]
[/test]
[test open]
[input]
numbers([3, 6, 7, 8, 9]) 
[/input]
[output]
6 7 8
7 8 9
[/output]
[/test]
[test]
[input]
numbers([4, 1, 2, 3, 4, 5])
[/input]
[output]
1 2 3 4
2 3 4 5
[/output]
[/test]
[test]
[input]
numbers([1, 5, 6, 7])
[/input]
[output]
5
7
[/output]
[/test]
[test]
[input]
numbers([2, 5, 6, 7, 8, 1, 2, 3])
[/input]
[output]
5 6
2 3
[/output]
[/test]
[test]
[input]
numbers([7, 1, 2, 3, 4, 5, 6, 7, 8])
[/input]
[output]
1 2 3 4 5 6 7
2 3 4 5 6 7 8
[/output]
[/test]
[test]
[input]
numbers([5, 11, 12, 13, 14, 15, 16, 17, 18])
[/input]
[output]
11 12 13 14 15
14 15 16 17 18
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu soluție: Last K Numbers Sequence

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-problem-04-solution-sum-last-k-numbers-sequence-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Last K Numbers Sequence" taskId="fundamentals-js-arrays-advanced-lab-Last-K-Numbers-Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(n, k){
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
Vi se dau două numere întregi: **n** și **k**.

Scrieți o funcție care generează și imprimă următoarea secvență:

- **Primul element** este 1
- Fiecare **element următor** este **egal cu suma** elementelor **k** anterioare
- Lungimea secvenței este un element **n**

**Intrarea** vine ca o matrice de două **numere**.

**Primul element** reprezintă numărul **n**, iar al doilea - numărul **k**.

Ieșirea este **imprimată** pe consolă pe **o singură linie**, separată de **un spațiu**.


## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
|numbers(6, 3)| 1 1 2 4 7 13 |
|numbers(8, 2) | 1 1 2 3 5 8 13 21 |

[hints]
[hint]
`numbers(6, 3)` -\> "**1 1 2 4 7 13**"

**Al doilea element (1)** este **egal cu suma** celor **3 elemente din fața sa**, dar există un **singur** element, deci luăm acest lucru.
[/hint] 
[hint]
Al **treilea element** este egal cu suma **primelor două elemente (1 și 1)**.
[/hint] 
[hint]
Al **patrulea element** este egal cu suma de **1**, **1** și **2**.
[/hint] 
[hint]
Al **cincilea element** este egal cu suma celui de-al **2-lea, al 3-lea și al 4-lea (1, 2 și 4)** și așa mai departe.
[/hint] 
[/hints] 

[/task-description]
[tests]
[test open]
[input]
numbers(6, 3)
[/input]
[output]
1 1 2 4 7 13
[/output]
[/test]
[test open]
[input]
numbers(8, 2)
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
numbers(3, 5)
[/input]
[output]
1 1 2
[/output]
[/test]
[test]
[input]
numbers(4, 2)
[/input]
[output]
1 1 2 3
[/output]
[/test]
[test]
[input]
numbers(8, 2)
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
numbers(8, 4)
[/input]
[output]
1 1 2 4 8 15 29 56
[/output]
[/test]
[test]
[input]
numbers(10, 3)
[/input]
[output]
1 1 2 4 7 13 24 44 81 149
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
