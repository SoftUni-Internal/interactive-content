// sectionId: "Javascript::Programming-Basics::Introduction-to-Programming::Welcome-To-Coding"

[slide hideTitle]
# What is Coding?

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-3-4-What-is-Coding-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**To program**, put in simple terms, means to **give commands** to the computer.

Some basic examples are: 

- To play a sound

- To print something on the screen

- To multiply two numbers

When we have a sequence of commands following one another - this could be called a **computer program**.

The text, which is used to make a computer program is called **program code** or **source code**, or often just **code**. 

Example of a computer command: 

```js live
console.log("Welcome to coding");
```
[/slide]

[slide hideTitle]

# Computer Programs

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-5-6-Running-JavaScript-Commands-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Computer programs represent **a sequence of commands** which are written in a certain **programming language**, like: C#, Java, JavaScript, Python, C++, PHP, C, Ruby, Swift, Go, or another.

Example of **computer program** in JS: 

```js live
let size = 5;

console.log("Size = " + size);
console.log("Area = " + size * size);
```
The above program defines a function that holds a sequence of **3 commands** and calls it afterward: 

- Declares and assigns a **variable**: `let size = 5`

- Calculates and **prints** an **expression**: `console.log("Size = " + size)` 

- Calculates and **prints** an **expression**: `console.log("Area = " + size * size)` 

- The result (output) of the execution of the above program is as follows:

```
Size = 5
Area = 25
```
We **will explain in detail how to write programs in JavaScript**, why we need to define a **function** and how to call the function. 

For now, let us just say that the **JavaScript programming language** requires all the above code to execute a sequence of commands. 

To correctly **form our commands**, we should know the **syntax** and the **semantics** of the language which we are working with, in our case – JavaScript.

Therefore, we are going to learn the **principles** of writing computer **code step by step**, with the syntax and logic used in JavaScript. 
[/slide]

[slide hideTitle]
# Algorithms

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-7-8-9-Programming-and-Algorithms-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Computer programs usually execute algorithms. 

**Algorithms** are **sequences of steps**, necessary for the completion of a certain task, something like "recipes". 

For example, if we want to boil an egg, we will **follow some steps** (an algorithm): 

- Turn on the stove

- Take a pot and pour water in it

- Place the pot on the stove and put the egg inside

- Wait for the water to boil and take the egg out after 5 minutes

For example, to arrange a sequence of numbers in an **ascending order**, an algorithm is needed to find the **smallest number** and place it at the **beginning of the sequence**. 

Тhen find the **next smallest one** from the numbers left and put it in **second place** and **repeat these steps** until the algorithm has gone through and ordered all the numbers. 

One very convenient tool when writing **programming code**, used for the execution of programs and many other operations related to programming, is an **integrated development environment**.

This is a very simple example of an algorithm that finds the smallest number in an array.

We will discuss arrays later.

``` js live
let arr = [15, 2, 42, 55, 123, 8, 52, 67, 75, 4];
let min = Math.min(...arr);

console.log(min)
```
[/slide]

[slide hideTitle]
# Console-Based JavaScript Program - Example

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-10-Console-Based-JavaScript-Program-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us look at a simple program that takes **an amount of money in U.S. Dollars (USD)** - an integer converts it into **Euro (EUR)** multiplying it by the exchange rate and prints out the obtained result. 

This is a program of 3 consecutive commands: 

```js live
function convertUsdToEur(input) {
  let dollars = Number.parseFloat(input);
  let euro = dollars * 0.883795087;
  console.log("Euro: " + euro);
}

convertUsdToEur("5");
```
[/slide]

[slide hideTitle]
# Browser-Based JavaScript Program – Example

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-11-12-Console-Based-JavaScript-Program-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In this example, we can import and use a function on our web page.

Using the block of code from the example we are creating a text box as in the slide.

```
<html><body>
  <script src="converter.js"></script>
  Dollars: <input type="text" id="dollarsBox" />
  <button onclick="convertUsdToEur()">Convert</button>
  Euro: <input type="text" id="eurosBox" readonly />
</body></html>
```

It is important to insert our `convertUsdToEur()` function in our html script.

Also, we have two textboxes - **Dollars:** and **Euro**.


[/slide]
