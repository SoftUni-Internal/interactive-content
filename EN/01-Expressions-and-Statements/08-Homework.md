
[slide]
# Homework
Welcome to the homework. 

Now we are going to write a couple of console applications, by which we are going to make a few more steps into programming. 

We have prepared some problems for you to solve.

Let's solve a few problems to confirm what we have learned.
[image assetsSrc="homeowrk.png" /]
[/slide]

[slide]
# Problem: Calculate a Square Area
[code-task title="Calculate a sqare area" taskId="1c2a64f2-d017-49fe-8293-84f75ba70038" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function calculateSpeed (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function that gets an integer and calculates the face of a square with side `a`. 
- you get a number in the argument of the function, 
- multiply it yourself and 
- print the result in the console.

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | 25 |


[/task-description]
[tests]
[test]
[input]
2
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
25
[/output]
[/test]
[test]
[input]
100
[/input]
[output]
10000
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Currency Converter
[code-task title="Currency Converter" taskId="pb-js-01-p-02" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function currencyConverter (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to convert from USD to EUR:
  * Read a **floating-point number**: the **dollars** to be converted 
  * Convert dollars to euro (use fixed rate of dollars to euro: **0.88**)
  * Print the converted value in **euro**

## Example
| **Input** | **Output** |
| --- | --- |
| 17 | 14.96 |
| 87 | 76.56 |


[/task-description]
[tests]
[test]
[input]
10.0
[/input]
[output]
8.8
[/output]
[/test]
[test]
[input]
5.0
[/input]
[output]
4.4
[/output]
[/test]
[test]
[input]
25.5
[/input]
[output]
22.44
[/output]
[/test]
[test]
[input]
12.0
[/input]
[output]
10.56
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Convert Radians to Degrees
[code-task title="Convert Radians to Degrees" taskId="pb-js-01-p-03" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function areaOfTriangle (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function that gets an **angle** in [radians](https://en.wikipedia.org/wiki/Radian) and converts it to [degrees](https://en.wikipedia.org/wiki/Degree_(angle)). 

Use the formula: 
- degrees = radians * 180 / π. 

The number of **π** in JavaScript programs is available through `Math.PI`. 
Round the result to the nearest integer using `toFixed(0)`.


## Example
| **Input** | **Output** |
| --- | --- |
| 3.1416 | 180 |
| 6.2832 | 360 |
| 0.7854 | 45 |


[/task-description]
[tests]
[test]
[input]
0.5236
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
0.7854
[/input]
[output]
45
[/output]
[/test]
[test]
[input]
6.2832
[/input]
[output]
360
[/output]
[/test]
[test]
[input]
3.1416
[/input]
[output]
180
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Days to Minutes
[code-task title="Days to Minutes" taskId="pb-js-01-p-05" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function daysToMinutes (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to convert from days to minutes:
  * Read a single **integer** (the **days** to be converted)
  * Convert the days to minutes (use calculations)
  * Print the **minutes**

  ## Example
| **Input** | **Output** |
| --- | --- |
| 2 | 2880 |
| 5 | 7200 |


[/task-description]
[tests]
[test]
[input]
6
[/input]
[output]
8640
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
14400
[/output]
[/test]
[test]
[input]
32
[/input]
[output]
46080
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
12960
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Circle Area and Perimeter
[code-task title="Circle Area and Perimeter" taskId="pb-js-01-p-06" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function circleArea (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to calculate a **circle** area and perimeter:
  * Read a floating-point number: the **radius** of a circle
  * Calculate the **area** and **perimeter** of a circle
  * Print the calculated values **formatted** to 2 digits after the decimal point 

  ## Example
| **Input** | **Output** |
| --- | --- |
| 7 | Area = 153.94 |
|  | Perimeter = 43.98 |


[/task-description]
[tests]
[test]
[input]
12.0
[/input]
[output]
Area = 452.39
Perimeter = 75.40
[/output]
[/test]
[test]
[input]
10.0
[/input]
[output]
Area = 314.16
Perimeter = 62.83
[/output]
[/test]
[test]
[input]
5.5
[/input]
[output]
Area = 95.03
Perimeter = 34.56
[/output]
[/test]
[test]
[input]
9.4
[/input]
[output]
Area = 277.59
Perimeter = 59.06
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Yard Landscaping
[code-task title="Yard Landscaping" taskId="pb-js-01-p-04" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function fourOperations(input){
    // Write code here
}
```
[/code-editor]
[task-description]
# Description
Peter wants to landscape the back yard, so he hired a **company** to do it for him.
Write a function that **calculates** the necessary funds that Peter will have to **pay** for the job. 
The price per square meter is **7.61 dollars** with VAT. 
As Peter's yard is quite **large**, the contractor company offers an **18 percent** discount on the final price.

## Input
The function receives one argument:
- Square meters, which will be landscaped - a real number in the interval \[0.00… 10000.00\]

## Output
 Two lines are printed on the console:
-	`The final price is: {final price of the service} dollars.`
-	`The discount is: {discount} dollars.`

## Example
| **Input** | **Output** |
| --- | --- |
| 550 | The final price is: 3432.11 dollars. |
|  | The discount is: 753.39 dollars. |

## Explanations
We calculate the price for landscaping the whole yard:
- `550 * 7.61 = $4185.5`

We deduct the discount from the total amount:
- `0.18 * 4185.5 = $753.39`

We calculate the final price of the service:
- `4185.5 – 753.39 -> $3432.11`


| **Input** | **Output** |
| --- | --- |
| 150 | The final price is: 936.03 dollars. |
|  | The discount is: 205.47 dollars. |

[/task-description]
[tests]
[test]
[input]
550
[/input]
[output]
The final price is: 3432.11 dollars.
The discount is: 753.39 dollars.
[/output]
[/test]
[test]
[input]
335
[/input]
[output]
The final price is: 2090.467 dollars.
The discount is: 458.883 dollars.
[/output]
[/test]
[test]
[input]
412
[/input]
[output]
The final price is: 2570.9624000000003 dollars.
The discount is: 564.3576 dollars.
[/output]
[/test]
[test]
[input]
500
[/input]
[output]
The final price is: 3120.1 dollars.
The discount is: 684.9 dollars.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]