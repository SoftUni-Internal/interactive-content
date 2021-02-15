# Value vs. Reference Types

[slide hideTitle]
# Value vs. Reference Types

## Missing video.

[image assetsSrc="Value-vs-Reference-Types(1).png" /]

## Value Types

There are seven **basic** data types in JavaScript - `Boolean`, `String`, `Number`, `null`, `undefined`, `Symbol` and `BigInt`.

We refer to these as **primitive data types.**

A single **variable** can only **store** a single **type** of data.

If a primitive type is assigned to a variable, we could say that this variable contains the primitive value:

``` js live
let a = 10;
let b = 'abc';
let c = a;
let d = b;

console.log(`Variable a = ${a}`);
console.log(`Variable b = ${b}`);
console.log(`Variable c = ${c}`);
console.log(`Variable d = ${d}`);
```

## Reference Types

There are three **reference data types** - **Objects**, **Arrays**, and **Functions**.

**Objects** and **arrays** are "collections" - a way to **group** multiple points of data into a single bundle that we can pass around for easier access.

**Functions** are a special kind of objects called **function objects.**

They can be **invoked as many times as we need.**

These are all **technically Objects**, so we will refer to them as such in the future.

Variables that are assigned a non-primitive value are given a **reference** to that value:

``` js live
let arrayOne = ['a', 'b', 'c', 'd'];
let arrayTwo = array;

console.log(`First array value: ${arrayOne}`);
console.log(`Second array value: ${arrayTwo}`);

arrayOne.push('e');

console.log(`First array value: ${arrayOne}`);
console.log(`Second array value: ${arrayTwo}`);
```
 
In this example, we are creating an array called `arrayOne` to which we assign values. 

This value is stored in the memory, and only the reference is assigned to the variable. 

When we assign `arrayOne` to the second variable `arrayTwo`, we create a copy of the **reference** that points to the memory. 

Because of that when we log both variables to the console, we get the same result - `['a', 'b', 'c', 'd']`. 
 
When we add the string `e` to the array by calling `array.push('e')` we are altering the **value** stored in memory. 
 
Because `arrayTwo` is just a copy of the **reference** point to the same value, we get the same result when we `console.log` both variables. 

[/slide]
