[slide]
# Classes

Classes and objects are the **two main aspects** of object-orientated programming. 

Everything in Java is associated with classes and objects, along with its fields and methods.

In programming classes provide the **structure for describing and creating objects**. 

It builds the specification of a given type object from the real-world.


[/slide]

[slide]
# Real Life Example

All entities with similar characteristics can be arranged in categories.

For example all animals are grouped in a single `class` and each animal is an `object` of that class.

[image assetsSrc="ObjectsAndClasses_RealLifeExample.png" /]

Each animal has states like type, age, color, preferred food, etc. and behavior like eat, drink water, move, make sound, etc. 

A class is like an object constructor, that contains all of their similar characteristics. It is a "blueprint" for creating objects.


[/slide]

[slide]
# Declaring Class

The class **body** (the area between the braces) contains all the code that provides for the life cycle of the objects created from class:
- **Fields** that provide the state of the class and its objects. Example: 
  - String type; 
  - int age;

- **Constructors** for initializing new objects.

- **Getters and Setters** for accessing and changing the fields. Example: 
  - getType(); 
  - setType(String type);
  - getAge();
  - setAge(int age);
 
- **Methods** to implement the behavior of the class and its objects. Example: 
  - makeSound();


```java
public class MyClass {
    // fields
    // constructors
    // getters and setters
    // other methods
}
```

```java
public class Animal {
    // fields
    private String type;
    private int age;

    // constructors
    public Animal() {
    }

    public Animal(String type) {
        this.type = type;
    }

    // getters and setters
    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // methods
    public void makeSound() {
        System.out.println("The animal is making sounds.");
    }
}
```

[/slide]