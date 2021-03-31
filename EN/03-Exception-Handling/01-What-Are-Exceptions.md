# What are Exceptions in Java?

[slide hideTitle]

# Exceptions: Definition

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-3-4-what-are-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An exception is an event that can happen at any time during the execution of a program. 

When an exception occurs, the normal flow of the program is disrupted, which typically results in the program terminating.

To prevent this, the occurrences should be "handled". 

In Java, exceptions are objects that contain detailed information about the error.

[/slide]

[slide hideTitle]

# The Throwable Class

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-5-the-throwable-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The superclass of all errors and exceptions in Java is the **throwable class**. 

Only objects that are instances of this class (or one of its sub-classes) are "thrown" by the Java Virtual Machine. 

The **Throwable** class is a base for all exceptions in the JVM (Java Virtual Machine). 

Any "throwable" object contains a snapshot of the execution stack of its thread at the time it was created. 

It can also contain a message that gives more information about the error. 

[/slide]

[slide hideTitle]

# Types of Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-6-types-of-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Exceptions**
    - used for exceptional conditions that user programs should catch
    - user-defined exceptions

- **Errors**
    - not expected to be present under normal circumstances
    - example - "StackOverflowError"

Both **Exceptions** and **Errors** classes are subclasses of the **Throwable** class.

[/slide]

[slide hideTitle]

# Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-7-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are two types of **Exceptions**:

- **Checked** - an exception that is checked (notified) by the compiler at compilation-time
    - also called **Compile Time exceptions**

```java 
  public static void main(String args[]) {
     File file = new File("E://file.txt");
     FileReader fr = new FileReader(file);
 } //File not found Exception //File not found Exception
```

- **Unchecked** - an exception that occurs at the time of execution
    - Also called **Runtime Exceptions**

```java 
  public static void main(String args[]) {
     int num1 = 10;
     int num2 = 0;
     int res = num1 / num2; //Throws ArithmeticException (dividing by 0)
     System.out.println(res);
 } //ArithmeticException
```
[/slide]

[slide hideTitle]

# Exception Hierarchy 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-8-exception-hierarchy-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="exception-handling-example(1).png" /]

[/slide]


