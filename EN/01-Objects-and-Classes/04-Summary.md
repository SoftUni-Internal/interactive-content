[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/EN/interactive-java-fundamentals-objects-and-classes-28-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson, you learned:

- Classes define templates for creating objects
    - fields
    - constructors
    - properties
    - methods

- Objects hold a set of named values

``` java
LocalDate birthday = 
LocalDate.of(2018, 5, 5);
System.out.println(birthday);
```

- Creating a class

``` java
class Car {
  public int fuel;

  public int drive(distance) {
    int fuelBurned = distance * 0.1;
    this.fuel -= fuelBurned;
    return fuelBurned;
  }
}
```

- Initializing an Instance of a Class

```java
Car bmw = new Car();
```

## In the next lesson, you will learn:

- What a String is

- Manipulating Strings

- Building and Modifying Strings
    - using the `StringBuilder` Class
    - why concatenation is a slow operation
    
[/slide] 


