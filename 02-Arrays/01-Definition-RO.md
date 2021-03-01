# Definiție

[slide]
# Ce sunt matricele?

[vimeo-video]
[stream language="EN" videoId="489372251/f2e6e4672e" default /]
[stream language="RO" videoId="489372251/f2e6e4672e"  /]
[/video-vimeo]

Știți deja cum să stocați **date unice într-o singură variabilă.**

**Matricele** ne permit să stocăm **mai multe bucăți** de date în aceeași variabilă.

O matrice este o **colecție ordonată** și datele din interiorul acesteia pot fi modificate.

Poate fi folosit pentru **păstrarea secvențelor de date și iterația** peste ele.

Pentru a declara o matrice, plasăm valorile pe care ar trebui să le dețină între paranteze pătrate, fiecare element al matricei trebuie să fie separat printr-o virgulă.

Crearea unui set de șiruri:

```js
let fruit = ["apple", "pear", "cherry"];
```
Matricile pot conține variabile de **diferite tipuri de date**, numere întregi, șiruri, booleene etc. 

De asemenea, **valorile** duplicate **pot** fi stocate în ea 

```js
let myArray = ["string", 2, 3.33, 2, true];
```

Valorile dintr-o matrice se numesc **elemente.**

Ai putea să te gândești la el ca la un **tren**, fiecare vagon din care **poate conține un tip și un număr diferit de obiecte**: pasageri, mărfuri, materii prime,vagonul ar putea fi chiar gol.

Acum să ne imaginăm **o serie de numere întregi**, fiecare element reprezentând un vagon și fiecare valoare este numărul de pasageri.

Ca și în această reprezentare grafică:
[image assetsSrc="array-example.png" /]

Acesta are **7 vagoane** (**elemente**).

Fiecare are **pasageri** (o valoare)

- `[3, 4, 10, 7, 5, 0, 6]`

Elementele matricei sunt numerotate de la `0` la `length-1`.

Folosind metoda `Array.length` putem obține o variabilă, care conține lungimea unei matrice.

În acest exemplu avem **7 elemente.**

[/slide]

[slide]
# Crearea unei matrice

[vimeo-video]
[stream language="EN" videoId="489372249/6743adf4f6" default /]
[stream language="RO" videoId="489372249/6743adf4f6"  /]
[/video-vimeo]

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

[slide]
# Problem: Sum First and Last Array Elements

[vimeo-video]
[stream language="EN" videoId="489372302/7905a8f7f5" default /]
[stream language="RO" videoId="489372302/7905a8f7f5"  /]
[/video-vimeo]

[code-task title="Sum First and Last Array Elements" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sum(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți o funcție care primește o **matrice de șiruri**, **le transformă în numere** și imprimă suma primului și ultimului element al matricei respective. 

# Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
|`[20, 30, 40]`| 60 |
|`[10, 17, 22, 33]`| 43 |
|`[11, 58, 69]`| 80 |

[/task-description]
[tests]
[test]
[input]
12
32
15
1
16
78
[/input]
[output]
90
[/output]
[/test]
[test]
[input]
12
32
18
16
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
191
67
22
33
9
[/input]
[output]
200
[/output]
[/test]
[test]
[input]
10
69
[/input]
[output]
79
[/output]
[/test]
[test]
[input]
56
44
19
[/input]
[output]
75
[/output]
[/test]
[test]
[input]
118
574
19
[/input]
[output]
137
[/output]
[/test]
[test]
[input]
11
58
69
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
91
18
19
[/input]
[output]
110
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Sum First and Last Array Elements

[vimeo-video]
[stream language="EN" videoId="489372305/43d632bad4" default /]
[stream language="RO" videoId="489372305/43d632bad4"  /]
[/video-vimeo]

[code-task title="Sum First and Last Array Elements" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sum(arr){
  let sum = Number(arr[0]) + Number(arr[arr.length - 1]);
  console.log(sum);
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți o funcție care primește o **matrice de șiruri**, **le transformă în numere** și imprimă suma primului și ultimului element al matricei respective. 

# Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
|`[20, 30, 40]`| 60 |
|`[10, 17, 22, 33]`| 43 |
|`[11, 58, 69]`| 80 |

[/task-description]
[tests]
[test]
[input]
12
32
15
1
16
78
[/input]
[output]
90
[/output]
[/test]
[test]
[input]
12
32
18
16
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
191
67
22
33
9
[/input]
[output]
200
[/output]
[/test]
[test]
[input]
10
69
[/input]
[output]
79
[/output]
[/test]
[test]
[input]
56
44
19
[/input]
[output]
75
[/output]
[/test]
[test]
[input]
118
574
19
[/input]
[output]
137
[/output]
[/test]
[test]
[input]
11
58
69
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
91
18
19
[/input]
[output]
110
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Days of Week: Example

[vimeo-video]
[stream language="EN" videoId="489372340/6ef0de5d43" default /]
[stream language="RO" videoId="489372340/6ef0de5d43"  /]
[/video-vimeo]
Acesta este un exemplu de matrice care conține șiruri pentru diferitele zile ale săptămânii.

Primul element, Monday, este la indexul 0 al matricei.

Primul element, Sunday, se află la indexul 6 al matricei.

[/slide]

[slide]
# Problem: Days of Week

[vimeo-video]
[stream language="EN" videoId="489372347/856f508476" default /]
[stream language="RO" videoId="489372347/856f508476"  /]
[/video-vimeo]

[code-task title="Days of Week" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function days(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți un program care primește un număr și imprimă numele corespunzător al zilei săptămânii.

Dacă numărul NU este o zi validă, tipăriți `Invalid day!`.

# Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
|`[3]`| Wednesday |
|`[6]`| Saturday |
|`[11]`| Invalid day! |

[/task-description]
[tests]
[test]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
Tuesday
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
Thursday
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
Friday
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
Saturday
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
Invalid day!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Days of Week

[vimeo-video]
[stream language="EN" videoId="489372392/785b1fe99f" default /]
[stream language="RO" videoId="489372392/785b1fe99f"  /]
[/video-vimeo]

[code-task title="Days of Week" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function days(input){
    let n = input[0];
    if (n <= 7) {
        let days = ['Invalid day!', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log(days[n]);
    }
    else {
        console.log('Invalid day!');
    }
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți un program care primește un număr și imprimă numele corespunzător al zilei săptămânii.

Dacă numărul NU este o zi validă, tipăriți `Invalid day!`.

# Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
|`[3]`| Wednesday |
|`[6]`| Saturday |
|`[11]`| Invalid day! |

[/task-description]
[tests]
[test]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
Tuesday
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
Thursday
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
Friday
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
Saturday
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
Invalid day!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Matrice de diferite tipuri

[vimeo-video]
[stream language="EN" videoId="489372393/3a35572b19" default /]
[stream language="RO" videoId="489372393/3a35572b19"  /]
[/video-vimeo]

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

[slide]
# Adăugarea de elemente noi

[vimeo-video]
[stream language="EN" videoId="489372468/1ac4aabd28" default /]
[stream language="RO" videoId="489372468/1ac4aabd28"  /]
[/video-vimeo]

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

[slide]
# JS Arrays and Invalid Positions

[vimeo-video]
[stream language="EN" videoId="489372453/ea5fcbe683" default /]
[stream language="RO" videoId="489372453/ea5fcbe683"  /]
[/video-vimeo]

Dacă încercăm să atribuim o valoare unui index inexistent, JS va umple elementele lipsă cu valori 'nedefinite' și îi va mări dimensiunea:

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
