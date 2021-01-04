[slide]
# Definition and Structure

**Design patterns** are like blueprints for solutions to common, recurring problems that programmers face during development. The main benefit of knowing and using design patterns is that they have been developed and tested over the years by many different people to solve similar issues in many different software languages. These patterns are not necessarily unique to the language you're using. Rather, they are design principles that can be applied almost universally.

**Design patterns** improve code reusability, readability, and help avoid the need for extensive refactoring. They are already proven, optimized, short solutions to given problems. They are not complete solutions but rather tried and tested approaches to solving problems and writing elegant implementations.

[/slide]

[slide]
# What is a Pattern?

Patterns are **general solutions** to common problems that occur in software design. They save time spent on software architecture as they provide guidelines on how to design applications, without the need to come up with new ways that are not necessarily proven to work well in the long run.

**Design patterns** allow developers to benefit from the previous experience and knowledge of other developers by applying common principles in software design.

Understanding and using **design patterns** helps facilitate better communication n between developers, providing a common language with terms that are understood universally by people in the software development field.

"Each pattern describes a problem which occurs over and over again in our environment and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it in the same way twice." - Christopher Alexander (1977), A Pattern Language: Towns, Buildings, Construction.

[/slide]

[slide]

# Categories of Design Patterns

Design patterns can be divided into three categories:
- **Creational** - deal with object creation
- **Structural** - deal with the relationships between entities
- **Behavioral** - describe the interaction between objects that are not similar and the division of responsibilities among them.

[/slide]

[slide]

# Creational Design Patterns

Creational design patterns focus on the mechanisms for creating objects to solve specific problems by controlling the object creation process. They aid the writing of scalable code.

Let us look at some of the most common design patterns from this category:

- **Constructor** - this design pattern is class-based and is one of the most commonly used. It is a basic language construct and it is often used when creating objects of any kind.

```js live
class Book {
  constructor(title, author) {
    //setting the values of properties
    this.title = title;
    this.author = author;

    // declaring a method inside the class
    this.getInfo = function() {
      return `${this.title} is novel by ${this.author}`;
    };
  }
}

// creating new instances of Hero
let harryPotter = new Book('Harry Potter', 'J. K. Rowling');

console.log(harryPotter.getInfo());
```

- **Factory** - the **factory pattern** is also widely used in programming. It is another class-based pattern that deals with object creation. The main difference between this and the other creational patterns is that it does not require the use of constructors.

[image assetsSrc="design-patterns-01.png" /]

- **Prototype** - the **prototype pattern** is used to create objects that serve as a blueprint for other objects. This is achieved through prototypical inheritance which is natively supported in JavaScript. You are in effect copying existing objects without your code having to depend on their classes. The objects are clones rather than created by using constructors, which improves performance. This is typically used when the creation of an object through the constructor method would be time-consuming.

[image assetsSrc="design-patterns-02.png" /]

- **Singleton** - the **singleton pattern** is when you want to have a single instance of an object and provide global access to all clients that need to use it from a single endpoint.

[image assetsSrc="design-patterns-03.png" /]

[/slide]

[slide]
# Structural Design Patterns

**Structural design patterns** focus on object composition to form larger structures, expanding existing functionality. These patterns are concerned with how classes inherit from each other and how classes are composed of other classes. By implementing these patterns you can introduce new functionalities without changing the existing ones.

Some of the most common structural design patterns are:

- **Decorator** - used when you need to add functionality to an existing class without the risk of introducing bugs into existing implementations of that class. Imagine you have a monumental class that is used throughout your application and changing anything inside it would affect the entire application. 

[image assetsSrc="design-patterns-04.png" /]


- **Facade** - the **facade pattern** is used a lot in multi-layer applications where only certain logic and functionality needs to be exposed to different clients, shielding them from any complex business logic that clients do not need to be concerned with. It is also useful in refactoring and almost always improves code usability.

[image assetsSrc="design-patterns-05.png" /]

- **Adapter** - the **adapter pattern** allows connecting programming components that normally cannot work together by translating one interface to another. 

[image assetsSrc="design-patterns-06.png" /]

- **Proxy** - the **proxy pattern** is implemented when an object acts as a surrogate or placeholder for another. Typically the proxy object does extend the original object. It is a placeholder with the possibility of adding some checks that help control access to the object that it is a proxy for.

[image assetsSrc="design-patterns-07.png" /]

[/slide]

[slide]
# Behavioral Design Patterns

**Behavioral design patterns** are patterns that focus on improving communication between dissimilar objects.

Some commonly used patterns in this category are:

- **Iterator** - provides a way to access the elements of a collection (aggregate object) without exposing the underlying representation. This is also known as "cursor".

[image assetsSrc="design-patterns-08.png" /]

- **Mediator** - this pattern is implemented by having a single object be responsible for the communication between various other modules of the application to avoid too many direct relationships between components.

[image assetsSrc="design-patterns-09.png" /]


- **Observer** - this is a pattern in which an object called **subject** maintains a list of dependant objects and notifies them of any state changes, usually through calling one of their methods. The **Observer** pattern facilitates good object-oriented design and promotes loose coupling.

[image assetsSrc="design-patterns-10.png" /]

- **Visitor** - this pattern is useful when there is a collection of objects and new functionality needs to be added to them without changing the objects themselves. The new logic is added to a new object called the **visitor**.

[image assetsSrc="design-patterns-11.png" /]


[/slide]

[slide]
# Benefits of Design Patterns

- Design patterns **help solve issues in software development** by relying on **proven techniques**, benefitting from the collective experience of other programmers.

- The design pattern names and **established vocabulary** that comes with them aids in the **communication** between developers.

- Design patterns are robust approaches to solving problems that can be adapted to suit the needs of the specific case where they are used. They are not set in stone and if a pattern does not work for you, you can always modify it.

- They improve the software development process and can **reduce errors**.

- Design patterns are **scalable** and **reusable**.

- Can **speed up development**, less time is spent on finding solutions.

[/slide]

[slide]
# Drawbacks of Design Patterns

[image assetsSrc="design-patterns-12.jpg" /]

- design patterns come with consequences and if applied incorrectly or without regard to how the application might change in the future they can cause problems.

- Patterns do not provide us with concrete code to use, they simply provide a possible approach to take when designing applications.

- They look simple, but they have intricacies and can be misunderstood and applied incorrectly. They should be used only if their benefits outweigh the cost of using them.

[/slide]