# Keyword Final
[slide hideTitle]
# Keyword Final

**Final class can not be extended**

```java
public class Animal {}
public final class Mammal extends Animal {}
public class Cat extends Mammal {}
// Can not be done
```

**Final method can not be overridden**

```java
public final void move(Point point) {}
public class Mammal extends Animal {
  @Override 
  public void move() {}
}
// Can not be done
```

**Final variable value can not be changed once it is set**

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