# Exception Handling

[slide]

# "try-catch" Construction

In Java exceptions can be handled by the **try-catch** construction.

```java 
try {
// Do some work that can raise an exception
} catch (SomeException) {
// Handle the caught exception
}
```
- **Catch** blocks can be used multiple times to process different exception types.

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

When catching an exception of a particular class, all its inheritors (child exceptions) are caught too, e.g.

```java 
try {
  // Do some work that can cause an exception
} catch (IndexOutOfBoundsException ae) {
  // Handle the caught arithmetic exception
}
```

- Handles **IndexOutOfBoundsException** and its descendants: 
    - **ArrayIndexOutOfBoundsException**
    - **StringIndexOutOfBoundsException**

## Unmanaged code can throw **other exceptions**.

For **handling all exceptions** (even unmanaged) use the construction:

```java
try {
  // Do some work that can raise any exception
} catch (Exception ex) {
  // Handle the caught exception
}
``` 

Exmaple: Find the Mistake.

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

Hint: Trace out the exceptions hierarchy. Be cautious witch exception is main and witch is inheritor.

[/slide]

[slide]

# "try-finally" Statement

The **"try-finally"** statement ensures **execution** of a given block **in all cases**, when exception is raised or not in the try block.

Used for execution of cleaning-up code, e.g. releasing resources.

```java 
try {
   // Do some work that can cause an exception
} finally {
   // This block will always execute
}
```

[image assetsSrc="exception-handling-example(2).png" /]


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