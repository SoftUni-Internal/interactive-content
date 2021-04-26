[slide hideTitle]

# Interface Segregation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-20-21-isp-interface-segregation-principle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

"**A client should not be forced to implement an interface that is not used**".

This rule suggests that we should **split** our **interfaces** into many **smaller ones**, so they better satisfy the **exact needs of our clients**.

The goal of the **Interface Segregation Principle** is to minimize side consequences and repetition.

It achieves that by **dividing the software into multiple, independent parts**.

We aim to have many **smaller interfaces** rather than a single large interface. 

The larger a piece of code is - the more **difficult to deliver it to clients**. 

Each separate interface should isolate non-directly relatable to the other interfaces code behavior.

[/slide]

[slide hideTitle]

# Bloated Interfaces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-22-fat-interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Example:**

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
The `Worker` interface has two methods - `work()` and `sleep()`.​

When an `Employee` class implements that interface, there will not be any complications. 

That is because the interface methods are suitable for the `Employee` class.​

Let us see what happens when the `Robot` class implements the same interface.​

The `Robot` class can implement the `work()` method, but the `sleep()` one is not appropriate for this class. 

The problem here is that we force the `Robot` class to implement a method that it should not require.​

Let us see some peotential solutions to this.

[/slide]

[slide hideTitle]

# Bloated Interfaces - Consequences

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-23-fat-interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Having bloated interfaces may cause some consequences that we should be aware of.**

When we see an interface with more than 5-6 members, we should see if it is not fir to be split into two interfaces or more.

- Classes may have methods they do not use

- There might be increased coupling between the interface and the classes

- Because of the increased coupling the code flexibility might be reduced

- It is harder to maintain a highly coupled code

[/slide]

[slide hideTitle]

# How to ISP

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-24-how-to-isp-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The solution to interface segregation is simple.

Just keep your interfaces small but with strong cohesion.

Applying the **single responsibility principle** alongside the ISP will help you make sure that your interfaces serve one role only.

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
