# Definition

[slide]
# What Are Arrays?

You already know how to store **single data in one variable**. 

**Array** allow us to store **multiple data**, again, in only **one variable**.

An array is a **collection** which is **ordered** and **changeable**.

Lists are useful for **preserving** a sequence of **data** and **iterating** over it.

They are enclosed in **square brackets** and the values inside it are **separated by a comma**.

Creating an array of numbers:

```js
let fruit = ["apple", "pear", "cherry"];
```

A **single array** can contain variables of **different data types**, for example integers, strings, etc.

Also, **duplicate** values **can** be stored in it.

```js
let myArray = ["string", 2, 3.33, 2, true];
```

The values in an array are called **elements**.

Imagine a **train** which has **wagons**, and each wagon - **passengers**.

Now imagine this as an **array of integers**, **each element** represent a **wagon** and its **value** is the **passengers**.

Take a look at this picture:
[image assetsSrc="array-example.png" /]

There are **7 wagons** (**elements**). 

Each has **passengers** (**a value**)

- `[3, 4, 10, 7, 5, 0, 6]`

Elements are numbered from `0` to `length-1`.

Arrays have **variable size** `Array.length` can be resized.

In this example we have **seven elements**.

[/slide]

[slide]
# Creating Arrays

There are two ways to create a array:

Initialize it with **square brackets** `[]`, if no elements are declared, the array will be empty

```js
let names = [];
```

Initialize an array with integer values.

```js
let numbers = [1, 2, 3, 4, 5];
```

When we have an array, we can access each element by index. 

The `[n]` operator accesses elements by **index.**

```js
let numbers = [1, 2, 3, 4, 5];

console.log(`First number is ${numbers[0]}`); 
console.log(`Last number is ${numbers[numbers.length-1]}`);
```

**Assigning values** to the array elements. 

The **length** holds the number of array elements

``` js live
let numbers = [1, 2, 3, 4, 5];
numbers[3] = numbers[1] + numbers[2];

console.log(numbers.length);
console.log(numbers);
```

[/slide]

[slide]
# Problem: Sum First and Last Array Elements
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

Write a function that receives an **array of strings** and prints the sum of **first** and **last** element in that array.

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

Write a function that receives an **array of strings** and prints the sum of **first** and **last** element in that array.

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
# Problem: Days of Week
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

Write a program which receives a **number** and prints the corresponding name of the day of week. 

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
