# Creational Patterns

[slide hideTitle]

# Purposes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/EN/Java-OOP-Advanced-Design-Patterns-12-13-creational-patterns-purposes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Creational patterns are **object creational design patterns**.

We use these patterns when we must decide on how to create an object of a class.

They comprise of **two main ideas**:

- **Encapsulating** knowledge about which classes the system uses

- **Hiding** how instances of these classes are created

[/slide]

[slide hideTitle]

# Singleton Pattern

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/EN/Java-OOP-Advanced-Design-Patterns-14-singleton-pattern-demo-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The singleton pattern is one of the most used creational design patterns.

Its main concept is the singleton class - a class that has only one object at a time.

The difference between a normal class and a singleton class is that we use a constructor to initialize the normal class, whereas, for a singleton class, we use the `getInstance()` method.

## Example

First, let us create a singleton class:

``` java
public class Singleton {

    // First, we create an object of Singleton
    private static Singleton instance = new Singleton();

    // Then, we make the constructor private
    // This way the class cannot be instantiated
    private Singleton(){}

    // With the getInstance() method we get the only object available
    public static Singleton getInstance() {
        return instance;
    }

    public void printMessage() {
        System.out.println("Hello, I am a singleton class!");
    }
}
```

Let us see what is going on in our `Main` class:

``` java
public class Main {
    public static void main(String[] args) {

    	// Trying to create a singleton object via the constructor results in an error:
	// Compile Time Error: The constructor SingleObject() is not visible
	// Singleton object = new Singleton();

        // Get the only object available
        Singleton object = Singleton.getInstance();

        // Print the message
        object.printMessage();
    }
}
```

The **output** will be:

```
Hello, I am a singleton class!
```

This way, our Singleton class provides a method to get its **static** instance to the **outside world**.


[/slide]

[slide hideTitle]

# Prototype Pattern

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/EN/Java-OOP-Advanced-Design-Patterns-16-prototype-pattern-demo-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **prototype pattern** allows us to copy the class instance and create a new object from it.

This method of creating the object allows us to hide the complexity of making new instances from the client.

The copied object acts as a **prototype** and contains all the information of the **actual object**.

Instead of using the `new` keyword, we can use the `clone()` method.

We can add or remove objects at runtime using the prototype pattern.

[image assetsSrc="Design-Patterns.png" /]

Let us take a look at this **example**:

``` java
public abstract class Prototype {
    private String id;
    
    // This is our Prototype Class
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

We can use the **prototype design pattern** when:

- We need to instantiate classes at runtime

- It is complicated or expensive for us to create a class

- Our clients do not need to know of the object's creation and representation

[/slide]

[slide hideTitle]

# Builder Pattern

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/EN/Java-OOP-Advanced-Design-Patterns-19-builder-pattern-demo-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **builder design pattern** is used to assemble a complex structure step by step.

In the end, it will return the whole object. 

We can create an object with a lot of possible configuration options.

**Usage** of the builder pattern:

- When our construction process must allow different representations for the constructed object (highly customizable)

- When we want our algorithm for creating objects to be independent of the parts that make up our object and the process of their construction

Imagine that we want to create a character for our MMORPG game. 

We can make our constructor **create the character** for us.

Take a look at this code **example**:

``` java
// This is our Hero class
public final class Hero {
    private final Race race;
    private final String name;
    private Integer startingHP;
    private final HairColor hairColor;
    private final Armor armor;
    private final Weapon weapon;

 Hero(
     Race race, 
     String name, 
     Integer startingHP, 
     HairColor hairColor, 
     Armor armor, 
     Weapon weapon
     ) {
    this.race = race;
    this.name = name;
    this.startingHP = startingHP;
    this.hairColor = hairColor;
    this.armor = armor;
    this.weapon = weapon;
    }

    // getters...
}
```

And that is how our **Builder** class should be looking:

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
        return new Hero(
            this.race,
            this.name,
            this.startingHp,
            this.hairColor,
            this.armor,
            this.weapon
            );
    }
}
```

With the builder pattern, we have control over the steps of the **construction process**.

We can create a **different** representation with the **same** construction process.

[/slide]
