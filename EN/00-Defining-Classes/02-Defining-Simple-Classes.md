# Defining Classes

[slide hideTitle]
# Defining Simple Classes

[vimeo-video]
[stream language="EN" videoId="485442096/a189ddb69d" default /]
[stream language="RO" videoId="485442096/a189ddb69d"  /]
[/video-vimeo]

Classes are the **basic building block** of any **object-oriented language**, such as Java.

Everything in Java is associated with **classes** and **objects**, along with its attributes and **methods**. 

For example - in real life, a **car is an object**:

```java
public class Car {

    String Color;
    int weight;

    void drive(){ ... }

    void brake(){ ... }
}
```

The car has **attributes**, such as **weight** and **colour**, and **methods**, such as **drive** and **brake**.

A **class** is a **template** that describes the **data** and ** behavior** associated with instances of that class.

When you instantiate a class you create an object that looks and feels like other instances of the same class. 

The data (**attributes**) associated with a class or object is stored in **variables**. 

The ** behavior** associated with a class or object is implemented with **methods**. 

[/slide]

[slide hideTitle]
# Naming Classes

[vimeo-video]
[stream language="EN" videoId="485442154/ee85ed312a" default /]
[stream language="RO" videoId="485442154/ee85ed312a"  /]
[/video-vimeo]

Below are the class naming rules of the Java programming language. 

They must be followed while developing software in Java for good maintenance and readability of code. 

Class names should be nouns, in mixed case with the first letter of each internal word capitalized. 

For example:

```java
class CarMaintenanceHistory { ... }
// Good naming 
```

```java
class Carhp { ... }
// Bad naming
```

Try to keep your class names simple and descriptive. 

Use the full forms of words. 

Avoid acronyms and abbreviations (unless the abbreviation is much more widely used than the full form, such as URL or HTML).

[/slide]

[slide hideTitle]
# Class Members

[vimeo-video]
[stream language="EN" videoId="485442219/c2168df12c" default /]
[stream language="RO" videoId="485442219/c2168df12c"  /]
[/video-vimeo]

When a class is defined, it contains only those members of a class declaration that are required.

The obligatory members are:

- Keyword - `class`
- Class name
- Class body - between `{}`

Not obligatory, but frequently used members are:

- Class fields
- Constructor
- Getters and Setters
- Class methods

Here is an example of a class Car that has two fields (**brand, model**) and one void method - `start()`.

```java
class Car {

    String brand;
    String model;

    void start(){ ... }
}
```
[/slide]

[slide hideTitle]
# Creating an Object

[vimeo-video]
[stream language="EN" videoId="485442316/481f9548ec" default /]
[stream language="RO" videoId="485442316/481f9548ec"  /]
[/video-vimeo]

Creating an object of a defined class is called **instantiation**.

The instance is the object itself, which is created at runtime.

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
[/slide]

[slide hideTitle]
# Object Reference

[vimeo-video]
[stream language="EN" videoId="485442368/4511d02327" default /]
[stream language="RO" videoId="485442368/4511d02327"  /]
[/video-vimeo]

The `new` operator instantiates a class by allocating memory for a new object and returning a **reference** to that memory. 

A **reference** is an **address** that indicates where an object's variables and methods are stored.

A variable whose type is a class **contains a reference to an object** of the class (the address of the memory location where the object is allocated).

In Java, objects are constructed and allocated in the **Heap** memory.

So, we cannot store an object in a variable, we can store only its **reference to this object**.

Variables whose type is a class are known as **reference variables** and they are stored in the **Stack** memory.

For example:

```java
class Car {

    int horsePower;
}
    
Car sportsCar = new Car()
```

- In the `Stack` memory, we saved `sportsCar(4860c54d)`, which points to the `Heap` memory

- In the `Heap` memory, we saved:

```java
// for object sportsCar(4860c54d):
type=Car;
int horsePower=0;
``` 

[/slide]

[slide hideTitle]
# Classes vs. Objects

[vimeo-video]
[stream language="EN" videoId="485442442/8c17b75c2e" default /]
[stream language="RO" videoId="485442442/8c17b75c2e"  /]
[/video-vimeo]

| Class | Object |
| --- | --- |
| A blueprint or template from which objects are created. | An instance of a class. |
| A group of similar objects. | A real-world entity such as a pen, laptop, mobile, bed, keyboard, mouse, chair, etc. |
| A logical entity. | A physical entity. |
| Declared using `class` keyword e.g. class Car{} | Created mainly through the `new` keyword -  e.g. `Car firstCar = new Car();` |
| Declared **once**. | Created as **many times** as required. | 
| **Does not allocate memory** when it is created. | **Allocates memory** when it is created. |
| Only one way to define in Java - using the `class` keyword. | Many ways to create in Java - `new` keyword, `newInstance()` method, `clone()` method `factory` method, and deserialization. |
[/slide]

