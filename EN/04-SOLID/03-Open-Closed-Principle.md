[slide hideTitle]

# Open Closed Principle

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-9-12-open-closed-principle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

"The code should be **open for extension**, but **closed for modification**".

Software entities (**classes, modules, methods, etc.**) should be extendable without actually changing the contents of the class you are extending. 

If we follow this principle strongly enough, it is possible to then modify the behavior of our code **without ever touching** a piece of **the original code** and adding new functionallities to our classes would happen only through adding new code, not fixing old one.

This principle does not count if we are fixing bugs, only then we should modify the existing code.

[/slide]

[slide hideTitle]

# Open Closed Principle - Example

In the following example, we have the **CalculateArea** class which calculates the area of various shapes.

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
    // TODO add getters and setters
}
``` 


**Rectangle** class:

```java
public class Rectangle {

    private double width;
    private double height;
    // TODO add getters and setters

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

- By implementing the **Shape** Interface, all shapes classes are obligatory in order to implement the `calculateArea()` method

**Circle** class:

```java
public class Circle implements Shape {

    private double radius;
    // TODO add getters and setters

    
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
    // TODO add getters and setters


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

    // TODO add getters and setters
   
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

By using the **Open-Closed principle**, we can add a square's area **without modifying** the CalculateArea class, so we can be certain that our existing application will not be affected.

Applying **Open-Closed principle** to our projects limits the need to change source code once it has been written, tested and debugged.

This principle is imporant to follow because if we change the already existing logic of our classes we can brake our client's code.

As well as applying it **reduces the risk of introducing new bugs** to existing code, leading to a more robust software.


[/slide]


[slide hideTitle]

# OCP - Violations

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-13-ocp-violations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Not following the Open-Close Principle will lead to problems**

**- Cascading changes through modules**
  If we change the code in our class, everybody that uses this class will change their behaviour implicitly.
  
 It does not matter if the clients are  inheriting or declaring the class's object, changes to the existing code will lead to cascading changes down the line.

**- Re-testing**
  Our code needs testing to validate it's correctness, this is an inevitable part of our jobs.

  Imagine if every time we want to add new feature and do it throgh changing our old code, we have to go through all the tests we have written for it and refactor them to make them valid again.

**- Logic depends on conditional statements**
  Some parts of our code depened on conditional statements logic, changing our old code may brake the conditional statements, changing the behaviour of our program, which may lead to bugs which will be hard to find.

[/slide]

[slide hideTitle]

# Open Close Principle - Solutions

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/EN/interactive-java-oop-advanced-s.o.l.i.d-14-ocp-silutions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Inheritance / Abstraction

As we did in the example we can level up an abstraction, giving a solution to our current problem,this way we will be able to keep the **OCP**
    
- Design Patterns

When we need to solve any design problems, we can check the common design patterns for a tested solution.

They have tested solutions, which will give us an abstract way to solve a given problem.
Few of the ones that can help us keep the **Open-Close-Principle** are:
   - Template Method Pattern
   - Strategy Pattern
   - Decorator Pattern

Later in the course, we will learn about the different design patterns.

[/slide]
