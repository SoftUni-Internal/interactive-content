# Temă pentru acasă

[slide]
# Problemă și soluție: Sum Digits


[vimeo-video]
[stream language="EN" videoId="488456453/0886f00db0" default /]
[stream language="RO" videoId="488456453/0886f00db0"  /]
[/video-vimeo]



[code-task title="Sum Digits" taskId="pb-js-05-p-01" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumDigits(input) {
    // Write your code here
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

[slide]
# Problemă și soluție: Favorite Book

[vimeo-video]
[stream language="EN" videoId="488456416/28fe2f16f1" default /]
[stream language="RO" videoId="488456416/28fe2f16f1"  /]
[/video-vimeo]



[code-task title="Favorite Book" taskId="pb-js-05-p-02" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function favoriteBook(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care îndeplinește următoarele cerințe: 

* Citește **titlul cărții** de pe consolă
* Primește titluri de cărți până când se ajunge la o condiție de tipul **cartea cu același titlu ca și prima înregistrare**
* Tipărește `Book found! Attempts: {attemptsCount}` și se oprește imediat după aceea

# Example
| **Input** | **Output** |
| --- | --- |
|Alice in Wonderland| Book Found! Attempts: 3 |
|Winnie the Pooh||
|Peter Pan| |
|Alice in Wonderland| |


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
Book found! Attempts: 4
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problemă: Find Min and Max
[code-task title="Find Min and Max" taskId="pb-js-05-p-03" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function minAndMax(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care să îndeplinească următoarele cerințe: 

* Primește numere întregi până când ajungem la **sfârșit** (**"END"**)
* Printează **cel mai mare** și cel mai **mic** număr întreg

# Exemplu
  | **Date de intrare** | **Date de ieșire** |
| --- | --- |
|10| Max number: 304 |
|20|Min number: 0|
|304| |
|0| |
|50| |

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
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problemă: Special Number
[code-task title="Special Number" taskId="pb-js-05-p-04" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function specialNumber(input) {
  // Write your code here 
}
```
[/code-editor]
[task-description]
# Descriere
Numărul special este numărul **divizibil la toate cifrele sale componente** fără rest. 

Scrieți un program cu următoarele caracteristici: 
* Primește un număr întreg
* **Tipărește** `{num} is special`, dacă numărul este special
* Altfel, printează `{num} is not special` (numărul nu este special)

# Exemplu
| **Date de intrare** | **Date de ieșire** |
| --- | --- |
|23| 23 nu este un număr special |


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
43
[/input]
[output]
43 is not special
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problemă: Special Bonus
[code-task title="Special Bonus" taskId="pb-js-05-p-05" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function specialBonus(nums) {
  // Write your code here
}

```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care să îndeplinească următoarele sarcini: 

* Citește un număr **intreg** de pe consolă
* Continuă să citească numerele întregi până când găsește **un număr care este același ca primul număr introdus**
* Atunci când găsește această valoare, crește valoarea numărului **anterior** **acestuia** cu 100% și o tipărește

# Exemplu
| **Date de intrare** | **Date de ieșire** |
| --- | --- |
|25| 60 |
|20||
|30| |
|25| |

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
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problemă: Sequence 2k + 1
[code-task title="Sequence 2k + 1" taskId="pb-js-05-p-06" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function specialBonus(nums) {
  // Write your code here
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

[slide]
# Problemă: Account Balance
[code-task title="Account Balance" taskId="pb-js-05-p-07" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function accountBalance(input) {
  // Write your code here
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

[slide]
# Rezultatele problemelor din tema pentru acasă

[tasks-results /]

[/slide]