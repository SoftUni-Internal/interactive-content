# Prototype Chain

[slide]

# Object Create

When we want to create an **object** using an **existing** one, we can use `object.create()`. 

This method will create an **object**, using an existing **object** as a **prototype**.

Here is an example of how it works:

```js live
const dog = {
   name: 'Sparky',
   printInfo: function () {
      console.log(`My name is ${this.name}. My breed is ${this.breed}`);
   },
};
const myDog = Object.create(dog);
myDog.name = 'Max';
myDog.breed = 'shepherd';
myDog.printInfo();
```

In this example, we declare an object called **dog** with a **name** property and a **printInfo** method. 

After that we create a new **myDog** object with `Object.create()`, using **dog** as a prototype. 

We set the **name** property of **myDog** and we also add a new property called **breed** which was not present in the **dog** object.

[/slide]

[slide]

# What is Prototype

-  The prototype is an **object**

-  All objects have an **internal property** that is used for implementing **prototype-based inheritance** and **shared properties**

-  When we have **prototype-based inheritance** methods and properties are inherited by reference. They still belong to the prototype they came from but they can be used by the new object. This creates a link between the prototype and the object that inherits from it. In other words, properties and methods are **not copied** but inherited **by reference**.

All the inherited **properties** and **methods** come from the **prototype** property. 

This property allows us to add new **properties** to object **constructors**.

For example:

```js live
function Person(first, last, age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}
Person.prototype.nationality = function (nation) {
   console.log(
      `I am ${this.firstName} ${this.lastName}, ${this.age}, from ${nation}`
   );
};

let person = new Person('Joe', 'Jones', 20);

person.nationality('British');
```

Here we have a **Person** function and we add **nationality** to its **prototype** property.

[/slide]

[slide]

# Prototype Methods

Before ES6 (ES2015) all classes were composed manually, through functions. 

After ES6, we have the sugar syntax with classes.

Here is an example of how they looked before ES6:

```js live
function Rectangle(width, height) {
   this.width = width;
   this.height = height;
}

Rectangle.prototype.area = function () {
   return this.width * this.height;
};

let rect = new Rectangle(3, 5);

let sum = rect.area();

console.log(sum);
```

[/slide]

[slide]

# Comparison with the New Syntax 

We have a function called **rectangle** which takes some parameters and we attach another function called **area** to the **rectangle** prototype, which **returns** the product from the multiplication of the **width** and **height** parameters.

This is how the same thing looks like after ES6:

```js live
class Rectangle {
   constructor(width, height) {
      this.width = width;
      this.height = height;
   }
   area() {
      return this.width * this.height;
   }
}

let rect = new Rectangle(3, 5);

let sum = rect.area();

console.log(sum);
```
[/slide]

[slide]

# Object Creation

There are two ways to create an object. The first one is **Literal** creation, and the second is **Constructor** creation.

With **constructor** creation, we have a reference to the value of the constructor's prototype property, and also, we get an internal link to the `__proto__` property of the object. `__proto__` is a property that points at the prototype that has been set.

[/slide]

[slide]

# Javascript Objects

Here is an example of **literal creation**:

```js live
let bar = {
   me: 'I am b1',
   speak: function () {
      console.log('Hello, ' + this.me + '.');
   },
};

bar.speak();
```

We created the object **bar** with two properties, which are **name** and **speak**. 

**Speak** is a function that prints to the console.

Here is an example with **Constructor creation**:

```js live
function Bar(name) {
   this.me = 'I am ' + name;
   this.speak = function () {
      return `Hello, ${this.me} .`;
   };
}

let b1 = new Bar('b1');

console.log(b1.speak());
```

In this example, we created a **function Bar**, which is a constructor. 

In this function, we set the **properties** of the object, which are **name** and **speak**. 

**Speak** is a function that **returns** the result by printing it to the console. 

We instantiated **Bar** using the **new** keyword  and invoked its **speak()** function.

[/slide]

[slide]

# Proto vs Prototype Property

There is a difference between `__proto__` and **Prototype Property**. 

`__proto__`, is the **accessor** property of the object and **exposes** its **internal prototype**.

We should not use `__proto__` directly in our code, it is **deprecated**.

The **Prototype** property is a property of a function that is set if the object is created by a **constructor function**.

Objects **do not** have the **prototype** property.

[/slide]

[slide]

# Accessing Private Properties

We prefix properties with `#` to mark them as private.

For getting private properties we use **object.prototype.get**NameOfProperty. 

Setting properties is similar but instead of **get** we write **set**:

 **object.prototype.set**NameOfProperty.

Here is an example of **prototype.get** and **prototype.set**:

```js
Point.prototype.getX = function () {
   return this.#x;
};
```

```js
Point.prototype.setX = function (x) {
   this.#x = x;
};
```

[/slide]

[slide]

# Example of Prototype Chain

```js live
function Sum(y) {
   this.y = y;
}

Sum.prototype.x = 5;

Sum.prototype.calculate = function (z) {
   return this.x + this.y + z;
};

let sum = new Sum(10);
console.log(sum.calculate(15));
```

We create a function **Sum** with a parameter **y**. 

We then attach a property **x** and a method **calculate**, which sums **x**, **y** and **z**.

After that, we instantiate **Sum** and print the result of the **calculate** function to the console.

[/slide]


[slide]

# Problem: Extending Prototype

[code-task title="Problem: Extending Prototype" taskId="js-advanced-prototypes-and-inheritance-extending-prototype" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function extendPrototype(classToExtend) {
    // TODO:
}
```

[/code-editor]
[task-description]

## Description

Write a function which receives a **class** and adds a property **species** and a function `toSpeciesString()` to it.

When called, the function returns a string in the format:

`I am a <species>. <toString()>`

The function `toString()` is called from the current instance (use the **this** keyword to call it).

## Input and Output

Your function will receive a **class** whose prototype it should extend. 

There is **NO** output, your function should only attach the properties to the given class' prototype.

[/task-description]
[code-io /]
[tests]
[test]
[input]
class Person \{
constructor(name, email) \{
this.name = name;
this.email = email;
\}
toString() \{
let className = this.constructor.name;
return `\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})`;
\}
\}

class Teacher extends Person \{
constructor(name, email, subject) \{
super(name, email);
this.subject = subject;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, subject: \\$\{this.subject\})`;
\}
\}

class Student extends Person \{
constructor(name, email, course) \{
super(name, email);
this.course = course;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, course: \\$\{this.course\})`;
\}
\}

result(Person);
let p = new Person("Pesho","email@hit.bg");
expect(p.species).to.equal('Human',"No species property");
expect(p.toSpeciesString()).to.equal("I am a Human. Person (name: Pesho, email: email@hit.bg)");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
class Person \{
constructor(name, email) \{
this.name = name;
this.email = email;
\}
toString() \{
let className = this.constructor.name;
return `\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})`;
\}
\}

class Teacher extends Person \{
constructor(name, email, subject) \{
super(name, email);
this.subject = subject;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, subject: \\$\{this.subject\})`;
\}
\}

class Student extends Person \{
constructor(name, email, course) \{
super(name, email);
this.course = course;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, course: \\$\{this.course\})`;
\}
\}

result(Person);
let t = new Teacher("Posho","imail@hit.bg","Coding");
expect(t.species).to.equal('Human',"No species property");
expect(t.toSpeciesString()).to.equal("I am a Human. Teacher (name: Posho, email: imail@hit.bg, subject: Coding)");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
class Person \{
constructor(name, email) \{
this.name = name;
this.email = email;
\}
toString() \{
let className = this.constructor.name;
return `\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})`;
\}
\}

class Teacher extends Person \{
constructor(name, email, subject) \{
super(name, email);
this.subject = subject;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, subject: \\$\{this.subject\})`;
\}
\}

class Student extends Person \{
constructor(name, email, course) \{
super(name, email);
this.course = course;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, course: \\$\{this.course\})`;
\}
\}

result(Person);
let s = new Student("Gosho","gesha@hit.bg",1);
expect(s.species).to.equal('Human',"No species property");
expect(s.toSpeciesString()).to.equal("I am a Human. Student (name: Gosho, email: gesha@hit.bg, course: 1)");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide]

# Solution: Extending Prototype

[code-task title="Problem: Extending Prototype" taskId="js-advanced-prototypes-and-inheritance-extending-prototype-solution" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function extendPrototype(classToExtend) {
    // TODO:
}
```

[/code-editor]
[task-description]

## Description

Write a function which receives a **class** and adds a property **species** and a function `toSpeciesString()` to it.

When called, the function returns a string in the format:

`I am a <species>. <toString()>`

The function `toString()` is called from the current instance (use the **this** keyword to call it).

## Input and Output

Your function will receive a **class** whose prototype it should extend. 

There is **NO** output, your function should only attach the properties to the given class' prototype.

[/task-description]
[code-io /]
[tests]
[test]
[input]
class Person \{
constructor(name, email) \{
this.name = name;
this.email = email;
\}
toString() \{
let className = this.constructor.name;
return `\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})`;
\}
\}

class Teacher extends Person \{
constructor(name, email, subject) \{
super(name, email);
this.subject = subject;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, subject: \\$\{this.subject\})`;
\}
\}

class Student extends Person \{
constructor(name, email, course) \{
super(name, email);
this.course = course;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, course: \\$\{this.course\})`;
\}
\}

result(Person);
let p = new Person("Pesho","email@hit.bg");
expect(p.species).to.equal('Human',"No species property");
expect(p.toSpeciesString()).to.equal("I am a Human. Person (name: Pesho, email: email@hit.bg)");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
class Person \{
constructor(name, email) \{
this.name = name;
this.email = email;
\}
toString() \{
let className = this.constructor.name;
return `\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})`;
\}
\}

class Teacher extends Person \{
constructor(name, email, subject) \{
super(name, email);
this.subject = subject;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, subject: \\$\{this.subject\})`;
\}
\}

class Student extends Person \{
constructor(name, email, course) \{
super(name, email);
this.course = course;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, course: \\$\{this.course\})`;
\}
\}

result(Person);
let t = new Teacher("Posho","imail@hit.bg","Coding");
expect(t.species).to.equal('Human',"No species property");
expect(t.toSpeciesString()).to.equal("I am a Human. Teacher (name: Posho, email: imail@hit.bg, subject: Coding)");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
class Person \{
constructor(name, email) \{
this.name = name;
this.email = email;
\}
toString() \{
let className = this.constructor.name;
return `\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})`;
\}
\}

class Teacher extends Person \{
constructor(name, email, subject) \{
super(name, email);
this.subject = subject;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, subject: \\$\{this.subject\})`;
\}
\}

class Student extends Person \{
constructor(name, email, course) \{
super(name, email);
this.course = course;
\}
toString() \{
let baseStr = super.toString().slice(0, -1);
return baseStr + `, course: \\$\{this.course\})`;
\}
\}

result(Person);
let s = new Student("Gosho","gesha@hit.bg",1);
expect(s.species).to.equal('Human',"No species property");
expect(s.toSpeciesString()).to.equal("I am a Human. Student (name: Gosho, email: gesha@hit.bg, course: 1)");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]
