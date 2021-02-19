[slide hideTitle]

# Interface Segregation

"**A client should not be forced to implement an interface that is not used**".

This rule means that we should **break** our **interfaces** into many **smaller ones**, so they better satisfy the **exact needs of our clients**.

Similar to the **Single Responsibility Principle**, the goal of the **Interface Segregation Principle** is to minimize side consequences and repetition by **dividing the software into multiple, independent parts**.

What we aim to do is have **smaller interfaces** rather than one big interface. 

This is because if we have a large interface it would be **difficult to deliver it to clients**. 

In this way we also **violate the abstraction**.​

A better practice is to make use of **a large number of interfaces** that define a **single action** rather than to operate with a single interface that defines many non-directly related behaviors.

[/slide]

[slide hideTitle]

# Fat Interfaces

In the following example, we will take a closer look at what the problem with “fat” interfaces is:

```java
public interface Worker {​
  void work();​
  void sleep();​
}
```

```java
public class Employee implements Worker {​

  public void work() {}​
  public void sleep() {}​
}

```

```java
public class Robot implements Worker {​

  public void work() {}​

  public void sleep() { ​

    throw new UnsupportedOperationException();​

  }​
}
```
As you can see we have a `Worker` interface with two methods inside – `work()` and `sleep()`.​

When an `Employee` class implements that interface there will not be any problems. 

That is because the interface methods are suitable for the `Employee` class.​

But lets see what happens when a class `Robot` implements the same interface.​

The `Robot` class can implement the `work()` method, but the `sleep()` one is not appropriate for this class. 

The problem here is that we force the `Robot` class to implement a method that it should not.​

You saw what problems the Fat Interfaces can bring, lets list them our and their solutions and figure out a method to fix our problem.

[/slide]

[slide hideTitle]

# Fat Interfaces - consequences

**Having fat interfaces may lead to few consequences which we should be aware of**

When we see an interface with more than 5-6 members we should ask ourselves if it is not two interfaces or more.

- Classes have methods they do not use

- Increase coupling between the interface and the classes

- Because of the increased coupling we reduce the flexibility

- It's harder to maintain a highly coupled code

[/slide]

[slide hideTitle]

# How to ISP

The solution to interface segregation is simple.

Just keep your interfaces small but with strong cohesion.

Applying the **Single-Responsibility** will help you make sure that your interfaces serve one role only.

[/slide]

[slide hideTitle]

# Cohesive Interfaces

The solution to this problem is separating the `sleep()` method into another interface:

```java
public interface Worker {​

  void work();​

}
```
```java
public interface Sleeper {​

  void sleep();​

}
```
As a result, the **Robot** class can implement only the **Worker** interface, without having to rely on a method that it is not going to use.​

```java
public class Robot implements Worker {​

  void work() { ​
    // Do some work… ​

  }​
}
```

[/slide]