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
let student = {
  }
  "name": "George",
  "age": 25,
  "grades": {
    "Math": [2.50, 3.50],
    "Chemistry": [4.50]
  }
};  

var data = JSON.stringify(student);  

console.log(data);
```

[/slide]
