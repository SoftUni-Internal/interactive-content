# Definition

[slide hideTitle]
# What Are Arrays?

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-3-4-What-are-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

You already know how to store **single data in one variable.** 

**Arrays** allow us to store **multiple pieces** of data in the same variable. 

An array is an **ordered collection** and the data inside it can be modified. 

It can be used for **keeping data sequences and iterating** over them. 

To declare an array, we place the values that it should hold in square brackets, each element of the array should be separated by a comma. 

Creating an array of strings: 

```js
let fruit = ['apple', 'pear', 'cherry'];
```

Arrays can contain variables of **different data types** - integers, strings, boolean etc. 

Also, **duplicate** values **can** be stored in it. 

```js
let myArray = ['string', 2, 3.33, 2, true];
```

The values in an array are called **elements.** 

You could think of it as a **train**, of which each wagon **may contain a different type and number of objects**: passengers, cargo, raw materials, the wagon might even be empty. 

Now let us **imagine an array of integers**, each element representing a wagon and each value is the number of passengers. 

As in this graphical representation: 

[image assetsSrc="array-example.png" /]

This one has **7 wagons** (**elements**). 

Each one has **passengers in it** (a value):

- [3, 4, 10, 7, 5, 0, 6]

Array elements are numbered from 0 to `length-1`.

By using the `Array.length` method we can get a variable, containing the length of an array.

In this example we have **7 elements.**

[/slide]

[slide hideTitle]
# Creating Arrays

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-5-Creating-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are two ways to create an array: 

- Initializing it using **square brackets** `[]`, if no elements are declared, the array will be empty:

```js
let names = [];
```

- Initializing an array holding integer values:

```js
let numbers = [1, 2, 3, 4, 5];
```

When we have an array, we can access each element by its index.

The `[]` operator is used to access elements of the array by their **index.**

```js live
let numbers = [1, 2, 3, 4, 5];

console.log(`First number is ${numbers[0]}`); 
console.log(`Last number is ${numbers[numbers.length - 1]}`);
```

**We can assign values** to the array elements at a specific index.

The **length method** can be used to return the number of elements in a string:

``` js live
let numbers = [1, 2, 3, 4, 5];
numbers[3] = numbers[1] + numbers[2];

console.log(numbers.length);
console.log(numbers);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Sum First and Last Array Elements

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-6-Solution-Sum-first-and-last-array-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum First and Last Array Elements" taskId="fundamentals-js-arrays-lab-Sum-First-and-Last-Array-Elements" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumFirstAndLastNum(numArray){
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

Create a program that receives an **array of numbers** as an input. 

Print out the sum of the **first** and **last** element of that array. 

## Example
| **Input** | **Output** |
| --- | --- |
| sumFirstAndLastNum([20, 30, 40]) | 60 |
| sumFirstAndLastNum([10, 17, 22, 33]) | 43 |

[/task-description]
[tests]
[test open]
[input]
sumFirstAndLastNum([20, 30, 40])
[/input]
[output]
60
[/output]
[/test]
[test open]
[input]
sumFirstAndLastNum([10, 17, 22, 33])
[/input]
[output]
43
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([191, 67, 22, 33, 9])
[/input]
[output]
200
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([10, 69])
[/input]
[output]
79
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([56, 44, 19])
[/input]
[output]
75
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([118, 574, 19])
[/input]
[output]
137
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([11, 58, 69])
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
sumFirstAndLastNum([91, 18, 19])
[/input]
[output]
110
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Days of Week: Example

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-7-Example-Days-of-week-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

|**Index**|**Value**|
|---|---|
|`days[0]`|Monday|
|`days[1]`|Tuesday|
|`days[2]`|Wednesday|
|`days[3]`|Thursday|
|`days[4]`|Friday|
|`days[5]`|Saturday|
|`days[6]`|Sunday|

This is an example of an array containing strings for the different days of the week.

The first element, Monday, is at index 0 of the array.

The last element, Sunday, is at index 6 of the array.

[/slide]

[slide hideTitle]
# Problem with Solution: Days of Week

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-8-Solution-Days-of-week-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Days of Week" taskId="fundamentals-js-arrays-lab-Days-of-Week" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function dayOfWeek(day){
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

Create a program that receives a **number** and prints out the corresponding name of the day of the week. 

If the number is NOT a valid weekday, print "**Invalid day!**".

## Example
| **Input** | **Output** |
| --- | --- |
| dayOfWeek(3) | Wednesday |
| dayOfWeek(11) | Invalid day! |

[/task-description]
[tests]
[test open]
[input]
dayOfWeek(3)
[/input]
[output]
Wednesday
[/output]
[/test]
[test open]
[input]
dayOfWeek(11)
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
dayOfWeek(1)
[/input]
[output]
Monday
[/output]
[/test]
[test]
[input]
dayOfWeek(2)
[/input]
[output]
Tuesday
[/output]
[/test]
[test]
[input]
dayOfWeek(4)
[/input]
[output]
Thursday
[/output]
[/test]
[test]
[input]
dayOfWeek(5)
[/input]
[output]
Friday
[/output]
[/test]
[test]
[input]
dayOfWeek(6)
[/input]
[output]
Saturday
[/output]
[/test]
[test]
[input]
dayOfWeek(7)
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
dayOfWeek(8)
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
dayOfWeek(9)
[/input]
[output]
Invalid day!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Arrays of Different Types

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-10-Arrays-of-different-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Arrays can hold different types of elements:

Array holding numbers:
``` js
let numbers = [10, 20, 30, 40, 50];
```

Array holding strings:
``` js
let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

Array holding mixed data:
```js
let mixedArr = [20, new Date(), 'hello', {x:5, y:8}];
```
[/slide]

[slide hideTitle]
# Adding New Elements

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-11-Adding-new-array-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We  can add an element to the end of the array:

``` js live
let arr = [10, 20, 30];
arr[arr.length] = 40;

console.log(arr); 
```

Or we can use the built-in push method:

``` js live
let arr = [10, 20, 30];
arr.push(50);

console.log(arr); 
```
[/slide]

[slide hideTitle]
# JavaScript Arrays and Invalid Positions

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-12-JS-Arrays-and-invalid-positions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

If we attempt to assign a value to a non-existent index, JS will fill the missing elements with "**undefined**" values and increase its size:

``` js live
let nums = [10, 20, 30];
console.log(nums);

nums[4] = 50; // Will resize the array
console.log(nums.length);

console.log(nums[3]);
```

Typical errors that we can face when working with arrays:

- We can actually access indexes which do not exist in the array: 

``` js live
let nums = [10, 20, 30];

console.log(nums[-5]);
nums[-5] = 8;
console.log(nums[-5], nums.length);

```
[/slide]
