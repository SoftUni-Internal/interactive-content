[slide]

# Abstract Classes

Lets take a look now at **Abstract classes** in Java!

We know from the last lesson that **abstract classes cannot** be instanciated.

```java
public abstract class Animal {} 
public class Cat extends Animal {}
Animal cat = new Animal(); // Compile time error
Animal cat = new Cat(); // Polymorphism
```

An abstract class **may** or **may not** have **abstract methods** inside.

If we need to use the abstract class we must inherit it.

An **abstract class** has an "is-a" type relationship with our subclasses. 

So for instance, we could have an **abstract** class Animal which has stuff any animal has (like a **eat** or **walk** function), and then a class Cat. 

Every cat is a animal, but not all animals are cats.

The main goal of an abstract class is to provide shared implementation of common behaviour - promoting the **reuse of code**.



[/slide]

[slide hideTitle]


# Problem: Shapes


[/slide]