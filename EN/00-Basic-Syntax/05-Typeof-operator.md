# Typeof, Undefined and Null

[/slide]
# Typeof

The JavaScript itself provides an operator called `typeof` for that which works in a straightforward way. 

`Typeof` **returns a string** of what a values data type is, so for an object `object` is returned and for a string `string`.

However JavaScript data types and the `typeof` operator aren't exactly perfect. 

For example for arrays and `null` `object` is returned and for `NaN` and Infinity `number`.

Examples: 

``` js live
console.log(typeof "");
console.log(typeof "John");
console.log(typeof "John Doe");
console.log(typeof 0);
console.log(typeof true);
console.log(typeof {Name: "Peter", Age: 3})
```

We can use typeof in `if` construction:

``` js live
let n = 5;
if (typeof(n) === 'number') {
    console.log(n);
}
```
[slide]
