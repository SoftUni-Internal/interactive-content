# Moştenirea

[slide hideTitle]

# Ce Este Moștenirea

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-3-4-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Moștenirea** este un mecanism care permite extinderea proprietăților și metodelor de la un obiect **părinte** la un obiect **copil**.

- Clasa **care își transmite membrii** la o clasă copil se numește **Superclasă** (Clasa de bază, clasa părinte)

- Clasa **care primește membri** din clasa sa de bază se numește **Subclasă** (Clasa copil, Clasa derivată)

 **Moștenirea** ne permite să construim clase folosind cele deja existente, reutilizând codul acestora.

```java
public class Mammal {...}
// Mamiferul este clasa părinte, această clasă își transmite membrii copiilor săi.

public class Cow extends Mammal {...}
// Vaca este clasa copil, această clasă moștenește membrii clasei părinte.
```

[/slide]


[slide hideTitle]

# Moștenire - Exemplu

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-5-inheritance-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când folosim moștenirea, putem avea mai multe **Subclase**.

În exemplu, creăm o clasă de bază `Person`, această clasă are proprietăți pe care le va avea fiecare clasă de persoană, cum ar fi un "Nume" și o "Adresă".

Când creăm un obiect de tipul "Emplyee", angajatul nostru trebuie să aibă și **numele și adresa**.

Acesta este unul dintre motivele pentru care există **moștenirea**, în loc să retipăm aceleași proprietăți pentru clasa noastră „Employees”, putem „extinde” clasa "Person", moșteni și reutiliza proprietățile acesteia.

Subclasa se numește clasă **derivată**.

De asemenea, extindem funcționalitatea prin adăugarea unui parametru "Company".

Respectiv, facem același lucru pentru clasa "Student", dar cu propria logică internă.


[image assetsSrc="inheritance-example(1).png" /]


[/slide]

[slide hideTitle]
# Ierarhiile de Clasă

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-6-class-hierarchies-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Moștenirea creează ierarhii de clase și / sau interfețe într-o aplicație:**

Un analog din viața reală a **ierarhiilor de clasă** este un **arbore genealogic**, avem o clasă care începe familia și coboară pe ramuri, avem copiii ei, care au și ei ai lor etc.

[image assetsSrc="inheritance-example(2).png" /]

[/slide]


[slide hideTitle]
# Ierarhiile de Clasă - Colecția Java

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-7-class-hierarchies-java-collection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasa `Object` este o **Superclasă** universală care este definită ca fiind rădăcina întregii ierarhii de clase din Java în mod implicit.

Aceasta înseamnă că fiecare clasă pe care o creăm este implicit un derivat al clasei 'Object', fără a fi explicită.

[image assetsSrc="inheritance-example(3).png" /]

[/slide]

[slide hideTitle]
# Moștenirea în Java

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-9-inheritance-in-java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Moștenim** o anumită clasă folosind cuvântul cheie **extends**, plasat imediat după numele **subclasei** date.

Folosim **moștenire** când trebuie să refolosim logica codului.

Dar în Java există o regulă, putem moșteni **un singur** părinte pe clasă.

De aceea, în Java, avem **moștenire unică**.

```java
class Person { … }

class Student extends Person { … }
class Employee extends Person { … }
```

[image assetsSrc="inheritance-example(4).png" /]

[/slide]

[slide hideTitle]

# Clasa Derivată

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-10-inheritance-derived-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O **clasă derivată** îi ia pe toți membrii săi din **clasa de bază**.

Clasele **derivate** pot moșteni și apela toți membrii **ne-privați** ai clasei **părinte**.

Dacă o unitate este declarată privată, ea este plasată în memorie când se inițializează clasa, dar o putem folosi în toată clasa **derivată**.

[image assetsSrc="inheritance-example(5).png" /]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Single Inheritance

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-17-problem-and-solution-single-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Single Inheritance" timeLimit=100000 taskId="Java-OOP-Advanced-Inheritance-Single-Inheritance" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați două clase: **Animal** și **Dog**.

Clasa **Animal** ar trebui să aibă o singură metodă publică `.eat()` care tipărește: **"eating…"**

Clasa **Dog** ar trebui să aibă, de asemenea, o singură metodă publică - `.bark()` care tipărește: **"barking…"**
Clasa **Dog** ar trebui să se extindă **Animal**.

[image assetsSrc="inheritance-example(9).png" /]

## Sfaturi

Utilizați cuvântul-cheie `extends` pentru a crea ierarhia.

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Optional;
import java.util.stream.Stream;

public class TestAnimal \{
    @Test
    public void testAnimalClassAndMethod() \{
        Assert.assertTrue(Classes.allClasses.containsKey("Animal"));
        Class animal = Classes.allClasses.get("Animal");
        Method\[\] methods = animal.getDeclaredMethods();
        Optional\<Method\> eatMethod = Stream.of(methods).filter(m -\> m.getName().equals("eat")).findFirst();
        Assert.assertTrue("Method 'eat' not found", eatMethod.isPresent());
        Assert.assertTrue("Method 'eat' has incorrect return type", eatMethod.get().getReturnType().equals(Void.TYPE));
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

import java.lang.reflect.Method;
import java.util.Optional;
import java.util.stream.Stream;

public class TestDog \{
    @Test
    public void testDogClassAndMethod() \{
        Assert.assertTrue(Classes.allClasses.containsKey("Dog"));
        Class dog = Classes.allClasses.get("Dog");
        Method\[\] methods = dog.getDeclaredMethods();
        Optional\<Method\> eatMethod = Stream.of(methods).filter(m -\> m.getName().equals("bark")).findFirst();
        Assert.assertTrue("Method 'bark' not found", eatMethod.isPresent());
        Assert.assertTrue("Method 'bark' has incorrect return type", eatMethod.get().getReturnType().equals(Void.TYPE));
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

public class TestSuperClass \{
    @Test
    public void testDogParent() \{
        Assert.assertTrue(Classes.allClasses.containsKey("Dog"));
        Class dog = Classes.allClasses.get("Dog");
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
