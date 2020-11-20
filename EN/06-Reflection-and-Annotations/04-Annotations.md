[slide]

# Annotations
Now, lets find out what is Java Annotation.

Annotations are kind of **metadata** that you can insert in your Java code.

They are Java types that are preceded by an "@" symbol and are used to **describes** parts of your code.

Annotations can be applied to **Classes**, **Fields**, **Methods**, etc.

Lets see simple exaple of annotations:

``` java
@Deprecated // That shows our method is Deprecated
public void deprecatedMethod() {
  System.out.println("Deprecated!");
}
```

These annotation are used to generate or suppress warnings and errors. It is good practice to apply them since it can prevent future programmer errors.

Here is example of some **Built-In** annotations:

- `@Override` annotation indicates that a method overrides or replaces the behavior of an inherited method.

- `@Deprecated` annotation for example shows us an API that is not intended for use anymore.

- `@SupressWarning` is used to turn off compiler warnings. 

Lets see how we can use it:

```java
@SuppressWarnings(value = "unchecked")
public <T> void warning(int size) {
  T[] unchecked = (T[]) new Object[size]; // Where (T[]) generates compiler warning
}
```

We can create Custom Annotations using @interface keyword.

Here is other things to remember while creating custom annotations:

- Methods can have default values

- Return types are restricted to **primitives**, **String**, **Class**, **enums**, **annotations**, and **arrays** of the preceding types.

- Our method declarations must not throws any clause or have any parameters.

Here is custom annotation Java example:

``` java
@interface MyAnnotation {

   String   name();
   int      age();
   String[] newNames();
}
``` 

We can notice here that every element is defined similarly to a method definition in an interfaces.

To use our custom created annotation we can use code like this:

``` java
@MyAnnotation(
    name="George",
    age=25,
    newNames={"Peter", "Anderson"}
)
public class MyClass {

}
```

One more thing we can do is to specify where the annotation is applicable.

We can achieve this using `@Target`

``` java
@Target(ElementType.FIELD) // it is used to annotate fields only
public @interface FieldAnnotation {
}
```

Available Element Types are:

- CONSTRUCTOR
- FIELD
- LOCAL_VARIABLE
- METHOD
- PACKAGE
- PARAMETER
- TYPE

We use `@Retention` to specify if our custom annotation should be available during runtime.

``` java
@Retention(RetentionPolicy.RUNTIME) // we can get info at runtime
public @interface RuntimeAnnotation {
  // ... logic here
}
```

Other retention policies:

- SOURCE
- CLASS
- RUNTIME


[/slide]


[slide]

# Obtaining Annotations

Lets see, how can obtain class annotations:

We can use `getAnnotations()` method to obtain all class annotations.

```java
Annotation[] annotations = aClass.getAnnotations();
```

If we need to obtain parameter annotations we can use following syntax:

```java
Annotation[][] parameterAnnotations = method.getParameterAnnotations();
```

Its important to know that this method returns a two-dimensional Annotation array, representing the annotations of the method object.

We can also obtain the fields and methods of the annotations:

``` java
Annotation[] fieldAnots = field.getDeclaredAnnotations();
```

``` java
Annotation[] methodAnot = method.getDeclaredAnnotations();
```


[/slide]

[slide hideTitle]
# Problem: Create Annotation
[code-task title="Problem: Create Annotation" taskId="b8c27c60-4a50-4b09-9b9e-cfea3b81d211" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create annotation **Subject** with a **String[]** element called **categories**, that: 
- Should be available at runtime
- Can be placed only on types

# Example
```java
@Subject(categories {"Test", "Annotations"})
public class Testclass {
}
```
[/slide]

[slide]

# Solution: Create Annotation

[/slide]

[slide hideTitle]
# Problem: Coding Tracker
[code-task title="Problem: Coding Tracker" taskId="18d26a01-9dd1-4020-a967-e28a0672ec0c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
[/slide]

[slide]

# Solution: Coding Tracker

[/slide]

