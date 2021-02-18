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

In the **try block**, we run the code we want to check.

The **catch block** must handle the **checked exceptions** thrown by the **try block**, as well as any possible **unchecked exceptions**.

The **finally block** gives us a chance to run the code which we want to execute every time a **try-catch block is completed** - either with errors or without any error.

[image assetsSrc="exception-handling-example(2).png" /]

[/slide]

[slide hideTitle]

# Problem with Solution: Square Root

Create a program that reads an integer, **calculates** and **prints** its **square root**.

If the number is invalid, print **"Invalid number"**. 

In all cases, finally, print **"Goodbye"**. 

Use **try-catch-finally.**

[/slide]


[slide hideTitle]

# Problem with Solution: Enter Numbers

Write a method **printNumbers(int start, int end)** that prints integers in a given range \[start...end\]. 

If we receive an **invalid number** or a **non-number** as input, the method should **throw an exception**. 

Using this method create a program that runs from the value of **start** and finishes when reaching the value of **end: 1 < start < end < 100**. 

If the user enters an invalid number, make sure that the user will enter numbers again.

[/slide]


[slide hideTitle]

# Problem with Solution: Fixing

This program is throwing an **ArrayIndexOutOfBoundsException**. 

Using your skills, fix this problem using a try-catch block.

```java

public static void main(String[] args) {
   Scanner scanner = new Scanner (System.in);
   
}

```

[/slide]
