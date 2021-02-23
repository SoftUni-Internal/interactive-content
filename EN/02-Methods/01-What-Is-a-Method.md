# What is a Method

[slide hideTitle]
# Methods

A method is a block of code that only runs when it is called.

You can pass data to methods in the form of parameters.

Methods are used to perform certain actions, and they are also known as **functions**.

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

We use methods in Java for several reasons.

- **Reusability** - we write a method once and use it **multiple times**. 

We do not have to copy the same blocks of code in multiple places to use them. Think of it as, `write once, reuse multiple times`

- **To parameterize code** - you will often want to use `parameters` that change the way the method behaves

- **Create conceptual units** - you can create methods for each separate task that your program is aiming to solve

- Methods make code more readable and easier to debug. 

For example, the `printHello()` method is so readable, that we can know what this method will print `Hello`

- **Simplify problems** - local variables and statements of a method **can not be seen from outside the method**. 

They \(and their complexity\) are **hidden** from other parts of the program, which prevents accidental errors or confusion

[/slide]

[slide hideTitle]
# Void Type Methods

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
