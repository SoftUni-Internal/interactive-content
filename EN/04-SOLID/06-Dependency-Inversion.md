# Dependency Inversion

[slide hideTitle]

# Dependency Inversion Principle (DIP)

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-26-27-28-29-dependency-inversion-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

"**Depend on abstractions, not on concretions.**"

The **Dependency Inversion principle** defines the concept that **high-level** modules should not depend on **low-level** ones. 

They **should be based on abstractions**. 

It is better to **use interfaces** in the transmission of information **than specific classes**. 

This way, we will **rely more on abstraction than on concretion**.

Abstractions should **not rely on any implementation details**.​

Instead, the **details must be founded upon abstractions**.​

The goal we are trying to achieve with the abstraction approach is to have **independent modules**.​

[/slide]

[slide hideTitle]

# The Problem

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-30-the-problem-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In the following example, we have two classes: **Button** and **Lamp**.

The **Button** class receives a `poll()` message that determines whether a user has pressed it or not. 
 
And a **Lamp** class, which receives a **turnOn()** command and a **turnOff()** command:

```java
public class Button() {

   private Lamp lamp;

   public Button(Lamp lamp) {
        this.lamp = lamp;
    }

   public void poll() {
      if (something) {
         lamp.turnOn();
      } else {
         lamp.turnOff();
      }
   }
}
```
The **Button** class **depends directly on the Lamp** class.

If the Lamp class changes, then Button will need to be changed too.

Furthermore, the **Button class is not reusable**: you cannot use it to switch on a coffee machine, for example.

The above code is a violation of the **Dependency Inversion principle**.

[/slide]

[slide hideTitle]

# Dependency Inversion Solution

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-31-dependency-inversion-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To solve the design issue behind the previous code, we need to create a **middle-layer** where we can define an **abstract interface associated with the `Button` functionality** and implement it by any classes like `Lamp`:

```java
public interface SwitchableDevice {

    void turnOn();
    void turnOff();
}
```

The `Button` class depends on the `SwitchableDevice` interface, not on a concrete class such as `Lamp`:

```java 
public class Button {

    private SwitchableDevice switchableDevice;

    public Button(SwitchableDevice switchableDevice) {
        this.switchableDevice = switchableDevice;
    }

    public void poll() {

        if (something) {

            switchableDevice.turnOn();
        } else {

            switchableDevice.turnOff();
        }
    }
}
```
The `Lamp` class should implement `SwitchableDevice` interface:

```java
public class Lamp implements SwitchableDevice {

    @Override
    public void turnOn() {

    }

    @Override
    public void turnOff() {

    }
}
```

The `Button` class can accept **any implementation of the SwitchableDevice interface**.

In our case, this is a `Lamp`, but it could be **any other device** which implements the `SwitchableDevice` interface:
```java
public class Main {
    public static void main(String[] args) {
        Lamp lamp = new Lamp();
        Button button = new Button(lamp);
    }
}
```

This design allows a `Button` to control any device that can implement the **SwitchableDevice** interface. 

It also means that `Button` will be **able to control objects** that have **not been yet initialized**, and this makes the application **more flexible**.

[/slide]

[slide hideTitle]

# Dependency Examples 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-32-dependency-examples-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Understanding what **Dependency Inversion** is may take time, but let us have a look at few examples and try to better understand what we are trying to achieve when applying this principle. 

**A dependency is any external component/system:**

- Framework 
- Third-party library 
- Database 
- File system 
- Email 
- Web service 
- System resource (e.g. clock) 
- Configuration 
- The `new` keyword 
- Static method 
- Global function 
- Random generator 
- `System.in` / `System.out` 
  

We want to decouple our code from specific classes, for it to be flexible and at any point of our program to change its behavior by changing the concrete implementation of its dependencies.

[/slide]

[slide hideTitle]

# How to DIP

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-33-35-37-how-to-dip-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To follow the dependency inversion principle we can apply the **dependency injection** design pattern. 

Dependency injection allows us to use an **Inversion of Control Container (IOC)**.

This is a tool in which we register all dependencies such as \{**Interface**\} = \{**Class to generate**\}, then every time we need a dependency it calls it without the need to specify it. 

There are 3 types of Dependency Injection.

[/slide]

[slide hideTitle]

# Constructor Injection

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-34-constructor-injection-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Through this type of DI, the **dependencies are passed through the constructor** of the given class.

**Pros**
- Such classes possess self-documenting requirements
- Works well without a container
- Guarantees a valid state

**Cons**
- Holds many parameters
- Some methods may not need the entire code base

## Example

```java
public class Copy {​

  private Reader reader;​
  private Writer writer;​

  public Copy(Reader reader, Writer writer) {​
    this.reader = reader;​
    this.writer = writer;​
  }​

  public void copyAll() {}​
}
```

[/slide]

[slide hideTitle]

# Setter Injection

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-36-setter-injection-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Setter Injection** - as the name suggests the dependencies are passed to the setters.

**Pros**
- Can be changed anytime
- Very flexible

**Cons**
- Possible invalid state of the object
- Less intuitive

## Example

```java
public class Copy {​
  private Reader reader; ​
  private Writer writer;​

  public void setReader(Reader reader) {}​
  public void setWriter(Writer writer) {}​
  public void copyAll() {}​
}
```

[/slide]

[slide hideTitle]

# Parameter injection

This type of injection suggests injecting the dependencies through method parameters.

**Pros**
- Does not require changes in the rest of the class
- Very flexible

**Cons**
- Holds many parameters
- Breaks the method signature

## Example

```java
public class Copy {​
  public void copyAll(Reader reader, Writer writer) {}​
}
```

[/slide]

[slide hideTitle]

# Layering

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-38-39-layering-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There is a difference between traditional programming layering and dependency inversion layering.

## Traditional Programming

- **High-level** modules use **low-level** modules​

[image assetsSrc="solid-example(4).png" /]

## Dependency Inversion Layering

- **High** and **low-level** modules depend on **abstractions**

[image assetsSrc="solid-example(5).png" /]

[/slide]
