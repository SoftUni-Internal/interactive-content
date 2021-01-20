# Classical Inheritance

[slide hideTitle]

# Traditional Classes

Classes are **blueprints** for creating objects.

That means after they are **instantiated**, a **copy** of the class is created and this becomes a new object **instance**. 

When a class **inherits** from another class, the properties and methods of the parent class are inherited.

[/slide]

[slide hideTitle]
# Class Inheritance

The **extends** keyword is used to create a child class from the parent class.

When a class **extends** a parent, they **inherit** its data and methods.

Child classes can:

-  Add **properties**, also called **data**.
-  Add or replace **methods**.
-  Add or replace **accessor** properties.

Here is an example:

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

let p = new Person('John', 'john@gmail.com');
console.log(`Person: ${p.name} (${p.email})`);

let t = new Teacher('Joe', 'joe@yahoo.com', 'JavaScript');
console.log(`Teacher: ${t.name} (${t.email}), teaches ${t.subject}`);
```

In this example, we create two classes. The **Person** class is the **parent** one, and the Teacher is the **child** class. 

In the first `console.log`, we output the **person** with its parameters which are, **name** and **email**.

In the second class, we inherit the parent's class parameters and add a third one, which is **subject**.

   [/slide]

[slide hideTitle]

# Classes in JavaScript

Classes in JavaScript are **based** on **prototype** **inheritance**.

They **do** **not** introduce a new inheritance model to JavaScript. Classes in JavaScript **delegate** rather than create **blueprints**. When inheriting not all methods are copied. 

Parent classes **delegate** the methods to their children, and if a method is not **declared** in the child instance, it is called from the **parent** instance. 

**Keys** and **values** are shared by **reference**.

Here is an example of using classes:

```js live
class Foo {
   constructor(who) {
      this.me = who;
   }
   identify() {
      return 'I am ' + this.me;
   }
}

class Bar extends Foo {
   constructor(who) {
      super(who);
   }
   speak() {
      console.log('Hello, ' + this.identify() + '.');
   }
}

let b1 = new Bar('b1');
let b2 = new Bar('b2');
b1.speak();
b2.speak();
```


[/slide]


[slide hideTitle]

# Prototype Inheritance

In this example, we have two classes: `Foo` and `Bar`. 

`Bar` inherits from `Foo`. 

We can access `Foo's` parameters and methods from `Bar`. 

As you can see, we use the `identify()` method from `Foo`.

Now let us see how it works when it comes to functions:

```js live
function Foo(who) {
   this.me = who;
}
Foo.prototype.identify = function () {
   return 'I am ' + this.me;
};

function Bar(who) {
   Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function () {
   console.log('Hello, ' + this.identify() + '.');
};

let b1 = new Bar('b1');
let b2 = new Bar('b2');
b1.speak();
b2.speak();
```

In this example, we create the function **foo** with a parameter **who**. 

We attach another function called **identify** to its prototype. 

After that, we create the **Bar** function. 

We continue with **inheriting** `Foo's` prototype from `Bar` and attaching a function to the `Bar` prototype, called **speak**.

The result is identical to the classes and inheritance example we saw before.

[/slide]
