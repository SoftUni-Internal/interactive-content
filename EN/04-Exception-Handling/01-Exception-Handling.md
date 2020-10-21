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

Unmanaged code can throw **other exceptions**.

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
[/slide]

[slide]

# "try finally" Statement




[/slide]