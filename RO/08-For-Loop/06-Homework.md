# Homework

[slide]
# Video

[vimeo-video startTimeInSeconds="6163" endTimeInSeconds="9456"]
[stream language="EN" videoId="342410322"  /]
[stream language="RO" videoId="389330702" default /]
[/vimeo-video]
[/slide]

[slide]
# Homework
Welcome to the homework. 

Now we are going to write a couple of console applications, by which we are going to make a few more steps into programming. 

We have prepared some problems for you to solve.

Let's solve a few problems to confirm what we have learned.

[image src="https://github.com/AtanasovAtanas/pb-interactive-csharp/blob/master/assets/homeowrk.png"/]
[/slide]

[slide]
# Problem: Biggest Number
[code-task title="Biggest Number" taskId="24-04-p-01" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads **n** - number representing amount of input numbers
* Reads n numbers
* Finds and prints the **biggest number**

## Example
| **Input** | **Output** 
| --- | --- |
| 3 | 90 |
| 40 | |
| 90 | |
| 50 | |
[/task-description]
[tests]
[test]
[input]
3
30
80
40
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
3
-30
-80
-40
[/input]
[output]
-30
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Max and Min Numbers
[code-task title="Number Sequence" taskId="24-04-p-02" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads **n** representing the count of numbers to read next
* Finds the **max** and the **min numbers**
* Prints them on the console

## Example
| **Input** | **Output** 
| --- | --- |
| 5 | Max number: 304 |
| 10 | Min number: 0 |
| 304 | |
| 0 | |
| 0 | |
| 50 | |
[/task-description]
[tests]
[test]
[input]
4
100
200
0
300
[/input]
[output]
Max number: 300
Min number: 0
[/output]
[/test]
[test]
[input]
1
100
[/input]
[output]
Max number: 100
Min number: 100
[/output]
[/test]
[test]
[input]
3
-1
-2
0
[/input]
[output]
Max number: 0
Min number: -2
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Power of Number
[code-task title="Power of Number" taskId="24-04-p-03" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads **p – the power** and **n – the number**
* Prints the result of n powered by p
* Don't use `pow()`

## Example
| **Input** | **Output** 
| --- | --- |
| 5 | 32 |
| 2 | |
[/task-description]
[tests]
[test]
[input]
5
2
[/input]
[output]
32
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Equal Pairs
[code-task title="Equal Pairs" taskId="24-04-p-04" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads number **n** and **n pairs** of numbers
* Prints "Yes, value=\{sum\}", if the **sum of all** pairs is the **same**
* **Otherwise**, prints "No, maxdiff=\{diff\}"
* diff is the **max difference** in the sum between two pairs

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | Yes, value=-1 |
| -1 | |
| 0 | |
| 0 | |
| -1 | |
[/task-description]
[tests]
[test]
[input]
3
1
2
0
3
4
-1
[/input]
[output]
Yes, value=3
[/output]
[/test]
[test]
[input]
2
1
2
2
2
[/input]
[output]
No, maxdiff=1
[/output]
[/test]
[test]
[input]
4
1
1
3
1
2
2
0
0
[/input]
[output]
No, maxdiff=4
[/output]
[/test]
[test]
[input]
1
5
5
[/input]
[output]
Yes, value=10
[/output]
[/test]
[test]
[input]
2
-1
0
0
-1
[/input]
[output]
Yes, value=-1
[/output]
[/test]
[test]
[input]
2
-1
2
0
-1
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
8
5
5
70
-60
3
7
2
8
20
-10
15
-5
0
10
10
0
[/input]
[output]
Yes, value=10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Zig Zag Sum
[code-task title="Zig Zag Sum" taskId="24-04-p-05" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads **n** - number representing amount of input numbers
* Reads **n numbers** 
* For every **even** line **adds** the number to the result
* For every **odd** line **subtracts** the number from the result
* **Prints** the result

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | 10 |
| 10 | |
| 20 | |
[/task-description]
[tests]
[test]
[input]
4
20
20
20
20
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2
10
20
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
# Problem: Divide Without Remainder
[code-task title="Divide Without Remainder" taskId="24-04-p-06" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads **n** and **n numbers**
* Finds in **percentage** how many of them can **divide without remainder** at **2**, **3** and **4**
* Prints percentages p1, p2 and p3, **formatted** to the second digit

## Example
| **Input** | **Output** 
| --- | --- |
| 3 | 33.33% |
| 3 | 100.00% |
| 6 | 0.00% |
| 9 | |
[/task-description]
[tests]
[test]
[input]
3
12
27
6
[/input]
[output]
66.67%
100.00%
33.33%
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Vowel Sum
[code-task title="Vowel Sum" taskId="24-04-p-07" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads **n** - the count of characters:
* If character is **vowel** adds its value to the result

|character|a|e|i|o|u|
|---------|-|-|-|-|-|
|value|1|2|3|4|5|

* Prints the result

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | 1 |
| a | |
| g | |
[/task-description]
[tests]
[test]
[input]
2
i
u
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
5
a
u
n
m
s
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1
a
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
8
a
e
i
o
u
a
a
s
[/input]
[output]
17
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Rollercoaster
[code-task title="Rollercoaster" taskId="24-04-p-08" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads rollercoaster **places**, **minimum age**, **count of people** on the queue and **age** for each person
* If all places are taken, prints - **"The rollercoaster departures"**
* In other case, prints **"Waiting..."**

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | The rollercoaster departures |
| 10 | |
| 2 | |
| 15 | |
| 24 | |
[/task-description]
[tests]
[test]
[input]
2
10
2
15
24
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test]
[input]
2
25
5
10
15
18
5
30
[/input]
[output]
Waiting...
[/output]
[/test]
[test]
[input]
4
18
10
15
57
14
35
68
45
23
14
24
26
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test]
[input]
3
21
5
25
45
34
12
24
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Multiply
[code-task title="Multiply" taskId="24-04-p-09" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which: 

* Reads **n** 
* Prints **n's multiples** in the format "\{n\} x \{i\} = \{result\}"
* Where i are the numbers from **1 to 10** (**inclusive**)

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | 2 x 1 = 2 |
| | 2 x 2 = 4 |
| | 2 x 3 = 6 |
| | 2 x 4 = 8 |
| | 2 x 5 = 10 |
| | 2 x 6 = 12 |
| | 2 x 7 = 14 |
| | 2 x 8 = 16 |
| | 2 x 9 = 18 |
| | 2 x 10 = 20 |
[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
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