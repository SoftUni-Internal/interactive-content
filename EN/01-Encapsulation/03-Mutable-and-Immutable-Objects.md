# Mutable and Immutable Objects
[slide]
# Mutable vs Immutable Objects

The contents of **mutable** objects **can be altered**

```java
Point myPoint = new Point(0, 0); myPoint.setLocation(1.0, 0.0);
System.out.println(myPoint);

//java.awt.Point[1.0, 0.0]
```
The contents of **immutable** objects **can't be altered**

```java
String str = new String("old String");
System.out.println(str);
str.replaceAll("old", "new");
System.out.println(str);
```
[/slide]

[slide]
# Mutable and Immutable Fields

**Private mutable fields are not fully encapsulated**

```java
class Team {
  private String name;
  private List<Person> players;

  public List<Person> getPlayers() {
    return this.players;
  }
} 
```
- In this case **getter is like setter too**

Example:

```java
Team team = new Team();
Person person = new Person("David", "Adams", 22);
team.getPlayers().add(person);
System.out.println(team.getPlayers().size());  // 1
team.getPlayers().clear();
System.out.println(team.getPlayers().size());  // 0
```

**Imutable Fields**
- For securing our collection we can return `Collections.unmodifiableList()`

```java
class Team {
  private List<Person> players;
  public void addPlayer(Person person) {
    this.players.add(person);
    //Add new methods for functionality over list

  }
  public List<Person> getPlayers() {
    return Collections.unmodifiableList(players);
    //Returns a safe collections
  }
} 
```
[/slide]

[slide]
# Problem: First and Reserve Team

[/slide]

[slide]
# Solution: First and Reserve Team

[/slide]