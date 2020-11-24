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
  let sum = Number(input[0]) + Number(input[input.length - 1]);
  console.log(sum);
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
# Pushing, Shifting and Unshifting

The `array.push()` method adds one or more elements to the end of an array and returns the new length:

``` js live
let fruits = ['apple','banana','kiwi'];

fruits.push('pineapple', 'orange');

console.log(fruits);
```

The `array.shift()` removes the first element of an array:

``` js live
let myArray = ["one","two","three","four","five"];

myArray.shift();

console.log(myArray);
```

The `array.unshift()` adds elements to the beginning:

``` js live
let myArray = ["red","green","blue"];
myArray.unshift("purple");

console.log(myArray);
```
[/slide]

[slide]
# Problem: Negative or Positive Numbers
[code-task title="Negative or Positive Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function negativePositive(input){
  // Write your code here
}

```
[/code-editor]
[task-description]

Write a function that processes the elements in an **array** one by one and produces a new array.

Prepend each negative element at the front of the result and **append** each **positive** (or 0) element at the end of the result.

The **input** comes as array of number elements.

The **output** is printed on the console, each element on a new line.


## Examples
| **Input** | **Output** |
| --- | --- |
|`['7', '-2', '8', '9']` | \-2 |
| | 7 |
| | 8 |
| | 9 |

| **Input** | **Output** |
| --- | --- |
|`['3', '-2', '0', '-1']`  | \-1 |
| | \-2 |
| | 3 |
| | 0 |

## Hints

- Use `unshift()` to add an element at the first position

- Use `push()` to add an element at the last position


[/task-description]
[tests]
[test]
[input]
\-2
8
7
99
100
11
[/input]
[output]
\-2
8
7
99
100
11
[/output]
[/test]
[test]
[input]
\-2
\-11
7
8
100
\-11
\-11
11
\-2
[/input]
[output]
\-2
\-11
\-11
\-11
\-2
7
8
100
11
[/output]
[/test]
[test]
[input]
\-2
\-11
7
8
0
\-13
0
\-25
0
[/input]
[output]
\-25
\-13
\-11
\-2
7
8
0
0
0
[/output]
[/test]
[test]
[input]
2
3
4
5
6
\-7
\-8
[/input]
[output]
\-8
\-7
2
3
4
5
6
[/output]
[/test]
[test]
[input]
\-2
3
0
5
\-6
0
8
[/input]
[output]
\-6
\-2
3
0
5
0
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Negative or Positive Numbers
[code-task title="Negative or Positive Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function negativePositive(input){
  let resultArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            resultArr.unshift(arr[i]);
        } else {
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join('\r\n'));
}

```
[/code-editor]
[task-description]

Write a function that processes the elements in an **array** one by one and produces a new array.

Prepend each negative element at the front of the result and **append** each **positive** (or 0) element at the end of the result.

The **input** comes as array of number elements.

The **output** is printed on the console, each element on a new line.


## Examples
| **Input** | **Output** |
| --- | --- |
|`['7', '-2', '8', '9']` | \-2 |
| | 7 |
| | 8 |
| | 9 |

| **Input** | **Output** |
| --- | --- |
|`['3', '-2', '0', '-1']`  | \-1 |
| | \-2 |
| | 3 |
| | 0 |

## Hints

- Use `unshift()` to add an element at the first position

- Use `push()` to add an element at the last position


[/task-description]
[tests]
[test]
[input]
\-2
8
7
99
100
11
[/input]
[output]
\-2
8
7
99
100
11
[/output]
[/test]
[test]
[input]
\-2
\-11
7
8
100
\-11
\-11
11
\-2
[/input]
[output]
\-2
\-11
\-11
\-11
\-2
7
8
100
11
[/output]
[/test]
[test]
[input]
\-2
\-11
7
8
0
\-13
0
\-25
0
[/input]
[output]
\-25
\-13
\-11
\-2
7
8
0
0
0
[/output]
[/test]
[test]
[input]
2
3
4
5
6
\-7
\-8
[/input]
[output]
\-8
\-7
2
3
4
5
6
[/output]
[/test]
[test]
[input]
\-2
3
0
5
\-6
0
8
[/input]
[output]
\-6
\-2
3
0
5
0
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]