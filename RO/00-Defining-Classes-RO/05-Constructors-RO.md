# Constructors

[slide hideTitle]
# Constructors

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

    }
}
```

## Constructor Implicit

In Java, a constructor is referred to as a **default** one when it does not accept any parameters and does not change the value of anything at initialization.

If you do not have a constructor in your class, the Java compiler will insert a default constructor for you.

You would not find it in your source code (the Java file), as it would be inserted into the code during compilation and is being stored in the `.class` file.

The default constructor does not have any parameters and looks like this:

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

In the example above, we have a constructor with one parameter - `brand`.

In the body of the constructor, we set the value of the field **brand** to the given parameter and initialize the **parts** field.


[/slide]

[slide hideTitle]
# Înlănțuirea Constructorului


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
Primul constructor ia două argumente "brand" și "horsePower".

Al doilea ia un singur argument - "brand".

În corpul celui de-al doilea constructor, găsim următoarea declarație Java:

```java
  this(brand, -1);
```
The `this` keyword, followed by parentheses and parameters means that another constructor in the same Java class is being called.

Java will determine which constructor the `this` keyword refers to by the number of parameters and their type (the constructor's signature).

In this example, we are calling the first constructor with two parameters, and we are setting the value of `horsePower` to **-1**.

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Car Constructors


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

Metoda `carInfo ()` trebuie să returneze informațiile despre orice obiect de mașină în următorul format:

"The car is: \{brand\} \{model\} - \{horsePower\} HP."

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

"The car is: \{brand\} \{model\} - \{horsePower\} HP."

Citiți informațiile despre mașină la fel ca sarcina anterioară, însă de această dată folosiți constructori pentru a crea obiecte, nu creați obiect cu constructorul implicit.

Ar trebui să puteți gestiona diferite tipuri de intrare, formatul va fi același cu sarcina anterioară, dar de data aceasta este posibil să lipsească unele date.

Pentru un exemplu, puteți obține doar marca auto - ceea ce înseamnă că trebuie să setați modelul mașinii la ”necunoscut” și valoarea Caiputere la -1.

Metoda principală ar trebui să fie așa:

```java
Car firstCar = new Car("TESLA");

Car secondCar = new Car("TESLA","MODEL S",503);

System.out.println(firstCar.carInfo());
System.out.println(secondCar.carInfo());
```


## Examples
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

