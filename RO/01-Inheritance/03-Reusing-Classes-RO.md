# Refolosirea Claselor

[slide hideTitle]
# Modificatori de Acces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-20-21-reusing-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Clasele derivate **pot accesa toți membrii publici** și **protejați** ai clasei de bază
- Clasele derivate pot accesa **implicit** membri **dacă se află în același pachet**
- **Câmpurile private** nu pot fi accesate din **subclase**, dar sunt instanțiate, deoarece clasa **părinte** are nevoie de ele pentru logica sa internă

```java
class Person {
  protected String address;   // Can be accessed from its Subclasses.
  public void sleep();        // Access from everywhere in the project.
  String name;                // Can be accessed through other methods.
  private String id;          // It can be accessed only from the class delegator itself.
}
```

[/slide]

[slide hideTitle]

# Umbrirea Variabilelor

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-22-shadowing-variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Clasele derivate **pot ascunde / umbri** variabile superclaselor prin implementarea unei unități cu același nume


- Când utilizați **umbrirea**, puteți reface o metodă întreagă
  * aceasta înseamnă schimbarea parametrilor și a logicii sale, dar nu a tipului său de returnare

```java
class Person { 
  protected int weight; 
  }

class Patient extends Person {
  protected float weight; 
  // Ascunde (umbrește) greutatea Număr întreg.

  public void method() {
    // Deoarece este mai concret, le ascunde pe amândouă, dar exista numai în parantezele metodei.
    double weight = 0.5d;
  }
}
```

[/slide]

[slide hideTitle]

# Umbrirea Variabilelor - Access

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-23-shadowing-variables-access-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Folosim **super** și **this** pentru a specifica accesul membrilor

```java
class Person { protected int weight; }

class Patient extends Person {
  protected float weight;
  public void method() {
    double weight = 0.5d; // Variabilă locală
    this.weight = 0.6f;   // Membru de instanțiere
    super.weight = 1;     // Membru al clasei de bază
  }
}

```
[/slide]

[slide hideTitle]
# Suprascrierea Metodelor Derivate

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-24-overriding-derived-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Suprascrierea** este un mecanism în care putem seta o implementare personalizată a unei metode de clasă date în ierarhie.

Se face folosind cuvântul cheie `@Override`.

Este un instrument important, deoarece este conectat la un alt pilon fundamental al OOP - **polimorfism**.

Diferența dintre **umbrire** și **suprascriere** este că atunci când suprascrieți, nu puteți schimba parametrii metodei.

Când suprascriem o metodă din clasa de bază într-o subclasă și o apelăm, va fi executată logica metodei suprascrise, nu cea de bază.

Dacă folosim **umbrirea**, aceasta va invoca întotdeauna **implementarea clasei de bază**.


```java
public class Person {  
  public void sleep() { 
  System.out.println("Person sleeping"); } // Aici declarăm o metodă.
}
```
- O metodă pe care dorim să o suprascriem nu trebuie setată ca`final`

```java
public class Student extends Person {
  // Atributul @Override  înseamnă că acestei metode i se oferă o implementare nouă / extinsă.
  @Override                                   
  public void sleep(){
    // Între paranteze, declarăm noua implementare.
    System.out.println("Student sleeping");   
  }   
}
```
- Semnătura și tipul de returnare **ar trebui să se potrivească**

[/slide]

[slide hideTitle]

# Metode și Clase Finale

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-25-final-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `final` - definește o metodă care **nu poate fi suprascrisă**
  - ar trebui să folosim acest instrument atunci când dorim să ne păstrăm implementarea metodei în ierarhia de clase
  - 'final' poate fi declarat în orice clasă derivată și rămâne pentru toate clasele derivate din ierarhie

```java
public class Animal {
  public final void eat() { … }
}

public class Dog extends Animal { 
  
  @Override
  public void eat() {} // Eroare…
}
```

- **Moștenirea de la o clasă finală este interzisă**

```java
public final class Animal {
  …
}

public class Dog extends Animal { }      // Eroare…
public class MyString extends String { } // Eroare…
public class MyMath extends Math { }     // Eroare…
```

[/slide]

[slide hideTitle]

# Beneficiile Moștenirii

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-27-inheritance-benefits-abstraction-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Folosind moștenirea, oferim o abstractizare claselor pe care le folosim
- Putem refolosi codul, mai puțin cod înseamnă mai puține bug-uri
- Putem realiza **polimorfism**
- Moștenirea oferă o structură clară a modelului, ceea ce e ușor de înțeles
- Cu moștenire, dacă identificăm o eroare într-o clasă părinte, o putem remedia și pentru toate clasele copil

[image assetsSrc="inheritance-example(13).png" /]

```java
Person person = new Person();    // Când avem o clasă de bază
Student student = new Student(); // Și o altă clasă moștenită

List<Person> people = new ArrayList(); 
// Pe ambele le putem conține într-o colecție a clasei de bază

people.add(person);
people.add(student);
```

[/slide]

[slide hideTitle]

# Extinderea

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-28-inheritance-benefits-extension-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Putem extinde o clasă pe care altfel nu o putem schimba, implementând logica personalizată de care avem nevoie

Pe diagramă, putem observa că CustomArrayList extinde clasa ArrayList. Rețineți că nu avem voie să schimbăm implementarea inițială. Cu toate acestea, putem adăuga mai multe metode sau parametri la clasa noastră. Astfel putem extinde comportamentul clasei părinte.

[image assetsSrc="inheritance-example(14).png" /]

```java
public class MyArrayList<E> extends ArrayList<E>{
  //  Logică personalizată...
}
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Random Array List

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-29-problem-and-solution-random-array-list-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Random Array List" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Random-Array-List" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere

Creați o clasă **RandomArrayList** care are toate funcționalitățile standard ale unei **ArrayList**.

Adăugați o funcție suplimentară care **returnează** și **elimină** un element aleatoriu din listă.

- Metoda publică: **getRandomElement(): Object**


[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Optional;
import java.util.stream.Stream;

public class TestRandomArrayList \{
    private static final String RANDOM_ARRAY_LIST_CLASS_NAME = "RandomArrayList";
    private static final String ARRAY_LIST_CLASS_NAME = "ArrayList";
    private static final String GET_RND_ELEMENT_METHOD_NAME = "getRandomElement";

    @Test
    public void testRandomArrayList() \{

        Assert.assertTrue("Class 'RandomArrayList' not found", Classes.allClasses.containsKey(RANDOM_ARRAY_LIST_CLASS_NAME));
        Class ral = Classes.allClasses.get(RANDOM_ARRAY_LIST_CLASS_NAME);
        Class ralBase = ral.getSuperclass();
        Assert.assertTrue("Class 'RandomArrayList' should extend 'ArrayList'", ralBase.getSimpleName().equals(ARRAY_LIST_CLASS_NAME));

        Method\[\] methods = ral.getDeclaredMethods();
        Assert.assertTrue("Method 'getRandomElement()' not present", isMethodPresent(methods, GET_RND_ELEMENT_METHOD_NAME));
    \}

    private boolean isMethodPresent(Method\[\] methods, String name) \{
        Optional\<Method\> method =  Stream.of(methods)
                .filter(m -\> m.getName().equals(name))
                .findFirst();

        return method.isPresent();
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

