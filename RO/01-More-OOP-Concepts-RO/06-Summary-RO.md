[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-41-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Cu un cod bine organizat este mai ușor de lucrat
- Putem reduce complexitatea folosind **Metode**, **Clase** și **Proiecte**
```java
public class Rectangle {
    private Point bottomLeft;
    private Point topRight;

    public Rectangle(Point bottomLeft, Point topRight) {
        this.bottomLeft = bottomLeft;
        this.topRight = topRight;
    }
```
- Putem refactura codul existent prin **descompunerea codului**
```java
for (char move : moves) {
    moveEnemies();
    killerCheck();
    movePlayer(move);
 }
```
- **Enumerații** definesc un set **fix de constante**
    - reprezinta **valori numerice**
    - putem ușor **exprima enumere** în **tipuri numerice**
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
- **Pachete** și cum să le importați

```java
import java.io.File;
```

## În următoarea lecție, veți învăța:

- Generics
    - clase
    - interfețe
    - metode
- Informații despre timpul rulării

[/slide]