[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-40-conclusion-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Classes are templates from which objects are created
    - class instances are called objects
    
```java
class Animal { 
    
}
Animal animal = new Animal();
```

- Class variables are called fields

```java
class Animal { 
    String name;
    Int age;
}
```

- Methods store executable code
    - they are used to manipulate the state

```java
class Animal { 
    String name;
    Int age;

    void bark(){ ... }
}
```

- Constructors are special methods used to initialize objects
    - constructors are invoked when creating new class instances
    - they set the object's initial state
    
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

## In the next lesson you will learn:

- Generics in Java 
    - syntax
    - classes and interfaces
    - generic methods
- Type erasure
- Type parameter bounds


[/slide]

