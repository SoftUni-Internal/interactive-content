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

But it's important that **no error is thrown**, the program works, that could lead to **unexpected results** of our program.

Whereas when we declare a variable with `let`, this variable is available in **block scope**.

Everything that is enclosed in **curly braces** `{}` is a block where variables live. 

This can be the body of some `if` constructions, loops, or the body of a functions.

``` JavaScript
{
    let x = 2;
}
console.log(x) // undefined
```

When we declare a varible with let, we can't access it, if we try to acces that varible, we receive an arror.

``` js live
console.log(myVar);

let myVar = 'Peter';
```
We strongly advise you to use `let` when you **declare a variable**, that way you're going to protect yourself from unwanted behaviour of the program.

[/slide]

[slide]
# Variable Scope
Scope means the **life** of the variable or where the variable is **visible**. 

Outside this scope, variable cannot be accessed.

We have **four types of scope**, and we will go through them in more detail in the JavaScript Advanced course.

# Global scope

- all the variables we have defined at the top level. These are usually our functions

``` JavaScript
var carName = "Volvo";
  // Code here can use carName
function myFunction() {
  // Code here can also use carName
 }
```

In this example, we define the variable `carName` in the global scope, outside the function. Therefore, we can access it in all functions.

# Function Scope

Functional scope is the **body of the function**, and each variable defined in the function lives only in the body of the function.

``` JavaScript
function myFunction() {
   var carName = "Volvo";
   // Only here, the code can use carName
 }
 ```

# Block Scope 

We also have a third type of scope – **Block Scope**. That is any body, defined in curly braces `{}`.
``` JavaScript
{
  let x = 2;
} 
```

Note that the function is also defined with **curly braces** and is a block, but this is a special class.

From the programming basics course we know that we can embed an `if-else` construction, as well as loops.

So we put one block of code into another block of code.

# Object Scoup

The fourth type of scope is the **object scoup**, which is related to the **implementation of the functions**. We will talk about object scoup in more detail in the advanced course.

[/slide]

[slide]
# Naming Variables

When we create a variable, we use `cammelCase`, which means that the variable starts with a **lowercase letter** and each subsequent word is with a c**apital letter**.

Names are also case sensitive.

To be valid, the variable must start with either a **letter** or an **underscore**, but cannot begin with a number.

`firstName, report, config, fontSize, maxSpeed`

There are keywords in javascript that we **cannot use** for our variable names:

`break, const, interface, typeof, true` etc.

Naming variables is very **important** and also quite difficult.
 
We need to know what the variable will be used for in the future to know how to name it.

This rule is even more important when naming a **function** or a **class**. 

Because in the future we can add some **functionality** to the function and we have to provide this in the naming of the functions. 

This rule applies less to functions because it is **not a good practice to change** the functionality of the function.

But this rule applies in full force to the **classes**, because a class can g**row a lot over time** and the name we have given is initially not good.
[/slide]