# Naming and Best Practices

[slide]
# Video
[vimeo-video startTimeInSeconds="1406" endTimeInSeconds="1957"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]
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

```Java live
public class MyClass {
 public static void printHello() {
    System.out.println("Hello World!");
  }

  public static void main(String[] args) {
    printHello();
  }
}
```

A method can also be called multiple times:

```Java live
public class MyClass {
 public static void printHello() {
    System.out.println("Hello World!");
  }

  public static void main(String[] args) {
    printHello();
    printHello();
    printHello();
  }
}
```
[/slide]