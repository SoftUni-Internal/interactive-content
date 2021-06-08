
# Modificarea matricelor

[slide hideTitle]

# Adăugarea elementelor

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-12-14-16-Mutator-Methods-Push-Unshift-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Metodele** utilizate pentru modificarea matricelor în JavaScipt sunt similare cu cele din **fluxul Java**.

Când se aplică oricare dintre următoarele **metode**, acesta va **schimba** (modifica) matricea originală.

## Push

Metoda `array.push()` adaugă **unul sau mai multe elemente** la sfârșitul unei matrice și **returnează** **noua sa lungime**.

Este similar cu metoda `STACK.push(E element)` din Java.

```js live
let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(`Array's length is: ${nums.length}`);

let insertElement = nums.push(80);

console.log(insertElement);
console.log(nums);
```

## Unshift

`array.unshift()` adaugă **unul sau mai multe elemente** la **începutul** unei matrice și returnează **noua sa lungime**.

```js live
let nums = [40, 50, 60];

console.log(`Array's length is: ${nums.length}`); 

let firstElement = nums.unshift(30);
console.log(firstElement); 

let secondElement = nums.unshift(10,20);
console.log(secondElement); 
console.log(nums);

```
[/slide]

[slide hideTitle]
# Problemă cu Soluţie: Negative or Positive Numbers 

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05. JS-Fundamentals-Arrays-Advanced-12--negative-posivite-numbers-Solution-ONLY-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Negative or Positive Numbers" taskId="java-path-js-advanced-arrays-Negative-or-Positive-Numbers"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function negativePositive(input){
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
# Descriere

Scrieți o funcție care procesează **toate elementele unei matrice unul câte unul** și **creează o nouă matrice**.

Adăugați fiecare element **negativ** la **început** și fiecare element **pozitiv** (sau 0) la **sfârșitul** noii matrice.

**Intrarea** vine ca o **matrice** de elemente de șir care reprezintă **numere**.

**Ieșirea** trebuie să fie **tipărită pe consolă** cu fiecare element pe o **linie nouă**.


## Exemplul unu
| **Intrare** | **Ieșire** |
| --- | --- |
|negativePositive([7, -2, 8, 9]) | \-2 |
| | 7 |
| | 8 |
| | 9 |


## Examplul doi
| **Intrare** | **Ieșire** |
| --- | --- |
|negativePositive([3, -2, 0, -1])  | \-1 |
| | \-2 |
| | 3 |
| | 0 |

[hints]
[hint]
Folosiți `unshift()` pentru a adăuga un element la **prima** poziție.
[/hint] 
[hint]
Folosiți `push()` pentru a adăuga un element la **ultima** poziție.
[/hint] 
[/hints] 

[/task-description]
[tests]
[test open]
[input]
negativePositive([\-2, 8, 7, 99, 100, 11])
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
negativePositive([3, \-2, 0, \-1])
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
negativePositive([\-2, \-11, 7, 8, 100, \-11, \-11, 11, \-2])
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
negativePositive([\-2, \-11, 7, 8, 0, \-13, 0, \-25, 0])
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
negativePositive([2, 3, 4, 5, 6, \-7, \-8])
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
negativePositive([\-2, 3, 0, 5, \-6, 0, 8])
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

# Eliminarea Elementelor

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-13-15-Pop-Shift-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Pop

Metoda `array.pop()` **elimină** și **returnează** ultimul element dintr-o matrice.

Scade **lungimea** colecției.

Această metodă este similară cu `STACK.pop()` din Java.

Iată un exemplu:

```js live
let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(`Array's length is: ${nums.length}`);

let lastElement = nums.pop();

console.log(`The last element is: ${lastElement}`);
console.log(`Array's length is: ${nums.length}`);
console.log(nums); 
```

## Shift

Metoda `array.shift()` **elimină** **primul** element dintr-o matrice și **îl returnează**.

Scade **lungimea** matricei.

Acesta este modul de utilizare:

```js live
let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(`Array's length is: ${nums.length}`);

let firstElement = nums.shift();

console.log(firstElement);
console.log(nums);
```
[/slide]

[slide hideTitle]
# Problemă cu Soluţie: Sum First Last

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-problem-1-solution-sum-first-last-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum First Last" taskId="java-path-js-advanced-arrays-Sum-First-Last" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function sumFirstLast(input){
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
# Descriere

Scrieți o funcție care **calculează** și **tipărește** **suma** **primului și ultimului element** al unei matrice.

**Intrarea** vine ca o **matrice** cu elemente de tip **șir** reprezentând **numere**.

**Ieșirea** ar trebui să fie **valoarea care este returnată din funcție**.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|sumFirstLast(['20', '30', '40']) | 60 |
|sumFirstLast(['5', '10']) | 15 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
sumFirstLast(['20', '30', '40'])
[/input]
[output]
60
[/output]
[/test]
[test open]
[input]
sumFirstLast(['5', '10'])
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
sumFirstLast(['2', '3', '2', '14', '3'])
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
sumFirstLast(['2.5', '3.6', '1.1', '3.33'])
[/input]
[output]
5.83
[/output]
[/test]
[test]
[input]
sumFirstLast(['1000', '2000', '3000', '4000'])
[/input]
[output]
5000
[/output]
[/test]
[test]
[input]
sumFirstLast(['20', '30', '40'])
[/input]
[output]
60
[/output]
[/test]
[test]
[input]
sumFirstLast(['5', '10'])
[/input]
[output]
15
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Splice

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-17-Splice-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.splice()`**modifică** conținutul unei matrice prin **ștergerea**, **adăugarea** sau **înlocuirea** elementelor la un anumit index.

Este similar cu metodele `remove(int index)` și  `ArrayList.addAll()`din Java, dar cu opțiunea suplimentară de **eliminare a mai multor elemente**.

``` js live
let nums = [1, 3, 4, 5, 6];

// Inserează la indexul 1
nums.splice(1, 0, 2); 
console.log(nums);

// Înlocuiește 1 element la indexul 4
nums.splice(4, 1, 19); 
console.log(nums);

// Elimină 1 element la index 2
let el = nums.splice(2, 1); //Doar două argumente la ștergere
console.log(nums); 
console.log(el);
```

În primul exemplu,  `array.splice()` primește **trei** argumente:

- Primul argument: **indexul de pornire** al operației
- Al doilea argument: **numărul de elemente de șters**

Când **ștergeți** elemente, nu este **necesar** să treceți al treilea argument.

- Al treilea argument: elementele care vor fi **adăugate** la indexul dat

[/slide]

[slide hideTitle]

# Fill

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-18-Fill-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`array.fill()`  umple toate **elementele** unei matrice de la un **start** index la un **end** index cu o valoare statică.

În Java, **nu există o** metodă similară.

```js live
let fruits = ['apple', 'orange', 'grapes', 'watermelon'];

// Umpleți cu 'banana' de la poziția 2 până la poziția 4
console.log(fruits.fill('banana', 2, 4));

// Umpleți cu 'strawberry' din poziția 1
console.log(fruits.fill('strawberry', 1));

// Înlocuiți toate elementele cu 'blueberry'
console.log(fruits.fill('blueberry'));
```

[/slide]

[slide hideTitle]

# Reverse

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-19-Reverse-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.reverse()` inversează o matrice, unde **primul** element de matrice devine **ultimul**, iar **ultimul** element de matrice devine **primul**.

În Java, **nu există o** metodă similară.

```js live
let arr = [1, 2, 3, 4];
arr.reverse();

console.log(arr); 
```
[/slide]

[slide hideTitle]
# Sort

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-19-Reverse-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `array.sort()` **sortează elementele** unei matrice.

Este similar cu metoda  `Stream sorted()` din Java.

În funcție de **funcția de comparare** oferită, ordinea de sortare poate fi **alfabetică** sau **numerică** și **crescătoare** (sus) sau **descrescătoare** (jos).

În mod implicit, metoda `array.sort()` sortează valorile ca **șiruri în ordine alfabetică și crescătoare.**

Dacă dorim să sortăm numerele sau alte valori, trebuie să oferim o **funcție de comparare corectă.**

În exemplul următor, avem o serie de nume. 

Dacă apelăm direct metoda `array.sort()`  fără a trece o **funcție de comparare**, metoda va sorta numele în ordine alfabetică crescătoare.

```js live
let names = ['Peter', 'George', 'Mary'];
names.sort(); 

console.log(names); 
```

[/slide]

[slide hideTitle]

# Sortarea numerelor

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/01-Arrays/02.JS-Advanced-Arrays-21-Sorting-Numbers-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cu toate acestea, dacă avem o matrice care conține numere, rezultatul va fi **neașteptat și incorect**.

Fără o funcție **de comparare** trecută, metoda `array.sort()` va trata matricea ca o matrice de șiruri, nu ca o matrice de numere.

Deci, le va sorta ca valori de șir:

```js live
let numbers = [20, 40, 10, 30, 100, 5];

numbers.sort();
console.log(numbers);
```
[/slide]
