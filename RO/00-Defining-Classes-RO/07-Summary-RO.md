[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/RO/interactive-java-advanced-defining-classes-40-conclusion-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Ce sunt cursurile în Java?
     - șablon din care sunt create obiectele
     - obiectul este o instanță a unei clase
```java
class Animal { 
    
}
Animal animal = new Animal();
```
- Componente ale clasei:
     - câmpuri
         - câmpul este o variabilă în cadrul unei clase
```java
class Animal { 
    String name;
    Int age;
}
```
- Metode
     - stocați codul executabil care manipulează starea
```java
class Animal { 
    String name;
    Int age;

    void bark(){ ... }
}
```
- Constructori
     - tip special de metodă care este utilizată pentru a inițializa obiectul
     - constructorii sunt invocați la crearea de noi instanțe de clasă
     - setați starea inițială a obiectului
```java
class Animal { 
    String name;
    Int age;

    public Animal(String name, int age) {
    this.name = name;
    this.age = age;
  }

    void bark(){ ... }
}
Animal animal = new Animal("Rex", 5);
```

## În următoarea lecție, veți învăța:

- Generics in Java 
    - syntax
    - classes and interfaces
    - generic methods
- Type erasure
- Type parameter bounds

[/slide]