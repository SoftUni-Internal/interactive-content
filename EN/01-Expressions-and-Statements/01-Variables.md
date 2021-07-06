// sectionId: "Javascript::Programming-Basics::Expressions-and-Statements::Lesson-Introduction"

# Lesson Introduction

[slide hideTitle]

# Lesson Content

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-1-2-Introduction-table-of-contents-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you will learn:

**1. Variables: Declaring, Reading, Modifying**

- Create and use variables

**2. Data Types: Numbers, Text, Others**

- Different data types in JavaScript

**3. Statements (Commands)**

- How to write commands

**4. Reading User Input and Formatting Output**

- Print output to the console

**2. Arithmetic Operators: +, -, * and /**

- How to manipulate variables

**6. Expressions**

- How to combine values and operators

**7. Practical Exercises**

[/slide]


[slide hideTitle]
# Variables and Real Life Example

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-4-5-6-Real-life-example-Variables-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

If we think of the variables as boxes that hold information, this is how they would look:

[image assetsSrc="expressions-and-statements-boxes.png" /]

Most of our applications need to work with information.

We can use variables to store all kinds of data we need.

[/slide]


[slide hideTitle]
# Definition of Variables

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-5-6-What-are-variables-and-how-are-they-used-in-computing-New-Link-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In programming, each **variable** stores a certain value of a particular type. 

For example, data types can be: 

* A number: 1, 2, 3.14, -1, 1.5e38 etc

* Text (string): 'Hello', "Hi", "How are you?" etc

* Boolean: true or false

We can imagine **variables** as containers for data or named areas in the memory. 

The data that they are storing can be read and changed at any time.
[/slide]

[slide hideTitle]
# Creating a Variable

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-7-8-8-demo-Variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Variables can be stored in the programs:

* Operational memory: in the execution **stack**

* Dynamic memory: in the **heap**

Basically, **variables** provide means for:

* **Storing** data

* **Retrieving** stored data

* **Modifying** stored data

They are characterized by:

* Name (identifier)

* Type (of the information preserved)

* Value (stored information)

Each variable in JavaScript has a name, a type, and a value. 

Here is how we can declare a variable and assign it with a value at the same time:

```js
let name = "Bob";
let employed = true;
let age = 35;
```

[/slide]

[slide hideTitle]
# Declaration Statements

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-9-10-Declaration-statements-let-var-const-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Declaration statements in javascript are: `let`, `var` and `const`

* `let`: declares a variable, optionally initializing it

``` js live
let age = 25;
console.log("Age:", age); 
```

* `var`: similar to `let`, but gives a wider scope

``` js live
var productID = 120491283761;
console.log(productID); 
```

* `const`: declares a read-only named constant

``` js live
const name = "Peter";
console.log(name);
```
[/slide]
