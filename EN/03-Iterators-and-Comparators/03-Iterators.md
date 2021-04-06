
# Iterators

[slide hideTitle]

# Collections Hierarchy

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-12-13-Iterable-and-Iterator-Collections-Hierarchy -,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Collection interface extends Iterable and all child classes of Collection implement Iterable.

[image assetsSrc="iterators-example(1).png" /]

[/slide]

[slide hideTitle]

# Iterable

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-14-15-Iterable-T-and-Methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`Iterable<T>` is the root interface of the Java collection classes.

An Iterable represents a collection that can be traversed.

A class that implements the `Iterable<T>` can be used with the new for-loop.

It does that by internally calling the `iterator()` method on the object.

## Iterable Methods

- Iterable `iterator()` method

The Iterable `iterator()` method returns an iterator over elements of type T.

The `iterator()` method of this List returns an Iterator of type String.

We can use all the Iterator methods to iterate over a collection.

```java
List<String> names = new ArrayList<>();
names.add("Ben");
names.add("Mary");
names.add("Oliver");

Iterator<String> iterator = names.iterator();
```

- `hasnext()` method

The `hasNext()` - method returns true if the iterator has more elements, and false if not.

So, we pass the `iterator.hasNext()` into the while loop and in this way we begin to iterate over the collection.

We use the `iterator.next()` method to get the next element from the collection.

```java live
List<String> names = new ArrayList<>();
names.add("Peter");
names.add("Maria");
names.add("Alex");

Iterator<String> iterator = names.iterator();

while(iterator.hasNext()) {
    String name = iterator.next();
    System.out.println( name );
}
```

- `forEach(Consumer<? super T> action)`

Another way to iterate over the elements of a Java Iterable is via its forEach() method. 

The forEach() method takes a Java Lambda Expression as a parameter. 

This lambda expression is called once for each element in the Iterable collection. 

We use the `forEach()` method to iterate over the collection.

```java
List<String> names = new ArrayList<>();
names.add("Peter");
names.add("Maria");
names.add("Alex");

names.forEach((name) -> {
    System.out.println(name);
});
```

- `spliterator()`

The iterable `spliterator()` method of this List returns Spliterator of type String.

It provides **better performance**.


```java live
List<String> list = new ArrayList<>();
list.add("Peter");
list.add("Maria");
list.add("Alex");

Spliterator<String> names = list.spliterator();

names.forEachRemaining((name) -> System.out.println(name)); 
```


[/slide]

[slide hideTitle]

# Iterator

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-16-Iterator-T-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `iterator()` method returns a `new Iterator` which implements `Iterator<String>` and passes them to the `iterator()` method.

This example shows how to implement the `Iterator<T>` interface in a custom iterator.

Let us suppose, we want a custom list with names.

We want our NamesList to iterate only over the names that start with "A".

For that reason, our NamesList class has to implement the Iterable interface.

```java
public class NamesList implements Iterable<String> {
    // ...
}
```
Let us create a field `String[] names` where we are going to save our names.

```java
public class NamesList implements Iterable<String> {

    private String[] names;

}
```

The next step is to create a constructor.

Our constructor accepts varargs (of type String) so we can create **multiple instances of the object** with a different number of arguments each time we create it.

```java
public class NamesList implements Iterable<String> {

    private String[] names;

    public NamesList(String... names) {
        this.names = names;
    }

}
```

After that, we have to implement the `iterator()` method which is inherited by the Iterable interface.


```java
public class NamesList implements Iterable<String> {

    private String[] names;

    public NamesList(String... names) {
        this.names = names;
    }

    @Override
    public Iterator<String> iterator() {
        return null;
    }

}
```

We have to create an **inner** `NamesIterator` class that implements `Iterator<String>`. 

In this class, we have a field `int counter;`.

In the constructor, we set the initial value of the `counter` field to 0.

Next, we implement the `hasNext()` method which is mandatory when implementing the Iterator interface.

The boolean `hasNext()` method returns `true` every time the name starts with `A`.

The next method that is mandatory to implement is the `next()` method.

This method return the **current** name from our `names` array.

Lastly, we have to return `new NamesIterator()` in the `iterator()` method.

```java
public class NamesList implements Iterable<String> {

    private String[] names;

    public NamesList(String... names) {
        this.names = names;
    }

    @Override
    public Iterator<String> iterator() {
        return new NamesIterator();
    }

    private class NamesIterator implements Iterator<String> {

        private int counter;

        NamesIterator() {
            this.counter = 0;
        }

        @Override
        public boolean hasNext() {
            while (this.counter < names.length) {

                String name = names[this.counter];

                if (name.startsWith("A")) {
                    return true;
                }
                counter++;
            }
            return false;
        }

        @Override
        public String next() {
            return names[this.counter++];
        }
    }
}

```

[/slide]


[slide hideTitle]
# Problem with Solution: Library

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-17-Problem-and-Solution-Library-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Library" timeLimit=100000 taskId="oop-basics-java-iterators-and-comparators-lab-Library" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create a class **Library** from the UML diagram below:


[image assetsSrc="java-oop-basics-uml-book-iterable.png" /]


| "\<\<**Iterable**\<**Book**\>\>\>" |
| --- |
| **Library** |
|- books: Book\[\]|
|+ iterator(): Iterator\<Book\>|

Then, create a nested class **LibIterator** from UML diagram below:

[image assetsSrc="java-oop-basics-uml-book-iterable2.png" /]


| "\<\<**Iterator**\<**Book**\>\>" |
| --- |
| **LibIterator** |
|- counter: int |
|+ hasNext(): boolean |
|+ next(): Book |

## Hint

Use the **Book** class from the previous problem.


# Example

Use the code below to test your **Library** class.

```java
public static void main(String[] args) {
    Book bookOne = new Book("Animal Farm", 2003, "George Orwell");
    Book bookThree = new Book("The Documents in the Case", 2002);
    Book bookTwo = new Book("The Documents in the Case", 1930, 
    "Dorothy Sayers", "Robert Eustace");

    Library library = new Library<>(bookOne, bookTwo, bookThree);

    for (Book book: library) {
	    System.out.println(book.getTitle());
    }
}

```

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class TestLibraryFields \{
    private static final String CLASS_NAME = "Library";
    private static final String FIELD_NAME = "title";

    @Test
    public void bookFieldsNames() throws NoSuchFieldException \{
        Assert.assertTrue("Class 'Book' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        Field\[\] fields = book.getFields();
        for (Field field : fields) \{
            Assert.assertTrue(field.getName().equals(FIELD_NAME));
            Assert.assertTrue(Modifier.isPrivate(field.getModifiers()));
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

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class TestLibraryInterfaces \{
    private static final String CLASS_NAME = "Library";

    @Test
    public void bookFieldsNames() throws NoSuchFieldException \{
        Assert.assertTrue("Class 'Book' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        List\<Class\> interfaces = Arrays.asList(book.getInterfaces());
        Assert.assertTrue(interfaces.contains(Iterable.class));
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
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class TestLibraryIterator \{
    private static final String CLASS_NAME = "Library";
    private static final String METHOD_NAME = "iterator";

    @Test
    public void bookFieldsNames() throws NoSuchFieldException, NoSuchMethodException \{
        Assert.assertTrue("Class 'Library' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);

        Method iterator = book.getDeclaredMethod("iterator");
        Assert.assertNotNull(iterator);
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

