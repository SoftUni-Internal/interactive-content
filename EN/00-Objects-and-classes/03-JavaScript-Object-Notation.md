# JavaScript Object Notation (JSON)

[slide]
# What is JSON?

[vimeo-video]
[stream language="EN" videoId="489794709/20241a30bb" default /]
[stream language="RO" videoId="489794709/20241a30bb"  /]
[/video-vimeo]

JSON stands for **JavaScript Object Notation** and is a **text-based information format** that follows the JavaScript object syntax.

JSON is **language independent** and it can be used without depending on JavaScript even though it is a **look-alike of the JavaScript object literal syntax.**

JSON is a method of storing data and information in an organized and easy-to-access approach. 
[/slide]

[slide]
# JSON Usage

[vimeo-video]
[stream language="EN" videoId="489794769/4f4530031d" default /]
[stream language="RO" videoId="489794769/4f4530031d"  /]
[/video-vimeo]

With JSON we can **exchange data between a browser and a server.**

JSON allows better representation of **hierarchy objects** in a stream that XML. Не се разбира

JavaScript has built in functions to parse JSON so it is easy to use.

JSON uses **human-readable text to transmit data.**
[/slide]

[slide]
# JSON Example

[vimeo-video]
[stream language="EN" videoId="489794764/4f709f8685" default /]
[stream language="RO" videoId="489794764/4f709f8685"  /]
[/video-vimeo]

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

In this example:

* Brackets `{}` define a JSON

* Keys are in double quotes: `"name"`, `"age"`, `"grades"`, `"Math"`, `"Chemistry"`

* Values separated by: `"George"`, `25`, `[2.50, 3.50]`, `[4.50]`

* It is possible to have nested objects

[/slide]

[slide]
# JSON Methods

[vimeo-video]
[stream language="EN" videoId="489794807/692c83c874" default /]
[stream language="RO" videoId="489794807/692c83c874"  /]
[/video-vimeo]

We have two  JSON method:

* `JSON.parse()`: This method takes a JSON string and transforms it into a JavaScript object.

``` js live
let car = '{"Car":"Nio","Model": "EP9","Colour":"Blue"}';  

var data = JSON.parse(car);  

console.log(data);
```

* `JSON.stringify()`: This method converts a JavaScript value to a JSON string representation.

``` js live
let car = {
  Car:"Nio",
  Model: "EP9",
  Colour:"Blue"
  };  

var data = JSON.stringify(car);  

console.log(data);
```

[/slide]

[slide]
# Problem: Convert to Object

[vimeo-video]
[stream language="EN" videoId="489794810/52f44fb1a4" default /]
[stream language="RO" videoId="489794810/52f44fb1a4"  /]
[/video-vimeo]

[code-task title="Convert to Object" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToObject(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function that receives a string in JSON format and converts it to object.

Loop through all the keys and print them with their values in format:
`{key}: {value}`



# Example
  | **Input** | **Output** |
| --- | --- |
|`{"name": "George", "age": 40, "town": "Berlin"}`| name: George |
||age: 40|
||town: Berlin|

[/task-description]
[tests]
[test]
[input]
\{"hui"\: "byue", "cty"\: 26, "byu"\: "ctuct"\}
[/input]
[output]
hui\: byue
cty\: 26
byu\: ctuct
[/output]
[/test]
[test]
[input]
\{"hui"\: 156, "cty"\: {"dsad"\: "dsadaf"}, "byu"\: "ctuct"\}
[/input]
[output]
hui\: 156
cty\: \[object Object\]
byu\: ctuct
[/output]
[/test]
[test]
[input]
\{"name"\: "George", "age"\: 40, "town"\: "Sofia"\}
[/input]
[output]
name\: George
age\: 40
town\: Sofia
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide]
# Solution: Convert to Object

[vimeo-video]
[stream language="EN" videoId="489794882/3f1feba34c" default /]
[stream language="RO" videoId="489794882/3f1feba34c"  /]
[/video-vimeo]

[code-task title="Convert to Object" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToObject(input){
    let object = JSON.parse(input);

    for (let key in object){
        console.log(`${key}: ${object[key]}`);
    }
}
```
[/code-editor]
[task-description]
# Description
Write a function that receives a string in JSON format and converts it to object.

Loop through all the keys and print them with their values in format:
`{key}: {value}`



# Example
  | **Input** | **Output** |
| --- | --- |
|`{"name": "George", "age": 40, "town": "Berlin"}`| name: George |
||age: 40|
||town: Berlin|

[/task-description]
[tests]
[test]
[input]
\{"hui"\: "byue", "cty"\: 26, "byu"\: "ctuct"\}
[/input]
[output]
hui\: byue
cty\: 26
byu\: ctuct
[/output]
[/test]
[test]
[input]
\{"hui"\: 156, "cty"\: {"dsad"\: "dsadaf"}, "byu"\: "ctuct"\}
[/input]
[output]
hui\: 156
cty\: \[object Object\]
byu\: ctuct
[/output]
[/test]
[test]
[input]
\{"name"\: "George", "age"\: 40, "town"\: "Sofia"\}
[/input]
[output]
name\: George
age\: 40
town\: Sofia
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Convert to JSON

[vimeo-video]
[stream language="EN" videoId="489794917/67b2d5ed40" default /]
[stream language="RO" videoId="489794917/67b2d5ed40"  /]
[/video-vimeo]

[code-task title="Convert to JSON" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToJSON(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a Function That Receives **Name**, **LastName**, **HairColor** and Sets Them to an Object.

Convert the object to JSON string and print it.

Input is provided as 3 single strings in the order stated above.
# Example
  | **Input** | **Output** |
| --- | --- |
|`['George','Jones','Brown']`| `{"name":"George", "lastName":"Jones", "hairColor":"Brown"}`|

[/task-description]
[tests]
[test]
[input]
George
Jones
Brown
[/input]
[output]
\{"name"\:"George","lastName"\:"Jones","hairColor"\:"Brown"\}
[/output]
[/test]
[test]
[input]
rtdrt
xxer
aweaw
[/input]
[output]
\{"name"\:"rtdrt","lastName"\:"xxer","hairColor"\:"aweaw"\}
[/output]
[/test]
[test]
[input]
Ivan
njnnjk
14178
[/input]
[output]
\{"name"\:"Ivan","lastName"\:"njnnjk","hairColor"\:"14178"\}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Solution: Convert to JSON

[vimeo-video]
[stream language="EN" videoId="489794931/a0337f77f1" default /]
[stream language="RO" videoId="489794931/a0337f77f1"  /]
[/video-vimeo]

[code-task title="Convert to JSON" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToJSON(input){
  let person = {
        name: input[0],
        lastName: input[1],
        hairColor: input[2]
    }

    console.log(JSON.stringify(person));
}
```
[/code-editor]
[task-description]
# Description
Write a Function That Receives **Name**, **LastName**, **HairColor** and Sets Them to an Object.

Convert the object to JSON string and print it.

Input is provided as 3 single strings in the order stated above.
# Example
| **Input** | **Output** |
| --- | --- |
|`['George','Jones','Brown']`| `{"name":"George", "lastName":"Jones", "hairColor":"Brown"}`|

[/task-description]
[tests]
[test]
[input]
George
Jones
Brown
[/input]
[output]
\{"name"\:"George","lastName"\:"Jones","hairColor"\:"Brown"\}
[/output]
[/test]
[test]
[input]
rtdrt
xxer
aweaw
[/input]
[output]
\{"name"\:"rtdrt","lastName"\:"xxer","hairColor"\:"aweaw"\}
[/output]
[/test]
[test]
[input]
Ivan
njnnjk
14178
[/input]
[output]
\{"name"\:"Ivan","lastName"\:"njnnjk","hairColor"\:"14178"\}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]