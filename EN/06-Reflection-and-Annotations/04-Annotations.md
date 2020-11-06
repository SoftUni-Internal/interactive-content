[slide]

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

[slide hideTitle]

# Problem: Create Annotation

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

# Problem: Coding Tracker

[/slide]