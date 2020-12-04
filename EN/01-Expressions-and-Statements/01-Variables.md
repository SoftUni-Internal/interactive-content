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

We can imagine **variables** as containers for data or named areas in the memory. The data that they are storing can be read and changed at any time.

Basically **variables** provide means for:
  * **Storing** data
  * **Retrieving** stored data
  * **Modifying** stored data

[/slide]

[slide]

# Creating a Variable

[vimeo-video]
[stream language="EN" videoId="486854948/925f8eaf2d" default /]
[stream language="RO" videoId="486854948/925f8eaf2d"  /]
[/video-vimeo]

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

