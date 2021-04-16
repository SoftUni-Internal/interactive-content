[slide hideTitle]

# Liskov Substitution

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-15-17-liskov-substitution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Liskov substitution principle** was created by **Barbara Liskov** in 1988.

It states that functions that reference base classes must be able to use any objects of derived (child) classes.

In other words, the principle defines that objects of a **Superclass** should be **replaceable** with objects of its **Subclasses** without breaking an application.

This requires the objects of your Subclasses to **behave in the same way** as the objects of your Superclass.

[/slide]

[slide hideTitle]

# OCP vs LSP

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-18-ocp-vs-lsp-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Liskov substitution principle is just an **extension** of the **open-closed** principle. 

That means that we are able to implement the **open-closed** principle through **additional objects**, **inheritance**, and **polymorphism**.​

We must ensure that derived classes are extending the base class **without changing its behavior**. 

[/slide]

[slide hideTitle]

# LSP – Violations and Solutions​

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-19-lsp-violations-and-solutions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **LSP** is applicable in the presence of a **Supertype-Subtype inheritance** relationship by either **extending** a class or **implementing** an interface. 

We can think of the methods defined in the supertype as **defining an obligatory blueprint**.

Every subtype is expected to follow it. 

If a Subclass does not adhere to the blueprint of the Superclass, it does **not observe the LSP**.

This is an example of this and how we can fix it:

```java
public interface Vehicle {
 
    void startEngine();
    void accelerate();
}
```
We define a simple **Vehicle** Interface with a couple of methods that all vehicles should be able to fulfill – turning on the engine, and accelerating.

The `MotorCar` class implements the `Vehicle` Interface and its methods `startEngine()` and `accelerate()`.

```java
public class MotorCar implements Vehicle {
 
    private Engine engine;
 
    public void startEngine() {
        // Start the engine
        engine.on();
    }
 
    public void accelerate() {
        // Accelerate
        engine.powerOn(1000);
    }
}
```

The above code defines an **engine** that we can **turn on**, and we can **accelerate**.

But, what happens if we want to add an **electric car**:

```java
public class ElectricCar implements Vehicle {
 
    public void startCombustionEngine() {
        throw new Error("The electric cars have no engine!");
    }
 
    public void accelerate() {
        // Accelerate
    }
}
```
An electric car is a vehicle, however, it does not have a fuel-based engine and hence, the method `startCombustionEngine()` cannot be implemented.

The Liskov Substitution Principle aims to avoid such cases, they can be identified when a **method that does nothing**, or cannot be **implemented.**

The **solution** to these problems is a correct **inheritance hierarchy**, and in our case, we would solve the problem by differentiating the interfaces of vehicles with different types of engine.


From the Vehicle Interface we remove the `startEngine()` method:

```java
public interface Vehicle {
    void accelerate();
}
```

Then, we create the **ElectricVehicle** interface, which **extends the Vehicle interface**, and has its own method `startElectricEngine()`:

```java
public interface ElectricVehicle extends Vehicle {

    int startElectricEngine();
}
```

We create an interface **Car** which extends Vehicle, in which we add the `startCombustionEngine()` method:

```java
public interface Car extends Vehicle {
    void startCombustionEngine();
}
```

The **MotorCar** class should implement the **Car** interface:

```java
public class MotorCar implements Car {
 
    private Engine engine;
 
    public void startCombustionEngine() {
        // Starts the car engine
        engine.on();
    }
 
    public void accelerate() {
        // Accelerate
        engine.powerOn(1000);
    }
}
```

And the **ElectricCar** class implements the **ElectricVehicle** interface:

```java
public class ElectricCar implements ElectricVehicle {

    @Override
    public int startElectricEngine() {
        // Starts the car engine
    }

    @Override
    public void accelerate() {
        // Accelerate
    }
}
```

As a result, both the `MotorCar` and `ElectricCar` classes have become **more concrete**, while **adhering to the Liskov substitution principle.**

[/slide]
