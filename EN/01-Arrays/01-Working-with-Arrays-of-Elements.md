# Arrays in JavaScript

[slide hideTitle]
# What is an Array?

So far we have gotten familier with **different** types of collections such as an **array**, **lists**, **stack**, **queue**, and how to **modify** those collection by using methods from **java streams**.

In this course, we are going to learn about the **two most important data structures** in JavaScript:

- Arrays
- Objects

In this **lesson**, we will learn about **arrays**, and in the **next** lesson, we will learn about **objects**.

Arrays in JavaScript are **list-like objects** and they are similar to arrays in Java, thus we can **modify** them, using different **methods**.

In Java depends on the operation and the methods we want to employ to process the data, we can use an **array**, **lists**, **stack**, or **queue**, but in JavaScript, **only arrays are used**.

This makes JavaScript **arrays** a **very powerful tool**.

Arrays in JavaScript also **reference** data types, meaning that array's **information** is stored into the **heap memory** and **stack stores** only the address of an array.

[image assetsSrc="java-js-adv-arrays-01.png" /]

The first element of the array is stored on **index 0**, which makes it **zero bases**, and the last element of the array is stored at **array.length-1**.

JavaScript array example:

```js
let numbers = [10, 20, 30, 40, 50];
```

In this example, an array of integers is created using the array literal.

The keyword `let` is used, followed by the name, in this case, is "**numbers**", then for initialization of the array `[]` (square brackets) are used. 

Also, array can be initialized by using the keyword `const`:

```js
const numbers = [10, 20, 30, 40, 50];
```

[/slide]

[slide hideTitle]
# Secifics of JavaScipt Arrays

In Java, when an array is **initialized**, the **date type** of the array must be assign, and also the **length**.

In JavaScript when an array is initialized, **there is no need** to specify nether the **length** nor the type of **data** that the array will contain.

That means we can **create an empty array** and there we can insert **as many elements** as we need, by the same time the array will be **automatically resized**:

```js live
let elements = [];
console.log(`The length of the array is: ${elements.length}`);

// Resize the array
elements[0] = 10; 
elements[1] = 20;
elements[2] = 30;

console.log(`The length after resize is: ${elements.length}`);
```

In JavaScript, it is possible to **store elements** in an array at a **non-contiguous location**, thus arrays are **not guaranteed to be dense** (all of the **indexes do not need to contain information**).

If an attempt to assign a value to a **non-existent** index is made, JavaScript **will fill** the missing elements with "**undefined**" values and increase its size:

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

Also, an **element** on the specific index can be **changed**: 


```js live
let elements = [10, 20, 30];
console.log(`Element on index 1 is: ${elements[1]}`);

elements[1] = 100;

console.log(`The new element on index 1 is: ${elements[1]}`);

```

[/slide]

[slide hideTitle]
# Arrays of Different Types

Arrays in JavaScript can hold **different** types of elements:

Array holding numbers:
```js
let numbers = [10, 20, 30, 40, 50];
```

Arrays holding **strings**:
```js
let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

Arrays holding **mixed** data:
```js
let mixedArr = [20, new Date(), 'hello', {x:5, y:8}];
```
[/slide]

[slide hideTitle]
# Arrays Indexation

**Setting** or **accessing** elements via **non-integers** using **bracket** notation (or dot notation) will **not set** or **retrieve** an element from the array list itself:

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

In this example, shows the result of **setting** elements using **decimal** index, **negative** index, and a **string**. 

In this example, the **interpreter** is going to **convert** every index into a **string**, then the value will be set as a **property**, as a result, the length of the array is **zero**.
[/slide]