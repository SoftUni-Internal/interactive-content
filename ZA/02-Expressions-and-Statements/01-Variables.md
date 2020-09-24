# Variables

[slide]
# Video

[vimeo-video startTimeInSeconds="1040" endTimeInSeconds="1777 "]
[stream language="EN" videoId="341522009/063bddc415" default /]
[stream language="RO" videoId="386049133/766a425069"  /]
[/video-vimeo]

[/slide]

[slide]
# Variables
In programming, each **variable** stores a certain value of a particular type. 

For example, data types can be: number, letter, text (string), date, color, image, list and others. Here are some examples of data types:
* integer: 1, 2, 3, 4, -5, 20, …
* float: 0.5, 3.14, -1.5, …
* character (symbol): 'a', 'b', 'c', '@', 'X', …
* text (string): "Hello", "Hi", "How are you?", …
* day of week: Monday, Tuesday, …, Sunday
* date and time: 14-June-1980 6:30:00, 25-Dec-2017 23:17:22

You can also imagine that **variables** are containers for data or named areas in the memory and the data that they are storing can be read and changed at any time. 

Basically **variables** provide means for:
  * **Storing** data
  * **Retrieving** stored data
  * **Modifying** stored data
  
They are characterized by:
  * name (identifier)
  * type (of the information preserved)
  * value (stored information)

Each of the variables in Java has a name, a type and a value. 

Here is how we would declare a variable and assign it with a value at the same time:
```java
String name = "Bob";
boolean employed = true;
int age = 35;
```
If you think of the variables as boxes that hold information, this is how they would look like:
[image assetsSrc="expressions-and-statements-boxes.png" /]

Variables can be stored in the program's:
  * Operational memory - in the execution **stack**
  * Dynamic memory - in the **heap**
[/slide]