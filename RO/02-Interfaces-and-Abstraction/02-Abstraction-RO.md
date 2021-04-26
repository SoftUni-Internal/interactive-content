# Abstractizarea

[slide hideTitle]

# Ce este Abstractizarea

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/RO/Java-OOP-Advanced-Interfaces-and-Abstraction-5-6-7-8-abstraction-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Abstractizarea este procesul de a **ascunde** detaliile de implementare și de a oferi utilizatorului doar funcționalitate pură.

În Java, abstractizarea se realizează prin utilizarea cuvântului cheie **"abstract"** pentru clase și interfețe.

Abstracția constă în selectarea datelor dintr-un grup mai mare pentru a afișa utilizatorului numai detalii **relevante** ale obiectului.

Reduce complexitatea și eforturile de programare.

Este unul dintre cele mai importante concepte ale OOP.


Există **două** moduri în care putem folosi **abstractizarea** în Java:

- Utilizarea claselor **abstracte**

- Utilizarea **interfețelor**

[/slide]


[slide hideTitle]
# Exemplu: Clasa Abstractă Java

Să vedem cum să abstractizăm clasele.

``` java
// Clasa părinte abstractă "Animal"
abstract class Animal {
  // Abstractizarea metodei "sound"
  public abstract void sound();
}
```

``` java
// Clasa Dog extinde clasa Animal
public class Dog extends Animal {

// Trebuie să declare și să implementeze metoda abstractă.
  public void sound(){
    System.out.println("Woof, Woof");
  }
}
```

``` java
public class Main {
  public static void main(String[] args) {
  
    Animal dog = new Dog(); 
    // La fel ca în cazul moștenirii, putem conține obiectul într-o interfață pe care o implementează.
    
    dog.sound();
    //Putem folosi doar metodele declarate de interfață.
  }
}
```

Când se execută acest cod, **ieșirea** va fi:

``` 
Woof, Woof
```
[/slide]


[slide hideTitle]
# Exemplu: Java Interface

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/RO/Java-OOP-Advanced-Interfaces-and-Abstraction-13-interface-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi și interfețe.

Iată un exemplu simplu:

``` java
interface Pet {
  public void walk();
}
```

``` java
class Dog implements Pet {
  public void walk() {
    System.out.println("Walking....");
  }
}
```

``` java
public class Main {
  public static void main(String args[]) {
    Pet pet = new Dog();
    pet.walk();
  }
}
```

**Ieșirea** va fi:

```
Walking...
```


[/slide]

[slide hideTitle]
# Abstractizare vs. Încapsulare

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/RO/Java-OOP-Advanced-Interfaces-and-Abstraction-9-abstraction-vs-encapsulation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

|**Abstractizare**|**încapsulare**|
|---|---|
| Rezolvă problema la nivel de proiectare. | Rezolvă problema la nivel de implementare. |
| Vă permite să vă concentrați asupra "ce" face obiectul în loc de "cum". | Înseamnă să țineți detaliile interne sau tehnica "cum" face un obiect ceva. |
| Folosit pentru a ascunde date nedorite și pentru a furniza date relevante. | Păstrează codul și datele într-o singură unitate pentru a proteja datele de lumea exterioară. |
| Aspectul exterior, utilizat în ceea ce privește designul. Exemplu: Aspect exterior al unui telefon mobil - are un ecran de afișare și butoane de tastatură pentru a forma un număr. | Aspectul interior, utilizat în ceea ce privește implementarea. Exemplu: Detaliu de implementare interioară a unui telefon mobil - modul în care butonul tastaturii și ecranul de afișare sunt conectate utilizând circuite. |
[/slide]
