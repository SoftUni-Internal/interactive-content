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
[task-description]
# Descriere
Scrieți un program care trebuie să îndeplinească urmăatoarele cerințe:

* Citește un număr de pe consolă
* **Calculează suma** **cifrelor** care compun acest număr
* Tipărește suma cifrelor

# Exemplu
  | **Date de intrare** | **Date de ieșire** |
| --- | --- |
|5634| 18 |

[/task-description]
[tests]
[test]
[input]
123456
[/input]
[output]
21
[/output]
[/test]
[test]
[input]
489451
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
8498498
[/input]
[output]
50
[/output]
[/test]
[test]
[input]
000000
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5684915
[/input]
[output]
38
[/output]
[/test]
[test]
[input]
8
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
(input, code) => {
    let num = input[0]
    let arr = input.splice(1, input.length)
    return code(num, arr)
}
```
[/code-adapter]
[task-description]
# Descriere
Scrieți un program care îndeplinește următoarele cerințe: 

* Primește numele cărții preferate
* Primește numele unor cărți, până ce ajunge la cartea preferată
* Imprimă `Invalid book: {book name}` pentru toate cărțile nevalide
* Imprimă `Book found!`, atunci când găsește cartea și programul se oprește.

# Exemplu
  | **Date de intrare** | **Date de ieșire** |
| --- | --- |
|`'Alice in Wonderland', ['Winnie the Pooh', 'Peter Pan', 'Alice in Wonderland']`| Invalid book: Winnie the Pooh |
||Invalid book: Peter Pan|
||Book found!|

[/task-description]
[tests]
[test]
[input]
Fav Book
Book1
Book2
Book3
Fav Book
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
B
Book1
Book2
B
Fav Book
[/input]
[output]
Invalid book: Book1
Invalid book: Book2
Book found!
[/output]
[/test]
[test]
[input]
AB
Hello
AB
B
Book
[/input]
[output]
Invalid book: Hello
Book found!
[/output]
[/test]
[test]
[input]
AD
SE
GFG
B
RTE
AD
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
AD
dfg
GFG
AD
dfg
dfg
[/input]
[output]
Invalid book: dfg
Invalid book: GFG
Book found!
[/output]
[/test]
[test]
[input]
RD
sdf
gfh
er
RD
dfg
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
[task-description]
# Descriere
Scrieți un program care să îndeplinească următoarele cerințe: 

* Primește numere întregi până când ajungem la **sfârșit** `END`
* Printează **cel mai mare** și cel mai **mic** număr întreg

# Exemplu
  | **Date de intrare** | **Date de ieșire** |
| --- | --- |
|`['10', '20', '304', '0', '50', 'END']`| Max number: 304 |
||Min number: 0|


[/task-description]
[tests]
[test]
[input]
5
10
66
456
-4
1
0
END
[/input]
[output]
Max number: 456
Min number: -4
[/output]
[/test]
[test]
[input]
3
15
56
32
7
9
END
[/input]
[output]
Max number: 56
Min number: 3
[/output]
[/test]
[test]
[input]
-34
-4
-12
-45
END
[/input]
[output]
Max number: -4
Min number: -45
[/output]
[/test]
[test]
[input]
0
1
4
5
END
[/input]
[output]
Max number: 5
Min number: 0
[/output]
[/test]
[test]
[input]
10
20
304
0
50
400
END
1000
[/input]
[output]
Max number: 400
Min number: 0
[/output]
[/test]
[test]
[input]
10
20
304
-5
50
END
400
1000
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
(input, code) => code(...input);
```
[/code-adapter]
[task-description]
# Descriere
Numărul special este numărul **divizibil la toate cifrele sale componente** fără rest. 

Scrieți un program cu următoarele caracteristici: 

* Primește un șir

* **Tipărește** `{num} is special`, dacă numărul este special

* Altfel, printează `{num} is not special` (numărul nu este special)

# Exemplu
| **Date de intrare** | **Date de ieșire** |
| --- | --- |
|'23'| 23 is not special |


[/task-description]
[tests]
[test]
[input]
55
[/input]
[output]
55 is special
[/output]
[/test]
[test]
[input]
22
[/input]
[output]
22 is special
[/output]
[/test]
[test]
[input]
73
[/input]
[output]
73 is not special
[/output]
[/test]
[test]
[input]
41
[/input]
[output]
41 is not special
[/output]
[/test]
[test]
[input]
32
[/input]
[output]
32 is special
[/output]
[/test]
[test]
[input]
4545232
[/input]
[output]
4545232 is not special
[/output]
[/test]
[test]
[input]
88
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
(input, code) => {
    let num = Number(input[0])
    let arr = input.splice(1, input.length)
    return code(num, arr)
}
```
[/code-adapter]
[task-description]
# Descriere
Scrieți un program care să îndeplinească următoarele sarcini: 

* Citește un număr **intreg** de pe consolă
* Continuă să citească numerele întregi până când găsește **un număr care este același ca primul număr introdus**
* Atunci când găsește această valoare, crește valoarea numărului **anterior** **acestuia** cu 100% și o tipărește

# Exemplu
| **Date de intrare** | **Date de ieșire** |
| --- | --- |
| --- | --- |
|`25, ['20', '30', '25']`| 60 |


[/task-description]
[tests]
[test]
[input]
20
5
5
20
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
20
20
[/input]
[output]
40
[/output]
[/test]
[test]
[input]
45
34
23
45456
45
23
[/input]
[output]
90912
[/output]
[/test]
[test]
[input]
20
5675
5467
45646
20
65756
2567563
[/input]
[output]
91292
[/output]
[/test]
[test]
[input]
1234
20
567
5675
25673
5675
1234
[/input]
[output]
11350
[/output]
[/test]
[test]
[input]
456
20
45
2353
345
56
456
23
[/input]
[output]
112
[/output]
[/test]
[test]
[input]
11
345
546546756
11
456
456
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
function specialBonus(nums) {
  // Scrieți codul dvs. aici
}

```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care: 

* Citește un număr **n** din consolă
* Printează o **secvență** de numere, care sunt **mai mici sau egale cu n** (**<= n**) și satisfac următoarea condiție:
* Fiecare număr este egal cu numărul anterior înmulțit cu doi (**2**) la care se adaugă o unitate (**1**)

# Exemplu
  | **Date de intrare** | **Date de ieșire** |
| --- | --- |
|8| 1 |
||3|
|| 7|
|| |

[/task-description]
[tests]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
1
3
7
[/output]
[/test]
[test]
[input]
100
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
511
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
10000
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
[task-description]
# Descriere
Scrieți un program cu următoarele sarcini: 

* Primește **suma de bani** pentru fiecare tranzacție până când ajungem la sfârșit (`END`)
* **Adună** banii la **sold** și **tipărește*: `Suplimentare: {money}`, formatează `money` până la a **doua zecimală** după virgulă
* După `END` calculează și **printează** soldul total: `Total: {balance}`, formatează `balance` până la a **doua zecimală** după virgulă

# Exemplu
  | **Date de intrare* | **Date de ieșire** |
| --- | --- |
|5.51| Suplimentare: 5.51 |
|69.42|Suplimentare: 69.42|
|100|Suplimentare: 100.00 |
|END| Total: 174.93 |


[/task-description]
[tests]
[test]
[input]
5.50
60.23
100
END
[/input]
[output]
Suplimentare: 5.50
Suplimentare: 60.23
Suplimentare: 100.00
Total: ‭165.73‬
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

