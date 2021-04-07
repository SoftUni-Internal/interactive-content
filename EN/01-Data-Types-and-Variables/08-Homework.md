# Homework

[slide hideTitle]
# Problem with Solution: Print "Hello Java"

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-36-37-Problem-and-solution-Print-Hello-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Print Hello Java" taskId="pb-java-introduction-print-hello-java" executionType="tests-execution" executionStrategy="java-code"]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```


[/code-editor]
[task-description]
## Description

Create a Java program, that:

Prints "**Hello Java**" to the console.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
[/input]
[output]
Hello Java
[/test]
[test]
[input]
[/input]
[output]
Hello Java
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Print Hello JavaScript

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/problem1-print-hello-javascript-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Gramophone" taskId="js-fundamentals-1-basic-syntax-Gramophone" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function hello(a, b) {
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


Create a program that prints "**Hello JavaScript**" to the console.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
hello(1, 2)
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
hello(1, 3)
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
hello(2, 2)
[/input]
[output]
4
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Fuel Money
[code-task title="Fuel Money" taskId="js-fundamentals-1-basic-syntax-Fuel-Money" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function fuelMoney(pistance, passengers, price){
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
# Description

Create a program that calculates how much **money** for fuel will be needed to drive а bus from one place to another.

Consider the following:

- Calculate **the fuel** by knowing that **an empty bus** can pass 100 km with 7L diesel

- **One person** in that bus excluding the driver increases fuel consumption by **100 milliliters**

- The **money** is calculated by **multiplying** the **fuel price** by the needed fuel for the trip

As **input** you will receive **three parameters**:

- The **distance** the bus must travel

- The number of **passengers** in the bus

- The **price** for **1 liter of diesel**

As output you should print this message:

"**Needed money for that trip is** \{**neededMoney**\} **dollars.**

## Example
  | **Input** | **Output** |
| --- | --- |
| fuelMoney(260, 9, 2.49) | Needed money for that trip is 47.559 dollars. |
| fuelMoney(90, 14, 2.88) | Needed money for that trip is 22.176 dollars. |

[/task-description]
[tests]
[test open]
[input]
fuelMoney(260, 9, 2.49)
[/input]
[output]
Needed money for that trip is 47.559 dollars.
[/output]
[/test]
[test open]
[input]
fuelMoney(90, 14, 2.88)
[/input]
[output]
Needed money for that trip is 22.176 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(154, 5, 3.1)
[/input]
[output]
Needed money for that trip is 34.968 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(545, 5, 54.59)
[/input]
[output]
Needed money for that trip is 2109.9035 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(32, 15, 1.0)
[/input]
[output]
Needed money for that trip is 3.74 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(1232, 13, 2.19)
[/input]
[output]
Needed money for that trip is 191.7126 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(546, 45, 4.45)
[/input]
[output]
Needed money for that trip is 190.104 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(755, 10, 3.474)
[/input]
[output]
Needed money for that trip is 187.0749 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(451, 2, 12.5)
[/input]
[output]
Needed money for that trip is 397.125 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(361, 45, 2.989)
[/input]
[output]
Needed money for that trip is 88.98253 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(1565, 12, 1.49)
[/input]
[output]
Needed money for that trip is 165.0175 dollars.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Centuries to Minutes
[code-task title="Centuries to Minutes" taskId="js-fundamentals-1-basic-syntax-Centuries-to-Minutes" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function centuriesToMinutes(number){
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
# Description

Create a program that receives a number, representing centuries, and converts it to **years**, **days**, **hours**, and **minutes**.

Print the output in the following format: 

"\{**number**\} **centuries =** \{**number**\} **years =** \{**number**\} **days =** \{**number**\} **hours =** \{**number**\} **minutes**"

## Example
| **Input** | **Output** |
| --- | --- |
| centuriesToMinutes(1) | 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes |
| centuriesToMinutes(5) | 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes |

[/task-description]
[tests]
[test open]
[input]
centuriesToMinutes(1)
[/input]
[output]
1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
[/output]
[/test]
[test open]
[input]
centuriesToMinutes(5)
[/input]
[output]
5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes
[/output]
[/test]
[test]
[input]
centuriesToMinutes(14)
[/input]
[output]
14 centuries = 1400 years = 511339 days = 12272136 hours = 736328160 minutes
[/output]
[/test]
[test]
[input]
centuriesToMinutes(2)
[/input]
[output]
2 centuries = 200 years = 73048 days = 1753152 hours = 105189120 minutes
[/output]
[/test]
[test]
[input]
centuriesToMinutes(4)
[/input]
[output]
4 centuries = 400 years = 146096 days = 3506304 hours = 210378240 minutes
[/output]
[/test]
[test]
[input]
centuriesToMinutes(3)
[/input]
[output]
3 centuries = 300 years = 109572 days = 2629728 hours = 157783680 minutes
[/output]
[/test]
[test]
[input]
centuriesToMinutes(6)
[/input]
[output]
6 centuries = 600 years = 219145 days = 5259480 hours = 315568800 minutes
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Special Numbers
[code-task title="Special Numbers" taskId="js-fundamentals-1-basic-syntax-Special-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function specialNumbers(number){
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
# Description
Create a program that receives a number **n**. 

For all numbers in the range **1...n**, print the current number and whether it is special or not.

A number is special when the **sum of its digits** is equals to **5, 7, or 11.**

## Example
  | **Input** | **Output** |
| --- | --- |
| specialNumbers(5) | 1 -> False |
||2 -> False|
||3 -> False|
||4 -> False|
||5 -> True|

## Hints

To calculate the sum of digits of a given number, you might repeat the following:

- sum the last digit `num % 10` and remove it `sum = sum / 10` until num reaches **0**

Use `parseInt()` while dividing to get only integer numbers.

[/task-description]
[tests]
[test open]
[input]
specialNumbers(5)
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
specialNumbers(1)
[/input]
[output]
1 -> False
[/output]
[/test]
[test]
[input]
specialNumbers(15)
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
[/output]
[/test]
[test]
[input]
specialNumbers(4)
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
specialNumbers(40)
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
[test]
[input]
specialNumbers(6)
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
[/output]
[/test]
[test]
[input]
specialNumbers(8)
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
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Triples of Latin Letters
[code-task title="Triples of Latin Letters" taskId="js-fundamentals-1-basic-syntax-Triples-of-latin-letters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function triplesLatinLetters(number){
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
# Description

Create a program that receives a **number n** and prints all triples of the first **n** small Latin letters ordered alphabetically.

## Example
  | **Input** | **Output** |
| --- | --- |
| triplesLatinLetters(2) | aaa |
||aab|
||aba|
||abb|
||baa|
||bab|
||bba|
||bbb|

## Hints

Perform 3 nested loops from 0 to n. 
 
For each number "**num**", print its corresponding Latin letter as follows:

`let letter = String.FromCharCode(97 + num)`

The function `String.fromCharCode()` gets the **value in decimal** and transforms it to a **character** from the **ASCII table.**

[/task-description]
[tests]
[test open]
[input]
triplesLatinLetters(2)
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
triplesLatinLetters(1)
[/input]
[output]
aaa
[/output]
[/test]
[test]
[input]
triplesLatinLetters(3)
[/input]
[output]
aaa
aab
aac
aba
abb
abc
aca
acb
acc
baa
bab
bac
bba
bbb
bbc
bca
bcb
bcc
caa
cab
cac
cba
cbb
cbc
cca
ccb
ccc
[/output]
[/test]
[test]
[input]
triplesLatinLetters(6)
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
triplesLatinLetters(4)
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
[test]
[input]
triplesLatinLetters(0)
[/input]
[output]

[/output]
[/test]
[test]
[input]
triplesLatinLetters(5)
[/input]
[output]
aaa
aab
aac
aad
aae
aba
abb
abc
abd
abe
aca
acb
acc
acd
ace
ada
adb
adc
add
ade
aea
aeb
aec
aed
aee
baa
bab
bac
bad
bae
bba
bbb
bbc
bbd
bbe
bca
bcb
bcc
bcd
bce
bda
bdb
bdc
bdd
bde
bea
beb
bec
bed
bee
caa
cab
cac
cad
cae
cba
cbb
cbc
cbd
cbe
cca
ccb
ccc
ccd
cce
cda
cdb
cdc
cdd
cde
cea
ceb
cec
ced
cee
daa
dab
dac
dad
dae
dba
dbb
dbc
dbd
dbe
dca
dcb
dcc
dcd
dce
dda
ddb
ddc
ddd
dde
dea
deb
dec
ded
dee
eaa
eab
eac
ead
eae
eba
ebb
ebc
ebd
ebe
eca
ecb
ecc
ecd
ece
eda
edb
edc
edd
ede
eea
eeb
eec
eed
eee
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Sum Digits
[code-task title="Sum Digits" taskId="js-fundamentals-1-basic-syntax-sum-digits" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumDigits(input){
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
# Description

Create a program that receives a **number** and find the sum of its digits.

# Example
  | **Input** | **Output** |
| --- | --- |
| sumDigits(245678) | 32 |
| sumDigits(97561) | 28 |

[/task-description]
[tests]
[test open]
[input]
sumDigits(245678)
[/input]
[output]
32
[/output]
[/test]
[test open]
[input]
sumDigits(97561)
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
sumDigits(9465)
[/input]
[output]
24
[/output]
[/test]
[test]
[input]
sumDigits(1)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
sumDigits(1566625331)
[/input]
[output]
38
[/output]
[/test]
[test]
[input]
sumDigits(00001)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
sumDigits(15477)
[/input]
[output]
24
[/output]
[/test]
[test]
[input]
sumDigits(99999)
[/input]
[output]
45
[/output]
[/test]
[test]
[input]
sumDigits(1558974233)
[/input]
[output]
47
[/output]
[/test]
[test]
[input]
sumDigits(69844)
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
sumDigits(00000)
[/input]
[output]
0
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Reversed Chars
[code-task title="Reversed Chars" taskId="js-fundamentals-1-basic-syntax-reversed-chars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function reversChars(firstChar, secondChar, thirdChar){
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
# Description

Create a program that receives **three parameters** (characters) and prints them in **reversed order** with a space between them.

## Example
| **Input** | **Output** |
| --- | --- |
| reversChars('A', 'B','C') | C B A |
| reversChars('1','L','\&') | \& L 1 |
[/task-description]
[code-io /]
[tests]
[test open]
[input]
reversChars('A', 'B','C')
[/input]
[output]
C B A
[/output]
[/test]
[test open]
[input]
reversChars('1','L','\&')
[/input]
[output]
\& L 1
[/output]
[/test]
[test]
[input]
reversChars('a','b','c')
[/input]
[output]
c b a
[/output]
[/test]
[test]
[input]
reversChars('z','z','z')
[/input]
[output]
z z z
[/output]
[/test]
[test]
[input]
reversChars('\!','\@','\#')
[/input]
[output]
\# \@ \!
[/output]
[/test]
[test]
[input]
reversChars('l','K','\#')
[/input]
[output]
\# K l
[/output]
[/test]
[test]
[input]
reversChars('\_','P','\>')
[/input]
[output]
\> P \_
[/output]
[/test]
[test]
[input]
reversChars('A','B','C')
[/input]
[output]
C B A
[/output]
[/test]
[test]
[input]
reversChars('1','L','\&')
[/input]
[output]
\& L 1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Calculator
[code-task title="Calculator" taskId="js-fundamentals-1-basic-syntax-Calculator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculator(firstNumber, operator, secondNumber){
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
# Description

Create a program that receives **three string parameters:** 

- **Number**

- **Operator**: \+, \-, \*, \\, \%

- **Another number**

Your task is to **perform a calculation** using the given **operator** and **print** the result, formatted to the **second decimal point.**

# Example
| **Input** | **Output** |
| --- | --- |
| calculator(5, '+', 10) | 15.00 |
| calculator(25.5, '-', 3) | 22.50 |


[/task-description]
[tests]
[test open]
[input]
calculator(5, '\+', 10)
[/input]
[output]
15.00
[/output]
[/test]
[test open]
[input]
calculator(25.5, '\-', 3)
[/input]
[output]
22.50
[/output]
[/test]
[test]
[input]
calculator(10, '/', 2)
[/input]
[output]
5.00
[/output]
[/test]
[test]
[input]
calculator(20, '\*', 2)
[/input]
[output]
40.00
[/output]
[/test]
[test]
[input]
calculator(5, '/', 2)
[/input]
[output]
2.50
[/output]
[/test]
[test]
[input]
calculator(100, '\+', 100)
[/input]
[output]
200.00
[/output]
[/test]
[test]
[input]
calculator(5.5, '\-', 5.5)
[/input]
[output]
0.00
[/output]
[/test]
[test]
[input]
calculator(0, '\+', 11.11)
[/input]
[output]
11.11
[/output]
[/test]
[test]
[input]
calculator(10, '\*', 5.5)
[/input]
[output]
55.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
