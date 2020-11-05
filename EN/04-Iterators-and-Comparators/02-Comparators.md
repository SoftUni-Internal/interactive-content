# Comparators

[slide]

# Comparator

The Comparator interface allows us to provide a **custom comparison logic for types that we have no control over**.

It is simply an **external class** that exposes a `compare()` method that **accepts two objects**. 

Inside of the method body we only have the implementation of the comparison logic.  

That approach allows us to implement **multiple sorting sequences**. 

Keeping in mind that the Comparator is an external class means that it **won’t affect the original class**.

In the following example we compare **two Student objects** by student age.

Our AgeComparator class implements **Comparator** of type **Student**.

The `compare()` method takes two Student `(Student st1, Student st2)` objects as arguments.

The implementation is simple, we **return a positive number if the first student is bigger**, 

**negative in the other case**, and **0 when they are the same**.

By using the Comparator, **we could create as many comparators as we need** and used them according to our situation.

```java
public class AgeComparator implements Comparator<Student> {

    @Override
    public int compare(Student st1, Student st2) {
        return st1.age - st2.age;
    }
}
```


[/slide]

[slide]

# Comparable

Comparable allows us to specify how objects that we are implementing **compare to objects of the same type**. 

Once implementing this interface we will inherit the `compareTo()` method.

This time the **comparison logic** will be **inside of the object** we are trying to compare.

Therefore, we **affect the original class** and taking this approach will restrict us to using a single sorting sequence. 

Let’s see the following example: 

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
The example above is with class **Student** that implements **Comparable of Students**.

The only two fields we will need for the example are **name** and **age**.

Let’s say that, we want the Student objects to be **compared by age only**.

Therefore, we will have **three cases**.

The **first one** would be when **the age is equal**.

Then we would **return 0** which would mean that **the objects are the same**.

In case the **age of the current student is bigger** than the age of the one which we get as an argument, we will **return 1**.

By doing this we indicate that in by our sorting logic, **the current student is bigger**.

That leaves us with the last case, where we **return -1** because **the current student is less than the one from the arguments**.

I don't know if you have noticed, but while implementing the Comparable interface we placed a **Student generic parameter**.

That allows us to later implement the compare to method by **accepting a Student as an argument**. 

**Avoiding the generics** will force us to implement the method, **by accepting an Object**. 

**That would make the implementation a bit uglier** because we **won't be able** to directly access the members of the **Student class**.


[/slide]


[slide]
# Problem: Comparable Book
[code-task title="Problem: Comparable Book" taskId="12f0f25d-3f35-4345-82c0-3c89d73cad8f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Expand Book by implementing `Comparable<Book>`.

Book have to be **compared by title**. 

When title is equal, **compare them by year**.

Expand **Book** from UML diagram below:

| `<<Comparable<Book>>>` |
| --- |
| **Book** |
|- title: String |
|- year: int |
|- authors: `List<String>` | 
|- setTitle(String) |
|- setYear(String) |
|- setAuthors(String…) |
|+ getTitle(): String |
|+ getYear(): int |
|+ getAuthors(): `List<String>` |
|+ compareTo(Book): int |


## Examples
Use the code below to test your **Book** class.

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
import java.lang.reflect.\*;
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

import java.lang.reflect.\*;
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

[slide]

# Solution: Comapare Book

The expanded **Book** class should look like this:

```java
public class Book implements Comparable<Book>{
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

    @Override
    public int compareTo(Book o) {
        int titleCompare = this.getTitle().compareTo(o.getTitle());
        return  titleCompare != 0 ? titleCompare : o.getYear() - this.getYear();
    }
}

```
[/slide]


[slide]
# Problem: Book Comparator
[code-task title="Problem: Book Comparator" taskId="55fbef83-deb2-4cd1-a6d9-e6a16dc9a987" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a class BookComparator from UML diagram below: 

| `<<Comparator<Book>>>` |
| --- |
| **BookComparator** |
|+ compare(Book, Book): int |


- **BookComparator** have to **compare** two books by:
	- Book **title**
	- **Year** of publishing a book


## Examples

Test your **BookComparator** by using the code below:


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
import java.util.\*;
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

[slide]

# Solution: Book Comparator

To implement your **BookComparator** class use the Book class from the first problem:

```java
public class BookComparator implements Comparator<Book> {
    @Override
    public int compare(Book b1, Book b2) {
        int titleCompare = b1.getTitle().compareTo(b2.getTitle());
        return  titleCompare != 0 ? titleCompare : b2.getYear() - b1.getYear();
    }
}

```

[/slide]


