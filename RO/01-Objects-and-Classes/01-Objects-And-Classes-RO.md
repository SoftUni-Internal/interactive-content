# Objects and Classes


[slide hideTitle]

# Obiecte

Un obiect este **unitate de bază** și o **instanță a unei clase**.
Clasele definesc șabloane pentru obiecte: câmpuri, constructori, metode.

Exemplu:

- Clasa eșantion: LocalDate

- Exemple de obiecte: birthdayPeter, birthdayMaria


Un obiect reprezintă **subiecți din viața reală**.

Dacă comparați obiectul software cu un obiect din lumea reală, acestea au caracteristici foarte similare.

Puteți găsi multe obiecte în jurul nostru: mașini din clasa Vehicle, câini din clasa Animal, oameni din clasa Person etc.

Un obiect are:

- stare, care este reprezentată de **câmpuri**

- comportament, care este reprezentat de **metode** - un obiect interacționează cu un alt obiect prin invocarea metodelor

- identitate, care dă un **nume unic** unui obiect


Exemplu din viața reală: un câine are stări - culoare, nume, rasă; și comportamente - lătrat, mâncat, dând din coadă.

Un obiect deține un set de valori numite.

Exemplu: obiectul zilei de naștere conține ziua, luna și anul.

```java live
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        LocalDate birthday = LocalDate.of(2018,5,5);
        System.out.println(birthday);
    }
}
```
[/slide]


[slide hideTitle]
# Clase

Classes and objects are the **two main aspects** of object-orientated programming. 

In programming classes provide the **structure for describing and creating objects**. 

It builds the specification of a given type object from the real-world.

Classes define: 

- **Fields** (private variables) - Represent the state of an object

- **Getters/Setters** - Return or update fields

- **Methods** - Represent the behavior of an object


This is how **objects** can be derived from a **class**:

- `LocalDate` - A sample **class**

- `birthdayPeter` and `birthdayMaria` - Sample **objects**


[/slide]

[slide hideTitle]

# Exemplu de Viață Reală

Toate entitățile cu caracteristici similare pot fi aranjate în categorii.

De exemplu, toate animalele sunt grupate într-o singură `class` și fiecare animal este un `object` al acelei clase.

[image assetsSrc="ObjectsAndClasses_RealLifeExample.png" /]

Fiecare animal are stări precum tipul, vârsta, culoarea, mâncarea preferată etc. și comportament cum ar fi să mănânce, să bea apă, să se miște, să facă sunet etc.

O clasă este ca un constructor de obiecte, care conține toate caracteristicile lor similare. 

Este un "plan" pentru crearea obiectelor.


[/slide]

[slide hideTitle]

# Creați un Obiect

Crearea unui obiect dintr-o clasă definită se numește **instanțiere**.

**Instanța** este obiectul în sine, care este creat de timpul de rulare.

All instances have common **behavior**. 

To create an object: 

1) Declare the `main` **method**

2) Specify the **class name** 

3) Set an **object name**

4) Use the `new` **keyword** 

```java
public class Animal {
    public static void main(String[] args) {
        Animal dog = new Animal("mammal");
        Animal lizard = new Animal("reptile");
    }
}
```

[/slide]

[slide hideTitle]

# Classes vs. Objects


[/slide]