# JavaScript Object Notation (JSON)

[slide]
# What is JSON?

JSON is the short form of JavaScript Object Notation and is a text-based information format that follows JavaScript object syntax.

JSON is language independent and it can be used without depending on JavaScript even though it is a look-alike of the JavaScript object literal syntax.

JSON is a method of storing data and information in an organized and easy-to-access approach. 

# JSON Usage

Whit JSON we can exchange data between browser and server.

JSON allows better representation of hierarchy objects in a stream that XML.

JavaScript has built in functions to parse JSON so it's easy to use

JSON uses human-readable text to transmit data.

# JSON Example

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

# JSON Methods

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

var data = JSON.stringify(student);  

console.log(data);
```

[/slide]

[slide]
# Problem: Convert to Object
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
|`{"name": "George", "age": 40, "town": "Bucuresti"}`| name: George |
||age: 40|
||town: Bucuresti|

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

[/slide]

[slide]
# Solution: Convert to Object
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
|`{"name": "George", "age": 40, "town": "Bucuresti"}`| name: George |
||age: 40|
||town: Bucuresti|

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