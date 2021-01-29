# Exception Handling

[slide hideTitle]

# "try-catch" Construction

In Java, we handle exceptions by using the **try-catch** construction.

```java 
try {
// Do some work that can raise an exception
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
  // Do some work that can cause an exception
} catch (IndexOutOfBoundsException ae) {
  // Handle the caught arithmetic exception
}
```
- The code in the example handles `IndexOutOfBoundsException` and its descendants: 
    - `ArrayIndexOutOfBoundsException`
    - `StringIndexOutOfBoundsException`

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

## Unmanaged code can throw **other exceptions**.

For **handling all exceptions** (even unmanaged) use the construction:

```java
try {
  // Do some work that can raise any exception
} catch (Exception ex) {
  // Handle the caught exception
}
``` 

Hint: Trace out the exceptions hierarchy. Be cautious witch exception is the main and which is the inheritor.

[/slide]

[slide hideTitle]

# "Try-finally" Statement

The **"try-finally"** statement ensures **execution** of a given block **in all cases** when an exception is raised or not in the try block.

It helps the execution for cleaning-up code, e.g. releasing resources.

```java 
try {
   // Do some work that can cause an exception
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

# Problem: Square Root

Write a program that reads an integer **number** and **calculates** and **prints** its **square root**.

If the number is invalid, print **"Invalid number"**. 

In all cases, finally, print **"Goodbye"**. 

Use **try-catch-finally.**

[/slide]

[slide hideTitle]

# Solution: Square Root

**TODO: Take the solution from Dimo's presentation because it is the same.**

```java live

```
[/slide]

[slide hideTitle]

# Problem: Enter Numbers

Write a method **printNumbers(int start, int end)** that prints integer numbers in a given range **\[start...end\]**. 

If we have an **invalid number** or a **non-number** as input, the method should **throw an exception**. 

Using this method write a program that enters **start** and **end:** **1 < start < end < 100**. 

If the user enters an invalid number, make the user enter all of them again.

[/slide]

[slide hideTitle]

# Solution: Enter Numbers

**TODO: Take the solution from Dimo's presentation because it is the same.**

```java live

```

[/slide]

[slide hideTitle]

# Problem: Fixing

This program is throwing an **ArrayIndexOutOfBoundsException**. 

Using your skills, fix this problem using a try-catch block.

```java

public static void main(String[] args) {
   Scanner scanner = new Scanner (System.in);
   String[] weekdays = new String[5];

   weekdays[0] = "Monday";
   weekdays[1] = "Tuesday";
   weekdays[2] = "Wednesday";
   weekdays[3] = "Thursday";
   weekdays[4] = "Friday";

   for (int i = 0; i <= weekdays.lenght; i++) {
      System.out.println(weekdays[i]);
   }
   
   scanner.nextLine();
}

```

[/slide]

[slide hideTitle]

# Solution: Fixing

**TODO: Take the solution from Dimo's presentation because it is the same.**

```java live

```

[/slide]