# Reflecția API

[slide hideTitle]

# Obiectul clasei

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/RO/interactive-java-oop-advanced-reflection-and-annotations-8-9-10-the-class-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să continuăm învățând despre clase folosind Java Reflection.

Java oferă o clasă statică cu numele `Class` în `java.lang.package`.

Instanțele care se află în interiorul clasei - sunt responsabile pentru interfețe și clase într-o aplicație Java care rulează.

Putem crea un obiect al `Clasei` utilizând una dintre următoarele opțiuni:

- Extensia `.class` 

**De exemplu:**

``` java
Class test = Dog.class;

// Putem folosi obiectul test pentru a obține reflexia ca obiect
// va avea toate informațiile necesare despre clasa Dog.
```

- Metoda `forName()`

Metoda `forName()` preia numele clasei și returnează obiectul clasei.

**De examplu:**

``` java
Class test = Class.forName("Dog");
```

Acum, să obținem numele `Class`:


``` java
Class myDogClass = Dog.class;
String nameClass = myDogClass.getName();
System.out.println(nameClass);
```

**Output**:

```
com.company.Dog
```

Dacă dorim să obținem numele clasei fără numele pachetului, putem folosi metoda `getSimpleName()`:

``` java
Class myDogClass = Dog.class;
String nameClass = myDogClass.getSimpleName();
System.out.println(nameClass);
```

**Ieșirea** va fi:

```
Dog
```

[/slide]

[slide hideTitle]

# Base Class and Interfaces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/RO/interactive-java-oop-advanced-reflection-and-annotations-11-base-class-and-interfaces-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

De asemenea, putem obține o clasă părinte în felul următor:

```java
public class Dog extends Mammal {
    // ...
}
```


```java
public class Main {
    public static void main(String[] args) throws ClassNotFoundException {
        Class myDogClass = Dog.class;
        
        // Returns the full name of the parent class
        Class nameClass = myDogClass.getSuperclass();   
        
        System.out.println(nameClass);
    }
}
```

Și **ieșirea** va fi:

```
class com.company.Mammal
```


Acum, să vedem cum să obținem metodele și interfețele din clasele noastre.

Interfețele sunt, de asemenea, reprezentate de obiecte `Class` atunci când se utilizează Reflecția Java:

``` java
Class[] interfaces = aClass.getInterfaces();
```


[/slide]

[slide hideTitle]
# Problemă cu soluție: Reflection

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/RO/interactive-java-oop-advanced-reflection-and-annotations-12-problem-and-solution-reflection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Reflection" taskId="Java-OOP-Advanced-Reflection-Reflection" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
[code-upload allowedMemory="30" /] 
[task-description]
# Descriere

**Aici este un link către** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/06.Java-OOP-Advanced-Reflection-and-Annotations-Lab.zip) **pentru această problemă.**

Plasați fișierul "**Reflection.java**" în folderul "**src**" din proiectul dvs.

Folosiți **reflecția** și tipăriți câteva informații despre această clasă.

Imprimați totul pe o nouă linie:
- **Tipul clasei**
- **Tipul super clasei**
- **Toate interfețele** care sunt implementate de clasă
- **Instantați un obiect** folosind reflecția și imprimați-l și pe acesta

**Clasa Reflection nu trebuie modificată în proces**

[/task-description]
[tests]
[test open]
[input]
Blank Test
[/input]
[output]
class Reflection
class java.lang.Object
interface java.io.Serializable
Name: Java
WebAddress: oracle.com
email: mail@oracle.com
zip: 1407
[/output]
[/test]
[test]
[input]
Blank Test
[/input]
[output]
class Reflection
class java.lang.Object
interface java.io.Serializable
Name: Java
WebAddress: oracle.com
email: mail@oracle.com
zip: 1407
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

