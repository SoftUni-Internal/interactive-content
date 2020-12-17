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

In this example we have object **dog** with **name** and print info. 

After that we create **myDog** with `Object.create()` from **dog**. 

We set to **myDog** change the name from **Sparky** to **Max** and we add breed which was not in the **dog** in first place.

[/slide]

[slide]

# What is Prototype

-  The prototype is an **object**.
-  They have an **internal** **property** that is used for implementing **prototype**.
   -  based inheritance
   -  shared properties
-  They have **references** because they are **not** separated or disconnected, bu they are **linked**.

The inherited **properties** and **methods** come from **prototype** property. 

This property allows us to add more **properties** to the **constructors**.

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

In this example we have function **Person** and add to its **prototype** function **nationality**.

[/slide]

[slide]

# Prototype Methods

Before ES6 or also called ES2015, all classes were composed manually, through functions. 

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

In this example we have function **rectangle** with some parameters. 

And we attach to the **rectangle** prototype another function called **area**, which **returns** the **width** and **height** parameters **multiplied**.

And let's see how it will look like after ES6:

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

We have two ways to create an object. The first one is **Literal** creation, and the second is **Constructor** creation.

With **constructor** creation, we will have reference to the value of the constructor's prototype property, and also, we will get an internal link for `__proto__` of the object.

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

In this example, we created the object **bar** with two properties, which are **name** and **speak**. 

**Speak** is the function that prints.

And Here is one with **Constructor creation**:

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

In this example, we created a **function Bar**, which is the constructor. 

In this function, we set the **properties** of the object, which are **name** and **speak**. 

**Speak** is a function that **returns** the result. 

We created Bar with the word **new** and printed it in the console.

[/slide]

[slide]

# Proto vs Prototype Property

There is a difference between `__proto__` and **Prototype Property**. 

The first one, `__proto__`, is the **accessor** property of the object and **exposes** the **internal** **prototype** of it. 

We should not use `__proto__` directly in our code, it is also **deprecated**.

Prototype Property is a property of a function that is set if the object is Constructor created. 

Also object do not have prototype property.

[/slide]

[slide]

# Accessing Private Properties

To have private properties, we use the prefix `#`.

For getting private properties we use **object.property.get**NameOfProperty. 

For setting it is almost the same, but instead of **get** we write **set**, here is how it will look: **object.property.set** NameOfProperty.

Here how both of them will look like:

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

Here is a simple example of prototype chain:

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

Firstly we create a function **Sum** with parameter **y**. 

To it we attach property **x** and method **calculate**, which sums **x**, **y** and **z**.

After that we call **Sum** and `console.log()` **calculate**.

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

Write a function which receives a **class** and attaches to it a property **species** and a function `toSpeciesString()`.

When called, the function returns a string with format:

`I am a <species>. <toString()>`

The function `toString()` is called from the current instance (call using **this**).

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

Write a function which receives a **class** and attaches to it a property **species** and a function `toSpeciesString()`.

When called, the function returns a string with format:

`I am a <species>. <toString()>`

The function `toString()` is called from the current instance (call using **this**).

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
