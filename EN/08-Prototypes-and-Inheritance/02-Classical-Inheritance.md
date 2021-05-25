# Classical Inheritance

[slide hideTitle]

# Traditional Classes

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-9-10-classical-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Classes are **blueprints** for creating objects.

When they are **instantiated**, a **copy** of the class is created and becomes the current instance. 

Classes can **inherit** each other 

The parent class is **copied** to the child class.

They have properties and methods that can be **public**, **private**, or **protected**.

When the properties are **public**, they are visible from everywhere in the code.

If they are **private**, they are visible only in the class scope.

**Protected** properties can be used in the class scope and its children.

[/slide]

[slide hideTitle]

# Class Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-11-12-13-class-inheritance-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **extends** keyword is used to create a child class from the parent class.

When a class **extends** a parent, they **inherit** its data and methods.

Child classes can:

- Add **properties**
- Add or replace **methods**
- Add or replace **accessor** properties

Here is an **example**:

```js live
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
}

let person = new Person('John', 'john@gmail.com');
console.log(`Person: ${person.name} (${person.email})`);

let teacher = new Teacher('Joe', 'joe@yahoo.com', 'JavaScript');
console.log(`Teacher: ${teacher.name} (${teacher.email}), teaches ${teacher.subject}`);
```

In this example, we create two classes. 

The **Person** class is the **parent** class, and the **Teacher** class is the **child** class. 

The **Person** class takes a **name** and an **email** as parameters.

In the **Teacher** class, we inherit the parameters from the **Person** class. 

Also, add another parameter to the **Teacher** class, called **subject**. 

In the first `console.log()`, we output the **Person** with its parameters: **name** and **email**.

In the second, we print to the console the **Teacher** object with its parameters.

[/slide]

[slide hideTitle]

# Classes in JavaScript

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-14-15-classes-in-javascript-class-syntax-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In JavaScript, classes are **based** on **prototype inheritance**.

- They **do not** introduce a new inheritance model to JavaScript

Classes in JavaScript **delegate blueprints** rather than **creating them**.

Not all methods will be copied when a class is inherited.  

Parent classes **delegate** the methods to their children, and the **keys**, and their **values**, are shared by **reference**.

If a method is not **declared** in the child instance, we will call it from the **parent** instance. 

Here is an **example** of using classes:


```js live
class Person {
    constructor(who) {
        this.me = who;
    }
    identify() {
        return 'I am ' + this.me;
    }
}

class Man extends Person {
    constructor(who) {
        super(who);
    }
    speak() {
        console.log('Hello, ' + this.identify() + '.');
    }
}

let John = new Man('John');
let Joe = new Man('Joe');
John.speak();
Joe.speak();
```

In this example, the "**Man**" class inherits the properties and the methods from the **Person** class.

From "**Man**", we can access the parameters and methods of the **Person** class. 

In the `speak()` method, we use the **identify** method, inherited from the **Person** class.

[/slide]


[slide hideTitle]

# Prototype Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-16-prototype-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us see how it will look with **functions**:

```js live
function Person(who) {
    this.me = who;
}
Person.prototype.identify = function() {
    return 'I am ' + this.me;
};

function Man(who) {
    Person.call(this, who);
}

Man.prototype = Object.create(Person.prototype);

Man.prototype.speak = function() {
    console.log('Hello, ' + this.identify() + '.');
};

let john = new Man('John');
let joe = new Man('Joe');
john.speak();
joe.speak();
```

In this example, we create a **Person** with a parameter **who**. 

We attach another function called **identify** to the **Person** prototype. 

After that, we create the **Man** function and **inherited** the **Person** prototype from the "**Man**" function. 

We attach a function called **speak** to the prototype of "**Man**".

In the end, the result is identical to the classes and inheritance example we saw before.

[/slide]
