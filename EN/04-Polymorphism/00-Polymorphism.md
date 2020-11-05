[slide]

# What is Polymorphism?

Hello there! Today, we will try to understand the nature of the forth OOP principle - The Polymorphism!

[image assetsSrc="Polymorphism-example.png" /]

Polymorphism is one of the four OOP pillars in **object-oriented** languages.

It allows us to perform a single action in many different ways.

For example, lets say we have **superclass** called `Mammal` that has method called `makeSound`. 

**Subclasses** of our class Mammal could be **Cats**, **Dogs**, **Pigs**, **Horses** - And they also have their individual implementation for making sound.

Lets see that in code: 

``` java
class Mammal {
  public void makeSound() {
    System.out.println("The animal makes a sound");
  }
}
```

``` java
class Cat extends Mammal {
  public void makeSound() {
    System.out.println("Meow Meow...");
  }
}
```

``` java
class Dog extends Mammal {
  public void makeSound() {
    System.out.println("Woof Woof!");
  }
}
```

Now we can go in our `Main` class and create our cat and dog objects and call `makeSound()` method on both of them.


``` java
class Main {
  public static void main(String[] args) {
    Mammal animal = new Mammal();  
    Mammal myCat = new Cat(); 
    Mammal myDog = new Dog(); 
    animal.makeSound();
    myDog.makeSound();
    myCat.makeSound();
  }
}
```

Output will be:

```
The animal makes a sound
Woof woof!
Meow Meow...
```


[/slide]





[slide]

# instanceOf Operator

We can use the `instanceOf` operator in Java to check if an **object** is an instance of a **class** or not.

Lets take a look now at the different examples:

First, lets declare our Map:

```java
 Map<Object, Object> map = new HashMap();
```

Then, lets create a `boolean` type to evaluate our result:

```java
boolean result = map instanceof Object;
```

Finally we can print the result:

```java
System.out.println("Map is instance of HashMap: " + result);
```

```java live
  Map<Object, Object> map = new HashMap();
        boolean result = map instanceof Object;
        System.out.println("Map is instance of HashMap: " + result);
```

Since `HashMap` is a subclass of `Object` the expression `map instanceOf Object` evaluates to `true`

Similarly we can extend our previous task and check if our objects pets are instanceOf our classes for example.

``` java
class Main {
    public static void main(String[] args) {
        Mammal animal = new Mammal();
        Mammal myCat = new Cat();
        Mammal myDog = new Dog();
        

        boolean result = myDog instanceof Mammal;
        boolean result2 = myDog instanceof Cat;
        boolean result3 = myDog instanceof Dog;

        System.out.println(result);
        System.out.println(result2);
        System.out.println(result3);
    }
}
```

And the **output** from our code will be:

``` 
true
false
true
```

That output shows the `instanceOf` operator works of the **is-a relationship** concept that is based on a class **inheritance** or **interface implementation**.



[/slide]


[slide]

# Types of Polymorphism

There are **two** types of **Polymorphism** in Java:

- Dynamic Polymorpism

- Static Polymorphism


**Dynamic Polymorphism** is a Polymorphism that is exhibited at runtime.

Therefore the **behaviour** of the **method** is decided at **runtime**.

**Dynamic Polymorphism** can be achieved using **method overriding**.

We can declare a method in our **sub-class** while the method is already present in the **parent class**. That is called **method overriding**.

This way, a **child class** can give its own **implementation/property** to a method which is already provided by the **parent class**.

To understand better, lets take a look at this **example**:






[/slide]