# Exception Handling

[slide hideTitle]

# "try-catch" Construction

In Java, we handle exceptions by using the **try-catch** construction.

```java 
try {
// Specify a piece of code logic that could raise an exception 
} catch (SomeException) {
// Handle the caught exception
}
```
Use the **Catch** blocks multiple times to process different exception types.

**Example:**

```java 
String s = sc.nextLine();
try {
   Integer.parseInt(s);
   System.out.printf("You entered a valid integer number %s.", s);

} catch (NumberFormatException ex) {
   System.out.println("Invalid integer number!");
}
```

[/slide]

[slide hideTitle]

# Handling Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-9-10-handling-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Catching an exception of a particular class causes the caption of all its inheritors (child exceptions), as well.**

See the following example:

```java 
try {
  // Specify a piece of code logic that could raise an exception 
} catch (IndexOutOfBoundsException ae) {
  // Handle the caught arithmetic exception
}
```
The code in the example handles the **IndexOutOfBoundsException** and its descendants: 
- **ArrayIndexOutOfBoundsException**
- **StringIndexOutOfBoundsException**

Example: Find the Mistake.

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

[/slide]

[slide hideTitle]

# Handling all Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-14-handling-all-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Unmanaged code can throw **other exceptions**

To **handling all exceptions** (even unmanaged) use the construction

Specify a piece of code logic that could raise an exception 

```java
try {
  // Specify a piece of code logic that could raise an exception 
} catch (Exception ex) {
  // Handle the caught exception
}
``` 

Hint: Trace the exceptions hierarchy. Be cautious witch exception is the main and which is the inheritor.

[/slide]

[slide hideTitle]

# "Try-finally" Statement

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-15-the-try-finally-statement-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **"try-finally"** statement ensures the **execution** of a given block **in all cases** whether an exception is raised or not in the try block.


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

The **catch block** must handle the **checked exceptions** thrown by the **try block**, as well as any possible **unchecked exceptions**.

The **finally block** gives us a chance to run the code which we want to execute every time a **try-catch block is completed** - either with errors or without any error.

[image assetsSrc="exception-handling-example(2).png" /]

[/slide]

