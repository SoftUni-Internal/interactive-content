# Tipul de Parametri Bounds

[slide hideTitle]

# Tipul de Parametri Bounds

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/RO/interactive-java-advanced-generics-18-19-Type-Parameter-Bounds-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În cazul în care doriți să **restricționați** tipurile care pot fi utilizate ca argumente de tip într-un tip parametrizat, trebuie să utilizați **parametri de tip limitator**.

Să explicăm necesitatea parametrilor de tip limitator cu următorul exemplu:

```java
public class PowerOfThree<T>  {

    public int powerOf(T number) {
        return number.intValue() * number.intValue() * number.intValue();
    }
}
```
Codul de mai sus va da o eroare în timpul compilării - "**Metoda intValue() este nedefinită pentru tipul T**".

Eroarea apare deoarece nu există nicio modalitate pentru compilator să știe că tipul "**T**" va fi întotdeauna folosit pentru clasele numerice.

Avem nevoie de un tip limitator pentru a restricționa tipurile care pot fi utilizate pentru un tip parametrizat.

Pentru a declara un parametru de tip limitator, enumerați numele tipului parametrului, urmat de cuvântul cheie "**extinde**", urmat de **limita superioară** a acestuia.

În cazul nostru, aceasta va fi o clasă "**Număr**".

```java
T extends Number
```

Codul ar trebui să arate astfel:

```java
public class PowerOfThree<T extends Number> {

    public int powerOf(T number) {
        return number.intValue() * number.intValue() * number.intValue();
    }
}
```
Să explicăm ce face codul.

Parametrul de tip "**T**" extinde Număr pentru a restricționa tipul de obiecte care pot fi utilizate în tipul parametrizat.

"**Număr**" este o superclasă a tuturor claselor numerice, cum ar fi "**Număr întreg**", "**Float**" și "**Dublu**".

Dacă încercăm să folosim o altă clasă care nu este **o subclasă de Număr**, compilatorul va returna o eroare în timpul compilării.


[/slide]

[slide hideTitle]

# Problemă cu Soluție: Generic Scale

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/RO/interactive-java-advanced-generics-20-Problem-and-Solution-Generic-Scale-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Generic Scale" timeLimit=5000 taskId="oop-basics-java-generics-lab-Generic-Scale" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]
```

```
[task-description]
## Descriere
Creați o clasă `Scară <T>` care conține două elemente - **stânga** și **dreapta**.

Scara ar trebui să primească elementele prin intermediul constructorului său unic:

- `Scale(T left, T right)`

Scara ar trebui să aibă o singură metodă:

- `T getHeavier()`

**Cel mai mare dintre cele două elemente este mai greu**.

Metoda ar trebui să returneze `null` dacă elementele sunt **egale**.

# Exemplu

```java
Scale<String> stringScale = new Scale<>("a", "c");
System.out.println(stringScale.getHeavier());

Scale<Integer> integerScale = new Scale<>(1, 2);
System.out.println(integerScale.getHeavier());
```

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class P03_ZeroTest \{

    @Test
    public void test() throws NoSuchMethodException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        cl.getConstructor(Comparable.class, Comparable.class);
        cl.getMethod("getHeavier");
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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P03_getHeavierInteger \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException,
            InstantiationException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        Constructor constructor = cl.getConstructor(Comparable.class, Comparable.class);
        Method getHeavier = cl.getMethod("getHeavier");

        Object scale = constructor.newInstance(3, 4);
        Integer result = (Integer) getHeavier.invoke(scale);
        Assert.assertTrue(result == 4);

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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P03_getHeavierString \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException,
            InstantiationException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        Constructor constructor = cl.getConstructor(Comparable.class, Comparable.class);
        Method getHeavier = cl.getMethod("getHeavier");

        Object scale = constructor.newInstance("abc", "xyz");
        String result = (String) getHeavier.invoke(scale);
        Assert.assertTrue(result.equals("xyz"));

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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P03_getHeavierFloat \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException,
            InstantiationException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        Constructor constructor = cl.getConstructor(Comparable.class, Comparable.class);
        Method getHeavier = cl.getMethod("getHeavier");

        Object scale = constructor.newInstance(3.3f, 4.4f);
        Float result = (Float) getHeavier.invoke(scale);
        Assert.assertTrue(result == 4.4f);

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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P03_getHeavierDouble \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException,
            InstantiationException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        Constructor constructor = cl.getConstructor(Comparable.class, Comparable.class);
        Method getHeavier = cl.getMethod("getHeavier");

        Object scale = constructor.newInstance(3.3, 4.4);
        Double result = (Double) getHeavier.invoke(scale);
        Assert.assertTrue(result == 4.4);

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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P03_getHeavierNull \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException,
            InstantiationException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        Constructor constructor = cl.getConstructor(Comparable.class, Comparable.class);
        Method getHeavier = cl.getMethod("getHeavier");

        Object scale = constructor.newInstance(3, 3);
        Integer result = (Integer) getHeavier.invoke(scale);
        Assert.assertTrue(result == null);

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

# Problemă cu Soluție: List Utilities

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/RO/interactive-java-advanced-generics-23-Problem-and-Solution-List-Utilities-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="List Utilities" timeLimit=5000 taskId="oop-basics-java-generics-lab-List-Utilities" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]
```

```
[task-description]
## Description
Creați o clasă `ListUtils` pe care o veți folosi prin alte câteva exerciții.

Clasa ar trebui să aibă **două metode statice**:

- `T getMin(List<T> list)`

- `T getMax(List<T> list)`

Metodele ar trebui să arate `IllegalArgumentException` dacă este trecută o listă goală.

# Exemplu

```java
List<Integer> integers = new ArrayList<>();
Collections.addAll(integers, 1, 2, 18, 2, -1);

Integer maxInteger = ListUtils.getMax(integers);

List<String> string = new ArrayList<>();
Collection.addAll(strings, "a", "b", "c");

Integer minString = ListUtils.getMin(strings);
```

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

public class P04_ZeroTest \{

    @Test
    public void test() throws NoSuchMethodException \{
        Assert.assertTrue("Class 'ListUtils' not found", Classes.allClasses.containsKey("ListUtils"));
        Class cl = Classes.allClasses.get("ListUtils");
        cl.getMethod("getMin", List.class);
        cl.getMethod("getMin", List.class);
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class P04_GetMinInteger \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ListUtils' not found", Classes.allClasses.containsKey("ListUtils"));
        Class cl = Classes.allClasses.get("ListUtils");

        Method getMin = cl.getMethod("getMin", List.class);

        List\<Integer\> testList = new ArrayList\<\>();
        Collections.addAll(testList, 1, 2, 3, 1, -2, 1);
        Integer result = (Integer) getMin.invoke(null, testList);
        Assert.assertTrue(result == -2);
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

public class P04_GetMinException \{

    @Test(expected = IllegalArgumentException.class)
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ListUtils' not found", Classes.allClasses.containsKey("ListUtils"));
        Class cl = Classes.allClasses.get("ListUtils");

        Method getMin = cl.getMethod("getMin", List.class);

        List\<Integer\> testList = new ArrayList\<\>();
        try \{
            Integer result = (Integer) getMin.invoke(null, testList);
        \} catch (InvocationTargetException ite) \{
            if (ite.getTargetException().getClass() == IllegalArgumentException.class) \{
                throw new IllegalArgumentException();
            \}
        \}
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class P04_GetMaxString \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ListUtils' not found", Classes.allClasses.containsKey("ListUtils"));
        Class cl = Classes.allClasses.get("ListUtils");

        Method getMax = cl.getMethod("getMax", List.class);

        List\<String\> testList = new ArrayList\<\>();
        Collections.addAll(testList, "a", "b", "c");
        String result = (String) getMax.invoke(null, testList);
        Assert.assertTrue(result.equals("c"));
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class P04_GetMaxException \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ListUtils' not found", Classes.allClasses.containsKey("ListUtils"));
        Class cl = Classes.allClasses.get("ListUtils");

        Method getMax = cl.getMethod("getMax", List.class);

        List\<String\> testList = new ArrayList\<\>();
        Collections.addAll(testList, "a", "b", "c");
        try \{
            String result = (String) getMax.invoke(null, testList);
        \} catch (InvocationTargetException ite) \{
            if (ite.getTargetException().getClass() == IllegalArgumentException.class) \{
                throw new IllegalArgumentException();
            \}
        \}
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

# Type Parameters Relationships

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/RO/interactive-java-advanced-generics-25-26-Type-Parameters-Relationships-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Genericele** sunt **invariante** - subtipurile și supertipurile **nu sunt înlocuibile**.

**Exemplu:**

```java
List<Object> objects = new ArrayList<>();
List<Animal> animals = new ArrayList<>();
objects = animals; 
```

Atribuirea structurii de date `animals` la `objects` va duce la o eroare în timpul compilării.

[/slide]
