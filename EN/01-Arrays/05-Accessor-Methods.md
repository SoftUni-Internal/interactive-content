
# Accessor Methods

[slide hideTitle]
# Definition

When any of the following methods are applied, they will not change (modify) the original array, rather they return a new object, and the original array stays unchanged.

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

The `concat()` method is used to merge two or more arrays and does not change the existing arrays, but instead returns a new array.

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

Slice can receive a negative number as a parameter:

``` js live
let myArray = ['one', 'two', 'three', 'four', 'five'];

console.log(myArray.slice(-2));
console.log(myArray.slice(2, -1));
```

In this example when -2 is passed to the `slice()`, it takes the last "n" elements of the array.
[/slide]

[slide hideTitle]
# Problem: Bigger Half
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
[/slide]