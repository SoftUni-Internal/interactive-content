# Object Introduction

[slide]
# What Are Objects ?

An object is collection of related data or functionality.

An object consists of several variables and functions called properties and method.

In JavaScript, at run time you can add and remove properties of any object.

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

We can create an object with an object literal, using the following syntax:

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
