# Basic Operations

[slide]
# Overview

JavaScript has **built in functions** for dealing with arrays that can **simplify the code**, **make it easier to read** and in the end, **make it easier to debug.**

We can use arrow functions in some of these advanced methods.

Advanced functionality of the array consists of the following functions:

- `push(el)` – adds one or more elements to the end of an array and returns the new length of the array

- `pop()` – removes the **last** element from an array and returns that element

- `shift()` – removes the **first** element from an array and returns that element

- `unshift(el)` – **adds new items to the beginning** of an array, and returns the new **length**

- `includes(el)` – determines whether an **array includes a certain element**, retunes `true` or `false`

- `indexOf(el)` – returns the index of an element, or retunrs -1 if cannot find the element

Basically, these methods modify the array and we don't need to write whole bunch of code which saves lots of time.

[/slide]

[slide]
# Add and Remove Functions

## Add at the End, Remove from the End

The `array.push()` function is used to add a new element at the end of the array.

``` js live
let array = [1, 2, 3, 4];

array.push(5);

coconsole.log(array);
```

The `array.pop()` function is used to obtain and remove the element at the end of the array.

If you call `array.pop()` on an empty array, **it returns undefined.**

``` js live
let array = [1, 2, 3, 4, 5];

let number = array.pop();

coconsole.log(array);
coconsole.log(number);
```

## Add at the Start, Remove from the Start

The `array.unshift()` function is used to add a new element at the start of an array.

``` js live
let array = [1, 2, 3, 4];

array.unshift(0);

coconsole.log(array);
```

The `array.shift()` function is used to obtain and remove the element at the start of the array.

``` js live
let array = [0,1, 2, 3, 4, 5];

let number = array.shift();

coconsole.log(array);
coconsole.log(number);
```
[/slide]

[slide]
# Problem: Sum First Last
[code-task title="Sum First Last" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumFirstLast(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
Write a function that calculates and prints the **sum** of the **first** and the last elements in an array.

The **input** comes as array of string elements holding numbers.

The **output** is the return value of your function.

## Examples
| **Input** | **Output** |
| --- | --- |
|`['20', '30', '40']` | 60 |
|`['5', '10']` | 15 |

[/task-description]
[tests]
[test]
[input]
2
3
2
14
3
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
2.5
3.6
1.1
3.33
[/input]
[output]
5.83
[/output]
[/test]
[test]
[input]
1000
2000
3000
4000
[/input]
[output]
5000
[/output]
[/test]
[test]
[input]
20
30
40
[/input]
[output]
60
[/output]
[/test]
[test]
[input]
5
10
[/input]
[output]
15
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Sum First Last
[code-task title="Sum First Last" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumFirstLast(input){
  function solve(arr) {
    let sum = Number(arr[0]) + Number(arr[arr.length - 1]);
    console.log(sum);
}
}
```
[/code-editor]
[task-description]
Write a function that calculates and prints the **sum** of the **first** and the last elements in an array.

The **input** comes as array of string elements holding numbers.

The **output** is the return value of your function.

## Examples
| **Input** | **Output** |
| --- | --- |
|`['20', '30', '40']` | 60 |
|`['5', '10']` | 15 |

[/task-description]
[tests]
[test]
[input]
2
3
2
14
3
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
2.5
3.6
1.1
3.33
[/input]
[output]
5.83
[/output]
[/test]
[test]
[input]
1000
2000
3000
4000
[/input]
[output]
5000
[/output]
[/test]
[test]
[input]
20
30
40
[/input]
[output]
60
[/output]
[/test]
[test]
[input]
5
10
[/input]
[output]
15
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]