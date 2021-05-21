
# Accessor Methods

[slide hideTitle]
# Definition

When any of the following **methods** are applied, they will not **change** (modify) the **original** array, rather they return a **new object**, and the original array stays **unchanged**.

## Join

The `array.join()` creates a string by **concatenating string representations of all elements**, using the specified in the brackets string as a separator:

``` js live
let arr = [10, 20, 30];

console.log(arr.join('@@'));
```

[/slide]

[slide hideTitle]
# IndexOf

The `array.indexOf()` method returns the **index at which the given value is stored**.

It returns the **special value** \-1 if the value is **not found**. 

This method is similar to the `List.indexOf` in Java.

``` js live
let myArray = ['Peter','George','Mary'];

let indexOfMary = myArray.indexOf('Mary');
let indexOfNick = myArray.indexOf('Nick');

console.log(indexOfMary);
console.log(indexOfNick);
```
[/slide]


[slide hideTitle]
# Concat

The `concat()` method is used to **merge** two or more arrays and **does not change** the existing arrays, but instead returns a **new array**.

``` js live
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);

console.log(numbers); 
```
[/slide]

[slide hideTitle]

# Slice

The `array.slice()` method **returns** the **selected elements** in an array, as a **new array object**.

It selects the elements starting at the given **start index** and ends at, but does not include, an optional **end index**. 

This method is similar to the `List.subList; Stream.skil + limit` in Java.

``` js live
let myArray = ['one', 'two', 'three', 'four', 'five'];
let sliced = myArray.slice(2);

console.log(myArray);
console.log(sliced);

console.log(myArray.slice(2,4));
```

Slice can **receive** a **negative** number as a parameter:

``` js live
let myArray = ['one', 'two', 'three', 'four', 'five'];

console.log(myArray.slice(-2));
console.log(myArray.slice(2, -1));
```

In this example when **-2 is passed** to the `slice()`, it takes the **last** "n" elements of the array.
[/slide]

[slide hideTitle]
# Problem: Bigger Half

[code-task title="Bigger Half" taskId="java-path-js-advanced-arrays-bigger-half" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function biggerHalf(input){
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

Write a JavaScript function that **sorts** the array in **ascending order** and returns a new array containing only the **second half** of the input. 

If there is an odd number of elements in the input, always take the bigger half. 

For example, if the input array contains 4 elements, the new array should have 2 elements. 

If the input array has a length of 5, the result should have 3 elements. 

The **input** comes as **array of number elements**. 

The **output** is the **return** value of the function and should be an **array of numbers**. 


## Examples
| **Input** | **Output** |
| --- | --- |
|biggerHalf([ 4, 7, 2, 5 ]) | [ 5, 7 ] |
|biggerHalf([ 3, 19, 14, 7, 2, 19, 6 ]) | [ 7, 14, 19, 19 ]  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
biggerHalf([ 4, 7, 2, 5 ])
[/input]
[output]
[ 5, 7 ]
[/output]
[/test]
[test open]
[input]
biggerHalf([ 3, 19, 14, 7, 2, 19, 6 ])
[/input]
[output]
[ 7, 14, 19, 19 ]
[/output]
[/test]
[test]
[input]
biggerHalf([ 1, 2, 3 ])
[/input]
[output]
[ 2, 3 ]
[/output]
[/test]
[test]
[input]
biggerHalf([ 53, 5, 43, 7 ])
[/input]
[output]
[ 43, 53 ]
[/output]
[/test]
[test]
[input]
biggerHalf([ 100, 90, 90, 5, 67, 4, 3 ])
[/input]
[output]
[ 67, 90, 90, 100 ]
[/output]
[/test]
[test]
[input]
biggerHalf([ -1, -10, -4, -7 ])
[/input]
[output]
[ -4, -1 ]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Includes

The `array.includes()` method returns **true** if the given **value** is a **part of the array**.

``` js live
let myArray = ['Peter','George','Mary'];

let isGeorgeIncluded = myArray.includes('George');
let isJohnIncluded = myArray.includes('John');

console.log(isGeorgeIncluded);
console.log(isJohnIncluded);
```

[/slide]

[slide hideTitle]
# Problem: Piece of Pie

[code-task title="Piece of Pie" taskId="java-path-js-advanced-arrays-Piece-of-Pie" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function peiceOfPie(input, startSection, endSection){
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

Write a function that receives **three parameters** - an **array** of pie flavors as strings and two target flavors as **strings**. 

The result should be a new array - the section of the original array, starting at the first flavor parameter and ending at (including) the second flavor parameter. 

The **input** comes as **three arguments**: 

- An **array of strings**, representing pie flavors 

- **Two more strings**, representing the start and end of the section, respectively 

The **output** is the **return** value of the function and should be an **array of strings**. 

## Examples
| **Input** | **Output** |
| --- | --- |
|peiceOfPie([ 'Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie' ], 'Key Lime Pie', 'Lemon Meringue Pie') | [ 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie' ] |
|peiceOfPie([ 'Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie' ], 'Pot Pie', 'Smoked Fish Pie' ) | [ 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie' ]  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
peiceOfPie([ 'Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie' ], 'Key Lime Pie', 'Lemon Meringue Pie')
[/input]
[output]
[ 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie' ]
[/output]
[/test]
[test open]
[input]
peiceOfPie([ 'Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie' ], 'Pot Pie', 'Smoked Fish Pie' )
[/input]
[output]
[ 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie' ]
[/output]
[/test]
[test]
[input]
peiceOfPie([ 'a', 'b', 'c', 'd' ], 'a', 'b')
[/input]
[output]
[ 'a', 'b' ]
[/output]
[/test]
[test]
[input]
peiceOfPie([ 'a', 'b', 'c', 'd' ], 'b', 'd')
[/input]
[output]
[ 'b', 'c', 'd' ]
[/output]
[/test]
[test]
[input]
peiceOfPie([ 'f', 'f', 's', 'q', 'r', 'g' ], 'f', 'r')
[/input]
[output]
[ 'f', 'f', 's', 'q', 'r' ]
[/output]
[/test]
[test]
[input]
peiceOfPie([ 'g', 'f', 's', 'k', 't' ], 'f', 't')
[/input]
[output]
[ 'f', 's', 'k', 't' ]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
