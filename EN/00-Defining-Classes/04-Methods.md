# Methods

[slide hideTitle]

# What are Methods

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-15-16-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A method is a collection of statements that perform a specific task and may return а result. 

Some methods may serve functions, which do not require them to produce direct results.

Methods are "time-savers" and help us to re-use code without re-typing it.

In Java, can only be a part of a class.

The following example defines a method called `increaseHP` inside a class named Car.

When called, this method increases the internal `horsePower` variable with a given value.

```java
class Car {
    private int horsePower;

    public void increaseHP(int value){
        horsePower += value;
    }
}
```
[/slide]

[slide hideTitle]
# Getters and Setters

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-17-18-getters-and-setters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Getters** and **setters** are two types of commonly used methods that are used to retrieve and update the value of a variable.

For each instance variable, a getter method returns its value while a setter method sets or updates its value.

Getters and setters are also known as **accessors** and **mutators**.

Let us have a look at the following example:

```java
class Car {

    private int horsePower;

    public int getHorsePower() {
        return this.horsePower;
    }

    public void setHorsePower(int horsePower) {
         this.horsePower = horsePower;
    }
}
```

We have a `Car` class with a private field `horsePower`.

The field has private access, we **cannot** get or modify it.

To gain access we can use "**get**" and "**set**" methods.

The `getHorsePower()` method **returns** the value of the `horsePower` field.

The `setHorsePower()` method **sets** the value of the `horsePower` field.

## The "this" Keyword

In Java, the keyword `this` is a reference to a speciffic object instace - the **object** whose method or constructor is called, not the class from which it was created. 

It is like a pointer (reference), used to access the elements (fields, methods, constructors) of our object:

```java
class Car {

    private int horsePower;
    
    // not working properly
    public void setHorsePower(int horsePower) {
         horsePower = horsePower;
    }

}

```

In the example above, `setHorsePowerNotWorking()` would not work because the method parameter `horsePower` shadows the `horsePower` field. 

To resolve this, we have to use the "**this**" keyword:

```java
 public void setHorsePower(int horsePower) {
         this.horsePower = horsePower;
    }
```

The most common use of the "**this**" keyword is to eliminate the confusion between class attributes and parameters with the same name.

[/slide]

[slide hideTitle]
# The "toString()" Method 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-19-20-to-string-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

By using the `toString()` method, you can represent any object as a string.

The `toString()` method returns a string that "textually represents" the object. 

The result should be a concise but informative representation that is easy to read. 

It is recommended that all subclasses override this method.

If you define a custom `toString()` method in your class then your method will be called, overriding the built-in one:

```java live no-template
public class Car {

    private String brand;
    private String model;

    public String toString()  {
        return this.brand + " - " + this.model;
    }

    public static void main(String[] args) {
        Car car = new Car();

        car.brand = "TESLA";
        car.model = "MODEL S";

        // TESLA - MODEL S
        System.out.println(car);
    }
}
```
[/slide]

[slide hideTitle]
# The "equals()" Method 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-21-equals-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `equals()` method is used to determine if two objects are equal. 

```java
Car firstCar = new Car("TESLA", "MODEL S");
Car secondCar = new Car("BMW", "5 Series");

boolean checkCarsEqual = firstCar.equals(secondCar);
// false
System.out.println(checkCarsEqual);
```
Keep in mind that the `equals()` method does not work correctly for object comparison unless it is overridden and used together with the `hashcode()` method.

[/slide]

[slide hideTitle]
# Method "hashcode()"

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-22-hash-code-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `hashCode()` method returns the **integer** hash code value of the object. 

The hash code is always the same if the object has not change.

```java
Car car = new Car();

int hash = car.hashCode(); 

System.out.println(hash); 
```

In order to enable correct object comparison you need to use the `equals()` and `hashcode()` methods combined.

Both of them need to be overridden to get correct results.

[/slide]

[slide hideTitle]
# Problem with Solution: Car Info

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-23-problem-and-solution-car-info-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Car Info" taskId="oop-basics-java-defining-classes-lab-Car-Info" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Description

Define a `Car` class.

The class should contain the following private fields:
- **Brand**: String
- **Model**: String
- **Horsepower**: String

It should also include the following public methods:

- `getBrand()`: String
- `setBrand(String brand)`: Void
- `getModel()`: String
- `setModel(String model)`: Void
- `getHorsePower()`: String
- `setHorsePower(int horsePower)`: Void
- `carInfo()`: String

## Hints

Use the `Car` class from the previous problem.

Because all fields in the **Car** class are **private**, if you try to access the fields directly through the class you will get a **compilation error**.

To solve this problem you have to use getters and setters.

In the **Car class**, create **getters** and **setters** for each class field.

- Getter for the car brand:

```java
public String getBrand(){
    return this.brand;
}
```

- Setter for the car brand:

```java
public void setBrand(String brand) {
    this.brand = brand;
}
```
Do the same for all fields.

You should be able to **set** and **get** the field values by using **getter** and **setter** methods.

```java
Car car = new Car();

car.setBrand("TESLA");
car.setModel("MODEL S");
car.setHorsePower(503);
```

Create a `carInfo()` method.

This method should return the available information about a car object in the following format:

"**The car is:** \{**brand**\} \{**model**\} - \{**horsePower**\} **HP.**"

Try to create a method and to use it as shown below:

```java
System.out.println(car.carInfo());
```


# Examples

## Example 1

| **Input** | **Output** |
| --- | --- |
| 3 | The car is: Chevrolet Impala - 390 HP. |
| Chevrolet Impala 390 | The car is: TESLA MODEL-S - 503 HP. |
| TESLA MODEL-S 503 | The car is: DACIA DUSTER - 149 HP. |
| DACIA DUSTER 149 | |

## Example 2

| **Input** | **Output** |
| --- | --- |
| 5 | The car is: This Car - 1 HP. |
| This Car 1 | The car is: Was Made - 2 HP. |
| Was Made 2 | The car is: Only For - 3 HP. |
| Only For 3 | The car is: Test Purposes - 4 HP. |
| Test Purposes 4 | The car is: No Way - 5 HP. |
| No Way 5 |  |

[/task-description]
[code-upload allowedMemory="30" /] 
[tests]
[test open]
[input]
3
Chevrolet Impala 390
TESLA MODEL-S 503
DACIA DUSTER 149
[/input]
[output]
The car is: Chevrolet Impala - 390 HP.
The car is: TESLA MODEL-S - 503 HP.
The car is: DACIA DUSTER - 149 HP.
[/output]
[/test]
[test open]
[input]
5
This Car 1
Was Made 2
Only For 3
Test Purposes 4
No Way 5
[/input]
[output]
The car is: This Car - 1 HP.
The car is: Was Made - 2 HP.
The car is: Only For - 3 HP.
The car is: Test Purposes - 4 HP.
The car is: No Way - 5 HP.
[/output]
[/test]
[test]
[input]
4
a b 1
d e 2
w e 2
d 2 4
[/input]
[output]
The car is: a b - 1 HP.
The car is: d e - 2 HP.
The car is: w e - 2 HP.
The car is: d 2 - 4 HP.
[/output]
[/test]
[test]
[input]
2
f u 1
o o 2
[/input]
[output]
The car is: f u - 1 HP.
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
d e 2
w e 2
d 2 4
d 2 4
[/input]
[output]
The car is: a b - 1 HP.
The car is: d e - 2 HP.
The car is: w e - 2 HP.
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
a b 1
d e 2
w e 2
d 2 4
[/input]
[output]
The car is: a b - 1 HP.
The car is: d e - 2 HP.
The car is: w e - 2 HP.
The car is: d 2 - 4 HP.
The car is: a b - 1 HP.
The car is: d e - 2 HP.
The car is: w e - 2 HP.
The car is: d 2 - 4 HP.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

