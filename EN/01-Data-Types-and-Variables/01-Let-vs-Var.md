# Local vs. Global

[slide hideTitle]


# Var and Let

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-3-4-let-vs-var-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Different data types have different **sizes** in the computer's memory.

Everything in computers is **ones and zeros**, for example `int` is 32-bit, which means that in order to write `int` in the computer's memory, **thirty-two ones and zeros are needed.**

Thus, we tell the computer that it must set aside thirty-two bits, in order to read our number.

For **floating-point numbers**, such as 3.17, the computer must set aside 64 bits to store them in the memory.

This is the reason why we need **data types** so that the size can be known to the program in order to work correctly.

When we declare a variable and assign a **value** to it, this value is called a literal.

A literal in programming means to write a variable with such a value that the interpreter **understands** the type of this variable.

[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) or ES6 introduced two new ways to create variables - `let` and `const`. Before that, only `var` was used.

`Var` is a variable that works in the so-called functional scope.

```js live
{
  var x = 2;
}
console.log(x);
```

Using `var`, we can access a variable, before we declare it.

``` js live
console.log(myVar);

var myVar = 'Peter';
```

Here we get "**undefined**", because we do not know the value of the variable, nor can we access it. 

But, it is important that no error is shown and the program works. 

That could lead to unexpected results in our program.

Whereas when we declare a variable with `let`, this variable is available in the **block scope**.

Everything that is enclosed in **braces** `{}` is a block where variables live. 

This can be the body of some `if` constructions, loops, or the body of a function.

```js live
{
  let x = 2;
}
console.log(x)
```

When we declare a variable with `let`, we cannot access it, if we try to access that variable, we receive an error: "**x is not defined**".

``` js live
console.log(myVar);

let myVar = 'Peter';
```
We strongly advise you to use `let` when you **declare a variable**, that way you are going to protect yourself from unwanted behavior of the program.

[/slide]

[slide hideTitle]

# Variable Scope

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-5-6-variable-scope-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Scope means the **life** of the variable or where the variable is **visible**. 

Outside this scope, variables cannot be accessed.

We have **four types of scope**, and we will go through them in more detail in the JavaScript Advanced course.

## Global scope

All the variables we have defined at the top level.

These are usually our functions.

```js
var carName = 'Volvo';
  // Code here can use carName
function myFunction() {
  // Code here can also use carName
 }
```

In this example, we define the variable `carName` in the global scope, outside the function.

Therefore, we can access it in all functions.

## Function Scope

Functional scope is the **body of the function**, and each variable defined in the function lives only in the body of the function.

```js
function myFunction() {
   var carName = 'Volvo';
   // Only here, the code can use carName
 }
 ```

## Block Scope 

We also have a third type of scope - **Block Scope**. That is any body, defined in **braces** `{}`.

```js
{
  let x = 2;
} 
```

Note that the function is also defined with **curly braces** and is a block, but this is a special class.

From the programming basics course we know that we can embed an **if-else** construction, as well as loops.

So we put one block of code into another block of code.

## Object Scope

The fourth type of scope is the **object scope**, which is related to the **implementation of the functions**. 

We will talk about object scope in more detail in the Advanced course.

[/slide]

[slide hideTitle]

# Naming Variables

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-7-naming-variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we create a variable, we use `camelCase`, which means that the variable starts with a **lowercase letter** and each subsequent word begins with a **capital letter**.

Names are also case-sensitive.

To be valid, the variable must start with either a **letter** or an **underscore**, but cannot begin with a number.

`firstName, report, config, fontSize, maxSpeed`

There are keywords in JavaScript that we **cannot use** for our variable names:

`break, const, interface, typeof, true` etc.

Naming variables is very **important** and also quite difficult.
 
We need to know what the variable will be used for in the future to know how to name it.

This rule is even more important when naming a **function** or a **class**. 

Because in the future we can add some **functionality** to the function and we have to provide this in the naming of the functions. 

This rule applies less to functions because it is **not a good practice to change** the functionality of the function.

But this rule applies in full force to **classes**, because a class can **grow a lot over time** and the name we have given initially is not good.
[/slide]
