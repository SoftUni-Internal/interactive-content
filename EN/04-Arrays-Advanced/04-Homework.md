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
