// sectionId: "Javascript::Programming-Basics::Expressions-and-Statements::Arithmetic-Operators"

[slide hideTitle]
# Arithmetic Operations

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-25-26-Arithmetic-operators-Plus-Minus-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us examine the basic **arithmetic operations** in programming. 

We can add, subtract, multiply and divide numbers using the operators `+`, `-`, `*`, and `/`.

## Summing up Numbers
We can **sum** up numbers using the `+` operator:
```js live
let a = 5;
let b = 7;
let sum = a + b;
console.log(sum);
```

## Subtracting Numbers
**Subtracting** numbers is done using the `-` operator:
```js live
let a = 15;
let b = 7;
console.log(a - b);
```

[/slide]

[slide hideTitle]
# Multiplying and Dividing Numbers

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-27-Arithmetic-Operators-Multiplication-Divison.mp4-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

For **multiplication** of numbers we use the `*` operator:
```js live
let a = 5;
let b = 7;
console.log(a * b);
```

## Dividing Numbers

**Dividing** numbers is done using the `/` operator.

The number type represents **both** integer and floating-point numbers. There is **no integer division by default**.
* If you do this

```js live
let result = 5/4;
console.log(result);
```

The expected result will be 1, but the answer is 1.25.

Integer division can easily be achieved by flooring the quotient of the two numbers, using `Math.floor()`:
```js live
let result = Math.floor(5/4);
console.log(result);
```

This leads to a problem though. 

What if we have a situation like this: 

```js live
let result = Math.floor(-5/4);
console.log(result);
```
In this case, the quotient is negative. 

* The expected answer is -1, but you will get -2 instead

* Flooring works the opposite way for negative numbers 

An `if statement` can fix this:

```js live
let result = -5/4;
if(result >=0){
  result = Math.floor(result);
}else{
  result = Math.ceil(result);
}
console.log(result);
```

When it comes to dividing numbers by zero, there are two main cases:

```js live
let result = 0/0;
console.log(result);
```
```js live
let result = 1/0;
console.log(result);
```

Here are a few examples with the division operator:

```js live
let a = -5;
let i = a / 0;
console.log(i);
let f = a / 4.0;
console.log(f);
```
[/slide]

[slide hideTitle]
# Remainder

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-29-Arithmetic-operators-Modular-Division-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The remainder operator `%` computes the remainder after dividing its left-hand operand by its right-hand operand.

```js live
let a = 7;
let b = 2;
console.log(a % b);
console.log(3.5 % 1);
```

It is useful if we want to check whether a number is **even** or **odd**.

If the remainder when dividing by 2 is equal to 0, then the number is even, otherwise, it is odd.

See the following example: 

```js live
console.log(3 % 2);
console.log(4 % 2);
```
[/slide]
