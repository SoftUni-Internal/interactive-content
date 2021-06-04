# Inversiunea  Dependenței

[slide hideTitle]

# Principiul Inversiunii Dependenței (DIP)

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-26-27-28-29-dependency-inversion-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

„**Depinde de abstracții, nu de concreții.**”

**Principiul inversiunii dependenței** definește conceptul că modulele **de nivel înalt** nu ar trebui să depindă de cele de **nivel inferior**.

Acestea **ar trebui să se bazeze pe abstracții**.

Este mai bine să **folosiți interfețe** în transmiterea informațiilor **decât anumite clase**.

În acest fel, ne vom baza **mai mult pe abstractizare decât pe concreție**.

Abstracțiile **nu trebuie să se bazeze pe niciun detaliu de implementare**.

În schimb, **detaliile trebuie să se bazeze pe abstracții**.

Scopul pe care încercăm să-l atingem prin abordarea abstractizării este de a avea **module independente**.

[/slide]

[slide hideTitle]

# Problemă

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-30-the-problem-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În exemplul următor, avem două clase: **Button** și **Lamp**.

Clasa **Button** primește un mesaj `poll()` care determină dacă un utilizator l-a apăsat sau nu.
 
Și o clasă **Lamp**, care primește o comandă **turnOn()** și o comandă **turnOff()**:

```java
public class Button() {

   private Lamp lamp;

   public Button(Lamp lamp) {
        this.lamp = lamp;
    }

   public void poll() {
      if (something) {
         lamp.turnOn();
      } else {
         lamp.turnOff();
      }
   }
}
```
Clasa **Button** depinde direct de clasa **Lamp**.

Dacă clasa Lamp se schimbă, atunci Butonul va trebui schimbat și el.

În plus, clasa **Button nu este reutilizabilă**: nu o puteți folosi pentru a porni o mașină de cafea, de exemplu.

Codul de mai sus este o încălcare a **principiului inversiunii dependenței**.

[/slide]

[slide hideTitle]

# Soluție de Inversare a Dependenței

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-31-dependency-inversion-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a rezolva problema de proiectare din spatele codului anterior, trebuie să creăm un **middle-layer** în care să putem defini o **interfață abstractă asociată cu funcționalitatea Buton** și să o implementăm prin orice clase precum `Lamp` :
```java
public interface SwitchableDevice {

    void turnOn();
    void turnOff();
}
```

Clasa `Button` depinde de interfața `SwitchableDevice`, nu de o clasă concretă precum `Lamp`:

```java 
public class Button {

    private SwitchableDevice switchableDevice;

    public Button(SwitchableDevice switchableDevice) {
        this.switchableDevice = switchableDevice;
    }

    public void poll() {

        if (something) {

            switchableDevice.turnOn();
        } else {

            switchableDevice.turnOff();
        }
    }
}
```
Clasa `Lamp` ar trebui să implementeze interfața `SwitchableDevice`:

```java
public class Lamp implements SwitchableDevice {

    @Override
    public void turnOn() {

    }

    @Override
    public void turnOff() {

    }
}
```

Clasa `Button` poate accepta **orice implementare a interfeței SwitchableDevice**.

În cazul nostru, acesta este un `Lamp`, dar ar putea fi **orice alt dispozitiv** care implementează interfața `SwitchableDevice`:
```java
public class Main {
    public static void main(String[] args) {
        Lamp lamp = new Lamp();
        Button button = new Button(lamp);
    }
}
```

Acest design permite unui `Button` să controleze orice dispozitiv care poate implementa interfața **SwitchableDevice**.

De asemenea, înseamnă că `Button` va putea **controla obiectele** care **nu au fost încă inițializate** și acest lucru face ca aplicația **să fie mai flexibilă**.

[/slide]

[slide hideTitle]

# Exemple de Dependență

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-32-dependency-examples-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Înțelegerea a ceea ce este **Inversiunea dependenței** poate dura ceva timp, dar să ne uităm la câteva exemple și să încercăm să înțelegem mai bine ce încercăm să realizăm atunci când aplicăm acest principiu.

**O dependență este orice componentă / sistem extern:**

- Cadru
- Biblioteca triplă
- Bază de date
- Sistemul de fișiere
- E-mail
- Serviciu web
- Resursă de sistem (de exemplu, ceas)
- Configurare
- Cuvântul cheie `new`
- Metoda statică
- Funcția globală
- Generator aleatoriu
- `System.in` / `System.out`
  

Vrem să decuplăm codul nostru de clase specifice, pentru ca acesta să fie flexibil și în orice moment al programului nostru să își schimbe comportamentul prin schimbarea implementării concrete a dependențelor sale.

[/slide]

[slide hideTitle]

# Cum să DIP

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-33-35-37-how-to-dip-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a urma principiul inversiunii dependenței putem aplica modelul de proiectare **injecție dependență**.

Injecția de dependență ne permite să folosim un **Inversion of Control Container (IOC)**.

Acesta este un instrument în care înregistrăm toate dependențele, cum ar fi \{**Interface** \} = \{**Clasa de generat** \}, apoi de fiecare dată când avem nevoie de o dependență o apelăm fără a fi necesară specificarea acesteia .

Există 3 tipuri de injecție de dependență.

[/slide]

[slide hideTitle]

# Injecția Constructorului

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-34-constructor-injection-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Prin acest tip de DI, **dependențele sunt trecute prin constructorul** din clasa dată.

**Pro**
- Astfel de clase au cerințe de auto-documentare
- Funcționează bine fără un container
- Garantează o stare validă

**Contra**
- Deține mulți parametri
- Este posibil ca unele metode să nu necesite întreaga bază de cod

## Exemplu

```java
public class Copy {​

  private Reader reader;​
  private Writer writer;​

  public Copy(Reader reader, Writer writer) {​
    this.reader = reader;​
    this.writer = writer;​
  }​

  public void copyAll() {}​
}
```

[/slide]

[slide hideTitle]

# Injecția Setterilor 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-36-setter-injection-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Setter Injection** - după cum sugerează și numele, dependențele sunt transmise seterilor.

**Pro**
- Poate fi schimbat oricând
- Foarte flexibil

**Contra**
- Posibilă stare invalidă a obiectului
- Mai puțin intuitiv

## Exemplu

```java
public class Copy {​
  private Reader reader; ​
  private Writer writer;​

  public void setReader(Reader reader) {}​
  public void setWriter(Writer writer) {}​
  public void copyAll() {}​
}
```

[/slide]

[slide hideTitle]

# Injecția Parametrilor

Acest tip de injecție sugerează injectarea dependențelor prin parametrii metodei.

**Pro**
- Nu necesită modificări în restul clasei
- Foarte flexibil

**Contra**
- Deține mulți parametri
- Întrerupe semnătura metodei

## Exemplu

```java
public class Copy {​
  public void copyAll(Reader reader, Writer writer) {}​
}
```

[/slide]

[slide hideTitle]

# Layering

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-38-39-layering-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există o diferență între straturile de programare tradiționale și straturile de inversare a dependenței.

## Programare Tradițională

- Modulele **de nivel înalt** utilizează module **de nivel scăzut**

[image assetsSrc="solid-example(4).png" /]

## Stratificarea inversării dependenței

- **Modulele** ridicate și **cele de nivel scăzut** depind de **abstracții**

[image assetsSrc="solid-example(5).png" /]

[/slide]
