[slide]

# Defining Simple Classes

A class is the **basic building block of an object-oriented language** such as Java.

Everything in Java is associated with **classes** and **objects**, along with its attributes and **methods**. 

For example: in real life, a **car is an object**. 

The car has **attributes**, such as **weight** and **colour**, and **methods**, such as **drive** and **brake**.

A **class is a template** that describes the **data** and **behaviour** associated with instances of that class.

When you instantiate a class you create an object that looks and feels like other instances of the same class. 

The data (**attributes**) associated with a class or object is stored in **variables**. 

The **behaviour** associated with a class or object is implemented with **methods**. 

## Class components

When defining class, it contains only those components of a class declaration that are required.

The obligatory components are:

- Keyword - `class`
- Class name
- Class body - between `{}`

Not obligatory, but credential, components are:

- Class fields
- Constructor
- Getters and Setters
- Class methods

Here is an example of a class Car which has two fields (**brand, model**) and one void method - `start()`.

```java
class Car {

    String brand;
    String model;

    void start(){ ... }
}
```
## Naming Classes

Below are the class naming rules of java programming language. 

They must be followed while developing software in java for good maintenance and readability of code. 

Class names should be nouns, in mixed case with the first letter of each internal word capitalized. 

Try to keep your class names simple and descriptive. 

Use whole words-avoid acronyms and abbreviations (unless the abbreviation is much more widely used than the long form, such as URL or HTML).

## Creating an Object

Creating an object of a defined class is called instantiation.

The instance is the object itself, which is created runtime.

To create an object, specify the **class name**, followed by the **object name**, and use the keyword `new`:

```java
Car firstCar = new Car();
```

A class can have many instances (**objects**).

```java
Car firstCar = new Car();

Car secondCar = new Car();

Car thirdCar = new Car();
```

## Object Reference

The `new` operator instantiates a Class by allocating memory for a new object and returning a **reference** to that memory. 

A **reference** is an **address** that indicates where an object's variables and methods are stored.

A variable whose type is a class **contains a reference to an object** of the class (the address of the memory location where the object is allocated).

In Java, objects are constructed and allocated in the **Heap** memory.

So, we cannot store object in a variable, we can store only its **reference to this object**.

Variables whose type is a class are known as **reference variables** and they are stored in the **Stack** memory.

## Classes vs. Objects

| Classes | Objects |
| --- | --- |
| Class is a blueprint or template from which objects are created. | Object is an instance of a class. |
| Class is a group of similar objects. | Object is a real world entity such as pen, laptop, mobile, bed, keyboard, mouse, chair etc. |
| Class is a logical entity. | Object is a physical entity. |
| Class is declared using `class` keyword e.g. class Car{} | Object is created through `new` keyword mainly e.g. Car firstCar = new Car(); |
| Class is declared **once**. | Object is created **many times** as per requirement. | 
| Class **doesn't allocated memory** when it is created. | Object **allocates memory** when it is created. |
| There is only one way to define class in java using `class` keyword. | There are many ways to create object in java such as `new` keyword, `newInstance()` method, `clone()` method `factory` method and deserialization. |

[/slide]

