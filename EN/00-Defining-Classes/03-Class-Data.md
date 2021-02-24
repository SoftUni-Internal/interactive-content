# Class Data

[slide hideTitle]

# Fields

[vimeo-video]
[stream language="EN" videoId="485442485/155d3dbe2c" default /]
[stream language="RO" videoId="485442485/155d3dbe2c"  /]
[/video-vimeo]

A Java field is a variable inside a class. 

For instance, in a class representing a car, the Car class might contain the following fields:

- `brand`
- `model`
- `horsePower`

The corresponding Java class is defined as follows:

```java
public class Car {

    String brand;
    String model;
    int horsePower;

}
```

[/slide]

[slide hideTitle]

# Problem with Solution: Define Car Class

[vimeo-video]
[stream language="EN" videoId="485442542/b12b87f743" default /]
[stream language="RO" videoId="485442542/b12b87f743"  /]
[/video-vimeo]

Create a class named **Car**.

The class should have **public** fields for:
- **Brand**: String
- **Model**: String
- **Horsepower**: Integer

Create a **new class** and ensure **proper naming**

You should be now able to use your class:

```java live
import java.util.*;
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
}
// Define your Car class here
```

## Solution

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

[slide hideTitle]

# Access Modifiers

[vimeo-video]
[stream language="EN" videoId="485442782/1379d735a9" default /]
[stream language="RO" videoId="485442782/1379d735a9"  /]
[/video-vimeo]

**Access modifiers** determine whether other classes can use a particular field.

There are four types of access modifiers in Java:

- private
- package-private
- protected
- public

Using a **private** access modifier means that only code inside the class body can access this Java field.

If you do not use any modifier, it is treated as **package-private** by **default**.

The **package-private** access modifier means that only code inside the class itself, or other classes in the same package, can access the field.

It provides more accessibility than private.

But, it is **more restrictive** than **protected** and **public**.

The **protected** access modifier is accessible within and outside the package, but through **inheritance** only.

**Inheritance** is a mechanism in which one object **acquires** all the **properties** and **behaviors** of a **parent** object.

You can find out more about **inheritance** [here](https://docs.oracle.com/javase/tutorial/java/concepts/inheritance.html).

The **public** access modifier is accessible **everywhere**.

[/slide]
