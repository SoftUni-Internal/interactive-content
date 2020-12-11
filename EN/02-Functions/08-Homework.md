# Homework

[slide]
# Problem: Repeat String
[code-task title="Repeat String" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function repeatString(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that receives **a string** and a repeat count `n`. 

The function should return a new string (the old one repeated n times).

# Example
| **Input** | **Output** |
| --- | --- |
|`['abc','3']`| abcabcabc |
|`['String','2']`| StringString |


[/task-description]
[tests]
[test]
[input]
ani
2
[/input]
[output]
aniani
[/output]
[/test]
[test]
[input]
ananas
3
[/input]
[output]
ananasananasananas
[/output]
[/test]
[test]
[input]
tanya
2
[/input]
[output]
tanyatanya
[/output]
[/test]
[test]
[input]
yavor
3
[/input]
[output]
yavoryavoryavor
[/output]
[/test]
[test]
[input]
ivan
2
[/input]
[output]
ivanivan
[/output]
[/test]
[test]
[input]
String
2
[/input]
[output]
StringString
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Smallest of Three Numbers
[code-task title="Smallest of Three Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function smallestNumbers(input){
 
}
```
[/code-editor]
[task-description]
# Description

Write a function which receives three integer numbers to print the **smallest.**

Use appropriate name for the function.

# Example
| **Input** | **Output** |
| --- | --- |
|`['2','5', '3']`| 2 |
|`['600','342', '123']`| 123 |
|`['25','21', '4']`| 4 |

[/task-description]
[tests]
[test]
[input]
25
25
25
[/input]
[output]
25
[/output]
[/test]
[test]
[input]
664213164
1808459534
2103069969
[/input]
[output]
664213164
[/output]
[/test]
[test]
[input]
800572446
391984821
1988075527
[/input]
[output]
391984821
[/output]
[/test]
[test]
[input]
958036414
1303722451
81436290
[/input]
[output]
81436290
[/output]
[/test]
[test]
[input]
1504225756
2078100171
1952236125
[/input]
[output]
1504225756
[/output]
[/test]
[test]
[input]
1340748496
2047564071
892651240
[/input]
[output]
892651240
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Add and Subtract
[code-task title="Add and Subtract" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function addSubtract(input){
 
}
```
[/code-editor]
[task-description]
# Description

You will receive **three integer numbers.** 

Write a function `sum()` to get the sum of the first two integers and `subtract()` function that subtracts the third integer from the result.


# Example
| **Input** | **Output** |
| --- | --- |
|`['23','6', '10']`| 29 |
|`['1','17', '30']`| \-12 |
|`['42','58', '100']`| 0 |

[/task-description]
[tests]
[test]
[input]
775
8058
6727
[/input]
[output]
2106
[/output]
[/test]
[test]
[input]
5238
851
8783
[/input]
[output]
\-2694
[/output]
[/test]
[test]
[input]
3311
8557
872
[/input]
[output]
10996
[/output]
[/test]
[test]
[input]
1318
2018
5695
[/input]
[output]
\-2359
[/output]
[/test]
[test]
[input]
1615
4900
8565
[/input]
[output]
\-2050
[/output]
[/test]
[test]
[input]
777
9465
7034
[/input]
[output]
3208
[/output]
[/test]
[test]
[input]
2667
4817
1801
[/input]
[output]
5683
[/output]
[/test]
[test]
[input]
2037
50
7681
[/input]
[output]
\-5594
[/output]
[/test]
[test]
[input]
120
8802
9102
[/input]
[output]
\-180
[/output]
[/test]
[test]
[input]
6598
6102
4528
[/input]
[output]
8172
[/output]
[/test]
[test]
[input]
789
3598
4387
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
# Problem: Characters in Range
[code-task title="Characters in Range" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function charactersInRange(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that **receives two characters** and prints on a single line all the characters in between them according to the **ASCII** code. 

Keep in mind that the **second character code might be before the first one inside the ASCII table.**

# Example
| **Input** | **Output** |
| --- | --- |
|`['a','b']`| b c |
|`['#',':']`| \$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 |
|`['C','#']`| \$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 \: \; \< \= \> \? \@ A B |

[/task-description]
[tests]
[test]
[input]
t
E
[/input]
[output]
F G H I J K L M N O P Q R S T U V W X Y Z \[ \\ \] \^ \_ \` a b c d e f g h i j k l m n o p q r s
[/output]
[/test]
[test]
[input]
\!
\}
[/input]
[output]
\" \# \$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 \: \; \< \= \> \? \@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \[ \\ \] \^ _ \` a b c d e f g h i j k l m n o p q r s t u v w x y z \{ \|
[/output]
[/test]
[test]
[input]
\|
\$
[/input]
[output]
\% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 \: \; \< \= \> \? \@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \[ \\ \] \^ \_ \` a b c d e f g h i j k l m n o p q r s t u v w x y z \{
[/output]
[/test]
[test]
[input]
\:
\#
[/input]
[output]
\$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9
[/output]
[/test]
[test]
[input]
m
9
[/input]
[output]
\: \; \< \= \> \? \@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \[ \\ \] \^ \_ \` a b c d e f g h i j k l
[/output]
[/test]
[test]
[input]
a
d
[/input]
[output]
b c
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Odd and Even Sum
[code-task title="Odd and Even Sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddEvenSum(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

You will receive a **single number.**

You have to write a function, that returns the **sum** of **all even** and **all odd** digits from that number. 

# Example
| **Input** | **Output** |
| --- | --- |
|`['1000435']`|  Odd sum = 9, Even sum = 4 |
|`['3495892137259234']`| Odd sum = 54, Even sum = 22 |

[/task-description]
[tests]
[test]
[input]
527249158
[/input]
[output]
Odd sum = 27, Even sum = 16
[/output]
[/test]
[test]
[input]
100000001
[/input]
[output]
Odd sum = 2, Even sum = 0
[/output]
[/test]
[test]
[input]
12345
[/input]
[output]
Odd sum = 9, Even sum = 6
[/output]
[/test]
[test]
[input]
1117
[/input]
[output]
Odd sum = 10, Even sum = 0
[/output]
[/test]
[test]
[input]
570529212230
[/input]
[output]
Odd sum = 30, Even sum = 8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Palindrome Integers
[code-task title="Palindrome Integers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function palindrome(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

A palindrome is a number which reads the same **backward** as **forward**, such as 323 or 1001. 

Write a function which receives an **array of positive integer** and checks if each integer is a palindrome or not. 

# Example
| **Input** | **Output** |
| --- | --- |
|`['123','323','421','121']`|  false |
||true|
||false|
||true|

| **Input** | **Output** |
| --- | --- |
|`['32','2','232','1010']`|  false |
||true|
||true|
||false|

[/task-description]
[tests]
[test]
[input]
121
159
259
[/input]
[output]
true
false
false
[/output]
[/test]
[test]
[input]
121
528
891
622
271
602
117
489
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
70
555
523
902
554
209
918
37
808
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
567
656
920
184
580
128
638
276
137
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
123321
121
356653
157
1001
666
159951
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
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Password Validator
[code-task title="Password Validator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function passwordValidator(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that checks if a given password is valid. Password validations are:

- The length should be 6 - 10 characters (inclusive)
-	It should consists only of letters and digits
-	It should have at least 2 digits 

If a password is valid print `Password is valid`.

If it is **NOT** valid, for every unfulfilled rule print a message:

`Password must be between 6 and 10 characters`

`Password must consist only of letters and digits`

`Password must have at least 2 digits`

# Example
| **Input** | **Output** |
| --- | --- |
|`['logIn']`| Password must be between 6 and 10 characters |
|| Password must have at least 2 digits |

| **Input** | **Output** |
| --- | --- |
|`['MyPass123']`| Password is valid |

| **Input** | **Output** |
| --- | --- |
|`['Pa$s$s']`| Password must consist only of letters and digits |
|| Password must have at least 2 digits|

[/task-description]
[tests]
[test]
[input]
Acer
[/input]
[output]
Password must be between 6 and 10 characters
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
Picture
[/input]
[output]
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
pesho123\#
[/input]
[output]
Password must consist only of letters and digits
[/output]
[/test]
[test]
[input]
gas\%2
[/input]
[output]
Password must be between 6 and 10 characters
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
\$\$\$\$\$\$\$
[/input]
[output]
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
SoftUni40
[/input]
[output]
Password is valid
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: NxN Matrix
[code-task title="NxN Matrix" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function мatrix(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that receives a single integer number **n** and prints **nxn** matrix with that number.

# Example
| **Input** | **Output** |
| --- | --- |
|`['3']`| 3 3 3|
|| 3 3 3 |
|| 3 3 3 |

| **Input** | **Output** |
| --- | --- |
|`['2']`| 2 2 |
|| 2 2 |


[/task-description]
[tests]
[test]
[input]
7
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
10
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
5
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
18
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
20
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
13
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
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Perfect Number 
[code-task title="Perfect Number " executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function perfectNumber (input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that receive a number and return if this number is **perfect** or **NOT**.

A perfect number is a **positive** integer that is equal to the **sum** of its **proper positive divisors**.

That is the sum of its positive divisors excluding the number itself (also known as its **aliquot sum**).
 

# Example
| Input   | Output | Comments   |
| :---:       |    :----:   |   :---:     |
|`['6']`|We have a perfect number!| `1 + 2 + 3`|
|`['28']`| We have a perfect number!|`1 + 2 + 4 + 7 + 14`|
|`['1236498']`|It's not so perfect.||

## Hint

Equivalently, a perfect number is a number that is **half the sum** of all of its positive divisors`(including itself) => 6` is a perfect number, because it is the sum of `1 + 2 + 3` (all of which are divided without residue)

- Read about the [Perfect](https://en.wikipedia.org/wiki/Perfect_number) number.

[/task-description]
[tests]
[test]
[input]
7
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
496
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[test]
[input]
29
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
8128
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[test]
[input]
133
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
33550336
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Homework Results
[tasks-results/]

[/slide]