# Classes

[slide hideTitle]
# Class Definition​

Classes are used as a blueprint, defining the structure for an object.

Inside its body, a class can **contain**:

- **Data**, in the form of properties and attributes

- **Actions** that define its behavior and modify its state, by means of functions

Being a template, classes can instantiated in the form of **objects**.

What makes them different from Java classes, is that JavaScript classes are much more dependent on the proper use of the `this` keyword.

Scoping and `this` binding have a very different behavior in JavaScript, compared to Java.

[/slide]

[slide hideTitle]
# Defining a Class​

In **JavaScript**, there are two ways to **define** a class - class **declarations** and class **expressions**.

## Class Declaration

We declare a class using the `class` keyword, followed by the name of the class, in this case `Person`.

``` js
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
```

The `constructor` method will be called every time the class is **instantiated**.

The `this` keyword is used to set a property of the objects to a given value.

To **instantiate** the `Student` class, we use the `new` keyword, followed by the name of the class:

```js
let student = new Student('Mike', 37, 'Bern');
```

Between the brackets, we pass in the `name`, `age` and `city` arguments.


## Class Expression

When using a **class expresssion**, the class is assigned as a value to a variable:

```js
let Car = class {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
```

We will only be able to access this class by the **variable name**.

As a result, we can leave the class itself either with, or without one - as shown above.

[/slide]

[slide hideTitle]
# Hoisting

In JavaScript, we can use variables and functions before they are declared.

```js live
console.log(currentWeather);

let currentWeather = 'rainy 🌦';
```

Moving all declarations to top of their scope is referred to as **hoisting**.

This behavior does **not** apply to neither class declarations nor class expressions.

We are required to declare our class **before** we can access it.

Failing to do so will result in a `ReferenceError`:

```js live
const mountainBike = new Bike('Trek Bikes 🚲', 'mountain 🏔', 'Kenda Kwest 28x700');

class Bike {
    constructor(brand, type, tires) {
        this.brand = brand;
        this.type = type;
        this.tires = tires;
    }
}
```

[/slide]

[slide hideTitle]
# Class Body

The class body is defined using opening and closing curly braces: `{...}`

Inside, we define class members like properties an methods.

```js
class SupportEmployee {
    constructor(name) {
        this.name = name,
        this.department = 'support'
    }
}
```

A compulsory method all classes have is the **constructor**.

It is used every time a **new** instance (object) of the class is created.

This method defines the **initial** values for all properties that a child object should have.

[/slide]

[slide hideTitle]
# Prototype Methods

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