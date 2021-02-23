# Constructors

[slide hideTitle]
# Constructors

[vimeo-video]
[stream language="EN" videoId="485443527/94a5a602a6" default /]
[stream language="RO" videoId="485443527/94a5a602a6"  /]
[/video-vimeo]

A **constructor** is a special method, which is invoked every time a new **instance of the class** is created. 

At the time of calling the constructor, memory for the object is **allocated in memory**.

Every time an object is created using the `new()` keyword, at least one constructor is called.

A constructor has the same name as the class and looks like this in java code:

```java
public class Car {

   // Constructor
   public Car() {
      // ...
   }
}
```

## Default Constructor

In Java, a constructor is called **default** when it does not have any parameters.

If you do not have a constructor in your class, the Java compiler will insert a default constructor for you.

You would not find it in your source code (the Java file), as it would be inserted into the code during compilation and is being stored in the `.class` file.

The default constructor does not have any parameters and looks like this:

```java
public Car() {
}
```

If you **implement a constructor** then you no longer receive a default constructor from the Java compiler.

## Multiple Constructors

You can have multiple constructors in the same class, as long as their signature (the parameters they take) are not the same.

You can define as many constructors as you need. 

When a Java class contains multiple constructors, we say that the constructor is overloaded (comes in multiple versions). 

This is what constructor overloading means, that a Java class contains multiple constructors.

```java
public class Car {
  private String brand;  
  private int horsePower; 
  
  public Car(String brand) {
    this.brand = brand;
  }

  public Car(String brand, int horsePower) {
    this.brand = brand;
    this.horsePower = horsePower;
  }
}
```
In the example above, we have two constructors.

The first one takes only one parameter and the second one takes two parameters.


[/slide]

[slide hideTitle]
# Object Initial State

[vimeo-video]
[stream language="EN" videoId="485443647/cd33688269" default /]
[stream language="RO" videoId="485443647/cd33688269"  /]
[/video-vimeo]

Constructors set the object's initial state.

For example, the default constructor is used to set the default initial state of the object like 0, null, etc., depending on the type.

```java
public class Car {
    private String brand;
    private int horsePower;

     public String toString() {
          return this.brand + " - " + this.horsePower;
     }
}
```
In the example above, a constructor is absent, so the compiler provides a default constructor.

Here **null** for the **brand** and **0** for the **horsePower** are provided by default constructor.

If you want values different from defaults you can set them in the constructor:

```java
public class Car {
    String brand;
    List<Part> parts;
  
    public Car(String brand) {
        this.brand = brand;
        this.parts = new ArrayList<>();
    }
}
```
Here, we have a constructor with one parameter - `brand`.

In the body of the constructor, we set the value of the field **brand** to the given parameter and initialize the **parts** field.

[/slide]

[slide hideTitle]
# Constructor Chaining

[vimeo-video]
[stream language="EN" videoId="485443685/4d212391a8" default /]
[stream language="RO" videoId="485443685/4d212391a8"  /]
[/video-vimeo]

In Java, it is possible to call a constructor from inside another constructor.

This is called **constuctor chaining**.

When you call a constructor from inside another constructor, you use the `this` keyword to refer to the constructor.

Let us see the following example:

```java
class Car {
    private String brand;
    private int horsePower;

    public Car(String brand, int horsePower) {
        this.brand = brand;
        this.horsePower = horsePower;
    }

    public Car(String brand) {
        this(brand, -1);
    }
}
```

The first constructor takes two arguments `brand` and `horsePower`.

The second takes only one argument - `brand`.

Inside the body of the second constructor, we find the following Java statement:

```java
this(brand, -1);
```

The `this` keyword followed by parentheses and parameters means that another constructor in the same Java class is being called.

Which other constructor is being called depends on the passed parameters to the constructor call(inside the parentheses after the `this` keyword)

In this example, it is the first constructor in the class that is being called.

[/slide]


[slide hideTitle]
# Problem with Solution: Constructors

[vimeo-video]
[stream language="EN" videoId="485443776/c169d89438" default /]
[stream language="RO" videoId="485443776/c169d89438"  /]
[/video-vimeo]

[code-task title="Constructors" taskId="oop-basics-java-defining-classes-lab-Constructors" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Create a Car class with the following properties:

- Fields (**private**):
  - `brand`: String
  - `model`: String
  - `horsePower`: int

- Constructors (**public**):
  - `Car(String brand)`
  - `Car(String brand, String model, int horsePower)`

- Methods (**public**)
  - `carInfo()`: String


Make proper constructors for the Car class so you can create car objects with different types of input information.

If you miss information about the field of type **String**, set the value to "**unknown**", and for the **integer** field, set **-1**.

The `carInfo()` method should return the info about any car object in the following format:

"The car is: \{brand\} \{model\} – \{horsePower\} HP."

## Hints

First declare a constructor which takes only **the car brand** as parameter:

```java
public Car(String brand) {
    this.brand = brand;
    this.model = "unknown";
    this.horsePower = -1;
}
```

Also, create a constructor which sets **all the fields**:

```java
public Car(String brand, String model, int horsePower) {
    this.brand = brand;
    this.model = model;
    this.horsePower = horsePower;
}
```

Create a `carInfo()` method.

This method should return the information about any car object in the following format:

"The car is: \{brand\} \{model\} – \{horsePower\} HP."

Read information about a car the same way as the previous task.

This time, write **constructors to create the objects**, rather than creating them with the default constructor.

You should be able to handle different types of input, the format will be the same as the previous task, but this time some of the data may be missing. 

For example, you can receive only the car brand – which means you have to set the car **model** to "unknown" and the **horsepower** value to -1.

The main method should look like this:

```java
Car firstCar = new Car("TESLA");

Car secondCar = new Car("TESLA","MODEL S",503);

System.out.println(firstCar.carInfo());
System.out.println(secondCar.carInfo());
```


# Examples

## Example 1

| **Input** | **Output** |
| --- | --- |
| 2 |  |
| Chevrolet | The car is: Chevrolet unknown - -1 HP. |
| TESLA MODEL-S 503 | The car is: TESLA MODEL-S - 503 HP. |

## Example 2

| **Input** | **Output** |
| --- | --- |
| 4 |  |
| BMW | The car is: BMW unknown - -1 HP. |
| Dacia Logan 200 | The car is: Dacia Logan - 200 HP. |
| Renault Clio 75 | The car is: Renault Clio - 75 HP. |
| Dacia Duster 350 | The car is: Dacia Duster - 350 HP. |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
Chevrolet
TESLA MODEL-S 503
[/input]
[output]
The car is: Chevrolet unknown - -1 HP.
The car is: TESLA MODEL-S - 503 HP.
[/output]
[/test]
[test open]
[input]
4
BMW
Dacia Logan 200
Renault Clio 75
Dacia Duster 350
[/input]
[output]
The car is: BMW unknown - -1 HP.
The car is: Dacia Logan - 200 HP.
The car is: Renault Clio - 75 HP.
The car is: Dacia Duster - 350 HP.
[/output]
[/test]
[test]
[input]
4
a
d
w
d
[/input]
[output]
The car is: a unknown - -1 HP.
The car is: d unknown - -1 HP.
The car is: w unknown - -1 HP.
The car is: d unknown - -1 HP.
[/output]
[/test]
[test]
[input]
2
f
o o 2
[/input]
[output]
The car is: f unknown - -1 HP.
The car is: o o - 2 HP.
[/output]
[/test]
[test]
[input]
3
f u 1
c k 2
o f 2
[/input]
[output]
The car is: f u - 1 HP.
The car is: c k - 2 HP.
The car is: o f - 2 HP.
[/output]
[/test]
[test]
[input]
5
a b 1
d
w
d 2 4
d 2 4
[/input]
[output]
The car is: a b - 1 HP.
The car is: d unknown - -1 HP.
The car is: w unknown - -1 HP.
The car is: d 2 - 4 HP.
The car is: d 2 - 4 HP.
[/output]
[/test]
[test]
[input]
8
a b 1
d e 2
w e 2
d 2 4
a
d
w
d
[/input]
[output]
The car is: a b - 1 HP.
The car is: d e - 2 HP.
The car is: w e - 2 HP.
The car is: d 2 - 4 HP.
The car is: a unknown - -1 HP.
The car is: d unknown - -1 HP.
The car is: w unknown - -1 HP.
The car is: d unknown - -1 HP.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
