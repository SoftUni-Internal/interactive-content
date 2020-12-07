[slide]
# Increment and Decrement Operators

[vimeo-video]
[stream language="EN" videoId="487119117/f65ddf18a0" default /]
[stream language="RO" videoId="487119117/f65ddf18a0"  /]
[/video-vimeo]

The unary increment operator `++` increments its operand by 1, while the unary decrement operator `--` decrements it by 1.

The increment and decrement operators are supported in two forms: 

* the postfix increment/decrement operator, `x++`/`x--` 
* the prefix increment/decrement operator, `++x`/`--x`

## Increment Operator

### Postfix Increment Operator
The result of `x++` is the value of `x` before the operation, as the following example shows:
```js live
let i = 3;
console.log(i);   // output: 3
console.log(i++); // output: 3
console.log(i);   // output: 4
```

### Prefix Increment Operator
The result of `++x` is the value of `x` after the operation, as the following example shows:
```js live
let a = 1.5;
console.log(a);   // output: 1.5
console.log(++a); // output: 2.5
console.log(a);   // output: 2.5
```

## Decrement Operator

### Postfix Decrement Operator
The result of `x--` is the value of `x` before the operation, as the following example shows:
```js live
let i = 3;
console.log(i);   // output: 3
console.log(i--); // output: 3
console.log(i);   // output: 2
```

### Prefix Decrement Operator
The result of `--x` is the value of `x` after the operation, as the following example shows:
```js live
let a = 1.5;
console.log(a);   // output: 1.5
console.log(--a); // output: 0.5
console.log(a);   // output: 0.5
```
[/slide]
