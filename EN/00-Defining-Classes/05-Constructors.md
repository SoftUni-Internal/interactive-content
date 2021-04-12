# Constructors

[slide hideTitle]
# Constructors

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-25-26-27-28-constructors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **constructor** is a special method that is invoked every time a new **instance of the class** is created. 
When the constructor is called, memory for the object is **allocated**.

Every time an object is created using the `new()` keyword, at least one constructor is called.

A constructor has the same name as the class and looks like this:

```java
public class Car {

   // Constructor
   public Car(){
       this.brand = "BMW";
    }
}
```

## Default Constructor

In Java, a constructor is referred to as a **default** when it does not accept any parameters and does not change any value on initialization.

If you do not have a constructor in your class, the Java compiler will insert a default constructor for you.

In this case, it will not be present in the Java file, as it is inserted into the code during compilation. It is stored in the `.class` file.

The default constructor does not have any parameters and looks like this:

```java
public Car() {
}
```

If you **implement a constructor**, it overrides the default constructor in the Java compiler.

## Multiple Constructors

You can have multiple constructors in the same class as long as their signature (the parameters they take) is different.

When a Java class contains multiple constructors, we say that the constructor is "overloaded". 


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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-29-object-initial-state-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
In the example above, a constructor is absent, so the compiler uses the default constructor.

In this case, the default values for each data type will be assumed: **null** for the **brand** variable and **0** for the **horsePower** variable.

If we need values different from the default ones, we can set them in the constructor:

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
In the example above, we have a constructor with one parameter - `brand`.

In the body of the constructor, we set the value of the **brand** field to a given parameter and initialize the **parts** field.

[/slide]

[slide hideTitle]
# Constructor Chaining

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-30-constructor-chaining-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Java, it is possible to call a constructor from inside another constructor.

This is called **constructor chaining**.

When you call a constructor from inside another constructor, we use the `this` keyword to refer to the initial one.

Example:

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

The first constructor takes two arguments - "**brand**" and "**horsePower**".

The second one takes only one argument - "**brand**".

We find the following Java statement inside the body of the second constructor:

```java
this(brand, -1);
```

The "**this**" keyword, followed by parentheses, means that another constructor in the same Java class is being called.

Java will determine which constructor the "**this**" keyword refers to by the number of parameters and their type (the constructor's signature).

In this example, we call the first constructor with two parameters and set the value of "**horsePower**" to **-1**.

[/slide]


[slide hideTitle]
# Problem with Solution: Car Constructors

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-oop-basics-defining-classes-31-constructors-solution-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Constructors" timeLimit=5000 taskId="oop-basics-java-defining-classes-Constructors" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
[code-upload allowedMemory="30" /]

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


Make constructors for the Car class, so you can create objects of type Car with different types of input information.

If you miss information about the field of type **String**, set the value to "**unknown**", and for the **integer** field to **-1**.

The `carInfo()` method should return info about a car object in the following format:

"**The car is:** \{**brand**\} \{**model**\} - \{**horsePower**\} **HP.**"

## Hints

First, declare a constructor that takes only **the car brand** as a parameter:

```java
public Car(String brand) {
    this.brand = brand;
    this.model = "unknown";
    this.horsePower = -1;
}
```

Create a constructor that sets **all the fields**:

```java
public Car(String brand, String model, int horsePower) {
    this.brand = brand;
    this.model = model;
    this.horsePower = horsePower;
}
```

Create a `carInfo()` method.

This method should return the information about any car object in the following format:

"**The car is:** \{**brand**\} \{**model**\} - \{**horsePower**\} **HP.**"

Read information about a car the same way as in the previous task.

Define **constructors to create objects** rather than creating them with the default constructor.

You should be able to handle different types of input, the format will be the same as in the previous task, but this time some of the data may be missing. 

For example, you might receive only the car brand, which means you have to set the car **model** to "unknown" and the **horsepower** value to -1.

The main method should look like this:

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
| TESLA MODEL-S 503 | |



| **Input** | **Output** |
| --- | --- |
| 4 | The car is: BMW unknown - -1 HP. |
| BMW | The car is: Dacia Logan - 200 HP. |
| Dacia Logan 200 | The car is: Renault Clio - 75 HP. |
| Renault Clio 75 | The car is: Dacia Duster - 350 HP. |
| Dacia Duster 350 | |

[/task-description]
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

