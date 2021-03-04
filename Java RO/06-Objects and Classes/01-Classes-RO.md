

[slide]
# Clase

Clasele și obiectele sunt **cele două aspecte principale** ale programării orientate pe obiecte.

Totul în Java este asociat cu clase și obiecte, împreună cu câmpurile și metodele sale.

În clasele de programare furnizați **structura pentru descrierea și crearea obiectelor**.

Construiește specificația unui obiect de tip dat din lumea reală.


[/slide]

[slide]

# Exemplu de viață reală

Toate entitățile cu caracteristici similare pot fi aranjate în categorii.

De exemplu, toate animalele sunt grupate într-o singură `class` și fiecare animal este un `object` al acelei clase.

[image assetsSrc="ObjectsAndClasses_RealLifeExample.png" /]

Fiecare animal are stări precum tipul, vârsta, culoarea, mâncarea preferată etc. și comportament cum ar fi să mănânce, să bea apă, să se miște, să facă sunet etc.

O clasă este ca un constructor de obiecte, care conține toate caracteristicile lor similare. Este un "plan" pentru crearea obiectelor.


[/slide]

[slide]
# Declararea clasei

Clasa **corp** (zona dintre paranteze) conține tot codul care asigură ciclul de viață al obiectelor create din clasă:
- **Câmpuri** care furnizează starea clasei și obiectele acesteia. Exemplu:
  - String type; 
  - int age;

- **Constructori** pentru inițializarea obiectelor noi.

- **Getters și Setters**pentru accesarea și schimbarea câmpurilor. Exemplu:
  - getType(); 
  - setType(String type);
  - getAge();
  - setAge(int age);
 
- **Metode** pentru implementarea comportamentului clasei și a obiectelor sale. Exemplu:
  - makeSound();

```java
public class MyClass {
    // fields
    // constructors
    // getters and setters
    // other methods
}
```

```java
public class Animal {
    // fields
    private String type;
    private int age;

    // constructors
    public Animal() {
    }

    public Animal(String type) {
        this.type = type;
    }

    // getters and setters
    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // methods
    public void makeSound() {
        System.out.println("The animal is making sounds.");
    }
}
```

[/slide]