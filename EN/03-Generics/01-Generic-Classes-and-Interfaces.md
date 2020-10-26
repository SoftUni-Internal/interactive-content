# Generic Classes and Interfaces

[slide]

# Generic Classes

We can define our own classes with generics type.

A generic type is a class or interface that is parameterized over types.

In the generic class declarations, the name of the class is followed by the type parameter section. 

The type parameter, also known as the type variable, is an identifier used to specify a generic type name. 

The type parameter section of the generic class can include one or more type parameters that are separated by commas. 

These classes are also known as parameterized classes.

In the following example, we have a generic class Container which accepts one type parameter:

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

Multiple Type Parameters Example:

```java
public class Container<K,V> {

    private HashMap<K,V> items;

    public void addItem(K key, V value) {
        this.items.put(key,value);
    }

    public boolean removeByKey(K key, V value) {
        return this.items.remove(key, value);
    }
}
```
[/slide]

[slide]
# Problem: Jar of T
[code-task title="Problem: Jar of T" taskId="11709b5a-e400-4da9-8b47-1cb8af706312" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a class `Jar<>` that can store anything.
It should have two public methods:
- void add(element)
- element remove()
Adding should add on top of its contents. Remove should get the topmost element.

## Examples
[image assetsSrc="generics-example(1).png" /]

## Submit
To submit your solution, **zip** your whole package with the **Jar** and **Main classes**:

[image assetsSrc="generics-example(2).png" /]

If you didn't create **package** just choose your classes and **zip** them.

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

[slide]

# Solution: Jar of T

- Use the syntax `Jar<T>` to create a generic class:

```java
public class Jar<T> {
  private Deque<T> content;
  public Jar() { this.content = new ArrayDeque<>(); }

  public void add(T entity) {
    this.content.push(entity);
  }
  
  public T remove() { return this.content.pop(); }
}
```
[/slide]

[slide]
# Generic Interfaces

A generic Java interface is an interface which can be typed - meaning it can be specialized to work with a specific type (e.g. interface or class) when used.

Generic interfaces are specified just like generic classes. 

For example:

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

[slide]

# Problem: Generic Array Creator

[code-task title="Problem: Generic Array Creator" taskId="8acb50c5-224b-4e83-b003-2663bdb70de8" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
- static T[] create(int length, T item)
- static T[] create(Class<T> class, int length, T item)
The method should return an array with the given length and every element should be set to the given default item.


## Examples
[image assetsSrc="generics-example(3).png" /]

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

[slide]

# Solution: Generic Array Creator

```java
public class ArrayCreator {

    public static <T> T[] create(Class<T> cl,int length, T item) {

        T[] array = (T[])Array.newInstance(cl,length);
        for (int i = 0; i < array.length; i++) {
            array[i] = item;
        }
        return array;
    }

    public static <T> T[] create(int length, T item) {

        T[] array =(T[]) new Object[length];
        for (int i = 0; i < array.length; i++) {
            array[i] = item;
        }
        return array;
    }
}

```
[/slide]

