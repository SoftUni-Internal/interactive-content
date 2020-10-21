[slide]

# What are Exceptions in Java?
Exceptions in Java are **objects**. 

Exception objects have detailed information about the error.

They allow the problematic situations to be processed at multiple levels and simplify code construction and maintenance.

The **Throwable** class is a base for all exceptions in JVM. 

Contains **information** for the **cause of the error**.
- **Message** – a text description of the exception
- **StackTrace** – the snapshot of the stack at the moment of exception throwing

Below **Throwable** are:

- **Exception**
    - Used for exceptional conditions that user programs should catch
    - User-defined exceptions

- **Error**
    - Not expected to be caught under normal circumstances from the program
    - Example - "StackOverflowError"

**Exceptions** are two types:

- **Checked** - an exception that is checked (notified) by the compiler at compilation-time
    - Also called as **Compile Time exceptions**

    ```java 
  public static void main(String args[]) {
    File file = new File("E://file.txt");
    FileReader fr = new FileReader(file);
  }
   ```

   File not found Exception

- **Unchecked** - an exception that occurs at the time of execution
    - Also called as **Runtime Exceptions**

[/slide]

[slide]

# Exception Hierarchy 



[/slide]


