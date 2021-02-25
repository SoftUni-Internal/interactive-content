[slide hideTitle]
# Summary

# In this lesson you learned:

- Generics add type safety

```java
List<String> strings = new ArrayList<String>();

strings.add("1");
strings.add("2");
strings.add(3); // Compile time error
```

- Generic code is more reusable

```java
List<Integer> integers = new ArrayList<>();
List<Person> people = new ArrayList<>();
```

- Classes, interfaces and methods can be generic

```java
interface List<T> {
    void add (T element);
    T get (int index);
    // ...
}
```

- Runtime information about type parameters is lost due to erasure


## In the next lesson, you will learn:

- Variable Arguments (`VarArgs`) in Java
- Iterators 
    - `Iterator`
    - `ListIterator`
- Comparators
    - `Comparable`



[/slide]
