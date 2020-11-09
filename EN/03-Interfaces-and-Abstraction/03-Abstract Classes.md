[slide]

# Abstract Classes

Abstract classes in Java are similar to **interfaces** except they can contain default methods implementation.

They cannot be **instanciated** because we **cannot create** objects of abstract classes.

Our abstract class can have both **abstract** and **regular** methods.

``` java
abstract class Animal {
  public abstract void makeSound();
  public void sleep() {
    System.out.println("Zzzzz....");
  }
}
```

From this example above we see that is not possible to create an object of the Animal class.

``` java
Animal obj = new Animal(); // this will generate an error.
```

To access the abstract class, we must create another class and inherit it from there.

``` java
// This is subclass (inherit from Animal)
class Cat extends Animal {
  public void makeSound() {
    // The body of makeSound() is provided here
    System.out.println("Meow...");
  }
}
```

``` java
class Main {
  public static void main(String[] args) {
    Cat cat = new Cat(); // Create a cat object
    cat.makeSound();
    cat.sleep();
  }
}
```
[/slide]

[slide]

# Abstract Methods


After we've learned about **abstract classes**, let us continue with **abstract methods**.

**Abstract** methods in their nature are methods that don't have body.

It is important to remember that if our class **contains** an abstract method, then we must declare it as **astract** class.

Otherwise, it will generate an error.

``` java
class Device {

  // abstract method
  abstract void call();
} // Class should be abstract.
```

As we already know **abstract** classes **cannot be** instanciated, but we can simply create `subclasses` from them.

After that, we can **access** members of our abstract class using the object of the subclass.

``` java
abstract class Device {

  // method of abstract class
  public void call() {
    System.out.println("Calling....");
  }
}
```
``` java
class Main extends Device {

  public static void main(String[] args) {
    
    // create an object of Main
    Main obj = new Main();

    // access method of abstract class
    // using object of Main class
    obj.call();
  }
}
```

**Output** will be:

```
Calling....
```

In the above example, we have created an abstract class named `Device`. 

Our class contains a regular method `call`.

Then, we have created the `Main` class which inherits the **abstract class**.

The `obj` is the object of the child class `Main`. 

We called the method of the abstract class using our object `obj`.




[/slide]