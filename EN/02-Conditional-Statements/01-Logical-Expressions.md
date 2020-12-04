[slide]
# Comparison Operators

[vimeo-video]
[stream language="EN" videoId="486878604/02a3167730" default /]
[stream language="RO" videoId="486878604/02a3167730"  /]
[/video-vimeo]

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
# Value Comparison

[vimeo-video]
[stream language="EN" videoId="486878826/d63c730134" default /]
[stream language="RO" videoId="486878826/d63c730134"  /]
[/video-vimeo]

Examples of such an expression are as follows:
```js live
let a = 5;
let b = 10;
console.log(a < b);
console.log(a > 100);
console.log(a <= 5);
console.log(b === 2 * a);
console.log(a !== b);
```

You can also compare numeric expressions. 

The expressions you compare can themselves be complex expressions, as in the following example.

```js
x / 45 * (y +17) >= Math.sqrt(z) / (p - (x * 16))
```

The preceding complex expression includes **literals**, **variables**, and **function calls.** 

The expressions on both sides of the comparison operator are **evaluated**. Then the resulting values are **compared** by using the >= comparison operator. 

If the value of the expression on the left side is greater than or equal to the value of the expression on the right, the entire expression evaluates to `true`, otherwise, it evaluates to `false`.

## String Comparison
Comparing text using the equality operator(`==`).

Two string operands are equal when both of them are `null` or both are of the same length and have identical characters in each character position:
```js live
let a = "Examplе";
let b = a;
console.log(a === b);
```

```js
let a = "hello";
let b = "hello";
console.log(a === b);
console.log(a < b); // error
```
[/slide]
