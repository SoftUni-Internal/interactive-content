# The Final Keyword

[slide hideTitle]

# Cuvântul Cheie Final

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/01.Java-OOP-Advanced-Encapsulation-31-32-33-keyword-final-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Clasele "Final" nu pot fi extinse.**

```java
public class Animal {}
public final class Mammal extends Animal {}

public class Cat extends Mammal {}
// Cannot be done
```

**Metodele "Final" nu pot fi suprascrise.**

```java
public final void move(Point point) {}

public class Mammal extends Animal {
  @Override 
  public void move() {}
}
// Cannot be done
```

**Valoarea unei variabile "final" nu poate fi modificată după ce a fost setată.**

Atunci când declarăm un câmp ca fiind `final`, este ca și cum am crea o constantă, dar îi atribuim o valoare în **constructor**.

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

[slide hideTitle]

# Cuvântul-cheie Final- Exemplu
[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/interactive-java-oop-advanced-encapsulation-final-keyword-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]
