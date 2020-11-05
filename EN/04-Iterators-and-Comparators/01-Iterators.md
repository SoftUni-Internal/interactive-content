
# Iterators

[slide]

# Iterable

## Collections Hierarchy

The Collection interface extends Iterable and hence all child classes of Collection also implement Iterable.

[image assetsSrc="iterators-example(1).png" /]

`Iterable<T>` is the root interface of the Java collection classes.

An Iterable represents a collection which can be traversed.

A class that implements the `Iterable<T>` can be used with the new for-loop.

It does that by internally calling the `iterator()` method on the object.

## Iterable\<T\> Methods

- Iterable `iterator()` method

The Iterable `iterator()` method returns an iterator over elements of type T.

In the following example, we have a List which extends `Iterable<T>`.

The iterator() method of this List returns Iterator of type String.

So, we can use all the Iterator methods to iterate over a collection.

The hasNext() - method returns true if the iterator has more elements, and false if not.

So, we pass the `iterator.hasNext()` into the while loop and in this way we begin to iterate over the collection.

We use an `iterator.next()` - method to get the next element from the collection.

```java live
List<String> names = new ArrayList<>();
list.add("Peter");
list.add("Maria");
list.add("Alex");

Iterator<String> iterator = names.iterator();

while(iterator.hasNext()) {
    String name = iterator.next();
    System.out.println( name );
}
```

- `forEach(Consumer<? super T> action)`

Another way to iterate the elements of a Java Iterable is via its forEach() method. 

The forEach() method takes a Java Lambda Expression as a parameter. 

This lambda expression is called once for each element in the Iterable. 

In the following example, we have a List which extends `Iterable<T>`.

We use the `forEach()` method to iterate over the collection.

```java
List<String> names = new ArrayList<>();
list.add("Peter");
list.add("Maria");
list.add("Alex");

names.forEach( (name) -> {
    System.out.println( name );
});
```

- `spliterator()`

The iterable `spliterator()` method of this List returns Spliterator of type String.

If you observe the output of the following example, you will find `Spliterator.forEachRemaining()` method works in the same way as `ArrayList.foreach()` but it provides **better performance**.


```java live
List<String> list = new ArrayList<>();
list.add("Peter");
list.add("Maria");
list.add("Alex");

Spliterator<String> names = list.spliterator();

names.forEachRemaining((name) -> System.out.println(name)); 
```


[/slide]

[slide]

# Implement Custom Iterator

There is a way to implement a custom Iterator, let's suppose, we want a custom list with names.

We want our NamesList to iterate only the names whose start with "A".

For that reason, our NamesList class have to implement the Iterable interface.

```java
public class NamesList implements Iterable<String> {

}
```
Let's create a field `String[] names` where we are going to save our names.

```java
public class NamesList implements Iterable<String> {

    private String[] names;

}
```

Next step is to create a constructor.

Our constructor accepts varargs (of type String) so, we can create **multiple instances of the object** with different number of arguments each time we create it.

```java
public class NamesList implements Iterable<String> {

    private String[] names;

    public NamesList(String... names) {
        this.names = names;
    }

}
```

After that, we have to implement the `iterator()` -  method which is inherited by the Iterable interface.


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

The `iterator()` - method returns `new Iterator`, and we have to create an **inner class** which implements `Iterator<String>` and pass them to the iterator() method.

So, let's create an inner **NamesIterator** class which implements `Iterator<String>`. 

In this class, we have a field `int counter;`.

In the constructor, we set the initial value of the field `counter` to 0.

Next, we implement the `hasNext()` - method which is mandatory when we implement the Iterator interface.

The boolean `hasNext()` - method returns `true` every time reach the name starts with `A`.

The next one method which is mandatory to implement is the `next()` - method.

This method return the **current** name from our "**names**" - array.

The last thing, we have to do is to return `new NamesIterator()` in the `iterator()` - method.

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


[slide]
# Problem: Library
[code-task title="Problem: Library" taskId="f027f67a-2574-4b1d-a31e-e3af633bc5e8" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a class **Library** from UML diagram below:

| `<<Iterable<Book>>>` |
| --- |
| **Library** |
|- books: `Book[]`|
|+ iterator(): `Iterator<Book>`|

Create a nested class **LibIterator** from UML diagram below:

| `<Iterator<Book>>` |
| --- |
| **LibIterator** |
|- counter: int |
|+ hasNext(): boolean |
|+ next(): Book |

## Hint
Use the **Book** class from the previous problem.


## Examples
Use the code below to test your **Library** class.

```java
public static void main(String[] args) {
    Book bookOne = new Book("Animal Farm", 2003, "George Orwell");
    Book bookThree = new Book("The Documents in the Case", 2002);
    Book bookTwo = new Book("The Documents in the Case", 1930, 
    "Dorothy Sayers", "Robert Eustace");

    Library library = new Library<>(bookOne, bookTwo, boоkThree);

    for (Book book: library) {
	    System.out.println(book.getTitle());
    }
}

```

[/task-description]
[code-io /]
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


[slide]

# Solution: Library


The **Library** Class should look like this:

```java
public class Library implements Iterable<Book> {
    private Book[] books;

    public Library(Book... books) {
        this.books = books;
    }

    @Override
    public Iterator<Book> iterator() {
        return new LibIterator();
    }

    private class LibIterator implements Iterator<Book> {
        private int counter;

        LibIterator() {
            this.counter = 0;
        }

        @Override
        public boolean hasNext() {
            return this.counter < books.length;
        }

        @Override
        public Book next() {
            return books[this.counter++];
        }
    }
}

```

The **Book** class is the same as in previous problem:

```java
public class Book {
    private String title;
    private int year;
    private List<String> authors;

    public Book(String title, int year, String... authors) {
        this.title = title;
        this.year = year;
        this.authors = new ArrayList<>();

        if (authors.length != 0) {
            this.authors.addAll(Arrays.asList(authors));
        }
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public List<String> getAuthors() {
        return authors;
    }

    public void setAuthors(List<String> authors) {
        this.authors = authors;
    }
}

```


[/slide]

