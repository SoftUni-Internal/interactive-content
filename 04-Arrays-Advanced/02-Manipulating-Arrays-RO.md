# Manipularea matricelor

[slide]
# Împărțirea Matricei

[vimeo-video]
[stream language="EN" videoId="489374953/4d8a0f208e" default /]
[stream language="RO" videoId="489374953/4d8a0f208e"  /]
[/video-vimeo]

Metoda `array.slice()` returnează elementele selectate într-o matrice, ca un nou obiect al matricei.

Selectează elementele începând de la argumentul dat și se termină, dar nu include, argumentul dat. 

``` js live
let myArray = ['one','two','three','four','five'];
let sliced = myArray.slice(2);

console.log(myArray);
console.log(sliced);

console.log(myArray.slice(2,4));
```
[/slide]

[slide]
# Splice: Tăierea și înserarea elementelor de matrice

[vimeo-video]
[stream language="EN" videoId="489374185/fc61ac9758" default /]
[stream language="RO" videoId="489374185/fc61ac9758"  /]
[/video-vimeo]

`array.splice()` adaugă sau elimină elemente în\/dintr-o matrice și returnează elementele eliminate.

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

[slide]
# Problemă: First and Last K Numbers

[vimeo-video]
[stream language="EN" videoId="489374198/6c535a4be1" default /]
[stream language="RO" videoId="489374198/6c535a4be1"  /]
[/video-vimeo]

[code-task title="First and Last K Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]

Scrieți o funcție care imprimă primele elemente `k` și ultimele `k` ale unui set de numere.

Intrările apar ca o serie de elemente `string`, care conțin numere.

Primul element reprezintă numărul `k`.

Toate celelalte elemente formează matricea care trebuie procesată.

Pe prima linie, tipăriți **primele elemente k** , separate printr-un spațiu.

Pe a doua linie, tipăriți **ultimele elemente k** , separate printr-un spațiu. 

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|`['2', '7', '8', '9']` | 7 8 |
| | 8 9 |

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|`['3', '6', '7', '8', '9']` | 6 7 8 |
| | 7 8 9 |

# Sugestii

- Utilizați `slice ()` pentru a împărți matricea în două părți

[/task-description]
[tests]
[test]
[input]
4
1
2
3
4
5
[/input]
[output]
1 2 3 4
2 3 4 5
[/output]
[/test]
[test]
[input]
1
5
6
7
[/input]
[output]
5
7
[/output]
[/test]
[test]
[input]
2
5
6
7
8
1
2
3
[/input]
[output]
5 6
2 3
[/output]
[/test]
[test]
[input]
7
1
2
3
4
5
6
7
8
[/input]
[output]
1 2 3 4 5 6 7
2 3 4 5 6 7 8
[/output]
[/test]
[test]
[input]
5
11
12
13
14
15
16
17
18
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

[slide]
# Soluție: First and Last K Numbers

[vimeo-video]
[stream language="EN" videoId="489374505/9ba74796f9" default /]
[stream language="RO" videoId="489374505/9ba74796f9"  /]
[/video-vimeo]

[code-task title="First and Last K Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
  let n = arr[0];
    let firstKElements = [];
    let lastKElements = [];

    for (let i = 1; i <= n; i++) {
        firstKElements[i - 1] = arr[i];
    }

    let index = 0;
    for (let i = 0; i < n; i++) {
        lastKElements[index++] = arr[arr.length - 1 - i];
    }
    lastKElements.sort((a, b) => a - b);

    console.log(firstKElements.join(" "));
    console.log(lastKElements.join(" "));
}
```
[/code-editor]
[task-description]

Scrieți o funcție care imprimă primele elemente `k` și ultimele `k` ale unui set de numere.

Intrările apar ca o serie de elemente `string`, care conțin numere.

Primul element reprezintă numărul `k`.

Toate celelalte elemente formează matricea care trebuie procesată.

Pe prima linie, tipăriți **primele elemente k** , separate printr-un spațiu.

Pe a doua linie, tipăriți **ultimele elemente k** , separate printr-un spațiu. 

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|`['2', '7', '8', '9']` | 7 8 |
| | 8 9 |

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|`['3', '6', '7', '8', '9']` | 6 7 8 |
| | 7 8 9 |

# Sugestii

- Utilizați `slice ()` pentru a împărți matricea în două părți


[/task-description]
[tests]
[test]
[input]
4
1
2
3
4
5
[/input]
[output]
1 2 3 4
2 3 4 5
[/output]
[/test]
[test]
[input]
1
5
6
7
[/input]
[output]
5
7
[/output]
[/test]
[test]
[input]
2
5
6
7
8
1
2
3
[/input]
[output]
5 6
2 3
[/output]
[/test]
[test]
[input]
7
1
2
3
4
5
6
7
8
[/input]
[output]
1 2 3 4 5 6 7
2 3 4 5 6 7 8
[/output]
[/test]
[test]
[input]
5
11
12
13
14
15
16
17
18
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

[slide]
# Problemă: Last K Numbers Sequence

[vimeo-video]
[stream language="EN" videoId="489374248/da5b2345e6" default /]
[stream language="RO" videoId="489374248/da5b2345e6"  /]
[/video-vimeo]

[code-task title="Last K Numbers Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]
Vi se dau două numere întregi: n și k. Scrieți o funcție care generează și imprimă următoarea secvență:

- Primul element este `1`.
- Fiecare element următor este egal cu suma elementelor `k` anterioare.
- Lungimea secvenței este un element `n`.

Intrarea vine ca o matrice de două elemente `string`, care conțin numere.

Primul element reprezintă numărul `n`, iar al doilea - numărul ` k`.

Ieșirea este imprimată pe consolă pe o singură linie, separată de spațiu.


## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
|`['6', '3']` | 1 1 2 4 7 13 |
|`['8', '2']` | 1 1 2 3 5 8 13 21 |

# Sugestii

**Al doilea element (1)** este egal cu suma celor 3 elemente din fața sa, dar există un singur element, deci luăm acest lucru.

Al treilea element este egal cu suma primelor două elemente (1 și 1).

Al patrulea element este egal cu suma de 1, 1 și 2.

Al cincilea element este egal cu suma celui de-al 2-lea, al 3-lea și al 4-lea (1, 2 și 4) și așa mai departe

[/task-description]
[tests]
[test]
[input]
3
5
[/input]
[output]
1 1 2
[/output]
[/test]
[test]
[input]
4
2
[/input]
[output]
1 1 2 3
[/output]
[/test]
[test]
[input]
8
2
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
8
4
[/input]
[output]
1 1 2 4 8 15 29 56
[/output]
[/test]
[test]
[input]
10
3
[/input]
[output]
1 1 2 4 7 13 24 44 81 149
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Last K Numbers Sequence

[vimeo-video]
[stream language="EN" videoId="489374563/74c0604242" default /]
[stream language="RO" videoId="489374563/74c0604242"  /]
[/video-vimeo]

[code-task title="Last K Numbers Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
  let n = Number(arr[0]);
  let k = Number(arr[1]);

  let sequence = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let lastThreeEl = sequence.slice(start);

        let sum = 0;
        for (let number of lastThreeEl) {
            sum += number;
        }
        sequence.push(sum);
    }
    console.log(sequence.join(' '));
}
```
[/code-editor]
[task-description]
Vi se dau două numere întregi: n și k. Scrieți o funcție care generează și tipărește următoarea secvență:

- Primul element este `1`.
- Fiecare element următor este egal cu suma elementelor `k` anterioare.
- Lungimea secvenței este element `n`.

Intrarea vine ca o matrice de două elemente `string`, care conțin numere.

Primul element reprezintă numărul `n`, iar al doilea - numărul ` k`.

Ieșirea este imprimată pe consolă pe o singură linie, separată de spațiu.


## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
|`['6', '3']` | 1 1 2 4 7 13 |
|`['8', '2']` | 1 1 2 3 5 8 13 21 |

# Sugestii

**Al doilea element (1)** este egal cu suma celor 3 elemente din fața sa, dar există un singur element, deci luăm acest lucru.

Al treilea element este egal cu suma primelor două elemente (1 și 1).

Al patrulea element este egal cu suma de 1, 1 și 2.

Al cincilea element este egal cu suma celui de-al 2-lea, al 3-lea și al 4-lea (1, 2 și 4) și așa mai departe

[/task-description]
[tests]
[test]
[input]
3
5
[/input]
[output]
1 1 2
[/output]
[/test]
[test]
[input]
4
2
[/input]
[output]
1 1 2 3
[/output]
[/test]
[test]
[input]
8
2
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
8
4
[/input]
[output]
1 1 2 4 8 15 29 56
[/output]
[/test]
[test]
[input]
10
3
[/input]
[output]
1 1 2 4 7 13 24 44 81 149
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]