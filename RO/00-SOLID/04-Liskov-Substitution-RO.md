[slide hideTitle]

# Substituția Liskov

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-15-17-liskov-substitution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Principiul de substituție a lui Liskov** a fost creat de **Barbara Liskov** în 1988.

Se afirmă că funcțiile care fac referință la clasele de bază trebuie să poată utiliza orice obiecte din clasele derivate (copil).

Cu alte cuvinte, principiul definește că obiectele unei **Superclass** ar trebui să fie **înlocuibile** cu obiecte din **Subclasele sale** fără a opri o aplicație.

Acest lucru necesită ca obiectele subclaselor tale să se comporte **în același mod** ca și obiectele superclasei tale.

[/slide]

[slide hideTitle]

# OCP vs LSP

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-18-ocp-vs-lsp-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Principiul substituției Liskov este doar o **extensie** a principiului **deschis-închis**.

Asta înseamnă că putem implementa principiul **deschis-închis** prin **obiecte suplimentare**, **moștenire** și **polimorfism**.

Trebuie să ne asigurăm că clasele derivate extind clasa de bază **fără a-și schimba comportamentul**.

[/slide]

[slide hideTitle]

# LSP - Încălcări și soluții

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-19-lsp-violations-and-solutions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**LSP** este aplicabil în prezența unei relații **Supertype-Subtype**, fie prin **extinderea** unei clase, fie **implementarea** unei interfețe.

Ne putem gândi la metodele definite în supertip ca **definind un plan obligatoriu**.

Se așteaptă ca fiecare subtip să-l urmeze.

Dacă o subclasă nu respectă planul superclasei, **nu respectă LSP**.

Acesta este un exemplu în acest sens și cum îl putem remedia:

```java
public interface Vehicle {
 
    void startEngine();
    void accelerate();
}
```
Definim o interfață simplă **Vehicle** cu câteva metode pe care toate vehiculele ar trebui să le poată îndeplini - pornirea motorului și accelerarea.

Clasa `MotorCar` implementează interfața `Vehicle` și metodele sale `startEngine()` și `accelerate()`.

```java
public class MotorCar implements Vehicle {
 
    private Engine engine;
 
    public void startEngine() {
        // Start the engine
        engine.on();
    }
 
    public void accelerate() {
        // Accelerate
        engine.powerOn(1000);
    }
}
```

Codul de mai sus definește un **motor** pe care îl putem **activa** și îl putem **accelera**.

Dar, ce se întâmplă dacă dorim să adăugăm o **mașină electrică**:

```java
public class ElectricCar implements Vehicle {
 
    public void startCombustionEngine() {
        throw new Error("The electric cars have no engine!");
    }
 
    public void accelerate() {
        // Accelerate
    }
}
```
O mașină electrică este un vehicul, cu toate acestea, nu are un motor pe bază de combustibil și, prin urmare, metoda `startCombustionEngine()` nu poate fi implementată.

Principiul de înlocuire Liskov își propune să evite astfel de cazuri, acestea pot fi identificate atunci când o **metodă care nu face nimic** sau nu poate fi **implementată.**

**Soluția** la aceste probleme este o ierarhie **corectă a moștenirilor** și, în cazul nostru, am rezolva problema prin diferențierea interfețelor vehiculelor cu diferite tipuri de motoare.


Din interfața vehiculului eliminăm metoda `startEngine()`:

```java
public interface Vehicle {
    void accelerate();
}
```

Apoi, creăm interfața **ElectricVehicle**, care **extinde interfața vehiculului** și are propria sa metodă `startElectricEngine()`:

```java
public interface ElectricVehicle extends Vehicle {

    int startElectricEngine();
}
```

Creăm o interfață **Car** care extinde Vehicle, în care adăugăm metoda `startCombustionEngine()`:

```java
public interface Car extends Vehicle {
    void startCombustionEngine();
}
```

Clasa **MotorCar** ar trebui să implementeze interfața **Car**:

```java
public class MotorCar implements Car {
 
    private Engine engine;
 
    public void startCombustionEngine() {
        // Starts the car engine
        engine.on();
    }
 
    public void accelerate() {
        // Accelerate
        engine.powerOn(1000);
    }
}
```

Și clasa **ElectricCar** implementează interfața **ElectricVehicle**:

```java
public class ElectricCar implements ElectricVehicle {

    @Override
    public int startElectricEngine() {
        // Starts the car engine
    }

    @Override
    public void accelerate() {
        // Accelerate
    }
}
```

Drept urmare, atât clasele `MotorCar`, cât și `ElectricCar` au devenit **mai concrete**, în timp ce **au aderat la principiul de substituție Liskov.**

[/slide]
