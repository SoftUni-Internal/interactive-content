# Best Practices

[slide hideTitle]

# Using Catch Block

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-23-24-best-practices-using-catch-block-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Catch** blocks should: 

- Begin with the exceptions lowest in the hierarchy
- Continue with the more general exceptions
- Otherwise, a compilation error will occur

Each **catch** block should handle only these exceptions, which it concerns:

- If a method is not intended to handle a exception, it should leave it unhandled

- Handling all exceptions disregarding their type is a bad practice

[/slide]

[slide hideTitle]

# Choosing the Exception Type 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-25-26-choosing-the-exception-type-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When an application attempts to use **null** in a case where an object is required:

- **NullPointerException**

An array has been accessed with an illegal index:

- **ArrayIndexOutOfBoundsException**

An index is either negative or greater than the size of the string:

- **StringIndexOutOfBoundsException**

The code attempts to convert an inappropriate string to one of the numeric types:

- **NumberFormatException**

When an exceptional arithmetic condition has occurred

- **ArithmeticException**

The program attempts to cast an object to a subclass of which it is not an instance

- **ClassCastException**

A method has received an illegal or an inappropriate argument

- **IllegalArgumentException**

[/slide]

[slide hideTitle]

# Best Practices 

When throwing an exception, always specify a **good explanation message in** to the constructor.

When throwing an exception try to give a good description of the problem.

The exception message should explain what causes the problem and how to solve it.

- **Good**: "Size should be integer in range \[1…15\]"
- **Good**: "Invalid state. First call Initialize()"
- **Bad**: "Unexpected error"
- **Bad**: "Invalid argument"

Exceptions can decrease the application performance.

- Throw exceptions only in exceptional situations
- Do not throw exceptions in the normal program control flow
- JVM could throw exceptions at any time with no way to predict them
  **E.g. StackOverflowError**

[/slide]
