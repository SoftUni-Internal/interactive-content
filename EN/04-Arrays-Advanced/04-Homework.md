[slide]
# Homework

[image assetsSrc="homeowrk.png" /]

Welcome to the homework tab.

Here, we are going to write a couple of console applications together.

Let us solve a few problems to exercise what we have learned.
[/slide]

[slide]
# Problem: List of Products
[code-task title="List of Products" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function listProducts(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

You will receive an **array of products.** 

Print a numbered array of all the products **ordered by name.**

# Example
| **Input** | **Output** |
| --- | --- |
|`['Potatoes', 'Tomatoes', 'Onions', 'Apples']`| 1\.Apples
||2\.Onions|
||3\.Potatoes|
||4\.Tomatoes|
 


[/task-description]
[tests]
[test]
[input]
A
B
C
[/input]
[output]
1\.A
2\.B
3\.C
[/output]
[/test]
[test]
[input]
C
Z
A
K
[/input]
[output]
1\.A
2\.C
3\.K
4\.Z
[/output]
[/test]
[test]
[input]
Pgf
Zh
fA
K
Z
Aa
[/input]
[output]
1\.Aa
2\.K
3\.Pgf
4\.Z
5\.Zh
6\.fA
[/output]
[/test]
[test]
[input]
Ca
erfZ
fdAg
fgK
[/input]
[output]
1\.Ca
2\.erfZ
3\.fdAg
4\.fgK
[/output]
[/test]
[test]
[input]
fC
fdZ
[/input]
[output]
1\.fC
2\.fdZ
[/output]
[/test]
[test]
[input]
Potatoes
Tomatoes
Onions
Apples
[/input]
[output]
1\.Apples
2\.Onions
3\.Potatoes
4\.Tomatoes
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Train
[code-task title="Train" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function train(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

You will be given an array of strings.

The first element will be a string containing wagons (numbers).

Each number inside the string represents the number of passengers that are currently in a wagon. 

The second element in the array will be the max capacity of each wagon (single number).

The rest of the elements will be commands in the following format:

- `Add {passengers}` – add a wagon to the end with the given number of passengers.

- `{passengers}` -  find an existing wagon to fit all the passengers (starting from the first wagon).

At the end print the final state of the train (all the wagons separated by a space)


# Example
| **Input** | **Output** |
| --- | --- |
|`['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']`| 72 54 21 12 4 75 23 10 0|
|`['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']`| 10 10 10 10 10 10 10|

[/task-description]
[tests]
[test]
[input]
0 0 13 15 23 12
24
Add 1
Add 15
18
Add 5
10
[/input]
[output]
18 10 13 15 23 12 1 15 5
[/output]
[/test]
[test]
[input]
10 52 0 10 2 4 23 15 43
110
Add 100
Add 10
10
Add 45
8
6
[/input]
[output]
34 52 0 10 2 4 23 15 43 100 10 45
[/output]
[/test]
[test]
[input]
52 0 15 43
80
Add 10
Add 50
10
Add 45
[/input]
[output]
62 0 15 43 10 50 45
[/output]
[/test]
[test]
[input]
10 5 10 10 2 4 3 15 3
15
Add 10
Add 1
10
Add 5
5
9
[/input]
[output]
15 15 10 10 11 4 3 15 3 10 1 5
[/output]
[/test]
[test]
[input]
0
10
Add 10
10
0
0
Add 10
Add 5
Add 5
[/input]
[output]
10 10 10 5 5
[/output]
[/test]
[test]
[input]
0 0 0 10 2 4
10
Add 10
10
10
10
8
6
[/input]
[output]
10 10 10 10 10 10 10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Distinct Array
[code-task title="Distinct Array" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function distinctArray(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

You will be given an array of integer numbers on the first line of the input (space-separated).

Remove all repeating elements from the array. 

Print the result elements separated by single space.

# Example
| Input   | Output | Comments   |
| :---:       |    :----:   |   :---:     |
|`[1, 2, 3, 4]`| 1 2 3 4|No repeating elements |
|`[7, 8, 9, 7, 2, 3, 4, 1, 2]`| 7 8 9 2 3 4 1| `7` and `2` are already present in the array \-\> remove them|
|`[20, 8, 12, 13, 4, 4, 8, 5]`| 20 8 12 13 4 5|`4` and `8` are already present in the array \-\> remove them |



[/task-description]
[tests]
[test]
[input]
11
20
51
1 
1
51
13
9
[/input]
[output]
11 20 51 1 13 9
[/output]
[/test]
[test]
[input]
7
1
2
3
54
7
2
2
1
[/input]
[output]
7 1 2 3 54
[/output]
[/test]
[test]
[input]
9
10
7
2
2
120
51
1
[/input]
[output]
9 10 7 2 120 51 1
[/output]
[/test]
[test]
[input]
20
4
4
8
5
12
2
35
5
4
[/input]
[output]
20 4 8 5 12 2 35
[/output]
[/test]
[test]
[input]
0
8
5
12
0
15
5
4
8
4
[/input]
[output]
0 8 5 12 15 4
[/output]
[/test]
[test]
[input]
20
8
12
13
4
4
8
5
[/input]
[output]
20 8 12 13 4 5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: HouseParty
[code-task title="HouseParty" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function houseParty(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that keeps track of **guests** that are going to a house party.

You will be given an **array of strings.**

Each string will be one of the following:
-	`{name} is going!`
-	`{name} is not going!`

If you receive the first type of input, you have to **add** the person if he\/she is not in the list (If he\/she is in the list print: `{name} is already in the list!`).

If you receive the second type of input, you have to **remove** the person if he\/she is in the list (if not print: `{name} is not in the list!`). 

At the end print all the guests each on a **separate line.**


# Example
| **Input**   | **Output** | 
| :---:       |    :----:   |   
|`['Allie is going!','George is going!','John is not going!','George is not going!']`| John is not in the list!|
||Allie|

| **Input**   | **Output** |
| :---:       |    :----:   |  
|`['Tom is going!','Annie is going!','Tom is going!','Garry is going!','Jerry is going!']`|Tom is already in the list!|
||Tom|
||Annie|
||Garry|
||Jerry|


[/task-description]
[tests]
[test]
[input]
Tom is going!
Annie is going!
Tom is going!
Garry is going!
Jerry is going!
[/input]
[output]
Tom is already in the list!
Tom
Annie
Garry
Jerry
[/output]
[/test]
[test]
[input]
A is going!
Ge is going!
J is not going!
G is not going!
[/input]
[output]
J is not in the list!
G is not in the list!
A
Ge
[/output]
[/test]
[test]
[input]
T is going!
A is going!
T is going!
G is going!
J is going!
J is not going!
G is not going!
[/input]
[output]
T is already in the list!
T
A
[/output]
[/test]
[test]
[input]
T is going!
A is going!
T is going!
G is going!
J is going!
[/input]
[output]
T is already in the list!
T
A
G
J
[/output]
[/test]
[test]
[input]
T is going!
A is going!
T is going!
J is not going!
G is not going!
[/input]
[output]
T is already in the list!
J is not in the list!
G is not in the list!
T
A
[/output]
[/test]
[test]
[input]
T is going\!
G is going\!
J is going\!
J is not going\!
G is not going\!
[/input]
[output]
T
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]



[slide]
# Problem: Sorting
[code-task title="Sorting" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sorting(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that sorts an **array of numbers** so that the first element is the **biggest** one, the second is the smallest one, the third is the **second biggest** one, the fourth is the second smallest one and so on. 

Print the elements on one row, **separated by single space.**


# Example
| **Input**   | **Output** | 
| :---:       |    :----:   |   
|`[1, 21, 3, 52, 69, 63, 31, 2, 18, 94]`| 94 1 69 2 63 3 52 18 31 21|

[/task-description]
[tests]
[test]
[input]
22
9
63
3
2
19
54
11
21
18
[/input]
[output]
63 2 54 3 22 9 21 11 19 18
[/output]
[/test]
[test]
[input]
11
91
18
[/input]
[output]
91 11 18 
[/output]
[/test]
[test]
[input]
21
18
4
15
21
98
[/input]
[output]
98 4 21 15 21 18
[/output]
[/test]
[test]
[input]
12
9
63
23
14
11
21
38
[/input]
[output]
63 9 38 11 23 12 21 14
[/output]
[/test]
[test]
[input]
11
91
18
[/input]
[output]
91 11 18 
[/output]
[/test]
[test]
[input]
22
9
63
3
2
19
54
11
21
18
[/input]
[output]
63 2 54 3 22 9 21 11 19 18
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Sort an Array by 2 Criteria
[code-task title="Sort an Array by 2 Criteria" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sort(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that orders an **array of strings**, by their **length** in **ascending order** as primary criteria, and by **alphabetical value in ascending order as second criteria.** 

The comparison should be **case-insensitive.**

The input comes as **array of strings.**

The output is the ordered array of strings.


# Example
| **Input** | **Output** |
| --- | --- |
|`["alpha", "beta", "gamma"]`|beta|
||alpha|
||gamma|


| **Input** | **Output** |
| --- | --- |
|`["Isacc", "Theodor", "Jack", "Harrison", "George"]`|Jack|
||Isacc|
||George|
 ||Theodor|
||Harrison|

## Hints

- An array can be **sorted** by passing a comparing function to the `Array.sort()` function

- Creating a comparing function by 2 criteria can be achieved by first comparing by the **main criteria**, if the 2 items are different \(the result of the compare is not 0\) - return the result as the result of the comparing function.

If the two items are the same by the main criteria \(the result of the compare is 0\), we need to compare by the **second criteria** and the result of that comparison is the result of the comparing function


[/task-description]
[tests]
[test]
[input]
sa
fs
fdsf
[/input]
[output]
fs
sa
fdsf
[/output]
[/test]
[test]
[input]
agg
add
gga
dfsj
[/input]
[output]
add
agg
gga
dfsj
[/output]
[/test]
[test]
[input]
gss
rwq
ngf
aaa
vf
[/input]
[output]
vf
aaa
gss
ngf
rwq
[/output]
[/test]
[test]
[input]
vds
jkl
weq
mdsc
nc
[/input]
[output]
nc
jkl
vds
weq
mdsc
[/output]
[/test]
[test]
[input]
fee
cz
fe
kcld
[/input]
[output]
cz
fe
fee
kcld
[/output]
[/test]
[test]
[input]
test
Deny
omen
Default
[/input]
[output]
Deny
omen
test
Default
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Array Manipulations
[code-task title="Array Manipulations" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function arrayManipulations(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that manipulates an array of numbers. 

- `Add {number}`: add a number to the end of the array

- `Remove {number}`: remove number from the array

-	`RemoveAt {index}`: removes number at a given index

- `Insert {number} {index}`: inserts a number at a given index

**Note: All the indices will be valid!**

Print the final state of the array (separated by single space).

The input comes as array of strings.

First element will be a string containing the **array to manipulate.**

Every other **command** you receive will also be a string.

The output is the manipulated array printed on the console on a single line, separated by space.


# Example
| **Input** | **Output** |
| --- | --- |
|`['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']`|4 53 6 8 43 3|

[/task-description]
[tests]
[test]
[input]
14 19 52 33 16 3 15 78 19 20 30
Add 7
Remove 12
RemoveAt 0
Insert 5 1
RemoveAt 5
RemoveAt 7
RemoveAt 8
Insert 10 1
[/input]
[output]
19 10 5 52 33 16 15 78 20 7
[/output]
[/test]
[test]
[input]
14 33 16 3 15 78 30
Add 9
Remove 12
RemoveAt 6
RemoveAt 1
RemoveAt 8
Insert 10 1
[/input]
[output]
14 10 16 3 15 78 9
[/output]
[/test]
[test]
[input]
14 1 9 3 15 8
Remove 1
RemoveAt 0
Add 12
RemoveAt 1
Insert 10 1
[/input]
[output]
9 10 15 8 12
[/output]
[/test]
[test]
[input]
14 1 9 3 15 12 19 30 5 8
Add 12
RemoveAt 2
Add 11
RemoveAt 3
Add 12
RemoveAt 1
Insert 10 1
[/input]
[output]
14 10 3 12 19 30 5 8 12 11 12
[/output]
[/test]
[test]
[input]
4 1 9 3 25 12 9 3 55 12 19 30 65 18
Add 12
RemoveAt 2
RemoveAt 1
Insert 10 1
[/input]
[output]
4 10 3 25 12 9 3 55 12 19 30 65 18 12
[/output]
[/test]
[test]
[input]
4 19 2 53 6 43
Add 3
Remove 2
RemoveAt 1
Insert 8 3
[/input]
[output]
4 53 6 8 43 3
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]