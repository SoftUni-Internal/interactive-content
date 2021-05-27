# Arrays in JavaScript

[slide hideTitle]
# What is an Array?

You have already learned about the **different** types of collections such as **arrays**, **lists**, **stacks**, **queues**, and how to **modify** them by using methods from **java streams**.

In this course, you are going to learn about the **two most important data structures** in JavaScript:

- Arrays
- Objects

Arrays in JavaScript are **list-like objects** similar to the ones in Java, which means that we can **modify** them, using different **methods**.

While Java offers different data structures for different purposes, JavaScript **only has arrays**.

Arrays in JavaScript also **reference** data types, meaning that an array's **information** is stored into the **heap memory** while the **stack stores** only its address.

[image assetsSrc="java-js-adv-arrays-01.png" /]

The first element of an array is stored at **index 0**, which makes the array **zero-based**, and the last element is stored at **array.length-1**.

Take a look at the following example:

```js
let numbers = [10, 20, 30, 40, 50];
```

In the example above, an array of integers is created with the array literal.

We define the variable with the `let` keyword, followed by the name we assign to it. 

To initialize the array, we need to use the `[]` (square brackets).

An array can also be initialized with the `const` keyword:

```js
const numbers = [10, 20, 30, 40, 50];
```

[/slide]

[slide hideTitle]
# Specifics of JavaScipt Arrays

In Java, when an array is **initialized**, its **data type** and **length** must be specified.

In JavaScript, when an array is initialized, **there is no need** to specify any of these properties.

This means that we can **create an empty array** and insert **as many elements** as we need. 

The array will be **automatically resized**.

```js live
let elements = [];
console.log(`The length of the array is: ${elements.length}`);

// Resize the array
elements[0] = 10; 
elements[1] = 20;
elements[2] = 30;

console.log(`The length after resizing is: ${elements.length}`);
```

In JavaScript, **not every array element needs to hold data**.

If we try to assign a value to a **non-existent** index, JavaScript **will fill** the elements before it with "**undefined**" and increase the size of the array:

```js live
let elements = [];

elements[0] = 10; 
elements[5] = 20;
elements[10] = 30;

console.log(`The length of the array is: ${elements.length}`);

console.log(`elements[0] = ${elements[0]}`);
console.log(`elements[1] = ${elements[1]}`);
console.log(`elements[5] = ${elements[5]}`);
```

An **element** at a specific index can also be **changed**: 


```js live
let elements = [10, 20, 30];
console.log(`Element on index 1 is: ${elements[1]}`);

elements[1] = 100;

console.log(`The new element on index 1 is: ${elements[1]}`);

```

[/slide]

[slide hideTitle]
# Arrays of Different Types

Arrays in JavaScript can hold **different** types of data:

This is an array of **numbers**:
```js
let numbers = [10, 20, 30, 40, 50];
```

This array stores **strings**:
```js
let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

Here is an example of an array storing **mixed** data:
```js
let mixedArr = [20, new Date(), 'hello', {x:5, y:8}];
```
[/slide]

[slide hideTitle]
# Arrays Indexation

**Setting** or **accessing** elements with **non-integers** and **bracket** notation (or dot notation) will **not work**.

```js live
let arr = [];
arr[3.4] = 'Oranges';
arr[-1] = 'Apples';
console.log(arr.length);               
console.log(arr.hasOwnProperty(3.4));

arr['fruit'] = 'Grapes';
console.log(arr.length);
console.log(arr);
```

This example shows the result of **setting** elements using a **decimal** index, a **negative** index, and a **string**. 

The **interpreter** will **convert** every index into a **string** and set the value as a **property**. 

As a result, the length of the array is **zero**.
[/slide]
