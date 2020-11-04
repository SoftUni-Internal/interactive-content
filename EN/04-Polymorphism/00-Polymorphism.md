[slide]

# What is Polymorphism?

Hello there! Today, we will try to understand the nature of the forth OOP principle - The Polymorphism!

[image assetsSrc="Polymorphism-example.png" /]

Polymorphism is one of the four OOP pillars in **object-oriented** languages.

It allows us to perform a single action in many different ways.

For example, lets say we have **superclass** called `Mammal` that has method called `makeSound`. 

**Subclasses** of our class Mammal could be Cats, Dogs, Pigs, Horses - And they also have their individual implementation for making sound.

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

Now we can go in our Main class and create our cat and dog objects and call `makeSound()` method on both of them.


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

We can use the `instanceOf` operator in Java to check if an **object** is an instance of a **class** or not.

Lets take a look now at the different examples:


```java live
  HashMap<String, Integer> map = new HashMap();
  // first, we create a HashMap with key-value pair
        boolean result = map instanceof HashMap;
        // we check if our map is instance of "HashMap"
        System.out.println("Map is instance of HashMap: " + result);
```


[/slide]

[slide]

# Repl.it test

[html]

<iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@KaloqnKostadino/MyProject?lite=true"></iframe>	<iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@KaloqnKostadino/MyProject?lite=true"></iframe>


[/html]


[/slide]