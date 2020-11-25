[slide]
# Homework

[image assetsSrc="homeowrk.png" /]

Welcome to the homework tab. 

Now we are going to create a couple of **console applications**, with which we are going to take a few more steps further into programming. 

We have prepared some problems for you to solve.
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
