# SOLID Principles

[slide hideTitle]

# Single Responsibility Principle

6-SOLID-Principles
7-Single-Responsibility-Principle

## SOLID Overview

The **SOLID** principles, introduced by the American software engineer and instructor **Robert Cecil Martin**, are the five most important principles in **object-oriented programming**.

**SOLID** is an acronym for:

- **S**: Single responsibility principle
- **O**: Open-closed principle
- **L**: Liskov substitution principle
- **I**: Interface segregation principle
- **D**: Dependency inversion principle

The SOLID principles form a core **philosophy** for methodologies such as **Agile** development and **Adaptive** software development.

When **combined**, these principles make our applications easier to **maintain** and **extend**.

## Single Responsibility Principle

It states that **every class** should have **responsibility** for **only one** part of a program's functionality.

In other words, class behavior should remind **unchanged during the life of our application**.

In the Angular context, a certain component in **an app should have only one mission**, which is to represent **certain data together, using templates**, to ensure the communication between a **component and template**. 

A component should **not** make an HTTP call, then modify data, then send those data, etc.

This job is performed by **services**, which will be the topic of the next section.

[/slide]

[slide hideTitle]

# Open-Closed Principle

8-Open-Closed-Principle

The **Open-Closed Principle** states that a class, a module, or a function should be **open for extension**, but **closed for modification**.

This means is that as soon as a given **software entity** is **in use** by clients, we **should not change its behavior**.

However, it should be possible to **extend** it as long as adding a new functionality **does not require changes** in the already established codebase.

**Bugfixes** are an **exception** to this rule and we are **allowed** to **modify** the source code directly for debugging purposes.

By following the Open-Closed Principle, a component is more likely to contain **maintainable** and **reusable** code.

If we decide to **break** this principle and modify functionality that is already deployed and being used by clients, this change can have a **profound impact** on the application and its users.

[/slide]

[slide hideTitle]

# Liskov Substitution Principle

9-Liskov-Substitution-Principle

Introduced by Barbara Liskov in 1987, the **Liskov substitution principle** states that **child classes** should **never break** the **parent class' type definitions**.

In simple terms, derived types have to be **completely substitutable** for their base types.

Derived classes that follow this rule only **extend** the functionality of the base class.

Child classes also **must not remove** the behavior of their **parent class**.

[/slide]

[slide hideTitle]

# Interface Segregation Principle

10-Interface-Segregation-Principle

The **Interface Segregation Principle**, abbreviated as (ISP), states that clients **should not** be forced to depend on **methods they do not use**.

The main objective of ISP is to split the so-called **"fat" interfaces** that are very large into smaller and more specific **"role" interfaces**.
 
By doing so, **clients** will only have to know about the **methods** that are of interest to **them**.

The main intention of ISP is to keep a system **decoupled**, resulting in easier **refactoring**, **modification**, and **redeployment**.

[/slide]

[slide hideTitle]

# Dependency Inversion Principle

11-12-Dependency-Inversion-Principle

The **Dependency Inversion Principle** (DIP) states that:

- Both **high** and **low-level modules** should depend on **abstractions**, but high-level modules **should not depend** on low-level modules
- **Details(concretions)** should **depend** on abstractions, but abstractions should **not depend** on details

DIP changes the **direction** of the dependency and **splits it** between the high and the low levels.

[/slide]

[slide hideTitle]

# Dependency Inversion Principle: Abstractions and Concretions

DEMO

- **What are Abstractions?**

Abstraction is the process of **hiding all but the important data** about a specific object, to **increase efficiency** and **reduce complexity**.

Abstraction can be achieved by using **abstract classes** or **interfaces** to define what an implementing class **must** include.

```js
abstract class Person {
    firstName: string,
    lastName: string,
    age: number,
    city: string
}
```
A person can have **many more properties**, like eye color, gender, nationality, etc., but in **this context**, we need only these properties.

Any class that **inherits** the `Person` class **must include** the four **properties** with their respective **type**:

```js
class Brandon extends Person {
    firstName: string = 'Brandon',
    lastName: string = 'Charles',
    age: number = 29,
    city: string = 'Berlin'
}
```

We can create as **many objects as we need**, which will inherit the class `Person`, and all of them are **going to have the same four properties**. 

- **What are Concretions?**

Being the opposite of **Abstractions**, the current class contains the **full implementation** of an abstract class.

In the above example, the `Person` abstract class is a model for all other classes that will inherit it.

The classes that **inherit** it, like `Brandon` for example, are **Concretions**, which means that they contain the **implementation** of the `Person` abstract class.

[/slide]

[slide hideTitle]

# Dependency Injection

13-14-Dependency-Injection

**Dependency Injection** is a popular design pattern and one of Angular's **most important features**.

It allows us to **inject** dependencies, like a **framework** or a **database**, in different **components** across our applications.

Also referred to as **Inversion of Control**, Dependency Injection is the principle of separating **configuration** from **implementation**.

A **downside** of dependencies is that they **decrease code reuse**.


[/slide]

[slide hideTitle]

# Dependency Injection: Example


The following code is an example for dependency injection:

```js
private class ManageUsersService {
  constructor({ users }) {
    this.users = users
  }

  async findAllUsers() {
    return this.users.findAllUsers();
  }

  async addNewUser(user) {
    await this.users.addNewUser(user);
    alert('New user added');
  }
}

module.exports = ManageUsersService;

const ManageUsersService = new ManageUsersService({ users });
```

To inject a dependency in a **class**, we use the **constructor**, in which we can pass the users as parameters **one by one** or by a single **object**.

[/slide]

[slide hideTitle]

# Classic Violations

15-Classic-Violations

We **should not** use the `new` keyword inside the constructor or use **static** methods and properties.


```js
public class Car {
  public engine: Engine;
  public gearbox: Gearbox;

  constructor() {
    this.engine = new Engine('Honda F20C');
    this.gearbox = new Gearbox('NORD 215N');
  }
}
```

This will make our class **brittle**, **inflexible**, and **hard to test**.


[/slide]

[slide hideTitle]

# How to Fix?

16-How-to-Fix

We should always **add dependencies** through the **constructor**:

```js
constructor( public engine: Engine, public gearbox: Gearbox)
```

**We should not** create **dependencies** inside the **current** class.

Then, we can create as many new instances as we like:

```js
let carOne = new Car(
  new Engine('Audi N392'),
  new Gearbox('Stober JP34'));

let carTwo = new Car(
  new Engine('BMW RV371'),
  new Gearbox('BorgWarner NH83'));

```

[/slide]

[slide hideTitle]

# General Requirements

17-General-Requirements

To conclude, these are the requirements for the DI Pattern:

- Classes should **never** create dependencies themselves
  - they should be received from **external sources**
- We should **decouple** dependencies through constructor injection
- Our code should be **easier to test**

For additional information, visit [Angular's documentation](https://angular.io/guide/dependency-injection).

You can learn more about SOLID principles in JavaScript [here](https://aspiringcraftsman.com/2011/12/08/solid-javascript-single-responsibility-principle/).

[/slide]
