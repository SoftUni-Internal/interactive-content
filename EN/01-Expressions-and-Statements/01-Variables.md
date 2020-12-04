# Variables and Storing Data

[slide]
# Real Live Example

[vimeo-video]
[stream language="EN" videoId="486854871/0266769f7d" default /]
[stream language="RO" videoId="486854871/0266769f7d"  /]
[/video-vimeo]

If we think of the variables as boxes that hold information, this is how they would look:
[image assetsSrc="expressions-and-statements-boxes.png" /]

Variables can be stored in the program's:
  * Operational memory - in the execution **stack**
  * Dynamic memory - in the **heap**

[/slide]


[slide]
# Definition of Variables

[vimeo-video]
[stream language="EN" videoId="486854872/71ae21e1d5" default /]
[stream language="RO" videoId="486854872/71ae21e1d5"  /]
[/video-vimeo]

In programming, each **variable** stores a certain value of a particular type. 

For example, data types can be: 
* a number: 1, 2, 3.14, -1, 1.5e38 etc.
* text (string): 'Hello', "Hi", "How are you?" etc.
* boolean: true or false

We can imagine **variables** as containers for data or named areas in the memory. 

The data that they are storing can be read and changed at any time.
[/slide]

[slide]
# Creating a Variable

[vimeo-video]
[stream language="EN" videoId="486854948/925f8eaf2d" default /]
[stream language="RO" videoId="486854948/925f8eaf2d"  /]
[/video-vimeo]

Basically **variables** provide means for:
  * **Storing** data
  * **Retrieving** stored data
  * **Modifying** stored data

They are characterized by:
  * name (identifier)
  * type (of the information preserved)
  * value (stored information)

Each of the variables in JavaScript has a name, a type and a value. 

Here is how we would declare a variable and assign it with a value at the same time:
```js
let name = "Bob";
let employed = true;
let age = 35;
```
[/slide]


[slide]
# Statements

[vimeo-video]
[stream language="EN" videoId="486855151/43dc67876d" default /]
[stream language="RO" videoId="486855151/43dc67876d"  /]
[/video-vimeo]

The **actions** that a program takes, are expressed as **statements**. 

JavaScript supports several different kinds of statements and here are a few of them:
  * **Declaration statements** - declare local variables and constants
  * **Expression statements** - evaluate expressions
  * **Selection statements** - select one of a number of possible statements
  * **Iteration statements** - execute repeatedly an embedded statement
  * **Jump statements** - transfer control
  
Common actions include:
-  **Declaring** a variable

  Declaring a variable means **defining** its **type**.
  ```js
  let counter;
  ```
-  **Assigning** a value

After we declare a variable, we can assign a value to it.
  
  Assigning a value to a variable means **storing** a **value** to a variable.
  ```js
  counter = 1;
  ```

- Declaring + **initializing**
  ```js
  let counter = 1;
  ```

- **Printing** a value
  ```js
  console.log(counter);
  ```

- **Modifying** a value
  ```js
  counter++;
  ```
  
  ```js
  sum = a + b;
  ```
[/slide]