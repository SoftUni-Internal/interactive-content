# JavaScript Object Notation (JSON)

[slide hideTitle]
# What is JSON?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-14-15-What-is-JSON--,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JSON, short for **JavaScript Object Notation**, is a **text-based information format** that follows the JavaScript object syntax.

It is **language independent**, meaning it can be used with any language, even though it is a **look-alike of the JavaScript object literal syntax.**

JSON is a method of storing data and information in an organized and easy to access approach. 
[/slide]

[slide hideTitle]
# JSON Usage

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-16-JSON-usage-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

With JSON we can **exchange data between a browser and a server.**

It allows for better hierarchical representation of **objects**, similarly to XML.

JavaScript has built-in functions for parsing JSON, making it is easy to use.

JSON uses **human-readable text to transmit data.**
[/slide]

[slide hideTitle]
# JSON Example

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-17-JSON-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

``` js
{
  }
  "name": "George",
  "age": 25,
  "grades": {
    "Math": [2.50, 3.50],
    "Chemistry": [4.50]
  }
}
```

**In this example:**

* Braces `{}` define a JSON

* keys are in double quotes: "name", "age", "grades", "Math", "Chemistry"

* values are separated from keys by a colon: "George", 25, \[2.50, 3.50\], \[4.50\]

* it is possible to have nested objects - like the one nested inside "grades"

[/slide]

[slide hideTitle]
# JSON Methods

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-18-JSON-Methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We have two built-in **JSON methods** in JavaScript:

* `JSON.parse()` - This method takes a JSON string and transforms it into a JavaScript object

``` js live
let car = '{"Car":"Nio","Model": "EP9","Colour":"Blue"}';  

var data = JSON.parse(car);  

console.log(data);
```

* `JSON.stringify()` - This method converts a JavaScript value to a JSON string representation

``` js live
let car = {
    Car: 'Nio',
    Model: 'EP9',
    Colour: 'Blue',
};

var data = JSON.stringify(car);

console.log(data);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Convert to Object

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-21-Solution-Convert-to-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Convert to Object" taskId="JS-fundamentals-2-Objects-and-Classes-lab-Convert-to-Object" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToObject(input){
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description
Write a function that receives a string in JSON format and converts it to an object.

Loop through all the keys and print them with their values in format:

\{**key**\}**:** \{**value**\}


## Example One
  | **Input** | **Output** |
| --- | --- |
| convertToObject('\{"name": "George", "age": 40, "town": "Berlin"\}') | name: George |
||age: 40|
||town: Berlin|

[hints]
[hint]
Utilize the `JSON.parse()` method:

```js
let person = JSON.parse(json);
```
[/hint] 
[/hints] 

## Example Two

  | **Input** | **Output** |
| --- | --- |
| convertToObject('\{"name": "Rafael", "age": 27, "town": "Madrid"\}') | name: Rafael |
||age: 27|
||town: Madrid|

[/task-description]
[tests]
[test open]
[input]
convertToObject('\{"name": "George", "age": 40, "town": "Berlin"\}')
[/input]
[output]
name: George
age: 40
town: Berlin
[/output]
[/test]
[test open]
[input]
convertToObject('\{"name": "Rafael", "age": 27, "town": "Madrid"\}')
[/input]
[output]
name: Rafael
age: 27
town: Madrid
[/output]
[/test]
[test]
[input]
convertToObject('\{"hui": "byue", "cty": 26, "byu": "ctuct"\}')
[/input]
[output]
hui\: byue
cty\: 26
byu\: ctuct
[/output]
[/test]
[test]
[input]
convertToObject('\{"hui": 156, "cty": \{"dsad": "dsadaf"\}, "byu": "ctuct"\}')
[/input]
[output]
hui\: 156
cty\: \[object Object\]
byu\: ctuct
[/output]
[/test]
[test]
[input]
convertToObject('\{"name": "Ivan", "age": 10, "town": "Erevan"\}')
[/input]
[output]
name\: Ivan
age\: 10
town\: Erevan
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Convert to JSON

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-23-Solution-Convert-to-JSON-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Convert to JSON" taskId="JS-fundamentals-2-Objects-and-Classes-lab-Convert-to-JSON" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToJSON(name, lastName, hairColor){
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description
Write a function that receives three strings and sets them to an **object**.

The strings are **name**, **lastName**, and **hairColor**.

Convert the object to a JSON string and print it.

The input is provided as 3 single strings in the order stated above.

# Examples
  | **Input** | **Output** |
| --- | --- |
| convertToJSON('George', 'Jones', 'Brown') | \{"name":"George", "lastName":"Jones", "hairColor":"Brown"\}|
| convertToJSON('Thomas', 'Muller', 'Blonde') | \{"name":"Thomas", "lastName":"Muller", "hairColor":"Blonde"\}|

[/task-description]
[tests]
[test open]
[input]
convertToJSON('George', 'Jones', 'Brown')
[/input]
[output]
\{"name"\:"George","lastName"\:"Jones","hairColor"\:"Brown"\}
[/output]
[/test]
[test open]
[input]
convertToJSON('Thomas', 'Muller', 'Blonde')
[/input]
[output]
\{"name":"Thomas","lastName":"Muller","hairColor":"Blonde"\}
[/output]
[/test]
[test]
[input]
convertToJSON('rtdrt', 'xxer', 'aweaw')
[/input]
[output]
\{"name"\:"rtdrt","lastName"\:"xxer","hairColor"\:"aweaw"\}
[/output]
[/test]
[test]
[input]
convertToJSON('Ivan', 'njnnjk', '14178')
[/input]
[output]
\{"name"\:"Ivan","lastName"\:"njnnjk","hairColor"\:"14178"\}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

