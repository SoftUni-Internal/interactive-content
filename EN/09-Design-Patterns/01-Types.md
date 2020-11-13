[slide]

# Types of Design Patterns

Now, let's see the types of design patterns:

# Creational Pattern:

Creational patterns are **object creational design patterns**.

We use this patterns when we must take a decision how to create an object of a class.

They contain two main ideas:

- **Encapsulating** knowledge about which classes the system uses.

- **Hiding** how instances of these classes are created.

## Singleton design pattern

Singleton pattern is one of the most used creational design pattern

A concept of singleton class is a class that have only one object at a time.

Difference between normal class and singleton class is that we use constructor to initialize normal class, whereas for singleton class we use the method `getInstance()`

Let's see this in a simple example:

Let's create a singleton class

``` java
public class Singleton {

    //first, lets create an object of SingleObject
    private static Singleton instance = new Singleton();

    //second, lets make the constructor private. By this way this class cannot be instantiated
    private Singleton(){}

    //with getInstance method we get the only object available
    public static Singleton getInstance(){
        return instance;
    }

    public void printMessage(){
        System.out.println("Hello, i am singleton class");
    }
}
```

Now, let's see what is going on in our Main class

``` java
public class Main {
    public static void main(String[] args) {

        //If we try to create a singleton object via our constructor, we will get error:
        //Compile Time Error: The constructor SingleObject() is not visible
        //Singleton object = new Singleton();

        //Get the only object available
        Singleton object = Singleton.getInstance();

        //print the message
        object.printMessage();
    }
}
```

Output will be:

```
Hello, i am singleton class
```

This way, our Singleton class provides a method to get its **static** instance to **outside world**.


[/slide]

[slide]

# Prototype Pattern

Prototype pattern simply allows us to copy the instance of the class and create a new object from it.

By this way of creating it allows us to hide the complexity of making new instances from the client.

The copied object acts as a prototype and contains the information of the object.

Instead of using the `new` keyword we can use `clone()` method.

[image assetsSrc="Design-Patterns.png" /]



[/slide]