[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/EN/02-Objects-and-Classes/JS-advanced-objects-and-classes-38-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- JavaScript **objects** are collections of fields
  * they can hold properties in the form of **key-value** pairs

```js
let person = {​
    firstName: "John",​
    lastName: "Doe",​
    age: 50​
};​
```

- JavaScript Object Notation (**JSON**) is used for data transfer
  * it is a self-describing, **text-based** format

```js
{​
    "employees": [​
        { "firstName": "John", "lastName": "Doe" },​
        { "firstName": "Anna", "lastName": "Smith" },​
        { "firstName": "Peter", "lastName": "Jones" }​
    ]​
}​
```

- **Classes** are blueprints for objects
  * they can define **methods** and accessor **properties**

```js
class Rectangle {​
    constructor(height, width) {​
        this.height = height;​
        this.width = width;​
    }​
};​
```

## In the next lesson you will learn:

- The **Document Object Model** (DOM)
  * definition, methods and manipulations
  * parents and children elements
  * DOM properties, events and HTML attributes
- **Browser Object Model** (BOM)
  * how to manipulate browser history, navigation and windows

[/slide]
