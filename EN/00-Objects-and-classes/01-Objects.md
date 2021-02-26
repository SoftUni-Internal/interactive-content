# Objects Introduction

[slide hideTitle]
# What Are Objects?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-3-4-What-are-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Objects** in **JavaScript**, as in **many other programming languages**, can be compared to objects in real life.

The concept of objects in JavaScript can be understood using real life objects as an example.

An object consists of several **variables** and **functions** called **properties** and **methods**.

In JavaScript, you can **add** and **remove properties** from any object at **runtime**.

Example: 

``` js live
let person = { name:'Peter', age: 20 };
console.log(person.name);
```

In the example above, we **initialize** an object with the name `person`.

This object has **two properties** - `name` and `age`.

We can **access** a property's value with the class name, followed by a period `.` and the property name.

[/slide]

[slide hideTitle]
# Object Definition 

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-5-Object-definition-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This example shows how to define an object:

``` js
let person = { name:'Peter', age: 20, hairColor: 'black'} ;
```

We can also define an empty object and add the properties later:

``` js
let person = {};
person.name ='Peter';
person['lastName'] = 'Parker';
person.age = 20;
person.hairColor = 'black';
```

[/slide]

[slide hideTitle]
# Object Methods

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-6-Methods-of-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Functions within a JavaScript object are called methods.

We can define methods using several syntaxes.

**First syntax:**

``` js
let person = {
    sayHello : function() {
    console.log('Hi, guys');
  }
}
```

**Second syntax:**

```js 
let person = {
  sayHello() {
     console.log('Hi, guys');
  }
}
```

We can **add a method** to an **already defined object**:

```js
let person = { name:'Peter', age: 20 };
person.sayHello = () => console.log('Hi, guys');
```

[/slide]

[slide hideTitle]
# Built-in Methods

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-7-Built-in-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The most used built-in object methods are:

* `Object.entries()` - returns an array with key-value pairs of every object entry

* `Object.keys()` - returns an array holding all the properties of an object

* `Object.values()` - returns an array with all the values of the properties of the object

``` js live
let cat = { name:'Tom', age: 5 };

console.log(Object.entries(cat));
console.log(Object.keys(cat));
console.log(Object.values(cat));

```

[/slide]

[slide hideTitle]
# Iterate Through Keys

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-8-Iterate-through-keys-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can iterate through the keys of an object by using a `for-in` loop.

This enables us to access the property of a given key:

``` js live
let person = { name:'Peter', age:'18', grade:'5.50' };

for (let key in person) {
   console.log(`${key}: ${person[key]}`);
}

```

[/slide]

[slide hideTitle]
# Problem with Solution: Person Info

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-10-Solution-Person-info-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Person Info" taskId="JS-fundamentals-2-Objects-and-Classes-lab-Person-Info" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function personInfo(firstName, lastName, age){
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

Write a function that receives **three elements**, sets them to an **object** and **returns** the created object.

The input comes as 3 separate **strings** in the following order: **firstName**, **lastName**, **age**.

# Example
  | **Input** | **Output** |
| --- | --- |
| personInfo('Peter','Pan','20') | \{ firstName: 'Peter', lastName: 'Pan', age: '20' \} |
| personInfo('Kellie', 'Ellison', '33') | \{ firstName: 'Kellie', lastName: 'Ellison', age: '33' \} |

[/task-description]
[tests]
[test open]
[input]
personInfo('Peter', 'Pan', '20')
[/input]
[output]
\{ firstName: 'Peter', lastName: 'Pan', age: '20' \}
[/output]
[/test]
[test open]
[input]
personInfo('Kellie', 'Ellison', '33')
[/input]
[output]
\{ firstName: 'Kellie', lastName: 'Ellison', age: '33' \}
[/output]
[/test]
[test]
[input]
personInfo('Johny', 'Tony', '15')
[/input]
[output]
\{ firstName: 'Johny', lastName: 'Tony', age: '15' \}
[/output]
[/test]
[test]
[input]
personInfo('A', 'b', '2')
[/input]
[output]
\{ firstName: 'A', lastName: 'b', age: '2' \}
[/output]
[/test]
[test]
[input]
personInfo('CC', 'BB', '50')
[/input]
[output]
\{ firstName: 'CC', lastName: 'BB', age: '50' \}
[/output]
[/test]
[test]
[input]
personInfo('Z', 'X', '41')
[/input]
[output]
\{ firstName: 'Z', lastName: 'X', age: '41' \}
[/output]
[/test]
[test]
[input]
personInfo('JO', 'PA', '22')
[/input]
[output]
\{ firstName: 'JO', lastName: 'PA', age: '22' \}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: City

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-12-Solution-City-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="City" taskId="JS-fundamentals-2-Objects-and-Classes-lab-City" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function city(input){
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

You will receive an **оbject** containing city information. 

Loop through all the keys and print them with their values in this format:

\{**key**\} **->** \{**value**\}

The input will be in the following order: **name**, **area**, **population**, **country** and **postcode**.

For more information, see the examples below.


## Example One
  | **Input** | **Output** |
| --- | --- |
| city(\{ name: 'Bucharest', area: '228', population: '1830000', country: 'Romania', postCode: '010082' \})| name \-\> Bucharest |
||area \-\> 228|
||population \-\> 1830000|
||country \-\> Romania|
||postCode \-\> 010082|

## Example Two
| **Input** | **Output** |
| city(\{ name: 'London', area: '1572', population: '9000000', country: 'England', postCode: '533537' \})| name \-\> London |
||area \-\> 1572|
||population \-\> 9000000|
||country \-\> England|
||postCode \-\> 533537|

[/task-description]
[tests]
[test open]
[input]
city(\{ name: 'Bucharest', area: '228', population: '1830000', country: 'Romania', postCode: '010082' \})
[/input]
[output]
name -> Bucharest
area -> 228
population -> 1.83m
country -> Romania
postCode -> 010082
[/output]
[/test]
[test open]
[input]
city(\{ name: 'London', area: '1572', population: '9000000', country: 'England', postCode: '533537' \})
[/input]
[output]
name \-\> London
area \-\> 1572
population \-\> 9000000
country \-\> England
postCode \-\> 533537
[/output]
[/test]
[test]
[input]
city(\{ name: 'hnn', area: '1848', population: '354645', country: 'mklmlk', postCode: '1561' \})
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
city(\{name: 'ii', area: '44', population: '189', country: 'jiji', postCode: '484' \})
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