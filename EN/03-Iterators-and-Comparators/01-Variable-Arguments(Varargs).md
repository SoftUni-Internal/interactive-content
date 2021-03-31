# Variable Arguments

[slide hideTitle]

# Variable Arguments (Varargs)

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-3-4-Variable-Arguments-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us suppose you are creating a Java method. 

However, you are not sure **how many arguments** your method is going to accept. 

To overcome this problem, **Java 5 introduced varargs**.

**Varargs** stands for **variable arguments**.

The varargs allow the method to accept **zero** or **multiple** arguments.

Let us see the following example:

```java live no-template
public class Main {
    static void display(String... values) {
        int numberOfArgs = values.length;
        System.out.printf("Number of arguments is: %d\n", numberOfArgs);
    }

    public static void main(String[] args) {
        display();
        display("oneArgument");
        display("multiple", "Strings");
    }
}
```

In the example above, the method named `display()` accepts varargs of type String.

The "**values**" variable is implicitly declared as an array of type String.

Therefore, inside the method, the "**values**" variable is accessed using the array syntax.

As you can see, we are invoking this method multiple times by passing a **different number of arguments** each time we invoke it.

[/slide]



[slide hideTitle]

# Variable Arguments Rules

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-5-Vaiable-Arguments-Rules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Varargs are straightforward to use. 

But there are a few rules we have to keep in mind:

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

[slide hideTitle]
# Problem with Solution: Book

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-6-Problem-and-Solution-book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Book" timeLimit=5000 taskId="oop-basics-java-iterators-and-comparators-lab-Book" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create a "**Book**" class based on the UML diagram:

[image assetsSrc="java-oop-basics-uml-book.png" /]


| Book |
| ---- |
|- title: String |
|- year: int |
|- authors: List\<String\> | 
|- setTitle(String) |
|- setYear(String) |
|- setAuthors(String…) |
|+ getTitle(): String |
|+ getYear(): int |
|+ getAuthors(): List\<String\> |


You can use only **one constructor**. 

There can be **no authors**, **one author** or **many authors**. 

# Example

Use the code below to test your **Book** class.

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
}

```

[/task-description]
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
    private static final List<String> FIELD_NAMES = Arrays.asList("title", "year", "authors");

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
        List<Constructor> constructors = Arrays.asList(book.getConstructors());
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
    private static final List<String> METHODS_NAMES = Arrays.asList("setTitle", "setYear", "setAuthors");

    @Test
    public void bookSettersNames() throws NoSuchMethodException \{
        Assert.assertTrue("Class 'Book' not found", Classes.allClasses.containsKey(CLASS_NAME));
        Class book = Classes.allClasses.get(CLASS_NAME);
        List<Method> methods = Arrays.asList(book.getDeclaredMethods());

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
