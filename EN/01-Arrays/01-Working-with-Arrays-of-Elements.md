# Arrays in JavaScript

[slide hideTitle]
# What is an Array?

So far in the Java path track, we have learned different types of collections such as an array, lists, stack, queue, and when we are working with those data structures we can apply methods from java streams.

In JavaScript, there are two types of data structures: arrays and objects.

In this lesson, we will learn about arrays, and in the next lesson, we will learn about objects.

Arrays in JavaScript are list-like objects and similar to Java, we can process arrays, using different methods.

In Java depends on the operation and the methods we want to employ to process the data, we can use an array, lists, stack, or queue, but in JavaScript, there are only arrays that it is used.

This makes JavaScript arrays a very powerful tool.

Arrays in JavaScript also reference data types that array's information stored in heap memory and the stack only the array's address is stored.

[image assetsSrc="java-js-adv-arrays-1.png" /]

The first element of the array is stored on index 0, which makes it zero base, and the last element of the array is stored at length-1.

JavaScript array example:

```js
let numbers = [10, 20, 30, 40, 50];
```

In this example, we create an array of integers using an array literal. 

We use the keyword `let`, then we create a name, in this case, is "**number**", then we initialize the array using `[]` (square brackets). 

[/slide]

[slide hideTitle]
# Secifics of JavaScipt Arrays

In Java, when we initialize an array we must assign the type of data that the array will contain and also the length of the array.

In JavaScript when we initialize an array, we **do not need** to specify nether the length nor the type of data that the array will contain.

That means we can create an empty array and there we can insert as many elements as we need:

```js live
let elements = [];
console.log(`The length of the array is: ${elements.length}`);

// Resize the array
elements[0] = 10; 
elements[1] = 20;
elements[2] = 30;

console.log(`The length after resize is: ${elements.length}`);
```

In a JavaScript array, it is possible to store elements at a non-contiguous location, thus arrays are not guaranteed to be dense (it is not mandatory for all of the indexes to contain information).

If we attempt to assign a value to a non-existent index, JavaScript will fill the missing elements with "**undefined**" values and increase its size:

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

We also can change the element on the specific index: 


```js live
let elements = [10, 20, 30];
console.log(`Element on index 1 is: ${elements[1]}`);

elements[1] = 100;

console.log(`The new element on index 1 is: ${elements[1]}`);

```

[/slide]

[slide hideTitle]
# Arrays of Different Types

Arrays can hold different types of elements:

Array holding numbers:
```js
let numbers = [10, 20, 30, 40, 50];
```

Array holding strings:
```js
let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

Array holding mixed data:
```js
let mixedArr = [20, new Date(), 'hello', {x:5, y:8}];
```
[/slide]

[slide hideTitle]
# Arrays Indexation

In JavaScript if we want to access element in a givven index, we use `[]` (sqare brackets):

```js live
let elements = [10, 20, 30];

console.log(`elements[0] = ${elements[0]}`);
console.log(`elements[2] = ${elements[1 + 1]}`);
```

In Java, if we try to access an element on the non-existing index it will throw an exception, but if we try to access an element on a non-existing index in JavaScript we will receive "undefined":

```js live
let elements = [10, 20, 30];

console.log(elements[10]);
console.log(elements[-1]);
```

Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself:

```js live
let arr = [];
arr[3.4] = 'Oranges';
arr[-1] = 'Apples';
console.log(arr.length);               
console.log(arr.hasOwnProperty(3.4));

arr["1"] = 'Grapes';
console.log(arr.length);
console.log(arr);
```
[/slide]