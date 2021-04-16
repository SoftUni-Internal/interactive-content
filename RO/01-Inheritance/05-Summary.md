[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-38-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Inheritance is a powerful tool simplifying **code reuse**

```java
class Person { … }

class Student extends Person { … }
class Employee extends Person { … }
```

- A **Subclass inherits** members from a **Superclass**

```java
class Person { … } // Base Class/Parent Class

class Student extends Person { … }  // Subclass/Child
class Employee extends Person { … } // Subclass/Child
```

- A Subclass can **override** methods

```java
public class Person {  
  public void sleep() { 
	System.out.println("Person sleeping"); } 
}

public class Student extends Person {
  @Override 
  public void sleep(){
	System.out.println("Student sleeping"); }
}
```
Types of code reuse:

- Classes with the **same role**

- Classes with **IS-A** or **IS-A-SUBSTITUTE** relationships

- **Composition** and **Delegation**


## In the next lesson you will learn:


- Inheritance and Interfaces
  * definition
  * use cases 
  
- Abstraction as an OOP Principle
- What abstract classes are
- Interfaces vs. Abstract Classes

[/slide]
