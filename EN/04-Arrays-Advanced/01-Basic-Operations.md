# Basic Operations

[slide hideTitle]
# Overview

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-3-4-overview-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JavaScript has **built-in functions** for dealing with arrays that **can simplify the code, make it easier to read**, and last but not least, make it easier to debug.

We can use arrow functions in some of the advanced methods.

Advanced functionality of an array consists of the following functions:

- `push(element)` - adds one or more elements to the end of an array and returns the new length of the array

- `pop()` - removes the **last** element from an array and returns that element

- `shift()` - removes the **first** element from an array and returns that element

- `unshift(element)` - **adds new items to the beginning** of an array, and returns the new **length**

- `includes(element)` - determines whether an **array includes a certain element**, returnes "**true**" or "**false**"

- `indexOf(element)` - returns the index of an element, or returns -1, if it cannot find the element

These methods modify the array and we do not need to write a whole bunch of code, which saves lots of time. 

[/slide]

[slide hideTitle]
# Add at the End, Remove from the End

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-5-add-at-the-end-remove-from-the-end-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JavaScript has **built-in methods** for adding and removing elements both from the end and the beginning of an array.

- **Adding an Element at the End of an Array**

The `array.push()` method is used to **add a new element at the end** of the array.

``` js live
let array = [1, 2, 3, 4];

array.push(5);

console.log(array);
```

- **Removing an Element at the End**

The `array.pop()` method is used to **obtain and remove the element at the end** of the array.

If we call `array.pop()` on an empty array, it returns **undefined.** 

``` js live
let array = [1, 2, 3, 4, 5];

let number = array.pop();

console.log(array);
console.log(number);
```

[/slide]

[slide hideTitle]
# Add at the Start, Remove from the Start

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-6-add-at-the-start-remove-from-the-start-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Adding an Element at the Beginning of an Array**

The `array.unshift()` method is used to **add a new element to the beginning** of an array.

``` js live
let array = [1, 2, 3, 4];

array.unshift(0);

console.log(array);
```

- **Removing an Element at the Beginning**

The `array.shift()` method is used to **obtain and remove an element from the beginning** of the array.

``` js live
let array = [0, 1, 2, 3, 4, 5];

let number = array.shift();

console.log(array);
console.log(number);
```
[/slide]

[slide hideTitle]
# Problem with Solution: Sum First Last

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-problem-1-solution-sum-first-last-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum First Last" taskId="fundamentals-js-arrays-advanced-lab-Sum-First-Last" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input){
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

Write a function that **calculates** and **prints** the **sum** of the **first and the last elements** of an array. 

The **input** comes as an **array** of **string** elements, holding **numbers**. 

The **output** should be the **value, which is returned from the function**. 

## Examples
| **Input** | **Output** |
| --- | --- |
|solve(['20', '30', '40']) | 60 |
|solve(['5', '10']) | 15 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
solve(['20', '30', '40'])
[/input]
[output]
60
[/output]
[/test]
[test open]
[input]
solve(['5', '10'])
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
solve(['2', '3', '2', '14', '3'])
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
solve(['2.5', '3.6', '1.1', '3.33'])
[/input]
[output]
5.83
[/output]
[/test]
[test]
[input]
solve(['1000', '2000', '3000', '4000'])
[/input]
[output]
5000
[/output]
[/test]
[test]
[input]
solve(['20', '30', '40'])
[/input]
[output]
60
[/output]
[/test]
[test]
[input]
solve(['5', '10'])
[/input]
[output]
15
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Pushing and Popping Into an Array

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-10-pushing-an-array-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `array.push()` method **adds** one or more elements **to the end of an array** and **returns the new length**:

``` js live
let fruits = ['apple','banana','kiwi'];

let newLength = fruits.push('pineapple', 'orange');

console.log(fruits);
console.log(newLength);
```


The `array.pop()` method removes the **last** element from an array and **returns** its value:

``` js live
let animals = ['monkey', 'cat', 'dog'];

let popped = animals.pop();

console.log(animals);
console.log(popped);
```

Calling `pop()` on an **empty array** will return `undefined`:

``` js live
let emptyArr = [];

let popped = emptyArr.pop();

console.log(popped);
```

[/slide]

[slide hideTitle]
# Shifting and Unshifting Into an Array

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-11-shifting-and-unshifting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `array.shift()` method **removes the first element** of an array:

``` js live
let myArray = ['one', 'two', 'three', 'four', 'five'];

myArray.shift();

console.log(myArray);
```

The `array.unshift()` method **adds elements to the beginning** of an array:

``` js live
let myArray = ['red', 'green', 'blue'];
myArray.unshift('purple');

console.log(myArray);
```

It also returns the **new length** of the array.

[/slide]

[slide hideTitle]
# Problem with Solution: Negative or Positive Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05.JS-Fundamentals-Arrays-Advanced-12-problem-and-solution-negative-posivite-numbers-v2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Negative or Positive Numbers" taskId="fundamentals-js-arrays-advanced-lab-Negative-or-Positive-Numbers"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function negativePositive(input){
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

Write a function that processes **all the elements of an array one by one** and **creates a new array**. 

Append each **negative** element to the **beginning**, and each **positive** (or 0) element, to the **end** of the new array. 

The **input** comes as an **array** of string elements, holding **numbers**. 

The **output** has to be **printed to the console**, each element on a **new line**.


## Example One
| **Input** | **Output** |
| --- | --- |
|negativePositive(['7', '-2', '8', '9']) | \-2 |
| | 7 |
| | 8 |
| | 9 |

## Example Two
| **Input** | **Output** |
| --- | --- |
|negativePositive(['3', '-2', '0', '-1'])  | \-1 |
| | \-2 |
| | 3 |
| | 0 |

## Hints

- Use `unshift()` to add an element at the **first** position

- Use `push()` to add an element at the **last** position


[/task-description]
[tests]
[test open]
[input]
negativePositive(['\-2', '8', '7', '99', '100', '11'])
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
[test open]
[input]
negativePositive(['3', '\-2', '0', '\-1'])
[/input]
[output]
\-1
\-2
3
0 
[/output]
[/test]
[test]
[input]
negativePositive(['\-2', '\-11', '7', '8', '100', '\-11', '\-11', '11', '\-2'])
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
negativePositive(['\-2', '\-11', '7', '8', '0', '\-13', '0', '\-25', '0'])
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
negativePositive(['2', '3', '4', '5', '6', '\-7', '\-8'])
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
negativePositive(['\-2', '3', '0', '5', '\-6', '0', '8'])
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

[slide hideTitle]
# Find Values

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-14-find-values-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `array.includes()` method returns **true** if the given **value** is a **part of the array**.

``` js live
let myArray = ['Peter','George','Mary'];

let isGeorgeIncluded = myArray.includes('George');
let isJohnIncluded = myArray.includes('John');

console.log(isGeorgeIncluded);
console.log(isJohnIncluded);
```

The `array.indexOf()` method returns the **index at which the given value is stored**.

It returns the **special value** \-1 if the value is **not found**. 

``` js live
let myArray = ['Peter','George','Mary'];

let indexOfMary = myArray.indexOf('Mary');
let indexOfNick = myArray.indexOf('Nick');

console.log(indexOfMary);
console.log(indexOfNick);
```
[/slide]
