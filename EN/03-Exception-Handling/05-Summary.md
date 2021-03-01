[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-29-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- What Java exceptions are
    - exception Hierarchy
- How to Handle Exception
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
    // Do some work that can raise an exception
    } finally {
    // This block will always execute
    }
    ```

- How to Raise (Throw) Exceptions
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
    - using a Catch Block
    - choosing the right Exception Type 

## In the next lesson, you will learn:

- What is debugging
    - working with Debugging tools (`debuggers`)
    - importance of Debugging
- Working with the **IntelliJ IDEA Debugger**
    - breakpoints
- Data Inspection

[/slide]