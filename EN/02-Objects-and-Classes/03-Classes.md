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

[code-task title="Person" taskId="java-path-js-advanced-objects-and-classes-person" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
class Person {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Create a **class** that represents a personal record. 

It has the following properties, all set from the constructor: 

- `firstName` - **String**
- `lastName` - **String**
- `age` - **Number**
- `email` - **String**

It also has a method called `toString()`, which prints a summary of the information. 

See the example for formatting details. 

## Input 
The constructor function will receive valid parameters. 

## Output 
The `toString()` method should return a string in the following format: 

`{firstName} {lastName} (age: {age}, email: {email})`

Submit the class definition as it is, **without** wrapping it in any function. 

## Example 

### Sample Input 

```js
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'); 

console.log(person.toString()); 
```

### Output 

```
Anna Simpson (age: 22, email: anna@yahoo.com) 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let Person = result;

let person = new Person("Anna", "Simpson", 18, "anna@yahoo.com");
let str = person.toString();

expect(str).to.be.equal('Anna Simpson (age: 22, email: anna@yahoo.com)');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;

expect(typeof Person).to.be.equal('function',
            "Class 'Person' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;

expect(typeof Person.constructor).to.be.equal('function',
            "'Person.constructor' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;

expect(Person.length).to.be.equal(4,
            "'Rectangle.constructor' should take 4 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;

expect(typeof Person.constructor.name).to.be.equal('string',
            "'Person.constructor' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(p.firstName).to.be.equal("Peter",
            "Property 'firstName' not working");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(p.lastName).to.be.equal("Marinov",
            "Property 'lastName' not working");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(p.age).to.be.equal(18,
            "Property 'age' not working");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(p.email).to.be.equal("pesho18@abv.bg",
            "Property 'email' not working");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(typeof p.toString).to.be.equal('function',
            "Method 'toString()' does not exist");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
let str = p.toString();

expect(str).to.be.equal('Peter Marinov (age: 18, email: pesho18@abv.bg)');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem with Solution: Get People
[code-task title="Get People" taskId="java-path-js-advanced-objects-and-classes-get-people" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
function getPeople() {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that returns an array of `Person` instances. 

Use the class from the previous task, create the following instances, and return them in an array: 

|**First Name**|**Last Name**|**Age**|**Email**|
|---|---|---|---|
|**Anna**|Simpson|22|anna@yahoo.com|
|**SoftUni**| | | |
|**Stephan**|Johnson|25| |
|**Gabriel**|Peterson|24|g.p@gmail.com|

For any empty cells, do not supply a parameter (call the constructor with less parameters).

## Input 
There will be **no input**, the data is static and matches the table above. 

## Output 
As **output, return an array** of `Person` instances. 

**Submit** a **function** that returns the required output. 

[/task-description]
[code-io/]
[tests]
[test]
[input]
let getPersons = result;

expect(typeof getPersons).to.be.equal('function',
            "function 'getPersons' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(Array.isArray(persons)).to.be.equal(true,
            "getPersons() should return array");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons.length).to.be.greaterThan(0,
            "getPersons() should return non-empty array");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(typeof persons\[0\]).to.be.equal('object',
            "getPersons() should return array of objects");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons.length).to.be.equal(4,
            "getPersons() should return array of 4 elements");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[0\].firstName).to.be.equal('Anna',
            "getPersons()\[0\].firstName should be Anna");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[0\].lastName).to.be.equal('Simpson',
            "getPersons()\[0\].lastName should be Simpson");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[0\].age).to.be.equal(22,
            "getPersons()\[0\].age should be 22");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[0\].email).to.be.equal('anna@yahoo.com',
            "getPersons()\[0\].email should be anna@yahoo.com");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[1\].firstName).to.be.equal('SoftUni',
            "getPersons()\[1\].firstName should be SoftUni");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[1\].lastName).to.be.equal(undefined,
            "getPersons()\[1\].lastName should be undefined");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[1\].age).to.be.equal(undefined,
            "getPersons()\[1\].age should be undefined");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[1\].email).to.be.equal(undefined,
            "getPersons()\[1\].email should be undefined");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[2\].firstName).to.be.equal('Stephan',
            "getPersons()\[2\].firstName should be Stephan");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[2\].lastName).to.be.equal('Johnson',
            "getPersons()\[2\].lastName should be Johnson");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[2\].age).to.be.equal(25,
            "getPersons()\[2\].age should be 25");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[2\].email).to.be.equal(undefined,
            "getPersons()\[2\].email should be undefined");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[3\].firstName).to.be.equal('Gabriel',
            "getPersons()\[3\].firstName should be Gabriel");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[3\].lastName).to.be.equal('Peterson',
            "getPersons()\[3\].lastName should be Peterson");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[3\].age).to.be.equal(24,
            "getPersons()\[3\].age should be 24");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[3\].email).to.be.equal('g.p@gmail.com',
            "getPersons()\[3\].email should be g.p@gmail.com");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();
let personsAsString = persons.join(", ");

expect(personsAsString).to.be.equal(
            'Anna Simpson (age: 22, email: anna@yahoo.com), SoftUni undefined (age: undefined, email: undefined), Stephan Johnson (age: 25, email: undefined), Gabriel Peterson (age: 24, email: g.p@gmail.com)',
            "Person.toString()");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]