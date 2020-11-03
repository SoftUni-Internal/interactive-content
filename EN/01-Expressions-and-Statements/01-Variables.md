
[slide]
# Variables
In programming, each **variable** stores a certain value of a particular type. 

For example, data types can be: 
* number: 1, 2, 3.14, -1, 1.5e38 etc.
* text (string): 'Hello', "Hi", "How are you?" etc.
* boolean: true or false

You can also imagine that **variables** are containers for data or named areas in the memory and the data that they are storing can be read and changed at any time. 

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
If you think of the variables as boxes that hold information, this is how they would look like:
[image assetsSrc="expressions-and-statements-boxes.png" /]

Variables can be stored in the program's:
  * Operational memory - in the execution **stack**
  * Dynamic memory - in the **heap**
[/slide]
