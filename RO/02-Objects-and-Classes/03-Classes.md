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

We declare a class using the `class` keyword, followed by the name of the class, in this case - `Person`.

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

To **instantiate** the `Person` class, we use the `new` keyword, followed by the name of the class:

```js
let person = new Person('Mike', 37, 'Bern');
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

As a result, we can leave the class itself either with, or without a name - as shown above.

[/slide]

[slide hideTitle]
# Hoisting

In JavaScript, we can use variables and functions before they are declared, if you use the `var` keyword:

```js live
favoriteGame = 'Rise of the Tomb Raider 🎮';

console.log(favoriteGame);

var favoriteGame;
```

Moving all declarations to top of their scope is referred to as **hoisting**.

Keep in mind that we still **cannot** access the **values** of variables, declared with `let` and `const`.

```js
currentWeather = 'rainy 🌦'; // ReferenceError

let currentWeather;
```

Hoisting does **not** apply to neither class declarations nor class expressions.

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
        this.name = name;
        this.department = 'support';
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

To add properties or methods to all existing objects, we add them to their prototype.

```js live
class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }

    // This is a prototype method
    calcArea() {
        return this.sideLength * this.sideLength;
    }
}

const squareOne = new Square(20);
console.log(squareOne.calcArea());

const squareTwo = new Square(35);
console.log(squareTwo.calcArea());
```

In other words, adding a method inside the class body, makes it available to all of its instances.

[/slide]

[slide hideTitle]
# Accessor Properties

**Accessor properties** provide access to properties by using the dot and bracket notation we mentioned earlier.

With the EcmaScript 6 standard in 2015, JavaScript also introduced support for the `get` and `set` keywords.

They allow for retrieving and modifying property values in a similar fashion to Java.

```js
class User {
  constructor(name, surname) {
    this.name = "John";
    this.surname: "Smith";
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

let userOne = new User();

userOne.fullName = "James Cooper";
```

Defining a property getter is done using the `get` keyword, followed by the method.

Setters are created with the `set` keyword and a method that typically accepts a new value.

Using getters and setters allows for data encapsulation - some properties can only be read, with no write access from outside the class.

[/slide]

[slide hideTitle]
# Accessor Properties in Action

We can use accessor properties to modify an object's property values after its creation:

```js live
class Teacher {
    constructor (fullName, subject){
        this.fullName = fullName;
        this.subject = subject;
    }
}

let myTeacher = new Teacher("Dale Oliver", "History");
console.log(myTeacher.subject);

myTeacher.subject = "Programming";
console.log(myTeacher.subject);
```

As you can see, here we use dot notation to change the `subject` property of the `myTeacher` object.

This can also be done using bracket notation:

```js
myTeacher["subject"] = "Programming";
```
[/slide]

[slide hideTitle]
# Static Methods

JavaScript classes support both **instance** and **static** methods.

Instance methods can **access and modify** instance data.

They can call other instance methods, as well as any static method.

Static methods **refer to the class**, rather than an instance of it.

``` js
class Car {
  constructor(name) {
    this.name = name;
  }

  static hello() {
    return "This is a static method!";
  }
}

let myCar = new Car("Mazda");
```

As a result, we can only call them on the **class itself**, because they lack access to instance data.

[/slide]

[slide hideTitle]
# Private Properties

Recently introduced to JavaScript, **private properties** are only accessible from inside the class.

They always begin with a hash symbol `#`, followed by a name: `#myPrivateProperty`

```js
class iceCreamMaker {​
    #milkInLitres;
    constructor() {​
        this.#milkInLitres = 50;
        this.#sugarInKg = 30;​ // SyntaxError
    }​
}​

const machine = new iceCreamMaker();​
machine.#milkInLitres === 40 // SyntaxError
```

Accessing a private property from outside its parent class results in an error.

[/slide]

[slide hideTitle]

# Accessing Private Properties​

Since private fields are **limited** to the class's own scope, we must use **getters and setters** to make them public:

```js
class iceCreamMaker {​
    #milkInLitres;
    constructor() {​
        this.#milkInLitres = 50;
    }​

    get milkInLitres() { 
      return this.#milkInLitres;
    }​
}​

const machine = new iceCreamMaker();​
console.log(machine.milkInLitres); // 50
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