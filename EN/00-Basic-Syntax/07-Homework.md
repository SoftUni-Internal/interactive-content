[slide]
# Homework

[image assetsSrc="homeowrk.png" /]

Welcome to the homework tab. 

Now we are going to create a couple of **console applications**, which will takes us a bit further into programming.

We have prepared some problems for you to solve.
[/slide]

[slide]
# Problem: Gramophone
[code-task title="Gramophone" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function gramophone(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function which as input will receive 3 parameters (strings)

- First string is the name of the band

- Second string is the name of the album

- The third is holding a song name from the album

You have to find out how many **times** the plate will rotate the given song from the album.

**The plate makes a full rotation every 2.5 seconds.**

The song **duration in seconds** is calculate by the given formula: 

`albumName.length * bandName.length) * song name.length / 2`

As output you should print the following message:

`The plate was rotated {rotations} times.`

Rotations should be **rounded up.**



# Example
  | **Input** | **Output** |
| --- | --- |
|`['Black Sabbath', 'Paranoid', 'War Pigs']`| The plate was rotated 167 times. |

[/task-description]
[tests]
[test]
[input]
Bhjkhbath
Pudfgdgioid
Wois
[/input]
[output]
The plate was rotated 80 times.
[/output]
[/test]
[test]
[input]
gjhg
jklcrj
gyuguyguy
[/input]
[output]
The plate was rotated 44 times.
[/output]
[/test]
[test]
[input]
bhjbhjbj
cghcgh
uiou
[/input]
[output]
The plate was rotated 39 times.
[/output]
[/test]
[test]
[input]
Bvyuvh
ji
Wauios
[/input]
[output]
The plate was rotated 15 times.
[/output]
[/test]
[test]
[input]
gyuuath
Pgyd
Wabygs
[/input]
[output]
The plate was rotated 34 times.
[/output]
[/test]
[test]
[input]
tyuath
Pargyu
tuus
[/input]
[output]
The plate was rotated 29 times.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Fuel Money
[code-task title="Fuel Money" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function fuelMoney(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a **function** which calculates how much **money** for fuel will be needed to drive а bus from one place to another.

Consider the following:

- Calculate **the fuel** by knowing that **an empty bus** can pass 100 km with 7L diesel.

- **One person** in that bus excluding the driver increases fuel consumption by **100 milliliters.**

- The **money** is calculated by **multiplying** the **fuel price** with the needed fuel for the trip.

As **input** you will receive **3 parameters**:
- **Distance** the bus must travel
- **Passengers** in it 
- **Price** for **1 liter of diesel**

As output you should print this message:
 `Needed money for that trip is {neededMoney} dollars.`

# Example
  | **Input** | **Output** |
| --- | --- |
|`['260', '9', '2.49']`| Needed money for that trip is 47.559 dollars. |
|`['90', '14', '2.88']`| Needed money for that trip is 22.176 dollars. |

[/task-description]
[tests]
[test]
[input]
154
5
3.1
[/input]
[output]
Needed money for that trip is 34.968 dollars.
[/output]
[/test]
[test]
[input]
545
5
54.59
[/input]
[output]
Needed money for that trip is 2109.9035 dollars.
[/output]
[/test]
[test]
[input]
32
15
1.0
[/input]
[output]
Needed money for that trip is 3.74 dollars.
[/output]
[/test]
[test]
[input]
1232
13
2.19
[/input]
[output]
Needed money for that trip is 191.7126 dollars.
[/output]
[/test]
[test]
[input]
546
45
4.45
[/input]
[output]
Needed money for that trip is 190.104 dollars.
[/output]
[/test]
[test]
[input]
755
10
3.474
[/input]
[output]
Needed money for that trip is 187.0749 dollars.
[/output]
[/test]
[test]
[input]
451
2
12.5
[/input]
[output]
Needed money for that trip is 397.125 dollars.
[/output]
[/test]
[test]
[input]
361
45
2.989
[/input]
[output]
Needed money for that trip is 88.98253 dollars.
[/output]
[/test]
[test]
[input]
1565
12
1.49
[/input]
[output]
Needed money for that trip is 165.0175 dollars.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Centuries to Minutes
[code-task title="Centuries to Minutes" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function centuriesToMinutes(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write program to receive a **number** of **centuries** and convert it to **years, days, hours** and minutes.

Print the output in the following format: 
`{number} centuries = {number} years = {number} days = {number} hours = {number} minutes`
# Example
  | **Input** | **Output** |
| --- | --- |
|`['1']`| 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes |
|`['5']`| 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes |

[/task-description]
[tests]
[test]
[input]
14
[/input]
[output]
14 centuries = 1400 years = 511339 days = 12272136 hours = 736328160 minutes
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2 centuries = 200 years = 73048 days = 1753152 hours = 105189120 minutes
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 centuries = 400 years = 146096 days = 3506304 hours = 210378240 minutes
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3 centuries = 300 years = 109572 days = 2629728 hours = 157783680 minutes
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
6 centuries = 600 years = 219145 days = 5259480 hours = 315568800 minutes
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Special Numbers
[code-task title="Special Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function specialNumbers(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to receive a number **n** and for all numbers in the range **1…n** print the number and if it is special or not **(True / False).**

A **number** is **special** when its s**um of digits is** **5, 7 or 11.**

# Example
  | **Input** | **Output** |
| --- | --- |
|`['15']`| 1 -> False |
||2 -> False|
||3 -> False|
||4 -> False|
||5 -> True|
||6 -> False|
||7 -> True|
||8 -> False|
||9 -> False|
||10 -> False|
||11 -> False|
||12 -> False|
||13 -> False|
||14 -> True|
||15 -> False|

# Hints

To calculate the **sum of digits of given number**, you might **repeat** the following: 

- sum the last digit `num % 10` and remove it `sum = sum / 10` until num reaches `0`. 

Use `parseInt()` while dividing to get only integer numbers.

[/task-description]
[tests]
[test]
[input]
1
[/input]
[output]
1 -> False
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
[/output]
[/test]
[test]
[input]
40
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
16 -> True
17 -> False
18 -> False
19 -> False
20 -> False
21 -> False
22 -> False
23 -> True
24 -> False
25 -> True
26 -> False
27 -> False
28 -> False
29 -> True
30 -> False
31 -> False
32 -> True
33 -> False
34 -> True
35 -> False
36 -> False
37 -> False
38 -> True
39 -> False
40 -> False
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Triples of Latin Letters
[code-task title="Triples of Latin Letters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function triplesLatinLetters(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to receive a **number** `n` and print all **triples** of the first `n` **small Latin letters**, ordered alphabetically:

# Example
  | **Input** | **Output** |
| --- | --- |
|`['3']`| aaa |
||aab|
||aac|
||aba|
||abb|
||abc|
||aca|
||acb|
||acc|
||baa|
||bab|
||bac|
||bba|
||bbb|
||bbc|
||bca|
||bcb|
||bcc|
||caa|
||cab|
||cac|
||cba|
||cbb|

# Hints

Perform 3 nested loops from `0` to `n`. 
For each number num print its corresponding Latin letter as follows:

`let letter = String.FromCharCode(97 + num)`

The function `String.fromCharCode()` gets the **value in decimal** and transforms it to a **character** from the **ASCII table.**

[/task-description]
[tests]
[test]
[input]
1
[/input]
[output]
aaa
[/output]
[/test]
[test]
[input]
2
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
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
aaa
aab
aac
aad
aae
aaf
aba
abb
abc
abd
abe
abf
aca
acb
acc
acd
ace
acf
ada
adb
adc
add
ade
adf
aea
aeb
aec
aed
aee
aef
afa
afb
afc
afd
afe
aff
baa
bab
bac
bad
bae
baf
bba
bbb
bbc
bbd
bbe
bbf
bca
bcb
bcc
bcd
bce
bcf
bda
bdb
bdc
bdd
bde
bdf
bea
beb
bec
bed
bee
bef
bfa
bfb
bfc
bfd
bfe
bff
caa
cab
cac
cad
cae
caf
cba
cbb
cbc
cbd
cbe
cbf
cca
ccb
ccc
ccd
cce
ccf
cda
cdb
cdc
cdd
cde
cdf
cea
ceb
cec
ced
cee
cef
cfa
cfb
cfc
cfd
cfe
cff
daa
dab
dac
dad
dae
daf
dba
dbb
dbc
dbd
dbe
dbf
dca
dcb
dcc
dcd
dce
dcf
dda
ddb
ddc
ddd
dde
ddf
dea
deb
dec
ded
dee
def
dfa
dfb
dfc
dfd
dfe
dff
eaa
eab
eac
ead
eae
eaf
eba
ebb
ebc
ebd
ebe
ebf
eca
ecb
ecc
ecd
ece
ecf
eda
edb
edc
edd
ede
edf
eea
eeb
eec
eed
eee
eef
efa
efb
efc
efd
efe
eff
faa
fab
fac
fad
fae
faf
fba
fbb
fbc
fbd
fbe
fbf
fca
fcb
fcc
fcd
fce
fcf
fda
fdb
fdc
fdd
fde
fdf
fea
feb
fec
fed
fee
fef
ffa
ffb
ffc
ffd
ffe
fff
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
aaa
aab
aac
aad
aba
abb
abc
abd
aca
acb
acc
acd
ada
adb
adc
add
baa
bab
bac
bad
bba
bbb
bbc
bbd
bca
bcb
bcc
bcd
bda
bdb
bdc
bdd
caa
cab
cac
cad
cba
cbb
cbc
cbd
cca
ccb
ccc
ccd
cda
cdb
cdc
cdd
daa
dab
dac
dad
dba
dbb
dbc
dbd
dca
dcb
dcc
dcd
dda
ddb
ddc
ddd
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Sum Digits
[code-task title="Sum Digits" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumDigits(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a **function** which will be given a single **number**. 
Your task is to find the sum of its digits.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['245678']`| 32 |
|`['97561']`| 28 |
|`['543']`| 12 |

[/task-description]
[tests]
[test]
[input]
9465
[/input]
[output]
24
[/output]
[/test]
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
1566625331
[/input]
[output]
38
[/output]
[/test]
[test]
[input]
00001
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
15477
[/input]
[output]
24
[/output]
[/test]
[test]
[input]
99999
[/input]
[output]
45
[/output]
[/test]
[test]
[input]
1558974233
[/input]
[output]
47
[/output]
[/test]
[test]
[input]
69844
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
00000
[/input]
[output]
0
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Reversed Chars
[code-task title="Reversed Chars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function reversChars(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program that takes **3 parameters** (characters) and prints them in **reversed order** with a space between them.

# Example
| **Input** | **Output** |
| --- | --- |
|`['A', 'B','C']`| C B A |
|`['1','L','&']`| \& L 1 |


[/task-description]
[tests]
[test]
[input]
a
b
c
[/input]
[output]
c b a
[/output]
[/test]
[test]
[input]
z
z
z
[/input]
[output]
z z z
[/output]
[/test]
[test]
[input]
\!
\@
\#
[/input]
[output]
\# \@ \!
[/output]
[/test]
[test]
[input]
l
K
\#
[/input]
[output]
\# K l
[/output]
[/test]
[test]
[input]
\_
P
\>
[/input]
[output]
\> P \_
[/output]
[/test]
[test]
[input]
A
B
C
[/input]
[output]
C B A
[/output]
[/test]
[test]
[input]
1
L
\&
[/input]
[output]
\& L 1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Calculator
[code-task title="Calculator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculator(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
Write a function that receives **three string parameters:** 

- **number**

- **operator**: `+`, `-`, `*`, `\`, `%`

- **another number**

Print the **result of the calculation** to the console formatted to the **second decimal point.**

# Example
| **Input** | **Output** |
| --- | --- |
|`['5', '+','10']`| 15.00 |
|`['25.5','-','3']`| 22.50 |


[/task-description]
[tests]
[test]
[input]
10
/
2
[/input]
[output]
5.00
[/output]
[/test]
[test]
[input]
20
\*
2
[/input]
[output]
40.00
[/output]
[/test]
[test]
[input]
5
/
2
[/input]
[output]
2.50
[/output]
[/test]
[test]
[input]
100
+
100
[/input]
[output]
200.00
[/output]
[/test]
[test]
[input]
5.5
\-
5.5
[/input]
[output]
0.00
[/output]
[/test]
[test]
[input]
0
\+
11.11
[/input]
[output]
11.11
[/output]
[/test]
[test]
[input]
10
\*
5.5
[/input]
[output]
55.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]