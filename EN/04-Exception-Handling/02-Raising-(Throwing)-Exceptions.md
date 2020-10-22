
[slide]

# Raising (Throwing) Exceptions

Exceptions are thrown (raised) by the **throw** keyword.

Used to notify the calling code in case of an error or unusual situation.

**When an exception is thrown:**
- The program execution stops
- The exception travels over the stack
   - Until a matching catch block is reached to handle it
   
Unhandled exceptions display an error message.

## Using Throw Keyword

- Throwing an exception with an error message:

```java
throw new IllegalArgumentException("Invalid amount!");
```
- Exceptions can accept message and cause:

```java
try {
  …
} catch (SQLException sqlEx) {
  throw new IllegalStateException("Cannot save invoice.", sqlEx);
}
```
**Note:** if the original exception is not passed, the initial cause of the exception is lost

## Re-Throwing Exceptions

- Caught exceptions can be re-thrown again:

```java
try {
   Integer.parseInt(str);
} catch (NumberFormatException ex) {
   System.out.println("Parse failed!");
   throw ex; // Re-throw the caught exception
}
```
**Example:**


```java
public static double sqrt(double value) {
  if (value < 0)
    throw new IllegalArgumentException(
			"Sqrt for negative numbers is undefined!");
  return Math.sqrt(value);
}
public static void main(String[] args) {
  try {
     sqrt(-1);
  } catch (IllegalArgumentException ex) {
     System.err.println("Error: " + ex.getMessage());
     ex.printStackTrace();
  }
}
```
[/slide]


[slide]

# Problem: Valid Person

Define a simple class **Person**, which has the following fields:

 **first name**, **last name** and **age.**

**Validate** the data in the **setters**, **throw** appropriate **exceptions** in case invalid data is entered.

[/slide]

[slide hideTitle]

# Solution: Valid Person

## Step 1. Create a Class Person




[/slide]
