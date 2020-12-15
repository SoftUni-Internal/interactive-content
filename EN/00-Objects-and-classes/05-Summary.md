[slide]

# Summary

[vimeo-video]
[stream language="EN" videoId="489795216/a021fdff71" default /]
[stream language="RO" videoId="489795216/a021fdff71"  /]
[/video-vimeo]

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
[/slide]