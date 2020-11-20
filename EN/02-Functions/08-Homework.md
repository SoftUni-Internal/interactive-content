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
|`['1','2','3','4','5','6']`| 3 |

# Comments
`2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3`


# More Example
  | **Input** | **Output** |
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
[code-task title="Condense Array to Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function condense(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a program which receives **an array of numbers** and condense them by **summing** adjacent couples of elements until a **single number** is obtained.

# Example

For example, if we have 3 elements `[2, 10, 3]`, we sum the first two and the second two elements and obtain `{2+10, 10+3} = {12, 13}`, then we sum again all adjacent elements and obtain `{12+13} = {25}`.

  | **Input** | **Output** |
| --- | --- |
|`['2','10','3']`| 25 |

# Comments
`2 10 3 -> 2+10 10+3 -> 12 13 -> 12 + 13 -> 25`

# More Examples
  | **Input** | **Output** |
| --- | --- |
|`['5','0','4','1','2']`| 35 |
|`['1']`| 1 |

# Hints

While we have more than one element in the array `nums[]`, repeat the following:

- Allocate a new array `condensed[]` of size `nums.Length-1`

- Sum the numbers from `nums[]` to `condensed[]`:
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
[code-task title="Add or Subtract" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function addOrSubstract(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function, which changes the **value** of odd and even numbers in an array of numbers. 

- If the number is **even** - **add** to its value its index position

- If the number is **odd** - **subtract** to its value its index position


# Output

On the first line print the **newly modified array**, on the second line print the sum of numbers from the **original** array, on the third line print the sum of numbers from the **modified array.**

  | **Input** | **Output** |
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
[code-task title="Array Rotation" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function arrayRotation(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that receives an **array** and **number of rotations** you have to perform (first element goes at the end).

The first element of the input array is the **number of rotations** you have to perform.

# Output

Print the resulting array elements separated my single space.

| **Input** | **Output** |
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
[code-task title="Magic Sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function magicSum(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function, which prints all **unique** pairs in an array of integers whose **sum is equal** to a given number. 

**The given number will be the first element in the array.**

# Example
| **Input** | **Output** |
| --- | --- |
|`['8', '1', '7', '6', '2', '19', '23']`| 1 7 |
|| 6 2 |

| **Input** | **Output** |
| --- | --- |
|`['27', '14', '20', '60', '13', '7', '19', '8']`| 14 13 |
||20 7 |
||19 8 |

| **Input** | **Output** |
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