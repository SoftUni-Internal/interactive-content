# Objects and Classes

[slide hideTitle]
# Objects

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-3-4-objects-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Everything in Java is associated with classes and objects, along with their fields and methods.

An object is a **basic unit** and an **instance of a class**.

Classes define templates for **fields**, **constructors**, and **methods**.

Objects in programming are modeled after **real-world objects**.

If we take dogs, for example, they have a **breed** (state) and a specific behavior (barking, wagging their tail, eating).

Each object in Java has:

- a **state** - Represented by **fields**

- a **behavior** - Represented by **methods**, which are used for object interaction 

- an **identity** - A **unique name** assigned to the object

An object holds a set of **named values**.

For example, a **birthday** object will have values like `day`, `month`, `year` etc.

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

Classes and objects are the **two main aspects** of object-oriented programming. 

A class can be defined as a template that describes the behavior that the object of its type support.

Classes provide a way to structure objects.

Classes define: 

- **Fields** - Represent the state of an object

- **Getters/Setters** - Return or update fields

- **Methods** - Represent the behavior of an object


This is how **objects** can be derived from a **class**:

- `LocalDate` - A sample **class**

- `birthdayPeter` and `birthdayMaria` - Sample **objects**

[/slide]

[slide hideTitle]
# Real-Life Example

All entities with similar characteristics can be arranged in categories.

For example, all animals are grouped in a single **class**, and each animal is an **object** of that class.

[image assetsSrc="ObjectsAndClasses_RealLifeExample.png" /]

Each animal has similar characteristics, so the **animals** represented with a programming class could have the following fields: type, age, color, preferred food, etc.

Also, each animal can eat, drink water, move, make a sound, etc, so methods for each of these actions should be declared within the **animal** class.

A class is like an object constructor that contains all of their similar characteristics. 

It is a "blueprint" for creating objects.


[/slide]

[slide hideTitle]
# Objects - Instances of Classes

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-6-objects-instances-of-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Creating an object based on a predefined class is called **instantiation**.

An **instance** of a class is an object created at runtime.

All instances have common **behavior**. 

To create an object: 

1) Specify the **class name** 

2) Set an **object name**

3) Use the `new` **keyword** 

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
