// sectionId: "Javascript-Programming-Basics-For-Loop-Homework"

# Temă de acasă

[slide hideTitle]
# Problem: Calculate Month Salary
[code-task title="Calculate Month Salary" taskId="pb-js-for-loop-Calculate-Month-Salary" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculateMonthSalary (days, salaryPerDay) {
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
Scrieți un program care:

* Primește numărul de zile lucrătoare pentru luna curentă și salariul pe zi - numere întregi
* Calculează salariul lunar al unui angajat
* Tipărește rezultatul pe consolă

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|`2, ['100', '200']`| 300 |

[/task-description]
[tests]
[test]
[input]
2
100
300
[/input]
[output]
400
[/output]
[/test]
[test]
[input]
3
100
300
50
[/input]
[output]
450
[/output]
[/test]
[test]
[input]
5
100
100
100
100
100
[/input]
[output]
500
[/output]
[/test]
[test]
[input]
3
10
20
30
[/input]
[output]
60
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Number Sequence
[code-task title="Number Sequence" taskId="pb-js-for-loop-Number-Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numberSequence (n, numbers) {
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
Scrieți un program care:

* Citește **n** reprezentând numărul de numere de citit în continuare
* Găsește numerele **max** și **min**
* Le imprimă pe consolă

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|`5, ['10', '304', '0', '0', '50']`| Max number: 304 |
||Min number: 0|

[/task-description]
[tests]
[test]
[input]
4
100
200
0
300
[/input]
[output]
Max number: 300
Min number: 0
[/output]
[/test]
[test]
[input]
1
100
[/input]
[output]
Max number: 100
Min number: 100
[/output]
[/test]
[test]
[input]
3
-1
-2
0
[/input]
[output]
Max number: 0
Min number: -2
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem and Solution: Power Of Numbers

[vimeo-video]
[stream language="EN" videoId="488453000/3f94136963" default /]
[stream language="RO" videoId="488453000/3f94136963"  /]
[/video-vimeo]


[code-task title="Power Of Numbers" taskId="pb-js-for-loop-Power-Of-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function powerOfNumbers(n, p) {
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
Scrieți un program care:

* Citește `p` - puterea și n - numărul

* Tipărește rezultatul lui `n` la puterea lui `p`

* Nu utilizați `Math.Pow()` - nu reprezintă obiectivul exercițiului nostru

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|5, 2| 32 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
4
7
[/input]
[output]
16384
[/output]
[/test]
[test]
[input]
3
12
[/input]
[output]
531441
[/output]
[/test]
[test]
[input]
3
7
[/input]
[output]
2187
[/output]
[/test]
[test]
[input]
8
3
[/input]
[output]
512
[/output]
[/test]
[test]
[input]
2
8
[/input]
[output]
256
[/output]
[/test]
[test]
[input]
3
5
[/input]
[output]
243
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Equal Pairs
[code-task title="Equal Pairs" taskId="pb-js-for-loop-Calculate-Equal-Pairs" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function equalPairs(n, numbers) {
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
Scrieți un program care:

* Citește numărul **n** și **n perechi** de numere
* Tipărește `Yes, value={sum}`, dacă **suma tuturor** perechilor este **aceeași**
* **În caz contrar**, imprimă `No, maxdiff={diff}`
* diff este **diferența maximă** în suma dintre două perechi

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|`2, ['-1', '0', '0', '-1']`| Yes, value=\-1 |

[/task-description]
[tests]
[test]
[input]
3
1
2
0
3
4
-1
[/input]
[output]
Yes, value=3
[/output]
[/test]
[test]
[input]
2
1
2
2
2
[/input]
[output]
No, maxdiff=1
[/output]
[/test]
[test]
[input]
4
1
1
3
1
2
2
0
0
[/input]
[output]
No, maxdiff=4
[/output]
[/test]
[test]
[input]
1
5
5
[/input]
[output]
Yes, value=10
[/output]
[/test]
[test]
[input]
2
-1
0
0
-1
[/input]
[output]
Yes, value=-1
[/output]
[/test]
[test]
[input]
2
-1
2
0
-1
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
8
5
5
70
-60
3
7
2
8
20
-10
15
-5
0
10
10
0
[/input]
[output]
Yes, value=10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Zig Zag Sum
[code-task title="Zig Zag Sum" taskId="pb-js-for-loop-Zig-Zag-Sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function zigZagSum(n, numbers) {
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
Scrieți un program care:

* Citește **n** - număr reprezentând cantitatea de numere de intrare
* Citeste **n numere**
* Pentru fiecare linie  **pară**  **se adaugă** numărul la rezultat
* Pentru fiecare linie  **impară** linie **se scade** numărul din rezultat
* **Tipărește** rezultatul

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|`2, ['10', '20']`| 10 |


[/task-description]
[tests]
[test]
[input]
4
20
20
20
20
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2
10
20
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
5
213
645
234
547
3
[/input]
[output]
742
[/output]
[/test]
[test]
[input]
7
3
4
3
2
5
345
657
[/input]
[output]
317
[/output]
[/test]
[test]
[input]
8
45
5
654
4
5
345
123
2
[/input]
[output]
471
[/output]
[/test]
[test]
[input]
3
3453
456456
547546
[/input]
[output]
94543
[/output]
[/test]
[test]
[input]
5
4564
345
456
4563
234
[/input]
[output]
346
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Divide Without Remainder
[code-task title="Divide Without Remainder" taskId="pb-js-for-loop-Divide-Without-Reminder" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function divideWithoutRemainder(n, numbers)) {
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
Scrieți un program care:

* Citește `n` și o **cantitate n** de numere după acesta

* Găsește **procentul** din câte dintre ele pot fi împărțite **fără un rest folosind 2, 3 și 4 ca divizori**

* Tipărește procentele pentru **p1, p2 și p3**, **formatate** la a doua cifră după virgulă

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|`3, ['3', '6', '9']`| 33.33\% |
|| 100.00\%|
||0.00\% |
|| |

[/task-description]
[tests]
[test]
[input]
3
12
27
6
[/input]
[output]
66.67\%
100.00\%
33.33\%
[/output]
[/test]
[test]
[input]
5
34
45
654
76
56
[/input]
[output]
80.00\%
40.00\%
40.00\%
[/output]
[/test]
[test]
[input]
6
34
453
45
654
76
56
[/input]
[output]
66.67\%
50.00\%
33.33\%
[/output]
[/test]
[test]
[input]
7
34
453
45
654
76
2
56
[/input]
[output]
71.43\%
42.86\%
28.57\%
[/output]
[/test]
[test]
[input]
8
34
0
453
45
654
76
2
56
[/input]
[output]
75.00\%
50.00\%
37.50\%
[/output]
[/test]
[test]
[input]
9
34
0
453
45
2342
654
76
2
56
[/input]
[output]
77.78\%
44.44\%
33.33\%
[/output]
[/test]
[test]
[input]
10
34
12
0
453
45
2342
654
76
2
56
[/input]
[output]
80.00\%
50.00\%
40.00\%
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Vowel Sum
[code-task title="Vowel Sum" taskId="pb-js-for-loop-Vowel-Sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function vowelSum(n, chars) {
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
Scrieți un program care:

* Citește `n` - numărul de caractere pe care programul urmează să le primească

* Dacă caracterul este o vocală, se adaugă caracterele `valoare` la rezultat

 | **character**      | **a** | **e**   |**i**   |**o**  |**u**  |
| :---:       |    :----:   |   :---:     |  :---:|:---:     |:---:     |
| **value**  | 1  | 2 |3 |4 |5 |


* Tipărește rezultatul

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|`2, ['a', 'g']`| 1 |


[/task-description]
[tests]
[test]
[input]
2
i
u
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
5
a
u
n
m
s
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1
a
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
8
a
e
i
o
u
a
a
s
[/input]
[output]
17
[/output]
[/test]
[test]
[input]
5
a
g
c
q
i
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
6
a
e
c
q
i
u
[/input]
[output]
11
[/output]
[/test]
[test]
[input]
7
a
e
c
q
i
u
o
[/input]
[output]
15
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Rollercoaster
[code-task title="Rollercoaster" taskId="pb-js-for-loop-Rollercoaster" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function rollercoaster(input) {
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:

* Citește numărul de **locuri** pe un rollercoaster

* **Vârsta minimă a pasagerilor**

* După aceea primește **numărul de persoane** pe coadă pentru această cursă

* Urmat de **vârsta** pentru fiecare persoană de pe coadă

* Dacă toate locurile pot fi ocupate, programul tipărește: `The rollercoaster departures` 

* În orice alt caz, tipărește: `Waiting...`

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|`['2', '10', '2', '15', '24']`| The rollercoaster departures |


[/task-description]
[tests]
[test]
[input]
2
10
2
15
24
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test]
[input]
2
25
5
10
15
18
5
30
[/input]
[output]
Waiting...
[/output]
[/test]
[test]
[input]
4
18
10
15
57
14
35
68
45
23
14
24
26
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test]
[input]
3
21
5
25
45
34
12
24
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test]
[input]
3
10
5
10
15
18
5
30
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test]
[input]
10
10
5
12
9
8
1
23
[/input]
[output]
Waiting...
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem and Solution: Multiply

[vimeo-video]
[stream language="EN" videoId="487119938/9a4818ebf0" default /]
[stream language="RO" videoId="487119938/9a4818ebf0"  /]
[/video-vimeo]

[code-task title="Multiply" taskId="pb-js-for-loop-Multiply" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function multiply(input) {
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:

* Citește `n` - un int

* Deține o buclă for care imprimă: `{n} x {i} = {result}` 

* Unde sunt numerele de la **1 la 10 (inclusiv)**

# Exemplu
  | **Intrare** | **Ieșire** |
| --- | --- |
|2| 2 x 1 = 2 |
||2 x 2 = 4 |
|| 2 x 3 = 6|
|| 2 x 4 = 8|
||2 x 5 = 10 |
|| 2 x 6 = 12|
||2 x 7 = 14 |
||2 x 8 = 16 |
|| 2 x 9 = 18|
|| 2 x 10 = 20|

[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem:  Numbers, Divisible by 9

[code-task title="Divisible by 9" taskId="pb-js-for-loop-Numbers-Divisible-by-9" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(firstNumber, secondNumber) {
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
# Description

Scrieți o funcție care obține două numere și le imprimă pe consolă, toate numerele din interval care sunt divizibile cu 9 fără rest și suma lor.

Pe prima linie tipăriți suma numerelor, iar pe următoarea linie numerele corespunzătoare cu un spațiu între ele.

# Example
| **Input** | **Output** |
| --- | --- |
|100, 200| The sum: 1683 |
||108 117 126 135 144 153 162 171 180 189 198|

[/task-description]
[tests]
[test]
[input]
100
200
[/input]
[output]
The sum: 1683
108 117 126 135 144 153 162 171 180 189 198
[/output]
[/test]
[test]
[input]
0
100
[/input]
[output]
The sum: 594
0 9 18 27 36 45 54 63 72 81 90 99
[/output]
[/test]
[test]
[input]
1
50
[/input]
[output]
The sum: 135
9 18 27 36 45
[/output]
[/test]
[test]
[input]
9000
9008
[/input]
[output]
The sum: 9000
9000
[/output]
[/test]
[test]
[input]
1000
1300
[/input]
[output]
The sum: 38016
1008 1017 1026 1035 1044 1053 1062 1071 1080 1089 1098 1107 1116 1125 1134 1143 1152 1161 1170 1179 1188 1197 1206 1215 1224 1233 1242 1251 1260 1269 1278 1287 1296
[/output]
[/test]
[test]
[input]
500
630
[/input]
[output]
The sum: 8505
504 513 522 531 540 549 558 567 576 585 594 603 612 621 630
[/output]
[/test]
[test]
[input]
200
260
[/input]
[output]
The sum: 1377
207 216 225 234 243 252
[/output]
[/test]
[test]
[input]
120
260
[/input]
[output]
The sum: 2835
126 135 144 153 162 171 180 189 198 207 216 225 234 243 252
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


