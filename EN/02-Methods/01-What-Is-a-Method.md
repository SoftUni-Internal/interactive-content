# What is a Method

[slide hideTitle]
# Methods

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-3-4-Simple-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A method is a block of code that only runs when it is called.

You can pass data to methods in the form of **parameters**.

Sample method **definition**:

```Java
public static void printHello () {
  System.out.println("Hello World");
}
```

Invoking / calling a method:

```Java
printHello();
```
[/slide]

[slide hideTitle]
# Why Use Methods?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-5-Why-Use-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We use methods for several reasons.

- **Reusability** - we write a method once and use it **multiple times** 

  - we do not have to copy the same blocks of code in multiple places to use them
  
  Think of it as, `write once, reuse multiple times`

- **To parameterize code** - you will often want to use `parameters` that change the way the method behaves

- **Create conceptual units** - you can create methods for each separate task that your program is aiming to solve

- Methods make code more readable and easier to debug

  - for example, the `printHello()` method is so readable, that we can know what this method will print `Hello`

- **Simplify problems** - local variables and statements of a method **can not be seen from outside the method**

  - they are **hidden** from other parts of the program, which prevent accidental errors or confusion

[/slide]

[slide hideTitle]
# Void Type Methods

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-6-Void-type-method-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Methods with the **void** return type execute the code in their code block. 

They can accept parameters but do not return any result. 

```java
public static void doSomething() {
  //executes code
}
```

The **main()** method we have been writing code into is also a void method.

```java
public static void main(String[] args) {
  System.out.println("Hello");
}
```
[/slide]
