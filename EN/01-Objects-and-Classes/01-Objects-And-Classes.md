# Objects and Classes

[slide hideTitle]
# Objects

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-3-4-objects-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Everything in Java is associated with classes and objects, along with their fields and methods.

An object is a **basic unit** and an **instance of a class**.

Classes define templates for objects like **fields**, **constructors**, and **methods**.

An object represents **real-life subjects**. 

An object has:

- **state** - Represented by **fields**

- **behavior** - Represented by **methods**, which are used for object interaction 

- **identity** - Gives a **unique name** to an object

In real life, dogs have a **breed** state and **barking** behavior.

An object holds a set of **named values**.

A birthday object, for example, will have values like `day`, `month`, `year` etc.

```java live
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        LocalDate birthday = LocalDate.of(2018,5,5);
        System.out.println(birthday);
    }
}
```

[/slide]

[slide hideTitle]
# Classes

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-5-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Classes and objects are the **two main aspects** of object-orientated programming. 

In programming classes provide the **structure for describing and creating objects**. 

It builds the specification of a given type object from the real-world.

Classes define: 

- **Fields** (private variables) - Represent the state of an object

- **Getters/Setters** - Return or update fields

- **Methods** - Represent the behavior of an object


This is how **objects** can be derived from a **class**:

- `LocalDate` - A sample **class**

- `birthdayPeter` and `birthdayMaria` - Sample **objects**
[/slide]

[slide hideTitle]
# Real-Life Example

All entities with similar characteristics can be arranged in categories.

For example, all animals are grouped in a single `class` and each animal is an `object` of that class.

[image assetsSrc="ObjectsAndClasses_RealLifeExample.png" /]

Each animal has states like type, age, colour, preferred food, etc. and behaviour like eat, drink water, move, make sound, etc. 

A class is like an object constructor, that contains all of their similar characteristics. 

It is a "blueprint" for creating objects.


[/slide]

[slide hideTitle]
# Objects - Instances of Classes

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-6-objects-instances-of-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Creating an object based on a predefined class is called **instantiation**.

The **instance** is the object itself, which is created at runtime.

All instances have common **behavior**. 

To create an object: 

1) Declare the `main` **method**

2) Specify the **class name** 

3) Set an **object name**

4) Use the `new` **keyword** 

```java
public class Animal {
    public static void main(String[] args) {
        Animal dog = new Animal("mammal");
        Animal lizard = new Animal("reptile");
    }
}
```

[/slide]

[slide hideTitle]

# Classes vs. Objects

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-7-classes-vs-objects-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]