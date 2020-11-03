[slide]

# What is Coding?

**To program** means to **give commands** to the computer, for example `to play a sound`, `to print something on the screen` or `to multiply two numbers`. 

When the commands are one after another, they are called **a computer program**. 

The text of computer programs is called **a program code** (or a **source code**, or even shorter – **code**).

Example of command for the computer:

```js live
console.log("Welcome to coding");
```
[/slide]

[slide]
# Computer Programs
Computer programs represent **a sequence of commands** that are written in certain **programming language**, like C#, Java, JavaScript, Python, C++, PHP, C, Ruby, Swift, Go or another.

Example of **computer program** in JS:

```js live no-template
function calculateArea() {
  let size = 5;
  console.log("Size = " + size);
  console.log("Area = " + size * size);
}
```

The above program defines a function which holds a sequence of **3 commands** and calls it afterwards:
- Declaring and assigning a **variable**: `let size = 5;`
- Calculating and **printing** an **expression**: `console.log("Size = " + size);`
- Calculating and **printing** an **expression**: `console.log("Area = " + size * size);`

The result (output) from the above program is as follows:
```
Size = 5
Area = 25
```
We **shall explain in detail how to write programs in JavaScript**, why we need to define a **function** and why we call it a bit later. 

Now, assume that the JavaScript language requires all the above code in order to execute a sequence of command.

In order to write commands, we should know **the syntax and the semantics of the language** which we are working with, in our case – **JavaScript**. 

Therefore, we are going to get familiar with the syntax and the semantics of the language JavaScript, and with programming generally, by learning step by step code writing from the simpler to the more complex programming constructions.
[/slide]

[slide]
# Algorithms
Computer programs usually execute some algorithm. 

**Algorithms** are a **sequence of steps**, necessary for the completion of a certain task and for gaining some expected result, something like a "recipe".

For example, if we boil an egg, we follow some recipe (an algorithm): 
- you should turn on the stove
- take a pot and pour water in it
- place the pot on the stove and put the egg inside
- bring the water to boil and cook for 5 minutes

Similarly, in programming **the computer programs execute algorithms**: a sequence of commands, necessary for the completion of a certain task.

For example, to arrange a sequence of numbers in an ascending order, an algorithm is needed, e.g. find the smallest number and print it, then find the smallest number among the rest of the numbers and print it, and this is repeated until there are no more numbers left.

For convenience when creating programs, for writing programming code, for execution of programs and other operations related to programming, we need a **development environment**, for example Visual Studio Code.
[/slide]

[slide]
# Console-Based JavaScript Program – Example
Let's look at a simple program that reads from the user some amount of money in U.S. Dollars (USD) - an integer, converts it into Euro (EUR) by dividing it by the Euro's rate and prints the obtained result. 

This is a program of 3 consecutive commands:

```js
function convertUsdToEur(input) {
  let dollars = Number.parseFloat(input);
  let euro = dollars * 0.883795087;
  console.log("Euro: " + euro);
}

convertUsdToEur("5");
```

[/slide]