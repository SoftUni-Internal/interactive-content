# Declaring and Invoking Methods
[slide]
# Video

[vimeo-video startTimeInSeconds="2054" endTimeInSeconds="2555"]
[stream language="EN" videoId="421775938" default /]
[stream language="RO" videoId="429688382" /]
[/video-vimeo]

[/slide]
[slide]
## Create a Method
A method must be declared within a class.

It is defined with the name of the method, followed by parentheses `()`.

Java provides some pre-defined methods, such as ``System.out.println()``, but you can also create your own methods to perform certain actions:

```Java
public class MyClass {
  public static void printHello() {
    System.out.println("Hello World!");

  }
}
```

* `public` defines access type of the method i.e. from where it can be accessed in your application.

* `void` means that this method does not have a return value.

* `printHello()` is the name of the method.

* note that method body always surrounded by `{ }`.

### Call a Method (Invoking)

To call a method in Java, write the method's name followed by two parentheses `()` and a semicolon;

In the following example, `printHello()` is used to print a text (the action), when it is called:

```java live no-template
public class MyClass {
  public static void main(String[] args) {
    printHello();
  }

  public static void printHello() {
    System.out.println("Hello World!");
  }
}
```

A method can also be called multiple times:

```java live no-template
public class MyClass {
  public static void main(String[] args) {
    printHello();
    printHello();
    printHello();
  }

  public static void printHello() {
    System.out.println("Hello World!");
  }
}
```
[/slide]