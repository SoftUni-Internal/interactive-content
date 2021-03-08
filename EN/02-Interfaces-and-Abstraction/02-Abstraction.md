[slide hideTitle]

# Abstraction

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-5-6-what-is-abstraction-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Abstraction is a process of **hiding** the implementation details and providing only pure functionality to the user.

In Java, abstraction is achieved by using the **abstract** keyword for classes and interfaces.

Abstraction describes selecting data from a larger pool to show only **relevant** details of the object to the user.

It helps to reduce programming complexity and efforts. 

It is one of the most important concepts of OOPs.


There are 2 ways we can achieve **abstraction** in Java:

- Using **abstract** classes

- Using **interfaces**

[/slide]


[slide hideTitle]
# Example: Java Abstract Class

Lets see how we can use that abstract classes.

``` java
// Abstract parent class "Animal"
abstract class Animal{
   // Abstract method "sound"
   public abstract void sound();
}
```

``` java
// Dog class extends Animal class
public class Dog extends Animal{

    //It must declare and implement the abstract method
   public void sound(){
	System.out.println("Woof, Woof");
   }
}
```

``` java
public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog(); 
        //Like with the inheritance we can contain the object in an interface that it implements.
        dog.sound();
        //We can use only the methods the interface declares.
    }
}
```

Using the `abstract` classes, the **Output** will be:

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

Using `interface` example, the **Output** will be:

```
Walking....
```


[/slide]

[slide hideTitle]
# Abstraction vs Encapsulation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-9-abstraction-vs-encapsulation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="Interfaces-and-Abstraction-example(2).png" /]

[/slide]