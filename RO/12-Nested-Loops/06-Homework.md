# Homework

[slide]
# Video

[vimeo-video startTimeInSeconds="6418" endTimeInSeconds="11286"]
[stream language="EN" videoId="345185854" /]
[stream language="RO" videoId="393622973" default /]
[/vimeo-video]

[/slide]

[slide]
# Homework
Welcome to the homework. 

Now we are going to write a couple of console applications, by which we are going to make a few more steps into programming. 

We have prepared some problems for you to solve.

Let's solve a few problems to confirm what we have learned.

[image assetsSrc="homeowrk.png" /]
[/slide]

[slide]
# Problem: Building
[code-task title="Building" taskId="28-06-p-01" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
Write a program, which:

* Prints information about apartments (odd rows), offices (even rows) and the last floor (last row)
* Apartment "A\{buildingNum\}\{apartmentNum\}"
* Office "O\{floorNum\}\{officeNum\}"
* Floor "L\{buildingNum\}\{apartmentNum\}"
* The numbers always start from 0

## Example
| **Input** | **Output** |
| --- | --- |
| 4 | L40 L41 L42 L43 L44  |
| 5| A30 A31 A32 A33 A34  |
| | O20 O21 O22 O23 O24 |
| | A10 A11 A12 A13 A14  |

[/task-description]
[tests]
[test open]
[input]
4
5
[/input]
[output]
L40 L41 L42 L43 L44
A30 A31 A32 A33 A34
O20 O21 O22 O23 O24
A10 A11 A12 A13 A14
[/output]
[/test]
[test]
[input]
5
3
[/input]
[output]
L50 L51 L52 
O40 O41 O42 
A30 A31 A32 
O20 O21 O22 
A10 A11 A12
[/output]
[/test]
[test]
[input]
2
4
[/input]
[output]
L20 L21 L22 L23 
A10 A11 A12 A13
[/output]
[/test]
[test]
[input]
1
1
[/input]
[output]
L10 
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Passwords
[code-task title="Passwords" taskId="28-06-p-02" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Receives a number **n**
* Generates **n count** passwords, which meet the following conditions:
* The first digit is an even number
* The second digit is an odd number
* The third part is the product of the first two

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | 212 236 2510 414 4312 4520 |

[/task-description]
[tests]
[test open]
[input]
5
[/input]
[output]
212 236 2510 414 4312 4520
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
212 236 414 4312 
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Magic Number
[code-task title="Magic Number" taskId="28-06-p-03" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Read a number - **n**, from the console

Find all 3-digit numbers, which form **n** as the product of the multiplication of their digits

## Example
| **Input** | **Output** |
| --- | --- |
| 3 | 113 |
|  | 131 |
|  | 311 |

[/task-description]
[tests]
[test]
[input]
3
[/input]
[output]
113
131
311
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
115
151
511
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
116
123
132
161
213
231
312
321
611
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
114
122
141
212
221
411
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Travelling
[code-task title="Travelling" taskId="28-06-p-04" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads a destination and needed budget for destination
* You must continue reading amount of money until you have enough for the destination
* If you receive the command "End" end the program

## Example
| **Input** | **Output** |
| --- | --- |
| Greece | Going to Greece! |
| 1000|  |
| 550|  |
| 450|  |

[/task-description]
[tests]
[test open]
[input]
Greece
1000
200
200
300
100
150
240
Spain
1200
300
500
193
423
End
[/input]
[output]
Going to Greece!
Going to Spain!
[/output]
[/test]
[test open]
[input]
France
2000
300
300
200
400
190
258
360
Portugal
1450
400
400
200
300
300
Egypt
1900
1000
280
300
500
End
[/input]
[output]
Going to France!
Going to Portugal!
Going to Egypt!
[/output]
[/test]
[test]
[input]
Maldives
2500
1000
340
50
50
50
50
700
700
End
[/input]
[output]
Going to Maldives!
[/output]
[/test]
[test]
[input]
Bulgaria
500
200
100
300
Austria
700
200
200
200
200
End
[/input]
[output]
Going to Bulgaria!
Going to Austria!
[/output]
[/test]
[test]
[input]
Africa
3000
1000
5000
America
2000
2500
China
4000
2000
1800
1800
End
[/input]
[output]
Going to Africa!
Going to America!
Going to China!
[/output]
[/test]
[test]
[input]
Estonia
1000
300
200
200
300
Peru
3000
2000
1000
Uganda
1000
1000
UAE
5000
3000
4000
Germany
2000
2000
Portugal
2050
3000
Portugal
2050
3000
Portugal
2050
3000
Portugal
2050
3000
Portugal
2050
3000
End
[/input]
[output]
Going to Estonia!
Going to Peru!
Going to Uganda!
Going to UAE!
Going to Germany!
Going to Portugal!
Going to Portugal!
Going to Portugal!
Going to Portugal!
Going to Portugal!
[/output]
[/test]
[test]
[input]
End
[/input]
[output]

[/output]
[/test]
[test]
[input]
France
3000
50
50
50
50
50
50
50
50
50
50
50
250
100
106
280
400
400
50
400
600
End
[/input]
[output]
Going to France!
[/output]
[/test]
[test]
[input]
Russia
15000
4500
300
300
3000
2000
4500
5000
Japan
1500.600
67.60
26.4052345
250.78
450.78945
578.76
98.60
260.84
End
[/input]
[output]
Going to Russia!
Going to Japan!
[/output]
[/test]
[test]
[input]
South Africa
2000
1000
1000
Egypt
300
150
100
20
20
20
End
[/input]
[output]
Going to South Africa!
Going to Egypt!
[/output]
[/test]
[test]
[input]
Zambia
3700.250
450.300
450.20414
600.43
640.23
824.50
1200.46
End
[/input]
[output]
Going to Zambia!
[/output]
[/test]
[test]
[input]
Albania
350.23414
45.24
23.124
123.144
145.23556
45.2345
End
[/input]
[output]
Going to Albania!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Prime Numbers
[code-task title="Prime Numbers" taskId="28-06-p-05" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
import math

# Write your code here
```
[/code-editor]
[task-description]
## Description
- Reads two integers from the console.
- Prints the prime numbers in that range.
## Example
| **Input** | **Output** |
| --- | --- |
| 1 | 1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 |
| 50|  |

[/task-description]
[tests]
[test]
[input]
1
50
[/input]
[output]
1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
[/output]
[/test]
[test]
[input]
1
20
[/input]
[output]
1 2 3 5 7 11 13 17 19
[/output]
[/test]
[test]
[input]
15
35
[/input]
[output]
17 19 23 29 31 
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Unique PIN Codes
[code-task title="Unique PIN Codes" taskId="28-06-p-06" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads 3 digits - each of them is an upper limit
* Generates unique 3 digit PIN Codes, which meet the following conditions:
    * Digits must be in the range \[1…9\]
    * The first and the third digit must be even
    * The second digit must be a prime number in the range \[2…7\]

## Example
| **Input** | **Output** |
| --- | --- |
| 3 | 222 |
| 5| 224 |
| 5| 232 |
| | 234 |
| | 252 |
| | 254 |

[/task-description]
[tests]
[test open]
[input]
3
5
5
[/input]
[output]
222
224
232
234
252
254
[/output]
[/test]
[test open]
[input]
8
8
3
[/input]
[output]
222
232
252
272
422
432
452
472
622
632
652
672
822
832
852
872
[/output]
[/test]
[test]
[input]
8
2
8
[/input]
[output]
222
224
226
228
422
424
426
428
622
624
626
628
822
824
826
828
[/output]
[/test]
[test]
[input]
4
3
5
[/input]
[output]
212
222
232
412
422
432
[/output]
[/test]
[test]
[input]
2
3
4
[/input]
[output]
212
222
232
[/output]
[/test]
[test]
[input]
9
9
9
[/input]
[output]
222
224
226
228
232
234
236
238
252
254
256
258
272
274
276
278
422
424
426
428
432
434
436
438
452
454
456
458
472
474
476
478
622
624
626
628
632
634
636
638
652
654
656
658
672
674
676
678
822
824
826
828
832
834
836
838
852
854
856
858
872
874
876
878
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Letters Combinations
[code-task title="Letters Combinations" taskId="28-06-p-07" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Prints letters combinations and the count of the printed combinations
* You will receive the range of letters on the first and second line
* On the third line, you will receive a letter, which you must ignore - don't print combinations with it

## Example
| **Input** | **Output** |
| --- | --- |
| a | aaa |
| c| aab |
| b | aba |
| | abb |
| | baa |
| | bab |
| | bba |
| | bbb |
| | 8 |

[/task-description]
[tests]
[test open]
[input]
a
c
b
[/input]
[output]
aaa
aab
aba
abb
baa
bab
bba
bbb
8
[/output]
[/test]
[test]
[input]
k
l
m
[/input]
[output]
kkk
kkl
klk
kll
lkk
lkl
llk
lll
8
[/output]
[/test]
[test]
[input]
e
h
f
[/input]
[output]
eee
eeg
eeh
ege
egg
egh
ehe
ehg
ehh
gee
geg
geh
gge
ggg
ggh
ghe
ghg
ghh
hee
heg
heh
hge
hgg
hgh
hhe
hhg
hhh
27
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Number Pattern
[code-task title="Number Pattern" taskId="28-06-p-08" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Receives a single number: n
* Prints the pattern shown in the example

## Example
| **Input** | **Output** |
| --- | --- |
| 3 | 1 |
|  | 121 |
|  | 12321 |

[/task-description]
[tests]
[test open]
[input]
3
[/input]
[output]
1
121
12321
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1
121
12321
1234321
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
1
121
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Homework Results

[tasks-results /]
[/slide]