# Ascunderea Implementării

[slide hideTitle]

# Încapsulare

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/01.Java-OOP-Advanced-Encapsulation-3-4-5-6-encapsulation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Incapsularea este procesul de împachetare a datelor și codului într-o singură unitate.**

Această practică oferă multe avantaje, cum ar fi:

- Creșterea **flexibilității și extensibilității** codului
- **Complexitate redusă**
- Modificările structurale rămân la un nivel **local**
- Permite **validarea și legarea datelor**

**Câmpurile obiectului trebuie să fie private**:

```java
class Person {
  private int age;
} 
```

- Ar trebui să folosim  **getters** și **setters** pentru **acces la date**

```java
class Person {
  public int getAge()
  public void setAge(int age)
}
```

## Exemplu

Câmpurile trebuie să fie  **private** (-):

`-name: string`

`-age: int`

Accesorii și mutatorii trebuie să fie  **public** (+):

`+Person(String name, int age)`

`+getName(): String`

`+setName(String name): void`

`+getAge(): int`

`+setAge(int age): void`

[/slide]

[slide hideTitle]

# Cuvântul-cheie "This" 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/01.Java-OOP-Advanced-Encapsulation-7-8-keyword-this-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `.this` este referință la **obiectul curent**

Se referă la **instanța clasei curente**:

```java
public Person(String name) {
  this.name = name;
}
```

- Utilizând `.this` putem invoca **metodele** din clasa obiectului

```java
public String fullName() {
  return this.getFirstName() + " " + this.getLastName();
}
```

- Utilizând `.this` putem invoca și  **constructorul** clasei curente

```java
public Person(String name) {
  this.firstName = name;
}
```

```java
public Person (String name, Integer age) {
  this(name);
  this.age = age;
}
```
[/slide]

[slide hideTitle]

# Ascunderea Implementării - Exemplu

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/interactive-java-oop-advanced-encapsulation-hiding-implementation-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]
