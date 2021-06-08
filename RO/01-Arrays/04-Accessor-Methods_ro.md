
# Metodele Accessor

[slide hideTitle]
# Definiție

**Metodele accesor** returnează o **matrice nouă** fără a o **schimba** pe cea **originală**.

## Join

Metoda `array.join()` creează un șir prin **concatenarea reprezentărilor șirului tuturor elementelor**.

Acesta primește un argument **șir**, care este folosit ca un **separator**.

``` js live
let arr = [10, 20, 30];

console.log(arr.join('@@'));
```

[/slide]

[slide hideTitle]
# IndexOf

Metoda `array.indexOf()` returnează **indexul la care este stocată valoarea dată**.

Returnează **valoarea specială** \ -1 dacă elementul **nu este găsit**.

Această metodă este similară cu `List.indexOf` din Java.

``` js live
let myArray = ['Peter','George','Mary'];

let indexOfMary = myArray.indexOf('Mary');
let indexOfNick = myArray.indexOf('Nick');

console.log(indexOfMary);
console.log(indexOfNick);
```
[/slide]


[slide hideTitle]
# Concat

Metoda `.concat()` este utilizată pentru a **concatena** două sau mai multe matrici **fără a** modifica niciuna dintre ele.

``` js live
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);

console.log(numbers); 
```
[/slide]

[slide hideTitle]

# Slice

Metoda `array.slice()`**returnează** elementele **selectate** dintr-o matrice ca un **nou obiect matrice**.

Selectează elementele începând de la **indexul de start** dat până la **indexul final** fără a include ultimul element. 

Este similar cu metoda `List.subList; Stream.skil + limit` din Java.

``` js live
let myArray = ['one', 'two', 'three', 'four', 'five'];
let sliced = myArray.slice(2);

console.log(myArray);
console.log(sliced);

console.log(myArray.slice(2,4));
```

Această metodă poate **primi** un număr **negativ** ca argument:

``` js live
let myArray = ['one', 'two', 'three', 'four', 'five'];

console.log(myArray.slice(-2));
console.log(myArray.slice(2, -1));
```

În acest exemplu, când **- 2 este trecut** ca argument, metoda ia **ultimele două** elemente ale tabloului.

[/slide]

[slide hideTitle]
# Problemă: Bigger Half

[code-task title="Bigger Half" taskId="java-path-js-advanced-arrays-bigger-half" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function biggerHalf(input){
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

Vi se oferă o serie de numere. 

Scrieți o funcție JavaScript care **sortează** matricea în **ordine crescătoare** și returnează o matrice nouă care conține doar **a doua jumătate** a intrării.

Dacă există un număr impar de elemente în intrare, luați întotdeauna jumătatea mai mare.

De exemplu, dacă tabloul de intrare conține 4 elemente, noul tablou ar trebui să aibă 2 elemente.

Dacă matricea de intrare are o lungime de 5, rezultatul ar trebui să aibă 3 elemente.

**Intrarea** vine ca **matrice de elemente numerice**.

**Ieșirea** este valoarea **returnată** a funcției și ar trebui să fie o **matrice de numere**.


## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|biggerHalf([ 4, 7, 2, 5 ]) | [ 5, 7 ] |
|biggerHalf([ 3, 19, 14, 7, 2, 19, 6 ]) | [ 7, 14, 19, 19 ]  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
biggerHalf([ 4, 7, 2, 5 ])
[/input]
[output]
[ 5, 7 ]
[/output]
[/test]
[test open]
[input]
biggerHalf([ 3, 19, 14, 7, 2, 19, 6 ])
[/input]
[output]
[ 7, 14, 19, 19 ]
[/output]
[/test]
[test]
[input]
biggerHalf([ 1, 2, 3 ])
[/input]
[output]
[ 2, 3 ]
[/output]
[/test]
[test]
[input]
biggerHalf([ 53, 5, 43, 7 ])
[/input]
[output]
[ 43, 53 ]
[/output]
[/test]
[test]
[input]
biggerHalf([ 100, 90, 90, 5, 67, 4, 3 ])
[/input]
[output]
[ 67, 90, 90, 100 ]
[/output]
[/test]
[test]
[input]
biggerHalf([ -1, -10, -4, -7 ])
[/input]
[output]
[ -4, -1 ]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Includes

Metoda `array.includes()` returnează **adevărat** dacă **valoarea** dată **este o parte a matricei**.

``` js live
let myArray = ['Peter','George','Mary'];

let isGeorgeIncluded = myArray.includes('George');
let isJohnIncluded = myArray.includes('John');

console.log(isGeorgeIncluded);
console.log(isJohnIncluded);
```

[/slide]

[slide hideTitle]
# Problemă: Piece of Pie

[code-task title="Piece of Pie" taskId="java-path-js-advanced-arrays-Piece-of-Pie" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function pieceOfPie(input, startSection, endSection){
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

Scrieți o funcție care primește **trei parametri** - o **matrice** de arome de plăcintă ca șiruri și două arome țintă ca **șiruri**.

Rezultatul ar trebui să fie o nouă matrice - secțiunea matricei originale, începând de la primul parametru de aromă și terminând la (inclusiv) al doilea parametru de aromă.

**Intrarea** vine ca **trei argumente**:

- Un **set de șiruri**, reprezentând arome de plăcintă

- **Încă două șiruri**, care reprezintă începutul și respectiv sfârșitul secțiunii

**Ieșirea** este valoarea **returnată** a funcției și ar trebui să fie o **matrice de șiruri**.

## Examples
| **Intrare** | **Ieșire** |
| --- | --- |
|pieceOfPie([ 'Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie' ], 'Key Lime Pie', 'Lemon Meringue Pie') | [ 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie' ] |
|pieceOfPie([ 'Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie' ], 'Pot Pie', 'Smoked Fish Pie' ) | [ 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie' ]  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
pieceOfPie([ 'Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie' ], 'Key Lime Pie', 'Lemon Meringue Pie')
[/input]
[output]
[ 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie' ]
[/output]
[/test]
[test open]
[input]
pieceOfPie([ 'Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie' ], 'Pot Pie', 'Smoked Fish Pie')
[/input]
[output]
[
  'Pot Pie',
  'Steak and Cheese Pie',
  'Butter Chicken Pie',
  'Smoked Fish Pie'
]
[/output]
[/test]
[test]
[input]
pieceOfPie([ 'a', 'b', 'c', 'd' ], 'a', 'b')
[/input]
[output]
[ 'a', 'b' ]
[/output]
[/test]
[test]
[input]
pieceOfPie([ 'a', 'b', 'c', 'd' ], 'b', 'd')
[/input]
[output]
[ 'b', 'c', 'd' ]
[/output]
[/test]
[test]
[input]
pieceOfPie([ 'f', 'f', 's', 'q', 'r', 'g' ], 'f', 'r')
[/input]
[output]
[ 'f', 'f', 's', 'q', 'r' ]
[/output]
[/test]
[test]
[input]
pieceOfPie([ 'g', 'f', 's', 'k', 't' ], 'f', 't')
[/input]
[output]
[ 'f', 's', 'k', 't' ]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
