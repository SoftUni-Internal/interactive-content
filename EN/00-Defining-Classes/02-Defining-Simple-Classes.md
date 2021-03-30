# Defining Classes

[slide hideTitle]
# Defining Simple Classes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-3-4-defining-classes-defining-simple-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Classes are the **basic building block** of any **object-oriented language**, such as Java.

Everything in Java is associated with **classes** and **objects**, along with its attributes and **methods**. 

For example - in real life, a **car is an object**:

```java
public class Car {

    String color;
    int weight;

    void drive(){ ... }

    void brake(){ ... }
}
```

The car has **attributes**, such as **weight** and **color**, and what could be described as **methods** in coding terms - such as **speed up** and **brake**.

A **class** is a **template** that describes the **data** and **behavior** associated with instances that can be created from that class.

When you instantiate a class you create an object that holds the same attributes and behavior as all other instances of this same class. 

The data (**attributes**) associated with a class or an object is stored in **variables**. 

The **behavior** associated with a class or object is implemented using **methods**. 

[/slide]

[slide hideTitle]
# Naming Classes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-5-Naming-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are naming conventions that should be followed when developing software.

This is done for easier code maintenance and improves readability.

Class names should be nouns, in **MixedCase** with the first letter of each word capitalized. 

For example:

```java
class CarMaintenanceHistory { ... }
// A good example of a class name
```

```java
class Carhp { ... }
// A bad example of naming a class
```

Try to keep your class names simple and descriptive. 

Use whole words. 

Avoid acronyms and abbreviations (unless the abbreviation is much more widely used than the full form, such as URL or HTML).

[/slide]

[slide hideTitle]
# Class Members

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-6-class-members-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When a class is defined, it contains only the members of a class that are required for its declaration.

The required members are:

- Keyword - `class`
- Class name
- Class body - placed in: `{}`

Some optional but nvertheless - frequently used members are:

- Class fields
- Constructor
- Getters and Setters
- Class methods

Here is an example of a class called "Car" that has two fields (**brand, model**) and one void method - `start()`.

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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-7-Creating-an-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Creating an object of a class is called **instantiation**.

The instance is the object itself, which is created at runtime.

To create an object, we specify the **class name**, followed by the **object name**, and the `new` keyword:

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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-8-Object-reference-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `new` operator instantiates a class by allocating memory for a new object and returns a **reference** to that memory. 

A **reference** is an **address** that indicates where an object's variables and methods are stored.

A variable whose type is a class **contains a reference to an object** of the class (the address of the memory location where the object is allocated).

In Java, objects are constructed and allocated in the **Heap** memory.

This means that we cannot store an object in a variable, we can only store a **reference to the object**.

Variables whose type is a class are known as **reference variables** and they are stored in the **Stack** memory.

For example:

```java
class Car {

    int horsePower;
}
    
Car sportsCar = new Car()
```

- We saved `sportsCar(4860c54d)` in the "**Stack**" memory, which points to an address in the "**Heap**" memory

- In the `Heap` memory, we saved:

```java
// for object sportsCar(4860c54d):
type = Car;
int horsePower = 0;
``` 

[/slide]

[slide hideTitle]
# Classes vs. Objects

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-9-classes-vs-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

| Class | Object |
| --- | --- |
| A blueprint or template from which objects are created. | An instance of a class. |
| A group of similar objects. | A real-world entity such as a pen, laptop, mobile, bed, keyboard, mouse, chair, etc. |
| A logical entity. | A physical entity. |
| Declared using the `class` keyword e.g. class `Car{}` | Created mainly through the `new` keyword -  e.g. `Car firstCar = new Car();` |
| Declared **once**. | Produced as **many times** as required. | 
| **Does not allocate memory** when it is created. | **Allocates memory** when it is created. |
| Only one way to define in Java - using the `class` keyword. | Can be instantiated using: the `new` keyword, the `newInstance()` method, the `clone()` method, a `factory` method and deserialization. |
[/slide]



