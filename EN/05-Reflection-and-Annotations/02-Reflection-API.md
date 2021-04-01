# Reflection API

[slide hideTitle]

# The Class Object

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-8-9-10-the-class-object-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us continue with some more detailed information about Classes in Java Reflection.

Java provides us a static class with the name `Class` in `java.lang.package`. 

Instances that are inside the `Class are responsible for interfaces and classes in a running Java application.

We can create an object of `Class` by using one of the following options:

- `.class` extension

**For example:**

``` java
Class test = Dog.class;

// We can use the test object to achieve reflection as this object
// will have all the needed information about the Dog class.
```

- `forName()` method

The `forName()` method takes the name of the class and returns the Class object.

**For example:**

``` java
Class test = Class.forName("Dog");
```

[/slide]

[slide hideTitle]

# Class Name

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-10-class-name-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Now, let us obtain the `Class` name:


``` java
Class myDogClass = Dog.class;
String nameClass = myDogClass.getName();
System.out.println(nameClass);
```

**Output**:

```
com.company.Dog
```

If we want to obtain the class name without the package name, we can use the `getSimpleName()` method:

``` java
Class myDogClass = Dog.class;
String nameClass = myDogClass.getSimpleName();
System.out.println(nameClass);
```

The **output** will be:

```
Dog
```

[/slide]

[slide hideTitle]

# Base Class and Interfaces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-11-base-class-and-interfaces-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can also obtain our parent class like this:

```java
public class Dog extends Mammal {
    // ...
}
```


```java
public class Main {
    public static void main(String[] args) throws ClassNotFoundException {
        Class myDogClass = Dog.class;
        
        // Returns the full name of the parent class
        Class nameClass = myDogClass.getSuperclass();   
        
        System.out.println(nameClass);
    }
}
```

And the **output** will be:

```
class com.company.Mammal
```


Now, let us obtain the methods and interfaces in our classes.

Interfaces are also represented by `Class` objects in Java Reflection:

``` java
Class[] interfaces = aClass.getInterfaces();
```


[/slide]

[slide hideTitle]
# Problem with Solution: Reflection

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-12-problem-and-solution-reflection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Reflection" taskId="Java-OOP-Advanced-Reflection-Reflection" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
[code-upload allowedMemory="30" /] 
[task-description]
# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/06.Java-OOP-Advanced-Reflection-and-Annotations-Lab.zip) **for this task.**

Import "**Reflection.java**" to the "**src**" folder in your project. 

Try to use **reflection** and print some information about this class. 

Print everything on new line:
- **This class type**
- **Super class type**
- **All interfaces** that are implemented by this class
- **Instantiate an object** using reflection and print it too

**Do not change anything in the Reflection class!**

[/task-description]
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

