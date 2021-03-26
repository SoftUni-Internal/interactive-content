# Class Data

[slide hideTitle]

# Fields

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-10-11-class-data-fields-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A Java field is a variable inside a class. 

For instance, in a class representing a car, the Car class might contain the following fields:

- **Brand**
- **Model**
- **Horsepower**

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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-12-13-problem-and-solution-define-car-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Create a class named **Car**.

The class should have **public** fields for:
- **Brand**: String
- **Model**: String
- **Horsepower**: Integer

Create a **new class** and ensure you name it according to the rules for naming classes. 

You should now be able to use your class:

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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-14-access-modifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Access modifiers** determine whether other classes can use a particular field.

There are four types of access modifiers in Java:

- Private
- Package-private
- Protected
- Public

Using a **private** access modifier means that only code inside the class body can access this Java field.

If you do not use any modifier, it is treated as **package-private** by **default**.

The **package-private** access modifier means that only code inside the class or other classes in the same package can access the field.

It provides more accessibility than the **private** modifier.

The **Package-private** access modifier is **more restrictive** than **protected** and **public**.

The **protected** access modifier is accessible within and outside the package but only through **inheritance**.

**Inheritance** is a mechanism where one object **acquires** all the **properties** and **behaviors** of a **parent** object.

You can find out more about **inheritance** [here](https://docs.oracle.com/javase/tutorial/java/concepts/inheritance.html).

The **public** access modifier is accessible **everywhere**.

[/slide]

