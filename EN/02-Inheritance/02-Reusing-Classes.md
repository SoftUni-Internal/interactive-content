# Reusing Classes

[slide]
# Access Modifiers and Shadowing Variables

- Derived classes **can access all public** and **protected** members
- Derived classes can access **default** members **if in same package**
- **Private** fields **aren't inherited** in subclasses (can't be accesssed)

```java
class Person {
  protected String address;
  public void sleep();
  String name; //Can be accessed through other methods
  private String id;
}
```

## Shadowing Variables

- Derived classes **can hide** superclass variables

```java
class Person { protected int weight; }

class Patient extends Person {
  protected float weight; //hides int weight
  public void method() {
    double weight = 0.5d; //hides both
  }
}
```

## Shadowing Variables – Access

- Use **super** and **this** to specify member access

```java
class Person { protected int weight; }

class Patient extends Person {
  protected float weight;
  public void method() {
    double weight = 0.5d; //Local variable
    this.weight = 0.6f; //Instance member
    super.weight = 1; //Base class member
  }
}
```
[/slide]

[slide]
# Overriding Derived Methods

A **child class** can redefine existing methods

```java
public class Person {   public void sleep() { 
	System.out.println("Person sleeping"); } 
}
```
- Method in base class **must not be final**

```java
public class Student extends Person {
  @Override 
  public void sleep(){
	System.out.println("Student sleeping"); }
}
```
- Signature and return type **should match**

## Final Methods and Classes

- **final** – defines a method that **can't be overridden**

```java
public class Animal {
  public final void eat() { … }
}

public class Dog extends Animal { 
  
  @Override
  public void eat() {} // Error…
}
```

- **Inheriting from a final classes is forbidden**

```java
public final class Animal {
  …
}

public class Dog extends Animal { }      // Error…
public class MyString extends String { } // Error…
public class MyMath extends Math { }     // Error…
```

[/slide]

[slide]
# Inheritance Benefits 

## Abstraction

- One approach for providing abstraction

```java
Person person = new Person();
Student student = new Student();

List<Person> people = new ArrayList();

people.add(person);
people.add(student);
```
- Focus on **common properties**

[image assetsSrc="inheritance-example(13).png" /]

## Extension

- We can **extend a class** that we **can't otherwise change**

[image assetsSrc="inheritance-example(14).png" /]
[/slide]

[slide]
# Problem: Random Array List

[/slide]

[slide]
# Solution: Random Array List

[/slide]
