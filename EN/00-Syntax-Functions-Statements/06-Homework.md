# Homework
[slide hideTitle]
# Problem: Math Operations
[code-task title="Math Operations" taskId="js-syntax-functions-statements-mathops" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculate(num1, num2, operator) {
    //Write your code here
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
## Description
Write a JS function that receives **two** **numbers** and **a string** as input.

The string may be one of the following: '**+**', '**-**', '**\***', '**/**', '**%**', '**\*\***'.

Print the result of the mathematical **operation** between **both numbers** and the **operator** you receive as a string to the console.

The **input** comes as **two numbers** and **a string argument** passed to your function.

The **output** should be printed to the console.



## Examples
| **Input** | **Output** |
| --- | --- |
| calculate(5, 6, '+') | 11 |
| calculate(3, 5.5, '*') | 16.5 |


## Hints

Write a function that receives **three** arguments:

[image assetsSrc="syntax-homework-01.png" /]

Declare a variable named **result** that will keep your mathematical result.

Use a **switch** statement to take the string from your input and based on it, perform the mathematical operation between the two numbers.

[image assetsSrc="syntax-homework-02.png" /]


Print the result to the console.

[image assetsSrc="syntax-homework-03.png" /]


[/task-description]
[code-io /]
[tests]
[test open]
[input]
calculate(5, 6, '+')
[/input]
[output]
11
[/output]
[/test]
[test open]
[input]
calculate(3, 5.5, '*')
[/input]
[output]
16.5
[/output]
[/test]
[test]
[input]
calculate(1, 5, '+')
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
calculate(53, 55, '-')
[/input]
[output]
-2
[/output]
[/test]
[test]
[input]
11
5
/
[/input]
[output]
2.2
[/output]
[/test]
[test]
[input]
calculate(333, 1, '*')
[/input]
[output]
333
[/output]
[/test]
[test]
[input]
calculate(877, 21, '%')
[/input]
[output]
16
[/output]
[/test]
[test]
[input]
calculate(11, 2, '**')
[/input]
[output]
121
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Sum of Numbers N...M
[code-task title="Sum of Numbers N...M" taskId="js-syntax-functions-statements-sumofnumsnm" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sum(n, m) {
    //Write your code here
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
## Description

Write a function that receives two numbers **n** and **m** as input and **prints the sum** of all numbers from **n** to **m**.

The **input** comes as **two string elements** that need to be **parsed** to numbers.

The **output** should **return** the sum.




## Examples
| **Input** | **Output** |
| --- | --- |
| sum('1', '5') | 15 |
| sum('-8', '20') | 174 |


## Hints

Write a function that receives two string arguments and parse them to numbers. Use `Number(string)` function or just put the '**+**' sign before the string. 


[image assetsSrc="syntax-homework-04.png" /]
[image assetsSrc="syntax-homework-05.png" /]

Declare a variable named **result** that will keep the mathematical results.

Write a **for** **loop** from **num1** to **num2** and for every turn of the cycle, until it’s completed, add the current value.

[image assetsSrc="syntax-homework-06.png" /]

Finally, return the result.

[image assetsSrc="syntax-homework-07.png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
sum('1', '5')
[/input]
[output]
15
[/output]
[/test]
[test open]
[input]
sum('-8', '20')
[/input]
[output]
174
[/output]
[/test]
[test]
[input]
sum('33', '244')
[/input]
[output]
29362
[/output]
[/test]
[test]
[input]
sum('0', '150')
[/input]
[output]
11325
[/output]
[/test]
[test]
[input]
sum('-33', '2')
[/input]
[output]
-558
[/output]
[/test]
[test]
[input]
sum('11.5', '2')
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
sum('0.5', '0.5')
[/input]
[output]
0.5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Fruit
[code-task title="Fruit" taskId="js-syntax-functions-statements-fruit" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculateCost(fruit, weightInGrams, pricePerKG) {
    //Write your code here
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
## Description

Write a function that calculates how much money you need to buy fruits. You will receive a **string** representing the type of fruits you want to buy, **a number** for their weight in grams, and another **number** for the price per kilogram.

Print the following text to the console: 

I need $\{money\} to buy \{weight\} kilograms of of \{fruit\}.

Print the weight and the money **rounded** to two decimal places.

The **input** comes as **three arguments** passed to your function.

The **output** should be printed on the console.



## Examples

| **Input** | **Output** |
| --- | --- |
| calculateCost('oranges', 2500, 1.80) | I need $4.50 to buy 2.50 kilograms of of oranges. |
| calculateCost('apples', 1563, 2.35) | I need $3.67 to buy 1.56 kilograms of of apples. |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
calculateCost('oranges', 2500, 1.80)
[/input]
[output]
I need $4.50 to buy 2.50 kilograms of oranges.
[/output]
[/test]
[test open]
[input]
calculateCost('apples', 1563, 2.35)
[/input]
[output]
I need $3.67 to buy 1.56 kilograms of apples.
[/output]
[/test]
[test]
[input]
calculateCost('bananas', 21.20, 55.2)
[/input]
[output]
I need $1.17 to buy 0.02 kilograms of bananas.
[/output]
[/test]
[test]
[input]
calculateCost('jkkhkj', 566, 2.15)
[/input]
[output]
I need $1.22 to buy 0.57 kilograms of jkkhkj.
[/output]
[/test]
[test]
[input]
calculateCost('aaa', 1111, 32.15)
[/input]
[output]
I need $35.72 to buy 1.11 kilograms of aaa.
[/output]
[/test]
[test]
[input]
calculateCost('aaal', 0, 32.15)
[/input]
[output]
I need $0.00 to buy 0.00 kilograms of aaal.
[/output]
[/test]
[test]
[input]
calculateCost('ppp', 10, 5)
[/input]
[output]
I need $0.05 to buy 0.01 kilograms of ppp.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Greatest Common Divisor - GCD
[code-task title="Greatest Common Divisor - GCD" taskId="js-syntax-functions-statements-gcd" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculateGCD(num1, num2) {
    //Write your code here
}
```
[/code-editor]

[code-adapter]


function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
[/code-adapter]

[task-description]
## Description

Write a function that receives **two** **positive** **numbers** as input and finds the greatest common divisor.

The **input** comes **as two positive integer numbers**.

The **output** should be printed to the console.


## Examples

| **Input** | **Output** |
| --- | --- |
| calculateGCD(15, 5) | 5 |
| calculateGCD(2154, 458) | 2 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
calculateGCD(15, 5)
[/input]
[output]
5
[/output]
[/test]
[test open]
[input]
calculateGCD(2154, 458)
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
calculateGCD(100, 3)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
calculateGCD(10, 2)
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
calculateGCD(542, 2)
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
calculateGCD(31, 5)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
calculateGCD(105, 5)
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
calculateGCD(15, 3)
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
calculateGCD(145, 9)
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Same Numbers
[code-task title="Same Numbers" taskId="js-syntax-functions-statements-samenumbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function checkNumber(input) {
    //Write your code here
}
```
[/code-editor]

[code-adapter]


function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
[/code-adapter]

[task-description]
## Description

Write a function that receives **an integer** as input and checks if all the digits in the given number are the same or not.

Print true to the console if all numbers are same and **false** if not. On the next line print **the sum of all digits**.

The **input** comes as an integer.

The **output** should be printed to the console.



## Examples

| **Input** | **Output** |
| --- | --- |
| checkNumber(2222222) | true |
|  | 14 |
| **checkNumber(1234)** | **false** |
|  | 10 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
checkNumber(2222222)
[/input]
[output]
true
14
[/output]
[/test]
[test open]
[input]
checkNumber(1234)
[/input]
[output]
false
10
[/output]
[/test]
[test]
[input]
checkNumber(111)
[/input]
[output]
true
3
[/output]
[/test]
[test]
[input]
checkNumber(00000)
[/input]
[output]
true
0
[/output]
[/test]
[test]
[input]
checkNumber(123456789)
[/input]
[output]
false
45
[/output]
[/test]
[test]
[input]
checkNumber(11112)
[/input]
[output]
false
6
[/output]
[/test]
[test]
[input]
checkNumber(333301)
[/input]
[output]
false
13
[/output]
[/test]
[test]
[input]
checkNumber(9999999999)
[/input]
[output]
true
90
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Time to Walk
[code-task title="Time to Walk" taskId="js-syntax-functions-statements-timetowalk" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculateTime(stepsCount, stepLength, speed) {
    //Write your code here
}
```
[/code-editor]

[code-adapter]


function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
[/code-adapter]

[task-description]
## Description

Write a function that **calculates** how long it takes a student to get to university.

The function receives **three numbers**:

- The **first** one is the number of **steps** the student takes from their home to the university

- Тhe **second** number is the length of the student's steps in **meters**

- Тhe **third** number is the student's speed in **km/h**

Every 500 meters, the student rests and takes a **1-minute break**.

Calculate how long the student walks from home to university and print to the console the result in the following format: `hours:minutes:seconds`.

The **input** comes as **three numbers**.

The **output** should be printed to the console.

## Examples

| **Input** | **Output** |
| --- | --- |
| calculateTime(4000, 0.60, 5) | 00:32:48 |
| calculateTime(2564, 0.70, 5.5) | 00:22:35 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
calculateTime(4000, 0.60, 5)
[/input]
[output]
00:32:48
[/output]
[/test]
[test open]
[input]
calculateTime(2564, 0.70, 5.5)
[/input]
[output]
00:22:35
[/output]
[/test]
[test]
[input]
calculateTime(2564, 0.70, 5.5)
[/input]
[output]
00:22:35
[/output]
[/test]
[test]
[input]
calculateTime(1000, 0.55, 7.6)
[/input]
[output]
00:05:21
[/output]
[/test]
[test]
[input]
calculateTime(912, 1.05, 3.7)
[/input]
[output]
00:16:32
[/output]
[/test]
[test]
[input]
calculateTime(600, 0.95, 6.4)
[/input]
[output]
00:06:21
[/output]
[/test]
[test]
[input]
calculateTime(1600, 1.95, 9.4)
[/input]
[output]
00:25:55
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Road Radar
[code-task title="Road Radar" taskId="js-syntax-functions-statements-roadradar" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function speedCheck(speed, areaType) {
    //Write your code here
}
```
[/code-editor]

[code-adapter]


function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
[/code-adapter]

[task-description]
## Description
Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit:

- On the **motorway,** the limit is **130 km/h**

- On the **interstate,** the limit is **90 km/h**

- In the **city,** the limit is **50 km/h**

- Within a **residential** area, the limit is **20 km/h**

If the driver is **within the limits**, there should not be any output. If the driver is **over the limit**, however, your function should print the severity of the infraction.

For speeding up to **20** km/hover the limit, speeding should be printed.

For speeding up to **40** km/h over the limit, excessive speeding  should be printed.

For anything else, reckless driving  should be printed.

The **input** comes as an **array of elements**. The first element is the current speed (**number**), the second element is the area.

The **output** should be printed to the console. Note that in certain cases there isn't any output.


## Examples

| **Input** | **Output** |
| --- | --- |
| speedCheck(40, 'city') |  |
| speedCheck(21, 'residential') | speeding |
| speedCheck(120, 'interstate') | excessive speeding |
| speedCheck(200, 'motorway') | reckless driving |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
speedCheck(40, 'city')
[/input]
[output]

[/output]
[/test]
[test open]
[input]
speedCheck(21, 'residential')
[/input]
[output]
speeding
[/output]
[/test]
[test open]
[input]
speedCheck(120, 'interstate')
[/input]
[output]
excessive speeding
[/output]
[/test]
[test open]
[input]
speedCheck(200, 'motorway')
[/input]
[output]
reckless driving
[/output]
[/test]
[test]
[input]
speedCheck(20, 'residential')
[/input]
[output]

[/output]
[/test]
[test]
[input]
speedCheck(71, 'city')
[/input]
[output]
excessive speeding
[/output]
[/test]
[test]
[input]
speedCheck(90, 'interstate')
[/input]
[output]

[/output]
[/test]
[test]
[input]
speedCheck(130, 'motorway')
[/input]
[output]

[/output]
[/test]
[test]
[input]
speedCheck(40, 'residential')
[/input]
[output]
speeding
[/output]
[/test]
[test]
[input]
speedCheck(90, 'city')
[/input]
[output]
excessive speeding
[/output]
[/test]
[test]
[input]
speedCheck(91, 'interstate')
[/input]
[output]
speeding
[/output]
[/test]
[test]
[input]
speedCheck(131, 'motorway')
[/input]
[output]
speeding
[/output]
[/test]
[test]
[input]
speedCheck(61, 'residential')
[/input]
[output]
reckless driving
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Cooking by Numbers
[code-task title="Cooking by Numbers" taskId="js-syntax-functions-statements-cookingbynums" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cook(start, action1, action2, action3, action4, action5) {
    //Write your code here
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
## Description

Create a program that receives a **number** and five operations. Perform the operations **sequentially** by starting with the **input number** and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:

-   **chop**  - divide the number by two
-   **dice** - find the square root of the number
-   **spice**  - add 1 to the number
-   **bake**  - multiply the number by 3
-   **fillet**  - subtract 20% from the number

The **input** comes as an **array of 6 string elements**. The first element is the starting point and must be **parsed** to a number. The remaining 5 elements are the names of the operations to be performed.

The **output** should be printed to the console.


## Examples

| **Input** | **Output** |
| --- | --- |
| cook(['32', 'chop', 'chop', 'chop', 'chop', 'chop']) | 16 |
|  | 8 |
|  | 4 |
|  | 2 |
|  | 1 |
| cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']) | 3 |
|  | 4 |
|  | 2 |
|  | 6 |
|  | 4.8 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
cook(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
[/input]
[output]
16
8
4
2
1
[/output]
[/test]
[test open]
[input]
cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])
[/input]
[output]
3
4
2
6
4.8
[/output]
[/test]
[test]
[input]
cook(['1024', 'chop', 'chop', 'chop', 'chop', 'chop'])
[/input]
[output]
512
256
128
64
32
[/output]
[/test]
[test]
[input]
cook(['3', 'bake', 'dice', 'spice', 'spice', 'fillet'])
[/input]
[output]
9
3
4
5
4
[/output]
[/test]
[test]
[input]
cook(['10', 'fillet', 'chop', 'dice', 'chop', 'dice'])
[/input]
[output]
8
4
2
1
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Validity Checker
[code-task title="Validity Checker" taskId="js-syntax-functions-statements-validitycheck" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function validate(x1, y1, x2, y2) {
    //Write your code here
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
## Description

Create a program that receives two points on a plane in the format \[x1, y1, x2, y2\]. 

Check if the distance between each point and the start of the cartesian coordinate system (0, 0) is **valid**. 

A distance between two points is considered **valid**, if it is has a **positive value**.

In case a distance is valid, print "\{x1, y1\} to \{x2, y2\} is valid"

If the distance is invalid, print "\{x1, y1\} to \{x2, y2\} is invalid"

The order of comparisons should always be first \{x1, y1\} to \{0, 0\}, then \{x2, y2\} to \{0, 0\} and finally \{x1, y1\} to \{x2, y2\}**.

The **input** consists of two points given as an **array of numbers**.

For each comparison print either "\{x1, y1\} to \{x2, y2\} is valid" if the distance is valid, or "\{x1, y1\} to \{x2, y2\} is invalid" if it is invalid.


## Examples

| **Input** | **Output** |
| --- | --- |
| validate([3, 0, 0, 4]) | \{3, 0\} to \{0, 0\} is valid |
|  | \{0, 4\} to \{0, 0\} is valid |
|  | \{3, 0\} to \{0, 4\} is valid |
| validate([2, 1, 1, 1]) | {2, 1} to {0, 0} is invalid |
|  | \{1, 1\} to \{0, 0\} is invalid |
|  | \{2, 1\} to \{1, 1\} is valid |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
validate([3, 0, 0, 4])
[/input]
[output]
{3, 0} to {0, 0} is valid
{0, 4} to {0, 0} is valid
{3, 0} to {0, 4} is valid
[/output]
[/test]
[test open]
[input]
validate([2, 1, 1, 1]
[/input]
[output]
{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid
[/output]
[/test]
[test]
[input]
validate([10, 10, 10, 10])
[/input]
[output]
{10, 10} to {0, 0} is invalid
{10, 10} to {0, 0} is invalid
{10, 10} to {10, 10} is valid
[/output]
[/test]
[test]
[input]
validate([0, 0, 0, 0])
[/input]
[output]
{0, 0} to {0, 0} is valid
{0, 0} to {0, 0} is valid
{0, 0} to {0, 0} is valid
[/output]
[/test]
[test]
[input]
validate([0, 5, 0, -12])
[/input]
[output]
{0, 5} to {0, 0} is valid
{0, -12} to {0, 0} is valid
{0, 5} to {0, -12} is valid
[/output]
[/test]
[test]
[input]
validate([13, 7, 1, -1])
[/input]
[output]
{13, 7} to {0, 0} is invalid
{1, -1} to {0, 0} is invalid
{13, 7} to {1, -1} is invalid
[/output]
[/test]
[test]
[input]
validate([-2, 5, -6, 8])
[/input]
[output]
{-2, 5} to {0, 0} is invalid
{-6, 8} to {0, 0} is valid
{-2, 5} to {-6, 8} is valid
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
