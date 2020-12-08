# Basic Operations

[slide]
# Overview

JavaScript has **built-in functions** for dealing with arrays that **can simplify the code, make it easier to read**, and last but not least, make it easier to debug.

We can use arrow functions in some of the advanced methods.

Advanced functionality of an array consists of the following functions:

- `push(el)` – adds one or more elements to the end of an array and returns the new length of the array

- `pop()` – removes the **last** element from an array and returns that element

- `shift()` – removes the **first** element from an array and returns that element

- `unshift(el)` – **adds new items to the beginning** of an array, and returns the new **length**

- `includes(el)` – determines whether an **array includes a certain element**, returnes `true` or `false`

- `indexOf(el)` – returns the index of an element, or returns -1, if it cannot find the element

Basically, these methods modify the array, and we do not need to write a whole bunch of code, which saves lots of time. 

[/slide]

[slide]
# Add and Remove Functions

Add at the End, Remove from the End.

The `array.push()` method is used to add a new element at the end of the array.

``` js live
let array = [1, 2, 3, 4];

array.push(5);

console.log(array);
```

The `array.pop()` method is used to obtain and remove the element at the end of the array.

If we call `array.pop()` on an empty array, it returns **undefined.** 

``` js live
let array = [1, 2, 3, 4, 5];

let number = array.pop();

console.log(array);
console.log(number);
```

## Add to the Beginning, Remove from the Beginning 

The `array.unshift()` method is used to add a new element to the beginning of an array.

``` js live
let array = [1, 2, 3, 4];

array.unshift(0);

console.log(array);
```

The `array.shift()` method is used to obtain and remove an element from the beginning of the array.

``` js live
let array = [0,1, 2, 3, 4, 5];

let number = array.shift();

console.log(array);
console.log(number);
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
Write a function that calculates and prints the sum of the first and the last elements of an array. 

The input comes as an array of `string` elements, holding numbers. 

The output should be the value, which is returned from the function. 

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
# Problem: Sum First Last
[code-task title="Sum First Last" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumFirstLast(input){
  let firstNum = Number(input.pop());
  let lastNum = Number(input.shift());

  let result = firstNum + lastNum;
  console.log(result);
}
```
[/code-editor]
[task-description]
Write a function that calculates and prints the sum of the first and the last elements of an array. 

The input comes as an array of `string` elements, holding numbers. 

The output should be the value, which is returned from the function. 

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

The `array.shift()` method removes the first element of an array:

``` js live
let myArray = ["one","two","three","four","five"];

myArray.shift();

console.log(myArray);
```

The `array.unshift()` method adds elements  to the beginning of an array:

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
function negativePositive(arr){
  // Write your code here
}

```
[/code-editor]
[task-description]

Write a function that processes all the elements of an array one by one and creates a new array. 

Append each negative element to the beginning, and each positive (or 0) element, to the end of the new array. 

The input comes as an array of `string` elements, holding numbers. 

The output has to be printed on the console, each element on a new line. 


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
function negativePositive(arr){
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

Write a function that processes all the elements of an array one by one and creates a new array. 

Append each negative element to the beginning, and each positive (or 0) element, to the end of the new array. 

The input comes as an array of `string` elements, holding numbers. 

The output has to be printed on the console, each element on a new line.


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
# Find Values

The `array.includes()` returns true if the given value is part of the array.

``` js live
let myArray = ['Peter','George','Mary'];

let isGeorgeInclude = myArray.includes('George');
let isJohnInclude =myArray.includes('John');

console.log(isGeorgeInclude);
console.log(isJohnInclude);
```

The `array.indexOf()` returns the index, where the given value is stored.

It returns `-1` if the value is not found. 

``` js live
let myArray = ['Peter','George','Mary'];

let indexOfMary = myArray.indexOf('Mary');
let indexOfNick = myArray.indexOf('Nick');

console.log(indexOfMary);
console.log(indexOfNick);
```
[/slide]