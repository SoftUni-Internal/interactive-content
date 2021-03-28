// sectionId: "Javascript::Programming-Basics::While-Loop::Homework"

# Teme Pentru Acasă

[slide hideTitle]
# Problemă cu Soluție: Sum Digits


[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-27-28-Sum-Digits-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



[code-task title="Sum Digits" taskId="pb-js-while-loop-Sum-Digits" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumDigits(input) {
  // Write your code here
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
Creați un program care adună toate cifrele unui număr dat:

* Veți primi un număr de pe consolă
* **Calculați suma cifrelor** care compun acest număr
* Tipăriți suma cifrelor

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|sumDigits(5634)| 18 |
|sumDigits(45666)| 27 |

[/task-description]
[tests]
[test open]
[input]
sumDigits(5634)
[/input]
[output]
18
[/output]
[/test]
[test open]
[input]
sumDigits(45666)
[/input]
[output]
27
[/output]
[/test]
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
# Problemă cu Soluție: Favorite Book

[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-30-Solution-Favourite-Book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



[code-task title="Favorite Book" taskId="pb-js-while-loop-Favorite-Book" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function favoriteBook(favoditeBook, books) {
  // Write your code here
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
Creați un program care găsește o anumită **carte preferată** dintr-o matrice de cărți: 

* Veți primi un șir, reprezentând **titlul cărții preferate**
* Apoi, veți primi titluri de cărți până ce ajungeți la cartea preferată
* Tipăriți "**Invalid book:** \{**book title**\}" pentru toate cărțile nevalide
* Imprimați "**Book found!**" când întâlniți titlul cărții preferate
* Întrerupeți bucla după ce ajungeți la cartea preferată

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
| favoriteBook('Alice in Wonderland', ['Winnie the Pooh', 'Peter Pan', 'Alice in Wonderland']) | Invalid book: Winnie the Pooh |
||Invalid book: Peter Pan|
||Book found!|

| **Intrare** | **Ieșire** |
| --- | --- |
| favoriteBook('The Hunger Games', ['Harry Potter', 'Lord of the Rings', 'The Hunger Games']) | Invalid book: Harry Potter |
|| Invalid book: Lord of the Rings |
||Book found!|

[/task-description]
[tests]
[test open]
[input]
favoriteBook('Alice in Wonderland', ['Winnie the Pooh', 'Peter Pan', 'Alice in Wonderland'])
[/input]
[output]
Invalid book: Winnie the Pooh
Invalid book: Peter Pan
Book found!
[/output]
[/test]
[test open]
[input]
favoriteBook('The Hunger Games', ['Harry Potter', 'Lord of the Rings', 'The Hunger Games'])
[/input]
[output]
Invalid book: Harry Potter
Invalid book: Lord of the Rings
Book found!
[/output]
[/test]
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
  // Write your code here
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
Creați un program care găsește **cel mai mare** și **cel mai mic** număr dintr-o secvență: 

* Veți primi numere întregi până când ajungeți la comanda **END**
* Imprimați **cel mai mare** și cel mai **mic** număr întreg

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
| minAndMax(['10', '20', '304', '0', '50', 'END'])| Max number: 304 |
||Min number: 0|


| **Intrare** | **Ieșire** |
| --- | --- |
| minAndMax(['5', '13', '145', 'END', '35', '66'])| Max number: 145 |
||Min number: 5|


[/task-description]
[tests]
[test open]
[input]
minAndMax(['10', '20', '304', '0', '50', 'END'])
[/input]
[output]
Max number: 304
Min number: 0
[/output]
[/test]
[test open]
[input]
minAndMax(['5', '13', '145', 'END', '35', '66'])
[/input]
[output]
Max number: 145
Min number: 5
[/output]
[/test]
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
  // Write your code here
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
Creați un program care verifică dacă un număr este special:

* Veți primi un număr sub formă de șir

* **Tipăriți** "\{**num**\} **is special**", dacă numărul este special

* Altfel, imprimați "\{**num**\} **is not special**" 

Numărul special este numărul **divizibil cu toate cifrele sale componente** fără rest. 

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| specialNumber('23')| 23 is not special |
| specialNumber('55')| 55 is special |

[/task-description]
[tests]
[test open]
[input]
specialNumber('23')
[/input]
[output]
23 is not special
[/output]
[/test]
[test open]
[input]
specialNumber('55')
[/input]
[output]
55 is special
[/output]
[/test]
[test]
[input]
specialNumber('22')
[/input]
[output]
22 is special
[/output]
[/test]
[test]
[input]
specialNumber('73')
[/input]
[output]
73 is not special
[/output]
[/test]
[test]
[input]
specialNumber('41')
[/input]
[output]
41 is not special
[/output]
[/test]
[test]
[input]
specialNumber('32')
[/input]
[output]
32 is special
[/output]
[/test]
[test]
[input]
specialNumber('4545232')
[/input]
[output]
4545232 is not special
[/output]
[/test]
[test]
[input]
specialNumber('88')
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
  // Write your code here
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
Creați un program care calculează punctele bonus, pe baza următoarelor reguli: 

* Veți primi un număr **întreg** **x** și o **matrice** de pe consolă
* Continuați să procesați numerele întregi din matrice până când găsiți **un număr egal cu x**
* Când îl găsiți, înmulțiți valoarea numărului **dinaintea acestuia** cu 2 și imprimați-l

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| specialBonus(25, [20, 30, 25]) | 60 |
| specialBonus(5, [3, 4, 7, 8, 5]) | 16 |


[/task-description]
[tests]
[test open]
[input]
specialBonus(25, [20, 30, 25])
[/input]
[output]
60
[/output]
[/test]
[test open]
[input]
specialBonus(5, [3, 4, 7, 8, 5])
[/input]
[output]
16
[/output]
[/test]
[test]
[input]
specialBonus(20, [5, 5, 20])
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
specialBonus(20, [20])
[/input]
[output]
40
[/output]
[/test]
[test]
[input]
specialBonus(45, [34, 23, 45456, 45, 23])
[/input]
[output]
90912
[/output]
[/test]
[test]
[input]
specialBonus(20, [5675, 5467, 45646, 20, 65756, 2567563])
[/input]
[output]
91292
[/output]
[/test]
[test]
[input]
specialBonus(1234, [20, 576, 5675, 25673, 5675, 1234])
[/input]
[output]
11350
[/output]
[/test]
[test]
[input]
specialBonus(456, [20, 45, 2353, 345, 56, 456, 23])
[/input]
[output]
112
[/output]
[/test]
[test]
[input]
specialBonus(11, [345, 546546756, 11, 456, 456])
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
  // Write your code here
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
Creați un program care imprimă o secvență de numere până la valoarea intrării date, pe baza următoarelor reguli: 

* Veți primi un număr **n** de pe consolă
* Imprimați o **secvență** de numere, care sunt **mai mici sau egale cu n** (**<= n**) și satisfac următoarea condiție:
  * fiecare număr este egal cu numărul anterior înmulțit cu **2**, la care se adaugă **1**

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
| sequence(8) | 1 |
||3|
|| 7|
|| |

 | **Intrare** | **Ieșire** |
| --- | --- |
| sequence(16) | 1 |
|| 3 |
|| 7 |
|| 15 |

[/task-description]
[tests]
[test open]
[input]
sequence(8)
[/input]
[output]
1
3
7
[/output]
[/test]
[test open]
[input]
sequence(16)
[/input]
[output]
1
3
7
15
[/output]
[/test]
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
  // Write your code here
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
Creați un program care gestionează soldul unui cont: 

* Veți primi **suma de bani** pentru fiecare tranzacție până când ajungeți la comanda **END**
* **Adunați** banii la **sold** și **tipăriți**: "**Increase:** \{**money**\}", formatați **money** până la a **doua cifră** după punctul zecimal
* După **END** calculați și **imprimați** soldul total: "**Total:** \{**balance**\}", formatați **balance** până la a **doua cifră** după punctul zecimal

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
| accountBalance(['5.51', '69.42', '100', 'END'])| Increase: 5.51 |
||Increase: 69.42|
||Increase: 100.00 |
|| Total: 174.93 |


 | **Intrare** | **Ieșire** |
| --- | --- |
| accountBalance(['55.00', '45.00', 'END']) | Increase: 55.00 |
||Increase: 45.00|
|| Total: 100.00 |

[/task-description]
[tests]
[test open]
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
[test open]
[input]
accountBalance(['55.00', '45.00', 'END'])
[/input]
[output]
Increase: 55.00
Increase: 45.00
Total: 100.00
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
