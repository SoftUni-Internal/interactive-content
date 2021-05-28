
# Homework
[slide hideTitle]

# Problem: Last K Numbers Sequence 

[code-task title="Last K Numbers Sequence" taskId="java-path-js-advanced-arrays-Last-K-Numbers-Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function sequence(n, k){
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

You are given two integers **n** and **k**. 

Write a JS function that generates and prints the following sequence of numbers: 

- The first number is 1 

- Every other number equals the sum of the previous **k** numbers 

- The length of the sequence is **n** numbers 

The **input** comes as two **integers**. 

The **output** is printed to the console on a single line, separated by space. 

## Examples
| **Input** | **Output** |
| --- | --- |
|sequence(6, 3) | 1 1 2 4 7 13 |
|sequence(8, 2) | 1 1 2 3 5 8 13 21 |

## Explanation 

The 2nd element (1) is the sum of the three elements before it or all of them if they are less than three. 

The third element is the sum of the first two elements (1 and 1). 

The 4th element is the sum of 1, 1, and 2. 

The 5th element is the sum of the 2nd, 3rd, and 4th (1, 2, and 4) and so on. 

[/task-description]
[code-io /]
[tests]
[test]
[input]
sequence(1, 20)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
sequence(20, 1)
[/input]
[output]
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
[/output]
[/test]
[test]
[input]
sequence(14, 13)
[/input]
[output]
1 1 2 4 8 16 32 64 128 256 512 1024 2048 4096
[/output]
[/test]
[test]
[input]
sequence(15, 4)
[/input]
[output]
1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536
[/output]
[/test]
[test open]
[input]
sequence(6, 3)
[/input]
[output]
1 1 2 4 7 13
[/output]
[/test]
[test open]
[input]
sequence(8, 2)
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
sequence(9, 5)
[/input]
[output]
1 1 2 4 8 16 31 61 120
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Problem: Print an Array with a Given Delimiter 

[code-task title="Print an Array with a Given Delimiter " taskId="java-path-js-advanced-arrays-Print-an-Array-with-a-Given-Delimiter" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function print(input){
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

Write a function that **separates** the elements of an array with a given **delimiter**. 

The **input** comes as an **array of strings**. 

The last element of the array is the delimiter. 

The **output** is the same array, printed to the console, where each element is separated from the others by the given delimiter. 

## Examples
| **Input** | **Output** |
| --- | --- |
|print([ 'One', 'Two', 'Three', 'Four', 'Five', '-' ]) | One-Two-Three-Four-Five |
|print([ 'How about no?', 'I', 'will', 'not', 'do', 'it!', '_' ]) | How about no?_I_will_not_do_it! |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
print([ 'One', 'Two', 'Three', 'Four', 'Five', '-' ])
[/input]
[output]
One-Two-Three-Four-Five
[/output]
[/test]
[test open]
[input]
print([ 'How', 'about', 'no?', 'I', 'will', 'not', 'do', 'it!', '_' ])
[/input]
[output]
How_about_no?_I_will_not_do_it!
[/output]
[/test]
[test]
[input]
print([ 'count', 'Of', 'Elements', 'That', 'Meet', 'The', 'Current', 'Condition', '_' ])
[/input]
[output]
count_Of_Elements_That_Meet_The_Current_Condition
[/output]
[/test]
[test]
[input]
print([ 'The', 'Car', 'Was', 'Empty!', '\|' ])
[/input]
[output]
The\|Car\|Was\|Empty!
[/output]
[/test]
[test]
[input]
print([ 'There have been a majority of emergencies like huricanes', 'firestorms', 'murders', 'robberies', ' and many more on the way...', ',' ])
[/input]
[output]
There have been a majority of emergencies like huricanes,firestorms,murders,robberies, and many more on the way...
[/output]
[/test]
[test]
[input]
print([ 'Object', 'prototype', 'add()', '.' ])
[/input]
[output]
Object.prototype.add()
[/output]
[/test]
[test]
[input]
print([ 'test', '005', 'out', 'txt', '.' ])
[/input]
[output]
test.005.out.txt
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Print Every N-th Element of an Array 

[code-task title="Print Every N-th Element of an Array" taskId="java-path-js-advanced-arrays-Print-Every-N-th-Element-of-an-Array" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function print(input){
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

Write a function that **iterates** through an array with a **given step** and prints the values after each step. 

The **input** comes as an **array of strings**. 

The last element is **N - the iteration step**. 

The **output** is every **N-th** element **starting from the first one**. 

If the step is "**3**", you need to print the **1-st**, the** 4-th**, the **7-th** … and so on, until you reach the end of the array. 

The elements should be printed each on a new line. 

## Examples
| **Input** | **Output** |
| --- | --- |
|print([ '5', '20', '31', '4', '20', '2' ]) | 5 |
||31 |
||20  |

| **Input** | **Output** |
| --- | --- |
|print([ 'dsa', 'asd', 'test', 'tset', '2' ]) | dsa |
||test |

| **Input** | **Output** |
| --- | --- |
|print([ '1', '2', '3', '4', '5', '6' ]) | 1 |

## Hints
Use what you have seen from the **previous problem** to **extract the last element** of the array. 

Create a **step** variable to hold the **given step** of the array. 

Then, **print all the elements** with a **for** loop, **incrementing** the **loop variable** with the value of the step variable. 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
print([ '5', '20', '31', '4', '20', '2' ])
[/input]
[output]
5
31
20
[/output]
[/test]
[test open]
[input]
print([ 'dsa', 'asd', 'test', 'tset', '2' ])
[/input]
[output]
dsa
test
[/output]
[/test]
[test open]
[input]
print([ '1', '2', '3', '4', '5', '6' ])
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
print([ '12', '23', '34', '45', '56', '67', '78', '89', '910', '2' ])
[/input]
[output]
12
34
56
78
910
[/output]
[/test]
[test]
[input]
print([ '0', '0', '1', '0', '2', '0', '3', '0', '4', '0', '5', '0', '6', '0', '7', '0', '8', '0', '9', '2' ])
[/input]
[output]
0
1
2
3
4
5
6
7
8
9
[/output]
[/test]
[test]
[input]
print([ 'abcdefg', 'bcdefgh', 'cdefghi', 'defghij', 'efghijk', 'fghijkl','ghijklm', 'hijklmn', 'ijklmno', 'jklmnop', 'klmnopq', 'lmnopqr', 'mnopqrs', 'nopqrst', 'opqrstu', 'pqrstuv', 'qrstuvw', 'rstuvwx', 'stuvwxy', 'tuvwxyz', 'uvwxyz', 'vwxyz', '7' ])
[/input]
[output]
abcdefg
hijklmn
opqrstu
vwxyz
[/output]
[/test]
[test]
[input]
print([ 'What', 'the', 'fuck', 'are', 'you', 'doing', 'you', 'fucking', 'stupid', 'motherfuckers', 'god', 'damn', 'doing?', '3' ])
[/input]
[output]
What
are
you
motherfuckers
doing?
[/output]
[/test]
[test]
[input]
print([ 'This', 'is', 'the', 'last', 'thing,', 'I', 'can', 'think', 'of...', '1' ])
[/input]
[output]
This
is
the
last
thing,
I
can
think
of...
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Add and Remove Elements 

[code-task title="Add and Remove Elements" taskId="java-path-js-advanced-arrays-Add-and-Remove-Elements" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function andAndRemove(input){
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

Write a JS function that **adds** and **removes** numbers to / from an array. 

You will receive a command which can either be "**add**" or "**remove**".  

The **initial number** is 1. 

Each input command should **increase that number**, regardless of what it is. 
Upon receiving an "**add**" command you should add the current number to your array. 

Upon receiving the "**remove**" command you should remove the last entered number, currently existent in the array. 

The **input** comes as an **array of strings**. 

Each element holds a **command**.  

The **output** is the array itself, with each element printed on a new line. 

In case of an empty array, just print "**Empty**". 


## Examples
| **Input** | **Output** |
| --- | --- |
|andAndRemove([ 'add', 'add', 'add', 'add' ]) | 1 |
||2 |
||3  |
||4  |


| **Input** | **Output** |
| --- | --- |
|andAndRemove([ 'add', 'add', 'remove', 'add', 'add' ]) | 1 |
||4 |
||5 |

| **Input** | **Output** |
| --- | --- |
|andAndRemove([ 'remove', 'remove', 'remove' ]) | Empty|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
andAndRemove([ 'add', 'add', 'add', 'add' ])
[/input]
[output]
1
2
3
4
[/output]
[/test]
[test open]
[input]
andAndRemove([ 'add', 'add', 'remove', 'add', 'add' ])
[/input]
[output]
1
4
5
[/output]
[/test]
[test open]
[input]
andAndRemove([ 'remove', 'remove', 'remove' ])
[/input]
[output]
Empty
[/output]
[/test]
[test]
[input]
andAndRemove([ 'add', 'add', 'add', 'add', 'add', 'remove', 'add' ])
[/input]
[output]
1
2
3
4
7
[/output]
[/test]
[test]
[input]
andAndRemove([ 'remove', 'remove', 'remove', 'add' ])
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
andAndRemove([ 'remove', 'remove', 'remove', 'add', 'remove', 'add' ])
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
andAndRemove([ 'add', 'add', 'add', 'add', 'remove', 'remove', 'remove', 'remove' ])
[/input]
[output]
Empty
[/output]
[/test]
[test]
[input]
andAndRemove([ 'add', 'remove', 'add', 'remove', 'add', 'remove', 'add', 'remove', 'add', 'remove', 'add', 'remove', 'add' ])
[/input]
[output]
13
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Rotate an Array  

[code-task title="Rotate an Array" taskId="java-path-js-advanced-arrays-Rotate-an-Array" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function rotateAnArray(input){
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

Write a JS function that rotates an array. 

The array should be rotated **to the right side**, meaning that the last element should become the first upon rotation.  

The **input** comes as an **array of strings**. 

The **last element** of the array is the number of rotations you need to perform. 

The **output** is the new array after the rotations. 

The elements should be printed on one line, separated by a **single space**. 

## Examples
| **Input** | **Output** |
| --- | --- |
|rotateAnArray([ '1', '2', '3', '4', '2' ]) | 3 4 1 2  |
|rotateAnArray([ 'Banana', 'Orange', 'Coconut', 'Apple', '15' ]) | Orange Coconut Apple Banana |

## Hints 

Check if there is a **built-in function** for inserting elements **at the start** of the array. 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
rotateAnArray([ '1', '2', '3', '4', '2' ])
[/input]
[output]
3 4 1 2
[/output]
[/test]
[test open]
[input]
rotateAnArray([ 'Banana', 'Orange', 'Coconut', 'Apple', '15' ])
[/input]
[output]
Orange Coconut Apple Banana
[/output]
[/test]
[test]
[input]
rotateAnArray([ 'Yoda-', 'This', 'Will', 'Be', 'Rotated', 'Times', '2' ])
[/input]
[output]
Rotated Times Yoda- This Will Be
[/output]
[/test]
[test]
[input]
rotateAnArray([ '01', '32', '54', '76', '98', '4' ])
[/input]
[output]
32 54 76 98 01
[/output]
[/test]
[test]
[input]
rotateAnArray([ '.003', '.out', '.txt', 'test', '1' ])
[/input]
[output]
test .003 .out .txt
[/output]
[/test]
[test]
[input]
rotateAnArray([ '1', '2', '3', '4', '0' ])
[/input]
[output]
1 2 3 4
[/output]
[/test]
[test]
[input]
rotateAnArray([ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '2000000000' ])
[/input]
[output]
0 1 2 3 4 5 6 7 8 9
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Extract Increasing Subsequence from Array 

[code-task title="Extract Increasing Subsequence from Array" taskId="java-path-js-advanced-arrays-Extract-Increasing-Subsequence-from-Array" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function extractSubsequence(input){
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

Write a function that extracts only those numbers that **form a non-decreasing subsequence**. 

In other words, you start from the **first element** and continue to **the end** of the **given array of numbers**. 

If a number is **LESS THAN** the **current biggest** number, **ignore it**.

Alternatively, if it is equal or higher than the **current biggest** one, you set it as the **new biggest number** and continue.   

The **input** comes as an **array of numbers**. 

The **output** is the processed array after the filtration, which should be a non-decreasing subsequence. 

Each element should be printed on a new line. 

## Examples
| **Input** | **Output** |
| --- | --- |
|extractSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24 ]) |1 |
||3|
||8|
||10|
||12|
||24|


| **Input** | **Output** |
| --- | --- |
|extractSubsequence([ 1, 2, 3, 4 ]) |1 |
||2|
||3|
||4|

| **Input** | **Output** |
| --- | --- |
|extractSubsequence([ 20, 3, 2, 15, 6, 1 ]) |20 |

## Hints 

The `Array.reduce()` built-in function might help you a lot with this problem. 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
extractSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24 ])
[/input]
[output]
1
3
8
10
12
24
[/output]
[/test]
[test open]
[input]
extractSubsequence([ 1, 2, 3, 4 ])
[/input]
[output]
1
2
3
4
[/output]
[/test]
[test open]
[input]
extractSubsequence([ 20, 3, 2, 15, 6, 1 ])
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
extractSubsequence([ 0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9 ])
[/input]
[output]
0
1
2
3
4
5
6
7
8
9
[/output]
[/test]
[test]
[input]
extractSubsequence([ 20, 45, 32, 12, 71, 23, 100 ])
[/input]
[output]
20
45
71
100
[/output]
[/test]
[test]
[input]
extractSubsequence([ 100, 101, 100, 102, 100, 13 ])
[/input]
[output]
100
101
102
[/output]
[/test]
[test]
[input]
extractSubsequence([ 12, 21, 34, 43, 56, 65, 78, 87, 910, 109, 910, 910 ])
[/input]
[output]
12
21
34
43
56
65
78
87
910
910
910
[/output]
[/test]
[test]
[input]
extractSubsequence([ 0, -1, -2, -3, -4 ])
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Sort an Array by 2 Criteria  

[code-task title="Sort an Array by 2 Criteria" taskId="java-path-js-advanced-arrays-Sort-an-Array-by-2-Criteria" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function sort(input){
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

Write a function that sorts a **given array of strings** by **length** in **ascending order** as **primary criteria** and by **alphabetical value** in ascending order as **second criteria**. 

The comparison should be **case-insensitive**. 

The **input** comes as an **array of strings**. 

The **output** is the ordered array of strings where each element is printed on a new line. 

## Examples
| **Input** | **Output** |
| --- | --- |
|sort([ 'alpha', 'beta', 'gamma' ]) |beta |
||alpha|
||gamma|


## Examples
| **Input** | **Output** |
| --- | --- |
|sort([ 'Isacc', 'Theodor', 'Jack', 'Harrison', 'George' ]) |Jack |
||Isacc |
||George |
||Theodor|
||Harrison|


## Examples
| **Input** | **Output** |
| --- | --- |
|sort([ 'test', 'Deny', 'omen', 'Default' ]) |Deny |
||omen|
||test|
||Default|

## Hints 

An array can be sorted by passing a comparing function to the `Array.sort()` method. 

Creating a comparing function with 2 criteria can be achieved by comparing by the **main criteria** first. 

If the 2 items are different (the result of the compare function is not 0), return the result. 

If the two items are the same by the **main criteria** (the result of the compare function is 0), we need to compare by the **second criteria** and the result of that comparison is the result of the comparing function. 

You can learn more about `Array.sort()` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).


[/task-description]
[code-io /]
[tests]
[test open]
[input]
sort([ 'alpha', 'beta', 'gamma' ])
[/input]
[output]
beta
alpha
gamma
[/output]
[/test]
[test open]
[input]
sort([ 'Isacc', 'Theodor', 'Jack', 'Harrison', 'George' ])
[/input]
[output]
Jack
Isacc
George
Theodor
Harrison
[/output]
[/test]
[test open]
[input]
sort([ 'test', 'Deny', 'omen', 'Default' ])
[/input]
[output]
Deny
omen
test
Default
[/output]
[/test]
[test]
[input]
sort([ '0', '9', '3', '6', '1', '5', '2', '4', '8', '7' ])
[/input]
[output]
0
1
2
3
4
5
6
7
8
9
[/output]
[/test]
[test]
[input]
sort([ 'Adolf', 'Ariel', 'Rusalka', 'Mermaid', 'Blueberry', 'Blackberry', 'Borovinka', 'Kapinchica' ])
[/input]
[output]
Adolf
Ariel
Mermaid
Rusalka
Blueberry
Borovinka
Blackberry
Kapinchica
[/output]
[/test]
[test]
[input]
sort([ 'there', 'Will', 'be any', 'evidences', 'of the case?' ])
[/input]
[output]
Will 
there 
be any 
evidences 
of the case?
[/output]
[/test]
[test]
[input]
sort([ 'WriteLine', 'Console', '(parsedInput)' ])
[/input]
[output]
Console
WriteLine
(parsedInput)
[/output]
[/test]
[test]
[input]
sort([ 'this', 'I swear it is!', 'the last one.', 'Is' ])
[/input]
[output]
Is
this
the last one.
I swear it is!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Magic Matrices   

[code-task title="Magic Matrices" taskId="java-path-js-advanced-arrays-Magic-Matrices" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function magicMatrices(input){
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

Write a function that checks if a given matrix of numbers is **magical**. 

A matrix is magical if the **sums of the cells** of every row and **every column** are **equal**.  

The **input** comes as an **array of arrays**, containing numbers (number 2D matrix).

The input numbers will **always be positive**. 

The **output** is a Boolean result indicating whether the matrix is magical or not. 

## Examples
| **Input** | **Output** |
| --- | --- |
|magicMatrices([ [ 4, 5, 6 ], [ 6, 5, 4 ], [ 5, 5, 5 ] ]) |true |
|magicMatrices([ [ 11, 32, 45 ], [ 21, 0, 1 ], [ 21, 1, 1 ] ])|false|
|magicMatrices([ [ 1, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ] ])|true|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
magicMatrices([ [ 4, 5, 6 ], [ 6, 5, 4 ], [ 5, 5, 5 ] ])
[/input]
[output]
true
[/output]
[/test]
[test open]
[input]
magicMatrices([ [ 11, 32, 45 ], [ 21, 0, 1 ], [ 21, 1, 1 ] ])
[/input]
[output]
false
[/output]
[/test]
[test open]
[input]
magicMatrices([ [ 1, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ] ])
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
magicMatrices([ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ])
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
magicMatrices([ [ 1, 0, 1, 0, 1, 0 ], [ 0, 1, 0, 1, 0, 1 ], [ 1, 0, 1, 0, 1, 0 ], [ 0, 1, 0, 1, 0, 1, ], [ 1, 0, 1, 0, 1, 0 ], [ 0, 1, 0, 1, 0, 1 ] ])
[/input]
[output]
true
[/output]
[/test]
[test]
[input]
magicMatrices([ [ 1, 0, 0 ], [ 0, 0, 1 ] ])
[/input]
[output]
false
[/output]
[/test]
[test]
[input]
magicMatrices([ [ 3, 6, 3 ], [ 6, 3, 6 ], [ 3, 6, 3 ] ])
[/input]
[output]
false
[/output]
[/test]
[test]
[input]
magicMatrices([ [ 12, 25, 67 ], [ 40, 40, 24 ], [ 52, 39, 13 ] ])
[/input]
[output]
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Tic-Tac-Toe   

[code-task title="Tic-Tac-Toe" taskId="java-path-js-advanced-arrays-Tic-Tac-Toe" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function ticTacToe(input){
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
Create a tic-tac-toe console application. 

You will receive an array of arrays. 

As you know, there are two players in this game, so the first element of the input will be first player's chosen coordinates. 

The second element will be the second player's coordinates and so on. 

The initial state of the dashboard is  

```js
[[false, false, false], 
[false, false, false], 
[false, false, false]] 
```
The first player's mark is **X** and the second player's mark is **O**. 

## Input 

One parameter: 

- An array - **the moves** that the players make 

## Output 

- There are two players - X and O 

- If a player tries to make their turn an on already taken place, they have to make a turn again, and you should print the following message: 

"**This place is already taken. Please choose another!**" 

- If there are no free spaces on the dashboard and nobody wins, the game should end, and you should print the following message: 

"**The game ended! Nobody wins :(**" 

- If someone wins, you should print the following message and the **current state** of the **dashboard**: 

"**Player** \{ **X/0** \} **wins**" 

**Note**: When printing the state of the dashboard, the elements of each row of the dashboard should be separated by "**\t**" and each row should be on a new line.  

 

## Constraints 

The elements in the input array will always be enough to end the game.


## Examples One
|**Input**|**Output**| 
| --- | --- |
|ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0' ]) |Player O wins!|
||O X	X |
||X	O	X|
||O	false	O |

|**Input**|**Output**| 
| --- | --- |
|ticTacToe([ '0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1' ]) |This place is already taken. Please choose another! |
||Player X wins!  |
||X	X X |
||false	O	O  |
||false	false	false| 


|**Input**|**Output**| 
| --- | --- |
|ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0' ]) |The game ended! Nobody wins :(  |
||O	X	X  |
||X	X	O  |
||O	O	X   |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0' ])
[/input]
[output]
Player O wins!
O	X	X
X	O	X
O	false	O
[/output]
[/test]
[test open]
[input]
ticTacToe([ '0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1' ])
[/input]
[output]
This place is already taken. Please choose another!
Player X wins!
X	X	X
false	O	O
false	false	false
[/output]
[/test]
[test open]
[input]
ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0' ])
[/input]
[output]
The game ended! Nobody wins :(
O	X	X
X	X	O
O	O	X
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '0 1', '1 0', '0 2', '2 0' ])
[/input]
[output]
Player X wins!
X	O	O
X	false	false
X	false	false
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 1', '0 0', '0 2', '1 0', '2 2', '2 0' ])
[/input]
[output]
Player O wins!
O	X	X
O	false	false
O	false	X
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '2 2', '1 0', '1 1', '2 0' ])
[/input]
[output]
Player X wins!
X	false	false
X	O	false
X	false	O
[/output]
[/test]
[test]
[input]
ticTacToe([ '2 2', '0 0', '1 1', '1 0', '1 2', '2 0' ])
[/input]
[output]
Player O wins!
O	false	false
O	X	X
O	false	X
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '0 2', '1 1', '1 2', '2 2' ])
[/input]
[output]
Player X wins!
X	false	O
false	X	O
false	false	X
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 2', '0 0', '1 2', '1 1', '2 1', '2 2' ])
[/input]
[output]
Player O wins!
O	false	X
false	O	X
false	X	O
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1' ])
[/input]
[output]
This place is already taken. Please choose another!
Player X wins!
X	X	X
false	O	O
false	false	false
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '0 2', '1 0', '2 0', '0 0', '2 1', '1 1' ])
[/input]
[output]
This place is already taken. Please choose another!
Player O wins!
X	false	O
X	O	false
O	X	false
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0' ])
[/input]
[output]
The game ended! Nobody wins :(
O	X	X
X	X	O
O	O	X
[/output]
[/test]
[test]
[input]
ticTacToe([ '0 0', '1 1', '0 2', '0 1', '2 1', '1 0', '1 2', '2 2', '0 2', '2 0' ])
[/input]
[output]
This place is already taken. Please choose another!
The game ended! Nobody wins :(
X	O	X
O	O	X
X	X	O
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
