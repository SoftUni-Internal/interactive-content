[slide]
# Homework

[image assetsSrc="homeowrk.png" /]

Welcome to the homework tab. 

Now we are going to create a couple of **console applications**, with which we are going to take a few more steps further into programming. 

We have prepared some problems for you to solve.
[/slide]

[slide]
# Problem: Sum Even Numbers
[code-task title="Sum Even Numbersmophone" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumEvenNumbers(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.

# Example
| **Input** | **Output** |
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
[code-task title="Even and Odd Subtraction" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function evenOdd(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

# Example
  | **Input** | **Output** |
| --- | --- |
|`[1,2,3,4,5,6]`| 3 |

# Comments
`2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3`


# More Example
  | **Input** | **Output** |
| --- | --- |
|`[3,5,7,9]`|\-24 |
|`[2,4,6,8,10]`|30 |

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
# Problem: Equal Arrays
[code-task title="Equal Arrays" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function equalArrays(arr1, arr2){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a program which receives **two string arrays** and print on the console whether they are identical or NOT.

Arrays are identical if their elements are **equal**. 

- If the arrays are identical find the **sum** of the first one and print on the console following message: 
`Arrays are identical. Sum: {sum}`
 
- If the arrays are **NOT identical** find the **first index** where the arrays **differ** and print on the console following message:

`Arrays are not identical. Found difference at {index} index`


# Example
  | **Input** | **Output** |
| --- | --- |
|`['10','20','30']`, `['10','20','30']`| Arrays are identical. Sum: 60 |
|`['1','2','3','4','5']`, `['1','2','4','4','5']`| Arrays are not identical. Found difference at 2 index |
|`['1']`, `['10']`| Arrays are not identical. Found difference at 0 index |

[/task-description]
[tests]
[test]
[input]
110
120
130
\-
110
120
130
[/input]
[output]
Arrays are identical. Sum: 360
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