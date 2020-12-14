# Object Introduction

[slide]
# What Are Objects ?

[vimeo-video]
[stream language="EN" videoId="489795277/32e690031f" default /]
[stream language="RO" videoId="489795277/32e690031f"  /]
[/video-vimeo]

Objects in JavaScript, as in **many other programming languages**, can be compared to objects in real life.

The concept of objects in JavaScript can be understood with real life, tangible objects.

An object consists of several variables and functions called properties and methods.

In JavaScript, at run time you can add and remove properties from any object.

Example: 

``` js live
let person = { name:'Peter', age: 20 };
console.log(person.name);
```

In the example above, we initialize an object with the name `person`.

This object has two properties `name` and `age`.

We can access the property value with the name of the class `.` property name.

[/slide]

[slide]
# Object Definition 

[vimeo-video]
[stream language="EN" videoId="489795273/ab8664a147" default /]
[stream language="RO" videoId="489795273/ab8664a147"  /]
[/video-vimeo]

We can define an empty object and add the properties later:

``` js
let person = {name:'Peter', age: 20, hairColor: 'black'};
```

We can define empty object and add the properties later:

``` js
let person = {};
person.name ='Peter';
person["lastName"] = 'Parker';
person.age = 20;
person.hairColor = 'black';
```

[/slide]

[slide]
# Object Methods

[vimeo-video]
[stream language="EN" videoId="489795322/e2b71c887b" default /]
[stream language="RO" videoId="489795322/e2b71c887b"  /]
[/video-vimeo]

Functions within a JavaScript object are called methods.

We can define methods using several syntaxes.

First syntax:

``` js
let person = {
    sayHello : function() {
    console.log('Hi, guys');
  }
}
```

Second syntax:
```js 
let person = {
  sayHello() {
     console.log('Hi, guys');
  }
}
```

We can add a method to an already defined object:

```js
let person = { name:'Peter', age: 20 };
person.sayHello = () => console.log('Hi, guys');
```

[/slide]

[slide]
# Built-in Methods

[vimeo-video]
[stream language="EN" videoId="489795341/8532941804" default /]
[stream language="RO" videoId="489795341/8532941804"  /]
[/video-vimeo]

Methods:

* `Object.entries()`: returns an array of tuples, holding all properties and their values

* `Object.keys()`: returns array holding all the properties of an object

* `Object.values()`: returns an array with all the values of the properties of the object

``` js live
let cat = { name:'Tom', age: 5 };

console.log(Object.entries(cat));

console.log(Object.keys(cat));

console.log(Object.values(cat));

```

[/slide]

[slide]
# Iterate through Keys

[vimeo-video]
[stream language="EN" videoId="489795350/598a1cef8e" default /]
[stream language="RO" videoId="489795350/598a1cef8e"  /]
[/video-vimeo]

We can iterate through keys of an object, by using a `for-in` loop to iterate over the object's properties by key:

``` js live
let person = { name:'Peter', age:'18', grade:'5.50' };

for (let key in person) {
   console.log(`${key}: ${person[key]}`);
}

```

[/slide]

[slide]
# Problem: Person Info

[vimeo-video]
[stream language="EN" videoId="489795432/3e85c0a88d" default /]
[stream language="RO" videoId="489795432/3e85c0a88d"  /]
[/video-vimeo]

[code-task title="Person Info" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function personInfo(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function that receives an array of 3 elements, sets them to an **object** and prints the object's properties by key and value in the format:
`{key}: {value}`

The input comes as 3 separate strings in the following order: firstName, lastName, age.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['Peter','Pan','20']`| firstName: Peter |
||lastName: Pan|
||age: 20|

[/task-description]
[tests]
[test]
[input]
Johny
Tony
15
[/input]
[output]
firstName: Johny
lastName: Tony
age: 15
[/output]
[/test]
[test]
[input]
A
b
2
[/input]
[output]
firstName: A
lastName: b
age: 2
[/output]
[/test]
[test]
[input]
CC
BB
50
[/input]
[output]
firstName: CC
lastName: BB
age: 50
[/output]
[/test]
[test]
[input]
Z
X
41
[/input]
[output]
firstName: Z
lastName: X
age: 41
[/output]
[/test]
[test]
[input]
JO
PA
22
[/input]
[output]
firstName: JO
lastName: PA
age: 22
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Person Info

[vimeo-video]
[stream language="EN" videoId="489795397/a61485a8d9" default /]
[stream language="RO" videoId="489795397/a61485a8d9"  /]
[/video-vimeo]

[code-task title="Person Info" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function personInfo(input){
  let person = {
        firstName: input[0],
        lastName: input[1],
        age: input[2]
    }

    for (let [key, value] of Object.entries(person)){
        console.log(key + ": " + value);
    }
}
```
[/code-editor]
[task-description]
# Description
Write a function that receives an array of 3 elements, sets them to an **object** and prints the object's properties by key and value in the format:
`{key}: {value}`

The input comes as 3 separate strings in the following order: firstName, lastName, age.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['Peter','Pan','20']`| firstName: Peter |
||lastName: Pan|
||age: 20|

[/task-description]
[tests]
[test]
[input]
Johny
Tony
15
[/input]
[output]
firstName: Johny
lastName: Tony
age: 15
[/output]
[/test]
[test]
[input]
A
b
2
[/input]
[output]
firstName: A
lastName: b
age: 2
[/output]
[/test]
[test]
[input]
CC
BB
50
[/input]
[output]
firstName: CC
lastName: BB
age: 50
[/output]
[/test]
[test]
[input]
Z
X
41
[/input]
[output]
firstName: Z
lastName: X
age: 41
[/output]
[/test]
[test]
[input]
JO
PA
22
[/input]
[output]
firstName: JO
lastName: PA
age: 22
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: City

[vimeo-video]
[stream language="EN" videoId="489795448/09ea78efff" default /]
[stream language="RO" videoId="489795448/09ea78efff"  /]
[/video-vimeo]

[code-task title="City" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function city(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Receive and array containing five elements. 

Create a city object which will hold the **city name**, **area, population**, **country** and **postcode**. 

Loop through all the keys and print them with their values in format:

`{key} -> {value}`

The input will be in the following order: **name**, **area**, **population**, **country** and **postCode**.

See the examples below.


# Example
  | **Input** | **Output** |
| --- | --- |
|`['Bucharest', '228', '1.83m', 'Romania', '010082']`| name \-\> Bucharest |
||area \-\> 228|
||population \-\> 1.83m|
||country \-\> Romania|
||postCode \-\> 010082|

[/task-description]
[tests]
[test]
[input]
Sofia
492
1238438
Bulgaria
1000
[/input]
[output]
name -> Sofia
area -> 492
population -> 1238438
country -> Bulgaria
postCode -> 1000
[/output]
[/test]
[test]
[input]
hnn
1848
354645
mklmlk
1561
[/input]
[output]
name -> hnn
area -> 1848
population -> 354645
country -> mklmlk
postCode -> 1561
[/output]
[/test]
[test]
[input]
ii
44
189
jiji
484
[/input]
[output]
name -> ii
area -> 44
population -> 189
country -> jiji
postCode -> 484
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: City

[vimeo-video]
[stream language="EN" videoId="489795461/ed6a2ec0c8" default /]
[stream language="RO" videoId="489795461/ed6a2ec0c8"  /]
[/video-vimeo]

[code-task title="City" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function city(input){
 let cityObject = {
        name: input[0],
        area: input[1],
        population: input[2],
        country: input[3],
        postCode: input[4]
    }

    for (let key in cityObject){
        console.log(`${key} -> ${cityObject[key]}`);
    }
}
```
[/code-editor]
[task-description]
# Description
Receive and array containing five elements. 

Create a city object which will hold the **city name**, **area, population**, **country** and **postcode**. 

Loop through all the keys and print them with their values in format:

`{key} -> {value}`

The input will be in the following order: **name**, **area**, **population**, **country** and **postCode**.

See the examples below.


# Example
  | **Input** | **Output** |
| --- | --- |
|`['Bucharest', '228', '1.83m', 'Romania', '010082']`| name \-\> Bucharest |
||area \-\> 228|
||population \-\> 1.83m|
||country \-\> Romania|
||postCode \-\> 010082|

[/task-description]
[tests]
[test]
[input]
Sofia
492
1238438
Bulgaria
1000
[/input]
[output]
name -> Sofia
area -> 492
population -> 1238438
country -> Bulgaria
postCode -> 1000
[/output]
[/test]
[test]
[input]
hnn
1848
354645
mklmlk
1561
[/input]
[output]
name -> hnn
area -> 1848
population -> 354645
country -> mklmlk
postCode -> 1561
[/output]
[/test]
[test]
[input]
ii
44
189
jiji
484
[/input]
[output]
name -> ii
area -> 44
population -> 189
country -> jiji
postCode -> 484
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
