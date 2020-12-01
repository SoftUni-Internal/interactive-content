# Object Introduction

[slide]
# What Are Objects ?

Objects in JavaScript, just as many other programming languages, can be compared to objects in real life. 

The concept of objects in JavaScript can be understood with real life, tangible objects.

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

[slide]
# Object Methods

Functions within a JavaScript object are called methods.

We can define methods using several syntaxes.

First sybtax:

``` js
let person = {
    sayHello : function() {
    console.log('Hi, guys');
  }
}
```

Second sybtax:
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

# The Object Methods

Methods:

* `Object.entries()`: returns array of tuples all properties and their values of an object 

* `Object.keys()`: returns array with all the properties

* `Object.values()`: returns array with all the values of the properties

``` js live
let cat = { name:'Tom', age: 5 };

console.log(Object.entries(cat));

console.log(Object.keys(cat));

console.log(Object.values(cat));

```

We can iterate through keys of an object.

Use `for-in` loop to iterate over the object properties by key:

``` js live
let person = { name:'Peter', age:'18', grade:'5.50' };

for (let key in person) {
   console.log(`${key}: ${person[key]}`);
}

```


[/slide]
