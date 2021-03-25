# Comparatori
[slide hideTitle]

# Comparator

Interfața Comparator ne ajută să aducem o **custom comparison logic for types that we have no control over**.

Este pur și simplu o  **external class** care expune o metodă `compare()` care **accepts two objects**. 

In interiorul corpului metodei, avem implementarea logicii comparației.

Această abordare ne permite să implementăm **multiple sorting sequences**. 

Rețineți că un Comparator este o clasă externă ceea ce înseamnă că **will not affect the original class**.

[/slide]

[slide hideTitle]

# Comparabil

Comparable ne permite să specificăm cum obiectele pe care le implementăm **compare to objects of the same type**. 

Odată ce am implementat această interfață vom moșteni metoda `compareTo()`.

De aceasta dată, **comparison logic** va fi **inside of the object** pe care vrem să îl comparăm. 

Așadar, vom **affect the original class** făcând asta, ne vom permite să folosim doar o singură secvență de sortare.

Să urmărim un exemplu :

```java 
class Student implements Comparable<Student> { 

  private String name;
  private int age; 

  public int compareTo(Student st) { 

      if (this.age == st.age) {
           return 0; 
      } else if (this.age > st.age) {
           return 1; 
      } else {
           return -1; 
      }
   }
}
```
Exemplul de mai sus este cu clasa **Student** care implementează **Comparable of Students**.

Singurele două câmpuri de care avem nevoie în exemplul nostru sunt **name** și **age**.

Să spunem că vrem ca obiectele Student trebuie să fie **compared by age only**.

Așadar, vom avea **three cases**.

Primul caz **first one** va fi când **the age is equal**.

Atunci, va **return 0** ceea ce înseamnă că **the objects are the same**.

In cazul în care **age of the current student is bigger** decât vârsta celui pe care îl luăm ca argument, atunci vom **return 1**.

Făcând asta, indicăm că în logica de sortare, **the current student is bigger**.

În ultimul caz, **return -1** pentru că **the current student is less than the one from the arguments**.

Prin implementarea interfeței Comparable vom plasa un **Student generic parameter**.

Aceasta ne permite să implementăm metoda `compareTo()` prin **accepting a Student as an argument**. 

**Avoiding the generics** ne va forța să implementăm metoda **by accepting an Object**. 

**That would make the implementation a bit hard-to-read** pentru că **would not be able** să accesăm direct membrii din clasa **Student class**.


[/slide]


[slide hideTitle]

# Comparator - Example

In următorul exemplu, vom compara **two Student objects** în funcție de vârsta lor. 

Comparatorul nostru de Vârstă va implementa **Comparator** de tip **Student**.

Metoda `compare()` ia două obiecte de tip studenți `(Student st1, Student st2)` ca argumente.

Implementarea este simplă, returnează :

- un număr **positive** dacă primul student este mai în vârstă .

- **negative** în celălalt caz **.

- **0 when they are the same**.

Folosind Comparator, **we could create as many comparators as we need** și să-i folosim în acord cu situația. 

```java
public class AgeComparator implements Comparator<Student> {

    @Override
    public int compare(Student st1, Student st2) {
        return st1.age - st2.age;
    }
}
```


[/slide]




[slide hideTitle]
# Problemă cu Soluție: Comparable Book
[code-task title="Comparable Book" timeLimit=5000 taskId="oop-basics-java-iterators-and-comparators-lab-Comparable-Book" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
## Descriere
Extindem Book prin implementarea `Comparable<Book>`.

Book trebuie să fie **compared by title**. 

Cânc titlul este egal, **compare them by year**.

Extindem **Book** din diagrama UML de mai jos:

[image assetsSrc="java-oop-basics-uml-book-comparable1.png" /]

| `<<Comparable<Book>>>` |
| --- |
| **Book** |
|- title: String |
|- year: int |
|- authors: List\<String\> |
|- setTitle(String) |
|- setYear(String) |
|- setAuthors(String…) |
|+ getTitle(): String |
|+ getYear(): int |
|+ getAuthors(): List\<String\> |
|+ compareTo(Book): int |


## Examples

Folosiți codul de mai jos pentru a testa clasa **Book** .

```java
public static void main(String[] args) {
    Book bookOne = new Book("Animal Farm", 2003, "George Orwell");
    Book bookThree = new Book("The Documents in the Case", 2002);
    Book bookTwo = new Book("The Documents in the Case", 1930, 
    "Dorothy Sayers", "Robert Eustace");

    if (bookOne.compareTo(bookTwo) > 0) {
	    System.out.println(String.format("%s is before %s", bookOne, bookTwo));
    } else if (bookOne.compareTo(bookTwo) < 0) {
	    System.out.println(String.format("%s is before %s", bookTwo, bookOne));
    } else {
	    System.out.println("Book are equal");
    
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

public class TestBookFieldsNames \{
    private static final String CLASS_NAME = "Book";
    private static final List\<String\> FIELD_NAMES = Arrays.asList("title", "year", "authors");

    @Test
    public void bookFieldsNames() throws NoSuchFieldException \{
        Assert.assertTrue("Class 'Book' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        Field\[\] fields = book.getFields();
        for (Field field : fields) \{
            FIELD_NAMES.contains(field.getName());
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
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class TestBookFieldsAccessModifier \{
    private static final String CLASS_NAME = "Book";

    @Test
    public void testFieldAccessModifiers() throws NoSuchFieldException \{
        Assert.assertTrue("Class 'Book' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        Field\[\] fields = book.getFields();
        for (Field field : fields) \{
            Modifier.isPrivate(field.getModifiers());
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
import java.lang.reflect.*;
import java.util.Arrays;
import java.util.List;

public class TestBookConstructor \{
    private static final String CLASS_NAME = "Book";

    @Test
    public void bookSettersNames() throws NoSuchFieldException, NoSuchMethodException \{
        Assert.assertTrue("Class 'Book' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        List\<Constructor\> constructors = Arrays.asList(book.getConstructors());
        Assert.assertTrue(constructors.size() == 1);
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

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Arrays;
import java.util.List;

public class TestBookSettersNames \{
    private static final String CLASS_NAME = "Book";
    private static final List\<String\> METHODS_NAMES = Arrays.asList("setTitle", "setYear", "setAuthors");

    @Test
    public void bookSettersNames() throws NoSuchMethodException \{
        Assert.assertTrue("Class 'Book' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        List\<Method\> methods = Arrays.asList(book.getDeclaredMethods());

        Method setTitle = book.getDeclaredMethod("setTitle", String.class);
        Assert.assertNotNull(setTitle);

        Method setYear = book.getDeclaredMethod("setYear", int.class);
        Assert.assertNotNull(setYear);

        //Method setAuthors = book.getDeclaredMethod("setAuthors");
        //setAuthors.setAccessible(true);
        ////Assert.assertTrue(setAuthors.isVarArgs());
        //Assert.assertNotNull(setAuthors.getParameterTypes().equals(String\[\].class));
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

import java.lang.reflect.*;
import java.util.Arrays;
import java.util.List;

public class TestBookComparable \{
    private static final String CLASS_NAME = "Book";

    @Test
    public void bookSettersNames() throws NoSuchFieldException, NoSuchMethodException \{
        Assert.assertTrue("Class 'Book' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        List\<Class\> interfaces = Arrays.asList(book.getInterfaces());
        Assert.assertTrue(interfaces.contains(Comparable.class));
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
# Problemă cu Soluție: Book Comparator
[code-task title="Book Comparator" timeLimit=5000 taskId="oop-basics-java-iterators-and-comparators-lab-Book-Comparator" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]]
## Descriere
Creați o clasă BookComparator din diagrama UML diagram de mai jos: 

| `<<Comparator<Book>>>` |
| --- |
| **BookComparator** |
|+ compare(Book, Book): int |


- **BookComparator** have to **compare** two books by:
	- Book **title**
	- **Year** of publishing a book


## Exemple

Testați  **BookComparator** folosind codul de mai jos:


```java
public static void main(String[] args) {
    Book bookOne = new Book("Animal Farm", 2003, "George Orwell");
    Book bookThree = new Book("The Documents in the Case", 2002);
    Book bookTwo = new Book("The Documents in the Case", 1930, 
         "Dorothy Sayers", "Robert Eustace");

    List<Book> books = new ArrayList<>();
    books.add(bookOne);
    books.add(bookTwo);
    books.add(bookThree);

    books.sort(new BookComparator());

    for (Book book : books) {
	    System.out.println(book.getTitle() + book.getYear());
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
import java.util.*;
import java.util.stream.Stream;

public class TestBookComparatorInterfaces \{
    private static final String CLASS_NAME = "BookComparator";

    @Test
    public void bookFieldsNames() throws NoSuchFieldException \{
        Assert.assertTrue("Class 'BookComparator' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        List\<Class\> interfaces = Arrays.asList(book.getInterfaces());
        Assert.assertTrue(interfaces.contains(Comparator.class));
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

public class TestBookComparatorMethodParameters \{
    private static final String CLASS_NAME = "BookComparator";
    private static final String PARAMETER_TYPE = "Book";

    @Test
    public void bookFieldsNames() throws NoSuchFieldException \{
        Assert.assertTrue("Class 'BookComparator' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        Method\[\] methods = book.getMethods();

        Class\[\] parameters = methods\[0\].getParameterTypes();
        Assert.assertTrue("Parameters must be two", parameters.length == 2);
        for (Class parameter : parameters) \{
            Assert.assertTrue("Parameters are diff type", parameter.getTypeName().equals(PARAMETER_TYPE));
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

import java.lang.reflect.Method;

public class TestBookComparatorReturnType \{
    private static final String CLASS_NAME = "BookComparator";
    private static final String PARAMETER_TYPE = "Book";

    @Test
    public void bookFieldsNames() throws NoSuchFieldException \{
        Assert.assertTrue("Class 'BookComparator' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        Method\[\] methods = book.getMethods();
        Assert.assertTrue(methods\[0\].getReturnType().getName().equals("int"));
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

