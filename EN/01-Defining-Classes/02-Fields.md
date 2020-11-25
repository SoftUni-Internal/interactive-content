[slide]

# Fields

A Java field is a variable inside a class. For instance, in a class representing a car, the Car class might contain the following fields:

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

## Access Modifiers

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



[/slide]

[slide]

# Problem: Define Car Class

Create a class named Car.

The class should have the following fields:

- brand: String
- model: String
- horsePower: int

Create a new class and **ensure proper naming!**
[image assetsSrc="defining-classes-example(2).png" /]

Create a **Main** class in the same package to test your Car class:
[image assetsSrc="defining-classes-example(1).png" /]

You should be able to use your **Car** class:

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
}
```

[/slide]

[slide]

# Solution: Define Car Class

```java
public class Car {

    String brand;
    String model;
    int horsePower;
}
```

[/slide]