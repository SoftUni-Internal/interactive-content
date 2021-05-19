# Classes

[slide hideTitle]
# Class Definition​

A **class** is like a **blueprint** (or template) for creating **objects**.

Classes provide means of **bundling data and functionality** together.

Each class instance can have **attributes** attached to it.

A class instance can also have **methods** for **modifying its state**, they are its **behavior**.
[/slide]

[slide hideTitle]
# Defining a Class​

In JavaScript, there are two ways to define a class - class declarations and class expressions.



We declare a class using the `class` keyword, followed by the name of the class, in this case `Student`.

``` js
class Student {
    constructor(name) {
        this.name = name;
    }
}
```

The `constructor` method will be called every time the class is **instantiated**.

**Class attributes** are **the same for all instances of the class**.

**Instance attributes** are **unique to each instance of the class**.

```js
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}
```

The `this` keyword is used to set a property of the objects to a given value.

This is how we create an **instance** of the `Student` class:

```js
let student = new Student('Peter', 5.50);
```
[/slide]

[slide hideTitle]
# Methods

The ability to modify data is performed by special functions that are a part of the class, which are called methods. 

JavaScript classes support both **instance** and **static** methods.

Instance methods can **access and modify** instance data.

They can call other instance methods, as well as any static method.

Static methods **refer to the class**, rather than an instance of it.

Therefore, they have **no access** to instance data.

``` js live
class Dog {
    constructor() {
        this.speak = () => {
            console.log('Woof');
        }
    }
}

let dog = new Dog();
dog.speak();
```

[/slide]

[slide hideTitle]

# Problem with Solution: Person

Content will be added once the lab document has been revised.

[/slide]

[slide hideTitle]

# Problem with Solution: Get People

Content will be added once the lab document has been revised.

[/slide]