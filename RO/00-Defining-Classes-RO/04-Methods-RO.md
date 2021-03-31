# Methods

[slide hideTitle]

# What are Methods

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-15-16-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O metodă este o colecție de declarații care efectuează anumite sarcini specifice și returnează rezultatul apelantului.

O metodă poate efectua anumite sarcini specifice fără a returna nimic.

Metodele ne permit să refolosim codul fără a tasta din nou codul.

În Java, fiecare metodă trebuie să facă parte dintr-o anumită clasă.

Metodele sunt economii de timp și ne ajută să refolosim codul fără a tasta din nou codul.

Următorul exemplu definește o metodă numită `increaseHP` într-o clasă numită Car.

Când este apelată, această metodă crește variabila internă `horsePower` cu o valoare dată.

```java
class Car {
    private int horsePower;

    public void increaseHP(int value){
        horsePower += value;
    }
}
```
[/slide]

[slide hideTitle]
# Getters și Setters

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-17-18-getters-and-setters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În Java **getter** și **setter** sunt două metode convenționale care sunt folosite pentru recuperarea și actualizarea valorii unei variabile.

Pentru fiecare variabilă de instanță, o metodă getter își returnează valoarea în timp ce o metodă setter setează sau actualizează valoarea acesteia.

Getters și Seters sunt, de asemenea, cunoscuți ca **accesor** și **mutator**.

De ce avem nevoie de Getters și Setters?

Să aruncăm o privire la următorul exemplu:

```java
class Car {

    private int horsePower;

    public int getHorsePower() {
        return this.horsePower;
    }

    public void setHorsePower(int horsePower) {
         this.horsePower = horsePower;
    }
}
```

În primul rând, avem o clasă `Car` cu un câmp privat `horsePower`.

Deoarece câmpul are acces privat, nu putem să îl apelăm sau să îl modificăm.

Pentru a depăși această problemă, trebuie să folosim metodele "**get**" și "**set**".

Metoda `getHorsePower()` **returnează** valoarea câmpului "**horsePower**".

Metoda `setHorsePower()` **setează** valoarea câmpului "**horsePower**".

## Cuvânt Cheie "this"

Cuvântul cheie acesta, în Java, este o referință la obiectul curent - obiectul a cărui metodă sau constructor se numește.

Este ca un indicator (referință), dat de creatorii Java, cu care să accesăm elementele (câmpuri, metode, constructori) din propria noastră clasă:

```java
class Car {

    private int horsePower;
    
    // not working properly
    public void setHorsePower(int horsePower) {
         horsePower = horsePower;
    }

}

```

În exemplul de mai sus `setHorsePowerNotWorking()`, nu funcționează, deoarece parametrul metodei `horsePower` umbrește câmpul "horsePower".

Pentru a depăși această problemă, trebuie să folosim cuvântul cheie "**this**":

```java
 public void setHorsePower(int horsePower) {
         this.horsePower = horsePower;
    }
```

Cea mai obișnuită utilizare a cuvântului cheie "**this**" este de a elimina confuzia dintre atributele clasei și parametrii cu același nume.

[/slide]

[slide hideTitle]
# Metoda "toString()"

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-19-20-to-string-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Utilizând metoda `toString()`, puteți reprezenta orice obiect ca un șir.

În general, metoda toString returnează un șir care "reprezintă textual" acest obiect.

Rezultatul ar trebui să fie o reprezentare concisă, dar informativă, ușor de citit de o persoană.

Se recomandă ca toate subclasele să înlocuiască această metodă.

Dacă definiți metoda `toString()` în clasa dvs., atunci metoda implementată/Overridden `toString()` va fi numită: 

```java live no-template
public class Car {

    private String brand;
    private String model;

    public String toString()  {
        return this.brand + " - " + this.model;
    }

    public static void main(String[] args) {
        Car car = new Car();

        car.brand = "TESLA";
        car.model = "MODEL S";

        // TESLA - MODEL S
        System.out.println(car);
    }
}
```
[/slide]

[slide hideTitle]
# Metoda "equals()"

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-21-equals-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În java metoda `equals()` este utilizată pentru a compara egalitatea a două obiecte. 

```java
Car firstCar = new Car("TESLA", "MODEL S");
Car secondCar = new Car("BMW", "5 Series");

boolean isCarsEquals = firstCar.equals(secondCar);
// false
System.out.println(isCarsEquals);
```

Țineți minte că metoda `equals()` nu funcționează corect pentru compararea obiectelor, doar dacă nu este suprascrisă și utilizată împreună cu metoda `hashcode()`.
[/slide]

[slide hideTitle]
# Metoda "hashCode()"

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-22-hash-code-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `hashCode()` returnează valoarea de cod hash a **întregului** al obiectului.

Codul hash este întotdeauna același dacă obiectul nu se schimbă.

```java
Car car = new Car();

int hash = car.hashCode(); 

System.out.println(hash); 
```
Pentru a putea permite o comparare corectă a obiectelor trebuie să folosiți metodele `equals()` și `hashcode()` împreună.

În mod normal ambele trebuie suprascrise pentru a obține rezultate corecte.
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Car Info

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-23-problem-and-solution-car-info-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Car Info" taskId="oop-basics-java-defining-classes-lab-Car-Info" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere

Definiți clasa de mașină.

Clasa ar trebui să aibă următoarele câmpuri private:
- **Brand**: String
- **Model**: String
- **Horsepower**: String

Clasa ar trebui să aibă următoarele metode publice:

- `getBrand()`: String
- `setBrand(String brand)`: Void
- `getModel()`: String
- `setModel(String model)`: Void
- `getHorsePower()`: String
- `setHorsePower(int horsePower)`: Void
- `carInfo()`: String

## Sugestii

Utilizați clasa Mașină din problema anterioară.

Deoarece toate câmpurile din clasa **Car** sunt **private**, dacă încercați să accesați câmpurile direct prin clasă, ar trebui să aveți o **eroare de compilare**.

Pentru a depăși această problemă, trebuie să utilizați metode de fixare și setare.

În **clasa Car**, creați **getters** și **setere** pentru fiecare câmp de clasă.

- Getter pentru marca de mașini

```java
public String getBrand(){
    return this.brand;
}
```

- Setter pentru marca automobilului:

```java
public void setBrand(String brand) {
    this.brand = brand;
}
```
Faceți același lucru pentru toate câmpurile.

Ar trebui să puteți **seta** și **obține** valorile câmpului utilizând metodele **getter** și **seter**.

```java
Car car = new Car();

car.setBrand("TESLA");
car.setModel("MODEL S");
car.setHorsePower(503);
```

Creați o metodă `carInfo()`.

Această metodă ar trebui să returneze informațiile despre orice obiect de mașină în următorul format:

"**The car is:** \{**brand**\} \{**model**\} - \{**horsePower**\} **HP.**"

Trebuie să vă dați seama cum să creați o metodă și să o utilizați în codul exterior așa cum se arată mai jos:

```java
System.out.println(car.carInfo());
```


## Exemplu

| **Intrare**|**Ieșire**|
| --- | --- |
| 3 | The car is: Chevrolet Impala - 390 HP. |
| Chevrolet Impala 390 | The car is: TESLA MODEL-S - 503 HP. |
| TESLA MODEL-S 503 | The car is: DACIA DUSTER - 149 HP. |
| DACIA DUSTER 149 | |

| **Intrare**|**Ieșire**|
| --- | --- |
| 5 | The car is: This Car - 1 HP. |
| This Car 1 | The car is: Was Made - 2 HP. |
| Was Made 2 | The car is: Only For - 3 HP. |
| Only For 3 | The car is: Test Purposes - 4 HP. |
| Test Purposes 4 | The car is: No Way - 5 HP. |
| No Way 5 |  |

[/task-description]
[code-upload allowedMemory="30" /] 
[tests]
[test open]
[input]
3
Chevrolet Impala 390
TESLA MODEL-S 503
DACIA DUSTER 149
[/input]
[output]
The car is: Chevrolet Impala - 390 HP.
The car is: TESLA MODEL-S - 503 HP.
The car is: DACIA DUSTER - 149 HP.
[/output]
[/test]
[test open]
[input]
5
This Car 1
Was Made 2
Only For 3
Test Purposes 4
No Way 5
[/input]
[output]
The car is: This Car - 1 HP.
The car is: Was Made - 2 HP.
The car is: Only For - 3 HP.
The car is: Test Purposes - 4 HP.
The car is: No Way - 5 HP.
[/output]
[/test]
[test]
[input]
4
a b 1
d e 2
w e 2
d 2 4
[/input]
[output]
The car is: a b - 1 HP.
The car is: d e - 2 HP.
The car is: w e - 2 HP.
The car is: d 2 - 4 HP.
[/output]
[/test]
[test]
[input]
2
f u 1
o o 2
[/input]
[output]
The car is: f u - 1 HP.
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
d e 2
w e 2
d 2 4
d 2 4
[/input]
[output]
The car is: a b - 1 HP.
The car is: d e - 2 HP.
The car is: w e - 2 HP.
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
a b 1
d e 2
w e 2
d 2 4
[/input]
[output]
The car is: a b - 1 HP.
The car is: d e - 2 HP.
The car is: w e - 2 HP.
The car is: d 2 - 4 HP.
The car is: a b - 1 HP.
The car is: d e - 2 HP.
The car is: w e - 2 HP.
The car is: d 2 - 4 HP.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

