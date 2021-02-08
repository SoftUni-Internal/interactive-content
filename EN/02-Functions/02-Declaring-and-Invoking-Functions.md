# Declaring and Invoking Functions

[slide hideTitle]
# Declaring a Function

[vimeo-video]
[stream language="EN" videoId="489373256/dbc8412983" default /]
[stream language="RO" videoId="489373256/dbc8412983"  /]
[/video-vimeo]

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

[vimeo-video]
[stream language="EN" videoId="489373258/bc07c2ad58" default /]
[stream language="RO" videoId="489373258/bc07c2ad58"  /]
[/video-vimeo]


A function is not executed before it is invoked.

A function can be invoked from **everywhere in the scope**, in which it is defined.

We can declare a function, and then we can invoke (call) the function by its name:

```js live
function hLine() {
  console.log("----------");
}

hLine();
```

## Demo

[vimeo-video]
[stream language="EN" videoId="489373310/980f876469" default /]
[stream language="RO" videoId="489373310/980f876469"  /]
[/video-vimeo]


[/slide]

[slide hideTitle]
# Invoking a Function from Another Function

[vimeo-video]
[stream language="EN" videoId="489373314/21401d79a4" default /]
[stream language="RO" videoId="489373314/21401d79a4"  /]
[/video-vimeo]


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

[vimeo-video]
[stream language="EN" videoId="489373783/9258f21dc4" default /]
[stream language="RO" videoId="489373783/9258f21dc4"  /]
[/video-vimeo]

We can also invoke a **function in its own body (recursion):**

``` js
function countDown(x) {
  console.log(x);
  if (x > 0) { countDown(x - 1); }
}
```

**Recursion** is the process in which a function **calls itself**.

Such functions are called **recursive**.

Proper recursive functions **stop** invoking themselves when a desired **result** is achieved.

If **no such condition exists**, the function will call itself **endlessly**.


[/slide]

[slide hideTitle]
# Functions Without Parameters

[vimeo-video]
[stream language="EN" videoId="489373376/28ddf53572" default /]
[stream language="RO" videoId="489373376/28ddf53572"  /]
[/video-vimeo]

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

[vimeo-video]
[stream language="EN" videoId="489373715/065a22dd97" default /]
[stream language="RO" videoId="489373715/065a22dd97"  /]
[/video-vimeo]

A function can receive **any number and type of arguments** when invoked.

In this example we pass **two parameteres** as an argument:

```js live
function multiply(a, b) {
  console.log(a*b);
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
# Problem: Grades

[vimeo-video]
[stream language="EN" videoId="489373386/94e32c3892" default /]
[stream language="RO" videoId="489373386/94e32c3892"  /]
[/video-vimeo]


[code-task title="Grades" taskId="fundamentals-js-functions-lab-Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function grades(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
Write a function that receives a grade between `2.00` and `6.00` and prints the corresponding grade in words.

| **Grade** | **Result** |
| --- | --- |
|`2.00 - 2.99` | `Fail` |
|`3.00 - 3.49` | `Poor` |
|`3.50 - 4.49` | `Good` |
|`4.50 - 5.49` | `Very good` |
|`5.50 - 6.00` | `Excellent` |


## Examples
| **Input** | **Output** |
| --- | --- |
|`3.33` | Poor |
|`4.50` | Very good |
|`2.99` | Fail |

[/task-description]
[tests]
[test]
[input]
4.49
[/input]
[output]
Good
[/output]
[/test]
[test]
[input]
5.50
[/input]
[output]
Excellent
[/output]
[/test]
[test]
[input]
4.60
[/input]
[output]
Very good
[/output]
[/test]
[test]
[input]
3.20
[/input]
[output]
Poor
[/output]
[/test]
[test]
[input]
2.00
[/input]
[output]
Fail
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Solution: Grades

[vimeo-video]
[stream language="EN" videoId="489373420/6a36318ce6" default /]
[stream language="RO" videoId="489373420/6a36318ce6"  /]
[/video-vimeo]


[code-task title="Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function grades(grade){
  // Write your code here
}
```
[/code-editor]
[task-description]
Write a function that receives a grade between `2.00` and `6.00` and prints the corresponding grade in words.

| **Grade** | **Result** |
| --- | --- |
|`2.00 - 2.99` | `Fail` |
|`3.00 - 3.49` | `Poor` |
|`3.50 - 4.49` | `Good` |
|`4.50 - 5.49` | `Very good` |
|`5.50 - 6.00` | `Excellent` |


## Examples
| **Input** | **Output** |
| --- | --- |
|`3.33` | Poor |
|`4.50` | Very good |
|`2.99` | Fail |

[/task-description]
[tests]
[test]
[input]
4.49
[/input]
[output]
Good
[/output]
[/test]
[test]
[input]
5.50
[/input]
[output]
Excellent
[/output]
[/test]
[test]
[input]
4.60
[/input]
[output]
Very good
[/output]
[/test]
[test]
[input]
3.20
[/input]
[output]
Poor
[/output]
[/test]
[test]
[input]
2.00
[/input]
[output]
Fail
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Math Power

[vimeo-video]
[stream language="EN" videoId="489373435/cb25361ef7" default /]
[stream language="RO" videoId="489373435/cb25361ef7"  /]
[/video-vimeo]


[code-task title="Math Power" taskId="fundamentals-js-functions-lab-Math-Power"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function mathPower(input){
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => code(...input);
```
[/code-adapter]
[task-description]
Write a function that **calculates** and returns the value of a number **raised to a given power.**

&nbsp;

## Examples
| **Input** | **Output** |
| --- | --- |
|`['2', '8']` | 256 |
|`['3', '4']` | 81 |

[/task-description]
[tests]
[test]
[input]
7
2
[/input]
[output]
49
[/output]
[/test]
[test]
[input]
123
3
[/input]
[output]
1860867
[/output]
[/test]
[test]
[input]
5.5
3
[/input]
[output]
166.375
[/output]
[/test]
[test]
[input]
21
10
[/input]
[output]
16679880978201
[/output]
[/test]
[test]
[input]
10
7
[/input]
[output]
10000000
[/output]
[/test]
[test]
[input]
12
3
[/input]
[output]
1728
[/output]
[/test]
[test]
[input]
2
3
[/input]
[output]
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Solution: Math Power

[vimeo-video]
[stream language="EN" videoId="489373438/64f923b0a0" default /]
[stream language="RO" videoId="489373438/64f923b0a0"  /]
[/video-vimeo]


[code-task title="Math Power" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function mathPower(input){
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => code(...input);
```
[/code-adapter]
[task-description]
Write a function that **calculates** and returns the value of a number **raised to a given power.**

&nbsp;

## Examples
| **Input** | **Output** |
| --- | --- |
|`['2', '8']` | 256 |
|`['3', '4']` | 81 |

[/task-description]
[tests]
[test]
[input]
7
2
[/input]
[output]
49
[/output]
[/test]
[test]
[input]
123
3
[/input]
[output]
1860867
[/output]
[/test]
[test]
[input]
5.5
3
[/input]
[output]
166.375
[/output]
[/test]
[test]
[input]
21
10
[/input]
[output]
16679880978201
[/output]
[/test]
[test]
[input]
10
7
[/input]
[output]
10000000
[/output]
[/test]
[test]
[input]
12
3
[/input]
[output]
1728
[/output]
[/test]
[test]
[input]
2
3
[/input]
[output]
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
