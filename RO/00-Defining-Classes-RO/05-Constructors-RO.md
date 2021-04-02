# Constructors

[slide hideTitle]
# Constructors

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-25-26-27-28-constructors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În Java, un constructor este un bloc de coduri similar cu metoda.

Se numește atunci când se creează o instanță a clasei.

În momentul apelării constructorului, memoria pentru obiect este alocată în memorie.

Este un tip special de metodă care este utilizată pentru a inițializa obiectul.

De fiecare dată când un obiect este creat folosind cuvântul cheie `new()`, este chemat cel puțin un constructor.

Un constructor are același nume ca și clasa și arată astfel în codul java:

```java
public class Car {

   // Constructor
   public Car(){
       this.brand = "BMW";
    }
}
```

## Constructor Implicit

În Java, un constructor este numit ca fiind **implicit**  atunci când nu acceptă parametri și nu modifică nicio valoare la inițializare.

Dacă nu aveți un constructor în clasa voastră, compilatorul Java va insera un constructor implicit pentru voi.

Nu veți putea să îl găsiți în codul vostru sursă (fișierul Java), deoarece este inserat în cod în timpul compilării și este stocat în fișierul `.class`.

Constructorul implicit nu are niciun parametru și arată în felul următor:

```java
public Car() {
}
```

Dacă implementați orice constructor, atunci nu mai primiți un constructor implicit de la compilatorul Java.

## Multiple Constructors

Puteți avea mai mulți constructori în aceeași clasă, atâta timp cât semnătura lor (parametrii pe care îi iau) nu sunt aceiași.

Puteți defini câți constructori aveți nevoie.

Când o clasă Java conține mai mulți constructori, spunem că constructorul este supraîncărcat (vine în mai multe versiuni).

Aceasta este ceea ce înseamnă supraîncărcarea constructorului, că o clasă Java conține mai mulți constructori.

```java
public class Car {
  private String brand;  
  private int horsePower; 
  
  public Car(String brand) {
    this.brand = brand;
  }

  public Car(String brand, int horsePower) {
    this.brand = brand;
    this.horsePower = horsePower;
  }
}
```
În exemplul de mai sus, avem doi constructori.

Primul ia un singur parametru, iar al doilea ia doi parametrii.

[/slide]

[slide hideTitle]
# Starea Inițială a Obiectului

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-29-object-initial-state-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Constructorii stabilesc starea inițială a obiectului.

De exemplu, constructorul implicit este utilizat pentru a seta starea inițială implicită a obiectului, cum ar fi 0, nul etc., în funcție de tip.

```java
public class Car {
    private String brand;
    private int horsePower;

     public String toString() {
            return this.brand + " - " + this.horsePower;
        }
}
```

În exemplul de mai sus nu este creat niciun constructor, astfel încât compilatorul oferă un constructor implicit.

Aici **null** pentru **brand** și **0** pentru **horsePower** sunt furnizate în mod implicit de constructor.

Dacă doriți valori diferite de valorile implicite, o puteți seta în constructor:

```java
public class Car {
  String brand;
  List<Part> parts;
  
  public Car(String brand) {
    this.brand = brand;
    this.parts = new ArrayList<>();
  }
}
```

În exemplul de mai sus, avem un constructor cu un parametru - `brand`.

În corpul constructorului, setăm valoarea câmpului **brand** la parametrul dat și inițializăm câmpul **parts**.


[/slide]

[slide hideTitle]
# Înlănțuirea Constructorului

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-30-constructor-chaining-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În Java, este posibil să apelați un constructor din interiorul altui constructor.

Când apelați un constructor din interiorul altui constructor, utilizați cuvântul cheie `this` pentru a vă referi la constructor.

Să vedem următorul exemplu:

```java
class Car {
  private String brand;
  private int horsePower;

  public Car(String brand, int horsePower) {
    this.brand = brand;
    this.horsePower = horsePower;
  }

  public Car(String brand) {
    this(brand, -1);
  }
}
```
Primul constructor ia două argumente "**brand**" și "**horsePower**".

Al doilea ia un singur argument - "**brand**".

În corpul celui de-al doilea constructor, găsim următoarea declarație Java:

```java
  this(brand, -1);
```
Cuvântul cheie "**this**", urmat de paranteze și paramteri înseamnă că un alt constructor în aceeași clasă Java este apelat.

Java va determina la care constructor se referă cuvântul cheie `this` în funcție de numărul de parametri și tipul acestora (semnătura constructorului).

În acest exemplu, apelăm constructorul cu doi parametri, și setăm valoarea lui `horsePower` la **-1**. 

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Car Constructors

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-31-constructors-solution-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Constructors" timeLimit=5000 taskId="oop-basics-java-defining-classes-Constructors" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
[code-upload allowedMemory="30" /]

[task-description]
## Descriere

Creați o clasă de mașină cu următoarele proprietăți:

- Câmpuri (**private**):
  - `brand`: String
  - `model`: String
  - `horsePower`: int

- Constructori (**public**):
  - `Car(String brand)`
  - `Car(String brand, String model, int horsePower)`

- Metode (**public**)
  - `carInfo()`: String

Realizați constructori corespunzători pentru clasa Auto, astfel încât să puteți crea obiecte auto cu diferite tipuri de informații de intrare.

Dacă pierdeți informații despre câmpul de tip **Șir** setați valoarea la "**unknown**", iar pentru **întreg** setare de câmp **- 1**.

Metoda `carInfo()` trebuie să returneze informațiile despre orice obiect de mașină în următorul format:

"**The car is:** \{**brand**\} \{**model**\} - \{**horsePower**\} **HP.**"

## Sugestii

Mai întâi declarați constructorul care ia doar **marca auto** ca parametru:

```java
public Car(String brand) {
    this.brand = brand;
    this.model = "unknown";
    this.horsePower = -1;
}
```

De asemenea, creați un constructor care setează **toate câmpurile**:

```java
public Car(String brand, String model, int horsePower) {
    this.brand = brand;
    this.model = model;
    this.horsePower = horsePower;
}
```
Creați o metodă `carInfo()`.

Această metodă ar trebui să returneze informațiile despre orice obiect de mașină în următorul format:

"**The car is:** \{**brand**\} \{**model**\} - \{**horsePower**\} **HP.**"

Citiți informațiile despre mașină la fel ca sarcina anterioară, însă de această dată folosiți constructori pentru a crea obiecte, nu creați obiect cu constructorul implicit.

Ar trebui să puteți gestiona diferite tipuri de intrare, formatul va fi același cu sarcina anterioară, dar de data aceasta este posibil să lipsească unele date.

Pentru un exemplu, puteți obține doar marca auto - ceea ce înseamnă că trebuie să setați modelul mașinii la **horsepower** și valoarea Caiputere la -1.

Metoda principală ar trebui să fie așa:

```java
Car firstCar = new Car("TESLA");

Car secondCar = new Car("TESLA","MODEL S",503);

System.out.println(firstCar.carInfo());
System.out.println(secondCar.carInfo());
```


## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| 2 | The car is: Chevrolet unknown - -1 HP. |
| Chevrolet | The car is: TESLA MODEL-S - 503 HP. |
| TESLA MODEL-S 503 | |

| **Intrare**|**Ieșire**|
| --- | --- |
| 4 | The car is: BMW unknown - -1 HP. |
| BMW | The car is: Dacia Logan - 200 HP. |
| Dacia Logan 200 | The car is: Renault Clio - 75 HP. |
| Renault Clio 75 | The car is: Dacia Duster - 350 HP. |
| Dacia Duster 350 | |

[/task-description]
[tests]
[test open]
[input]
2
Chevrolet
TESLA MODEL-S 503
[/input]
[output]
The car is: Chevrolet unknown - -1 HP.
The car is: TESLA MODEL-S - 503 HP.
[/output]
[/test]
[test open]
[input]
4
BMW
Dacia Logan 200
Renault Clio 75
Dacia Duster 350
[/input]
[output]
The car is: BMW unknown - -1 HP.
The car is: Dacia Logan - 200 HP.
The car is: Renault Clio - 75 HP.
The car is: Dacia Duster - 350 HP.
[/output]
[/test]
[test]
[input]
4
a
d
w
d
[/input]
[output]
The car is: a unknown - -1 HP.
The car is: d unknown - -1 HP.
The car is: w unknown - -1 HP.
The car is: d unknown - -1 HP.
[/output]
[/test]
[test]
[input]
2
f
o o 2
[/input]
[output]
The car is: f unknown - -1 HP.
The car is: o o - 2 HP.
[/output]
[/test]
[test]
[input]
3
f u 1
c k 2
o f 2
[/input]
[output]
The car is: f u - 1 HP.
The car is: c k - 2 HP.
The car is: o f - 2 HP.
[/output]
[/test]
[test]
[input]
5
a b 1
d
w
d 2 4
d 2 4
[/input]
[output]
The car is: a b - 1 HP.
The car is: d unknown - -1 HP.
The car is: w unknown - -1 HP.
The car is: d 2 - 4 HP.
The car is: d 2 - 4 HP.
[/output]
[/test]
[test]
[input]
8
a b 1
d e 2
w e 2
d 2 4
a
d
w
d
[/input]
[output]
The car is: a b - 1 HP.
The car is: d e - 2 HP.
The car is: w e - 2 HP.
The car is: d 2 - 4 HP.
The car is: a unknown - -1 HP.
The car is: d unknown - -1 HP.
The car is: w unknown - -1 HP.
The car is: d unknown - -1 HP.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

