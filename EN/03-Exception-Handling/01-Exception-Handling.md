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

**When catching an exception of a particular class, all its inheritors (child exceptions) are caught too.**
See the following  example:

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

## Unmanaged code can throw **other exceptions**.

For **handling all exceptions** (even unmanaged) use the construction:

```java
try {
  // Do some work that can raise any exception
} catch (Exception ex) {
  // Handle the caught exception
}
``` 

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

[slide]

# Problem: Square Root

Write a program that reads an integer **number** and **calculates** and **prints** its **square root**.

If the number is invalid, print **"Invalid number"**. 

In all cases finally print **"Good bye"**. 

Use **try-catch-finally.**


[/slide]

[slide]

# Solution: Square Root

**TODO: Take the solution from Dimo's presentation, because to be the same.**

```java live

```
[/slide]

[slide]

# Problem: Enter Numbers

Write a method **printNumbers(int start, int end)** that prints an integer numbers in a given range **\[start...end\]**. 

If an **invalid number** or a **non-number** text is entered, the method should **throw an exception**. 

Using this method write a program that enters **start** and **end:** **1 < start < end < 100**. 

If the user enters an invalid number, make the user enter all of them again.


[/slide]

[slide hideTitle]

# Solution: Enter Numbers

**TODO: Take the solution from Dimo's presentation, because to be the same.**

```java live

```

[/slide]

[slide]

# Problem: Fixing

This program is throwing an **ArrayIndexOutOfBoundsException**. 

Using your skills, fix this problem using a try catch block.

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

[slide]

# Solution: Fixing

**TODO: Take the solution from Dimo's presentation, because to be the same.**

```java live

```

[/slide]





