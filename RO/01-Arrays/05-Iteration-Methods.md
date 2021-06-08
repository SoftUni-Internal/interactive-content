# Metode de iterație

[slide hideTitle]
# ForEach

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-28-29-Iteration-Methods-For-each-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.forEach()` **execută** o funcție furnizată **o dată** pentru fiecare element de matrice.

Este similar cu metoda `Stream.forEach()` din Java.

Iată un exemplu:

```js live
const names = ['Peter', 'George', 'Arnold'];
const copy = [];

names.forEach(name => { copy.push(name); });

console.log(copy);
```

În acest exemplu, `.forEach()` este utilizat cu un **apel invers**, care **acceptă** un parametru - **elementul curent** din matrice.

Funcția de apel invers poate primi **două argumente**:

- Primul argument: elementul **curent** al matricei
- Al doilea argument: **indicele**

În exemplul următor, funcția de apel invers are ambii parametri:

```js live
const names = ['Peter', 'George', 'Arnold'];

names.forEach((name, index) => console.log(`${index} -> ${name}`));

```

Metoda `.forEach()` nu poate fi oprită cu `break`.

Odată executat, **va trece prin întreaga matrice** și, dacă este foarte mare, poate presupune probleme de **performanță**.

[/slide]

[slide hideTitle]
# Some

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-32-Some-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.some()` verifică dacă cel puțin **un element din matrice** îndeplinește **cerințele** stabilite de funcția **dată** (**predicat**) și returnează o valoare booleană .

Este similar cu metoda `Stream.anyMatch()` din Java.

Acesta este modul de utilizare a acestei metode:

```js live
let array = [1, 2, 3, 4, 5];

let isEven = el => {
  // verifică dacă un element este par
  return el % 2 === 0;
};

console.log(array.some(isEven)); 
```
[/slide]

[slide hideTitle]
# Find

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-31-Find-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`array.find()` returnează **primul element** din matricea care **îndeplinește** condiția furnizată sau nedefinit dacă nu există.

Iată un exemplu:

```js live
let numbers = [5, 12, 8, 130, 44];

let found = numbers.find(el => {
  return el > 10;
});

console.log(found); 
```
[/slide]

[slide hideTitle]
# Filter

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-30-Filter-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.filter()` returnează o nouă matrice numai cu elemente, care **satisfac** o condiție dată fără **schimbarea** originalului.

Este similar cu metoda `Stream.filter()` din Java.

```js live
let numbers = [5, 12, 8, 130, 44, 3, 17];

let filterNumbers = numbers.filter(el =>  el % 2 == 0);

console.log(filterNumbers); 

```
[/slide]

[slide hideTitle]
# Map

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-33-Map-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.map()` creează o **matrice nouă** cu **rezultatele** apelării unei funcții furnizate pe **fiecare element** din matricea apelantă.

Este similar cu metoda `Stream.map()` din Java.

```js live
let numbersAsStrings = ['1', '2', '3'];

// transformarea tuturor numbersAsStrings la numere
let numbers = numbersAsStrings.map(x => Number(x));
console.log(numbers);

```

De asemenea, puteți, de asemenea, să **înlănțuiți** metode precum aceasta:

```js live
let numbersAsStrings = ['1', '2', '3'];

// transformarea tuturor numbersAsStrings la numere
let numbers = numbersAsStrings
                     .map(x => Number(x))
                     .map(x => x + 1); // adaugă câte 1 la fiecare număr
console.log(numbers);

```

Puteți citi mai multe despre funcția "map" în matematică aici [here](https://en.wikipedia.org/wiki/Map_(mathematics)).
[/slide]

[slide hideTitle]
# Problemă cu soluțue: Process Odd Numbers

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-37-Problem-Process-Odd-Numbers-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Process Odd Numbers" taskId="java-path-js-advanced-arrays-Process-Odd-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function processOddNumbers(input){
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

Vi se oferă o matrice de numere.

Scrieți o funcție JS care imprimă elementele în poziții impare, dublate și în ordine inversă.

**Intrarea** vine ca o **matrice de elemente numerice**.

**Ieșirea** este tipărită pe consolă pe o singură linie, separată de spațiu.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|processOddNumbers([ 10, 15, 20, 25 ]) | 50 30  |
|processOddNumbers([ 3, 0, 10, 4, 7, 3 ]) | 6 8 0  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
processOddNumbers([ 100, 20, -2, -3, 400, 2000, 5 ])
[/input]
[output]
4000 -6 40
[/output]
[/test]
[test]
[input]
processOddNumbers([ 3.40, 2.55, 9.55, 8.12, 12.73, -3.2, -5.4, 13.44, 0, 0, 1.5 ])
[/input]
[output]
0 26.88 -6.4 16.24 5.1
[/output]
[/test]
[test open]
[input]
processOddNumbers([ 10, 15, 20, 25 ])
[/input]
[output]
50 30
[/output]
[/test]
[test open]
[input]
processOddNumbers([ 3, 0, 10, 4, 7, 3 ])
[/input]
[output]
6 8 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Reduce

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-34-35-36-Reduce-method-Reducer-Function-and-Examples-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.reduce()` **execută** o funcție de reducere pe **fiecare element** al tabloului, rezultând o **valoare unică de ieșire**.

[image assetsSrc="java-js-adv-arrays-02.png" /]

Funcția reductor are patru parametri:
- Acumulatorul
- Valoarea curentă
- Indicele curent (opțional)
- Matricea sursă (opțional)

Valoarea **returnată** a funcției reductor este **atribuită** **valorii** acumulatorului, care este valoarea finală **rezultată**.

Această metodă este similară cu `Stream.reduce()` din Java.

## Exemplul Unu

Metoda `reduce()` are doi parametri:
- Funcția reductor: care este creată în afara metodei `reduce()` 
- Valoare inițială: în acest caz, este 0

```js live
let numbers = [7, 6, 1, 5, 2, 13];

const sumReducer = (acc, c) => acc + c;
let result = numbers.reduce(sumReducer, 0);

console.log(result);
```
Ca rezultat, primim **suma** tuturor numerelor din matrice.

## Exemplul Doi

Putem folosi metoda `.reduce()` pentru a calcula **valoarea medie** a numerelor dintr-o matrice.

În acest exemplu, funcția reductor are **patru** parametri:
- Acumulator: unde va fi stocată valoarea
- Număr curent (c)
- Index (i) - nu este **folosit în acest exemplu**, este declarat deoarece trebuie să folosim al patrulea parametru
- Matrice (arr)

```js live
let numbers = [7, 6, 1, 5, 2, 13];

let avarege = numbers.reduce((acc, c, i, arr) => acc + c /arr.length, 0);

console.log(avarege);
```
## Exemplul Trei
În acest exemplu, funcția `Math.max()` este utilizată pentru a găsi cel mai mare număr din matrice.

```js live
let numbers = [7, 6, 1, 5, 2, 13];

let max = numbers.reduce((acc, c) => Math.max(acc, c));

console.log(max);
```
"acc" este **cel mai mare** număr de până acum, iar "c" este numărul **actual**.

Folosind `Math.max()` "acc" este **comparat** cu "c" iar **rezultatul** este din nou **stocat** în "acc". 

Funcția va fi **executată** până când nu vor mai exista **elemente** în matrice.

Puteți citi mai multe despre metoda `.reduce()` aici [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

Acestea nu au fost **toate metodele** care pot fi executate pe matrice, pentru mai multe informații puteți citi documentația [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
[/slide]


