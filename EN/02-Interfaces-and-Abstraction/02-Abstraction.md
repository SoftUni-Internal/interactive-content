# Abstraction

[slide hideTitle]

# What is Abstraction

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-5-6-what-is-abstraction-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Abstraction is the process of **hiding** the implementation details and providing only pure functionality to the user.

In Java, abstraction is achieved by using the **abstract** keyword for classes and interfaces.

Abstraction describes selecting data from a larger pool to show only **relevant** details of the object to the user.

It reduces programming complexity and efforts. 

It is one of the most important concepts of OOP.


There are **two** ways we can achieve **abstraction** in Java:

- Using **abstract** classes

- Using **interfaces**

[/slide]


[slide hideTitle]
# Example: Java Abstract Class

Let us see how we can use that abstract classes.

``` java
// Abstract parent class "Animal"
abstract class Animal {
  // Abstract method "sound"
  public abstract void sound();
}
```

``` java
// The Dog class extends the Animal class.
public class Dog extends Animal {

// It must declare and implement the abstract method.
  public void sound(){
    System.out.println("Woof, Woof");
  }
}
```

``` java
public class Main {
  public static void main(String[] args) {
  
    Animal dog = new Dog(); 
    // Just like with inheritance, we can contain the object in an interface that it implements.
    
    dog.sound();
    // We can use only the methods the interface declares.
  }
}
```

Using these `abstract` classes, the **output** will be:

``` 
Woof, Woof
```
[/slide]


[slide hideTitle]
# Example: Java Interface

We can use interfaces too.

Here is a simple example:

``` java
interface Pet {
  public void walk();
}
```

``` java
class Dog implements Pet {
  public void walk() {
    System.out.println("Walking....");
  }
}
```

``` java
public class Main {
  public static void main(String args[]) {
    Pet pet = new Dog();
    pet.walk();
  }
}
```

The **output** will be:

```
Walking...
```


[/slide]

[slide hideTitle]
# Abstraction vs. Encapsulation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-9-abstraction-vs-encapsulation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

|**Abstraction**|**Encapsulation**|
|---|---|
|Solves the problem at the design level.|Solves the problem at the implementation level.|
|Lets you focus on what the object does instead of how it does it.|Means holding the internal details or mechanics of how an object does something.|
|Used for hiding unwanted data and providing relevant data.|Holds the code and data into a single unit to protect the data from the outside world.|
|The outer layout, used in terms of design. Example: Outer look of a mobile phone - it has a display screen and keypad buttons to dial a number.|The inner layout, used in terms of implementation. Example: Inner implementation detail of a mobile phone - how the keypad button and display screen are connected using circuits.|
[/slide]
