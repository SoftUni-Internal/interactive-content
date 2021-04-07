# Booleans

[slide hideTitle]

# What is a Boolean?

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-21-22-what-is-a-boolean-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


**Boolean** values are named after [George Boole](https://en.wikipedia.org/wiki/George_Boole), an English mathematician.

Boolean values represent some **logical value**.

They can only have two values "**true**" or "**false**".

We can give this value as a **literal** or we can get it from the result of a **given expression**.

``` js live
let myBool = 10 > 9;
console.log(myBool);
```

Boolean comparisons are most often put in an "**if**" construction, but we can also return a Boolean value as a **result from a function.**

**Extremely rarely** do we write "**true**" or "**false**" explicitly.

[/slide]

[slide hideTitle]

# Comparisons and Conditions

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-23-comparisons-and-conditions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Examples of comparison operators:

| **Operator** | **Description** | **Example**   |
| :---:       |    :---:   |   :---:   |
| `==` | equal to (no type) | `if (day == 'Monday')` |
| `===` | equal to (with type) | `if (5 === 5)` |
| `!=`| not equal (no type) | `if (5 != 5)` |
| `!==` | not equal (with type) | `if (5 !== '5')` |
| `>` | greater than | `if (salary > 9000)` |
| `<` | less than | `if (age < 18)` |
| `>=` | greater than or equal to(no type) | `if (6 >= 6)` |
| `<=` | less than or equal to(no type) | `if(6 <= 6)` |

## Boolean examples

Everything **with a value** is "**true**":

``` js live
let number = 1;

if (number) {
  console.log(number);
}
```

Everything **without a value** is "**false**":

``` js live
let number;

if (number) {
  console.log(number);
} else {
  console.log('false');
}

```
[/slide]

[slide hideTitle]
# True and False

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-24-25-boolean-comparisons-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


In addition to "**true**" and "**false**", JavaScript has "**truthy**" and "**falsy**". 

These are values that are **not** "**true**" or "**false**", but when we turn them into a Boolean value they give "**true**" or "**false**".

JavaScript is **loosely typed language** and we do not have types of variables. 

This does not prevent an "**if**" expression which tries to compare variables that store values with different types. 

In this example: 

``` js live
console.log(5 == '5');
```

we pass values of different types, using the operator `==` or`!=`. 

In this case, the interpreter will make the so-called **implicit casting**. 

This means that the default interpreter will **convert** one value to **another**, which in most cases means **converting to a string.**

By giving a **string** and a **number**, for example, **the number becomes a string** and the interpreter compares the strings.

If we use `===` the interpreter **does not convert the number to a string**, so **the number five is not the same as string five** and this expression returns "**false**":

``` js live
console.log(5 === '5');
```

When it comes to "**truthy**" and "**falsy**" values, for example, we can use them in an "**if**" construction to compare different types of data:

``` js live
if (5 == true) {
  console.log('same');
} else {
  console.log('not');
}

```
The result of this expression will be **not**, and this is expected behavior.

The result of this expression:
``` js live
if (1 == true) {
  console.log('same');
} else {
  console.log('not');
}
```

is **same**, because the interpreter sees them as `1 == true` and turns this into a **Boolean value.**

The values **0** and **1** become the Boolean values **0 false** and **1 true**.

The other numeric values become Boolean values, and they are "**false**".

In JavaScript we have eight values that are assumed to be "**falsy**":

| **Value** | **Description** | 
| :---:       |    :----:   |   
| "**false**" | The keyword "**false**" | 
| `0` | The number zero | 
| `-0`| The number negative zero | 
| `0n` | BigInt, when used as a boolean | 
| `''` |  Empty string value | 
| `null` |  `null` - the absence of any value | 
| `undefined` | `undefined` - the primitive value | 
| `NaN` |  `NaN` - not a number | 

All other values are "**true**", for example an empty array `[]` and an empty object `{}` are true.

Nevertheless, in a loop, if a construction always submits the Boolean value, it will never submit anything other than a Boolean value.  

It is always better to be **explicit** so as not to be ambiguous.

[/slide]

[slide hideTitle]

# Problem with Solution: Amazing Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-26-solution-solution-amazing-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Amazing Numbers" taskId="fund-js-data-types-and-variables-lab-amazing-numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function amazingNumbers(input){
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
# Description

Create a program that receives a **number** as an input, and prints whether that number is **amazing** or **not**.

An **amazing** number is one that includes the **number 9** in the sum of its digits.

Print the result into the following format:

"\{**number**\} **Amazing?** \{**result**\}"

Examples of amazing numbers are: 

- 1233 (1 + 2 + 3 + 3 = 9)

- 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)

## Example
| **Input** | **Output** |
| --- | --- |
| amazingNumbers(1233) | 1233 Amazing? True |
| amazingNumbers(999) | 999 Amazing? False|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
amazingNumbers(1233)
[/input]
[output]
1233 Amazing? True
[/output]
[/test]
[test open]
[input]
amazingNumbers(999)
[/input]
[output]
999 Amazing? False
[/output]
[/test]
[test]
[input]
amazingNumbers(144)
[/input]
[output]
144 Amazing? True
[/output]
[/test]
[test]
[input]
amazingNumbers(55555554)
[/input]
[output]
55555554 Amazing? True
[/output]
[/test]
[test]
[input]
amazingNumbers(5554)
[/input]
[output]
5554 Amazing? True
[/output]
[/test]
[test]
[input]
amazingNumbers(45645)
[/input]
[output]
45645 Amazing? False
[/output]
[/test]
[test]
[input]
amazingNumbers(3671)
[/input]
[output]
3671 Amazing? False
[/output]
[/test]
[test]
[input]
amazingNumbers(1231)
[/input]
[output]
1231 Amazing? False
[/output]
[/test]
[test]
[input]
amazingNumbers(6123)
[/input]
[output]
6123 Amazing? False
[/output]
[/test]
[test]
[input]
amazingNumbers(65451)
[/input]
[output]
65451 Amazing? False
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide hideTitle]

# The Typeof Operator

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-28-29-Definition-of-the-typeof-operator-and-examples-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JavaScript itself provides an operator called `typeof` for everything that works in a straightforward way.

`Typeof` **returns a string** of what a value's data type is, so for an object `object` is returned and for a string - `string`.

However JavaScript data types and the `typeof` operator are not exactly perfect.

For example, for arrays and `null`, `object` is returned. For `NaN` and `Infinity` - number.

Examples:

``` js live
console.log(typeof '');
console.log(typeof 'John');
console.log(typeof 'John Doe');
console.log(typeof 0);
console.log(typeof true);
console.log(typeof {Name: 'Peter', Age: 3})
```

We can use `typeof` in an `if` construction:

``` js live
let n = 5;
if (typeof(n) === 'number') {
    console.log(n);
}
```

[/slide]
