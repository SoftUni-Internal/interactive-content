# Fundamental Software Engineering Concepts

[slide]
# Math Concepts in Software Development

**Simple mathematical concepts** are often needed and applied in software development.

This doesn't mean that software developers should be strong mathematicians, but they should be familiar with the **basic math concepts at school level**.

Developers don't need to prove theorems or solve differential equations, but they need to understand **coordinate systems**, they need to know what a function is, they need to be able to perform **simple calculations**, and they need to have well-developed **algorithmic thinking**, which is like the logical thinking used in math.

**School-level math is enough for most developers**, unless they are involved with computer graphics, machine learning or other math-intensive specialization.

Below are the most important **mathematical concepts** related to programming:

**Coordinate systems** and **graphical objects** with their size, position and other numerical characteristics are used in computer graphics and user interface systems, such as `HTML` and `CSS`, `PDF`, `SVG` and others.

**Mathematical functions**, elements of lambda calculus, discrete functions and other simple mathematical transformations are used by developers when they write code, as part of the functional programming paradigm and some modern architectural approaches like "**serverless computations**".


**Vectors** and **matrices** may be used in graphics, machine learning, and everywhere else.
In fact, developers are using vectors every day, because "**vector**" is the mathematical name of "**arrays and lists**".
"**Matrices**" is the mathematical name of "**tables**" that we know well from spreadsheet and Excel applications.

Finite state **automata** and **state machines** are used in parsers (which extract data from structured text), in process management and workflow management software and in interpreters and compilers.

**Statistics** concepts, such as probability distributions, statistical significance, hypothesis testing, and regression are widely used in data science and machine learning.

In machine learning, data science and artificial intelligence systems, math skills are more important.

But in traditional (mainstream) Web, mobile and back-end development, we need nothing more than **school-level math** and **logical thinking**.

**Algorithm complexity** is a math concept from the mathematical analysis, used to estimate the execution speed of the code, based on the approximation of the steps needed to be executed.

Developers need to learn the concept of "**time complexity**" and what is linear time, quadratic time, cubic time and logarithmic time, which is quite simple, and mathematics is not deeply involved.

**Mathematical modeling** is the art of translating problems from an application area into tractable **mathematical** or **formal** formulations whose theoretical, numerical and algorithmic analysis provides insight, answers, and guidance useful for the originating application.

**Mathematical modeling** is important skill, related to algorithmic thinking and developers with strong problem-solving skills learn how to use it at basic level.


This is an **example** of how basic **school-level mathematical skills** are used to **draw objects** using SVG (scalable vector graphics) – the vector graphics standard for the Web.

```
<svg width="500" height="250" style="background:lightgray">
  <rect x="100" y="50" width="200" height="100" rx="5" ry="5" 
  style="fill:red; stroke:black; stroke-width:5; opacity:0.7" />
</svg>
```
[image assetsSrc="SDC-example(1).png" /]

We draw a rectangle at certain **position** at the coordinate system, with certain **size**, border **width** and border **radius**.

Developers use similar concepts when they **create the user interface of their apps**, using `HTML` and `CSS` or `XAML` or other graphical representation technology.






[/slide]

[slide]

# Object-Oriented Programming (OOP)

**Object-oriented programming** (**OOP**) is the concept of using **classes** and **objects** to model the real world.

**Classes** are sets of **data fields**, together with **methods** (which are functionality to interact with the data fields and other objects).

**Classes** define the **structure of information objects**: the data they holds and the operation they can perform.
**Objects** are **instances of the classes**, holding certain values in their data fields.

At the **example** we have a definition of the **class "Rectangle"**:
```java
class Rectangle {

  int width, height;

  int CalcArea() {
      return width * height;
  }
}
```
It holds two **data fields**: **width** and **height**. – integer values.

It defines a **method**, holding the code to **calculate the area** of the rectangle.

This is the **class definition** and the programming language here doesn’t matter.
```java
class Rectangle{

}
```
These are the definitions of the **data fields**, which the class holds in each object.
```java
int width, height;
```

These are the methods of the class: the operations or actions that objects of this class can do.
```java
int CalcArea() {
      return width * height;
  }
```
We can create several objects of this class "Rectangle" every with different width and height, for examlple:

```java 
Rectangle( 5, 6 );

Rectangle( 6, 4 );

Rectangle( 7, 3 );
```

In the example above we have **several objects** of this class "**Rectangle**".

The **first object** is a rectangle of **width 5** and **height 6**.

Another **object** has **width 6** and **height 4**.

Some other **object** has **width 7** and **height 3**.

We have **one class "Rectangle"** and **3 objects** (or instances) of this class.

The **class** holds the definition (the specification, the model, the template) for the objects.

It defines the **data fields** and **methods** and more details (in some cases).

Classes don't hold data. They hold **data definitions** and **operation definitions**.

**Objects hold values** for the data fields in the class.

Objects of class "Rectangle" **hold data** about **certain rectangle**.

Typically one class has **multiple objects** (or instances).

**Classes** and **objects** are the building blocks of the **object-oriented programming (OOP)** and they come together with some other OOP concepts like **abstraction**, **interfaces**, **data encapsulation**, **inheritance**, **polymorphism** and **exception handling**.

## Inheritance and Interfaces

**Inheritance** and **Interfaces** are two other major concepts in the object-oriented programming.

**Inheritance** allows classes to **inherit data and functionality** from a **parent class** (also called "**base class**").

When a class inherits another class, the **parent class fields** are merged with the **child class fields** and they together form the **set of data fields** for the child class.

**Interfaces** defines **abstract actions**.

These are actions to be **implemented in the descendent classes**.

Interfaces define a **set of empty (or abstract) methods** (or actions), which shall be obligatory implemented in the child classes.

Interfaces are also called "**contracts**", because they define certain set of functionalities, a contract to implement certain methods.

**Abstract classes** are used to model abstractions.

For example, the class **Figure** is not a concrete figure like square or rectangle, but the concept or the abstraction of "figure".

Abstract classes defines **data** + **actions** (or normal methods) + **abstract actions** (or empty methods).

Abstract classes are **designed to be inherited** (or extended).

**Concrete classes** like **Circle** and **Rectangle** represent real entities, not abstractions.

Concrete classes define data fields + concrete functionality (methods).

They can **implement interfaces** and **inherit abstract and other classes**.





[/slide]

[slide]

# Functional Programming



[/slide]

[slide]

# Data Structures

[/slide]

[slide]

# Data Structures and Algorithms

[/slide]

[slide]

# Component-Based Developmentand Event-Driven Programming

[/slide]

[slide]

# Networking and Internet Protocols

[/slide]

[slide]

# Asynchronous Programming

[/slide]
