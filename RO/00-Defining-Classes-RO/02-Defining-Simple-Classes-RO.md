# Defining Classes

[slide hideTitle]
# Defining Simple Classes


[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-3-4-defining-classes-defining-simple-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O clasă este **elementul de bază al unui limbaj obiect-orientat**, cum ar fi Java.

Totul în Java este asociat cu **clase** și **obiecte**, împreună cu atributele și **metodele sale**.

De exemplu: în viața reală, o **mașină este un obiect**. 

```java
public class Car {

    String Color;
    int weight;

    void drive(){ ... }

    void brake(){ ... }
}
```

Mașina are **atribute**, precum **greutate** și **culoare** și **metode**, cum ar fi **unitate** și **frână**.

O **clasă este un șablon** care descrie **datele** și **comportamentul** asociate cu instanțele acelei clase.

Când instanțiați o clasă, creați un obiect care arată și se simte ca alte instanțe din aceeași clasă.

Datele (**atribute**) asociate cu o clasă sau obiect sunt stocate în **variabile**.

**Comportamentul** asociat cu o clasă sau obiect este implementat cu **metode**.

[/slide]

[slide hideTitle]
# Denumirea Claselor

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-5-Naming-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Mai jos sunt regulile de denumire a claselor limbajului de programare Java.

Acestea trebuie urmate în timpul dezvoltării software-ului în Java pentru o bună întreținere și lizibilitate a codului.

Numele de clasă ar trebui să fie substantive, în caz mixt cu prima literă a fiecărui cuvânt intern cu majuscule.

De exemplu:

```java
class CarMaintenanceHistory { ... }
// A good example of a class name
```

```java
class Carhp { ... }
// A bad example of naming a class
```

Încercați să păstrați numele claselor simple și descriptive.

Folosește un cuvânt întreg. Evitați acronimele și abrevierile (cu excepția cazului în care abrevierea este mult mai utilizată decât formularul lung, cum ar fi URL sau HTML).

[/slide]

[slide hideTitle]
# Componente ale Clasei

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-6-class-members-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

La definirea clasei, conține doar acele componente ale unei declarații de clasă care sunt necesare.

Componentele obligatorii sunt:

- Cuvânt cheie - `class`
- Numele clasei
- Corpul clasei - între `{}`

Componentele nu sunt obligatorii, dar acreditările sunt:

- Câmpuri de clasă
- Constructor
- Getters și Setters
- Metode de clasă

Iată un exemplu de clasă Mașină care are două câmpuri (**brand, model**) și o metodă nulă - `start()`.

```java
class Car {

    String brand;
    String model;

    void start(){ ... }
}
```
[/slide]

[slide hideTitle]
# Crearea Unui Obiect

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-7-Creating-an-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Crearea unui obiect dintr-o clasă definită se numește **instanțiere**.

Instanța este obiectul în sine, care este creat runtime.

Pentru a crea un obiect, specificați **numele clasei**, urmat de **numele obiectului** și utilizați cuvântul cheie `new`:

```java
Car firstCar = new Car();
```

O clasă poate avea multe instanțe (**obiecte**).

```java
Car firstCar = new Car();

Car secondCar = new Car();

Car thirdCar = new Car();
```
[/slide]

[slide hideTitle]
# Referință Obiect

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-8-Object-reference-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Operatorul `new` instanțiază o clasă prin alocarea memoriei pentru un obiect nou și returnarea unei **referințe** la memoria respectivă.

O **referință** este o **adresă** care indică unde sunt stocate variabilele și metodele unui obiect.

O variabilă al cărei tip este o clasă **conține o referință la un obiect** al clasei (adresa locației de memorie unde este alocat obiectul).

În Java, obiectele sunt construite și alocate în memoria **Grămadă**.

Deci, nu putem stoca obiectul într-o variabilă, putem stoca doar **referința sa la acest obiect**.

Variabilele al căror tip este o clasă sunt cunoscute ca **variabile de referință** și sunt stocate în memoria **Stivă**.

De exemplu:

```java
class Car {

    int horsePower;
}
    
Car sportsCar = new Car()
```

- We saved `sportsCar(4860c54d)` in the "**Stack**" memory, which points to an address in the "**Heap**" memory

- In the "**Heap**" memory, we saved:

```java
// for objecs sportsCar(4860c54d):
type=Car;
int horsePower=0;
``` 

[/slide]

[slide hideTitle]
# Clase vs. Obiecte

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-9-classes-vs-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

| **Cursuri** | **Obiecte** |
| --- | --- |
| Clasa este un plan sau șablon din care sunt create obiectele. | Obiectul este o instanță a unei clase. |
| Clasa este un grup de obiecte similare. | Obiectul este o entitate din lumea reală, cum ar fi stilou, laptop, mobil, pat, tastatură, mouse, scaun etc. |
| Clasa este o entitate logică. | Obiectul este o entitate fizică. |
| Clasa este declarată folosind cuvântul cheie `class`, de ex. class `Car{}` | Obiectul este creat prin cuvântul cheie `new` în principal, de ex. `Car firstCar = new Car();` |
| Clasa este declarată **o dată**. | Obiectul este creat **de multe ori** conform cerințelor. |
| Clasa **nu alocă memorie** când este creată. | Obiectul **alocă memoria** când este creat. |
| Există o singură modalitate de a defini clasa în java folosind cuvântul cheie `class`. | Există mai multe moduri de a crea un obiect în java, cum ar fi cuvântul cheie `nou`, metoda `newInstance()`, metoda `clone()` metoda `factory` și deserializarea. |
[/slide]

