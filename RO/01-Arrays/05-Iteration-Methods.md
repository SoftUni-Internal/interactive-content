# Iteration Methods

[slide hideTitle]
# ForEach

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/EN/01-Arrays/02.JS-Advanced-Arrays-28-29-Iteration-Methods-For-each-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `array.forEach()` method **executes** a provided function **once** for each array element.

It is similar to the `Stream.forEach()` method in Java.

Here is an example:

```js live
const names = ['Peter', 'George', 'Arnold'];
const copy = [];

names.forEach(name => { copy.push(name); });

console.log(copy);
```

In this example, `.forEach()` is used with a **callback**, which **accepts** one parameter - the **current element** from the array.

The callback function can receive **two arguments**:

- First argument: the **current** element of the array
- Second argument: the **index**

In the following example, the callback function has both parameters:

```js live
const names = ['Peter', 'George', 'Arnold'];

names.forEach((name, index) => console.log(`${index} -> ${name}`));

```

The `.forEach()` method cannot be stopped with `break`.

Once executed it will **go through the entire array**, and if it is very big, it may cost **performance** issues.

[/slide]

[slide hideTitle]
# Some

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/EN/01-Arrays/02.JS-Advanced-Arrays-32-Some-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `array.some()` method checks whether at **least one element in the array** meets the **requirements** set by the **given** function (**predicate**) and returns a boolean value.

It is similar to the `Stream.anyMatch()` method in Java.

This is how to use this method:

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

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/EN/01-Arrays/02.JS-Advanced-Arrays-31-Find-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `array.find()` returns the **first element** in the array that **satisfies** the provided condition or undefined if there is none.

Here is an example:

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

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/EN/01-Arrays/02.JS-Advanced-Arrays-30-Filter-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `array.filter()` method returns a new array only with elements, which **satisfy** a given condition without **changing** the original.

It is similar to the `Stream.filter()` method in Java.

```js live
let numbers = [5, 12, 8, 130, 44, 3, 17];

let filterNumbers = numbers.filter(el =>  el % 2 == 0);

console.log(filterNumbers); 

```
[/slide]

[slide hideTitle]
# Map

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/EN/01-Arrays/02.JS-Advanced-Arrays-33-Map-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `array.map()` method creates a **new array** with the **results** of calling a provided function on **every element** in the calling array.

It is similar to the `Stream.map()` method in Java.

```js live
let numbersAsStrings = ['1', '2', '3'];

// parse all numbersAsStrings to numbers
let numbers = numbersAsStrings.map(x => Number(x));
console.log(numbers);

```

You can also also possible to **chain** methods like this:

```js live
let numbersAsStrings = ['1', '2', '3'];

// parse all numbersAsStrings to numbers
let numbers = numbersAsStrings
                     .map(x => Number(x))
                     .map(x => x + 1); // add 1 ot each number
console.log(numbers);

```

You can read more about the `array.map()` function in mathematics [here](https://en.wikipedia.org/wiki/Map_(mathematics)).
[/slide]

[slide hideTitle]
# Problem: Process Odd Numbers

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/EN/01-Arrays/02.JS-Advanced-Arrays-37-Problem-Process-Odd-Numbers-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/EN/01-Arrays/02.JS-Advanced-Arrays-34-35-36-Reduce-method-Reducer-Function-and-Examples-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `array.reduce()` method **executes** a reducer function on **each element** of the array, resulting in a **single output value**.

[image assetsSrc="java-js-adv-arrays-02.png" /]

The reducer function has four parameters:
- Accumulator 
- Current Value 
- Current Index (Optional)
- Source Array (Optional)

The reducer function's **return** value is **assigned** to the accumulator's **value**, which is the final **resulting** value.

This method is similar to `Stream.reduce()` in Java.

## Example One

The `reduce()` method has two parameters:
- Reducer function: which is created outside of the `reduce()` method
- Starting value: in this case, it is 0

```js live
let numbers = [7, 6, 1, 5, 2, 13];

const sumReducer = (acc, c) => acc + c;
let result = numbers.reduce(sumReducer, 0);

console.log(result);
```
As a result, we receive the **sum** of every number in the array.

## Example Two

We can use the `.reduce()` method to calculate the **average value** of the numbers in an array.

In this example, the reducer function has **four** parameters:
- Accumulator: where the value will be stored
- Current number (c)
- Index (i) - it is **not used in this example**, it is declared because we need to use the fourth parameter
- Array (arr)

```js live
let numbers = [7, 6, 1, 5, 2, 13];

let avarege = numbers.reduce((acc, c, i, arr) => acc + c /arr.length, 0);

console.log(avarege);
```
## Example Three
In this example, the `Math.max()` function is used to find the biggest number in the array.

```js live
let numbers = [7, 6, 1, 5, 2, 13];

let max = numbers.reduce((acc, c) => Math.max(acc, c));

console.log(max);
```
The "acc" is the **biggest** number so far and "c" is the **current** number. 

Using `Math.max()` the "acc" is **compared** to "c" and the **result** again is **stored** in "acc". 

The function will be **executed** until there are no more **elements** in the array.

You can read more about the `.reduce()` method [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

Those were **not all the methods** that can be executed on the array, for more information you can read the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
[/slide]


