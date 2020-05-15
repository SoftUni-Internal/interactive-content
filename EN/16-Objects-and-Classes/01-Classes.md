[slide]
# Classes

Classes and objects are the **two main aspects** of object-orientated programming. 

Everything in Java is associated with classes and objects, along with its fields and methods.

In programming classes provide the **structure for describing and creating objects**. 

It builds specification of a given type objects from the real-world.


[/slide]

[slide]
# Real Life Example

All entities with similar characteristics can be arranged in categories.

For example all animals are grouped in a single `class` and each animal is an `object` of that class.

[image assetsSrc="ObjectsAndClasses_RealLifeExample.png" /]

Each animal has states like type, age, color, preferred food, ect. and behavior like eat, drink water, move, make sound, ect. 

A class is like an object constructor, that contains all of their similar characteristics. It is "blueprint" for creating objects.


[/slide]

[slide]
# Declaring Class

The class **body** (the area between the braces) contains all the code that provides for the life cycle of the objects created from class:
   - **Fields** that provide the state of the class and its objects.
   Example: 
     - day; 
     - month;
     - year;

   - **Constructors** for initializing new objects.

   - **Getters and Setters** for accessing and changing the fields.
   Example: 
     - getDay; 
     - setMonth;
     - getYear;
     - setYear;
   
   - **Methods** to implement the behavior of the class and its objects.
   Example: 
     - plusDay(count); 
     - subtract(date);

```java
class MyClass {
    // field
    // constructor
    // getters and setters
    // other methods
}
```
[/slide]