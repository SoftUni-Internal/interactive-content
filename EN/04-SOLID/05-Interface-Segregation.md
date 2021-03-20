[slide hideTitle]

# Interface Segregation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-20-21-isp-interface-segregation-principle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

"**A client should not be forced to implement an interface that is not used**".

This rule means that we should **break** our **interfaces** into many **smaller ones**, so they better satisfy the **exact needs of our clients**.

The goal of the **Interface Segregation Principle** is to minimize side consequences and repetition.

It achieves that by **dividing the software into multiple, independent parts**.

What we aim to do is have **smaller interfaces** rather than one big interface. 

This is because if we have a large interface it would be **difficult to deliver it to clients**. 

In this way, we also **violate abstraction**.

A better practice is to utilize **multiple interfaces** that define **different actions** rather than to operate with a single interface that defines many non-directly related behaviors.

[/slide]

[slide hideTitle]

# Fat Interfaces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-22-fat-interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In the following example, we will take a closer look at what the problem with fat interfaces is:

```java
public interface Worker {
  void work();
  void sleep();
}
```

```java
public class Employee implements Worker {

  public void work() {}
  public void sleep() {}
}

```

```java
public class Robot implements Worker {

  public void work() {}

  public void sleep() { 
    throw new UnsupportedOperationException();
  }
}
```
As you can see, we have a `Worker` interface with two methods inside – `work()` and `sleep()`.​

When an `Employee` class implements that interface, there will not be any problems. 

That is because the interface methods are suitable for the `Employee` class.​

Let us see what happens when a class `Robot` implements the same interface.​

The `Robot` class can implement the `work()` method, but the `sleep()` one is not appropriate for this class. 

The problem here is that we force the `Robot` class to implement a method that it should not.​

You saw what problems that fat interfaces can bring, let us list them and their potential solutions.

[/slide]

[slide hideTitle]

# Fat Interfaces - Consequences

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-23-fat-interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Having fat interfaces may lead to few consequences which we should be aware of.**

When we see an interface with more than 5-6 members, we should ask ourselves if it is not two interfaces or more.

- Classes have methods they do not use

- Increase coupling between the interface and the classes

- Because of the increased coupling, we reduce the flexibility

- It is harder to maintain a highly coupled code

[/slide]

[slide hideTitle]

# How to ISP

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-24-how-to-isp-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The solution to interface segregation is simple.

Just keep your interfaces small but with strong cohesion.

Applying the **single responsibility principle** alongside ISP will help you make sure that your interfaces serve one role only.

[/slide]

[slide hideTitle]

# Cohesive Interfaces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-25-cohesive-interfaces-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The solution to this problem is separating the `sleep()` method into another interface:

```java
public interface Worker {

  void work();

}
```

```java
public interface Sleeper {

  void sleep();

}
```
As a result, the **Robot** class can implement only the **Worker** interface without relying on a method that it is not going to use.​

```java
public class Robot implements Worker {

  void work() { 
    // Do some work… 

  }
}
```

[/slide]
