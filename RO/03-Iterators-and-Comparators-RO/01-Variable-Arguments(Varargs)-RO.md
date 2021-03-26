# Variable Arguments

[slide hideTitle]

# Argumentele Variabile (Varargs)

Să presupunem că trebuie să creați o metodă Java.

Nu știți, însă, sigur, **how many arguments** va accepta metoda voastră. 

Pentru a rezolva această problemă, **Java 5 introduced varargs**.

**Varargs** înseamnă **variable arguments**.

Acestea permit metodei să accepte **zero** sau **multiple** argumente.

Să vedem exemplul următor :

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

In examplul de mai sus, metoda numită `display()` acceptă varargs (de tip String).

Aceste "**values**" variabile sunt declarate implicit ca array-uri de tip String.

Cu toate acestea, in interiorul metodei, "**values**" variabile sunt accesate folosindu-se sintaxa array-ului. 

După cum puteți vedea, invocăm aceasta metodă de mai multe ori,trecând prin mai multe **different number of arguments** de fiecare dată când o invocăm.
[/slide]



[slide hideTitle]

# Regulile Argumentelor Variabile 

Varargs sunt bune de folosit. 

Dar există câteva reguli pe care trebuie să le rețineți :

- Poate exista doar un singur argument **varargs** în cadrul metodei 

```java
//Compile time error
void method(String... a, int... b){

} 
// Correct 
void method(String a, int... b){

} 
```

- Argumentele **varargs** trebuie să fie ultimul parametru

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
# Problemă cu Soluție: Book

[code-task title="Book" timeLimit=5000 taskId="oop-basics-java-iterators-and-comparators-lab-Book" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
## Descriere
Creați o clasă "**Book**" din diagrama UML de mai jos: 

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



Puteți folosi doar un singur constructor. 

Aici pot exista **no authors**, **one author** sau **many authors**. 

## Exemple

Folosiți codul de mai jos pentru a testa clasa **Book** .
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

