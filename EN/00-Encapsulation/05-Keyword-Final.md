# The Final Keyword

[slide hideTitle]

# The Final Keyword

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/01.Java-OOP-Advanced-Encapsulation-31-32-33-keyword-final-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**"Final" classes cannot be extended.**

```java
public class Animal {}
public final class Mammal extends Animal {}

public class Cat extends Mammal {}
// Cannot be done
```

**"Final" methods cannot be overridden.**

```java
public final void move(Point point) {}

public class Mammal extends Animal {
  @Override 
  public void move() {}
}
// Cannot be done
```

**A "final" variable's value cannot be changed once it is set.**

When we declare a field as `final` it is like creating a constant, but we assign a value to it in the **constructor**.

```java
private final String name;
private final List<Person> firstTeam;

public Team (String name) {
  this.name = name;
  this.firstTeam = new ArrayList<Person> ();
}

public void doSomething(Person person) {
  this.name = "";
  this.firstTeam = new ArrayList<>();
  this.firstTeam.add(person);
  // Compile time error
}
```
[/slide]
