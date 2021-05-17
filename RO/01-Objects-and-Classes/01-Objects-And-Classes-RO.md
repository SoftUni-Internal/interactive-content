# Obiecte și Clase


[slide hideTitle]

# Obiecte

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-3-4-objects-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Totul în Java este asociat cu clase și obiecte, împreună cu câmpurile și metodele lor.

Un obiect este **unitatea de bază** și o **instanță a unei clase**.

Clasele definesc șabloane pentru **câmpuri**, **constructori** și **metode**.

Obiectele în programare sunt modelate după **obiectele din viața reală**.

Dacă luăm câini de exemplu, aceștia au o **rasă** (stare) și un comportament specific (lătrat, dat din coadă).

Un obiect are:

- **Stare**, care este reprezentată de **câmpuri**

- **Comportament**, care este reprezentat de **metode** - un obiect interacționează cu un alt obiect prin invocarea metodelor

- **Identitate**, un **nume unic** atribuit unui obiect

Un obiect deține un set de **valori numite**.

De exemplu, obiectul **zilei de naștere** va avea valori precum **ziua**, **luna**, **anul** etc.

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

O clasă poate fi privită ca un șablon care descrie comportamentul admis de un obiect de un anumit tip.

Clasele oferă **structura utilizată pentru a descrie și a crea obiecte**.

Clasele definesc:

- **Câmpuri** - Reprezintă starea unui obiect

- **Getters/Setters** - Returnează sau actualizează câmpuri

- **Metode** - Reprezintă comportamentul unui obiect


**Obiectele** pot fi derivate dintr-o **clasă** în felul următor:

- `LocalDate` - **clasă** șablon

- `birthdayPeter` și `birthdayMaria` - **obiecte** șablon


[/slide]

[slide hideTitle]

# Exemplu din Viață Reală

Toate entitățile cu caracteristici similare pot fi aranjate în categorii.

De exemplu, toate animalele sunt grupate într-o singură **clasă** și fiecare animal este un **obiect** al acelei clase.

[image assetsSrc="ObjectsAndClasses_RealLifeExample.png" /]

Fiecare animal are caracteristici similare, deci animalele reprezentate prin intermediul unei clase ar putea avea următoarele câmpuri: tip, vârstă, culoare, mâncare preferată, etc.

De asemenea, fiecare animal poate executa acțiuni \(să mănânce, să bea apă, să scoată anumite sunete\), iar pentru aceste acțiuni trebuie declarate metode în cadrul clasei respective.

O clasă este ca un constructor de obiecte care conține toate caracteristicile lor similare. 

Aceasta este un "plan" pentru crearea obiectelor.


[/slide]

[slide hideTitle]
# Obiectele - Instanțe ale Claselor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-6-objects-instances-of-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Crearea unui obiect bazat pe o clasă predefinită se numește **instanțiere**.

O **instanță** a unei clase este un obiect creat în timpul rulării.

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
