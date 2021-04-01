# Comparators

[slide hideTitle]

# Comparator

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-20-21-Comparator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Comparator interface provides a **custom comparison logic for types that we have no control over**.

It is an **external class** that exposes a `compare()` method **accepting two objects**. 

Inside of the method body, we have only the implementation of the comparison logic.  

This approach allows us to implement **multiple sorting sequences**. 

Keep in mind that the Comparator is an external class, which means that it **will not affect the original class**.

[/slide]

[slide hideTitle]

# Comparable

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-22-23-Comparable-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Comparable allows us to specify how objects we are implementing **compare to objects of the same type**. 

A class implementing this interface, will inherit the `compareTo()` method.

Unlike **Comparator**, the logic of the Comparable interface will be **inside of the object** we are trying to compare.

It will **affect the original class**.

Taking this approach will limit us to using a single sorting sequence. 

Let us see the following example: 

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

The example above shows a class **Student** that implements **Comparable of Students**.

The only two fields we will need for the example are **name** and **age**.

Let us say that we want the Student objects to be **compared by age only**.

Therefore, we will have **three cases**.

The **first one** would be when **the age is equal**.

Then we would **return 0** which would mean that **the objects are the same**.

In case the **age of the current student is bigger** than the age of the one which we get as an argument, we will **return 1**.

By doing this, we indicate that in the sorting logic, **the current student is "bigger"**.

That leaves us with the last case, where we **return -1** because **the current student object is "smaller" than the one from the arguments**.

By implementing the Comparable interface we placed a **Student generic parameter**.

That allows us to later implement the `compareTo()` method by **accepting a Student as an argument**. 

**Avoiding the generics** will force us to implement the method, **by accepting an Object**. 

**That would make the implementation a bit difficult to read** as we **would not be able** to directly access the members of the **Student class**.


[/slide]

[slide hideTitle]

# Comparator - Example

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-24-Comparator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In the following example, we will compare **two Student objects** by their age variable.

Our AgeComparator class implements **Comparator** of type **Student**.

The `compare()` method takes two Student "(**Student st1, Student st2**)" objects as arguments.

The implementation is simple, we return:

- A **positive** number if the first student is "bigger"

- **Negative** in the other case

- **Zero** when they are the same

By using the Comparator, **we could create as many comparators as we need** and apply them in accordance to our use case.

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
# Problem with Solution: Comparable Book

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-26-Problem-and-Solution-Comprabale-Book-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Comparable Book" timeLimit=5000 taskId="oop-basics-java-iterators-and-comparators-lab-Comparable-Book" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
Expand Book by implementing "**Comparable**\<**Book**\>".

Books have to be **compared by title**. 

When the title is equal, **compare them by year**.

Expand the **Book** class based on the UML diagram below:


[image assetsSrc="java-oop-basics-uml-book-comparable1.png" /]

| "\<\<**Comparable**\<**Book**\>\>\>" |
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


# Example
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
# Problem with Solution: Book Comparator

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-27-Problem-and-Solution-Book-Comparator-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Book Comparator" timeLimit=5000 taskId="oop-basics-java-iterators-and-comparators-lab-Book-Comparator" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create a class **BookComparator** from the UML diagram below: 

[image assetsSrc="java-oop-basics-uml-book-comparable1.png" /]


| "\<\<**Comparator**\<**Book**\>\>\>" |
| --- |
| **BookComparator** |
|+ compare(Book, Book): int |


- **BookComparator** has to **compare** two books by:
    - Book **title**
    - **Year** of publishing a book


## Example

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

