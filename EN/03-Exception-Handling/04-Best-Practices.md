# Best Practices

[slide hideTitle]

# Using Catch Block

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-23-24-best-practices-using-catch-block-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Catch** blocks should: 

- Begin with the exceptions that are lowest in the hierarchy
- Continue with the more general exceptions
- Otherwise, a compilation error will occur

Each **catch** block should handle only these exceptions that can be thrown by the code in the **try** block:

- If a method is not intended to handle an exception, it should be left unhandled

- Handling all exceptions without paying attention to their type is a bad practice

[/slide]

[slide hideTitle]

# Choosing the Exception Type 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-25-26-choosing-the-exception-type-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When an application attempts to use **null** in a case where an object is required:

| **Exception Type** | **When to use** |
| --- | --- |
| **NullPointerException** | Accessing an invalid index in a collection. |
| **StringIndexOutOfBoundsException** | Accessing an invalid index in a string. |
| **NumberFormatException** | The code attempts to convert a string that is not a number to one of the numeric types. |
| **ArithmeticException** | Thrown when an exceptional arithmetic condition has occurred. |
| **ClassCastException** | A method has received an illegal/invalid argument.|

[/slide]

[slide hideTitle]

# Best Practices 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-27-28-exceptions-best-practices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When throwing an exception, always specify a **good explanation message** in the constructor.

When throwing an exception try to give a good description of the problem.

The exception message should explain what causes the problem and how to solve it.

- **Good**: "Size should be an integer in range \[1…15\]"
- **Good**: "Invalid state. First call Initialize()"
- **Bad**: "Unexpected error"
- **Bad**: "Invalid argument"

Exceptions can decrease application performance.

- Throw exceptions only in exceptional situations
- Do not throw exceptions in the normal program control flow
- JVM could throw exceptions at any time with no way to predict them such as the **StackOverflowError**
  
[/slide]
