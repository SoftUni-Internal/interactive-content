[slide]
# Objects

An object is **basic unit** and an **instance of a class**.
Classes define templates for objects: fields, constructors, methods.

Example:
- Sample class: LocalDate
- Sample objects: birthdayPeter, birthdayMaria


An object represents **real-life subjects**. 

If you compare the software object with a real-world object, they have very similar characteristics.
You can find many objects around us: cars, dogs, humans, etc.

[/slide]


[slide]
## Definition of Object

An object has:

- State is represented by **fields**.

- Behavior is represented by **methods**. An object interacts with another object by invoking methods. 

- Identity gives an **unique name** to an object.


Real-life example: A dog has states - color, name, breed; and behaviors – barking, eating, wagging the tail. 


An object holds a set of named values.
Example: birthday object holds day, month and year.

```java live
LocalDate birthday = LocalDate.of(2018,5,5);
System.out.println(birthday);
```
[/slide]


[slide]
## Create an Object

Creating an object of a defined class is called **instantiation**.
The **instance** is the object itself, which is created runtime.
All instances have common **behavior**. 
s

To create an object, specify the **class name**, followed by the **object name**, and use the **keyword** `new`:
```java
public class MyClass {
    public static void main(String[] args) {
        MyClass myObject = new MyClass();
    }
}
```

You can create multiple objects of one class.
```java
public class MyClass {
    public static void main(String[] args) {
        MyClass myObj1 = new MyClass();
        MyClass myObj2 = new MyClass();
    }
}
```

[/slide]