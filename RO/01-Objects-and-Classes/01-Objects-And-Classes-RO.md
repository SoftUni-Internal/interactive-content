# Obiecte și clase


[slide hideTitle]

# Obiecte

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-3-4-objects-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Totul în Java este asociat cu clase și obiecte, împreună cu câmpurile și metodele lor.

Un obiect este **unitatea de bază** și o **instanță a unei clase**.

Clasele definesc șabloane pentru  **câmpuri**, **constructori**, **metode**.

Obiectele reprezintă **subiecți din viața reală**.

Un obiect are:

- **stare**, care este reprezentată de **câmpuri**

- **comportament**, care este reprezentat de **metode** - un obiect interacționează cu un alt obiect prin invocarea metodelor

- **identitate**, care dă un **nume unic** unui obiect

Exemplu din viața reală: câinii au stări - culoare, nume, rasă; și comportamente - lătrat, mâncat, dat din coadă.

Un obiect deține un set de **valori numite**.

Exemplu: obiectul zilei de naștere va avea valori precum **ziua**, **luna** și **anul** etc.

```java live no-template
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

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-5-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasele și obiectele sunt cele **două aspecte principale** ale programării orientate pe obiecte.

Clasele oferă **structura utilizată pentru a descrie și a crea obiecte**.

Clasele definesc:

- **Câmpuri** (variabile private) - Reprezintă starea unui obiect

- **Getters/Setters** - Returnează sau actualizează câmpuri

- **Metode** - Reprezintă comportamentul unui obiect


**Obiectele** pot fi derivate dintr-o **clasă** în felul următor:

- `LocalDate` - O **clasă** șablon

- `birthdayPeter` and `birthdayMaria` - **obiecte** șablon


[/slide]

[slide hideTitle]

# Exemplu din Viață Reală

Toate entitățile cu caracteristici similare pot fi aranjate în categorii.

De exemplu, toate animalele sunt grupate într-o singură **clasă** și fiecare animal este un **obiect** al acelei clase.

[image assetsSrc="ObjectsAndClasses_RealLifeExample.png" /]

Fiecare animal are stări precum tipul, vârsta, culoarea, mâncarea preferată etc. și comportament, cum ar fi să mănânce, să bea apă, să se miște, să facă sunet etc.

O clasă este ca un constructor de obiecte care conține toate caracteristicile lor similare. 

Este un "plan" pentru crearea obiectelor.


[/slide]

[slide hideTitle]
# Obiectele - Instanțe ale Claselor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-6-objects-instances-of-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Crearea unui obiect dintr-o clasă predefinită se numește **instanțiere**.

**Instanța** este obiectul în sine, care este creat în timpul rulării.

Toate instanțele au un **comportament** comun.

Pentru a crea un obiect:

1) Specificați **numele clasei**

2) Selectați **numele obiectului**

3) Folosiți cuvântul cheie `new`

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

# Clase vs. Obiecte

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-7-classes-vs-objects-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]
