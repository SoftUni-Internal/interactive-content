[slide]
# Homework
Welcome to the homework. 

Now we are going to write a couple of console applications, by which we are going to make a few more steps into programming. 

We have prepared some problems for you to solve.

Let's solve a few problems to confirm what we have learned.

[image src="https://github.com/AtanasovAtanas/pb-interactive-csharp/blob/master/assets/homeowrk.png"/]
[/slide]

[slide]
# Problem: Building
[code-task title="Building" taskId="p-01" executionType="tests-execution" executionStrategy="python-code" requiresInput]
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
# Example
## Input
- 4
- 5
## Output
```
L40 L41 L42 L43 L44 
A30 A31 A32 A33 A34 
O20 O21 O22 O23 O24 
A10 A11 A12 A13 A14 
```
[/task-description]
[tests]
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
[code-task title="Passwords" taskId="p-02" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Receives a number **n**
* Generates **n count** passwords, which meet the following conditions:
* The first digit is an even number
* The second digit is an odd number
* The third part is the product of the first two
# Example
## Input
5
## Output
212 236 2510 414 4312 4520 
[/task-description]
[tests]
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
[code-task title="Magic Number" taskId="p-03" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Read a number - **n**, from the console

Find all 3-digit numbers, which:

* Form n as the product of the multiplication of their digits
# Example
## Input
- 3
## Output
- 113
- 131
- 311
[/task-description]
[tests]
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
[code-task title="Travelling" taskId="p-04" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a destination and needed budget for destination
* You must continue reading amount of money until you have enough for the destination
* If you receive the command "End" end the program
# Example
## Input
- Greece
- 1000
- 550
- 450
## Output
- Going to Greece!
[/task-description]
[tests]
[test]
[input]
London
200
100
50
50
[/input]
[output]
Going to London!
[/output]
[/test]
[test]
[input]
Dubai
1000
200
300
100
End
[/input]
[output]
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Prime Numbers
[code-task title="Prime Numbers" taskId="p-05" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
import math

# Write your code here
```
[/code-editor]
[task-description]
# Description
Read two number from the console

Print the prime numbers in that range
# Example
## Input
- 1
- 50
## Output
1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
[/task-description]
[tests]
[test]
[input]
London
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
[code-task title="Unique PIN Codes" taskId="p-06" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads 3 digits - each of them is an upper limit
* Generates unique 3 digit PIN Codes, which meet the following conditions:
    * They are in the range
    * The first and the third digit must be even
    * The second digit must be a prime number in the range \[2…7\]
# Example
## Input
3
5
5
## Output
222
224
232
234
252
254
[/task-description]
[tests]
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
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Letters Combinations
[code-task title="Letters Combinations" taskId="p-07" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Prints letters combinations and the count of the printed combinations
* You will receive the range of letters on the first and second line
* On the third line, you will receive a letter, which you must ignore - don't print combinations with it
# Example
## Input
a
c
b
## Output
aaa
aab
aba
abb
baa
bab
bba
bbb
8
[/task-description]
[tests]
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
[code-task title="Number Pattern" taskId="p-08" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Receives a single number: n
* Prints the pattern shown in the example
# Example
## Input
3
## Output
- 1
- 121
- 12321
[/task-description]
[tests]
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
# Video

[vimeo-video videoId="345185854" startTimeInSeconds="3958" endTimeInSeconds="11286" /]

[/slide]