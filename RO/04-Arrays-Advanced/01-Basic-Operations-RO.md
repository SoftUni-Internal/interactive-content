# Operațiuni de Bază

[slide hideTitle]
# Prezentare Generală

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-3-4-overview-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JavaScript are **funcții încorporate** pentru tratarea matricelor care **pot simplifica codul, ușurează citirea** și, nu în ultimul rând, facilitează depanarea.

Putem folosi funcțiile săgeată în unele dintre metodele avansate.

Funcționalitatea avansată a unei matrice constă din următoarele funcții:

- `push(el)` - adaugă unul sau mai multe elemente la sfârșitul unei matrice și returnează noua lungime a tabloului

- `pop()` - elimină **ultimul** element dintr-o matrice și returnează acel element

- `shift()` - elimină **primul** element dintr-o matrice și returnează acel element

- `unshift(el)` - **adaugă elemente noi la începutul** unei matrice și returnează noua **lungime**

- `includes(el)` - determină dacă o **matrice include un anumit element**, returnează "**true**" sau "**false**"

- `indexOf(el)` - returnează indexul unui element sau returnează -1, dacă nu poate găsi elementul

Practic, aceste metode modifică matricea și nu este nevoie să scriem o grămadă de cod, ceea ce economisește mult timp. 

[/slide]

[slide hideTitle]

# Adăugați la Sfârșit, Eliminați la Sfârșit

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-5-add-at-the-end-remove-from-the-end-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JavaScript are **metode incorporate** pentru a adăuga sau a elimina elemente din sfârșitul și începutul matricei.

- **Adăugarea unui element la sfârșitul matricei**

Metoda `array.push()` este utilizată pentru a adăuga un element nou la sfârșitul matricei.

``` js live
let array = [1, 2, 3, 4];

array.push(5);

console.log(array);
```

- **Eliminarea unui element de la sfârșit**

Metoda `array.pop()` este utilizată pentru a obține și a elimina elementul de la sfârșitul matricei.

Dacă apelăm `array.pop()` pe o matrice goală, se returnează **nedefinit.** 

``` js live
let array = [1, 2, 3, 4, 5];

let number = array.pop();

console.log(array);
console.log(number);
```

[/slide]

[slide hideTitle]
# Adăugați la Început, Eliminați de la Început 


[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-6-add-at-the-start-remove-from-the-start-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Adăugarea unui element la începutul matricei**

Metoda `array.unshift()` este utilizată pentru a adăuga un element nou la începutul unui matrice.

``` js live
let array = [1, 2, 3, 4];

array.unshift(0);

console.log(array);
```
- **Eliminarea unui element de la început**

Metoda `array.shift()` este utilizată pentru a obține și a elimina un element de la începutul matricei.

``` js live
let array = [0,1, 2, 3, 4, 5];

let number = array.shift();

console.log(array);
console.log(number);
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Sum First Last

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-problem-1-solution-sum-first-last-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum First Last" taskId="fundamentals-js-arrays-advanced-lab-Sum-First-Last" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input){
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

Scrieți o funcție care calculează și imprimă suma primelor și ultimelor elemente ale unei matrice.

**Intrările** apar ca o **matrice** de **șiruri**, care conțin **numere**.
**Ieșirile** ar trebui să fie **valoarea returnată de către funcția**

## Exemplus
|**Intrare**|**Ieșire** |
| --- | --- |
|solve(['20', '30', '40']) | 60 |
|solve(['5', '10']) | 15 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
solve(['20', '30', '40'])
[/input]
[output]
60
[/output]
[/test]
[test open]
[input]
solve(['5', '10'])
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
solve(['2', '3', '2', '14', '3'])
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
solve(['2.5', '3.6', '1.1', '3.33'])
[/input]
[output]
5.83
[/output]
[/test]
[test]
[input]
solve(['1000', '2000', '3000', '4000'])
[/input]
[output]
5000
[/output]
[/test]
[test]
[input]
solve(['20', '30', '40'])
[/input]
[output]
60
[/output]
[/test]
[test]
[input]
solve(['5', '10'])
[/input]
[output]
15
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Metoda Push și Pop în Matrice

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-10-pushing-an-array-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.push()` adaugă unul sau mai multe elemente la **sfârșitul** unui tablou și returnează noua **lungime**:

``` js live
let fruits = ['apple','banana','kiwi'];

let newLength = fruits.push('pineapple', 'orange');

console.log(fruits);
console.log(newLength);
```


Metoda `array.pop()` elimină **ultimul** element dintr-o matrice și îi **returnează** valoarea:

``` js live
let animals = ['monkey', 'cat', 'dog'];

let popped = animals.pop();

console.log(animals);
console.log(popped);
```

Apelarea `pop()` pentru o **matrice goală** va returna `undefined`:

``` js live
let emptyArr = [];

let popped = emptyArr.pop();

console.log(popped);
```

[/slide]

[slide hideTitle]
# Schimbarea și Neschimbarea Într-o Matrice

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-11-shifting-and-unshifting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.shift()` elimină primul element al unei matrice:

``` js live
let myArray = ['one', 'two', 'three', 'four', 'five'];

myArray.shift();

console.log(myArray);
```

Metoda `array.unshift()` adaugă elemente la începutul unei matrice:

``` js live
let myArray = ['red', 'green', 'blue'];
myArray.unshift('purple');

console.log(myArray);
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Negative or Positive Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05. JS-Fundamentals-Arrays-Advanced-12--negative-posivite-numbers-Solution-ONLY-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Negative or Positive Numbers" taskId="fundamentals-js-arrays-advanced-lab-Negative-or-Positive-Numbers"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function negativePositive(input){
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

Scrieți o funcție care procesează **toate elementele unei matrice unul câte unul** și **creează o matrice nouă**.

Adăugați fiecare element negativ la început și fiecare element pozitiv (sau 0) la sfârșitul noii matrice.

**Intrarea** apare ca **o matrice de șiruri**, care conțin **numere**.

**Ieșirea** trebuie imprimată pe consolă, fiecare element pe **o nouă linie**

## Examplul Unu
| **Input** | **Output** |
| --- | --- |
|negativePositive(['7', '-2', '8', '9']) | \-2 |
| | 7 |
| | 8 |
| | 9 |

## Exemplul Doi
| **Input** | **Output** |
| --- | --- |
|negativePositive(['3', '-2', '0', '-1'])  | \-1 |
| | \-2 |
| | 3 |
| | 0 |

## Sfaturi

- Utilizați `unshift()` pentru a adăuga un element pe prima poziție

- Folosiți `push()` pentru a adăuga un element pe ultima poziție


[/task-description]
[tests]
[test open]
[input]
negativePositive(['\-2', '8', '7', '99', '100', '11'])
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
[test open]
[input]
negativePositive(['3', '\-2', '0', '\-1'])
[/input]
[output]
\-1
\-2
3
0 
[/output]
[/test]
[test]
[input]
negativePositive(['\-2', '\-11', '7', '8', '100', '\-11', '\-11', '11', '\-2'])
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
negativePositive(['\-2', '\-11', '7', '8', '0', '\-13', '0', '\-25', '0'])
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
negativePositive(['2', '3', '4', '5', '6', '\-7', '\-8'])
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
negativePositive(['\-2', '3', '0', '5', '\-6', '0', '8'])
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

[slide hideTitle]
# Găsiți Valorile
[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-14-find-values-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`array.includes()` returnează in adevarat dacă valoarea dată face parte din matrice.

``` js live
let myArray = ['Peter', 'George', 'Mary'];

let isGeorgeInclude = myArray.includes('George');
let isJohnInclude = myArray.includes('John');

console.log(isGeorgeInclude);
console.log(isJohnInclude);
```

`Array.indexOf()` returnează indexul, unde este stocată valoarea dată.

Returnează \-1 dacă valoarea nu este găsită. 

``` js live
let myArray = ['Peter', 'George', 'Mary'];

let indexOfMary = myArray.indexOf('Mary');
let indexOfNick = myArray.indexOf('Nick');

console.log(indexOfMary);
console.log(indexOfNick);
```
[/slide]
