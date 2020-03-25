[slide]
# Comparison Operators
In programming, we can compare values using the following operators:

|Operators|Designation|
|---------|-----------|
| Equal to (value) |   **==** |
| Not Equal to (value) |   **!=** |
| Equal to (value&type) |   **===** |
| Not Equal to (value&type) |   **!==** |
| Greater than |   **>** |
| Greater than or equal to |   **>=** |
| Less than |   **<** |
| Less than or equal to |   **<=** |

Note the difference between `===` and `==`.
See the example:
```js live
let a = 5;
let b = '5';
console.log(a == b) //true
console.log(a === b) //false
```

When compared, the result is a Boolean value `true` or `false`, depending on whether the result of the comparison is `true` or `false`.
[/slide]

[slide]
# Examples for Comparing Numbers
Examples of such an expression are as follows:
```js live
let a = 5;
let b = 10;
console.log(a < b);      // true
console.log(a > 100);    // false
console.log(a <= 5);     // true
console.log(b === 2 * a); // true
console.log(a !== b);     // true
```

You can also compare numeric expressions. 

The expressions you compare can themselves be complex expressions, as in the following example.

```js
x / 45 * (y +17) >= Math.sqrt(z) / (p - (x * 16))
```

The preceding complex expression includes literals, variables, and function calls. 

The expressions on both sides of the comparison operator are evaluated, and the resulting values are then compared using the `>=` comparison operator. 

If the value of the expression on the left side is greater than or equal to the value of the expression on the right, the entire expression evaluates to `true`, otherwise, it evaluates to `false`.
[/slide]

[slide]
# String Comparison
Comparing text using the equality operator(`==`).

Two string operands are equal when both of them are `null` or both are of the same length and have identical characters in each character position:
```js live
let a = "Examplе";
let b = a;
console.log(a === b); // true
```

```js
let a = "hello";
let b = "hello";
console.log(a === b); // true
console.log(a < b); // error
```
[/slide]

[slide]
# Video
[vimeo-video videoId="341546772" startTimeInSeconds="1539" endTimeInSeconds="1938" /]

[/slide]