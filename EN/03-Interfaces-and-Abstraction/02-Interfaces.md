[slide]

# Interfaces

`Interfaces` in Java may look like a **class**, but they are not classses. 

An **interface** can have all the methods and variables like the class do, but the **methods** in the interface are **abstract** by default.

**Interfaces** in Java are used to specify a behavior that **classes** must **implement**.

We use **interfaces** when we want to achieve **security**.

As we know, Java does not support "**multiple inheritance**". However, we can achieve this easy with **interfaces**, because the class can **implement** multiple interfaces.


## Difference between `Implement` and `Extends`:



[image assetsSrc="Interfaces-and-Abstraction-example(3).png" /]


In this example we can see how implementation of `print()` is provided in class `Document`

``` java
public interface Printable {
    void print();
}
```

``` java
class Document implements Printable {  
  public void print() { System.out.println("Hello"); }
  public static void main(String args[]) {
    Printable doc = new Document();  // We achieve Polymorphism
    doc.print();  // Hello
  }
}
```

[/slide]

[slide]

## Problem: Car Shop

[/slide]


[slide]

In Java, interface can **extend another interface**.

``` java
public interface Callable {
     void call();
}
```

``` java
public interface Printable extends Callable {
    void print();
}
```

[/slide]

[slide]

## Problem Car Shop Extended:

[/slide]



## Default Method

Java 8 introduces the "Default method" feature.

This allows us to **add** different methods to the **existing interfaces** without breaking their current implementation.

``` java
public interface Drawable {
  void draw();
  default void msg() {
    System.out.println("default method:");
  }
}
```
We don't need implementation for **default methods**.

``` java
class TestInterfaceDefault {  
  public static void main(String args[]) {  
    Drawable d = new Rectangle(); 
    d.draw();  // drawing rectangle
    d.msg();   // default method
  } 
} 
```

[/slide]

[slide]

## Static Method

Another thing we can do since Java 8 is to **define** and **implement** `static` methods in interfaces.

We can define static methods in interfaces identical to defining one in class. They can be also invoked within other methods.

To understand better let's take a look in this example:

``` java
public interface Car {
    
    // default methods
    static int getHorsePower(int torque, int rpm) {
        return (torque * rpm) / 5252;
    }
}
```

Now, if we want to calculate the **horsepower** of our car's engine we just call our `getHorsePower()` method.

``` java
Vehicle.getHorsePower(480, 2500));
```
[/slide]

[slide]

## Problem: Say Hello

[/slide]