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
