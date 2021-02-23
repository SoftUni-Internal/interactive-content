[slide hideTitle]
# Summary

[vimeo-video]
[stream language="EN" videoId="485444743/fd95b4883a" default /]
[stream language="RO" videoId="485444743/fd95b4883a"  /]
[/video-vimeo]

# In this lesson you learned:

- Classes are templates from which objects are created
    - class instances are called objects
    
```java
class Animal { 
    
}
Animal animal = new Animal();
```

- The variables inside a class are called fields

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

- Constructors are a special methods, used to initialize objects
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

## In the next lesson, you will learn:

- Generics in Java 
    - syntax
    - classes and interfaces
    - generic methods
- Type erasure
- Type parameter bounds


[/slide]
