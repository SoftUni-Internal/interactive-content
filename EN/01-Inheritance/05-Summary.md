[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-38-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Inheritance is a powerful tool for **code reuse**

```java
class Person { … }

class Student extends Person { … }
class Employee extends Person { … }
```

- **Subclass inherits** members from **Superclass**

```java
class Person { … } // Base Class/Parent Class

class Student extends Person { … }  // Subclass/Child
class Employee extends Person { … } // Subclass/Child
```

- Subclass can **override** methods

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

- Look for classes with the **same role**

- Look for **IS-A** and **IS-A-SUBSTITUT**E for relationship

- Consider **Composition** and **Delegation** instead


## In the next lesson, you will learn:


- What Inheritance and Interfaces are 

- Abstraction as an OOP Principle

- How to use Interfaces

- What Abstract Classes are

- Interfaces vs Abstract Classes

[/slide]
