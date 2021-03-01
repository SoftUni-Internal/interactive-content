# Temă de acasă

[slide]
# Problem: Sum Even Numbers
[code-task title="Sum Even Numbers" taskId="js-fundamentals-1-Arrays-Sum-Even-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumEvenNumbers(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care primește o serie de șiruri, analizați-le la numere și însumați doar numerele pare.

# Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
|`['1','2','3','4','5','6']`| 12 |
|`['3','5','7','9']`| 0 |
|`['2','4','6','8','10']`| 30 |

[/task-description]
[tests]
[test]
[input]
1
1
34
64
86
[/input]
[output]
184
[/output]
[/test]
[test]
[input]
1
2
3
4
5
6
10
[/input]
[output]
22
[/output]
[/test]
[test]
[input]
13
55
37
19
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
13
55
37
19
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1
156
7
18
[/input]
[output]
174
[/output]
[/test]
[test]
[input]
3
14
0
8
18
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
# Problem: Even and Odd Subtraction
[code-task title="Even and Odd Subtraction" taskId="js-fundamentals-1-Arrays-Even-and-Odd-Substraction" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function evenOdd(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți un program care calculează diferența dintre suma numerelor pare și suma numerelor impare dintr-o matrice.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['1','2','3','4','5','6']`| 3 |

# Comentarii
`2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3`


# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['3','5','7','9']`|\-24 |
|`['2','4','6','8','10']`|30 |

[/task-description]
[tests]
[test]
[input]
1
3
13
544
65
46
[/input]
[output]
508
[/output]
[/test]
[test]
[input]
74
16
65
110
[/input]
[output]
135
[/output]
[/test]
[test]
[input]
53
5
27
19
[/input]
[output]
-104
[/output]
[/test]
[test]
[input]
-53
485
328
194
[/input]
[output]
90
[/output]
[/test]
[test]
[input]
24
44
16
68
15
41
[/input]
[output]
96
[/output]
[/test]
[test]
[input]
24
14
16
-48
110
[/input]
[output]
116
[/output]
[/test]
[test]
[input]
24
-6
16
68
150
[/input]
[output]
252
[/output]
[/test]
[test]
[input]
24
84
16
68
-14
[/input]
[output]
178
[/output]
[/test]
[test]
[input]
24
84
16
68
-14
[/input]
[output]
178
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Condense Array to Number
[code-task title="Condense Array to Number" taskId="js-fundamentals-1-Arrays-Condense-Array-To-Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function condense(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți un program care primește **o serie de numere** și condensați-le prin **însumarea** cuplurilor adiacente de elemente până se obține un **număr unic**.

# Exemplu

De exemplu, dacă avem 3 elemente `[2, 10, 3]`, însumăm pe primul și al doilea element și apoi pe al doilea și al treilea  și obținem `{2 + 10, 10 + 3} = {12, 13}`, atunci însumăm din nou toate elementele adiacente și obțineți `{12+13} = {25}`.

   |**Intrare**|**Ieșire**|
| --- | --- |
|`['2','10','3']`| 25 |

# Comentarii
`2 10 3 -> 2+10 10+3 -> 12 13 -> 12 + 13 -> 25`

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['5','0','4','1','2']`| 35 |
|`['1']`| 1 |

# Sugestii

În timp ce aveți mai multe elemente în matricea `nums[]`, repetați următoarele:

- Alocați o nouă matrice `condensed[]` de dimensiunea `nums.Length-1`

- Însumați numerele din `nums[]` to `condensed[]`:
  -	`condensed[i] = nums[i] + nums[i+1]`

-	`nums[] = condensed[]`

[/task-description]
[tests]
[test]
[input]
3
4
0
3
4
0
0
0
0
1
2
[/input]
[output]
1255
[/output]
[/test]
[test]
[input]
0
0
0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-5
-10
-15
-5
[/input]
[output]
-85
[/output]
[/test]
[test]
[input]
-1
2
-3
4
-5
6
-7
8
-9
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-1
-1
-1
-1
-1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
-1
[/input]
[output]
514214
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Add or Subtract
[code-task title="Add or Subtract"taskId="js-fundamentals-1-Arrays-Add-or-Substract" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function addOrSubstract(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți o funcție, care modifică **valoarea** numerelor impare si pare într-o serie de numere.

- Dacă numărul este **par**-**adăugați** la valoarea sa poziția indexului

- Dacă numărul este **impar**-**scadeți** de la valoarea sa poziția indexului


# Ieșire

Pe prima linie tipăriți **matricea recent modificată**, pe a doua linie tipăriți suma numerelor din matricea **originală**, pe a treia linie tipăriți suma numerelor din **matricea modificată.**

   |**Intrare**|**Ieșire**|
| --- | --- |
|`['5', '15', '23', '56', '35']`| `[ 5, 14, 21, 59, 31 ]` |
|| 134|
|| 130 |
|`[-5, 11, 3, 0, 2]`| `[ 5, 14, 21, 59, 31 ]` |
|| 11|
|| 15 |

[/task-description]
[tests]
[test]
[input]
2
5
-6
32
12
[/input]
[output]
[ 2, 4, -4, 35, 16 ]
45
53
[/output]
[/test]
[test]
[input]
8
32
-112
21
37
[/input]
[output]
[ 8, 33, -110, 18, 33 ]
-14
-18
[/output]
[/test]
[test]
[input]
1
-4
312
124
-1
[/input]
[output]
[ 1, -3, 314, 127, -5 ]
432
434
[/output]
[/test]
[test]
[input]
6
15
-6
16
77
[/input]
[output]
[ 6, 14, -4, 19, 73 ]
108
108
[/output]
[/test]
[test]
[input]
18
15
122
11
7
[/input]
[output]
[ 18, 14, 124, 8, 3 ]
173
167
[/output]
[/test]
[test]
[input]
19
5
123
17
79
[/input]
[output]
[ 19, 4, 121, 14, 75 ]
243
233
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Array Rotation
[code-task title="Array Rotation"taskId="js-fundamentals-1-Arrays-Array-Rotation" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function arrayRotation(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți o funcție care primește o **matrice** și numărul de rotații pe care trebuie să le efectuați (primul element merge la sfârșit).

Primul element al matricei de intrare este numărul de rotații pe care trebuie să le efectuați, deci matricea cu care trebuie să efectuați acțiunile începe pe al doilea element al matricei inițiale.

# Ieșire

Imprimați elementele matrice rezultate, separați printr-un singur spațiu.

|**Intrare**|**Ieșire**|
| --- | --- |
|`['2','51', '47', '32', '61', '21']`| 32 61 21 51 47 |
|`['4', '32', '21', '61', '1']`| 32 21 61 1 |
|`['5', '2', '4', '15', '31']`|4 15 31 2|

[/task-description]
[tests]
[test]
[input]
1
1
47
32
61
91
[/input]
[output]
47 32 61 91 1
[/output]
[/test]
[test]
[input]
2
451
47
32
61
12
[/input]
[output]
32 61 12 451 47
[/output]
[/test]
[test]
[input]
3
31 
21
69
1
[/input]
[output]
1 31 21 69
[/output]
[/test]
[test]
[input]
4
3
21
7
1
[/input]
[output]
3 21 7 1
[/output]
[/test]
[test]
[input]
10
22
4
4
15
[/input]
[output]
4 15 22 4
[/output]
[/test]
[test]
[input]
11
15
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
0
21
69
4
[/input]
[output]
21 69 4
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Magic Sum
[code-task title="Magic Sum"taskId="js-fundamentals-1-Arrays-Magic-Sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function magicSum(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți o funcție, care imprimă toate perechile **unice** într-o matrice de numere întregi a căror **sumă este egală** cu un număr dat.

**Numărul dat va fi primul element din matrice.**

# Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
|`['8', '1', '7', '6', '2', '19', '23']`| 1 7 |
|| 6 2 |

|**Intrare**|**Ieșire**|
| --- | --- |
|`['27', '14', '20', '60', '13', '7', '19', '8']`| 14 13 |
||20 7 |
||19 8 |

|**Intrare**|**Ieșire**|
| --- | --- |
|`['6', '1', '2', '3', '4', '5', '6']`| 1 5 |
|| 2 4 |

[/task-description]
[tests]
[test]
[input]
14
1
5
3
7
7
[/input]
[output]
7 7
[/output]
[/test]
[test]
[input]
15
14
67
43
7
19
8
[/input]
[output]
7 8
[/output]
[/test]
[test]
[input]
6
43
1
23
43
45
5
[/input]
[output]
1 5
[/output]
[/test]
[test]
[input]
7
6
5
3
4
3
3
[/input]
[output]
3 4
4 3
4 3
[/output]
[/test]
[test]
[input]
46
46
3
43
[/input]
[output]
3 43
[/output]
[/test]
[test]
[input]
5
4
1
2
3
[/input]
[output]
4 1
2 3
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Rezultatele Temei de casa
[tasks-results/]

[/slide]