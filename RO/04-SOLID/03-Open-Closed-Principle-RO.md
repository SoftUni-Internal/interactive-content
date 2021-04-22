[slide hideTitle]

# Principiul Deschis-Închis

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-9-12-open-closed-principle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

„Codul computerului ar trebui să fie **deschis pentru extensie**, dar **închis pentru modificare**”.

Entitățile software (**clase, module, metode**) ar trebui să poată fi extinse fără a fi nevoie să modificați conținutul clasei pe care o extindeți.

Urmând acest principiu, putem modifica comportamentul codului nostru ulterior, **fără a face modificări** la **codul original**.

Adăugarea de noi funcționalități la clasele noastre ar trebui să aibă loc doar prin adăugarea unui cod nou, nu prin remedierea celui vechi.

Acest principiu nu se aplică la remedierea erorilor - în acest caz putem modifica direct codul existent.

## Exemplu

În exemplul următor, avem clasa **CalculateArea** responsabilă pentru calcularea ariei diferitelor forme.

Clasa **CalculateArea**:

```java
public class CalculateArea {

    public static double calculate(Object obj) {

        double area = 0.0;
        if (obj instanceof Rectangle) {

            Rectangle rectangle = (Rectangle) obj;
            area = rectangle.getWidth() * rectangle.getHeight();

        }else if (obj instanceof Circle){

            Circle circle = (Circle) obj;
            area = circle.getRadius() * circle.getRadius() * Math.PI;
        }

        return area;
    }
}

```

Clasa **Circle**:

```java
public class Circle {

    private double radius;
     // TODO: add getters and setters
}
``` 


Clasa **Rectangle**:

```java
public class Rectangle {

    private double width;
    private double height;
     // TODO: add getters and setters

}
``` 

Dacă vrem să definim un **pătrat**, de exemplu, trebuie să **modificăm** metoda `calculate()` din clasa **CalculateArea**.

**Acest lucru ar încălca principiul deschis-închis**.

Conform principiului, **nu putem modifica codul existent**, dar **îl putem extinde adăugând mai mult cod**.

Pentru a depăși această problemă, trebuie să **adăugăm abstractizare** la metoda `calculate()`.

Putem **plasa** noua funcționalitate în interiorul formei în sine.

Fiecare **formă** va avea **propria sa logică** pentru a-și calcula aria.

Principiul poate fi aplicat ca în următorul cod:

- Adăugăm **abstractizare** prin crearea interfeței **Shape**

- Declarăm metoda `calculateArea()` la interfața **Shape**

```java
public interface Shape {
    double calculateArea();
}
```

- Prin implementarea interfeței **Shape**, toate clasele de forme sunt obligate să implementeze metoda `calculateArea()`

Clasa **Circle**:

```java
public class Circle implements Shape {

    private double radius;
     // TODO: add getters and setters

    
    @Override
    public double calculateArea() {
        return getRadius() * getRadius() * Math.PI;
    }
}
```

Clasa **Rectangle**:

```java
public class Rectangle implements Shape {

    private double width;
    private double height;
     // TODO: add getters and setters


    @Override
    public double calculateArea() {
        return getWidth() * getHeight();
    }
}
``` 

Clasa **Square**:

```java
public class Square implements Shape {

    private double side;

     // TODO: add getters and setters
   
    @Override
    public double calculateArea() {
        return getSide() * getSide();
    }
}

```

Clasa noastră **CalculateArea** ar trebui să arate așa:

```java
public class CalculateArea {

    public static double calculate(Shape shape) {
        return shape.calculateArea();
    }
}
```

Utilizând **principiul deschis-închis**, putem calcula aria pătratului **fără a modifica** clasa CalculateArea, deci putem fi siguri că aplicația noastră existentă nu va fi afectată.

Aplicarea **principiului deschis-închis** la proiectele noastre limitează necesitatea de a schimba codul sursă după ce a fost scris, testat și depanat.

Acest principiu este important de urmat deoarece, dacă schimbăm logica existentă a claselor noastre, putem deteriora funcțiile de lucru.

Aplicarea acestui principiu, de asemenea, **reduce riscul introducerii de noi erori** în codul existent, acest lucru creează un software mai robust.

[/slide]


[slide hideTitle]

# OCP - Încălcări

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-13-ocp-violations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Nerespectarea principiului deschis-închis poate duce la probleme suplimentare:**

- **Modificări în cascadă prin module**
  Dacă schimbăm codul într-o clasă, orice lucru care folosește această clasă își va schimba comportamentul implicit.
  
 Nu contează dacă clienții moștenesc sau declară obiectul clasei, modificările aduse codului existent vor duce la modificări în cascadă pe linie.

- **Re-testare**
  Codul nostru are nevoie de testare pentru validarea corectitudinii acestuia, aceasta este o parte inevitabilă a procesului de dezvoltare.

  De fiecare dată când modificăm codul existent, trebuie să efectuăm toate testele de la început și să îl refacem în consecință.

- **Logica depinde de declarațiile condiționate**
  Unele părți ale codului nostru depind de declarații condiționale, schimbarea codului nostru vechi poate rupe declarațiile condiționale, schimbarea comportamentului programului nostru, acestea pot fi greu de găsit.

[/slide]

[slide hideTitle]

# Principiu Deschis-Închis - Soluții

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-14-ocp-solutions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Moștenire / abstractizare**

Putem ridica abstractizarea la niveluri superioare atunci când trebuie să aplicăm **OCP**.
    
- **Modele de design**

Când trebuie să rezolvăm orice problemă de proiectare, putem verifica modelele de proiectare obișnuite pentru o soluție care este deja gata.

Există soluții care urmăresc să ne ofere un mod abstract de a rezolva o anumită problemă.

Câteva care ne pot ajuta să păstrăm **principiul deschis-închis** sunt:
   - Model de metodă șablon
   - Model de strategie
   - Model decorator

Mai târziu, în curs, vom afla despre diferitele tipuri de modele de design.
[/slide]
