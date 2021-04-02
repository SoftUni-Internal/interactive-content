# Definiție

[slide hideTitle]
# Ce Sunt Matricele?

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-3-4-What-are-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Știți deja cum să stocați **date unice într-o singură variabilă.**

**Matricele** ne permit să stocăm **mai multe bucăți** de date în aceeași variabilă.

O matrice este o **colecție ordonată** și datele din interiorul acesteia pot fi modificate.

Poate fi folosit pentru **păstrarea secvențelor de date și iterația** peste ele.

Pentru a declara o matrice, plasăm valorile pe care ar trebui să le dețină între paranteze pătrate, fiecare element al matricei trebuie să fie separat printr-o virgulă.

Crearea unui set de șiruri:

```js
let fruit = ['apple', 'pear', 'cherry'];
```
Matricile pot conține variabile de **diferite tipuri de date**, numere întregi, șiruri, booleene etc. 

De asemenea, **valorile** duplicate **pot** fi stocate în ea 

```js
let myArray = ['string', 2, 3.33, 2, true];
```

Valorile dintr-o matrice se numesc **elemente.**

Ai putea să te gândești la el ca la un **tren**, fiecare vagon din care **poate conține un tip și un număr diferit de obiecte**: pasageri, mărfuri, materii prime,vagonul ar putea fi chiar gol.

Acum să ne imaginăm **o serie de numere întregi**, fiecare element reprezentând un vagon și fiecare valoare este numărul de pasageri.

Ca și în această reprezentare grafică:

[image assetsSrc="array-example.png" /]

Acesta are **7 vagoane** (**elemente**).

Fiecare are **pasageri** (o valoare)

- [3, 4, 10, 7, 5, 0, 6]

Elementele matricei sunt numerotate de la 0 la `length-1`.

Folosind metoda `Array.length` putem obține o variabilă, care conține lungimea unei matrice.

În acest exemplu avem **7 elemente.**

[/slide]

[slide hideTitle]
# Crearea Unei Matrice
[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-5-Creating-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există două moduri de a crea o matrice:

Inițializați-o folosind **paranteze pătrate** `[]`, dacă nu sunt declarate elemente, matricea va fi goală

```js
let names = [];
```

Inițializați o matrice care conține valori întregi:

```js
let numbers = [1, 2, 3, 4, 5];
```

Când avem o matrice, putem accesa fiecare element după indexul său.

Operatorul `[]` este utilizat pentru a accesa elementele matricei prin **indexul lor.**

```js live
let numbers = [1, 2, 3, 4, 5];

console.log(`First number is ${numbers[0]}`); 
console.log(`Last number is ${numbers[numbers.length-1]}`);
```

**Putem atribui valori** elementelor matricei la un anumit index

**Metoda de lungime** poate fi utilizată pentru a returna numărul de elemente dintr-un șir:

``` js live
let numbers = [1, 2, 3, 4, 5];
numbers[3] = numbers[1] + numbers[2];

console.log(numbers.length);
console.log(numbers);
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Sum First and Last Array Elements

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-6-Solution-Sum-first-and-last-array-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum First and Last Array Elements" taskId="fundamentals-js-arrays-lab-Sum-First-and-Last-Array-Elements" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumFirstAndLastNum(numArray){
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

Creați un program care primește o **matrice de numere** ca intrare.
Imprimați suma **primului** și **ultimului** element al matricei

## Exemplus
|**Intrare**|**Ieșire**|
| --- | --- |
| sumFirstAndLastNum([20, 30, 40]) | 60 |
| sumFirstAndLastNum([10, 17, 22, 33]) | 43 |

[/task-description]
[tests]
[test open]
[input]
sumFirstAndLastNum([20, 30, 40])
[/input]
[output]
60
[/output]
[/test]
[test open]
[input]
sumFirstAndLastNum([10, 17, 22, 33])
[/input]
[output]
43
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([191, 67, 22, 33, 9])
[/input]
[output]
200
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([10, 69])
[/input]
[output]
79
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([56, 44, 19])
[/input]
[output]
75
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([118, 574, 19])
[/input]
[output]
137
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([11, 58, 69])
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([91, 18, 19])
[/input]
[output]
110
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Days of Week: Exemplu

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-7-Example-Days-of-week-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

|**Index**|**Value**|
|---|---|
|`days[0]`|Monday|
|`days[1]`|Tuesday|
|`days[2]`|Wednesday|
|`days[3]`|Thursday|
|`days[4]`|Friday|
|`days[5]`|Saturday|
|`days[6]`|Sunday|

Acesta este un exemplu de matrice care conține șiruri pentru diferitele zile ale săptămânii.

Primul element, Monday, este la indexul 0 al matricei.

Primul element, Sunday, se află la indexul 6 al matricei.

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Days of Week
[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-8-Solution-Days-of-week-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Days of Week" taskId="fundamentals-js-arrays-lab-Days-of-Week" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function dayOfWeek(day){
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

Creați un program care primește un număr și imprimă numele corespunzător al zilei săptămânii.

Dacă numărul NU este o zi validă, tipăriți "**Invalid day!**".

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| dayOfWeek(3) | Wednesday |
| dayOfWeek(11) | Invalid day! |

[/task-description]
[tests]
[test open]
[input]
dayOfWeek(3)
[/input]
[output]
Wednesday
[/output]
[/test]
[test open]
[input]
dayOfWeek(11)
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
dayOfWeek(1)
[/input]
[output]
Monday
[/output]
[/test]
[test]
[input]
dayOfWeek(2)
[/input]
[output]
Tuesday
[/output]
[/test]
[test]
[input]
dayOfWeek(4)
[/input]
[output]
Thursday
[/output]
[/test]
[test]
[input]
dayOfWeek(5)
[/input]
[output]
Friday
[/output]
[/test]
[test]
[input]
dayOfWeek(6)
[/input]
[output]
Saturday
[/output]
[/test]
[test]
[input]
dayOfWeek(7)
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
dayOfWeek(8)
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
dayOfWeek(9)
[/input]
[output]
Invalid day!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Matrice de Diferite Tipuri
[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-10-Arrays-of-different-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Matricele pot conține diferite tipuri de elemente:

Matrice care conține numere:
``` js
let numbers = [10, 20, 30, 40, 50];
```

Matrice care conține șiruri
``` js
let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

Matrice care conține date mixte
```js
let mixedArr = [20, new Date(), 'hello', {x:5, y:8}];
```
[/slide]

[slide hideTitle]
# Adăugarea de Elemente Noi

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-11-Adding-new-array-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem adăuga un element la sfârșitul matricei:
``` js live
let arr = [10, 20, 30];
arr[arr.length] = 40;

console.log(arr); 
```

Sau putem folosi metoda push încorporată

``` js live
let arr = [10, 20, 30];
arr.push(50);

console.log(arr); 
```
[/slide]

[slide hideTitle]
# Mmatricele JavaScript și Pozițiile Nevalide

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-12-JS-Arrays-and-invalid-positions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Dacă încercăm să atribuim o valoare unui index inexistent, JavaScript va umple elementele lipsă cu valori 'nedefinite' și îi va mări dimensiunea:

``` js live
let nums = [10, 20, 30];
console.log(nums);

nums[4] = 50; // Will resize the array
console.log(nums.length);

console.log(nums[3]);
```

Erori tipice cu care ne putem confrunta atunci când lucrăm cu o matrice:

Putem accesa de fapt indecși care nu există în matrice. 

``` js live
let nums = [10, 20, 30];

console.log(nums[-5]);
nums[-5] = 8;
console.log(nums[-5], nums.length);

```
[/slide]
