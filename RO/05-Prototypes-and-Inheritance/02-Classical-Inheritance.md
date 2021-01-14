# Classical Inheritance

[slide]
# Traditional Classes

Classes are **design patterns**. They are a kind of **blueprint**, so they **copy** themselves. 

That means after they are **instantiated**, they make a **copy** of the class to the **instance**. 

And when they are **inherited**, they make a **copy** from the **parent** to the **child**.

## Class Inheritance

So classes **inherit**, also called **extend** other classes. 

When they **extend** a class, they **inherit** its data and methods. To do that, we use the keyword **extends**.

Child class can:

-  Add **properties**, also called **data**.
-  Add or replace **methods**.
-  Add or replace **accessor** properties.

By replace, we mean that it is more likely shadowing because we can not override the original part.

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

In the first `console.log`, we see the **person** with its parameters which are, **name** and **email**.

In the second class, we inherit the parent's class parameters and add a third one, which is **subject**.

[/slide]

[slide]

# Classes in JavaScript

Classes in JavaScript are **based** on **prototype** **inheritance**.

And they are **sugary** **syntax** over the existing one.

They **do** **not** introduce a new inheritance model to JS. Classes in JS **delegate** rather than making **blueprints**.

The classes in JS does not make a **copy** of all **inherited** methods.

They **delegate** them, and if it is not **pre-declared** in this instance, it is called from the **parent** instance. 

The **keys** and the **values** are shared by **references**

here is an example of using classes:

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

In this example, we have two classes: `Foo` and `Bar`. 

`Bar` inherits `Foo`. 

From `Bar`, we can access `Foo's` parameters and method. 

As you can see, we use the identify method, which is from foo.

And now let's see how it will be with functions:

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

In this example, we create the function **foo** with parameter **who**. 

To its prototype, we attach another function, called **identify**. 

After that, we created the **Bar** function. 

We continue with **inheriting** the foo's prototype from `Bar` and attaching a function to the `Bar` prototype, called **speak**.

In the end, we see that in both ways the result will be identical.

[/slide]
