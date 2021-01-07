[slide] 


# Creational Patterns

Now, let's see the types of design patterns:

Creational patterns are **object creational design patterns**.

We use these patterns when we must decide on how to create an object of a class.

They contain two main ideas:

- **Encapsulating** knowledge about which classes the system uses.

- **Hiding** how instances of these classes are created.

## Singleton design pattern

Singleton pattern is one of the most used creational design patterns

A concept of the singleton class is a class that has only one object at a time.

The difference between a normal class and a singleton class is that we use a constructor to initialize the normal class, whereas for a singleton class we use the method `getInstance()`

Let's see this in a simple example:

Let's create a singleton class

``` java
public class Singleton {

    //First, lets create an object of Singleton
    private static Singleton instance = new Singleton();

    //Second let's make the constructor private. This way, this class cannot be instantiated
    private Singleton(){}

    //With getInstance() method we get the only object available
    public static Singleton getInstance() {
        return instance;
    }

    public void printMessage() {
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

        //Print the message
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

This way of creating it allows us to hide the complexity of making new instances from the client.

The copied object acts as a prototype and contains the information of the actual object.

Instead of using the `new` keyword, we can use `clone()` method.

We can add or remove objects at runtime using the prototype pattern.

[image assetsSrc="Design-Patterns.png" /]

Let's take a look at this example:

``` java
public abstract class Prototype {
    private String id;
    // this is our Prototype Class
    public Prototype(String id) {
        this.id = id; 
        }

    public String getId() { 
        return this.id; 
        }
    public abstract Prototype clone();
}
```


``` java
class ConcretePrototype extends Prototype {
    public ConcretePrototype(String id) {
        super(id);
    }
    @Override
    public Prototype clone() {
        return (Prototype)this.clone(); 
        }
}
```

We can use the **Prototype Design Pattern** when:

- We need to instantiate classes at runtime

- It's complicated or expensive for us to create a class

- Our clients don't need to know of object creation and representation



[/slide]

[slide]

# Builder Pattern

The builder design pattern is used to assemble a complex structure step by step.

Finally, it will return the whole object. 

We can create an object with a lot of possible configuration options.

Usage of Builder pattern:

- When our construction process must allow different representations for the object that is constructed.

- When we want our algorithm for creating objects to be independent of the parts that make up our object and how they are assembled.

Imagine that we want to create a character for our MMORPG game. Let's allow our constructor to create the character for us.

Let's take a look at this code example:

``` java
// this is our Hero class
public final class Hero {
    private final Race race;
    private final String name;
    private Integer startingHP;
    private final HairColor hairColor;
    private final Armor armor;
    private final Weapon weapon;

 Hero(Builder builder) {
    this.race = builder.race;
    this.name = builder.name;
    this.startingHP = builder.startingHP;
    this.hairColor = builder.hairColor;
    this.weapon = builder.weapon;
    this.armor = builder.armor;
    }
}
```

And that's how our builder class should be looking:

``` java
public class Builder {
    private final Race race;
    private final String name;
    private Integer startingHP;
    private HairColor hairColor;
    private Armor armor;
    private Weapon weapon;

    public Builder(Race race, String name) {
        if (race == null || name == null) {
            throw new IllegalArgumentException("Race and name can not be null");
        }
        this.race = race;
        this.name = name;
    }

    public Builder startingHP (Integer startingHP) {
        this.startingHP = startingHP;
        return this;
    }


    public Builder withHairColor(HairColor hairColor) {
        this.hairColor = hairColor;
        return this;
    }

    public Builder withArmor(Armor armor) {
        this.armor = armor;
        return this;
    }

    public Builder withWeapon(Weapon weapon) {
        this.weapon = weapon;
        return this;
    }

    public Hero build() {
        return new Hero(this);
    }
}
```

With this builder pattern, we have control over the steps of the **construction process**.

We can create a different representation with the same construction process.


[/slide]