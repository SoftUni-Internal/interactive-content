# Tipuri de Reutilizare a Clasei

[slide hideTitle]
# Extinderea

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-31-32-types-of-class-reuse-extension-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Extinderea clasei se numește o relație **IS-A**.

**A Student IS-A Person:**

```java
public Student extends Person{}
```

- Codul duplicat este predispus la erori
    * dacă avem o eroare la un loc, trebuie să mergem și să găsim toate locurile în care am folosit acest cod pentru a-l remedia

- **Reutilizați clasele** prin **extensie** și adăugați-le logică personalizată

- Când o clasă nu se află în biblioteca noastră și nu putem vedea implementarea acesteia, putem extinde doar clasa dată pentru a adăuga logică personalizată la aceasta

[image assetsSrc="inheritance-example(15).png" /]

[/slide]

[slide hideTitle]
# Compunere

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-33-composition-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Compunerea** este un tip diferit de relație, prin care conținem obiectul dat în clasa noastră.

Această relație se numește **HAS-A**:

- **The Laptop HAS-A Monitior**
- **The Laptop HAS-A Touchpad**
- **The Laptop HAS-A Keyboard**

[image assetsSrc="inheritance-example(16).png" /]

```java
class Laptop {
  Monitor monitor;
  Touchpad touchpad;
  Keyboard keyboard;
  // Reutilizarea claselor...
}
```


[/slide]

[slide hideTitle]
# Delegarea

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-34-Delegation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Delegarea este procesul de trecere a atributelor între obiecte.**

Putem oferi o interfață comună pentru care clientul să poată lucra, deoarece poate folosi orice implementare de lucru de dedesubt.

[image assetsSrc="inheritance-example(17).png" /]

```java
class Laptop {
  Monitor monitor;
  
  void incrBrightness() {   
    monitor.brighten();     
  }                         
                            
  void decrBrightness() {
    monitor.dim();S
  } 
}
```

În clasa noastră **Laptop**, oferim o metodă pentru a-i crește luminozitatea.

În partea de jos, apelăm la metoda monitorului.

Oferim o **interfață clasei noastre**, fără a dezvălui codul concret care realizează acțiunea.

Procedând astfel, putem **combina** logica complexă într-o singură **metodă**.                     

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Stack of Strings

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-35-problem-and-solution-stack-of-strings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Stack of Strings" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Stack-Of-Strings" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați o clasă **Stack** care poate stoca numai șiruri și are următoarele funcționalități:
- Câmp privat: `date: ArrayList (String)`
- Metoda publică: `push(String item): nul`
- Metoda publică: `pop(): String`
- Metoda publică: `peek(): String`
- Metoda publică: `isEmpty(): boolean`

## Sfaturi
Utilizați compoziția / delegarea pentru a avea un câmp în care să stocați datele stivei.

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Optional;
import java.util.stream.Stream;

public class TestPeek \{
    @Test
    public void testPush() \{
        Assert.assertTrue("Class 'StackOfStrings' not found", Classes.allClasses.containsKey("StackOfStrings"));
        Class stack = Classes.allClasses.get("StackOfStrings");

        Method\[\] methods = stack.getDeclaredMethods();
        Optional\<Method\> peekMethod = Stream.of(methods)
                .filter(m -\> m.getName().equals("peek"))
                .findFirst();

        Assert.assertTrue("Method 'peek()' was not present", peekMethod.isPresent());
        Assert.assertTrue("Method 'peek()' should return String", peekMethod.get().getReturnType().equals(String.class));
        Assert.assertTrue("Method 'peek()' should have zero parameters", peekMethod.get().getParameterCount() == 0);
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

public class TestPop \{
    @Test
    public void testPush() \{
        Assert.assertTrue("Class 'StackOfStrings' not found", Classes.allClasses.containsKey("StackOfStrings"));
        Class stack = Classes.allClasses.get("StackOfStrings");

        Method\[\] methods = stack.getDeclaredMethods();
        Optional\<Method\> popMethod = Stream.of(methods)
                .filter(m -\> m.getName().equals("pop"))
                .findFirst();

        Assert.assertTrue("Method 'pop()' was not present", popMethod.isPresent());
        Assert.assertTrue("Method 'pop()' should return 'String'", popMethod.get().getReturnType().equals(String.class));
        Assert.assertTrue("Method 'pop()' should have zero parameters", popMethod.get().getParameterCount() == 0);
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

public class TestPush \{
    @Test
    public void testPush() \{
        Assert.assertTrue("Class 'StackOfStrings' not found", Classes.allClasses.containsKey("StackOfStrings"));
        Class stack = Classes.allClasses.get("StackOfStrings");

        Method\[\] methods = stack.getDeclaredMethods();
        Optional\<Method\> pushMethod = Stream.of(methods)
                .filter(m -\> m.getName().equals("push"))
                .findFirst();

        Assert.assertTrue("Method 'push()' was not present", pushMethod.isPresent());
        Assert.assertTrue("Method 'push()' should be void", pushMethod.get().getReturnType().equals(Void.TYPE));
        Assert.assertTrue("Method 'push()' should have one parameter", pushMethod.get().getParameterCount() == 1);
        Assert.assertTrue("Method 'push()' parameter should be of type 'String'", pushMethod.get().getParameterTypes()\[0\].equals(String.class));
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

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.List;

public class TestStack \{

    @Test
    public void testDataField() throws NoSuchFieldException \{
        Assert.assertTrue("Class 'StackOfStrings' not found", Classes.allClasses.containsKey("StackOfStrings"));
        Class stack = Classes.allClasses.get("StackOfStrings");

        Field dataField = stack.getDeclaredField("data");
        Assert.assertTrue("Field 'data' was not of type 'List' or 'ArrayList'",
                dataField.getType().equals(List.class) \|\| dataField.getType().equals(ArrayList.class));

        Assert.assertTrue("Field 'data' access level was not 'private'",
                Modifier.isPrivate(dataField.getModifiers()));
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
# Când se Folosește Moștenirea

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/RO/Java-OOP-Advanced-Inheritance-37-when-to-use-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi moștenirea atunci când avem nevoie de una dintre următoarele:

- clase care împărtășesc relația **IS-A**

- Clasa derivată **IS-A-SUBSTITUTE** pentru clasa de bază

- Împărtășesc **același rol**

- Clasa derivată este aceeași **ca și clasa de bază**, dar adaugă **funcționalitate suplimentară**

[/slide]
