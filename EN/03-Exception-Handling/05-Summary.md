[slide hideTitle]
# Summary

# In this lesson you learnt:

- What are Exceptions in Java? 
    - Exception Hierarchy
- How to Hanlde Exception?
    - try-catch Constructor
    ```java 
    try {
    // Do some work that can raise an exception
    } catch (SomeException) {
    // Handle the caught exception
    }
    ```

    - try-finally Statement
    ```java 
    try {
    // Do some work that can cause an exception
    } finally {
    // This block will always execute
    }
    ```

- How to Raising (Throwing) Exceptions
    - Using Throw Keyword
    ```java
    try {
    …
    } catch (SQLException sqlEx) {
    throw new IllegalStateException("Cannot save invoice.", sqlEx);
    }
    ```
    - Re-Throwing Exceptions
    ```java
    try {
    Integer.parseInt(str);
    } catch (NumberFormatException ex) {
    System.out.println("Parse failed!");
    throw ex; // Re-throw the caught exception
    }
    ```
- Best Practices
    - Using Catch Block
    - Choosing the Exception Type 

## In the next lesson, you will learn:

- What is Debugging?
    - Working with Debugging tools (`debuggers`)
    - Importance of Debugging
- Working with **IntelliJ IDEA Debugger**
    - Breakpoints
- Data Inspection

[/slide]