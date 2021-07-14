# Generic Classes and Interfaces

[slide hideTitle]

# Generic Classes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-7-Generic-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can define our **classes** as a **generic type**.

A generic type is a class or interface that is parameterized over types.

In the generic class declarations, the name of the class is followed by the type parameter section. 

The **type parameter**, also known as the type variable, is an identifier used to specify a generic type name. 

The type parameter section of the generic class can include one or more type parameters that are separated by commas. 

These classes are also known as parameterized classes.

In the following example, we have a generic class "**Container**" that accepts one type parameter:

```java
public class Container<T> {

    private List<T> items;

    public void addItem(T item) {
        this.items.add(item);
    }

    public boolean removeItem(T item) {
        return this.items.remove(item);
    }
}
```

Тhe following example illustrates a class that accepts multiple parameters:

```java
public class Container<K, V> {

    private HashMap<K, V> items;

    public void addItem(K key, V value) {
        this.items.put(key,value);
    }

    public boolean removeByKey(K key, V value) {
        return this.items.remove(key, value);
    }
}
```
[/slide]

[slide hideTitle]

# Type Parameter Scope

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-8-Type-Parameter-Scope-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The type parameter can be used **anywhere inside the declaring class**.

**Example:**

```java
class List<T> {
    public void add(T element) {
        this.items.add(item);
    }

    public T remove() {
        // ...
    }
}
```

Here, the type parameter is used in the signature of the `add()` method.

It is also used to describe the **return value** of the `remove()` method.

[/slide]

[slide hideTitle]
# Problem with Solution: Jar of T

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-9-Problem-and-Solution-Jar-of-T-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Jar of T" timeLimit=5000 taskId="oop-basics-java-generics-lab-Jar-of-T" executionType="tests-execution" executionStrategy="java-project-tests" requiresInput]
[code-upload allowedMemory="30" /]

[task-description]
## Description

Create a class called "**Jar**" that can store anything.

It should have two public methods:

- `void add(element)` - adds the element on top of any other elements
- `element remove()` - gets the topmost element and removes it

# Example

```java
Jar<Pickle> jarOfPickles = new Jar<>();

jarOfPickles.add(new Pickle());
jarOfPickles.add(new Pickle());

Pickle pickle = jarOfPickles.remove();
```

## Hints
Use the syntax `Jar<T>` to create a generic class.

## Submit
To submit your solution create a **zip** file with your whole package containing the "**Jar**" and "**Main**" classes:

[image assetsSrc="generics-example(2)-fixed.png" /]

If you did not create a **package**, select your classes and **zip** them.

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class P01_ZeroTest \{

    @Test
    public void test() throws NoSuchMethodException \{
        Assert.assertTrue("Class 'Jar' not found", Classes.allClasses.containsKey("Jar"));
        Class cl = Classes.allClasses.get("Jar");
	Assert.assertTrue("Jar class has no type parameters", cl.getTypeParameters().length \> 0);
        cl.getDeclaredMethod("add", Object.class);
        cl.getDeclaredMethod("remove");
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

public class P01_TestAddInt \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException \{
        Class\<?\> cl = Classes.allClasses.get("Jar");
	Assert.assertTrue(cl.getTypeParameters().length \> 0);
        Method add = cl.getMethod("add", Object.class);
        Method remove = cl.getMethod("remove");
        Object jar = cl.newInstance();
        add.invoke(jar, 123);
        Integer result = (Integer) remove.invoke(jar);
        Assert.assertTrue(result.equals(123));
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

public class P01_TestAddString \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException \{
        Class\<?\> cl = Classes.allClasses.get("Jar");
	Assert.assertTrue(cl.getTypeParameters().length \> 0);
        Method add = cl.getMethod("add", Object.class);
        Method remove = cl.getMethod("remove");
        Object jar = cl.newInstance();
        add.invoke(jar, "123");
        String result = (String) remove.invoke(jar);
        Assert.assertTrue(result.equals("123"));
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

public class P01_TestAddFloat \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException \{
        Class\<?\> cl = Classes.allClasses.get("Jar");
        Assert.assertTrue(cl.getTypeParameters().length \> 0);
        Method add = cl.getMethod("add", Object.class);
        Method remove = cl.getMethod("remove");
        Object jar = cl.newInstance();
        add.invoke(jar, 123.2f);
        Float result = (Float) remove.invoke(jar);
        Assert.assertTrue(result.equals(123.2f));
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

public class P01_TestAddDouble \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException \{
        Class\<?\> cl = Classes.allClasses.get("Jar");
        Assert.assertTrue(cl.getTypeParameters().length \> 0);
        Method add = cl.getMethod("add", Object.class);
        Method remove = cl.getMethod("remove");
        Object jar = cl.newInstance();
        add.invoke(jar, 123.2);
        Double result = (Double) remove.invoke(jar);
        Assert.assertTrue(result.equals(123.2));
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

public class P01_TestAddBoolean \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException \{
        Class\<?\> cl = Classes.allClasses.get("Jar");
        Assert.assertTrue(cl.getTypeParameters().length \> 0);
        Method add = cl.getMethod("add", Object.class);
        Method remove = cl.getMethod("remove");
        Object jar = cl.newInstance();
        add.invoke(jar, false);
        add.invoke(jar, true);
        add.invoke(jar, false);
        boolean result = (boolean) remove.invoke(jar);
        Assert.assertTrue(!result);
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
# Subclassing Generic Classes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-11-Subclassing-Generic-Classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Generic classes can be **extended** to concrete classes.

**Example:**

```java
class JarOfOlives extends Jar<Olive> {
    // ...
}

JarOfOlives jar = new JarOfOlives();
jar.add(new Olive());
jar.add(new Vegetable()); // Error
```

[/slide]

[slide hideTitle]
# Generic Interfaces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-12-Generic-Interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **generic Java interface** is an interface that is declared with type parameters - meaning it can be specialized to work with a specific type (e.g. interface or class) when used.

Generic interfaces are **specified just like generic classes**. 

**For example:**

```java
public interface Mathematics<T extends Number> {

    int powerOf(T number);
}
```
In the example above, we declare the **Mathematics** interface, which declares the method `powerOf()`.

The type parameter `T` extends **Number** to restrict the type of objects that can be used in the parameterized type.

The "**Number**" is a superclass of all numeric classes, such as "**Integer**", "**Float**", and "**Double**".

So, if we try to use another class that is **not a subclass of Number**, the compiler will throw а "**compile-time error**".

[/slide]

[slide hideTitle]

# Problem with Solution: Generic Array Creator

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-13-Problem-and-Solution-Generic-Array-Creator-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Generic Array Creator" timeLimit=5000 taskId="oop-basics-java-generics-lab-Generic-Array-Creator" executionType="tests-execution" executionStrategy="java-project-tests" requiresInput] 
[code-upload allowedMemory="30" /]

[task-description]
## Description

Create a class called "**ArrayCreator**" that will contain a method and a single overload to it:

- `static T[] create(int length, T item)`
- `static T[] create(Class<T> class, int length, T item)`

The method should return an **array with the given length**. 

Each element should be set to the given **default** item.


# Example

```java
String[] strings = ArrayCreator.create(10, "none");
Integer[] integers = ArrayCreator.create(Integer.class, 10, 0);
```

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class P02_ZeroTest \{

    @Test
    public void test() throws NoSuchMethodException \{
        Assert.assertTrue("Class 'ArrayCreator' not found", Classes.allClasses.containsKey("ArrayCreator"));
        Class cl = Classes.allClasses.get("ArrayCreator");
        cl.getMethod("create", int.class, Object.class);
        cl.getMethod("create", Class.class, int.class, Object.class);
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

public class P02_CreateWOClassInteger \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ArrayCreator' not found", Classes.allClasses.containsKey("ArrayCreator"));
        Class cl = Classes.allClasses.get("ArrayCreator");
        Method create = cl.getMethod("create", int.class, Object.class);
        Object\[\] array = (Object\[\]) create.invoke(null, 10, 3);

        Assert.assertTrue(array.length == 10);
        for (Object s : array) \{
            Assert.assertTrue((Integer) s == 3);
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

public class P02_CreateWOClassString \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ArrayCreator' not found", Classes.allClasses.containsKey("ArrayCreator"));
        Class cl = Classes.allClasses.get("ArrayCreator");
        Method create = cl.getMethod("create", int.class, Object.class);
        Object\[\] array = (Object\[\]) create.invoke(null, 10, "Pesho");

        Assert.assertTrue(array.length == 10);
        for (Object s : array) \{
            Assert.assertTrue(s.equals("Pesho"));
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

public class P02_CreateWClassInteger \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ArrayCreator' not found", Classes.allClasses.containsKey("ArrayCreator"));
        Class cl = Classes.allClasses.get("ArrayCreator");
        Method create = cl.getMethod("create", Class.class, int.class, Object.class);
        Integer\[\] array = (Integer\[\]) create.invoke(null, Integer.class, 10, 2);

        Assert.assertTrue(array.length == 10);
        for (Integer i : array) \{
            Assert.assertTrue(i == 2);
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

public class P02_CreateWClassString \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ArrayCreator' not found", Classes.allClasses.containsKey("ArrayCreator"));
        Class cl = Classes.allClasses.get("ArrayCreator");
        Method create = cl.getMethod("create", Class.class, int.class, Object.class);
        String\[\] array = (String\[\]) create.invoke(null, String.class, 10, "Pesho");

        Assert.assertTrue(array.length == 10);
        for (String s : array) \{
            Assert.assertTrue(s.equals("Pesho"));
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

public class P02_CreateMultiple \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ArrayCreator' not found", Classes.allClasses.containsKey("ArrayCreator"));
        Class cl = Classes.allClasses.get("ArrayCreator");
        Method create = cl.getMethod("create", Class.class, int.class, Object.class);
        String\[\] array1 = (String\[\]) create.invoke(null, String.class, 10, "Pesho");
        Integer\[\] array2 = (Integer\[\]) create.invoke(null, Integer.class, 10, 0);
        Double\[\] array3 = (Double\[\]) create.invoke(null, Double.class, 10, 0.1);

        Assert.assertTrue(array1.length == 10);
        for (String s : array1) \{
            Assert.assertTrue(s.equals("Pesho"));
        \}

        Assert.assertTrue(array2.length == 10);
        for (Integer i : array2) \{
            Assert.assertTrue(i.equals(0));
        \}

        Assert.assertTrue(array3.length == 10);
        for (Double d : array3) \{
            Assert.assertTrue(d.equals(0.1));
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
