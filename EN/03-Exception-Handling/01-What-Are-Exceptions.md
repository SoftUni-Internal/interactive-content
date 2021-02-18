# What are Exceptions in Java?

[slide hideTitle]

# Exceptions: Definition

An exception is an event, which occurs during the execution of a program. 

When an Exception occurs the normal flow of the program is disrupted and the program terminates. To prevent that, these occurrences should be "handled". 

In Java exceptions are objects and have detailed information about the error.

[/slide]

[slide hideTitle]

# The Throwable Class

The super class of all errors and exceptions in Java is the **throwable class**. 

Only objects that are instances of this class (or one of its sub-classes) are "thrown" by the Java Virtual Machine. 

The **Throwable** class is a base for all exceptions in the JVM (Java Virtual Machine). 

A "throwable" contains a snapshot of the execution stack of its thread at the time it was created. 

It can also contain a message that gives more information about the error. 

[/slide]

[slide hideTitle]

# Types of Exceptions

Below **Throwable** are:

- **Exceptions**
    - used for exceptional conditions that user programs should catch
    - user-defined exceptions

- **Errors**
    - not expected to be present under normal circumstances
    - example - "StackOverflowError"

[/slide]

[slide hideTitle]

# Exceptions

There are two types of **Exception**:

- **Checked** - an exception that is checked (notified) by the compiler at compilation-time
    - also called **Compile Time exceptions**

```java 
  public static void main(String args[]) {
    File file = new File("E://file.txt");
    FileReader fr = new FileReader(file);
  } //File not found Exception
```

- **Unchecked** - an exception that occurs at the time of execution
    - Also called **Runtime Exceptions**

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


