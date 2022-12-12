// sectionId: "Javascript::Programming-Basics::Expressions-and-Statements::Homework"

# Homework

[slide hideTitle]
# Problem: Calculate a Square Area
[code-task title="Calculate a Square Area" taskId="pb-js-expressions-Calculate-a-square-area" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function calculateArea(input) {
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
Create a program, which receives an integer and calculates the area of a square with a side **a**.

- You will receive the side value as an argument of the function 
- Use the formula to calculate the area 
- Print the result to the console

## Example
| **Input** | **Output** |
| --- | --- |
| calculateArea(5) | 25 |
| calculateArea(12) | 144 |

[hints]
[hint]
The formula for calculating the area of a square is - a * a.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
calculateArea(12)
[/input]
[output]
144
[/output]
[/test]
[test]
[input]
calculateArea(2)
[/input]
[output]
4
[/output]
[/test]
[test open]
[input]
calculateArea(5)
[/input]
[output]
25
[/output]
[/test]
[test]
[input]
calculateArea(100)
[/input]
[output]
10000
[/output]
[/test]
[test]
[input]
calculateArea(1)
[/input]
[output]
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Currency Converter

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/problem2-currency-converter-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Currency Converter" taskId="pb-js-expressions-Currency-Converted" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function currencyConverter (input) {
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
Create a program, which converts USD to EUR:

  * You will receive a **floating-point number**: the **dollars** to be converted 
  * Convert the dollars to euro (use the fixed rate: **0.88**)
  * Print the converted value to the console

## Example
| **Input** | **Output** |
| --- | --- |
| currencyConverter(17) | 14.96 |
| currencyConverter(87) | 76.56 |


[/task-description]
[tests]
[test open]
[input]
currencyConverter(17)
[/input]
[output]
14.96
[/output]
[/test]
[test open]
[input]
currencyConverter(87)
[/input]
[output]
76.56
[/output]
[/test]
[test]
[input]
currencyConverter(10.0)
[/input]
[output]
8.8
[/output]
[/test]
[test]
[input]
currencyConverter(5.0)
[/input]
[output]
4.4
[/output]
[/test]
[test]
[input]
currencyConverter(25.5)
[/input]
[output]
22.44
[/output]
[/test]
[test]
[input]
currencyConverter(12.0)
[/input]
[output]
10.56
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Convert Radians to Degrees
[code-task title="Convert Radians to Degrees" taskId="pb-js-expressions-Convert-Radians-To-Degrees" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function areaOfTriangle (input) {
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
Create a program, which receives an **angle** in [radians](https://en.wikipedia.org/wiki/Radian) and converts it to [degrees](https://en.wikipedia.org/wiki/Degree_(angle)). 

Use the formula: 
- **degrees = radians * 180 / π** 

The number **π** in JavaScript can be accessed through **Math.PI**. 
Round the result to the nearest integer using **toFixed(0)**.

## Example
| **Input** | **Output** |
| --- | --- |
| areaOfTriangle(3.1416) | 180 |
| areaOfTriangle(6.2832) | 360 |
| areaOfTriangle(0.7854) | 45 |


[/task-description]
[tests]
[test]
[input]
areaOfTriangle(0.5236)
[/input]
[output]
30
[/output]
[/test]
[test open]
[input]
areaOfTriangle(0.7854)
[/input]
[output]
45
[/output]
[/test]
[test open]
[input]
areaOfTriangle(6.2832)
[/input]
[output]
360
[/output]
[/test]
[test open]
[input]
areaOfTriangle(3.1416)
[/input]
[output]
180
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Days to Minutes

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/problem1-days-to-minutes-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Days to Minutes" taskId="pb-js-expressions-Days-to-Minutes" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function daysToMinutes (input) {
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
Create a program, which converts days to minutes:

* You will receive a single **integer**: the **days** to be converted

* Convert the days to minutes

* Print the **minutes** to the console

  ## Example
| **Input** | **Output** |
| --- | --- |
| daysToMinutes(2) | 2880 |
| daysToMinutes(5) | 7200 |


[/task-description]
[tests]
[test open]
[input]
daysToMinutes(2)
[/input]
[output]
2880
[/output]
[/test]
[test open]
[input]
daysToMinutes(5)
[/input]
[output]
7200
[/output]
[/test]
[test]
[input]
daysToMinutes(6)
[/input]
[output]
8640
[/output]
[/test]
[test]
[input]
daysToMinutes(10)
[/input]
[output]
14400
[/output]
[/test]
[test]
[input]
daysToMinutes(32)
[/input]
[output]
46080
[/output]
[/test]
[test]
[input]
daysToMinutes(9)
[/input]
[output]
12960
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Circle Area and Perimeter
[code-task title="Circle Area and Perimeter" taskId="pb-js-expressions-Circle-Area" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function circleArea (input) {
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
Create a program, which calculates a **circle's** area and perimeter:

  * You will receive a floating-point number: the **radius** of a circle
  * Calculate the **area** and **perimeter** of the circle
  * Print the area and perimeter, **formatted** to 2 digits after the decimal point 

  ## Example
| **Input** | **Output** |
| --- | --- |
| circleArea(7) | Area = 153.94 |
|  | Perimeter = 43.98 |


| **Input** | **Output** |
| --- | --- |
| circleArea(8) | Area = 201.06 |
|  | Perimeter = 50.27 |

[hints]
[hint]
The formula for calculating a circle's perimeter is: P = 2 * π * R.
"R" is the radius.
[/hint]
[hint]
The formula for calculating a circle's area is: A = π * R * R.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
circleArea(7)
[/input]
[output]
Area = 153.94
Perimeter = 43.98
[/output]
[/test]
[test open]
[input]
circleArea(8)
[/input]
[output]
Area = 201.06
Perimeter = 50.27
[/output]
[/test]
[test]
[input]
circleArea(12.0)
[/input]
[output]
Area = 452.39
Perimeter = 75.40
[/output]
[/test]
[test]
[input]
circleArea(10.0)
[/input]
[output]
Area = 314.16
Perimeter = 62.83
[/output]
[/test]
[test]
[input]
circleArea(5.5)
[/input]
[output]
Area = 95.03
Perimeter = 34.56
[/output]
[/test]
[test]
[input]
circleArea(9.4)
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

[slide hideTitle]
# Problem: Yard Landscaping
[code-task title="Yard Landscaping" taskId="pb-js-expressions-Yard-Landscaping" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function landscape(input){
    // Write code here
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
Peter wants to have his backyard landscaped, so he hired a **company** to do it.
Create a program, which **calculates** the necessary funds that Peter will need to **pay** for the job. 
The price per square meter is **7.61 dollars** with VAT. 
As Peter's yard is quite **large**, the contractor company offers an **18 percent** discount on the final price.

## Input
The function receives one argument:
- Square meters, which will be landscaped - a floating-point number in the interval \[0.00 ... 10000.00\]

## Output
 Two lines are printed to the console:

- "**The final price is:** \{**final price of the service**\} **dollars.**"

- "**The discount is:** \{**discount**\} **dollars.**"

## Example
| **Input** | **Output** |
| --- | --- |
| landscape(150) | The final price is: 936.03 dollars. |
|  | The discount is: 205.47 dollars. |


| **Input** | **Output** |
| --- | --- |
| landscape(550) | The final price is: 3432.11 dollars. |
|  | The discount is: 753.39 dollars. |

[hints]
[hint]

Calculate the price for the landscaping of the whole yard and store it in a variable.

[/hint]

[hint]

Calculate the discount and store the result in a variable.

Steps for calculating the discount:
1.  Convert the percentage discount to a decimal. To do this, think of the percent number with a decimal to the right of the last digit. Move the decimal point two places to the left to get the converted decimal. (For example, you might want to calculate the sale price of a pair of shoes that is regularly $69.95. If the shoes are 25% off, you need to convert 25% to a decimal by thinking 25% = 25.00% = 0.25).
2.  Multiply the original price by the decimal. This will tell you the discount, or what value is being taken off the original price. (For example, to find the 25% discount on a pair of $69.95 shoes, you would calculate 69.95 × 0.25 = 17.49).

[/hint]

[hint]

Subtract the discount from the total price.

[/hint]
[hint]

Print the result on the console:
console.log('The final price is: $\{total\} dollars.');
console.log('The discount is: $\{discount\} dollars.');

[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
landscape(150)
[/input]
[output]
The final price is: 936.03 dollars.
The discount is: 205.47 dollars.
[/output]
[/test]
[test open]
[input]
landscape(550)
[/input]
[output]
The final price is: 3432.11 dollars.
The discount is: 753.39 dollars.
[/output]
[/test]
[test]
[input]
landscape(335)
[/input]
[output]
The final price is: 2090.467 dollars.
The discount is: 458.883 dollars.
[/output]
[/test]
[test]
[input]
landscape(412)
[/input]
[output]
The final price is: 2570.9624000000003 dollars.
The discount is: 564.3576 dollars.
[/output]
[/test]
[test]
[input]
landscape(500)
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

