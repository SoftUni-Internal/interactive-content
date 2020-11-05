# Variable Arguments(Varargs)

[slide]

# Variable Arguments(Varargs)

Let’s suppose you are creating a Java method. 

However, you are not sure how many arguments your method is going to accept. 

To overcome this problem, Java 5 introduced varargs.

Varargs stands for variable arguments.

The varags allows the method to accept zero or multiple arguments.

Let's see the following example:

```java

static void display(String... values) {  
  System.out.println("display method invoked");  
} 

static void main() {
  display();
  display("first");
  display("multiple", "Strings"); 
}

```

In the example above, the method named `display()` accepts varargs (of type String) and from the main method, we are invoking this method multiple times by passing a different number of arguments each time we invoke it.






[/slide]



[slide]

# Variable Arguments Rules

Varargs are straightforward to use. 

But there're a few rules we have to keep in mind:

- There can be only one **varargs** argument in the method

```java
//Compile time error
void method(String... a, int... b){

} 
// Correct 
void method(String a, int... b){

} 
```

- The **varargs** argument must be the last parameter

```java
//Compile time error
void method(int... a, String b){

}  
// Correct
void method(String a, int... b){
  
}    
```


[/slide]

[slide]
# Problem: Book
[code-task title="Problem: Book" taskId="cdedc934-0f7f-4660-8528-3d810204be23" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a class Book from UML diagram below:

| Book |
| ---- |
|- title: String |
|- year: int |
|- authors: `List<String>` | 
|- setTitle(String) |
|- setYear(String) |
|- setAuthors(String…) |
|+ getTitle(): String |
|+ getYear(): int |
|+ getAuthors(): List<String> |



You can use only one constructor. 

There can be **no authors**, **one author** or **many authors**. 

## Examples

```java
public static void main(String[] args) {
Book bookOne = new Book("Animal Farm", 2003, "George Orwell");
Book bookThree = new Book("The Documents in the Case", 2002);
Book bookTwo = new Book("The Documents in the Case", 1930, "Dorothy Sayers", "Robert Eustace");

List<Book> books = new ArrayList<>();
books.add(bookOne);
books.add(bookTwo);
books.add(bookThree); 
}

```

[/task-description]
[code-io /]
[tests]
[test open]
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
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Book 

The **Book** class should look like this:

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

[slide]

# Nested Classes

In Java, it is also possible to **nest classes** (a class within a class).

The purpose of nested classes is to **group classes that belong together**, which makes your code more maintainable.


- Example of Nested Class:
```java live no-template
class OuterClass {
    int x = 10;

    class InnerClass {
        int y = 5;
    }

    public static void main(String[] args) {
        OuterClass myOuter = new OuterClass();
        OuterClass.InnerClass myInner = myOuter.new InnerClass();
        System.out.println(myInner.y + myOuter.x);
    }
}
``` 


[/slide]