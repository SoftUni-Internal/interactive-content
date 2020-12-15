# Definition

[slide]
# What Are Arrays?

[vimeo-video]
[stream language="EN" videoId="489372251/f2e6e4672e" default /]
[stream language="RO" videoId="489372251/f2e6e4672e"  /]
[/video-vimeo]

You already know how to store **single data in one variable.** 

**Arrays** allow us to store **multiple pieces** of data in the same variable. 

An array is an **ordered collection** and the data inside it can be modified. 

It can be used for **keeping data sequences and iterating** over them. 

To declare an array, we place the values that it should hold in square brackets, each element of the array should be separated by a comma. 

Creating an array of strings: 

```js
let fruit = ["apple", "pear", "cherry"];
```

Arrays can contain variables of **different data types**, integers, strings, boolean etc. 

Also, **duplicate** values **can** be stored in it. 

```js
let myArray = ["string", 2, 3.33, 2, true];
```

The values in an array are called **elements.** 

You could think of it as a **train**, each wagon of which **may contain a different type and number of objects**: passengers, cargo, raw materials, the wagon might even be empty. 

Now let us **imagine an array of integers**, each element representing a wagon and each value is the number of passengers. 

As in this graphical representation: 
[image assetsSrc="array-example.png" /]

This one has **7 wagons** (**elements**). 

Each one has **passengers in it** (a value) 

- `[3, 4, 10, 7, 5, 0, 6]`

Array elements are numbered from `0` to `length-1`.

By using the `Array.length`method we can get a variable, containing the length of an array.

In this example we have **7 elements.**

[/slide]

[slide]
# Creating Arrays

[vimeo-video]
[stream language="EN" videoId="489372249/6743adf4f6" default /]
[stream language="RO" videoId="489372249/6743adf4f6"  /]
[/video-vimeo]

There are two ways to create an array: 

Initialize it using **square brackets** `[]`, if no elements are declared, the array will be empty

```js
let names = [];
```

Initialize an array holding integer values:

```js
let numbers = [1, 2, 3, 4, 5];
```

When we have an array, we can access each element by its index.

The `[]` operator is used to access elements of the array by their **index.**

```js live
let numbers = [1, 2, 3, 4, 5];

console.log(`First number is ${numbers[0]}`); 
console.log(`Last number is ${numbers[numbers.length-1]}`);
```

**We can assign values** to the array elements at a specific index

The **length method** can be used to return the number of elements in a string:

``` js live
let numbers = [1, 2, 3, 4, 5];
numbers[3] = numbers[1] + numbers[2];

console.log(numbers.length);
console.log(numbers);
```

[/slide]

[slide]
# Problem: Sum First and Last Array Elements

[vimeo-video]
[stream language="EN" videoId="489372302/7905a8f7f5" default /]
[stream language="RO" videoId="489372302/7905a8f7f5"  /]
[/video-vimeo]

[code-task title="Sum First and Last Array Elements" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sum(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that receives an **array of strings**, **turns them into numbers** and prints out the sum of first and last element of that array. 

# Example
| **Input** | **Output** |
| --- | --- |
|`[20, 30, 40]`| 60 |
|`[10, 17, 22, 33]`| 43 |
|`[11, 58, 69]`| 80 |

[/task-description]
[tests]
[test]
[input]
12
32
15
1
16
78
[/input]
[output]
90
[/output]
[/test]
[test]
[input]
12
32
18
16
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
191
67
22
33
9
[/input]
[output]
200
[/output]
[/test]
[test]
[input]
10
69
[/input]
[output]
79
[/output]
[/test]
[test]
[input]
56
44
19
[/input]
[output]
75
[/output]
[/test]
[test]
[input]
118
574
19
[/input]
[output]
137
[/output]
[/test]
[test]
[input]
11
58
69
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
91
18
19
[/input]
[output]
110
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Sum First and Last Array Elements

[vimeo-video]
[stream language="EN" videoId="489372305/43d632bad4" default /]
[stream language="RO" videoId="489372305/43d632bad4"  /]
[/video-vimeo]

[code-task title="Sum First and Last Array Elements" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sum(arr){
  let sum = Number(arr[0]) + Number(arr[arr.length - 1]);
  console.log(sum);
}
```
[/code-editor]
[task-description]
# Description

Write a function that receives an **array of strings**, **turns them into numbers** and prints out the sum of first and last element of that array. 

# Example
| **Input** | **Output** |
| --- | --- |
|`[20, 30, 40]`| 60 |
|`[10, 17, 22, 33]`| 43 |
|`[11, 58, 69]`| 80 |

[/task-description]
[tests]
[test]
[input]
12
32
15
1
16
78
[/input]
[output]
90
[/output]
[/test]
[test]
[input]
12
32
18
16
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
191
67
22
33
9
[/input]
[output]
200
[/output]
[/test]
[test]
[input]
10
69
[/input]
[output]
79
[/output]
[/test]
[test]
[input]
56
44
19
[/input]
[output]
75
[/output]
[/test]
[test]
[input]
118
574
19
[/input]
[output]
137
[/output]
[/test]
[test]
[input]
11
58
69
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
91
18
19
[/input]
[output]
110
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Days of Week: Example

[vimeo-video]
[stream language="EN" videoId="489372340/6ef0de5d43" default /]
[stream language="RO" videoId="489372340/6ef0de5d43"  /]
[/video-vimeo]

This is an example of an array containing strings for the different days of the week.

The first element, Monday, is at index 0 of the array.

The first element, Sunday, is at index 6 of the array.

[/slide]

[slide]
# Problem: Days of Week

[vimeo-video]
[stream language="EN" videoId="489372347/856f508476" default /]
[stream language="RO" videoId="489372347/856f508476"  /]
[/video-vimeo]

[code-task title="Days of Week" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function days(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a program which receives a number and prints out the corresponding name of the day of week. 

If the number is NOT a valid day, print `Invalid day!`.

# Example
| **Input** | **Output** |
| --- | --- |
|`[3]`| Wednesday |
|`[6]`| Saturday |
|`[11]`| Invalid day! |

[/task-description]
[tests]
[test]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
Tuesday
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
Thursday
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
Friday
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
Saturday
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
Invalid day!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Days of Week

[vimeo-video]
[stream language="EN" videoId="489372392/785b1fe99f" default /]
[stream language="RO" videoId="489372392/785b1fe99f"  /]
[/video-vimeo]

[code-task title="Days of Week" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function days(input){
    let n = input[0];
    if (n <= 7) {
        let days = ['Invalid day!', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log(days[n]);
    }
    else {
        console.log('Invalid day!');
    }
}
```
[/code-editor]
[task-description]
# Description

Write a program which receives a number and prints out the corresponding name of the day of week. 

If the number is NOT a valid day, print `Invalid day!`.

# Example
| **Input** | **Output** |
| --- | --- |
|`[3]`| Wednesday |
|`[6]`| Saturday |
|`[11]`| Invalid day! |

[/task-description]
[tests]
[test]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
Tuesday
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
Thursday
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
Friday
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
Saturday
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
Invalid day!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Arrays of Different Types

[vimeo-video]
[stream language="EN" videoId="489372393/3a35572b19" default /]
[stream language="RO" videoId="489372393/3a35572b19"  /]
[/video-vimeo]

Arrays can hold different types of elements:

Array holding numbers:
``` js
let numbers = [10, 20, 30, 40, 50];
```

Array holding strings
``` js
let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

Array holding mixed data
```js
let mixedArr = [20, new Date(), 'hello', {x:5, y:8}];
```
[/slide]

[slide]
# Adding New Elements

[vimeo-video]
[stream language="EN" videoId="489372468/1ac4aabd28" default /]
[stream language="RO" videoId="489372468/1ac4aabd28"  /]
[/video-vimeo]

We  can add an element to the end of the array:
``` js live
let arr = [10, 20, 30];
arr[arr.length] = 40;

console.log(arr); 
```

Or we can use the built-in push method

``` js live
let arr = [10, 20, 30];
arr.push(50);

console.log(arr); 
```
[/slide]

[slide]
# JS Arrays and Invalid Positions

[vimeo-video]
[stream language="EN" videoId="489372453/ea5fcbe683" default /]
[stream language="RO" videoId="489372453/ea5fcbe683"  /]
[/video-vimeo]

If we attempt to assign a value to a non-existent index, JS will fill the missing elements with 'undefined' values and increase its size:

``` js live
let nums = [10, 20, 30];
console.log(nums);

nums[4] = 50; // Will resize the array
console.log(nums.length);

console.log(nums[3]);
```

Typical errors that we can face when working with arrays: 

We can actually access indexes which do not exist in the array. 

``` js live
let nums = [10, 20, 30];

console.log(nums[-5]);
nums[-5] = 8;
console.log(nums[-5], nums.length);

```
[/slide]
