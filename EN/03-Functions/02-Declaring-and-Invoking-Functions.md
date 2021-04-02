# Declaring and Invoking Functions

[slide hideTitle]
# Declaring a Function

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-6-7-declaring-a-function-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A function is defined by using the keyword `function` followed by the name of the function and a set of parentheses which hold parameters or values to be received by the function. 

Functions can be declared in two ways:

- **Function declaration** (recommended way)

``` js
function printText(text){
  console.log(text);
}
```

- **Function expression** (useful in functional programming)

```js
let printText = function(text){
  console.log(text);
}
```

## Functions with Parameters

**Arguments** can be passed to the function by enclosing the values in parentheses after the function name.

Arguments can be sent as a comma separated list of **arguments** while calling the function.

The arguments are received as **parameters** by the receiving function and stored in local variables. 

As soon as the function ends the variable disappears.

```js
function printText(text){
  console.log(text);
}
```

[/slide]

[slide hideTitle]
# Invoking a Function

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-8-9-invoking-a-function-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


A function is not executed before it is invoked.

A function can be invoked from **everywhere in the scope**, in which it is defined.

We can declare a function, and then we can invoke (call) the function by its name:

```js live
function hLine() {
    console.log('----------');
}

hLine();
```


[/slide]

[slide hideTitle]
# Invoking a Function from Another Function

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-10-invoking-a-function-from-another-function-and-examples-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


We can also invoke a **function** from **another function:**

```js
function printDocument() {
  printLabel();
  printContent();
}
```
[/slide]

[slide hideTitle]
# Recursion

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-recursion-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can also invoke a **function in its own body (recursion):**

``` js
function countDown(x) {
    console.log(x);
    if (x > 0) {
        countDown(x - 1);
    }
}
```

**Recursion** is the process in which a function **calls itself**.

Such functions are called **recursive**.

Proper recursive functions **stop** invoking themselves when a desired **result** is achieved.

If **no such condition exists**, the function will call itself **endlessly**.


[/slide]

[slide hideTitle]
# Functions Without Parameters

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-11-12-functions-with-and-without-parameters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can have a function **with or without** parameters.

Function **parameters** behave like local variables inside the **function body.**

If a function does not receive arguments when invoked then **it will always produce the same result** (unless it takes data from outside itself):

``` js live
function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}
printHeader();
```
[/slide]

[slide hideTitle]
# Functions With Parameters

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-functions-with-parameters-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A function can receive **any number and type of arguments** when invoked.

In this example we pass **two parameters** as an argument:

```js live
function multiply(a, b) {
    console.log(a * b);
}
multiply(5, 7);
```

In this example we pass **an array** as an argument:

``` js live
function printName(nameArr) {
  console.log(nameArr[0] + ' ' + nameArr[1]);
}

printName(['John', 'Smith']); 
```

We can pass **more or less arguments** than expected while invoking a function. 

If we pass less arguments, then rest of the parameters will be passed to the function as undefined. 

If we pass more arguments, then additional arguments **will be ignored.** 

[/slide]

[slide hideTitle]
# Problem with Solution: Grades

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-14-solution-grades-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Grades" taskId="fundamentals-js-functions-lab-Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function grade(gradeAsNum){
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

Write a function that receives a grade between "**2.00**" and "**6.00**" and prints the corresponding grade in words.

| **Grade** | **Result** |
| --- | --- |
| "2.00 - 2.99" | "Fail" |
| "3.00 - 3.49" | "Poor" |
| "3.50 - 4.49" | "Good" |
| "4.50 - 5.49" | "Very good" |
| "5.50 - 6.00" | "Excellent" |


## Examples
| **Input** | **Output** |
| --- | --- |
| grade(3.33) | Poor |
| grade(4.50) | Very good |
| grade(2.99) | Fail |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
grade(3.33)
[/input]
[output]
Poor
[/output]
[/test]
[test open]
[input]
grade(4.50)
[/input]
[output]
Very good
[/output]
[/test]
[test open]
[input]
grade(2.99)
[/input]
[output]
Fail
[/output]
[/test]
[test]
[input]
grade(4.49)
[/input]
[output]
Good
[/output]
[/test]
[test]
[input]
grade(5.50)
[/input]
[output]
Excellent
[/output]
[/test]
[test]
[input]
grade(4.60)
[/input]
[output]
Very good
[/output]
[/test]
[test]
[input]
grade(3.20)
[/input]
[output]
Poor
[/output]
[/test]
[test]
[input]
grade(2.00)
[/input]
[output]
Fail
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Math Power

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-16-solution-math-power-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Math Power" taskId="fundamentals-js-functions-lab-Math-Power"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function power(num, pow){
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

Write a function that **calculates** and returns the value of a number **raised to a given power.**

&nbsp;

## Examples
| **Input** | **Output** |
| --- | --- |
| power(2, 8) | 256 |
| power(3, 4) | 81 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
power(2, 8)
[/input]
[output]
256
[/output]
[/test]
[test open]
[input]
power(3, 4)
[/input]
[output]
81
[/output]
[/test]
[test]
[input]
power(7, 2)
[/input]
[output]
49
[/output]
[/test]
[test]
[input]
power(123, 3)
[/input]
[output]
1860867
[/output]
[/test]
[test]
[input]
power(5.5, 3)
[/input]
[output]
166.375
[/output]
[/test]
[test]
[input]
power(21, 10)
[/input]
[output]
16679880978201
[/output]
[/test]
[test]
[input]
power(10, 7)
[/input]
[output]
10000000
[/output]
[/test]
[test]
[input]
power(12, 3)
[/input]
[output]
1728
[/output]
[/test]
[test]
[input]
power(2, 3)
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
power(3, 2)
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
power(4, 4)
[/input]
[output]
256
[/output]
[/test]
[test]
[input]
power(4, 4)
[/input]
[output]
256
[/output]
[/test]
[/tests]
[/code-task]

[/slide]
