[slide]

# Interface Segregation

"**A client should not be forced to implement an interface that is not used**".

This rule means that we should **break** our **interfaces** into many **smaller ones**, so they better satisfy the **exact needs of our clients**.

Similar to the **Single Responsibility Principle**, the goal of the **Interface Segregation Principle** is to minimize side consequences and repetition by **dividing the software into multiple, independent parts**.

What we aim to do is have **smaller interfaces** rather than one big interface. 

This is because if we have a large interface it would be **difficult to deliver it to clients**. 

In this way we also **violate the abstraction**.​

A better practice is to make use of **a large number of interfaces** that define a **single action** rather than to operate with a single interface that defines many non-directly related behaviors.

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
As you can see we have a **Worker** interface with two methods inside – `work()` and `sleep()`.​

When an **Employee** class implements that interface there won’t be any problems. 

That is because the interface methods are suitable for the **Employee** class.​

But let’s see what happens when a class **Robot** implements the same interface.​

The **Robot** class can implement the `work()` method, but the `sleep()` one is not appropriate for this class. 

The problem here is that we force the **Robot** class to implement a method that it shouldn't.​

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

​

[/slide]