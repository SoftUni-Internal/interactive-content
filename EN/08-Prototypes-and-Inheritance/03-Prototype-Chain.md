# Prototype Chain

[slide hideTitle]

# What is a Prototype?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-19-20-what-is-a-prototype-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The prototype is an **object**, which has an **internal property**. 

It is used for implementing **prototype-based inheritance** and **shared properties**

All methods and properties will be inherited by reference in the **prototype-based inheritance**. 

They can be used by the **new object**, but they still belong to the prototype that they **came from**.

That creates a **link** between the **prototype** and the inherited **object**. 

In other words, properties and methods are **not copied** but inherited **by reference**.

All the inherited **properties** and **methods** come from the **prototype** property. 

This property allows us to add new **properties** to object **constructors**.

**For example:**

```js live
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
Person.prototype.nationality = function(nation) {
    console.log(
        `I am ${this.firstName} ${this.lastName}, ${this.age}, from ${nation}`
    );
};

let person = new Person('Joe', 'Jones', 20);

person.nationality('British');
```

Here we have a **Person** function and we add **nationality** to its **prototype** property.

[/slide]

[slide hideTitle]

# Prototype Methods

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-21-prototype-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We created classes manually through functions before **ES6 (ES2015)**.

After **ES6**, we have the sugar syntax with classes.

Here is an example of how they looked before ES6:

```js live
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
};

let rectangle = new Rectangle(3, 5);

let sum = rectangle.area();

console.log(sum);
```

In this example, we created a function called **Rectangle**, which accepts as parameters **width** and **height**.

To the **Rectangle** function, we attach another one that will multiply the **width** and the **height**.

The result will be printed to the console.

[/slide]

[slide hideTitle]

# Comparison with the New Syntax 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-22-comparison-with-the-new-syntax-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

After **ES6**, we can do the same thing from the previous slide with **classes**.

Here is how it will look like:

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

We create a class called **Rectangle**, which has a **width** and a **height** property.

The **Rectangle** class also has an `area()` method, which multiplies the **width** and the **height**.

We will output the result to the console.

[/slide]

[slide hideTitle]

# Object Creation

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-23-object-creation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are two ways to create an object. 

The first one is **Literal** creation, and the second is **Constructor** creation.

The **Constructor** creation gives us a reference to the **value** of the **prototype property**.

Also, we get an **internal link** to the `__proto__` property of the object. 

This property points at the **set** prototype.

[/slide]

[slide hideTitle]

# Object.create()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-18-object-create-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use `object.create()` when we want to **extend** an object. 

It uses an **existing** object **prototype** to **delegate** its features to a **new object**.

Here is an **example**:

```js live
const Dog = {
    name: 'Sparky',
    printInfo: function() {
        console.log(`My name is ${this.name}. My breed is ${this.breed}`);
    },
};
const MyDog = Object.create(Dog);
MyDog.name = 'Max';
MyDog.breed = 'shepherd';
MyDog.printInfo();
```

In this example, we declare an object called **Dog** with property **name** and a `printInfo()` method. 

After that, we created the new **MyDog** object with `Object.create()`, using the **Dog** object as a prototype. 

We set the **name** property of **MyDog** and we add a new property called **breed**, which is not present in the **Dog** object.

The result will be printed to the console.

[/slide]

[slide hideTitle]

# JavaScript Objects

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-24-javascript-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is an example of **literal creation**:

```js live
let Person = {
    me: 'I am John',
    speak: function() {
        console.log('Hello, ' + this.me + '.');
    },
};

Person.speak();
```

We create the **Person** object with a property **name** and a `speak()` method. 

The `speak()` method will print the result from the concatenation.

Have a look at the **constructor creation**:

```js live
function Person(name) {
    this.me = 'I am ' + name;
    this.speak = function() {
        return `Hello, ${this.me} .`;
    };
}

let person = new Person('John');

console.log(person.speak());
```

In this example, we write a function **Person**, in which we set the **name** property and the `speak()` method. 

The `speak()` method will return the result from the string interpolation.

Now that we created the **Person** object, we instantiate a new variable using the **new** keyword.

In the end, we print the result that the `speak()` method returns.

[/slide]

[slide hideTitle]

# Proto vs. Prototype Property

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-25-proto-vs-prototype-property-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There is a difference between the `__proto__` and the **prototype** properties.

## Proto

`__proto__`, is an **accessor** property of the object and **exposes** its **internal prototype**.

We should not use `__proto__` directly in our code because it is **deprecated**.

## Prototype

The **constructor function** sets the **Prototype** of an object.

Regular objects **do not** have the **prototype** property

The **prototype property** is a container which stores properties and methods that we can inherit.

[/slide]

[slide hideTitle]

# Accessing Private Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-26-accessing-private-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To mark properties as **private**, we need to **prefix** them with a **hashtag** `#`.

For **getting** private properties, we use `object.prototype.getNameOfProperty`.

Here is an example of **prototype.get**:

```js
   Person.prototype.getName = function () {
      return this.#name;
   };
```

When we want to **set** properties, it is almost the same, but, instead of **get**, we write **set**: `object.prototype.setNameOfProperty`

And here is an example of **prototype.set**:

```js
   Person.prototype.setName = function (x) {
      this.#name = name;
   };
```

[/slide]

[slide hideTitle]

# Prototype Chain Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-27-prototype-chain-simple-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
function MakeSentence(greet) {
    this.greet = greet;
}

MakeSentence.prototype.name = 'John';

MakeSentence.prototype.concatenate = function(punctuation) {
    return this.greet + ', I am ' + this.name + punctuation;
};

let makeSentence = new MakeSentence('Hi');
console.log(makeSentence.concatenate('!'));
```

We write a function called **MakeSentence**, with a parameter **greet**.

Then, we attach a property **name** and a method **concatenate** to the **MakeSentence** function. 

The **concatenate** method concatenates the **greet**, the **name** and the **punctuation** properties.

After that, we instantiate **MakeSentence** and print the **concatenate** method result to the console.

[/slide]


[slide hideTitle]

# Problem with Solution: Extending Prototype

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-29-solution-extending-prototype-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Extending Prototype" taskId="js-advanced-prototypes-and-inheritance-extending-prototype" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function extendPrototype(classToExtend) {
   // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write a function that receives a **class** and adds a property **species** and a function `toSpeciesString()` to it.

When called, the function returns a string in the format:

"**I am a** \<**species**\>. \<**toString()**\>"

The function `toString()` is called from the current instance (use the **this** keyword to call it).

## Input and Output

Your function will receive a **class** whose prototype it should extend. 

There is **NO** output, your function should only attach the properties to the given class's prototype.

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
        return \`\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})\`;
    \}
\}

class Teacher extends Person \{
    constructor(name, email, subject) \{
        super(name, email);
        this.subject = subject;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, subject: \\$\{this.subject\})\`;
    \}
\}

class Student extends Person \{
    constructor(name, email, course) \{
        super(name, email);
        this.course = course;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, course: \\$\{this.course\})\`;
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
        return \`\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})\`;
    \}
\}

class Teacher extends Person \{
    constructor(name, email, subject) \{
        super(name, email);
        this.subject = subject;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, subject: \\$\{this.subject\})\`;
    \}
\}

class Student extends Person \{
    constructor(name, email, course) \{
        super(name, email);
        this.course = course;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, course: \\$\{this.course\})\`;
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
        return \`\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})\`;
    \}
\}

class Teacher extends Person \{
    constructor(name, email, subject) \{
        super(name, email);
        this.subject = subject;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, subject: \\$\{this.subject\})\`;
    \}
\}

class Student extends Person \{
    constructor(name, email, course) \{
        super(name, email);
        this.course = course;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, course: \\$\{this.course\})\`;
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
