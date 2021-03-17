# Declaring and Invoking Methods

[slide hideTitle]
# Creating Methods

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-7-8-Declaring-methods-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A method must be declared within a class.

It is defined by a name, followed by parentheses **()**.

Java provides some pre-defined methods, such as `System.out.println()` but we can also create our own methods:

```java
public class MyClass {
  public static void printHello() {
    System.out.println("Hello World!");

  }
}
```

- `public` - defines access type of the method i.e. from where it can be accessed in the application

- `void` - means that this method does not have a return value

- `printHello()` - the name of the method followed by parenthesis signifies that we are calling the method in this case with no parameters

- The body of the method should always be placed between curly brackets `{ }`

[/slide]

[slide hideTitle]
# Invoking Methods

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-9-10-Invoking-a-method-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To call or invoke a method in Java, we type the method's name followed by a pair of parentheses **()** and a semicolon **;**.

In the following example, `printHello()` is used to print out `Hello World!` when it is called:

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

A method can be called as many times we need to:

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
