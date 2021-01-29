# Homework
[slide hideTitle]
# Problem: Fruit or Vegetable
[code-task title="Fruit or Vegetable" taskId="pb-js-Conditions-Advanced-Fruit-or-Vegetable" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function fruitOrVegetable(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a verifica fructele sau legumele:

* Citiți o singură linie de intrare: un articol din legume
* Fructe: banana, apple, kiwi, cherry, lemon, grapes
* Legume: cucumber, pepper, carrot, onion
* Imprimați: `vegetable`, `fruit` sau  `unknown`

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|lemon| fruit |
|carrot| vegetable |

[/task-description]
[tests]
[test]
[input]
lemon
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
carrot
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
# Problem: Day of Week
[code-task title="Day of Week" taskId="pb-js-Conditions-Advanced-Day-of-Week" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function dayOfWeek(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a imprima ziua săptămânii ca un cuvânt:

*Citire și număr întreg **n**: **ziua săptămânii** în intervalul `[1..7]`
*Tipăriți *numele zilei* (ca un cuvânt, în engleză)
*Imprimați `Error`, dacă numărul nu se află în intervalul dat


# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|1| Monday |
|8| Error |

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
8
[/input]
[output]
Error
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
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Vowel or Consonant
[code-task title="Vowel or Consonant" taskId="pb-js-Conditions-Advanced-Vowel-or-Consonant" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function vowelOrConsonant(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# # Descriere
Scrieți un program pentru a verifica o literă dacă este o vocală sau o consoană:

*Citiți o **literă** din alfabetul englez
*Imprimați  `Vowel` sau `Consonant`


# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|a| Vowel |
|B| Consonant |

[/task-description]
[tests]
[test]
[input]
a
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
E
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
b
[/input]
[output]
Consonant
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Product of 3 Numbers
[vimeo-video]
[stream language="EN" videoId="486874673/6eb04e1bbf" default /]
[stream language="RO" videoId="486874673/6eb04e1bbf"  /]
[/video-vimeo]

[code-task title="Product of 3 Numbers" taskId="pb-js-Conditions-Advanced-Product-of-3-numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function productOfThreeNumbers(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Calculați semnul produsului de 3 numere:

* Citiți **3 numere în virgulă mobilă** 
* Imprimați semnul** produsului celor 3 numere introduse: `positive`, `negative` sau `zero`

Încercați să faceți acest lucru **fără a înmulți** cele 3 numere

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|`['2', '3', '-1']`| negative |

[/task-description]
[tests]
[test]
[input]
-2
3
1
[/input]
[output]
negative
[/output]
[/test]
[test]
[input]
-3
-4
5
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
1
2
0
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
# Problem: Sorted Numbers
[vimeo-video]
[stream language="EN" videoId="486875734/a16fef14e3" default /]
[stream language="RO" videoId="486875734/a16fef14e3"  /]
[/video-vimeo]

[code-task title="Sorted Numbers" taskId="pb-js-Conditions-Advanced-Sorted-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sortedNumbers(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program, care verifică **3 numere sortate**:

* Citiți 3 numere reale
* Tipăriți `Ascending` dacă numerele sunt în ordine crescătoare
* Tipăriți `Descending` dacă numerele sunt în ordine descrescătoare
* Imprimați `Not sorted` în orice alt caz


# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|`['1', '2', '3']`| Ascending |
|`['3', '5', '2']`| Not sorted |

[/task-description]
[tests]
[test]
[input]
1
2
3
[/input]
[output]
Ascending
[/output]
[/test]
[test]
[input]
3
1
2
[/input]
[output]
Not sorted
[/output]
[/test]
[test]
[input]
3
2
1
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
# Problem: Vacation Expenses
[code-task title="Vacation Expenses" taskId="pb-js-Conditions-Advanced-Vacation-Expenses" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function vacationExpenses(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program, care calculează cheltuielile de vacanță:

* Citiți sezonul, tipul de cazare și  numărul de zile
* Imprimați **cheltuielile** totale pe baza tabelului de prețuri de mai jos, formatat la **a doua cifră** după punctul zecimal


 | Season   | Hotel | Camping   | Discount|
| :---:       |    :----:   |   :---:     |   :---: |
|Spring|30|10|20\%|
|Summer|50|30|0\%|
|Autumn|20|15|30\%|
|Winter|40|10|10\%|

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|Winter| 180.00 |
|Hotel|  |
|5|  |

[/task-description]
[tests]
[test]
[input]
Winter
Hotel
5
[/input]
[output]
180.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Cinema
[code-task title="Cinema" taskId="pb-js-Conditions-Advanced-Cinema" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numberOperations(typeOfMovie, rows, seatsPerRow) {
    // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => code(...input);
```
[/code-adapter]
[task-description]
# Description
Calculați **prețul** pentru toate biletele pentru un film cinematografic:

*Citiți **tipul filmului**, **rândurile** și **locurile pe rând** din cinematograf
*Tipăriți **prețul total** pentru toate locurile **formatate** la a doua cifră după punctul zecimal


  | **Type** | **Price** |
| --- | --- |
|Premiere|12.00|
|Normal|7.50|
|Discount|5.00|

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|Normal| 810.00 |
|12|  |
|9|  |

[/task-description]
[tests]
[test]
[input]
Normal
12
9
[/input]
[output]
810.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Operations with Numbers
[code-task title="Operations with Numbers" taskId="pb-js-Conditions-Advanced-Operation-With-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function operationswithNumbers(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Scrieți un program pentru a aplica un operator pentru două numere date:

* Citiți doi numere întregi și operatorul matematic de pe consolă. 
* Operatorul aritmetic ar putea fi: "+", "-", "/", "%" și "*"
* IRezultatul trebuie să fie în următorul **format**: `{N1} {operator} {N2} = {result}`

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|12| 12 + 10 = 22 |
|10|  |
|\+|  |

[/task-description]
[tests]
[test]
[input]
10
12
\+
[/input]
[output]
10 + 12 = 22
[/output]
[/test]
[test]
[input]
12
10
\-
[/input]
[output]
12 \- 10 = 2
[/output]
[/test]
[test]
[input]
10
12
\*
[/input]
[output]
10 \* 12 = 120
[/output]
[/test]
[test]
[input]
6
2
\/
[/input]
[output]
6 \/ 2 = 3
[/output]
[/test]
[test]
[input]
5
2
\%
[/input]
[output]
5 \% 2 = 1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: ATM
[code-task title="ATM" taskId="pb-js-Conditions-Advanced-ATM" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function ATM(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a simula o retragere de numerar de la bancomat

* Citiți: **balance**, **withdraw** și **limit**
* Imprimați `The withdraw was successful.` Dacă soldul este suficient
* Imprimați `The daily limit was exceeded.` Dacă limita este depășită
* Imprimați `Insufficient availability.` dacă soldul nu este sufficient

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|420| The withdraw was successful. |
|20|  |
|25|  |

  | **Intrare** | **Ieșire** |
| --- | --- |
|10| The daily limit was exceeded. |
|50| Insufficient availability. |
|20|  |

[/task-description]
[tests]
[test]
[input]
420
20
25
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Biggest of Five Numbers
[code-task title="Biggest of Five Numbers" taskId="pb-js-Conditions-Advanced-Biggest-of-Five-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function biggestOfFiveNumbers(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a găsi cel mai mare dintre 5 numere
* Citiți **5 numere întregi**
* Imprimați cel mai mare**număr.


# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|\-1| \-1 |
|\-2|  |
|\-3|  |
|\-4|  |
|\-5|  |


[/task-description]
[tests]
[test]
[input]
1
2
3
4
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

