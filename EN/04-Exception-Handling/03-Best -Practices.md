[slide]

# Best Practices

## Using Catch Block

- **Catch** blocks should: 

   - Begin with the exceptions lowest in the hierarchy.
   - Continue with the more general exceptions.
   - Otherwise a compilation error will occur.

- Each **catch** block should handle only these exceptions which it expects

   - If a method is not competent to handle an exception, it should leave it unhandled
   - Handling all exceptions disregarding their type is a popular bad practice (anti-pattern)!


## Choosing the Exception Type 

- When an application attempts to use **null** in a case where an object is required:
   - **NullPointerException**
- An array has been accessed with an illegal index:
   - **ArrayIndexOutOfBoundsException**
- An index is either negative or greater than the size of the string: 
   - **StringIndexOutOfBoundsException**
- Attempts to convert a inappropriate string to one of the numeric types: 
   - **NumberFormatException**
- When an exceptional arithmetic condition has occurred
   - **ArithmeticException**
- Attempts to cast an object to a subclass of which it is not an instance
   - **ClassCastException**
- A method has been passed an illegal or inappropriate argument
   - **IllegalArgumentException**


## Best Practices 

- When raising an exception, always pass to the constructor a **good explanation message.**

  The exception message should explain what causes the problem and how to solve it.

   - **Good**: "Size should be integer in range \[1…15\]"
   - **Good**: "Invalid state. First call Initialize()"
   - **Bad**: "Unexpected error"
   - **Bad**: "Invalid argument"

- Exceptions can decrease the application performance.

   - Throw exceptions only in situations which are really exceptional and should be handled.
   - Do not throw exceptions in the normal program control flow
   - JVM could throw exceptions at any time with no way to predict them
     **E.g. StackOverflowError**

[/slide]
