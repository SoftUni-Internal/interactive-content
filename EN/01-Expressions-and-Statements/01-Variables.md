# Variables and Storing Data

[slide hideTitle]
# Real Life Example

[vimeo-video]
[stream language="EN" videoId="486854871/0266769f7d" default /]
[stream language="RO" videoId="486854871/0266769f7d"  /]
[/video-vimeo]

If we think of the variables as boxes that hold information, this is how they would look:

[image assetsSrc="expressions-and-statements-boxes.png" /]

Most of our applications need to work with information.

We can use variables to store all kind of data we need.

[/slide]


[slide hideTitle]
# Definition of Variables

[vimeo-video]
[stream language="EN" videoId="486854872/71ae21e1d5" default /]
[stream language="RO" videoId="486854872/71ae21e1d5"  /]
[/video-vimeo]

In programming, each **variable** stores a certain value of a particular type. 

For example, data types can be: 

* a number: 1, 2, 3.14, -1, 1.5e38 etc

* text (string): 'Hello', "Hi", "How are you?" etc

* boolean: true or false

We can imagine **variables** as containers for data or named areas in the memory. 

The data that they are storing can be read and changed at any time.
[/slide]

[slide hideTitle]
# Creating a Variable

[vimeo-video]
[stream language="EN" videoId="486854948/925f8eaf2d" default /]
[stream language="RO" videoId="486854948/925f8eaf2d"  /]
[/video-vimeo]

Variables can be stored in the program's:

* Operational memory: in the execution **stack**

* Dynamic memory: in the **heap**

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

[slide hideTitle]
# Declaration Statements

[vimeo-video]
[stream language="EN" videoId="486855151/43dc67876d" default /]
[stream language="RO" videoId="486855151/43dc67876d"  /]
[/video-vimeo]

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
