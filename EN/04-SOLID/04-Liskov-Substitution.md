[slide hideTitle]

# Liskov Substitution

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-15-17-liskov-substitution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Liskov substitution principle** was written by **Barbara Liskov** in 1988.

It states that functions that reference base classes must be able to use objects of derived (child) classes without knowing it.

In other words, the principle defines that objects of a **Superclass** should be **replaceable** with objects of its **Subclasses** without breaking the application.

This requires the objects of your Subclasses to **behave in the same way** as the objects of your Superclass.

[/slide]

[slide hideTitle]

# OCP vs LSP

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-18-ocp-vs-lsp-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Liskov substitution principle is just an **extension** of the **open-closed** principle. 

That means that we are able to implement the **open-closed** principle through **additional objects**, **inheritance**, and **polymorphism**.​

We must ensure that new derived classes are extending the base classes **without changing their behavior**. 

[/slide]

[slide hideTitle]

# LSP – Violations and Solutions​

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-19-lsp-violations-and-solutions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **LSP** is applicable in the presence of a **Supertype-Subtype inheritance** relationship by either **extending** a class or **implementing** an interface. 

We can think of the methods defined in the supertype as **defining a contract**.

Every subtype is expected to **stick** to **this contract**. 

If a Subclass does not adhere to the contract of the Superclass, it is **violating the LSP**.

This code snippet shows what violates LSP and how we can fix it:

```java
public interface Vehicle {
 
    void startEngine();
    void accelerate();
}
```
Above, we define a simple **Vehicle** Interface with a couple of methods that all vehicles should be able to fulfill – turning on the engine, and accelerating forward.

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

As the above code describes, we have an **engine** that we can **turn on**, and we can **increase the power**.

But, what happens if we want to add an **electric car**:

```java
public class ElectricCar implements Vehicle {
 
    public void startEngine() {
        throw new Error("The electric cars have no engine!");
    }
 
    public void accelerate() {
        // Accelerate
    }
}
```
The electric car is a vehicle, however, it does not have an engine and hence, the method `startEngine()` cannot be implemented.

These are the kinds of problems that **violations** of the Liskov Substitution Principle leads to, and they can most often be recognized by a **method that does nothing**, or cannot even be **implemented.**

The **solution** to these problems is a correct **inheritance hierarchy**, and in our case, we would solve the problem by differentiating the interfaces of vehicles with and without engines.


From the Vehicle Interface we remove the `startEngine()` method:

```java
public interface Vehicle {
    void accelerate();
}
```

Then, we create the **ElectricVehicle** interface, which **extends the Vehicle interface**, and has its own method `batteryLife()`:

```java
public interface ElectricVehicle extends Vehicle {

    int batteryLife();
}
```

We create an interface **Car** which extends Vehicle, in which it is more appropriate to add the `startEngine()` method:

```java
public interface Car extends Vehicle {
    void startEngine();
}
```

The **MotorCar** class should implement the **Car** interface:

```java
public class MotorCar implements Car {
 
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

And the **ElectricCar** class implements the **ElectricVehicle** interface:

```java
public class ElectricCar implements ElectricVehicle {

    @Override
    public int batteryLife() {
        // Battery life
    }

    @Override
    public void accelerate() {
        // Accelerate
    }
}
```

As a result, our `MotorCar` and `ElectricCar` classes have become **more specialized**, while **adhering to the Liskov substitution principle.**

[/slide]
