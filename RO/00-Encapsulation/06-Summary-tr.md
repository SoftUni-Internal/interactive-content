[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/01.Java-OOP-Advanced-Encapsulation-34-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- **Încapsualrea**
    - se folosește pentru a ascunde implementarea
    - reduce complexitatea
    - se asigură că schimbările structurale rămân locale

```java
  public String getName() {…}
  protected String getName () {…}
  private String name;
```

- Obiectele **Mutabile** și**Immutabile** 
    - obiectele mutabile pot fi modificate
    - obiectele imutabile nu pot fi modificate

```java
String firstName = "John";
String lastName = "Davis";
// Șirurile sunt imutabile

String fullName = firstName.concat(" ").concat(lastName);
// Concatenatrea a două șiruri returnează un nou șir
```

- Cuvântul-cheie `final`
    - împiedică extinderea și suprascrierea entităților

```java
public final class Mammal extends Animal {}
```


## În cadrul lecției următoare, veți învăța:

- Ce reprezintă moștenirea

- Ierarhiile de clase

- Cum să accesați membrii clasei de bază 

- Tipurile de reutilizare a claselor
    - extindere
    - compunere
    - delegare

[/slide]
