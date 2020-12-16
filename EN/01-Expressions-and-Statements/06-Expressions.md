
[slide]
# Expressions

[vimeo-video]
[stream language="EN" videoId="486856973/6e98d5e813" default /]
[stream language="RO" videoId="486856973/6e98d5e813"  /]
[/video-vimeo]

**Expressions** are sequences of operators, literals and variables which are evaluated to a value.
  * Consist of at least one **operand**
  * Can have 1 or more **operators**

```js
let y = x + 5;
```
```js
let name = "John Doe";
```
In most of the contexts in which expressions are used, for example in statements, the expression is expected to evaluate to some value. 
* If `x` and `y` are numbers, the expression `x + y` evaluates to a numeric value. 

# Numerical expressions
In programming, we can calculate numerical expressions, for example:
```js live
let r = (150-20) / 2 + 5;

console.log(r);
```
The standard rule for **priorities** of arithmetic operations is applied: multiplication and division are always done before addition and subtraction. 

In case of an expression in **brackets**, it is calculated **first**, just like in math.
[/slide]