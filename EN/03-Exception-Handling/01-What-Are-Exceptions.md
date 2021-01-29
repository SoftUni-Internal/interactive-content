# What are Exceptions in Java?

[slide hideTitle]

# Exceptions: Defenition

An exception is an event, which occurs during the execution of a program.

When an Exception occurs the normal flow of the program is disrupted and the program terminates, which is not recommended, therefore, these exceptions are to be handled.

Some of the exception are caused by the user or by the programmer error, and sometimes by physical resources that have failed in some way.

In Java exceptions are objects and have detailed information about the error.

They allow the problematic situations to be processed at multiple levels and simplify code construction and maintenance.

[/slide]

[slide hideTitle]

# The Throwable Class

The superclass of all errors and exceptions in the Java language is the **throwable class**.

Only objects that are instances of this class (or one of its subclasses) are thrown by the Java Virtual Machine.

The **Throwable** class is a base for all exceptions in JVM. 

A throwable contains a snapshot of the execution stack of its thread at the time it was created.

It can also contain a message string that gives more information about the error.

[/slide]

[slide hideTitle]

# Types of Exceptions

Below **Throwable** are:

- **Exception**
    - Used for exceptional conditions that user programs should catch
    - User-defined exceptions

- **Error**
    - Not expected to be caught under normal circumstances from the program
    - Example - "StackOverflowError"

[/slide]

[slide hideTitle]

# Exceptions

**Exceptions** are two types:

- **Checked** - an exception that is checked (notified) by the compiler at compilation-time
    - Also called **Compile Time exceptions**

```java 
  public static void main(String args[]) {
    File file = new File("E://file.txt");
    FileReader fr = new FileReader(file);
  } //File not found Exception
```

- **Unchecked** - an exception that occurs at the time of execution
    - Also called as **Runtime Exceptions**

```java 
  public static void main(String args[]) {
    int num1=10;
    int num2=0;
    int res=num1/num2; //Since dividing an integer with 0 it should throw ArithmeticException
  System.out.println(res);
  } //ArithmeticException
```
[/slide]

[slide hideTitle]

# Exception Hierarchy 

[image assetsSrc="exception-handling-example(1).png" /]

[/slide]


