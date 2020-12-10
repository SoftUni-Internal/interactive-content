# Declaring and Invoking Functions

[slide]
# Declaring a Function

A function is defined by using the keyword `function` followed by the **name of the function** and a set of **parentheses** to hold parameters or values to be recieved by the function.

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
# Functions with parameters

**Arguments** can be passed to the function by enclosing the values in a parentheses after the function name.

Arguments can be sent as a comma separated list of **arguments** while calling the function.

The arguments recieved as **parameters** by the recieving function and are stored in local variables. 

As soon as the function ends the variable disappears

```js
function printText(text){
  console.log(text);
}
```

[/slide]

[slide]
# Invoking a Function

A function is not executed before it is invoked.

A function can be invoked from **everywhere in the scope**, where it is defined.

You can declare a function:

```js
function hLine() {
  console.log("----------");
}
```

Then we can invoke (call) the function by its name:

```js
hLine();
```

We can also invoke a **function** from **another function:**

```js
function printDocument() {
  printLabel();
  printContent();
}
```

We can also invoke a **function** **in its own body (recursion):**

``` js
function countDown(x) {
  console.log(x);
  if (x > 0) { countDown(x - 1); }
}
```

A recursion means that **a functions calls itself**.

[/slide]

[slide]
# Functions and Parameters

We can have a function **with or without** parameters.

Function **parameters** behave like local variables inside the **function body.**

## Functions Without Parameters

If a function do not receive arguments when invoked the **result is always the same** (unless it reads data from outside): 

``` js live
function printHeader() {
  console.log('~~~-   {@}   -~~~');
  console.log('~- Certificate -~');
  console.log('~~~-  ~---~  -~~~');
}
printHeader();
```

## Functions With Parameters

A function can receive **any number and type of arguments** when invoked:

In this example we pass **two parameteres** as an argument:

```js live
function multiply(a, b) {
  console.log(a*b);
}
multiply(5, 7); // 35
```

In this example we pass **an array** as an argument:

``` js live
function printName(nameArr) {
  console.log(nameArr[0] + ' ' + nameArr[1]);
}

printName(['John', 'Smith']); 
```

We can pass **less or more** arguments while incoking a function.

If we pass less arguments then rest of the parameters will be **undefined.**

If you pass more arguments then **additional arguments will be ignored.**

[/slide]

[slide]
# Problem: Grades
[code-task title="Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function grades(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
Write a function that receives a grade between `2.00` and `6.00` and prints the corresponding grade in words

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

[slide]
# Solution: Grades
[code-task title="Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function grades(grade){
  if (grade >= 2.0 && grade < 3.0) {
        console.log('Fail');
    } else if (grade >= 3.0 && grade < 3.5) {
        console.log('Poor');
    } else if (grade >= 3.5 && grade < 4.5) {
        console.log('Good');
    } else if (grade >= 4.5 && grade < 5.5) {
        console.log('Very good');
    } else if (grade >= 5.5 && grade <= 6.0) {
        console.log('Excellent');
    }
}
```
[/code-editor]
[task-description]
Write a function that receives a grade between `2.00` and `6.00` and prints the corresponding grade in words

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

[slide]
# Problem: Math Power
[code-task title="Math Power" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function mathPower(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
Write a function that **calculates** and returns the value of a number **raised to a given power:**

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

[slide]
# Solution: Math Power
[code-task title="Math Power" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function mathPower(input){
  let num = Number(input[0]);
  let pow = Number(input[1]);

  let result = Math.pow(num,pow);
  console.log(result);
}
```
[/code-editor]
[task-description]
Write a function that **calculates** and returns the value of a number **raised to a given power:**

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