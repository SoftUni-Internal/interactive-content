[slide hideTitle]

# Reflection API

Lets continue with some more detailed information about Classes in Java Reflection.

Java provides us a static class with the name `Class` in `java.lang.package`. 

Instances that are inside the `Class` acts for interfaces and classes in a running Java application.

We can create object of `Class` by using one of the following options:

- `.class` extension

For example:

``` java
Class test = Dog.class;

// We can use the test object to achieve reflection as this object will have all the needed information about the class Dog.
```

- `forName()` method

`forName()` method will take the name of the class and returns the Class object.

For example:

``` java
Class test = Class.forName("Dog");
```

[/slide]

[slide hideTitle]

# Class Name

Now, lets obtain the `Class` name:


``` java
Class myDogClass = Dog.class;
String nameClass = myDogClass.getName();
System.out.println(nameClass);
```

```
Output: com.company.Dog
```

If we want to obtain the class name without the package name, we can use `getSimpleName()` method:

``` java
Class myDogClass = Dog.class;
String nameClass = myDogClass.getSimpleName();
System.out.println(nameClass);
```

```
Output: Dog
```

[/slide]

[slide hideTitle]

# Base Class and Interfaces

We can also obtain our parent class like this:

```java
public class Dog extends Mammal {
}
```


```java
public class Main {
    public static void main(String[] args) throws ClassNotFoundException {
        Class myDogClass = Dog.class;
        Class nameClass = myDogClass.getSuperclass();   //Returns the full name of the parent class
        System.out.println(nameClass);
```

And the **output** will be:

```
class com.company.Mammal
```


Now, lets obtain our methods and interfaces in our classes.

Interfaces are also represented by `Class` objects in Java Reflection

``` java
Class[] interfaces = aClass.getInterfaces();
```


[/slide]

[slide hideTitle]
# Problem with Solution: Reflection
[code-task title="Reflection" taskId="Java-OOP-Advanced-Reflection-Reflection" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/06.Java-OOP-Advanced-Reflection-and-Annotations-Lab.zip) **for this task.**

Import "**Reflection.java**" to your "**src**" folder in your project. 

Try to use **reflection** and print some information about this class. 

Print everything on new line:
- **This class type**
- **Super class type**
- **All interfaces** that are implemented by this class
- **Instantiate object** using reflection and print it too

**Don’t change anything in "Reflection class"!**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Blank Test
[/input]
[output]
class Reflection
class java.lang.Object
interface java.io.Serializable
Name: Java
WebAddress: oracle.com
email: mail@oracle.com
zip: 1407
[/output]
[/test]
[test]
[input]
Blank Test
[/input]
[output]
class Reflection
class java.lang.Object
interface java.io.Serializable
Name: Java
WebAddress: oracle.com
email: mail@oracle.com
zip: 1407
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

