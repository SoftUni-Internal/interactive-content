
# Accessing Array Elements

[slide hideTitle]

# Accessing Array Elements by Index

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/EN/01-Arrays/02.JS-Advanced-Arrays-8-9-10-Accessing-array-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In JavaScript, elements of an array are accessed by their **indexes**:

```js live
let elements = [10, 20, 30];

console.log(`elements[0] = ${elements[0]}`);
console.log(`elements[2] = ${elements[1 + 1]}`);
```

In Java, when trying to **access** an element at a **non-existing** index, an **exception** will be thrown.

When trying to access an **element** at a **non-existing** index in JavaScript, the result will be "**undefined**":

```js live
let elements = [10, 20, 30];

console.log(elements[10]);
console.log(elements[-1]);
```

[/slide]

[slide hideTitle]

# Valid and Non-Valid Properties

In JavaScript, **object properties** can be accessed by using:

- Dot notation
- Square brackets

An array stores its elements as **properties**, and  we use a number as a **property name** to retrieve them.

```js live
let years = [1950, 1960, 1970, 1980, 1990, 2000];
// console.log(years.0);   // A syntax error
console.log(years[0]);
```
A dot notation with numbers can **not be used** to retrieve an array's element. 

[/slide]

[slide hideTitle]

# Rest Operator

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/EN/01-Arrays/02.JS-Advanced-Arrays-11-REST-operator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The rest operator allows us to **use** an indefinite amount of array or object elements.

```js live
let numbers = [10, 20, 30, 40, 50];
let [firstNumber, secondNumber, ...rest] = numbers;

console.log(firstNumber) // First element
console.log(secondNumber) // Second element
console.log(rest) // Rest of the numbers
```

In this example, we create three new **variables** from the **initial** array of numbers by using **destructuring**:

- "firstNumber" - a number
- "secondNumber" - a number
- "rest" - new array

The `...rest` operator tells the **interpreter** that **all values except** the first and second elements go to **another array**.

It can also be **used** to make a **copy** of an array:

```js live
let numbers = [10, 20, 30, 40, 50];
let [...rest] = numbers;

console.log(rest == numbers);
```

In this example, there are two **separate** arrays with **identical** values whose **references** point to a different address in the memory.

Comparing the two arrays will result in "false".
[/slide]
