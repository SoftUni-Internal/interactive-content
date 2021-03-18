[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-33-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Objects - Definition, properties and methods
```js
let person = {
    name: 'Peter',
    age: 20,
    sayHello() {
        console.log('Hi, guys');
    }
};
```
- Object methods

```js live
let person = {
    name: 'John',
    age: 43,
    sayHello() {
        console.log('Hello, my name is ' + this.name);
    }
};

person.sayHello();
```

- Object iterations

``` js live
let person = {
    name: 'Peter',
    age: '18',
    grade: '5.50'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

```
- Difference between Reference and Value Types

- JSON files overview

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

- `parse` and `stringify` are built-in JavaScript methods
  - used for converting JSON to an object, and vice versa
  
```js live
let car = '{"Car":"Nio","Model": "EP9","Colour":"Blue"}';  

var data = JSON.parse(car);  

console.log(data);
```

- Classes in JavaScript

``` js
class Student {
    constructor(name) {
        this.name = name;
    }
}
```

## In the next lesson, you will learn:

- Maps

- Map methods

- Lambda expressions

- Stream API

[/slide]
