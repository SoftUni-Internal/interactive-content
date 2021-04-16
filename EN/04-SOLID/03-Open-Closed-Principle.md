[slide hideTitle]

# Open-Closed Principle

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-9-12-open-closed-principle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

"Computer code should be **open for extension**, but **closed for modification**".

Software entities (**classes, modules, methods, etc.**) should be extendable without having to change the content of the class you are extending. 

By following this principle, we can modify the behavior of our code at a later time, **without making changes** to **the original code**.

Adding new functionalities to our classes should happen only through adding new code, not fixing the old one.

This principle does not apply when fixing bugs - in that case we can directly modify the existing code.

## Example

In the following example, we have the **CalculateArea** class responsible for calculating the area of various shapes.

**CalculateArea** class:
```java
public class CalculateArea {

    public static double calculate(Object obj) {

        double area = 0.0;
        if (obj instanceof Rectangle) {

            Rectangle rectangle = (Rectangle) obj;
            area = rectangle.getWidth() * rectangle.getHeight();

        }else if (obj instanceof Circle){

            Circle circle = (Circle) obj;
            area = circle.getRadius() * circle.getRadius() * Math.PI;
        }

        return area;
    }
}

```

**Circle** class:

```java
public class Circle {

    private double radius;
     // TODO: add getters and setters
}
``` 


**Rectangle** class:

```java
public class Rectangle {

    private double width;
    private double height;
     // TODO: add getters and setters

}
``` 

If we want to define a **square** for example, we have to **modify** the `calculate()` method in the **CalculateArea** class.

**This would break the open-closed principle**.

According to the principle, **we can not modify existing code**, but **we can extend it by adding more code**.

To overcome this problem, we have to **add abstraction** to the `calculate()` method.

We can **place** the new functionality inside the shape itself.

Each **shape** will have its **own logic** to calculate its area.

The priciple can get applied as in the following code: 

- We add **abstraction** by creating the **Shape** Interface

- We declare the `calculateArea()` method to the **Shape** Interface

```java
public interface Shape {
    double calculateArea();
}
```

- By implementing the **Shape** Interface, all shape classes are obligated to implement the `calculateArea()` method

**Circle** class:

```java
public class Circle implements Shape {

    private double radius;
     // TODO: add getters and setters

    
    @Override
    public double calculateArea() {
        return getRadius() * getRadius() * Math.PI;
    }
}
```

**Rectangle** class:

```java
public class Rectangle implements Shape {

    private double width;
    private double height;
     // TODO: add getters and setters


    @Override
    public double calculateArea() {
        return getWidth() * getHeight();
    }
}
``` 

**Square** class:

```java
public class Square implements Shape {

    private double side;

     // TODO: add getters and setters
   
    @Override
    public double calculateArea() {
        return getSide() * getSide();
    }
}

```

Our **CalculateArea** class should look like this:

```java
public class CalculateArea {

    public static double calculate(Shape shape) {
        return shape.calculateArea();
    }
}
```

By using the **open-closed principle**, we can calculate a square's area **without modifying** the CalculateArea class, so we can be certain that our existing application will not be affected.

Applying the **open-closed principle** to our projects limits the need to change source code once it has been written, tested, and debugged.

This principle is important to follow because if we change the existing logic of our classes we can damage working functions.

Applying this principle also **reduces the risk of introducing new bugs** to existing code, this creates a more robust software.


[/slide]


[slide hideTitle]

# OCP - Violations

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-13-ocp-violations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Not following the open-closed principle can lead to additional problems:**

- **Cascading changes through modules**
  If we change the code in a class, anything that uses this class will change its behavior implicitly.
  
 It does not matter if the clients are inheriting or declaring the class's object, changes to the existing code will lead to cascading changes down the line.

- **Re-testing**
  Our code needs testing validating its correctness, this is an inevitable part of the development process.

  Anytime we alter existing code we must conduct all testing from the beginning and refactor it accordingly.

- **Logic depends on conditional statements**
  Some parts of our code depend on conditional statements,changing our old code may break the conditional statements, changing the behavior of our program, these can be hard to find.

[/slide]

[slide hideTitle]

# Open-Closed Principle - Solutions

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-14-ocp-silutions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Inheritance / Abstraction**

We can elevate abstraction to higher levels when we need to enforce the **OCP**.
    
- **Design Patterns**

When we need to solve any design problem, we can check the common design patterns for a ready solution.

There are solutions, which aim to give us an abstract way to solve a given problem.

A few that can help us keep the **open-closed principle** are:
   - Template Method Pattern
   - Strategy Pattern
   - Decorator Pattern

Later in the course, we will learn about the different kinds of design patterns.

[/slide]
