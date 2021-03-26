# Exception Handling

[slide hideTitle]

# The "try-catch" Statement

In Java, we handle exceptions by using the **try-catch** statement.

```java 
try {
// Specify a piece of code logic that could raise an exception 
} catch (SomeException) {
// Handle the caught exception
}
```
The **catch** blocks can be used multiple times to process **different exception types**.

**Example:**

```java 
String s = sc.nextLine();
try {
   Integer.parseInt(s);
   System.out.printf("You entered a valid integer number %s.", s);

} catch (NumberFormatException ex) {
   System.out.println("Invalid integer number!");
} catch (NullPointerException ex) {
   System.out.println("The input is null!");
} 
```

[/slide]

[slide hideTitle]

# Handling Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-9-10-handling-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Catching an exception of a particular class automatically catches the child classes of that particular exception (if any).**

See the following example:

```java 
try {
  // Specify a piece of code logic that could raise an exception 
} catch (IndexOutOfBoundsException ae) {
  // Handle the caught arithmetic exception
}
```
The code in the example above handles the **IndexOutOfBoundsException** class and its descendants: 
- **ArrayIndexOutOfBoundsException**
- **StringIndexOutOfBoundsException**

Try to find the mistake in the example below:

```java live
String str = "Peter";

try {
    Integer.parseInt(str);
    
} catch (Exception ex) {
    System.out.println("Cannot parse the number!");
    
} catch (NumberFormatException ex) {
    System.out.println("Invalid integer number!");
    
}
```

Did you get it? You cannot have multiple catch statements here because by handling the **Exception** class we are already catching all the exceptions that inherit from it, including the **NumberFormatException** class. 

To fix the mistake, remove that part of the code.

[/slide]

[slide hideTitle]

# Handling all Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-14-handling-all-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Unmanaged code can throw **other exceptions**.

To **handle all exceptions** (even unmanaged) use the **try-catch** statement

Specify a piece of code logic that could raise an exception 

```java
try {
  // Specify a piece of code logic that could raise an exception 
} catch (Exception ex) {
  // Handle the caught exception
}
``` 

Hint: Trace the exceptions hierarchy. Be cautious which exception is the parent and which is the child.

[/slide]

[slide hideTitle]

# "Try-finally" Statement

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-15-the-try-finally-statement-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **"try-finally"** statement ensures the **execution** of a given block regardless potential exceptions that could be thrown in the code preceding the finally code block.


```java 
try {
   // Specify a piece of code logic that could raise an exception 
} finally {
   // This block will always execute
}
```

**Example:**

```java 
static void testTryFinally() {
  System.out.println("Code executed before try-finally.");
  try {
     String str = sc.nextLine();
     Integer.parseInt(str);
     System.out.println("Parsing was successful.");
     return; // Exit from the current method
  } catch (NumberFormatException ex) {
     System.out.println("Parsing failed!");
  } finally {
     System.out.println("This cleanup code is always executed.");
  }
  System.out.println("This code is after the try-finally block.");
}
```

[/slide]

[slide hideTitle]

# How Do Exceptions Work?

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-17-how-do-exceptions-work-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In the **try block**, we run the code we want to check.

The **catch block** is used for handling the **checked exceptions** thrown by the **try block**, as well as any possible **unchecked exceptions**.

The **finally block** gives us a chance to run the code which we want to execute every time.

[image assetsSrc="exception-handling-example(2).png" /]

[/slide]
