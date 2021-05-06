[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-28-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Clasele definesc următoarele șabloane pentru obiecte
     - câmpuri
     - constructori
     - proprietăți
     - metode

- Obiectele conțin un set de valori numite

``` java
LocalDate birthday = 
LocalDate.of(2018, 5, 5);
System.out.println(birthday);
```

- Instanța unei clase

``` java
	class Car {
  public int fuel;
  public int drive(distance) {
    int fuelBurned = distance * 0.1;
    this.fuel -= fuelBurned;
    return fuelBurned;
  }
}
```

- Inițializarea unei instanțe a unei clase

```java
Car bmw = new Car();
```

## În lecția următoare, veți învăța:

- Ce este un șir

- Manipularea șirurilor

- Construirea și Modificarea Șirurilor
    - folosind clasa `StringBuilder`
    - de ce concatenarea este o operație lentă
   
[/slide]


