[slide]

# Summary

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/EN/01.JS-Fundamentals-Object-and-Classes-33-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Objects - Definition, properties and methods
```js
let person = { name:'Peter', 
age: 20,
sayHello() {
     console.log('Hi, guys');
  }
};
```
- Object methods

- Object iterations
``` js live
let person = { name:'Peter', age:'18', grade:'5.50' };

for (let key in person) {
   console.log(`${key}: ${person[key]}`);
}

```
- Difference between Reference and Value Type

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
  - Parse and Stringify

- Classes in Javascript
``` js
class Student {
  constructor(name) {
    this.name = name;
  }
}
```

## In the next lesson we will learn:

- Maps

- Map methods

- Lambda expressions

- Stream API

[/slide]