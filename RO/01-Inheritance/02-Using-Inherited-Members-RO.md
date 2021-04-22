[slide hideTitle]
# Folosirea membrilor moșteniți

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-11-using-inherited-members-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem **accesa membrii moșteniți**.

O facem în același mod în care **apelăm membrii clasei**.

În primul rând, creăm un obiect din clasa derivată, când o apelăm, putem accesa toți membrii **non-privați** - **derivați** sau **declarați**.

```java
class Person { public void sleep() { … } }
class Student extends Person { … }
class Employee extends Person { … }
```

```java
Student student = new Student();
student.sleep();

Employee employee = new Employee();
employee.sleep();
```

De asemenea, putem deține o **referință** la un obiect din clasa derivată din variabila clasei de bază.

```java
Person student = new Student();
// Variabila clasei de bază deține obiectul tipului de subclasă.

Person employee = new Employee();
```

Ceea ce se schimbă aici este că vom avea acces doar la **membrii clasei de bază**, întrucât declarăm 'Student' ca 'Person'.

[/slide]

[slide hideTitle]

# Reutilizarea constructorilor

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-12-reusing-constructors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Constructorii **nu sunt moșteniți**.

Când o **clasă părinte** declară un **constructor** cu parametri, fiecare unitate care moștenește din această clasă trebuie să poată utiliza constructorul **clasei părinte”**.

Acest lucru se datorează faptului că constructorul de bază este apelat automat atunci când este creată clasa derivată.

Parametrii din **constructorul** din clasa derivată trebuie să fie transmise către constructorul **părinte** cu cuvântul cheie `super`.

Iată un exemplu de „înlănțuire a constructorului”.

```java
class Person{
    private String name;
    
    // Dacă nu avem un constructor parametrizat în clasa părinte, putem sări peste apelarea acestuia în subclasă.
    public Person(String name){
        this.name = name;
    }
}

class Student extends Person {
  private School school;
  public Student(String name, School school) {  
  // Dacă nu apelăm la constructorul Superclasei noastre, va fi redată o eroare în timpul compilării.
  
    super(name); // Este o practică bună să chemați mai întâi constructorul.
    this.school = school;
  }

// De asemenea, puteți umple constructorul părinte cu unele valori implicite, la fel.
  public Student(School school){ 
      String defaultName = "John Doe";
      super(defaultName);
      this.school = school;
  }

}

```
[/slide]

[slide hideTitle]

# Gândirea la moștenire - Extends

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-13-thinking-about-inheritance-extends-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iată ce se întâmplă în memorie când o clasă **moștenește** alta.


Când moștenim o clasă, memoria este alocată pentru **părinte**, plus memoria suplimentară necesară pentru **clasa derivată**. (vezi imaginea de mai jos)

În astfel de cazuri sunt declarați toți membrii **părinte**, precum și toți membrii noi din **clasa derivată**.

[image assetsSrc="inheritance-example(6).png" /]

[/slide]

[slide hideTitle]

# Moștenirea are o relație tranzitivă

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-14-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```java
class Person { … }                          // O clasă de bază care deține câțiva membri.
class Student extends Person { … }          // Clasele Student vor moșteni toți membrii de la Persoană și pot adăuga mai mulți.
class CollegeStudent extends Student { … }  // Clasa CollegeStudent va moșteni toți membrii de la Student și Persoană.
```

Aceasta este ceea ce este **relația tranzitivă**: o **Subclasă** obține toate funcționalitățile din Superclasele sale de mai sus în ierarhie.

[image assetsSrc="inheritance-example(7).png" /]

[/slide]

[slide hideTitle]
# Moștenirea multiplă

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-15-multiple-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În Java, **moștenirea multiplă nu este disponibilă.**

```java
public class Person {...}

public class CollegeStudent {...}

public class Student extends Person, CollegeStudent // Nu este permis
```

În schimb, dacă avem nevoie de o clasă pentru a fi din două sau mai multe familii, putem implementa **interfețe** suplimentare pe o singură clasă.

**Interfețele** vor fi acoperite în continuare în lecțiile noastre.

[/slide]

[slide hideTitle]
# Acces la membrii clasei de bază

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-16-access-to-base-class-members-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Uneori trebuie să accesăm membrii clasei de bază.

Pentru a accesa membrii clasei de bază, utilizați cuvântul-cheie `super`.

Putem, de asemenea, să refolosim o parte din logică.

**Exemplu:**

```java
class Person {
    protected String name;
    
    public Person(String name){
        this.name = name;
    }
 }

class Employee extends Person { 
  public void fire(String reasons) { 
    System.out.println(
        super.name + // Folosim cuvântul cheie `super` pentru a accesa membrii clasei Superclass / Inherited.
        " got fired because " + reasons);
  }
}
```
[/slide]

[slide hideTitle]
# Problemă cu soluție: Multiple Inheritance

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-18-problem-and-solution-multiple-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Multiple Inheritance" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Multiple-Inheritance" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
## Descriere
Creați trei clase numite **Animal**, **Dog** și **Puppy**.

**Animal** - care deține o singură metodă publică `.eat()` care tipărește: **„eating...”**.

**Dog** - care deține o singură metodă publică `.bark()` care tipărește: **„barking...”**.

**Puppy** - care deține o singură metodă publică `weep()` care tipărește: **„weepings...”**.

**Dog** - ar trebui să se extindă **Animal**. **Puppy** ar trebui să extindă **Dog**.

[image assetsSrc="inheritance-example(10).png" /]

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Optional;
import java.util.stream.Stream;

public class TestPuppy \{
    @Test
    public void testPuppyClass() \{
        Assert.assertTrue("Class 'Puppy' not found", Classes.allClasses.containsKey("Puppy"));

        Class puppy = Classes.allClasses.get("Puppy");
        Method\[\] methods = puppy.getDeclaredMethods();
        Optional\<Method\> weepMethod = Stream.of(methods).filter(m -\> m.getName().equals("weep")).findFirst();
        Assert.assertTrue("Method 'weep' not found", weepMethod.isPresent());
        Assert.assertTrue("Method 'weep' has incorrect return type", weepMethod.get().getReturnType().equals(Void.TYPE));
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class TestSuperclass \{
    @Test
    public void testDogParent() \{
        Assert.assertTrue("Class 'Puppy' not found", Classes.allClasses.containsKey("Puppy"));

        Class puppy = Classes.allClasses.get("Puppy");

        Class dog = puppy.getSuperclass();
        Assert.assertTrue("Class 'Puppy' should inherit from class 'Dog'", dog.getSimpleName().equals("Dog"));

        Class animal = dog.getSuperclass();
        Assert.assertTrue("Class 'Dog' should inherit from class 'Animal'", animal.getSimpleName().equals("Animal"));
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


[slide hideTitle]
# Problemă cu soluție: Hierarchical Inheritance

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-19-problem-and-solution-hierarchical-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Hierarchical Inheritance" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Hierarchical-Inheritance" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați trei clase numite **Animal**, **Dog** și **Cat**.

**Animal** - cu o singură metodă publică `.eat()` care imprimă: **„eating ...”**

**Dog** - cu o singură metodă publică `.bark()` care tipărește: **„barking ...”**

**Cat** - cu o singură metodă publică `.meow()` care tipărește: **„meowing ...”**

**Dog** și **Cat** ar trebui să moștenească de la **Animal**.

[image assetsSrc="inheritance-example(11).png" /]

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class TestCatParent \{

    @Test
    public void testCatParent() \{
        Assert.assertTrue("Class 'Cat' not found", Classes.allClasses.containsKey("Cat"));
        Class cat = Classes.allClasses.get("Cat");
        Class catParent = cat.getSuperclass();
        Assert.assertTrue("Class 'Cat' should inherit from class 'Animal'", catParent.getSimpleName().equals("Animal"));
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class TestDogParent \{

    @Test
    public void testCatParent() \{
        Assert.assertTrue("Class 'Dog' not found", Classes.allClasses.containsKey("Dog"));
        Class dog = Classes.allClasses.get("Dog");
        Class dogParent = dog.getSuperclass();
        Assert.assertTrue("Class 'Dog' should inherit from class 'Animal'", dogParent.getSimpleName().equals("Animal"));
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




