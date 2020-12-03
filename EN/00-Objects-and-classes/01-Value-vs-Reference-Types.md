# Value vs. Reference Types

[slide]

# Value vs. Reference Types

[image assetsSrc="Value-vs-Reference-Types(1).gif" /]

# Value Types

In Javascript, there are **seven basic**, or primitive, types of data. 

The seven most basic types of data are `Boolean`, `String`, `Number`, `null`, `undefined`, `Symbol` and `BigInt`.

We refer to these as **primitive data types.**

A single variable can only store a single type of data.

If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value:

``` js live
let a = 10;
let c = a;
let b = 'abc';
let d = b;

console.log(`Variable a = ${a}`);
console.log(`Variable b = ${b}`);
console.log(`Variable b = ${c}`);
console.log(`Variable b = ${d}`);
```

# Reference Types

Two three common data types that are **Objects**, **Arrays** and **Functions**.

An object or array are collections, a way to group together multiple points of data into a single bundle that we can pass around using access.

Functions in are also objects, a special kind of objects: **function objects.** 

They can be invoked an many times as we need.

These are all technically **Objects**, so we'll refer to them collectively **as Objects.**

Variables that are assigned a non-primitive value are given a **reference** to that value

``` js live
let array = ['a', 'b', 'c', 'd'];
let array2 = array;

console.log(`First array value: ${array}`);
console.log(`Second array value: ${array2}`);

array.push('e');

console.log(`First array value: ${array}`);
console.log(`Second array value: ${array2}`);
```

In this example we're creating an array and assigning the value to a variable array.

This value is stored in the memory and attaching only the reference is attached to the variable.

When we assign `array` to the second variable `array2` we create a copy of the reference that points to the memory.

 Because of that when we log both we get the same result `['a', 'b', 'c', 'd']`. 
 
 When we add the number `e` to the array by doing `array.push('e')` we are altering the value stored in memory.
 
That's assigned by the reference point in the variable array, and because `array2` has copied the reference point to the same value, we get the same result when we `console.log` both variables.

[/slide]