[slide]

# Constructors

In Java, a constructor is a block of codes similar to the method. 

It is called when an instance of the class is created. 

At the time of calling constructor, memory for the object is allocated in the memory.

It is a special type of method which is used to initialize the object.

Every time an object is created using the `new()` keyword, at least one constructor is called.

A constructor has the same name as the class and looks like this in java code:

```java
public class Car {

   // Constructor
   public Car(){

    }
}
```

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

## Default Constructor

In Java, a constructor is called "Default" when it doesn't have any parameter.

If you don't have any constructor in your class, the Java compiler will insert a default constructor for you.

You would not find it in your source code(the java file) as it would be inserted into the code during compilation and exists in `.class` file.

The default constructor doesn't have any parameters and looks like this:

```java
public Car() {
}
```

If you implement any constructor then you no longer receive a default constructor from Java compiler.


## Object Initial State

Constructors set object's initial state.

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
In the example above there is not created any constructor so compiler provides a default constructor.

Here **null** for the **brand** and **0** for the **horsePower** are provided by default constructor.

If you want values different from defaults you can set it in the constructor:

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
Here, we have a constructor with one parameter "brand" in the body of constructor we set the value of the field **brand** to the given parameter and initialize the **parts** field.

## Constructor Chaining

In Java, it is possible to call a constructor from inside another constructor.

When you call a constructor from inside another constructor, you use the `this` keyword to refer to the constructor.

Let's see the following example:

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
The first constructor takes two arguments "brand" and "horsePower".

The second takes only one argument - "brand".

Inside the body of the second constructor, we find the following Java statement:

```java
  this(brand, -1);
```
The `this` keyword followed by parentheses and parameters means that another constructor in the same Java class is being called.

Which other constructor is being called depends on the passed parameters to the constructor call(inside the parentheses after the `this` keyword)

In this example, it is the first constructor in the class that is being called.


[/slide]


[slide]
# Problem: Car Constructors
[code-task title="Problem: Car Constructors" taskId="78303c7d-a0e2-46d4-adfa-01d8ff870365" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
  - brand: String
  - model: String
  - horsePower: int

- Constructors (**public**):
  - Car(String brand)
  - Car(String brand, String model, int horsePower)

- Methods (**public**)
  - `carInfo()`: String


Make proper constructors for the Car class so you can create car objects with different type of input information.

If you miss information about field of type **String** set the value to "**unknown**", and for **integer** field set **-1**.

The `carInfo()` method should return the info about any car object in the following format:

"The car is: \{brand\} \{model\} – \{horsePower\} HP."

## Hints

First declare constructor which takes only **the car brand** as parameter:

```java
public Car(String brand) {
    this.brand = brand;
    this.model = "unknown";
    this.horsePower = -1;
}
```

Also create constructor which sets **all the fields**:

```java
public Car(String brand, String model, int horsePower) {
    this.brand = brand;
    this.model = model;
    this.horsePower = horsePower;
}
```
Create a `carInfo()` method.

This method should return the info about any car object in the following format:

"The car is: \{brand\} \{model\} – \{horsePower\} HP."

Read information about car the same way as the previous task, however this time use constructors to create the objects, not creating object with the default constructor.

You should be able to handle different types of input, the format will be the same as the previous task, but this time some of the data may be missing. 

For an example you can get only the car brand – which means you have to set the car model to "unknown" and the Horsepower value to -1.

The main method should lool like this:

```java
Car firstCar = new Car("TESLA");

Car secondCar = new Car("TESLA","MODEL S",503);

System.out.println(firstCar.carInfo());
System.out.println(secondCar.carInfo());
```


## Examples
| **Input** | **Output** |
| --- | --- |
| 2 | The car is: Chevrolet unknown - -1 HP. |
| Chevrolet | The car is: TESLA MODEL-S - 503 HP. |
| TESLA MODEL-S 503 |  |

| **Input** | **Output** |
| --- | --- |
| 4 | The car is: BMW unknown - -1 HP. |
| BMW | The car is: Dacia Logan - 200 HP. |
| Dacia Logan 200 | The car is: Renault Clio - 75 HP. |
| Renault Clio 75 | The car is: Dacia Duster - 350 HP. |
| Dacia Duster 350 |  |

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


[slide]

# Solution: Car Constructors

- Car class:

```java
public class Car {

    private String brand;
    private String model;
    private int horsePower;

    public Car(String brand) {
        this.brand = brand;
        this.model = "unknown";
        this.horsePower = -1;
    }

    public Car(String brand, String model, int horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }

    public String carInfo() {
        return String.format("The car is: %s %s - %d HP.",
                this.brand, this.model, this.horsePower);
    }
}

```

- Main class:

```java
public class Main {
    public static void main(String[] args) {

        Car firstCar = new Car("TESLA");

        Car secondCar = new Car("TESLA","MODEL S",503);

        System.out.println(firstCar.carInfo());
        System.out.println(secondCar.carInfo());
    }
}
```


[/slide]