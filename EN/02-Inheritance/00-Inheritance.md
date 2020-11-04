[slide]
# Inheritance

**Inheritance is a mechanism by which it is possible to inherit attributes and methods from one class to another.**

- The class **giving its members** to its child class is called **Superclass** (Base Class, Parent class)
- The class **taking members** from its base class is called **Subclass** (Child class, Derived Class)

[image assetsSrc="inheritance-example(1).png" /]

[/slide]


[slide]
# Class Hierarchies

**Inheritance leads to hierarchies of classes and/or interfaces in an application:**

[image assetsSrc="inheritance-example(2).png" /]

[/slide]


[slide]
# Class Hierarchies – Java Collection

`Object` is at the root of Java Class Hierarchy

[image assetsSrc="inheritance-example(3).png" /]
[/slide]

[slide]
# Inheritance in Java

Java supports inheritance through **extends** keyword

```java
class Person { … }

class Student extends Person { … }
class Employee extends Person { … }
```
[image assetsSrc="inheritance-example(4).png" /]

## Derived Class

**Derived class taking all members from it's base class**

[image assetsSrc="inheritance-example(5).png" /]

[/slide]

[slide]
# Using Inherited Members

**You can access inherited members**

```java
class Person { public void sleep() { … } }
class Student extends Person { … }
class Employee extends Person { … }
```
```java
Student student = new Student();
student.sleep();
Employee employee = new Employee();
employee.sleep();
```

## Reusing Constructors

**Constructors are not inherited**

They can be **reused** by the child classes

```java
class Student extends Person {
  private School school;
  public Student(String name, School school) {
    super(name); //Constructor call should be first
    this.school = school;
  }
}
```
[/slide]

[slide]
# Thinking about Inheritance – Extends

- A derived class instance **contains** an instance of its base class

[image assetsSrc="inheritance-example(6).png" /]

## Inheritance has a transitive relation

```java
class Person { … }
class Student extends Person { … }
class CollegeStudent extends Student { … }
```

[image assetsSrc="inheritance-example(7).png" /]

[/slide]

[slide]
# Multiple Inheritance

**In Java there is no multiple inheritance**

Only **multiple interfaces can be implemented**

[image assetsSrc="inheritance-example(8).png" /]

[/slide]

[slide]
# Access to Base Class Members

**To access the base class members, use the `super` keyword**

```java
class Person { … }

class Employee extends Person { 
  public void fire(String reasons) { 
    System.out.println(
        super.name + 
        " got fired because " + reasons);
  }
}
```
[/slide]

[slide]
# Problem: Types of Inheritance

## Single Inheritance

[image assetsSrc="inheritance-example(9).png" /]

## Multiple Inheritance


[image assetsSrc="inheritance-example(10).png" /]

## Hierarchical Inheritance


[image assetsSrc="inheritance-example(11).png" /]

[/slide]





