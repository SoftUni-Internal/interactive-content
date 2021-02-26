# Generic Classes and Interfaces

[slide hideTitle]

# Generic Classes

We can define our **classes** as a **generic type**.

A generic type is a class or interface that is parameterized over types.

In the generic class declarations, the name of the class is followed by the type parameter section. 

The **type parameter**, also known as the type variable, is an identifier used to specify a generic type name. 

The type parameter section of the generic class can include one or more type parameters that are separated by commas. 

These classes are also known as parameterized classes.

In the following example, we have a generic class `Container` that accepts one type parameter:

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

Тhis example illustrates a class with multiple parameters:

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

It is also used to describe the **return value** of `remove()`.

[/slide]

[slide hideTitle]
# Problem with Solution: Jar of T
[code-task title="Jar of T" taskId="oop-basics-java-generics-lab-Jar-of-T" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Java - Unit Testing Strategy needed
    }
}
```
[/code-editor]
[task-description]
## Description

Create a class `Jar` that can store anything.

It should have two public methods:

- `void add(element)`
- `element remove()`

`add()` should add on top of its contents.

`remove()` should get the topmost element.

# Example

```java
Jar<Pickle> jarOfPickles = new Jar<>();

jarOfPickles.add(new Pickle());
jarOfPickles.add(new Pickle());

Pickle pickle = jarOfPickles.remove();
```

## Submit
To submit your solution, **zip** your whole package with the `Jar` and `Main` classes:

[image assetsSrc="generics-example(2).png" /]

If you did not create a **package**, just select your classes and **zip** them.

[/task-description]
[code-io /]
[tests]
[test]
[input]
Unit tests!
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

A **generic Java interface** is an interface which can be **typed** - meaning it can be specialized to work with a specific type (e.g. interface or class) when used.

Generic interfaces are **specified just like generic classes**. 

**For example:**

```java
public interface Mathematics<T extends Number> {

    int powerOf(T number);
}
```
In the example above, we declare the Mathematics interface which declares the method `powerOf()`.

The type parameter `T` extends Number to restrict the type of objects that can be used in the parameterized type.

The `Number` is a superclass of all numeric classes, such as `Integer`, `Float` and `Double`.

So, if we try to use another class which is **not a subclass of Number**, the compiler will throw `compile-time-error`.

[/slide]

[slide hideTitle]

# Problem with Solution: Generic Array Creator

[code-task title="Generic Array Creator" taskId="oop-basics-java-generics-lab-Generic-Array-Creator" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Java - Unit Testing Strategy needed
    }
}
```
[/code-editor]
[task-description]
## Description

Create a class `ArrayCreator` with a method and a single overload to it:

- `static T[] create(int length, T item)`
- `static T[] create(Class<T> class, int length, T item)`

The method should return an array with the given length and every element should be set to the given default item.


# Example

```java
String[] strings = ArrayCreator.create(10, "none");
Integer[] integers = ArrayCreator.create(Integer.class, 10, 0);
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
Unit tests!
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

