# Methods

[slide hideTitle]

# What Are Methods

[vimeo-video]
[stream language="EN" videoId="485442837/72b15114f6" default /]
[stream language="RO" videoId="485442837/72b15114f6"  /]
[/video-vimeo]

A method is a collection of statements that perform some specific task and return the result to the caller. 

In some cases, they can do so without returning anything.

Methods are time savers and help us to reuse the code without retyping the code.

In Java, every method must be a part of a class.

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

[vimeo-video]
[stream language="EN" videoId="485442925/6a6914cf48" default /]
[stream language="RO" videoId="485442925/6a6914cf48"  /]
[/video-vimeo]

In Java **getters** and **setters** are two conventional methods that are used for retrieving and updating the value of a variable.

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

First, we have a `Car` class with a private field `horsePower`.

Because the field has private access, we **cannot** get or modify it.

To overcome this problem we have to use "**get**" and "**set**" methods.

The `getHorsePower()` method **returns** the value of the `horsePower` field.

The `setHorsePower()` method **sets** the value of the `horsePower` field.

## "this" Keyword

In Java, the keyword `this` is a reference to the current object - the object whose method or constructor is called. 

It is like a pointer (reference), used to access the elements (fields, methods, constructors) of our own class:

```java
class Car {

    private int horsePower;
    
    // not working properly
    public void setHorsePower(int horsePower) {
         horsePower = horsePower;
    }

}

```

In the example above `setHorsePowerNotWorking()`, is not working because the method parameter `horsePower` shadows the `horsePower` field. 

To overcome this problem, we have to use the `this` keyword:

```java
 public void setHorsePower(int horsePower) {
         this.horsePower = horsePower;
    }
```

The most common use of the `this` keyword is to eliminate the confusion between class attributes and parameters with the same name.

[/slide]

[slide hideTitle]
# ToString() Method

[vimeo-video]
[stream language="EN" videoId="485443131/756193f8d0" default /]
[stream language="RO" videoId="485443131/756193f8d0"  /]
[/video-vimeo]

By using the `toString()` method, you can represent any object as a string.

In general, the `toString` method returns a string that "textually represents" the object. 

The result should be a concise but informative representation that is easy for a person to read. 

It is recommended that all subclasses override this method.

If you define a custom `toString()` method in your class then your own method will be called, overriding the built-in one:

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
# Equals() Method

[vimeo-video]
[stream language="EN" videoId="485443235/ad08ba7339" default /]
[stream language="RO" videoId="485443235/ad08ba7339"  /]
[/video-vimeo]

The `equals()` method is used to determine if two objects are equal. 

```java
Car firstCar = new Car("TESLA", "MODEL S");
Car secondCar = new Car("BMW", "5 Series");

boolean isCarsEquals = firstCar.equals(secondCar);
// false
System.out.println(isCarsEquals);
```
[/slide]

[slide hideTitle]
# HashCode() Method

[vimeo-video]
[stream language="EN" videoId="485443247/3be3342b57" default /]
[stream language="RO" videoId="485443247/3be3342b57"  /]
[/video-vimeo]

The `hashCode()` method returns the **integer** hash code value of the object. 

The hash code is always the same if the object does not change.

```java
Car car = new Car();

int hash = car.hashCode(); 

System.out.println(hash); 
```

[/slide]

[slide hideTitle]
# Problem with Solution: Car Info

[vimeo-video]
[stream language="EN" videoId="485443278/abf3282bb7" default /]
[stream language="RO" videoId="485443278/abf3282bb7"  /]
[/video-vimeo]

[code-task title="Car Info" taskId="oop-basics-java-defining-classes-lab-Car-Info" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Description

Your task is to define a `Car` class.

The class must have the following private fields:
- `brand: String`
- `model: String`
- `horsePower: String`

It should also include the following public methods:

- `getBrand(): String`
- `setBrand(String brand): void`
- `getModel(): String`
- `setModel(String model): void`
- `getHorsePower(): String`
- `setHorsePower(int horsePower): void`
- `carInfo(): String`

## Hints

Use the `Car` class from the previous problem.

Because all fields in the **Car** class are **private**, if you try to access the fields directly through the class you should have a **compilation error**.

To overcome this problem you have to use getters and setters methods.

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
Do the same for all the fields.

You should be able to **set** and **get** the field values by using **getter** and **setter** methods.

```java
Car car = new Car();

car.setBrand("TESLA");
car.setModel("MODEL S");
car.setHorsePower(503);
```

Create a `carInfo()` method.

This method should return the info about any car object in the following format:

"The car is: \{brand\} \{model\} – \{horsePower\} HP."

You have to figure out how to create a method and to use it in the outside code as shown below:

```java
System.out.println(car.carInfo());
```


# Examples

## Example 1

| **Input** | **Output** |
| --- | --- |
| 3 |  |
| Chevrolet Impala 390 | The car is: Chevrolet Impala - 390 HP.  |
| TESLA MODEL-S 503 | The car is: TESLA MODEL-S - 503 HP. |
| DACIA DUSTER 149 | The car is: DACIA DUSTER - 149 HP. |

## Example 2

| **Input** | **Output** |
| --- | --- |
| 5 |  |
| This Car 1 | The car is: This Car - 1 HP. |
| Was Made 2 | The car is: Was Made - 2 HP. |
| Only For 3 | The car is: Only For - 3 HP. |
| Test Purposes 4 | The car is: Test Purposes - 4 HP. |
| No Way 5 | The car is: No Way - 5 HP. |

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
