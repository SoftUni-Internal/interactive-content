
# Accessor Methods

[slide hideTitle]

# Join

Creates a string by **concatenating string representations of all elements**, using the specified in the brackets string as a separator:

``` js live
let arr = [10, 20, 30];

console.log(arr.join('@@'));
```
[/slide]

[slide hideTitle]
# IndexOf

The `array.indexOf()` method returns the **index at which the given value is stored**.

It returns the **special value** \-1 if the value is **not found**. 

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

# Slice

The `array.slice()` method **returns** the **selected elements** in an array, as a **new array object**.

It selects the elements starting at the given **start index** and ends at, but does not include, an optional **end index**. 

``` js live
let myArray = ['one', 'two', 'three', 'four', 'five'];
let sliced = myArray.slice(2);

console.log(myArray);
console.log(sliced);

console.log(myArray.slice(2,4));
```
[/slide]


[slide hideTitle]

# Problem: Piece of Pie

[/slide]