
# Iteratori

[slide hideTitle]

# Collections Hierarchy

Interfața Colecției extinde Iterabil și de aici, toate clasele pui ale Colecției, vor implementa, de asemenea, Iterabil 

[image assetsSrc="iterators-example(1).png" /]


[/slide]

[slide hideTitle]
# Iterable

`Iterable<T>` este interfața rădăcină a claselor colecției Java. 

Un Iterabil reprezintă o colecție care trebuie să fie străbătuă.

O clasă care implementează `Iterable<T>` poate fi folosită cu o nouă buclă for. 

Face aceste lucru prin apelarea internă a metodei `iterator()` pentru obiect.

## Metodele Iterable

- Metoda Iterabil `iterator()`

Metoda Iterable `iterator()` returnează un iterator peste elementele de tip T.

In exemplul următor, avem o listă care extinde `Iterable<T>`.

Metoda `iterator()` a acestei liste returnează un Iterator de tip String.

Deci, putem folosi toate metodele Iterator pentru a itera peste o colecție.

```java
List<String> names = new ArrayList<>();
names.add("Ben");
names.add("Mary");
names.add("Oliver");

Iterator<String> iterator = names.iterator();
```

- `hasNext()` metoda

Metoda `hasNext()` - returnează treu dacă iteratorul are mai multe elemente și false dacă nu are. 

Deci, pasăm `iterator.hasNext()` în bucla while și în acest mod începem să iterăm peste colecție.

Folosim metoda `iterator.next()` - pentru a găsi următorul element din colecție.

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

Un alt mod de a itera elementele din Java Iterable este prin metoda forEach(). 

Metoda `forEach()` ia o expresia Lambda din Java ca parametru. 

Această expresie lambda este apelată odată pentru fiecare element din Iterabil.

In următorul exemplu, avem o lista care extinde `Iterable<T>`.

Folosim metoda `forEach()` pentru a itera peste colecție. 

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

Metoda iterabilă `spliterator()` pentru această listă returnează Spliterator de tip Șir. 


Aceasta aduce **better performance**.


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

# Implementarea Custom Iterator

The `iterator()` method returns a `new Iterator` which implements `Iterator<String>` and passes them to the `iterator()` method.

This example shows how to implement the `Iterator<T>` interface in a custom iterator.

Let us suppose, we want a custom list with names.

We want our NamesList to iterate only over the names that start with "A".

For that reason, our NamesList class has to implement the Iterable interface.

```java
public class NamesList implements Iterable<String> {

}
```
Să creăm un câmp `String[] names` unde vom salva numele noastre. 

```java
public class NamesList implements Iterable<String> {

    private String[] names;

}
```

Următorul pas este să creăm un constructor. 

Constructorul nostru acdeptă argumente variabile varargs (de tip String) deci, putem crea **multiple instances of the object** cu diferinte numere de argumente de fiecare dată când îl creăm.

```java
public class NamesList implements Iterable<String> {

    private String[] names;

    public NamesList(String... names) {
        this.names = names;
    }

}
```

După aceea, trebuie să implementăm metoda `iterator()` -  care este moștenită de la interfața Iterabilă.


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

Metofa `iterator()` - returnează `new Iterator`, și trebuie să creăm o **inner class** care implementează `Iterator<String>` și îl pasează metodei iterator().

Deci, să creăm o clasă **NamesIterator** care implementează `Iterator<String>`. 

In această clasă, vom avea un câmp `int counter;`.

In constructor, setăm valoarea inițială a câmpului `counter` la 0.

Apoi, implementăm metoda `hasNext()` - care este obligatorie atunci când implementăm interfața Iterator.

Metoda booleană `hasNext()` - returnează `true` de fiecare dată când numele începe cu `A`.

Următoarea metodă care este obligatoriu de implementat este metoda `next()`.

Această metodă returnează numele **current** din array-ul nostru `names`.

Ultimul lucru pe care trebuie să-l facem este să returnăm `new NamesIterator()` in metoda `iterator()`.

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
# Problemă cu Soluție: Library
[code-task title="Library" timeLimit=5000 taskId="oop-basics-java-iterators-and-comparators-lab-Library" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
## Descriere
Creați o clasă **Library** din diagrama UML care urmează :

[image assetsSrc="java-oop-basics-uml-book-iterable.png" /]

| "\<\<**Iterable**\<**Book**\>\>\>" |
| --- |
| **Library** |
|- books: Book\[\]|
|+ iterator(): Iterator\<Book\>|

Creați o clasă imbricată **LibIterator** din diagrama UML de mai jos:

[image assetsSrc="java-oop-basics-uml-book-iterable2.png" /]


| "\<\<**Iterator**\<**Book**\>\>" |
| --- |
| **LibIterator** |
|- counter: int |
|+ hasNext(): boolean |
|+ next(): Book |

## Hint
Folosiți clasa **Book** class din problema anterioară. 


## Exemplu
Folosiți codul de mai jos pentru a vă testa clasa **Library**.

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

