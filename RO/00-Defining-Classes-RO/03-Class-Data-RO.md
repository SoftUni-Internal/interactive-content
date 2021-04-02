# Class Data

[slide hideTitle]

# Fields

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-10-11-class-data-fields-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un câmp Java este o variabilă din interiorul unei clase.

De exemplu, într-o clasă care reprezintă o mașină, clasa Mașină poate conține următoarele câmpuri:

- **Brand**
- **Model**
- **Horse power**

Clasa Java corespunzătoare ar putea fi definită astfel:

```java
public class Car {

    String brand;
    String model;
    int horsePower;

}
```

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Define Car Class

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-12-13-problem-and-solution-define-car-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Creați o clasă numită **Car**.

Clasa ar trebui să aibă câmpuri **publice** pentru:
- **Brand**: String
- **Model**: String
- **Horsepower**: Integer

Creați o **nouă clasă** și asigurați-vă de **denumirea corectă**

Acum ar trebui să vă puteți folosi clasa:

```java
import java.util.*;
public class Main {
    public static void main (String[] args) {

        Car car = new Car();

        car.brand = "TESLA";
        car.model = "MODEL S";
        car.horsePower = 503;

        System.out.println(String.format(
                "The car is: %s %s - %d HP",
                car.brand, car.model, car.horsePower
        ));
    }
}
```

## Soluție

Creați o nouă clasă și **asigurați-vă o denumire corectă!**
[image assetsSrc="defining-classes-example(2).png" /]

Creați o clasă **Principală** în același pachet pentru a vă testa clasa Car:
[image assetsSrc="defining-classes-example(1).png" /]

Setați câmpurile din clasa Car:

```java
public class Car {

    String brand;
    String model;
    int horsePower;
}
```

[/slide]

[slide hideTitle]

# Access Modifiers

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-14-access-modifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Modificatorii de acces determină dacă alte clase pot folosi un anumit câmp.

Există patru tipuri de modificatori de acces în Java:

- "Private"
- "Package-private"
- "Protected"
- "Public"

Utilizarea unui modificator de acces **privat** înseamnă că doar cod din cadrul corpului clasei poate accesa acest câmp Java.

Dacă nu folosiți niciun modificator, este tratat ca **package-private** în mod **default**.

Modificatorul de acces **package-private** înseamnă că doar cod din cadrul clasei sau a altor clase din același pachet pot accesa câmpul.

Acesta furnizează mai multă accesibilitate decât modificatorul **private**.

Modificatorul de acces **package-private** este **mai restrictiv** decât **protected** și **public**.

Modificatorul de acces **protected** este accesibil înăuntrul și în afara pachetului, dar doar prin **inheritance**.

**Inheritance** este un mecanism prin care un obiect **dobândește** toate **proprietățile** și **comportamentele** unui obiect **părinte**.

Puteți afla mai multe despre **inheritance** [aici](https://docs.oracle.com/javase/tutorial/java/concepts/inheritance.html).

Modificatorul de acces **public** este accesibil **peste tot**.


[/slide]