[slide]
# Summary

[vimeo-video]
[stream language="EN" videoId="485444743/fd95b4883a" default /]
[stream language="RO" videoId="485444743/fd95b4883a"  /]
[/video-vimeo]

# In this lesson you learnt:

- What are classes in Java?
    - Template from which objects are created
    - Object is an instance of a class
```java
class Animal { 
    
}
Animal animal = new Animal();
```
- Class components:
    - Fields 
        - Field is a variable inside a class
```java
class Animal { 
    String name;
    Int age;
}
```
- Methods 
    - Store executable code that manipulate state
```java
class Animal { 
    String name;
    Int age;

    void bark(){ ... }
}
```
- Constructors
    - Special type of method which is used to initialize the object
    - Constructors are invoked when creating new class instances
    - Set object's initial state
```java
class Animal { 
    String name;
    Int age;

    public Animal(String name, int age) {
    this.name = name;
    this.age = age;
  }

    void bark(){ ... }
}
Animal animal = new Animal("Rex", 5);
```

# In the next lesson, you will learn:

- Generics in Java 
- Generics Syntax
- Generic Classes and Interfaces
- Generic Methods
- Type Erasure, Type Parameter Bounds


[/slide]