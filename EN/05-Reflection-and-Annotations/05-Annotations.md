# Annotations

[slide hideTitle]

# What are Annotations

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-29-30-annotation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Annotations are a type of **metadata** that you can insert into your Java code.

They are Java types, preceded by an "**@**" symbol and are used to **describe** parts of your code.

Annotations can be applied to **classes**, **fields**, **methods**, etc.

[/slide]

[slide hideTitle]

# Annotation Usage

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-31-annotation-usage-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us see simple example of annotations:

``` java
@Deprecated // That shows our method is Deprecated
public void deprecatedMethod() {
  System.out.println("Deprecated!");
}
```

These annotations are used to generate or suppress warnings and errors.

It is a good practice to apply them since it can prevent future programmer errors.

[/slide]


[slide hideTitle]

# Built-in Annotations

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-32-34-built-in-annotations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is an example of some **built-in** annotations:

- `@Override` - indicates that a method overrides or replaces the behavior of an inherited method

- `@Deprecated` - shows us an API that is not intended for use anymore

- `@SupressWarning` - used to turn off compiler warnings

Let us see how we can use it:

```java
@SuppressWarnings(value = "unchecked")
public <T> void warning(int size) {
  T[] unchecked = (T[]) new Object[size]; // Where (T[]) generates compiler warning
}
```
[/slide]

[slide hideTitle]

# Creating Annotations

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-35-creating-annotations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can create Custom Annotations using the **@interface** keyword.

Here are some other things to remember while creating custom annotations:

- Methods can have default values

- Return types are restricted to **primitives**, **String**, **Class**, **enums**, **annotations**, and **arrays** of the preceding types

- Our method declarations must not throw any clause or have any parameters

This is an **example** of a custom annotation:

``` java
@interface MyAnnotation {

   String name();
   int age();
   String[] newNames();
}
``` 

We can notice here that every element is defined similarly to a method definition in an interface.

To use our custom created annotation we can use code like this:

``` java
@MyAnnotation(
    name="George",
    age=25,
    newNames={"Peter", "Anderson"}
)

public class MyClass {
    // ...
}
```

[/slide]

[slide hideTitle]

# Meta Annotations 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-37-38-meta-annotations-target-and-retention-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Another thing we can do is to specify where the annotation is applicable.

## Target

We can achieve this using `@Target`:

``` java
@Target(ElementType.FIELD) // it is used to annotate fields only
public @interface FieldAnnotation {
}
```

The available `ElementType`s are:

- **CONSTRUCTOR**
- **FIELD**
- **LOCAL_VARIABLE**
- **METHOD**
- **PACKAGE**
- **PARAMETER**
- **TYPE**

## Retention

We use `@Retention` to specify if our custom annotation should be available during runtime.

``` java
@Retention(RetentionPolicy.RUNTIME) // we can get info at runtime
public @interface RuntimeAnnotation {
  // ... logic here
}
```

Other **retention policies**:

- **SOURCE**
- **CLASS**
- **RUNTIME**


[/slide]


[slide hideTitle]

# Obtaining Annotations

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-41-annotations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use the `getAnnotations()` method to obtain all class annotations.

```java
Annotation[] annotations = aClass.getAnnotations();
```

If we need to obtain parameter annotations, we can use the following syntax:

```java
Annotation[][] parameterAnnotations = method.getParameterAnnotations();
```

This method returns a two-dimensional Annotation array, representing the annotations of the method object.

We can also obtain the fields and methods of the annotations:

``` java
Annotation[] fieldAnnotations = field.getDeclaredAnnotations();
```

``` java
Annotation[] methodAnnotation = method.getDeclaredAnnotations();
```


[/slide]

[slide hideTitle]
# Problem with Solution: Create Annotation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-39-problem-and-solution-create-annotation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Create Annotation" timeLimit=5000 taskId="Java-OOP-Advanced-Reflection-Create-Annotation" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create annotation **Subject** with a **String**\[\] element called **categories**, that: 
- Should be available at runtime
- Can be placed only on types

# Example

```java
@Subject(categories {"Test", "Annotations"})
public class Testclass {
}
```

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.annotation.Annotation;

public class Z01_Zero \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> subject = getClass("Subject");

        Assert.assertTrue("Subject is not of Annotation.class", Annotation.class.isAssignableFrom(subject));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.Annotation;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

public class T01_Retention \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> coffee = getClass("Subject");

        Assert.assertTrue("Subject is not of Annotation.class", Annotation.class.isAssignableFrom(coffee));

        Retention annotation = coffee.getAnnotation(Retention.class);
        Assert.assertTrue("Subject has no Retention annotation", annotation != null);

        RetentionPolicy value = annotation.value();
        Assert.assertTrue("Subject Retention policy is not RUNTIME", value.equals(RetentionPolicy.RUNTIME));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.\*;

public class T02_Target \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> subject = getClass("Subject");

        Assert.assertTrue("Subject is not of Annotation.class", Annotation.class.isAssignableFrom(subject));

        Target annotation = subject.getAnnotation(Target.class);
        Assert.assertTrue("Subject has no Retention annotation", annotation != null);

        ElementType\[\] value = annotation.value();
        Assert.assertTrue("Subject Retention policy is not RUNTIME", value\[0\].equals(ElementType.TYPE));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class T03_Values \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Class\<?\> subject = getClass("Subject");

        Assert.assertTrue("Subject is not of Annotation.class", Annotation.class.isAssignableFrom(subject));

        Method categories = subject.getMethod("categories");
        //categories.invoke(null);
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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
# Problem with Solution: Coding Tracker

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-44-problem-and-solution-coding-tracker-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Coding Tracker" timeLimit=5000 taskId="Java-OOP-Advanced-Reflection-Coding-Tracker" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create annotation **Author** with a **String** element called **name**, that:
- Should be available at runtime
- Can be placed only on methods

Create a class **Tracker** with a method:
- **public static void printMethodsByAuthor()**


# Example

```java
@Author (name = "George")
public static void main(String[] args) {
    Tracker.print Methods ByAuthor(Tracker.class);
}

@Author (name "Peter")
public static void printMethodsByAuthor(Class<?> cl) {...}
```

## Output

```java
George: main()
Peter: printMethodsByAuthor()
```

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.annotation.Annotation;

public class Z01_Zero \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> author = getClass("Author");

        Assert.assertTrue("Author is not of Annotation.class", Annotation.class.isAssignableFrom(author));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.Annotation;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

public class T01_Retention \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> author = getClass("Author");

        Assert.assertTrue("Author is not of Annotation.class", Annotation.class.isAssignableFrom(author));

        Retention annotation = author.getAnnotation(Retention.class);
        Assert.assertTrue("Author has no Retention annotation", annotation != null);

        RetentionPolicy value = annotation.value();
        Assert.assertTrue("Author Retention policy is not RUNTIME", value.equals(RetentionPolicy.RUNTIME));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.Annotation;
import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

public class T02_Target \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException \{
        Class\<?\> author = getClass("Author");

        Assert.assertTrue("Author is not of Annotation.class", Annotation.class.isAssignableFrom(author));

        Target annotation = author.getAnnotation(Target.class);
        Assert.assertTrue("Author has no Target annotation", annotation != null);

        ElementType\[\] value = annotation.value();
        Assert.assertTrue("Author Target is not METHOD", value\[0\].equals(ElementType.METHOD));
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class T03_Values \{

    public static final String ERROR = "Class '%s' not present";

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Class\<?\> author = getClass("Author");

        Assert.assertTrue("Author is not of Annotation.class", Annotation.class.isAssignableFrom(author));

        Method name = author.getMethod("name");
    \}

    public Class\<?\> getClass(String name) \{
        Assert.assertTrue(String.format(ERROR, name), Classes.allClasses.containsKey(name));
        return Classes.allClasses.get(name);
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


