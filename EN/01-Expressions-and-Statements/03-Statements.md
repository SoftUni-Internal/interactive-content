[slide hideTitle]
# Statements

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-11-12-statements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **actions** that a program takes, are refered to as **statements**. 

Java supports different kinds of statements, here are a few:
  * **Declaration statements** - declare local variables and constants
  * **Expression statements** - evaluate expressions
  * **Selection statements** - select one of a number of possible statements
  * **Iteration statements** - execute repeatedly an embedded statement
  * **Jump statements** - transfer control
  
The most common ones are:

-  **Declaring** a variable

  Declaring a variable means **defining** its **type**

  ```java
  int counter;
  ```
-  **Assigning** a value (initializing)

  After you declare a variable, you can assign a value to it. 
  
  Assigning a value to a variable means **storing** a **value** into a variable.

  ```java
  counter = 1;
  ```

- Declaring + **initializing**

  ```java
  int counter = 1;
  ```

- **Printing** a value

  ```java
  System.out.println(counter);
  ```

- **Modifying** a value

  ```java
  counter++;
  ```
  
  ```java
  sum = a + b;
  ```

## Comments

**Comments** are special **statements** that are **not** executed during runtime.

They are a way for programmers to write **notes** to themselves or other programmers.

We can use comments to give **better clarity** about what we are trying to **achieve** with our code.

There are **multiple ways** to declare them.

- Single-line comments

**Single-line comments** have the simplest syntax.

To declare one, we use **two forward slashes** `//`, followed by the comment:

```java
// This is a single line comment 💬
```

We can use them to **explain** our code:

```java
System.out.println("Java is awesome! 😎"); // This line prints a string to the console
```

Or to **prevent** a line of code from **running**:

```java
System.out.println("The weather outside is sunny. 🌞"); 
// System.out.println("It is raining outside. 🌧");
```

Anything on a commented line will be **ignored by the compiler**.

- Multi-line comments

As the name suggests, **multi-line comments** can take up **multiple** lines.

This can be useful when a comment is **too long** for a single line and would require horisontal scrolling.

We open them using a **forward slash**, followed by and an **asterisk**:

```java
System.out.println("Hello World! 🙋");

/*This comment 
  takes up multiple 
  lines*/
```

And close them using a **an asterisk and a forward slash**.

We can also write single-line comments using this syntax:

```java
/*This is a single-line comment 👨🏼‍💻*/
```

- Documentation comments

**Documentation comments** are used when writing code for a software package.

They can generate a **documentation page** for reference.

Any great project must have a great documentation as well.

```java
/**This type of comment is used in documentations
*
*tags are used to specify parameters
*@author James Williams
*this author tag specifies a name 
*@version 1.0
*we can specify a version number
*there are many other tags*/
```

You can learn more about them [here](https://www.oracle.com/java/technologies/javase/codeconventions-comments.html).

[/slide]
