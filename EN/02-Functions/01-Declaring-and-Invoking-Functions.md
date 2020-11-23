# Declaring and Invoking Functions

[slide]
# Declaring a Function

A function is defined by using the keyword `function` followed by the **name of the function** and a set of **parentheses** to hold parameters or values to be recieved by the function.

Functions can be declared in two ways:

- **Function declaration** (recommended way)

``` js
function printText(text){
  console.log(text);
}
```

- **Function expression** (useful in functional programming)

```js
let printText = function(text){
  console.log(text);
}
```
# Functions with parameters

**Arguments** can be passed to the function by enclosing the values in a parentheses after the function name.

Arguments can be sent as a comma separated list of **arguments** while calling the function.

The arguments recieved as **parameters** by the recieving function and are stored in local variables. 

As soon as the function ends the variable disappears

```js
function printText(text){
  console.log(text);
}
```

[/slide]

[slide]
# Invoking a Function

A function is not executed before it is invoked.

A function can be invoked from **everywhere in the scope**, where it is defined.

You can declare a function:

```js
function hLine() {
  console.log("----------");
}
```

Then we can invoke (call) the function by its name:

```js
hLine();
```

We can also invoke a **function** from **another function:**

```js
function printDocument() {
  printLabel();
  printContent();
}
```

We can also invoke a **function** **in its own body (recursion):**

``` js
function countDown(x) {
  console.log(x);
  if (x > 0) { countDown(x - 1); }
}
```

A recursion means that **a functions calls itself**.

[/slide]

[slide]
# Functions and Parameters

We can have a function **with or without** parameters.

Function **parameters** behave like local variables inside the **function body.**

## Functions Without Parameters

If a function do not receive arguments when invoked the **result is always the same** (unless it reads data from outside): 

``` js live
function printHeader() {
  console.log('~~~-   {@}   -~~~');
  console.log('~- Certificate -~');
  console.log('~~~-  ~---~  -~~~');
}
printHeader();
```

## Functions With Parameters

A function can receive **any number and type of arguments** when invoked:

In this example we pass **two parameteres** as an argument:

```js live
function multiply(a, b) {
  console.log(a*b);
}
multiply(5, 7); // 35
```

In this example we pass **an array** as an argument:

``` js live
function printName(nameArr) {
  console.log(nameArr[0] + ' ' + nameArr[1]);
}

printName(['John', 'Smith']); 
```

We can pass **less or more** arguments while incoking a function.

If we pass less arguments then rest of the parameters will be **undefined.**

If you pass more arguments then **additional arguments will be ignored.**

[/slide]