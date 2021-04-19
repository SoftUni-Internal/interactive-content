# Homework

[slide hideTitle]
# Problem: Repeat String
[code-task title="Repeat String" taskId="js-fundamentals-1-Functions-Repeat-String" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function repeatString(str, n){
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

Write a function that receives **a string** and a **repeat count** - "**n**". 

The function should **return a new string** (the old one repeated "**n**" times).

## Examples
| **Input** | **Output** |
| --- | --- |
| repeatString('abc', 3) | abcabcabc |
| repeatString('String', 2) | StringString |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
repeatString('abc', 3)
[/input]
[output]
abcabcabc
[/output]
[/test]
[test open]
[input]
repeatString('String', 2)
[/input]
[output]
StringString
[/output]
[/test]
[test]
[input]
repeatString('ani', 2)
[/input]
[output]
aniani
[/output]
[/test]
[test]
[input]
repeatString('ananas', 3)
[/input]
[output]
ananasananasananas
[/output]
[/test]
[test]
[input]
repeatString('tanya', 2)
[/input]
[output]
tanyatanya
[/output]
[/test]
[test]
[input]
repeatString('yavor', 3)
[/input]
[output]
yavoryavoryavor
[/output]
[/test]
[test]
[input]
repeatString('ivan', 2)
[/input]
[output]
ivanivan
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Smallest of Three Numbers
[code-task title="Smallest of Three Numbers" taskId="js-fundamentals-1-Functions-Smallest-of-Three-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function smallestNumbers(firstNumber, secondNumber, thirdNumber){
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

Write a function that receives **three integers** and **prints out the smallest number.** 

Use an **appropriate name** for the function. 

## Examples
| **Input** | **Output** |
| --- | --- |
| smallestNumbers(2, 5, 3) | 2 |
| smallestNumbers(600, 342, 123) | 123 |
| smallestNumbers(25, 21, 4) | 4 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
smallestNumbers(2, 5, 3)
[/input]
[output]
2
[/output]
[/test]
[test open]
[input]
smallestNumbers(600, 342, 123)
[/input]
[output]
123
[/output]
[/test]
[test open]
[input]
smallestNumbers(25, 21, 4)
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
smallestNumbers(25, 25, 25)
[/input]
[output]
25
[/output]
[/test]
[test]
[input]
smallestNumbers(664213164, 1808459534, 2103069969)
[/input]
[output]
664213164
[/output]
[/test]
[test]
[input]
smallestNumbers(800572446, 391984821, 1988075527)
[/input]
[output]
391984821
[/output]
[/test]
[test]
[input]
smallestNumbers(958036414, 1303722451, 81436290)
[/input]
[output]
81436290
[/output]
[/test]
[test]
[input]
smallestNumbers(1504225756, 2078100171, 1952236125)
[/input]
[output]
1504225756
[/output]
[/test]
[test]
[input]
smallestNumbers(1340748496, 2047564071, 892651240)
[/input]
[output]
892651240
[/output]
[/test]
[test]
[input]
smallestNumbers(1325565386, 175816470, 1646690050)
[/input]
[output]
175816470
[/output]
[/test]
[test]
[input]
smallestNumbers(1897368806, 101858759, 89570573)
[/input]
[output]
89570573
[/output]
[/test]
[test]
[input]
smallestNumbers(851370685, 108554923, 110531645)
[/input]
[output]
108554923
[/output]
[/test]
[test]
[input]
smallestNumbers(1315489464, 15286437, 2013240737)
[/input]
[output]
15286437
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Add and Subtract
[code-task title="Add and Subtract" taskId="js-fundamentals-1-Functions-Add-and-Substract" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function addSubtract(firstNumber, secondNumber, thirdNumber){
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

You will receive **three integers.**

Write a function called `sum()` to get the sum of the first two integers and a `subtract()` function that subtracts the third integer from the result.


## Examples
| **Input** | **Output** |
| --- | --- |
| addSubtract(23, 6, 10) | 19 |
| addSubtract(1, 17, 30) | \-12 |
| addSubtract(42, 58, 100) | 0 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
addSubtract(23, 6, 10)
[/input]
[output]
19
[/output]
[/test]
[test open]
[input]
addSubtract(1, 17, 30)
[/input]
[output]
-12
[/output]
[/test]
[test open]
[input]
addSubtract(42, 58, 100)
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
addSubtract(775, 8058, 6727)
[/input]
[output]
2106
[/output]
[/test]
[test]
[input]
addSubtract(5238, 851, 8783)
[/input]
[output]
-2694
[/output]
[/test]
[test]
[input]
addSubtract(3311, 8557, 872)
[/input]
[output]
10996
[/output]
[/test]
[test]
[input]
addSubtract(1318, 2018, 5695)
[/input]
[output]
-2359
[/output]
[/test]
[test]
[input]
addSubtract(1615, 4900, 8565)
[/input]
[output]
-2050
[/output]
[/test]
[test]
[input]
addSubtract(777, 9465, 7034)
[/input]
[output]
3208
[/output]
[/test]
[test]
[input]
addSubtract(2667, 4817, 1801)
[/input]
[output]
5683
[/output]
[/test]
[test]
[input]
addSubtract(2037, 50, 7681)
[/input]
[output]
-5594
[/output]
[/test]
[test]
[input]
addSubtract(120, 8802, 9102)
[/input]
[output]
-180
[/output]
[/test]
[test]
[input]
addSubtract(6598, 6102, 4528)
[/input]
[output]
8172
[/output]
[/test]
[test]
[input]
addSubtract(789, 3598, 4387)
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Characters in Range
[code-task title="Characters in Range" taskId="js-fundamentals-1-Functions-Characters-in-Range" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function charactersInRange(firstChar, secondChar){
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

Write a function that **receives two characters** and prints on a single line all the characters in between them according to the ASCII table. 

Keep in mind that the **second character's ASCII code** might be **before the first one** in the ASCII table.

## Examples
| **Input** | **Output** |
| --- | --- |
| charactersInRange('a', 'd') | b c |
| charactersInRange('#', ':') | \$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 |
| charactersInRange('C', '#') | \$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 \: \; \< \= \> \? \@ A B |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
charactersInRange('a', 'd')
[/input]
[output]
b c
[/output]
[/test]
[test open]
[input]
charactersInRange('#', ':')
[/input]
[output]
\$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9
[/output]
[/test]
[test open]
[input]
charactersInRange('C', '#')
[/input]
[output]
\$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 \: \; \< \= \> \? \@ A B
[/output]
[/test]
[test]
[input]
charactersInRange('t', 'E')
[/input]
[output]
F G H I J K L M N O P Q R S T U V W X Y Z \[ \ \] ^ _ \` a b c d e f g h i j k l m n o p q r s
[/output]
[/test]
[test]
[input]
charactersInRange('!', '\}')
[/input]
[output]
\" \# \$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 \: \; \< \= \> \? \@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \[ \\ \] \^ \_ \` a b c d e f g h i j k l m n o p q r s t u v w x y z \{ \|
[/output]
[/test]
[test]
[input]
charactersInRange('\|', '\\$')
[/input]
[output]
% & ' ( ) \* + , - . / 0 1 2 3 4 5 6 7 8 9 : ; \< = \> ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \[ \ \] ^ _ \` a b c d e f g h i j k l m n o p q r s t u v w x y z \{
[/output]
[/test]
[test]
[input]
charactersInRange(':', '\#')
[/input]
[output]
\$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9
[/output]
[/test]
[test]
[input]
charactersInRange('m', '9')
[/input]
[output]
: ; \< = \> ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \[ \ \] ^ _ \` a b c d e f g h i j k l
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Odd and Even Sum
[code-task title="Odd and Even Sum" taskId="js-fundamentals-1-Functions-Odd-and-Even-sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddEvenSum(input){
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

You will receive a **single number.**

Write a function that returns the **sum** of **all even** and **all odd** digits from that number. 

## Examples
| **Input** | **Output** |
| --- | --- |
| oddEvenSum(1000435) |  Odd sum = 9, Even sum = 4 |
| oddEvenSum(3495892137259234) | Odd sum = 54, Even sum = 22 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
oddEvenSum(1000435)
[/input]
[output]
Odd sum = 9, Even sum = 4
[/output]
[/test]
[test open]
[input]
oddEvenSum(3495892137259234)
[/input]
[output]
Odd sum = 54, Even sum = 22
[/output]
[/test]
[test]
[input]
oddEvenSum(527249158)
[/input]
[output]
Odd sum = 27, Even sum = 16
[/output]
[/test]
[test]
[input]
oddEvenSum(100000001)
[/input]
[output]
Odd sum = 2, Even sum = 0
[/output]
[/test]
[test]
[input]
oddEvenSum(12345)
[/input]
[output]
Odd sum = 9, Even sum = 6
[/output]
[/test]
[test]
[input]
oddEvenSum(1117)
[/input]
[output]
Odd sum = 10, Even sum = 0
[/output]
[/test]
[test]
[input]
oddEvenSum(570529212230)
[/input]
[output]
Odd sum = 30, Even sum = 8
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Palindrome Integers
[code-task title="Palindrome Integers" taskId="js-fundamentals-1-Functions-Palindrom-Integers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function palindrome(input){
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

A palindrome is a number that **reads the same backward as forwarding**, such as **323** or **1001**. 

Write a function that receives an **array of positive integers** and checks if **each integer is a palindrome or not**. 

## Example One
| **Input** | **Output** |
| --- | --- |
| palindrome([123, 323, 421, 121]) |  false |
||true|
||false|
||true|

## Example Two
| **Input** | **Output** |
| --- | --- |
| palindrome([32, 2, 232, 1010]) |  false |
||true|
||true|
||false|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
palindrome([123, 323, 421, 121])
[/input]
[output]
false
true
false
true
[/output]
[/test]
[test open]
[input]
palindrome([32, 2, 232, 1010])
[/input]
[output]
false
true
true
false
[/output]
[/test]
[test]
[input]
palindrome([121, 159, 259])
[/input]
[output]
true
false
false
[/output]
[/test]
[test]
[input]
palindrome([121, 528, 891, 622, 271, 602, 117, 489])
[/input]
[output]
true
false
false
false
false
false
false
false
[/output]
[/test]
[test]
[input]
palindrome([70, 555, 523, 902, 554, 209, 918, 37, 808])
[/input]
[output]
false
true
false
false
false
false
false
false
true
[/output]
[/test]
[test]
[input]
palindrome([567, 656, 920, 184, 580, 128, 638, 276, 137])
[/input]
[output]
false
true
false
false
false
false
false
false
false
[/output]
[/test]
[test]
[input]
palindrome([123321, 121, 356653, 157, 1001, 666, 159951])
[/input]
[output]
true
true
true
false
true
true
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Password Validator
[code-task title="Password Validator" taskId="js-fundamentals-1-Functions-Password-Validator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function passwordValidator(input){
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

Write a function that checks if a given password is valid. 

Password validations are:

- The length should be 6 - 10 characters (inclusive)
- It should consist only of letters and digits
- It should have at least 2 digits 

If a password is valid print "**Password is valid**".

If it is **NOT** valid, for every unfulfilled rule print a message:

- "**Password must be between 6 and 10 characters**"

- "**Password must consist only of letters and digits**"

- "**Password must have at least 2 digits**"

## Example One
| **Input** | **Output** |
| --- | --- |
| passwordValidator('logIn') | Password must be between 6 and 10 characters |
|| Password must have at least 2 digits |

## Example Two
| **Input** | **Output** |
| --- | --- |
| passwordValidator('MyPass123') | Password is valid |

## Example Three
| **Input** | **Output** |
| --- | --- |
| passwordValidator('Pa$s$s') | Password must consist only of letters and digits |
|| Password must have at least 2 digits|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
passwordValidator('logIn')
[/input]
[output]
Password must be between 6 and 10 characters
Password must have at least 2 digits
[/output]
[/test]
[test open]
[input]
passwordValidator('MyPass123')
[/input]
[output]
Password is valid
[/output]
[/test]
[test open]
[input]
passwordValidator('Pa$s$s')
[/input]
[output]
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
passwordValidator('Acer')
[/input]
[output]
Password must be between 6 and 10 characters
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
passwordValidator('Picture')
[/input]
[output]
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
passwordValidator('pesho123\#')
[/input]
[output]
Password must consist only of letters and digits
[/output]
[/test]
[test]
[input]
passwordValidator('gas%2')
[/input]
[output]
Password must be between 6 and 10 characters
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
passwordValidator('\\$\\$\\$\\$\\$\\$\\$')
[/input]
[output]
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
passwordValidator('Pesho189')
[/input]
[output]
Password is valid
[/output]
[/test]
[test]
[input]
passwordValidator('SoftUni40')
[/input]
[output]
Password is valid
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: NxN Matrix
[code-task title="NxN Matrix" taskId="js-fundamentals-1-Functions-NxN-Matrix" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function matrix(input){
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

Write a function that receives a single integer number "**n**" and prints "**NxN**" matrix with that number.

## Example One
| **Input** | **Output** |
| --- | --- |
| matrix(3) | 3 3 3|
|| 3 3 3 |
|| 3 3 3 |
## Example Two
| **Input** | **Output** |
| --- | --- |
| matrix(2) | 2 2 |
|| 2 2 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
matrix(3)
[/input]
[output]
3 3 3
3 3 3
3 3 3
[/output]
[/test]
[test open]
[input]
matrix(2)
[/input]
[output]
2 2
2 2
[/output]
[/test]
[test]
[input]
matrix(7)
[/input]
[output]
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
[/output]
[/test]
[test]
[input]
matrix(10)
[/input]
[output]
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
[/output]
[/test]
[test]
[input]
matrix(5)
[/input]
[output]
5 5 5 5 5
5 5 5 5 5
5 5 5 5 5
5 5 5 5 5
5 5 5 5 5
[/output]
[/test]
[test]
[input]
matrix(18)
[/input]
[output]
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
[/output]
[/test]
[test]
[input]
matrix(20)
[/input]
[output]
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
[/output]
[/test]
[test]
[input]
matrix(13)
[/input]
[output]
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Perfect Number 
[code-task title="Perfect Number" taskId="js-fundamentals-1-Functions-Perfect-Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function perfectNumber(input){
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

Write a function that receives a number and determines whether **the number is perfect or not.**

A perfect number is a **positive integer** that is equal to the sum of its **proper positive divisors**.

The sum of a number's positive divisors excluding the number itself is also known as its **aliquot sum**.

## Examples
| **Input**   | **Output** | **Comments**   |
| :---:       |    :----:   |   :---:     |
| perfectNumber(6) |We have a perfect number!| 1 + 2 + 3|
| perfectNumber(28) | We have a perfect number!|1 + 2 + 4 + 7 + 14|
| perfectNumber(1236498) |It's not so perfect.||

[hints]
[hint]
Equivalently, a perfect number is a number that is **half the sum** of all of its positive divisors, including itself.

**Six** is a perfect number because it is the sum of "**1 + 2 + 3**" (all of which are divided without residue).
[/hint] 
[hint]
Learn more about perfect numbers [here](https://en.wikipedia.org/wiki/Perfect_number).
[/hint] 
[hint]
You can create a **for-loop** from **0** to **num / 2**:

```js
tempNum = 0;

for (let i = 0; i <= num / 2; i++) {
  if (num % i === 0) {
    tempNum += i;
  }
}
```
[/hint] 
[hint]
Then, create an **if-else** block, and print the correct output:: 

```js
if (tempNum === num && tempNum !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
```
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
perfectNumber(6)
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[test open]
[input]
perfectNumber(28)
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[test open]
[input]
perfectNumber(1236498)
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
perfectNumber(7)
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
perfectNumber(496)
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[test]
[input]
perfectNumber(29)
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
perfectNumber(8128)
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[test]
[input]
perfectNumber(133)
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
perfectNumber(33550336)
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
