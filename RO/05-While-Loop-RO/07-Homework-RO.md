// sectionId: "Javascript::Programming-Basics::While-Loop::Homework"

# Temă pentru acasă

[slide hideTitle]
# Problemă și soluție: Sum Digits


[vimeo-video]
[stream language="EN" videoId="488456453/0886f00db0" default /]
[stream language="RO" videoId="488456453/0886f00db0"  /]
[/video-vimeo]



[code-task title="Sum Digits" taskId="pb-js-while-loop-Sum-Digits" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumDigits(input) {
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
Creați un program care trebuie să îndeplinească urmăatoarele cerințe:

* Citește un număr de pe consolă
* **Calculează suma** **cifrelor** care compun acest număr
* Tipărește suma cifrelor

# Exemplu
  | **Date de intrare** | **Date de ieșire** |
| --- | --- |
|sumDigits(5634)| 18 |

[/task-description]
[tests]
[test]
[input]
sumDigits(123456)
[/input]
[output]
21
[/output]
[/test]
[test]
[input]
sumDigits(489451)
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
sumDigits(8498498)
[/input]
[output]
50
[/output]
[/test]
[test]
[input]
sumDigits(000000)
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
sumDigits(5684915)
[/input]
[output]
38
[/output]
[/test]
[test]
[input]
sumDigits(8)
[/input]
[output]
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă și soluție: Favorite Book

[vimeo-video]
[stream language="EN" videoId="488456416/28fe2f16f1" default /]
[stream language="RO" videoId="488456416/28fe2f16f1"  /]
[/video-vimeo]



[code-task title="Favorite Book" taskId="pb-js-while-loop-Favorite-Book" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function favoriteBook(favoditeBook, books) {
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
Creați un program care îndeplinește următoarele cerințe: 

* Primește numele cărții preferate
* Primește numele unor cărți, până ce ajunge la cartea preferată
* Imprimă `Invalid book: {book name}` pentru toate cărțile nevalide
* Imprimă `Book found!`, atunci când găsește cartea și programul se oprește.

# Exemplu
  | **Date de intrare** | **Date de ieșire** |
| --- | --- |
| favoriteBook('Alice in Wonderland', ['Winnie the Pooh', 'Peter Pan', 'Alice in Wonderland']) | Invalid book: Winnie the Pooh |
||Invalid book: Peter Pan|
||Book found!|

[/task-description]
[tests]
[test]
[input]
favoriteBook('Fav Book', ['Book1', 'Book2', 'Book3', 'Fav Book'])
[/input]
[output]
Invalid book: Book1
Invalid book: Book2
Invalid book: Book3
Book found!
[/output]
[/test]
[test]
[input]
favoriteBook('B', ['Book1', 'Book2', 'B', 'Fav Book'])
[/input]
[output]
Invalid book: Book1
Invalid book: Book2
Book found!
[/output]
[/test]
[test]
[input]
favoriteBook('AB', ['Hello', 'AB', 'B', 'Book'])
[/input]
[output]
Invalid book: Hello
Book found!
[/output]
[/test]
[test]
[input]
favoriteBook('AD', ['SE', 'GFG', 'B', 'RTE', 'AD'])
[/input]
[output]
Invalid book: SE
Invalid book: GFG
Invalid book: B
Invalid book: RTE
Book found!
[/output]
[/test]
[test]
[input]
favoriteBook('AD', ['dfg', 'GFG', 'AD', 'dfg', 'dfg'])
[/input]
[output]
Invalid book: dfg
Invalid book: GFG
Book found!
[/output]
[/test]
[test]
[input]
favoriteBook('RD', ['sdf', 'gfh', 'er', 'RD', 'dfg'])
[/input]
[output]
Invalid book: sdf
Invalid book: gfh
Invalid book: er
Book found!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Find Min and Max
[code-task title="Find Min and Max" taskId="pb-js-while-loop-Find-Min-And-Max" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function minAndMax(input) {
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
Creați un program care să îndeplinească următoarele cerințe: 

* Primește numere întregi până când ajungem la **sfârșit** **END**
* Printează **cel mai mare** și cel mai **mic** număr întreg

# Exemplu
  | **Date de intrare** | **Date de ieșire** |
| --- | --- |
| minAndMax(['10', '20', '304', '0', '50', 'END'])| Max number: 304 |
||Min number: 0|


[/task-description]
[tests]
[test]
[input]
minAndMax(['5', '10', '66', '456', '-4', '1', '0', 'END'])
[/input]
[output]
Max number: 456
Min number: -4
[/output]
[/test]
[test]
[input]
minAndMax(['3', '15', '56', '32', '7', '9', 'END'])
[/input]
[output]
Max number: 56
Min number: 3
[/output]
[/test]
[test]
[input]
minAndMax(['-34', '-4', '-12', '-45', 'END'])
[/input]
[output]
Max number: -4
Min number: -45
[/output]
[/test]
[test]
[input]
minAndMax(['0', '1', '4', '5', 'END'])
[/input]
[output]
Max number: 5
Min number: 0
[/output]
[/test]
[test]
[input]
minAndMax(['10', '20', '304', '0', '50', '400', 'END', '1000'])
[/input]
[output]
Max number: 400
Min number: 0
[/output]
[/test]
[test]
[input]
minAndMax(['10', '20', '304', '-5', '50', 'END', '400', '1000'])
[/input]
[output]
Max number: 304
Min number: -5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Special Number
[code-task title="Special Number" taskId="pb-js-while-loop-Special-Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function specialNumber(input) {
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
Numărul special este numărul **divizibil la toate cifrele sale componente** fără rest. 

Creați un program cu următoarele caracteristici: 

* Primește un șir

* **Tipărește** `{num} is special`, dacă numărul este special

* Altfel, printează `{num} is not special` (numărul nu este special)

# Exemplu
| **Date de intrare** | **Date de ieșire** |
| --- | --- |
| specialNumber(23)| 23 is not special |


[/task-description]
[tests]
[test]
[input]
specialNumber(55)
[/input]
[output]
55 is special
[/output]
[/test]
[test]
[input]
specialNumber(22)
[/input]
[output]
22 is special
[/output]
[/test]
[test]
[input]
specialNumber(73)
[/input]
[output]
73 is not special
[/output]
[/test]
[test]
[input]
specialNumber(41)
[/input]
[output]
41 is not special
[/output]
[/test]
[test]
[input]
specialNumber(32)
[/input]
[output]
32 is special
[/output]
[/test]
[test]
[input]
specialNumber(454232)
[/input]
[output]
4545232 is not special
[/output]
[/test]
[test]
[input]
specialNumber(88)
[/input]
[output]
88 is special
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Special Bonus
[code-task title="Special Bonus" taskId="pb-js-while-loop-Special-Bonus" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function specialBonus(n, numbers) {
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
Creați un program care să îndeplinească următoarele sarcini: 

* Citește un număr **intreg** de pe consolă
* Continuă să citească numerele întregi până când găsește **un număr care este același ca primul număr introdus**
* Atunci când găsește această valoare, crește valoarea numărului **anterior** **acestuia** cu 100% și o tipărește

# Exemplu
| **Date de intrare** | **Date de ieșire** |
| --- | --- |
| specialBonus(25, ['20', '30', '25']) | 60 |


[/task-description]
[tests]
[test]
[input]
specialBonus(20, ['5', '5', '20'])
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
specialBonus(20, ['20'])
[/input]
[output]
40
[/output]
[/test]
[test]
[input]
specialBonus(45, ['34', '23', '45456', '45', '23'])
[/input]
[output]
90912
[/output]
[/test]
[test]
[input]
specialBonus(20, ['5675', '5467', '45646', '20', '65756', '2567563'])
[/input]
[output]
91292
[/output]
[/test]
[test]
[input]
specialBonus(1234, ['20', '576', '5675', '25673', '5675', '1234'])
[/input]
[output]
11350
[/output]
[/test]
[test]
[input]
specialBonus(456, ['20', '45', '2353', '345', '56', '456', '23'])
[/input]
[output]
112
[/output]
[/test]
[test]
[input]
specialBonus(11, ['345', '546546756', '11', '456', '456'])
[/input]
[output]
1093093512
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Sequence 2k + 1
[code-task title="Sequence 2k + 1" taskId="pb-js-while-loop-Sequence-2k-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sequence(input) {
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
Creați un program care: 

* Citește un număr **n** din consolă
* Printează o **secvență** de numere, care sunt **mai mici sau egale cu n** (**<= n**) și satisfac următoarea condiție:
* Fiecare număr este egal cu numărul anterior înmulțit cu doi (**2**) la care se adaugă o unitate (**1**)

# Exemplu
  | **Date de intrare** | **Date de ieșire** |
| --- | --- |
| sequence(8) | 1 |
||3|
|| 7|
|| |

[/task-description]
[tests]
[test]
[input]
sequence(1)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
sequence(7)
[/input]
[output]
1
3
7
[/output]
[/test]
[test]
[input]
sequence(100)
[/input]
[output]
1
3
7
15
31
63
[/output]
[/test]
[test]
[input]
sequence(511)
[/input]
[output]
1
3
7
15
31
63
127
255
511
[/output]
[/test]
[test]
[input]
sequence(10000)
[/input]
[output]
1
3
7
15
31
63
127
255
511
1023
2047
4095
8191
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Account Balance
[code-task title="Account Balance" taskId="pb-js-while-loop-Account-Balance" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function accountBalance(input) {
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
Creați un program cu următoarele sarcini: 

* Primește **suma de bani** pentru fiecare tranzacție până când ajungem la sfârșit (`END`)
* **Adună** banii la **sold** și **tipărește*: `Suplimentare: {money}`, formatează `money` până la a **doua zecimală** după virgulă
* După `END` calculează și **printează** soldul total: `Total: {balance}`, formatează `balance` până la a **doua zecimală** după virgulă

# Exemplu
  | **Date de intrare* | **Date de ieșire** |
| --- | --- |
| accountBalance(['5.51', '69.42', '100', 'END'])| Increase: 5.51 |
||Increase: 69.42|
||Increase: 100.00 |
|| Total: 174.93 |


[/task-description]
[tests]
[test]
[input]
accountBalance(['5.50', '60.23', '100', 'END'])
[/input]
[output]
Increase: 5.50
Increase: 60.23
Increase: 100.00
Total: ‭165.73‬
[/output]
[/test]
[test]
[input]
accountBalance(['69.42', '100', '123', '234', 'END'])
[/input]
[output]
Increase: 69.42
Increase: 100.00
Increase: 123.00
Increase: 234.00
Total: 526.42
[/output]
[/test]
[test]
[input]
accountBalance(['5675', '5675.42', '5675', 'END'])
[/input]
[output]
Increase: 5675.00
Increase: 5675.42
Increase: 5675.00
Total: 17025.42
[/output]
[/test]
[test]
[input]
accountBalance(['45641', '0', '4564', '345', 'END', '465'])
[/input]
[output]
Increase: 45641.00
Increase: 0.00
Increase: 4564.00
Increase: 345.00
Total: 50550.00
[/output]
[/test]
[test]
[input]
accountBalance(['5.51', '345345', '69.42', '100', 'END', 'END'])
[/input]
[output]
Increase: 5.51
Increase: 345345.00
Increase: 69.42
Increase: 100.00
Total: 345519.93
[/output]
[/test]
[test]
[input]
accountBalance(['1', '1', '0.55', '0.457', 'END'])
[/input]
[output]
Increase: 1.00
Increase: 1.00
Increase: 0.55
Increase: 0.46
Total: 3.01
[/output]
[/test]
[test]
[input]
accountBalance(['345', '3.42', '543.3', 'END', '34'])
[/input]
[output]
Increase: 345.00
Increase: 3.42
Increase: 543.30
Total: 891.72
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

