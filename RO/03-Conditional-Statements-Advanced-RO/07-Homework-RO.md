// sectionId: "Javascript::Programming-Basics::Conditional-Statements-Advanced::Homework"

# Teme Pentru Acasă
[slide hideTitle]
# Problemă: Fruit or Vegetable
[code-task title="Fruit or Vegetable" taskId="pb-js-Conditions-Advanced-Fruit-or-Vegetable" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function fruitOrVegetable(input) {
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
Creați un program pentru a verifica dacă **intrarea** este **fruit** sau **vegetable**:

* Veți primi o singură linie de intrare: un articol de la aprozar
* Imprimă "**fruit**" pentru următoarele: **banana**, **apple**, **kiwi**, **cherry**, **lemon**, **grapes**
* Imprimă "**vegetable**" pentru următoarele: **cucumber**, **pepper**, **carrot**, **onion**
* Imprimă "**unknown**" pentru orice altceva

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|fruitOrVegetable('lemon')| fruit |
|fruitOrVegetable('carrot')| vegetable |

[hints]
[hint]
Puteți folosi o expresie switch-case pentru a rezolva problema mai ușor.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
fruitOrVegetable('lemon')
[/input]
[output]
fruit
[/output]
[/test]
[test open]
[input]
fruitOrVegetable('carrot')
[/input]
[output]
vegetable
[/output]
[/test]
[test]
[input]
fruitOrVegetable('banana')
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
fruitOrVegetable('apple')
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
fruitOrVegetable('cherry')
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
fruitOrVegetable('grapes')
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
fruitOrVegetable('onion')
[/input]
[output]
vegetable
[/output]
[/test]
[test]
[input]
fruitOrVegetable('cucumber')
[/input]
[output]
vegetable
[/output]
[/test]
[test]
[input]
fruitOrVegetable('pepper')
[/input]
[output]
vegetable
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Day of Week
[code-task title="Day of Week" taskId="pb-js-Conditions-Advanced-Day-of-Week" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function dayOfWeek(input) {
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
Creați un program pentru a imprima ziua săptămânii ca un cuvânt:

* Veți primi un număr întreg **n**: **ziua săptămânii** în intervalul \[1..7\]
* Imprimați numele zilei (ca un cuvânt, în engleză)
* Imprimați "**Error**", dacă numărul nu se află în intervalul dat


# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|dayOfWeek(1)| Monday |
|dayOfWeek(8)| Error |

[/task-description]
[tests]
[test open]
[input]
dayOfWeek(1)
[/input]
[output]
Monday
[/output]
[/test]
[test open]
[input]
dayOfWeek(8)
[/input]
[output]
Error
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
dayOfWeek(2)
[/input]
[output]
Tuesday
[/output]
[/test]
[test]
[input]
dayOfWeek(3)
[/input]
[output]
Wednesday
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
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Vowel or Consonant
[code-task title="Vowel or Consonant" taskId="pb-js-Conditions-Advanced-Vowel-or-Consonant" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function vowelOrConsonant(input) {
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
Creați un program pentru a verifica dacă o anumită literă este o vocală sau o consoană:

* Veți primi o **literă** din alfabetul englez
* Imprimați "**Vowel**" sau "**Consonant**"


# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|vowelOrConsonant('a')| Vowel |
|vowelOrConsonant('B')| Consonant |

[hints]
[hint]
Puteți folosi o instrucțiune "if" pentru a verifca dacă litera respectivă este o vocală. În cazul în care este, imprimați ieșirea corectă. Dacă nu este, introduceți instrucțiunea "else" și imprimați rezultatul corespunzător.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
vowelOrConsonant('a')
[/input]
[output]
Vowel
[/output]
[/test]
[test open]
[input]
vowelOrConsonant('B')
[/input]
[output]
Consonant
[/output]
[/test]
[test]
[input]
vowelOrConsonant('E')
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
vowelOrConsonant('b')
[/input]
[output]
Consonant
[/output]
[/test]
[test]
[input]
vowelOrConsonant('C')
[/input]
[output]
Consonant
[/output]
[/test]
[test]
[input]
vowelOrConsonant('A')
[/input]
[output]
Vowel
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Product of 3 Numbers
[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/problem1-product-of-3-numbers-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Product of 3 Numbers" taskId="pb-js-Conditions-Advanced-Product-of-3-numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function productOfThreeNumbers(input) {
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
Creați un program care determină semnul produsului a 3 numere:

* Veți primi **3 numere în virgulă mobilă** ca matrice
* Imprimați **semnul** produsului celor 3 numere introduse: "**positive**", "**negative**" sau "**zero**"

Încercați să faceți acest lucru **fără a înmulți** cele 3 numere.

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|productOfThreeNumbers([2, 3, -1])| negative |


[/task-description]
[tests]
[test open]
[input]
productOfThreeNumbers([2, 3, -1])
[/input]
[output]
negative
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([-3, -4, 5])
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([2, -9, 5])
[/input]
[output]
negative
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([4, 0, -10])
[/input]
[output]
zero
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([5, 2, 2])
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([-5, 2, -2])
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
productOfThreeNumbers([1, 2, 0])
[/input]
[output]
zero
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Sorted Numbers
[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/problem2-sorted-numbers-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sorted Numbers" taskId="pb-js-Conditions-Advanced-Sorted-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sortedNumbers(firstNumber, secondNumber, thirdNumber) {
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
Creați un program care verifică dacă **anumite numere** sunt sortate:

* Veți primi 3 numere în virgulă mobilă
* Tipăriți "**Ascending**" dacă numerele sunt în ordine crescătoare
* Tipăriți "**Descending**" dacă numerele sunt în ordine descrescătoare
* Imprimați "**Not sorted**" în orice alt caz


# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|sortedNumbers([1, 2, 3])| Ascending |
|sortedNumbers([3, 5, 2])| Not sorted |

[/task-description]
[tests]
[test open]
[input]
sortedNumbers([1, 2, 3])
[/input]
[output]
Ascending
[/output]
[/test]
[test open]
[input]
sortedNumbers([3, 5, 2])
[/input]
[output]
Not sorted
[/output]
[/test]
[test]
[input]
sortedNumbers([3, 1, 2])
[/input]
[output]
Not sorted
[/output]
[/test]
[test]
[input]
sortedNumbers([3, 2, 1])
[/input]
[output]
Descending
[/output]
[/test]
[test]
[input]
sortedNumbers([4, 3, 2])
[/input]
[output]
Descending
[/output]
[/test]
[test]
[input]
sortedNumbers([2, 3, 4])
[/input]
[output]
Ascending
[/output]
[/test]
[test]
[input]
sortedNumbers([4, 5, 3])
[/input]
[output]
Not sorted
[/output]
[/test]
[test]
[input]
sortedNumbers([10, 9, 8])
[/input]
[output]
Descending
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Vacation Expenses
[code-task title="Vacation Expenses" taskId="pb-js-Conditions-Advanced-Vacation-Expenses" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function vacationExpenses(season, building, days){
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
Creați un program care calculează cheltuielile de vacanță:

* Veți primi sezonul, tipul de cazare și numărul de zile
* Imprimați **cheltuielile** totale pe baza tabelului de prețuri de mai jos, formatând rezultatul la **a doua cifră** după punctul zecimal


 | Season   | Hotel | Camping   | Discount|
| :---:       |    :----:   |   :---:     |   :---: |
|Spring|30|10|20\%|
|Summer|50|30|0\%|
|Autumn|20|15|30\%|
|Winter|40|10|10\%|

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|vacationExpenses('Winter', 'Hotel', 5)| 180.00 |

[/task-description]
[tests]
[test open]
[input]
vacationExpenses('Winter', 'Hotel', 5)
[/input]
[output]
180.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Winter', 'Camping', 10)
[/input]
[output]
90.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Autumn', 'Camping', 6)
[/input]
[output]
63.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Summer', 'Hotel', 7)
[/input]
[output]
350.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Spring', 'Camping', 8)
[/input]
[output]
64.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Summer', 'Hotel', 9)
[/input]
[output]
450.00
[/output]
[/test]
[test]
[input]
vacationExpenses('Autumn', 'Camping', 10)
[/input]
[output]
105.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Cinema
[code-task title="Cinema" taskId="pb-js-Conditions-Advanced-Cinema" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cinema(typeOfMovie, rows, seatsPerRow) {
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
Creați un program care imprimă **prețul** tuturor biletelor pentru un film cinematografic:

* Veți primi **tipul filmului**, **rândurile** și **locurile pe rând** din cinematograf
* Imprimați **prețul total** pentru toate locurile, **formatat** la a doua cifră după punctul zecimal


  | **Type** | **Price** |
| --- | --- |
|Premiere|12.00|
|Normal|7.50|
|Discount|5.00|

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|cinema('Premiere', 10, 12)| 1440.00 |
|cinema('Normal', 21, 13)| 2047.50 |
|cinema('Discount', 12, 30)| 1800.00 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
cinema('Premiere', 10, 12)
[/input]
[output]
1440.00
[/output]
[/test]
[test open]
[input]
cinema('Normal', 21, 13)
[/input]
[output]
2047.50
[/output]
[/test]
[test open]
[input]
cinema('Discount', 12, 30)
[/input]
[output]
1800.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 88, 44)
[/input]
[output]
29040.00
[/output]
[/test]
[test]
[input]
cinema('Discount', 43, 15)
[/input]
[output]
3225.00
[/output]
[/test]
[test]
[input]
cinema('Premiere', 42, 62)
[/input]
[output]
31248.00
[/output]
[/test]
[test]
[input]
cinema('Discount', 30, 36)
[/input]
[output]
5400.00
[/output]
[/test]
[test]
[input]
cinema('Premiere', 94, 17)
[/input]
[output]
19176.00
[/output]
[/test]
[test]
[input]
cinema('Discount', 34, 7)
[/input]
[output]
1190.00
[/output]
[/test]
[test]
[input]
cinema('Discount', 34, 93)
[/input]
[output]
15810.00
[/output]
[/test]
[test]
[input]
cinema('Premiere', 68, 50)
[/input]
[output]
40800.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 73, 61)
[/input]
[output]
33397.50
[/output]
[/test]
[test]
[input]
cinema('Normal', 63, 64)
[/input]
[output]
30240.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 84, 98)
[/input]
[output]
61740.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 59, 57)
[/input]
[output]
25222.50
[/output]
[/test]
[test]
[input]
cinema('Premiere', 52, 35)
[/input]
[output]
21840.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 36, 75)
[/input]
[output]
20250.00
[/output]
[/test]
[test]
[input]
cinema('Normal', 65, 68)
[/input]
[output]
33150.00
[/output]
[/test]
[test]
[input]
cinema('Premiere', 59, 35)
[/input]
[output]
24780.00
[/output]
[/test]
[test]
[input]
cinema('Discount', 78, 9)
[/input]
[output]
3510.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Operations with Numbers
[code-task title="Operations with Numbers" taskId="pb-js-Conditions-Advanced-Operation-With-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function operationswithNumbers(firstNumber, secondNumber, operation) {
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
Creați un program care aplică un operator pentru două numere date:

* Veți primi două numere întregi și operatorul aritmetic de pe consolă
* Operatorul aritmetic poate fi: \+, \-, \/, \% și \*
* Rezultatul trebuie să fie în următorul **format**: `{N1} {operator} {N2} = {result}`

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|operationswithNumbers(12, 10, '\+')| 12 + 10 = 22 |

[/task-description]
[tests]
[test open]
[input]
operationswithNumbers(12, 10, '\+')
[/input]
[output]
12 + 10 = 22
[/output]
[/test]
[test]
[input]
operationswithNumbers(12, 10, '\-')
[/input]
[output]
12 \- 10 = 2
[/output]
[/test]
[test]
[input]
operationswithNumbers(10, 12, '\*')
[/input]
[output]
10 \* 12 = 120
[/output]
[/test]
[test]
[input]
operationswithNumbers(6, 2, '\/')
[/input]
[output]
6 \/ 2 = 3
[/output]
[/test]
[test]
[input]
operationswithNumbers(5, 2, '%')
[/input]
[output]
5 \% 2 = 1
[/output]
[/test]
[test]
[input]
operationswithNumbers(2, 2, '\-')
[/input]
[output]
2 \- 2 = 0
[/output]
[/test]
[test]
[input]
operationswithNumbers(2, 2, '\+')
[/input]
[output]
2 \+ 2 = 4
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: ATM
[code-task title="ATM" taskId="pb-js-Conditions-Advanced-ATM" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function atm(balance, withdraw, limit) {
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
Creați un program pentru a simula o retragere de numerar de la bancomat:

* Veți primi următoarele: **balance**, **withdraw** și **limit**
* Imprimați "**The withdraw was successful.**" dacă soldul este suficient
* Imprimați "**The daily limit was exceeded.**" dacă limita este depășită
* Imprimați "**Insufficient availability.**" dacă soldul nu este sufficient

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|atm(420, 20, 25)| The withdraw was successful. |


  | **Intrare** | **Ieșire** |
| --- | --- |
|atm(10, 50, 20)| The daily limit was exceeded. |
|| Insufficient availability. |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
atm(420, 20, 25)
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[test open]
[input]
atm(10, 50, 20)
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[test]
[input]
atm(10, 4565, 345)
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[test]
[input]
atm(342, 2, 3)
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[test]
[input]
atm(10, 50, 20)
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Biggest of Five Numbers
[code-task title="Biggest of Five Numbers" taskId="pb-js-Conditions-Advanced-Biggest-of-Five-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function biggestOfFiveNumbers(numOne, numTwo, numThree, numFour, numFive) {
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

Creați un program pentru a găsi cel mai mare număr dintre 5 numere:

* Veți primi **5 numere întregi**

* Imprimați **cel mai mare** număr


# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|biggestOfFiveNumbers(\-1, \-2, \-3, \-4, \-5) | \-1 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
biggestOfFiveNumbers(\-1, \-2, \-3, \-4, \-5)
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
biggestOfFiveNumbers(5, -2, -3, 9, -8)
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
biggestOfFiveNumbers(-1, 4, 3, -4, 1)
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
biggestOfFiveNumbers(4, 2, 5, 43, 1)
[/input]
[output]
43
[/output]
[/test]
[test]
[input]
biggestOfFiveNumbers(234234, 2345, 56756, 67867, 3453)
[/input]
[output]
234234
[/output]
[/test]
[test]
[input]
biggestOfFiveNumbers(3452, 54756, 6786, 3453, 4)
[/input]
[output]
54756
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
