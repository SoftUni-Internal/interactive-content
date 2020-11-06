# Access Modifiers

[slide]
# Private Access Modifier

With **private access** modifier object **hides data from the outside world** 

```java
class Person {
  private String name;
  Person (String name) {
    this.name = name;
  }
}
```

- Classes and interfaces **cannot** be private
- Data can be **accessed only within the declared class** itself
[/slide]

[slide]
# Protected Access Modifier

Grants **access to subclasses**

```java
class Team {
  protected String getName () {…}
  protected void setName (String name) {…}
}
```

- **Protected** modifier cannot be applied to classes and interfaces
- Prevents a **nonrelated** class from trying to use it

[/slide]

[slide]
# Default Access Modifier

Do not explicitly declare an access modifier

```java
class Team {
  String getName() {…}
  void setName(String name) {…}
}
```
**Available** to any other class in the same **package**

```java
Team real = new Team("Real");
real.setName("Real Madrid");
System.out.println(real.getName()); 
				// Real Madrid
```
[/slide]

[slide]
# Public Access Modifier

Grants access to **any class** belonging to the **Java Universe**

```java
public class Team {
  public String getName() {…}
  public void setName(String name) {…}
}
```
- Import a package if you need to use a class
- The `main()` method of an application must be **public**

[/slide]

[slide]
# Problem: Sort by Name and Age

[/slide]

[slide]
# Solution: Sort by Name and Age

[/slide]

[slide]
# Problem: Salary Increase

[/slide]

[slide]
# Solution: Salary Increase

[/slide]