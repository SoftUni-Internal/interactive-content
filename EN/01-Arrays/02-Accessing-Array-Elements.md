
# Accessing Array Elements

[slide hideTitle]

# Accessing Array Elements by Index

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

[/slide]

[slide hideTitle]

# Valid and Non-Vadli Properties

In JavaScript there are only two ways to access object properties:
- With a dot
- With square brackets

An array store it is elements as properties, and to retrieve an element a number as a property name is used.

```js live
let years = [1950, 1960, 1970, 1980, 1990, 2000];
// console.log(years.0);   // A syntax error
console.log(years[0]);
```
A dot notation with numbers can not be used to retrieve an array's element, 

[/slide]

[slide hideTitle]

# Rest Operator

The rest operator allows unpacking values from arrays or objects, into distinct variables.

```js live
let numbers = [10, 20, 30, 40, 50];
let [firstNumber, secondNumber, ...rest] = numbers;

console.log(firstNumber) // First element
console.log(secondNumber) // Second element
console.log(rest) // Rest of the numbers
```
In this example we have an array of numbers, then another array is created using destructuring `let [firstNumber, secondNumber, ...rest] = numbers;`. 

Destructuring is a syntax that unpacks elements from an array, it means that "a, b and ...rest" are separate variables. 

What `...rest` does is to say to the interpreter that all values except the `firstNumber` and `firstNumber` elements go to another array.

The rest operator also can be used to make a coppy of an array:

```js live
let numbers = [10, 20, 30, 40, 50];
let [...rest] = numbers;

console.log(rest == numbers);
```

In this example, the "numbers" and "rest" are two separate arrays with identical values, but their references point to a different address in the memory.

As a result, when we compare them it will return "false".
[/slide]