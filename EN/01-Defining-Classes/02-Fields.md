# Class Data

[slide]

# Fields

[vimeo-video]
[stream language="EN" videoId="485442485" default /]
[stream language="RO" videoId="485442485"  /]
[/video-vimeo]

A Java field is a variable inside a class. 

For instance, in a class representing a car, the Car class might contain the following fields:

- brand
- model
- horsePower

The corresponding Java class could be defined like this:

```java
public class Car {

    String brand;
    String model;
    int horsePower;

}
```

[/slide]

[slide]

# Problem: Define Car Class

[vimeo-video]
[stream language="EN" videoId="485442542" default /]
[stream language="RO" videoId="485442542"  /]
[/video-vimeo]

[code-task title="Problem: Define Car Class" taskId="c0968b31-c783-4ee2-9227-6a10e5ff8cb3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}

// Define your Car class here

```
[/code-editor]
[task-description]
## Description
Create a class named **Car**.

The class should have **public** fields for:
- Brand: String
- Model: String
- Horsepower: int

Create a **new class** and ensure **proper naming**

You should be now able to use your class:

```java
public class Main {
    public static void main (String[] args) {

        Car car = new Car();

        car.brand = "TESLA";
        car.model = "MODEL S";
        car.horsePower = 503;

        System.out.println(String.format(
                "The car is: %s %s - %d HP",
                car.brand, car.model, car.horsePower
        ));
    }
```

[/task-description]
[/code-task]
[/slide]

[slide]

# Solution: Define Car Class

[vimeo-video]
[stream language="EN" videoId="485442701" default /]
[stream language="RO" videoId="485442701"  /]
[/video-vimeo]

Create a new class and **ensure proper naming!**
[image assetsSrc="defining-classes-example(2).png" /]

Create a **Main** class in the same package to test your Car class:
[image assetsSrc="defining-classes-example(1).png" /]

Set the fields inside the Car class:

```java
public class Car {

    String brand;
    String model;
    int horsePower;
}
```

[/slide]

[slide]

# Access Modifiers

[vimeo-video]
[stream language="EN" videoId="485442782" default /]
[stream language="RO" videoId="485442782"  /]
[/video-vimeo]

Access modifiers determine whether other classes can use a particular field.

There are four types of access modifiers in Java:

- private
- package-private
- protected
- public 

The **private** access modifier means that only code inside the class itself can access this Java field.

If you don't use any modifier, it is treated as **package-private** by **default**.

The **package-private** access modifier means that only code inside the class itself, or other classes in the same package, can access the field.

It provides more accessibility than private. But, it is **more restrictive than protected, and public**.

The **protected** access modifier is accessible within **the package** and outside the package but through **\*inheritance** only.

\*Inheritance in Java is a mechanism in which one object acquires all the properties and behaviours of a parent object. You can find out more about **Inheritance** [here](https://docs.oracle.com/javase/tutorial/java/concepts/inheritance.html).

The **public** access modifier is accessible within **everywhere**.

[/slide]