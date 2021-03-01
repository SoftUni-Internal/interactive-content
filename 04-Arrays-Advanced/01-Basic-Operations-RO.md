# Operațiuni de bază

[slide]
# Prezentare generală

[vimeo-video]
[stream language="EN" videoId="489374674/6cf27fdbe0" default /]
[stream language="RO" videoId="489374674/6cf27fdbe0"  /]
[/video-vimeo]

JavaScript are **funcții încorporate** pentru tratarea matricelor care **pot simplifica codul, ușurează citirea** și, nu în ultimul rând, facilitează depanarea.

Putem folosi funcțiile săgeată în unele dintre metodele avansate.

Funcționalitatea avansată a unei matrice constă din următoarele funcții:

- `push(el)` - adaugă unul sau mai multe elemente la sfârșitul unei matrice și returnează noua lungime a tabloului

- `pop()` - elimină **ultimul** element dintr-o matrice și returnează acel element

- `shift()` - elimină **primul** element dintr-o matrice și returnează acel element

- `unshift(el)` - **adaugă elemente noi la începutul** unei matrice și returnează noua **lungime**

- `includes(el)` - determină dacă o **matrice include un anumit element**, returnează `true` sau `false`

- `indexOf(el)` - returnează indexul unui element sau returnează -1, dacă nu poate găsi elementul

Practic, aceste metode modifică matricea și nu este nevoie să scriem o grămadă de cod, ceea ce economisește mult timp. 

[/slide]

[slide]
# Adăugați și eliminați funcțiile

[vimeo-video]
[stream language="EN" videoId="489374677/3350dbaf69" default /]
[stream language="RO" videoId="489374677/3350dbaf69"  /]
[/video-vimeo]

Adăugați la sfârșit, eliminați la sfârșit.

Metoda `array.push()` este utilizată pentru a adăuga un element nou la sfârșitul matricei.

``` js live
let array = [1, 2, 3, 4];

array.push(5);

console.log(array);
```

Metoda `array.pop()` este utilizată pentru a obține și a elimina elementul de la sfârșitul matricei.

Dacă apelăm `array.pop() `pe o matrice goală, se returnează **nedefinit.** 

``` js live
let array = [1, 2, 3, 4, 5];

let number = array.pop();

console.log(array);
console.log(number);
```

[/slide]

[slide]
# Adăugați la început, eliminați de la început 

[vimeo-video]
[stream language="EN" videoId="489374731/d3be54a729" default /]
[stream language="RO" videoId="489374731/d3be54a729"  /]
[/video-vimeo]

Metoda `array.unshift()` este utilizată pentru a adăuga un element nou la începutul unui matrice.

``` js live
let array = [1, 2, 3, 4];

array.unshift(0);

console.log(array);
```

Metoda `array.shift()` este utilizată pentru a obține și a elimina un element de la începutul matricei.

``` js live
let array = [0,1, 2, 3, 4, 5];

let number = array.shift();

console.log(array);
console.log(number);
```
[/slide]

[slide]
# Problemă: Sum First Last

[vimeo-video]
[stream language="EN" videoId="489374765/676b788b0c" default /]
[stream language="RO" videoId="489374765/676b788b0c"  /]
[/video-vimeo]

[code-task title="Sum First Last" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumFirstLast(input){
  // Write your code here
}
```
[/code-editor]
[task-description]

Scrieți o funcție care calculează și imprimă suma primelor și ultimelor elemente ale unei matrice.
Intrările apar ca o serie de elemente `string`, care conțin numere.

Ieșirile ar trebui să fie valoarea, care este returnată din funcție.

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|`['20', '30', '40']` | 60 |
|`['5', '10']` | 15 |

[/task-description]
[tests]
[test]
[input]
2
3
2
14
3
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
2.5
3.6
1.1
3.33
[/input]
[output]
5.83
[/output]
[/test]
[test]
[input]
1000
2000
3000
4000
[/input]
[output]
5000
[/output]
[/test]
[test]
[input]
20
30
40
[/input]
[output]
60
[/output]
[/test]
[test]
[input]
5
10
[/input]
[output]
15
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problemă: Sum First Last

[vimeo-video]
[stream language="EN" videoId="489374493/acd64c96be" default /]
[stream language="RO" videoId="489374493/acd64c96be"  /]
[/video-vimeo]

[code-task title="Sum First Last" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumFirstLast(input){
  let firstNum = Number(input.pop());
  let lastNum = Number(input.shift());

  let result = firstNum + lastNum;
  console.log(result);
}
```
[/code-editor]
[task-description]
Scrieți o funcție care calculează și imprimă suma primelor și ultimelor elemente ale unei matrice.
Intrările apar ca o serie de elemente `string`, care conțin numere.

Ieșirile ar trebui să fie valoarea, care este returnată din funcție.

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|`['20', '30', '40']` | 60 |
|`['5', '10']` | 15 |

[/task-description]
[tests]
[test]
[input]
2
3
2
14
3
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
2.5
3.6
1.1
3.33
[/input]
[output]
5.83
[/output]
[/test]
[test]
[input]
1000
2000
3000
4000
[/input]
[output]
5000
[/output]
[/test]
[test]
[input]
20
30
40
[/input]
[output]
60
[/output]
[/test]
[test]
[input]
5
10
[/input]
[output]
15
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Pushing Into an Array

[vimeo-video]
[stream language="EN" videoId="489374828/cbd47a4e46" default /]
[stream language="RO" videoId="489374828/cbd47a4e46"  /]
[/video-vimeo]

Metoda `array.push()` adaugă unul sau mai multe elemente la sfârșitul unui tablou și returnează noua lungime:

``` js live
let fruits = ['apple','banana','kiwi'];

fruits.push('pineapple', 'orange');

console.log(fruits);
```
[/slide]

[slide]
# Schimbarea și Neschimbarea într-o Matrice

[vimeo-video]
[stream language="EN" videoId="489374831/7be466e53c" default /]
[stream language="RO" videoId="489374831/7be466e53c"  /]
[/video-vimeo]

Metoda `array.shift()` elimină primul element al unei matrice:

``` js live
let myArray = ["one","two","three","four","five"];

myArray.shift();

console.log(myArray);
```

Metoda `array.unshift()` adaugă elemente la începutul unei matrice:

``` js live
let myArray = ["red","green","blue"];
myArray.unshift("purple");

console.log(myArray);
```
[/slide]

[slide]
# Problemă: Negative or Positive Numbers

[vimeo-video]
[stream language="EN" videoId="491173934/f975ab3bb3" default /]
[stream language="RO" videoId="491173934/f975ab3bb3"  /]
[/video-vimeo]

[code-task title="Negative or Positive Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function negativePositive(arr){
  // Write your code here
}

```
[/code-editor]
[task-description]

Scrieți o funcție care procesează toate elementele unei matrice unul câte unul și creează o matrice nouă.

Adăugați fiecare element negativ la început și fiecare element pozitiv (sau 0) la sfârșitul noii matrice.

Intrările apar ca o serie de elemente de șir, care conțin numere.

Ieșirea trebuie imprimată pe consolă, fiecare element pe o nouă linie

## Examples
| **Input** | **Output** |
| --- | --- |
|`['7', '-2', '8', '9']` | \-2 |
| | 7 |
| | 8 |
| | 9 |

| **Input** | **Output** |
| --- | --- |
|`['3', '-2', '0', '-1']`  | \-1 |
| | \-2 |
| | 3 |
| | 0 |

## Sugestii

- Utilizați `unshift()` pentru a adăuga un element pe  prima poziție

- Folosiți `push()` pentru a adăuga un element pe ultima poziție


[/task-description]
[tests]
[test]
[input]
\-2
8
7
99
100
11
[/input]
[output]
\-2
8
7
99
100
11
[/output]
[/test]
[test]
[input]
\-2
\-11
7
8
100
\-11
\-11
11
\-2
[/input]
[output]
\-2
\-11
\-11
\-11
\-2
7
8
100
11
[/output]
[/test]
[test]
[input]
\-2
\-11
7
8
0
\-13
0
\-25
0
[/input]
[output]
\-25
\-13
\-11
\-2
7
8
0
0
0
[/output]
[/test]
[test]
[input]
2
3
4
5
6
\-7
\-8
[/input]
[output]
\-8
\-7
2
3
4
5
6
[/output]
[/test]
[test]
[input]
\-2
3
0
5
\-6
0
8
[/input]
[output]
\-6
\-2
3
0
5
0
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Soluție: Negative or Positive Numbers

[vimeo-video]
[stream language="EN" videoId="491173994/fc9de18c5b" default /]
[stream language="RO" videoId="491173994/fc9de18c5b"  /]
[/video-vimeo]



[code-task title="Negative or Positive Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function negativePositive(arr){
  let resultArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            resultArr.unshift(arr[i]);
        } else {
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join('\r\n'));
}

```
[/code-editor]
[task-description]
Scrieți o funcție care procesează toate elementele unei matrice unul câte unul și creează o matrice nouă.

Adăugați fiecare element negativ la început și fiecare element pozitiv (sau 0) la sfârșitul noii matrice.

Intrările apar ca o serie de elemente `string`, care conțin numere.

Ieșirea trebuie imprimată pe consolă, fiecare element pe o nouă linie. 


## Examples
| **Input** | **Output** |
| --- | --- |
|`['7', '-2', '8', '9']` | \-2 |
| | 7 |
| | 8 |
| | 9 |

| **Input** | **Output** |
| --- | --- |
|`['3', '-2', '0', '-1']`  | \-1 |
| | \-2 |
| | 3 |
| | 0 |

## Sugestii

- Utilizați `unshift()` pentru a adăuga un element pe prima poziție

- Folosiți `push()` pentru a adăuga un element pe ultima poziție


[/task-description]
[tests]
[test]
[input]
\-2
8
7
99
100
11
[/input]
[output]
\-2
8
7
99
100
11
[/output]
[/test]
[test]
[input]
\-2
\-11
7
8
100
\-11
\-11
11
\-2
[/input]
[output]
\-2
\-11
\-11
\-11
\-2
7
8
100
11
[/output]
[/test]
[test]
[input]
\-2
\-11
7
8
0
\-13
0
\-25
0
[/input]
[output]
\-25
\-13
\-11
\-2
7
8
0
0
0
[/output]
[/test]
[test]
[input]
2
3
4
5
6
\-7
\-8
[/input]
[output]
\-8
\-7
2
3
4
5
6
[/output]
[/test]
[test]
[input]
\-2
3
0
5
\-6
0
8
[/input]
[output]
\-6
\-2
3
0
5
0
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Găsiți valorile

[vimeo-video]
[stream language="EN" videoId="489374946/5dbb522344" default /]
[stream language="RO" videoId="489374946/5dbb522344"  /]
[/video-vimeo]

`array.includes()` returnează in adevarat dacă valoarea dată face parte din matrice.

``` js live
let myArray = ['Peter','George','Mary'];

let isGeorgeInclude = myArray.includes('George');
let isJohnInclude =myArray.includes('John');

console.log(isGeorgeInclude);
console.log(isJohnInclude);
```

`Array.indexOf()` returnează indexul, unde este stocată valoarea dată.

Returnează `-1` dacă valoarea nu este găsită. 

``` js live
let myArray = ['Peter','George','Mary'];

let indexOfMary = myArray.indexOf('Mary');
let indexOfNick = myArray.indexOf('Nick');

console.log(indexOfMary);
console.log(indexOfNick);
```
[/slide]