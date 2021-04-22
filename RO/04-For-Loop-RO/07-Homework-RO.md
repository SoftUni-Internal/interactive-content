// sectionId: "Javascript::Programming-Basics::For-Loop::Homework"

# Teme Pentru Acasă

[slide hideTitle]

# Problemă: Calculate Month Salary

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
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```

[/code-adapter]
[task-description]

# Descriere

Creați un program care calculează și imprimă salariul total:

- Veți primi numărul de zile lucrătoare pentru luna curentă și salariul pe zi (într-o matrice) - numere întregi
- Calculați salariul lunar al unui angajat
- Imprimați rezultatul pe consolă

# Exemplu

| **Intrare**                             | **Ieșire** |
| --------------------------------------- | ---------- |
| calculateMonthSalary(2, [100, 200]) | 300        |
| calculateMonthSalary(3, [200, 240, 130]) | 570 |

[/task-description]
[tests]
[test open]
[input]
calculateMonthSalary(2, [100, 200])
[/input]
[output]
300
[/output]
[/test]
[test open]
[input]
calculateMonthSalary(3, [200, 240, 130])
[/input]
[output]
570
[/output]
[/test]
[test]
[input]
calculateMonthSalary(2, [100, 300])
[/input]
[output]
400
[/output]
[/test]
[test]
[input]
calculateMonthSalary(3, [100, 300, 50])
[/input]
[output]
450
[/output]
[/test]
[test]
[input]
calculateMonthSalary(5, [100, 100, 100, 100, 100])
[/input]
[output]
500
[/output]
[/test]
[test]
[input]
calculateMonthSalary(3, [10, 20, 30])
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

# Problemă: Number Sequence

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
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```

[/code-adapter]
[task-description]

# Descriere

Creați un program care găsește **cel mai mare** și **cel mai mic** număr dintr-o anumită secvență:

- Veți primi **n** reprezentând numărul de numere care trebuie procesate
- Găsiți numerele **max** și **min**
- Imprimați-le pe consolă

# Exemplu

| **Intrare**| **Ieșire** |
| ---| --- |
| numberSequence(5, [10, 304, 0, 0, 50]) | Max number: 304 |
|                                        | Min number: 0   |



| **Intrare** | **Ieșire**     |
| --- | --- |
| numberSequence(4, [15, 155, 34, 71]) | Max number: 155 |
|                                      | Min number: 15  |

[/task-description]
[tests]
[test open]
[input]
numberSequence(5, [10, 304, 0, 0, 50])
[/input]
[output]
Max number: 304
Min number: 0
[/output]
[/test]
[test open]
[input]
numberSequence(4, [15, 155, 34, 71]) 
[/input]
[output]
Max number: 155
Min number: 15
[/output]
[/test]
[test]
[input]
numberSequence(4, [100, 200, 0, 300])
[/input]
[output]
Max number: 300
Min number: 0
[/output]
[/test]
[test]
[input]
numberSequence(1, [100])
[/input]
[output]
Max number: 100
Min number: 100
[/output]
[/test]
[test]
[input]
numberSequence(3, [-1, -2, 0])
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

# Problemă cu Soluție: Power Of Numbers

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-37-solution-power-of-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Power Of Numbers" taskId="pb-js-for-loop-Power-Of-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function powerOfNumbers(p, n) {
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

Creați un program care calculează și imprimă un anumit număr la o putere dată:

- Primiți **p** - puterea și **n** - numărul

- Tipăriți rezultatul lui **n** la puterea **p**

- Nu utilizați **Math.Pow()** - nu reprezintă obiectivul exercițiului nostru

# Exemplu

| **Intrare** | **Ieșire** |
| ----------- | ---------- |
| powerOfNumbers(5, 2)      | 32         |
| powerOfNumbers(5, 5)      | 3125       |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
powerOfNumbers(5, 2)  
[/input]
[output]
32
[/output]
[/test]
[test open]
[input]
powerOfNumbers(5, 5)
[/input]
[output]
3125
[/output]
[/test]
[test]
[input]
powerOfNumbers(7, 4)
[/input]
[output]
16384
[/output]
[/test]
[test]
[input]
powerOfNumbers(12, 3)
[/input]
[output]
531441
[/output]
[/test]
[test]
[input]
powerOfNumbers(7, 3)
[/input]
[output]
2187
[/output]
[/test]
[test]
[input]
powerOfNumbers(3, 8)
[/input]
[output]
512
[/output]
[/test]
[test]
[input]
powerOfNumbes(8, 2)
[/input]
[output]
256
[/output]
[/test]
[test]
[input]
powerOfNumbers(5, 3)
[/input]
[output]
243
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problemă: Equal Pairs

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
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```

[/code-adapter]
[task-description]

# Descriere

Creați un program care verifică dacă suma perechilor din secvență este aceeași:

- Primiți numărul **n** și **n perechi** de numere
- Tipăriți "**Yes, value=**\{**sum**\}", dacă **suma tuturor** perechilor este **aceeași**
- **În caz contrar**, imprimați "**No, maxdiff=**\{**diff**\}"
- **Maxdiff** este **diferența maximă** dintre suma a două perechi

# Exemplu

| **Intrare**                           | **Ieșire**     |
| ------------------------------------- | -------------- |
| equalPairs(2, [-1, 0, 0, -1]) | Yes, value=\-1 |
| equalPairs(2, [1, 2, 0, 1])           | No, maxdiff=2  |

[/task-description]
[tests]
[test open]
[input]
equalPairs(2, [-1, 0, 0, -1])
[/input]
[output]
Yes, value=\-1
[/output]
[/test]
[test open]
[input]
equalPairs(2, [1, 2, 0, 1])
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
equalPairs(2, [1, 2, 0, 1])
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
equalPairs(3, [1, 2, 0, 3, 4, -1])
[/input]
[output]
Yes, value=3
[/output]
[/test]
[test]
[input]
equalPairs(2, [1, 2, 2, 2])
[/input]
[output]
No, maxdiff=1
[/output]
[/test]
[test]
[input]
equalPairs(4, [1, 1, 3, 1, 2, 2, 0, 0])
[/input]
[output]
No, maxdiff=4
[/output]
[/test]
[test]
[input]
equalPairs(1, [5, 5])
[/input]
[output]
Yes, value=10
[/output]
[/test]
[test]
[input]
equalPairs(2, [-1, 0, 0, -1])
[/input]
[output]
Yes, value=-1
[/output]
[/test]
[test]
[input]
equalPairs(2, [-1, 2, 0, -1])
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
equalPairs(8, [5, 5, 70, -60, 3, 7, 2, 8, 20, -10, 15, -5, 0, 10, 10, 0])
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

# Problemă: ZigZag Sum

[code-task title="ZigZag Sum" taskId="pb-js-for-loop-Zig-Zag-Sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function zigZagSum(n, numbers) {
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

Creați un program care calculează și imprimă suma unei secvențe în zigzag:

- Primiți **n** - numărul de numere din intrare
- Procesați **n numere**
- Pentru fiecare linie **pară** **se adaugă** numărul la rezultat
- Pentru fiecare linie **impară** linie **se scade** numărul din rezultat
- **Tipăriți** rezultatul

# Exemplu

| **Intrare**                | **Ieșire** |
| -------------------------- | ---------- |
| zigZagSum(2, [10, 20]) | 10         |
| zigZagSum(2, [5, 5])   | 0          |

[/task-description]
[tests]
[test open]
[input]
zigZagSum(2, [10, 20])
[/input]
[output]
10
[/output]
[/test]
[test open]
[input]
zigZagSum(2, [5, 5])
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
zigZagSum(4, [20, 20, 20, 20])
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
zigZagSum(2, [10, 20])
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
zigZagSum(5, [213, 645, 234, 547, 3])
[/input]
[output]
742
[/output]
[/test]
[test]
[input]
zigZagSum(7, [3, 4, 3, 2, 5, 345, 657])
[/input]
[output]
317
[/output]
[/test]
[test]
[input]
zigZagSum(8, [45, 5, 654, 4, 5, 345, 123, 2])
[/input]
[output]
471
[/output]
[/test]
[test]
[input]
zigZagSum(3, [3453, 456456, 547546])
[/input]
[output]
94543
[/output]
[/test]
[test]
[input]
zigZagSum(5, [4564, 345, 456, 4563, 234])
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

# Problemă: Divide Without Remainder

[code-task title="Divide Without Remainder" taskId="pb-js-for-loop-Divide-Without-Reminder" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function divideWithoutRemainder(n, numbers) {
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
Creați un program care găsește câte numere dintr-o secvență sunt divizibile fără rest:

- Primiți un număr `n` și **n** numere după acesta

- Calculați **procentul** numerelor care pot fi împărțite **fără rest folosind 2, 3 și 4 ca divizori**

- Imprimați procentele pentru cei trei divizori, **formatate** la a doua cifră după punctul zecimal

# Exemplu

| **Intrare**                                | **Ieșire** |
|   ---      |    --- |
| divideWithoutRemainder(3, [3, 6, 9]) | 33.33\%    |
|                                            | 100.00\%   |
|                                            | 0.00\%     |

| **Intrare**  | **Ieșire** |
|   ---      |    --- |
| divideWithoutRemainder(2, [2, 11, 4]) | 100.00\%   |
|                                            | 0.00\%     | 
|                                            | 50.00\%    |

[/task-description]
[tests]
[test open]
[input]
divideWithoutRemainder(3, [3, 6, 9])
[/input]
[output]
33.33\%
100.00\%
0.00\%
[/output]
[/test]
[test open]
[input]
divideWithoutRemainder(2, [2, 11, 4])
[/input]
[output]
100.00\%
0.00\%
50.00\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(3, [12, 27, 6])
[/input]
[output]
66.67\%
100.00\%
33.33\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(5, [34, 45, 654, 76, 56])
[/input]
[output]
80.00\%
40.00\%
40.00\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(6, [34, 453, 45, 654, 76, 56])
[/input]
[output]
66.67\%
50.00\%
33.33\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(7, [34, 453, 45, 654, 76, 2, 56])
[/input]
[output]
71.43\%
42.86\%
28.57\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(8, [34, 0, 453, 45, 654, 76, 2, 56])
[/input]
[output]
75.00\%
50.00\%
37.50\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(9, [34, 0, 453, 45, 2342, 654, 76, 2, 56])
[/input]
[output]
77.78\%
44.44\%
33.33\%
[/output]
[/test]
[test]
[input]
divideWithoutRemainder(10, [34, 12, 0, 453, 45, 2342, 654, 76, 2, 56])
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

# Problemă: Vowel Sum

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
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```

[/code-adapter]
[task-description]

# Descriere

Creați un program care calculează suma vocalelor într-o secvență, pe baza informațiilor date:

- Veți primi numărul **n** - numărul de caractere pe care programul urmează să le primească

- Dacă caracterul este o vocală, se adaugă **valoarea sa** la rezultat

| **character** | **a** | **e** | **i** | **o** | **u** |
| :-----------: | :---: | :---: | :---: | :---: | :---: |
|   **value**   |   1   |   2   |   3   |   4   |   5   |

- Imprimați rezultatul

# Exemplu

| **Intrare**             | **Ieșire** |
| ----------------------- | ---------- |
| vowelSum(2, ['a', 'g']) | 1          |
| vowelSum(3, ['o', 'k', 'e']) | 6     |

[/task-description]
[tests]
[test open]
[input]
vowelSum(2, ['a', 'g'])
[/input]
[output]
1
[/output]
[/test]
[test opne]
[input]
vowelSum(3, ['o', 'k', 'e'])
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
vowelSum(2, ['i', 'u'])
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
vowelSum(5, ['a', 'u', 'n', 'm', 's'])
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
vowelSum(1, ['a'])
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
vowelSum(8, ['a', 'e', 'i', 'o', 'u', 'a', 'a', 's'])
[/input]
[output]
17
[/output]
[/test]
[test]
[input]
vowelSum(5, ['a', 'g', 'c', 'q', 'i'])
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
vowelSum(6, ['a', 'e', 'c', 'q', 'i', 'u'])
[/input]
[output]
11
[/output]
[/test]
[test]
[input]
vowelSum(7, ['a', 'e', 'c', 'q', 'i', 'u', 'o'])
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

# Problemă: Rollercoaster

[code-task title="Rollercoaster" taskId="pb-js-for-loop-Rollercoaster" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function rollercoaster(input) {
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

Creați un program care verifică dacă un rollercoaster poate porni:

Primele trei numere din intrare sunt următoarele: 
  - numărul de **locuri** 

  - **vârsta minimă a pasagerilor**

  - **numărul de persoane** care stau la coadă 

- Toate celelalte numere reprezintă **vârsta** fiecărei persoane care stă la coadă

- Dacă toate locurile pot fi ocupate, programul tipărește: "**The rollercoaster departs**"

- În orice alt caz, tipărește: "**Waiting...**"

# Exemplu

| **Intrare**                                 | **Ieșire**                   |
| ------------------------------------------- | ---------------------------- |
| rollercoaster([2, 10, 2, 15, 24]) | The rollercoaster departs |
| rollercoaster([3, 15, 1, 23])       | Waiting...                   |

[/task-description]
[tests]
[test open]
[input]
rollercoaster([2, 10, 2, 15, 24])
[/input]
[output]
The rollercoaster departs
[/output]
[/test]
[test open]
[input]
rollercoaster([3, 15, 1, 23])
[/input]
[output]
Waiting...  
[/output]
[/test]
[test]
[input]
rollercoaster([2, 25, 5, 10, 15, 18, 5, 30])
[/input]
[output]
Waiting...
[/output]
[/test]
[test]
[input]
rollercoaster([4, 18, 10, 15, 57, 14, 35, 68, 45, 23, 14, 24, 26])
[/input]
[output]
The rollercoaster departs
[/output]
[/test]
[test]
[input]
rollercoaster([3, 21, 5, 25, 45, 34, 12, 24])
[/input]
[output]
The rollercoaster departs
[/output]
[/test]
[test]
[input]
rollercoaster([3, 10, 5, 10, 15, 18, 5, 30])
[/input]
[output]
The rollercoaster departs
[/output]
[/test]
[test]
[input]
rollercoaster([10, 10, 5, 12, 9, 8, 1, 23])
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

# Problemă cu Soluție: Multiply

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-38-39-solution-multiply-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Multiply" taskId="pb-js-for-loop-Multiply" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function multiply(input) {
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

Creați un program care înmulțește un număr dat cu toate numerele din intervalul **1**-**10**:

- Veți primi numărul `n` - numărul care trebuie înmulțit

- Scrieți o buclă for care imprimă: "\{**n**\} **x** \{**i**\} **=** \{**result**\}"

- Valoarea **i** reprezintă numerele de la **1 la 10 (inclusiv)**

# Exemplu

| **Intrare** | **Ieșire**  |
| ----------- | ----------- |
| multiply(2) | 2 x 1 = 2   |
|             | 2 x 2 = 4   |
|             | 2 x 3 = 6   |
|             | 2 x 4 = 8   |
|             | 2 x 5 = 10  |
|             | 2 x 6 = 12  |
|             | 2 x 7 = 14  |
|             | 2 x 8 = 16  |
|             | 2 x 9 = 18  |
|             | 2 x 10 = 20 |


| **Intrare**   | **Ieșire**   |
| ----------- | ----------- |
| multiply(5) | 5 x 1 = 5   |
|             | 5 x 2 = 10  |
|             | 5 x 3 = 15  |
|             | 5 x 4 = 20  |
|             | 5 x 5 = 25  |
|             | 5 x 6 = 30  |
|             | 5 x 7 = 35  | 
|             | 5 x 8 = 40  |
|             | 5 x 9 = 45  |
|             | 5 x 10 = 50 |

[/task-description]
[tests]
[test open]
[input]
multiply(2)
[/input]
[output]
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
[/output]
[/test]
[test open]
[input]
multiply(5)
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
multiply(3)
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
multiply(4)
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
multiply(6)
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
multiply(7)
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
multiply(8)
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

# Problemă: Numbers, Divisible by 9

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
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```

[/code-adapter]
[task-description]

# Descriere

Creați un program care imprimă toate numerele dintr-un interval care sunt divizibile cu 9 fără rest și suma acestor numere:

- Veți primi **două numere**: intervalul care trebuie procesat 
- Pe primă linie, imprimați suma numerelor 
- Pe a doua linie, imprimați numerele divizibile cu 9 fără rest 


# Exemplu

| **Intrare**       | **Ieșire**                                  |
| --------------- | ------------------------------------------- |
| solve(100, 200) | The sum: 1683                               |
|                 | 108 117 126 135 144 153 162 171 180 189 198 |


| **Intrare**   | **Ieșire**   |
| ----------- | ----------- |
| solve(10, 20)   | The sum: 18                                 |
|                 | 18                                          |

[/task-description]
[tests]
[test open]
[input]
solve(100, 200)
[/input]
[output]
The sum: 1683
108 117 126 135 144 153 162 171 180 189 198
[/output]
[/test]
[test open]
[input]
solve(10, 20)
[/input]
[output]
The sum: 18
18
[/output]
[/test]
[test]
[input]
solve(0, 100)
[/input]
[output]
The sum: 594
0 9 18 27 36 45 54 63 72 81 90 99
[/output]
[/test]
[test]
[input]
solve(1, 50)
[/input]
[output]
The sum: 135
9 18 27 36 45
[/output]
[/test]
[test]
[input]
solve(9000, 9008)
[/input]
[output]
The sum: 9000
9000
[/output]
[/test]
[test]
[input]
solve(1000, 1300)
[/input]
[output]
The sum: 38016
1008 1017 1026 1035 1044 1053 1062 1071 1080 1089 1098 1107 1116 1125 1134 1143 1152 1161 1170 1179 1188 1197 1206 1215 1224 1233 1242 1251 1260 1269 1278 1287 1296
[/output]
[/test]
[test]
[input]
solve(500, 630)
[/input]
[output]
The sum: 8505
504 513 522 531 540 549 558 567 576 585 594 603 612 621 630
[/output]
[/test]
[test]
[input]
solve(200, 260)
[/input]
[output]
The sum: 1377
207 216 225 234 243 252
[/output]
[/test]
[test]
[input]
solve(120, 260)
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
