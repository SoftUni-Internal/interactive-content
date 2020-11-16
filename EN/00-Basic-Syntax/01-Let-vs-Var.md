# Local vs. Global

[slide]
# Var and Let

Different data types have different **sizes** in the computer's memory.

Everything in computers is **units and zeros**, for example int is 32bit, which means that in order to write int in the computer's m**emory thirty-two units and zeros** are needed.

Thus we tell the computer that it must set aside thirty-two bits to read our number.

For **floating-point numbers**, such as 3.17, the computer must set 64bit to store them in memory.

This is the reason why we need **data types** so that the size **can be known to the program** so that it can work correctly.

When we declare a variable and assign a **value** to it, this value is called a literal.

The literal in programming means to write a variable with such a value that the interpreter **understands** the type of this variable.

[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) or ES6 introduced two new ways to create variables, `let` and `const`, before that only `var` was used.

The characteristic of `var` is that it is a variable that works in the so-called. functional scope.

``` JavaScript
{
     var x = 2;
}
console.log(x); // 2
```

Using var we can access a variable, before we declare it:

``` js live
console.log(myVar);

var myVar = 'Peter';
```

Here we get undefined, because we don't know the value of the variable, nut we can access it.

Whereas when we declare a variable with `let`, this variable is available in **block scope**.

Everything that is enclosed in **curly braces** `{}` is a block where variables live. 

This can be the body of some `if` constructions, loops, or the body of a functions.

``` JavaScript
{
    let x = 2;
}
console.log(x) // undefined
```

[/slide]

[slide]
# Variable Scope
Scope means the **life** of the variable or where the variable is **visible**. 

Outside this scope variable **cannot be accessed.**

We have **four types of scope**, and we will talk about them in more detail in the JavaScript Advanced course. 

## Global scope

- all the variables we have defined at the top level. These are usually our functions

``` JavaScript
var carName = "Volvo";
  // Code here can use carName
function myFunction() {
  // Code here can also use carName
 }
```

In this example we define the variable `carName` in the global scope, outside the function, and thus we can access it in all functions.

## Function Scope

Functional scope it's the b**ody of the function** and each variable defined in the function lives o**nly in the body of the function**

``` JavaScript
function myFunction() {
   var carName = "Volvo";
   // Only here code CAN use carName
 }
 ```

## Block Scope 
We also have a third type of scope that is **Block Scope**, which is any body that is defined in curly braces `{}`

``` JavaScript
{
  let x = 2;
} 
```

Note that the function is also defined with **curly braces** and is a block, but this is a special class.

From the programming basics course we know that we **can embed** `if-else` construction as well as loops. 

So we put one block of code in another block of code.

The fourth type of scope is the **object scoup**, which is related to the **implementation of the functions**. We will talk about object scoup in more detail in the advanced course.
[/slide]

[slide]
# Naming Variables

[/slide]