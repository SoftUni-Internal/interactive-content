// sectionId: "Javascript::Programming-Basics::Expressions-and-Statements::Statements"

# Statements

[slide hideTitle]
# Commands in the Computer Programs

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-14-15-Statements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The actions that a program takes, are expressed as **statements**.

JavaScript supports **several different** kinds of statements and here are a few of them:

* **Declaration** statements: declare local variables and constants

* **Expression** statements: evaluate expressions

* **Selection** statements: select one of several possible statements

* **Iteration** statements: execute repeatedly an embedded statement

* **Jump** statements: transfer control
  
Common actions include:

-  **Declaring** a variable

  Declaring a variable means defining its type.

```js
let counter;
```

-  **Assigning** a value

After we declare a variable, we can assign a value to it.
  
Assigning a value to a variable means storing a value to a variable.

  ```js
  counter = 1;
  ```

- Declaring \+ initializing

  ```js
  let counter = 1;
  ```

- Printing a value

```js live
let counter = 1;
console.log(counter);
```

- **Modifying** a value

  ```js
  counter++;
  ```
  
  ```js
  let sum = a + b;
  ```

## Comments

**Comments** are special **statements** that will **not** be executed.

They are a way for programmers to write **notes** to themselves or other programmers.

We can use them to give **better clarity** about what we are trying to **achieve** with our code.

There are **two types** of comments in JavaScript.

- Single-line comments

**Single-line comments** have the simplest syntax.

To declare one, we use **two forward slashes** `//`, followed by the comment:

```js
// This is a single line comment 💬
```

We can use them to **explain** our code:

```js live
console.log("JavaScript is awesome! 😎"); // This line prints a string to the console
```

Or to **prevent** a line of code from **running**:

```js live
console.log("The weather outside is sunny. 🌞"); 
// console.log("It is raining outside. 🌧");
```

Anything on a commented line will be **ignored by the compiler**.

- Multi-line comments

As the name suggests, **multi-line comments** can take up **multiple** lines.

This can be useful when a comment is **too long** for a single line and would require horisontal scrolling.

We open them using a **forward slash**, followed by and an **asterisk**:

```js live
let name = "Harry";

console.log(`Hello, ${name}! 🙋`);
/*This comment 
  takes up multiple 
  lines*/
```

And close them using a **an asterisk and a forward slash**.

We can also write single-line comments using this syntax:

```js
/*This is a single-line comment 👨🏼‍💻*/
```
  
[/slide]
