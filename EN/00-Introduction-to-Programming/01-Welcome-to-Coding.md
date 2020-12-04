[slide]

# What is Coding?

[vimeo-video]
[stream language="EN" videoId="486831827/419d467fd3" default /]
[stream language="RO" videoId="486831827/419d467fd3"  /]
[/video-vimeo]

**To program**, put in simple terms, means to **give commands** to the computer.

Some basic examples are: 

- `to play a sound`

- `to print something on the screen`

- `to multiply two numbers`.

When we have a sequence of commands following one another - this could be called a **computer program**.

The text, which is used to make a computer program is called **program code** or **source code**, or often just **code**. 

Example of a computer command: 

```js live
console.log("Welcome to coding");
```
[/slide]

[slide]
# Computer Programs

[vimeo-video]
[stream language="EN" videoId="486832336/e4188d5010" default /]
[stream language="RO" videoId="486832336/e4188d5010"  /]
[/video-vimeo]

Computer programs represent **a sequence of commands** which are written in a certain **programming language**, like: C#, Java, JavaScript, Python, C++, PHP, C, Ruby, Swift, Go or another.

Example of **computer program** in JS: 

```js live no-template
function calculateArea() {
  let size = 5;
  console.log("Size = " + size);
  console.log("Area = " + size * size);
}
```
The above program defines a function which holds a sequence of **3 commands** and calls it afterwards: 

- Declares and assigns a **variable**: `let size = 5`

- Calculates and **prints** an **expression**: `console.log("Size = " + size)` 

- Calculates and **prints** an **expression**: `console.log("Area = " + size * size)` 

- The result (output) of the execution of the above program is as follows:

```
Size = 5
Area = 25
```
We **will explain in detail how to write programs in JavaScript**, why we need to define a **function** and then call the function - a bit later. 

For now, let's just say that the **JavaScript programming language** requires all the above code in order to execute a sequence of commands. 

In order to correctly **form our commands**, we should know the **syntax** and the **semantics** of the language which we are working with, in our case – JavaScript.

Therefore, we are going to learn the **principles** of writing computer c**ode step by step**, with the syntax and logic used in JavaScript. 
[/slide]

[slide]
# Algorithms

[vimeo-video]
[stream language="EN" videoId="486832885/b0c2ee91e7" default /]
[stream language="RO" videoId="486832885/b0c2ee91e7"  /]
[/video-vimeo]

Computer programs usually execute algorithms. 

**Algorithms** are **sequences of steps**, necessary for the completion of a certain task, something like "recipes". 

For example, if we want to boil an egg, we will f**ollow some steps** (an algorithm): 

- turn on the stove

- take a pot and pour water in it

- place the pot on the stove and put the egg inside

- wait for the water to boil and take the eggs out after 5 minutes

Similarly, in programming **the computer program executes algorithms**: a sequence of commands, necessary for the completion of a certain task. 

For example, to arrange a sequence of numbers in an **ascending order**, an algorithm is needed to find the **smallest number** and place it at the b**eginning of the sequence**. 

Тhen find the **next smallest one** from the numbers left and put it in **second place** and **repeat these steps** until the algorithm has gone through and ordered all the numbers. 

One very convenient tool when writing **programming code**, used for the execution of programs and many other operations related to programming, is an **integrated development environment**.

For example, we will use **Visual Studio Code.**
[/slide]

[slide]
# Console-Based JavaScript Program – Example

[vimeo-video]
[stream language="EN" videoId="486834408/4266dce8e6" default /]
[stream language="RO" videoId="486834408/4266dce8e6"  /]
[/video-vimeo]

Let's look at a simple program that takes **an amount of money in U.S. Dollars (USD)** - an integer, converts it into **Euro (EUR)** multiplying it by the exchange rate and prints out the obtained result. 

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

[slide]
# Browser-Based JavaScript Program – Example

[vimeo-video]
[stream language="EN" videoId="486834720/d1ce0ef921" default /]
[stream language="RO" videoId="486834720/d1ce0ef921"  /]
[/video-vimeo]

[/slide]