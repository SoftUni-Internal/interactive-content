
# Accessing Array Elements

[slide hideTitle]

# Accessing Array Elements by Index

In JavaScript elements of an array are accessed by there **indexes**:

```js live
let elements = [10, 20, 30];

console.log(`elements[0] = ${elements[0]}`);
console.log(`elements[2] = ${elements[1 + 1]}`);
```

In Java, when trying to **access** an element on the **non-existing** index, **exception** will be throw, but this is **not the case** in JavaScript.

When tring to access an **element** on a **non-existing** index in JavaScript, the result we be "**undefined**":

```js live
let elements = [10, 20, 30];

console.log(elements[10]);
console.log(elements[-1]);
```

[/slide]

[slide hideTitle]

# Valid and Non-Vadli Properties

In JavaScript **object properties** can be accessed by using:
- Dot notation
- Square brackets

An array store it is elements as **properties**, and to retrieve an element, a number as a **property name** is used.

```js live
let years = [1950, 1960, 1970, 1980, 1990, 2000];
// console.log(years.0);   // A syntax error
console.log(years[0]);
```
A dot notation with numbers can **not be used** to retrieve an array's element, 

[/slide]

[slide hideTitle]

# Rest Operator

The rest operator allows to **unpack** values from arrays or objects, into **distinct variables**.

```js live
let numbers = [10, 20, 30, 40, 50];
let [firstNumber, secondNumber, ...rest] = numbers;

console.log(firstNumber) // First element
console.log(secondNumber) // Second element
console.log(rest) // Rest of the numbers
```
In this example from the **initial** array of numbers, three new **variables** are created by using **destructuring**:

- "firstNumber" - a number
- "secondNumber" - a number
- "rest" - new array

What `...rest` does is to say to the **interpreter** that **all values except** the first and second elements go to **another array**.

The rest operator also can be **used** to make a **coppy** of an array:

```js live
let numbers = [10, 20, 30, 40, 50];
let [...rest] = numbers;

console.log(rest == numbers);
```

In this example, the "**numbers**" and "**rest**" are two **separate** arrays with **identical** values and their **references** point to a different address in the memory.

As a result when both arrays are compared, "false" will be returned.
[/slide]