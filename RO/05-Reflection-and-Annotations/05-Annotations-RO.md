# Adnotări

[slide hideTitle]

# Ce Reprezintă Adnotările 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-29-30-annotation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Adnotările sunt un tip de **metadate** pe care le puteți insera în codul dvs. Java.

Acestea sunt semnificate printr-un simbol "**@**" și sunt utilizate pentru a **descrie** părți din codul dvs.

Adnotările pot fi aplicate pentru **clase**, **câmpuri**, **metode** etc.

[/slide]

[slide hideTitle]

# Utilizarea Adnotărilor

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-31-annotation-usage-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să vedem un exemplu:

``` java
@Deprecated // Aceasta indică că metoda este depreciată
public void deprecatedMethod() {
  System.out.println("Deprecated!");
}
```

Această adnotare poate fi folosită pentru a indica că elementul marcat nu mai trebuie să fie utilizat.

Este o practică bună să folosiți adnotările, deoarece acestea pot preveni erori viitoare.

[/slide]


[slide hideTitle]

# Adnotări Încorporate

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-32-34-built-in-annotations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iată câteva adnotări **încorporate**:

- `@Override` - indică faptul că o metodă suprascrie sau înlocuiește comportamentul unei metode moștenite

- `@Deprecated` - marchează un API care nu mai este destinat utilizării

- `@SupressWarning` - folosit pentru a dezactiva unele avertismente ale compilatorului

Să vedem cum putem folosi acest lucru:

```java
@SuppressWarnings(value = "unchecked")
public <T> void warning(int size) {
  T[] unchecked = (T[]) new Object[size]; // Unde (T[]) generează o avertizare de compilare
}
```
[/slide]

[slide hideTitle]

# Crearea Adnotărilor

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-35-36-creating-annotations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem crea adnotări personalizate utilizând cuvântul cheie **@interface**.

Iată câteva informații suplimentare pe care trebuie să le aveți în vedere atunci când creați adnotări personalizate:

- Metodele pot avea valori implicite

- Tipurile de returnare sunt limitate la **primitive**, **Șir**, **Clasă**, **tipru enum**, **adnotări** și **matrice** ale tipurilor precedente

- Declarațiile metodei noastre nu trebuie să arunce nicio clauză sau să aibă parametri

Acesta este un **exemplu** de adnotare personalizată:

``` java
@interface MyAnnotation {

   String name();
   int age();
   String[] newNames();
}
``` 

Putem observa că fiecare element este definit similar unei definiții dintr-o interfață.

Pentru a folosi adnotarea noastră personalizată, putem face următoarele:

``` java
@MyAnnotation(
    name="George",
    age=25,
    newNames={"Peter", "Anderson"}
)

public class MyClass {
    // ...
}
```

[/slide]

[slide hideTitle]

# Adnotări Meta 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-37-38-meta-annotations-target-and-retention-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un alt lucru pe care îl putem face este să specificăm unde se aplică adnotarea.

## Target

Putem realiza acest lucru folosind: `@Target`:

``` java
@Target(ElementType.FIELD) // Este folosit doar pentru adnotarea câmpurilor
public @interface FieldAnnotation {
}
```

"ElementType" disponibile sunt:

- **CONSTRUCTOR**
- **FIELD**
- **LOCAL_VARIABLE**
- **METHOD**
- **PACKAGE**
- **PARAMETER**
- **TYPE**

## Retention

Folosim `@Retention` pentru a specifica dacă adnotarea noastră personalizată ar trebui să fie disponibilă în timpul rulării.

``` java
@Retention(RetentionPolicy.RUNTIME) //putem obține informații în timpul rulării
public @interface RuntimeAnnotation {
  // ... logic here
}
```

Alte **retention policies**:

- **SOURCE**
- **CLASS**
- **RUNTIME**


[/slide]


[slide hideTitle]

# Obținerea Adnotărilor

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-41-42-43-annotations-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi metoda `getAnnotations()` pentru a obține toate adnotările de clasă.

```java
Annotation[] annotations = aClass.getAnnotations();
```

Dacă trebuie să obținem adnotări de parametri, putem folosi următoarea sintaxă:

```java
Annotation[][] parameterAnnotations = method.getParameterAnnotations();
```

Această metodă returnează o matrice de adnotări bidimensională, reprezentând adnotările obiectului metodei.

De asemenea, putem obține câmpurile și metodele adnotărilor:

``` java
Annotation[] fieldAnnotations = field.getDeclaredAnnotations();
```

``` java
Annotation[] methodAnnotation = method.getDeclaredAnnotations();
```


[/slide]

[slide hideTitle]
# Problemă cu Soluție: Create Annotation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-39-problem-and-solution-create-annotation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Create Annotation" timeLimit=5000 taskId="Java-OOP-Advanced-Reflection-Create-Annotation" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere

Creați o adnotare **Subject** cu un element **Șir** \[\] numit **categories**, care:

- Ar trebui să fie disponibil la rulare

- Poate fi plasat numai pe tipuri

# Exemple

```java
@Subject(categories {"Test", "Annotations"})
public class Testclass {
}
```

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.annotation.Annotation;

public class Z01_Zero \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> subject = getClass("Subject");

        Assert.assertTrue("Subject is not of Annotation.class", Annotation.class.isAssignableFrom(subject));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.Annotation;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

public class T01_Retention \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> coffee = getClass("Subject");

        Assert.assertTrue("Subject is not of Annotation.class", Annotation.class.isAssignableFrom(coffee));

        Retention annotation = coffee.getAnnotation(Retention.class);
        Assert.assertTrue("Subject has no Retention annotation", annotation != null);

        RetentionPolicy value = annotation.value();
        Assert.assertTrue("Subject Retention policy is not RUNTIME", value.equals(RetentionPolicy.RUNTIME));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.\*;

public class T02_Target \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> subject = getClass("Subject");

        Assert.assertTrue("Subject is not of Annotation.class", Annotation.class.isAssignableFrom(subject));

        Target annotation = subject.getAnnotation(Target.class);
        Assert.assertTrue("Subject has no Retention annotation", annotation != null);

        ElementType\[\] value = annotation.value();
        Assert.assertTrue("Subject Retention policy is not RUNTIME", value\[0\].equals(ElementType.TYPE));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class T03_Values \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Class\<?\> subject = getClass("Subject");

        Assert.assertTrue("Subject is not of Annotation.class", Annotation.class.isAssignableFrom(subject));

        Method categories = subject.getMethod("categories");
        //categories.invoke(null);
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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
# Problemă cu soluție: Coding Tracker

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-44-problem-and-solution-coding-tracker-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Coding Tracker" timeLimit=5000 taskId="Java-OOP-Advanced-Reflection-Coding-Tracker" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]

# Descriere
Creați o adnotare **Autor** cu un element **Șir** numit **name**, care:
- Ar trebui să fie disponibil la rulare
- Poate fi plasat numai pe metode

Creați o clasă **Tracker** cu o metodă:
- **public static void printMethodsByAuthor()**

# Exemplu

```java
@Author (name = "George")
public static void main(String[] args) {
    Tracker.print Methods ByAuthor(Tracker.class);
}

@Author (name "Peter")
public static void printMethodsByAuthor(Class<?> cl) {...}
```

## Output

```java
George: main()
Peter: printMethodsByAuthor()
```

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.annotation.Annotation;

public class Z01_Zero \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> author = getClass("Author");

        Assert.assertTrue("Author is not of Annotation.class", Annotation.class.isAssignableFrom(author));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.Annotation;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

public class T01_Retention \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> author = getClass("Author");

        Assert.assertTrue("Author is not of Annotation.class", Annotation.class.isAssignableFrom(author));

        Retention annotation = author.getAnnotation(Retention.class);
        Assert.assertTrue("Author has no Retention annotation", annotation != null);

        RetentionPolicy value = annotation.value();
        Assert.assertTrue("Author Retention policy is not RUNTIME", value.equals(RetentionPolicy.RUNTIME));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.Annotation;
import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

public class T02_Target \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> author = getClass("Author");

        Assert.assertTrue("Author is not of Annotation.class", Annotation.class.isAssignableFrom(author));

        Target annotation = author.getAnnotation(Target.class);
        Assert.assertTrue("Author has no Target annotation", annotation != null);

        ElementType\[\] value = annotation.value();
        Assert.assertTrue("Author Target is not METHOD", value\[0\].equals(ElementType.METHOD));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class T03_Values \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Class\<?\> author = getClass("Author");

        Assert.assertTrue("Author is not of Annotation.class", Annotation.class.isAssignableFrom(author));

        Method name = author.getMethod("name");
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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


