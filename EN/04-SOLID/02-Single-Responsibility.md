[slide hideTitle]

# Single Responsibility

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-6-8-single-responsibility-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

"A class should have **one**, and **only one**, reason to change".

This is the first **SOLID** principle - **Single Responsibility**.

As stated by it, each class should serve **only one purpose**.

This does not imply that each class should have only one method, but they should all **relate directly** to the **responsibility of the class**.

All **methods and properties** should work towards the **same goal**.

When a class serves **multiple purposes or responsibilities**, it should be split into **separate classes**.

Let us see the following example:

```java
public class HeroSettings {

  public static void changeName(Hero hero) {
    // logic...
  }

  public static void selectRole(Hero hero) {
    // logic...
  }

  public void printHeroName() {
    // logic...
  }

  public void printHeroRole() {
    // logic...
  }
}
```
The name of the class states what it is responsible for, in this case - the settings of the hero. 

Therefore, in this class, we should not look for something that is not related to the settings of the character.

But this one has two responsibilities: **manipulating** and **printing**.

Having a method that prints out the hero features in this class **violates the single responsibility principle**. 

For this purpose, we should create another class, **which will only handle printing the features**:

```java
public class PrintHeroFeatures {

  public void printHeroName() {
    // logic...
  }

  public void printHeroRole() {
    // logic...
  }
}
```

The **single responsibility principle** does not mean that we should only have a single method per class.

It also does not require creating a separate class for every small functionality.

The key is that the code that is inside the class must be **directly related to the main purpose** of the class. 

It is a good practice to **create methods** that are **accurate**, **concise**, and as **straight-forward** as possible, although in some situations we cannot keep to this principle.

Thanks to the **single responsibility principle**, we can easily detect and eliminate bugs in the software.​

When all methods in a class are aimed to serve a single goal we say that this class has **strong cohesion**.

[/slide]
