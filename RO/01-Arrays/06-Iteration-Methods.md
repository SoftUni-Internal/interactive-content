# Iteration Methods

[slide hideTitle]
# ForEach

The `array.forEach()` method **executes** a provided function **once** for each array element.

This method is similar to the `Stream.forEach()` in Java.

```js live
const names = ['Peter', 'George', 'Arnold'];
const copy = [];

names.forEach(name => { copy.push(name); });

console.log(copy);
```
In this example, forEach is used with a **lambda function**, which **accepts** one parameter - the **current element** from the array.

ForEach can accept **two parameters**:

- First parameter: the **current** element of the array
- Second parameter: the **index**.

```js live
const names = ['Peter', 'George', 'Arnold'];

names.forEach((name, index) => console.log(`${index} -> ${name}`));

```
ForEach method can not be stopped with `break`.

Once executed it will **go through the entire collection**, and if the collection is very big it may cost **performance** issues.

[/slide]

[slide hideTitle]
# Some

The `array.some()` method tests whether at **least one element in the array** fulfill the the **condition** implemented by the **provided** function (**predicate**) and returns a boolean value.

This method is similar to the `Stream.anyMatch()` in Java.

```js live
let array = [1, 2, 3, 4, 5];

let isEven = el => {
  // checks whether an element is even
  return el % 2 === 0;
};

console.log(array.some(isEven)); 
```
[/slide]

[slide hideTitle]
# Find

The `array.find()` returns the **found value** in the array if an element in the array **satisfies** the provided condition, or undefined if not found.

```js live
let numbers = [5, 12, 8, 130, 44];

let found = numbers.find(el => {
  return el > 10;
});

console.log(found); 
```
[/slide]

[slide hideTitle]
# Filter

The `array.filter()` creates a new array with **filtered** elements only, which **satisfy** the given condition and **does not mutate** the array on which it is called.

This method is similar to the `Stream.filter()` in Java.

```js live
let numbers = [5, 12, 8, 130, 44, 3, 17];

let filterNumbers = numbers.filter(el =>  el % 2 == 0);

console.log(filterNumbers); 

```
[/slide]

[slide hideTitle]
# Map

The `array.map()` creates a **new array** with the **results** of calling a provided function on **every element** in the calling array.

This method is similar to the `Stream.map()` in Java.

```js live
let numbersAsStrings = ['1', '2', '3'];

// parse all numbersAsStrings to numbers
let numbers = numbersAsStrings.map(x => Number(x));
console.log(numbers);

```

It is also possible to **chain** methods:

```js live
let numbersAsStrings = ['1', '2', '3'];

// parse all numbersAsStrings to numbers
let numbers = numbersAsStrings
                     .map(x => Number(x))
                     .map(x => x + 1); // add 1 ot each number
console.log(numbers);

```

You can read more about the "map" in mathematics [here](https://en.wikipedia.org/wiki/Map_(mathematics)).
[/slide]

[slide hideTitle]
# Problem: Process Odd Numbers

[code-task title="Process Odd Numbers" taskId="java-path-js-advanced-arrays-Process-Odd-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function processOddNumbers(input){
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

You are given an array of numbers. 

Write a JS function that prints the elements at odd positions, doubled and in reversed order. 

The **input** comes as **array of number elements**. 

The **output** is printed to the console on a single line, separated by space. 

## Examples
| **Input** | **Output** |
| --- | --- |
|processOddNumbers([ 10, 15, 20, 25 ]) | 50 30  |
|processOddNumbers([ 3, 0, 10, 4, 7, 3 ]) | 6 8 0  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
processOddNumbers([ 100, 20, -2, -3, 400, 2000, 5 ])
[/input]
[output]
4000 -6 40
[/output]
[/test]
[test]
[input]
processOddNumbers([ 3.40, 2.55, 9.55, 8.12, 12.73, -3.2, -5.4, 13.44, 0, 0, 1.5 ])
[/input]
[output]
0 26.88 -6.4 16.24 5.1
[/output]
[/test]
[test open]
[input]
processOddNumbers([ 10, 15, 20, 25 ])
[/input]
[output]
50 30
[/output]
[/test]
[test open]
[input]
processOddNumbers([ 3, 0, 10, 4, 7, 3 ])
[/input]
[output]
6 8 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Reduce

The `array.reduce()` method **executes** a reducer function on **each element** of the array, resulting in a **single output value**.

[image assetsSrc="java-js-adv-arrays-02.png" /]

The reducer function takes four arguments:
- Accumulator 
- Current Value 
- Current Index (Optional)
- Source Array (Optional)

The reducer function's **returned** value is **assigned** to the accumulator's **value**, which is the final **resulting** value.

This method is similar to the `Stream.reduce()` in Java.

## Example One

The `reduce()` method accepts two parameters:
- Reducer function: which is created outside of the `reduce()` method
- Starting value: in this case, is 0

```js live
let numbers = [7, 6, 1, 5, 2, 13];

const sumReducer = (acc, c) => acc + c;
let result = numbers.reduce(sumReducer, 0);

console.log(result);
```
As the result, we receive the **sum** of every number in the array.

## Example Two

To receive the **average value** of the array, the reduce method has been used.

In this example the reducer function receives **four** parameters:
- Accumulator: where the value will be stored
- Current number (c)
- Index (i) - it is **not used in this example**, it has to be declared because the `array.length` is needed
- Array (arr) - to find average the array.length is needed

```js live
let numbers = [7, 6, 1, 5, 2, 13];

let avarege = numbers.reduce((acc, c, i, arr) => acc + c /arr.length, 0);

console.log(avarege);
```
## Example Three
In this example, the `Math.max()` is used to find the biggest number in the array.

```js live
let numbers = [7, 6, 1, 5, 2, 13];

let max = numbers.reduce((acc, c) => Math.max(acc, c));

console.log(max);
```
The "acc" is the **biggest** number so far and "c" is the **current** number. 

Using `Math.max()` the "acc" is **compared** to "c" and the **result** again is **stored** in "acc", the function will be **executed** until there are no more **elements** in the array.

You can read more about **reduce** [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

Those were **not all methods** that can be executed on the array, for more information you can read the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
[/slide]


