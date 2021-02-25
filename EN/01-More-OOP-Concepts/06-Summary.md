[slide hideTitle]
# Summary

# In this lesson you learned:

- Well organized code is easier to work with
    - we can reduce complexity using **methods**, **classes** and **projects**


```java
public class Rectangle {
    private Point bottomLeft;
    private Point topRight;

    public Rectangle(Point bottomLeft, Point topRight) {
        this.bottomLeft = bottomLeft;
        this.topRight = topRight;
    }
```


- We can refactor existing code by **breaking code down**


```java
for (char move : moves) {
    moveEnemies();
    killerCheck();
    movePlayer(move);
 }
```

- **Enumerations** define a fixed **set of constants**
    - represent **numeric values**
    - we can easily **cast enums** to **numeric types**


```java 
 enum Day { 
  Mon(1),Tue(2),Wed(3),Thu(4),Fri(5),Sat(6),Sun(7);

  private int value;

  Day(int value) {
    this.value = value;
  }
}

System.out.println(Day.Sat); // Sat
```

- **Packages** are imported using the `import` keyword


## In the next lesson, you will learn:

- Generics
    - classes
    - interfaces
    - methods
- Runtime information

[/slide]
