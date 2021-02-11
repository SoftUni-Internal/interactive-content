[slide hideTitle]

# Single Responsibility

"A class should have **one**, and **only one**, reason to change".

This is the first **SOLID** principle - **Single Responsibility**.

One class should serve **only one purpose**.

This does not imply that each class should have only one method, but they should all **relate directly** to the **responsibility of the class**.

All **methods and properties** should work towards the **same goal**.

When a class serves **multiple purposes or responsibilities**, it should be made into a **new class**.

Let's see the following example:

```java
public class HeroSettings {​

  public static void changeName(Hero hero) {​
    //logic...
  }​

  public static void selectRole(Hero hero) {​
    //logic...
  }

  public void printHeroName() {
    //logic...
  }

  public void printHeroRole() {
    //logic...
  }
}
```
From the name of the class, we can find out what exactly it is responsible for, in this case, the settings of the hero. 

Therefore, in this class, we should not look for something that is not related to the settings of the character.

But in the code above, we have two responsibilities: **manipulating** and **printing**.

Having a method that prints out the hero features in this class **violates the Single Responsibility Principle**. 

For this purpose, we should create another class, **which will only handle printing the hero features**:

```java
public class PrintHeroFeatures {​

  public void printHeroName(){
    //logic...
  }

  public void printHeroRole(){
    //logic...
  }
}
```

The **Single Responsibility principle** does not mean that our classes should only have a few methods, or a small amount of code that they contain.

The key is that the code that is inside the class must be **directly related to the main purpose** of the class and the job it does. 

It is a good practice to **write methods** that are **accurate**, **concise**, and as **straight-forward** as possible, although in some situations we can not keep to this principle.

Thanks to the **Single Responsibility principle**, we can easily detect and eliminate bugs in the software.​

When all the methods in one class are aimed to serve one goal only then we say that this class has **strong cohension**.

[/slide]