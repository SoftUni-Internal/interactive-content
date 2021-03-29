[slide hideTitle]

# Open-Closed Principle

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-9-12-open-closed-principle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

"The code should be **open for extension**, but **closed for modification**".

Software entities (**classes, modules, methods, etc.**) should be extendable without changing the contents of the class you are extending. 

By following this principle, we can modify the behavior of our code at a later time, **without making changes** to **the original code**.

Adding new functionalities to our classes would happen only through adding new code, not fixing the old one.

This principle does not apply when fixing bugs - in that case we can directly modify the existing code.

## Example

In the following example, we have the **CalculateArea** class that calculates the area of various shapes.

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

If we want to add **square** for example, we have to **modify** the `calculate()` method in the **CalculateArea** class.

**Thus, we will break the open-closed principle**.

According to this principle, **we can not modify the existing code**, but **we can extend by adding more code**.

To overcome this problem, we have to **add abstraction** to the `calculate()` method.

We have to **delegate** the responsibility of providing the calculation of the area inside the shape itself.

Each **shape** must have its **own logic** to calculate its area.

See the solution of the problem in the following code: 

- We add **abstraction** by creating the **Shape** Interface

- We declare the `calculateArea()` method to the **Shape** Interface

```java
public interface Shape {
    double calculateArea();
}
```

- By implementing the **Shape** Interface, all shapes classes are obligatory to implement the `calculateArea()` method

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

In the end, our **CalculateArea** class should look like this:

```java
public class CalculateArea {

    public static double calculate(Shape shape) {
        return shape.calculateArea();
    }
}
```

By using the **open-closed principle**, we can add a square's area **without modifying** the CalculateArea class, so we can be certain that our existing application will not be affected.

Applying the **open-closed principle** to our projects limits the need to change source code once it has been written, tested, and debugged.

This principle is important to follow because if we change the already existing logic of our classes we can break our client's code.

As well as applying it **reduces the risk of introducing new bugs** to existing code, leading to a more robust software.


[/slide]


[slide hideTitle]

# OCP - Violations

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-13-ocp-violations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Not following the open-closed principle will lead to problems:**

- **Cascading changes through modules**
  If we change the code in our class, everyone that use this class will change their behavior implicitly.
  
 It does not matter if the clients are inheriting or declaring the class's object, changes to the existing code will lead to cascading changes down the line.

- **Re-testing**
  Our code needs testing to validate its correctness, this is an inevitable part of the development process.

  Imagine if every time we want to add a new feature and do it through changing our old code, we have to go through all the tests we have written for it and refactor them to make them valid again.

- **Logic depends on conditional statements**
  Some parts of our code depend on conditional statements logic, changing our old code may break the conditional statements, changing the behavior of our program, which may lead to bugs that will be hard to find.

[/slide]

[slide hideTitle]

# Open-Closed Principle - Solutions

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-14-ocp-silutions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Inheritance / Abstraction**

As we did in the example, we can level up an abstraction, giving a solution to our current problem, this way we are enforcing the **OCP**.
    
- **Design Patterns**

When we need to solve any design problems, we can check the common design patterns for a tested solution.

They have tested solutions, which will give us an abstract way to solve a given problem.

A few that can help us keep the **open-closed principle** are:
   - Template Method Pattern
   - Strategy Pattern
   - Decorator Pattern

Later in the course, we will learn about the different design patterns.

[/slide]
