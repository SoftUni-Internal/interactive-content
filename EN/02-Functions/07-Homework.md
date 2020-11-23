[slide]
# Homework

[image assetsSrc="homeowrk.png" /]

Welcome to the homework tab. 

Now we are going to create a couple of **console applications**, with which we are going to take a few more steps further into programming. 

We have prepared some problems for you to solve.
[/slide]

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