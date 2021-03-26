# Class Data

[slide hideTitle]

# Fields

Un câmp Java este o variabilă din interiorul unei clase.

De exemplu, într-o clasă care reprezintă o mașină, clasa Mașină poate conține următoarele câmpuri:

- **Brand**
- **Model**
- **Horse power**

Clasa Java corespunzătoare ar putea fi definită astfel:

```java
public class Car {

    String brand;
    String model;
    int horsePower;

}
```

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Define Car Class

Creați o clasă numită **Car**.

Clasa ar trebui să aibă câmpuri **publice** pentru:
- **Brand**: String
- **Model**: String
- **Horsepower**: Integer

Creați o **nouă clasă** și asigurați-vă de **denumirea corectă**

Acum ar trebui să vă puteți folosi clasa:

```java live
import java.util.*;
public class Main {
    public static void main (String[] args) {

        Car car = new Car();

        car.brand = "TESLA";
        car.model = "MODEL S";
        car.horsePower = 503;

        System.out.println(String.format(
                "The car is: %s %s - %d HP",
                car.brand, car.model, car.horsePower
        ));
    }
}
// Define your Car class here
```

## Soluție

Creați o nouă clasă și **asigurați-vă o denumire corectă!**
[image assetsSrc="defining-classes-example(2).png" /]

Creați o clasă **Principală** în același pachet pentru a vă testa clasa Car:
[image assetsSrc="defining-classes-example(1).png" /]

Setați câmpurile din clasa Car:

```java
public class Car {

    String brand;
    String model;
    int horsePower;
}
```

[/slide]

[slide hideTitle]

# Access Modifiers

Modificatorii de acces determină dacă alte clase pot folosi un anumit câmp.

Există patru tipuri de modificatori de acces în Java:

- Private
- Package-private
- Protected
- Public

Using a **private** access modifier means that only code inside the class body can access this Java field.

If you do not use any modifier, it is treated as **package-private** by **default**.

The **package-private** access modifier means that only code inside the class or other classes in the same package can access the field.

It provides more accessibility than the **private** modifier.

The **Package-private** access modifier is **more restrictive** than **protected** and **public**.

The **protected** access modifier is accessible within and outside the package but only through **inheritance**.

**Inheritance** is a mechanism where one object **acquires** all the **properties** and **behaviors** of a **parent** object.

You can find out more about **inheritance** [here](https://docs.oracle.com/javase/tutorial/java/concepts/inheritance.html).

The **public** access modifier is accessible **everywhere**.


[/slide]