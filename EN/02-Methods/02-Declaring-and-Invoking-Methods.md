# Declaring and Invoking Methods

[slide hideTitle]
# Creating Methods

A method must be declared within a class.

It is defined with the name of the method, followed by parentheses **()**.

Java provides some pre-defined methods, such as `System.out.println()`, but you can also create your own methods to perform certain actions:

```java
public class MyClass {
  public static void printHello() {
    System.out.println("Hello World!");

  }
}
```

- `public` - defines access type of the method i.e. from where it can be accessed in your application

- `void` - means that this method does not have a return value

- `printHello()` - is the name of the method and the parenthesis signify that we are calling the method, in this case with no parameters

- The body of the method should always be placed between curly brackets `{ }`

[/slide]

[slide hideTitle]
# Invoking Methods

To call or invoke a method in Java, write the method's name followed by a pair of parentheses **()** and a semicolon **;**.

In the following example, `printHello()` is used to print some text, when it is called:

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
