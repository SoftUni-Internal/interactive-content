# Console (Terminal)

[slide]
# Video
[vimeo-video videoId="341522009" startTimeInSeconds="2901" endTimeInSeconds="6281" /]

[/slide]

[slide]
# Console (Terminal)
Generally, the **system console** represents a text terminal, which means that it accepts and visualizes just **text** without any graphical elements like buttons, menus, etc. 

It usually looks like a black colored window like this one:

[image src="https://github.com/AtanasovAtanas/pb-interactive-csharp/blob/master/assets/00.Console-example.png"/]

In most operating systems, the **console** is available as a standalone application on which we print console commands. 

It is called a **Command Prompt** in Windows, and a **Terminal** in Linux and Mac. 

The console runs console applications. They read text from the command line and print text on the console. We are going to learn programming mostly through creating **console applications**.

**IntelliJ IDEA** has its own console, which we are going to use to **read input** and **print output**:
[image src="https://github.com/AtanasovAtanas/pb-interactive-java/blob/master/assets/intro-to-programming-console.png"/]

[/slide]

[slide]
# Printing and Formatting Text and Numbers

## Using `System.out.print(…)` and `System.out.println(…)`
Working with these methods is easy because they can print all the basic types (string, numeric and primitive types).

Here are some examples of printing various types of data:
```java live
System.out.println("Hello World");
System.out.println(5);
System.out.println(3.14159265358979);
```

As we see by using `System.out.println(…)` it is possible to print various data types because for each type there is a predefined version of the method `println(…)`.

The difference between `print(…)` and `println(…)` is that the `print(…)` method prints on the console what it is provided between the parentheses but does nothing in addition while the method `println(…)` means directly **"print line"**. 

This method does what the `print(…)` one does but in addition goes to a new line. 

In fact the method does not print a new line but simply puts a **"command" for moving** cursor to the position where the new line starts (this command consists of the character `\r` followed by `\n`).

Here is an example, which illustrates the difference between `print(…)` and `println(…)`:
```java live
System.out.println("I love");
System.out.print("this ");
System.out.print("course!");
```

We notice that the output of this example is printed on two lines, even though the code is on three. 

This happens because on the first line of code we use `println(…)` which prints **"I love"** and then goes to a new line. 

In the next two lines of the code uses the `print(…)` method, which prints without going on a new line and thus the words **"this"** and **"course!"** remain on the same line.

## Formatting
In Java, when printing a text, numbers and other data on the console, **we can join them** by using templates `%s`, `%d`, `%f` etc. 
* `%s` - **string** formatting
* `%d` - **integer** formatting
* `%f` - **floating-point numbers** formatting

In programming, these templates are called **placeholders**. This is a simple example:
```java live
System.out.printf("%d + %d = %d", 3, 5, 3 + 5);
```

The placeholders `%d` is replaced by the expressions, given after the text.

[/slide]

[slide]
# Reading User Input
To read a **text** (string) from the console, again, we have to **declare a new variable** and use the standard **command for reading a text from the console**:
```java 
Scanner scanner = new Scanner(System.in);
String name = scanner.nextLine();
```

By default, the `scanner.nextLine()` method returns a **text result** – a text line, read from the console.
- After you read a text from the console, additionally, you can **parse the text** to an integer by `Integer.parseInt(…)` or a floating-point number by `Double.parseDouble(…)`.
- If parsing to a number is not done, **each number** will simply be **text**, and we **cannot do** arithmetic operations with it.

# Example: Home Town
Let's write a program that asks the user for their home town and prints the text `"I am from {homeTown}!"`.

```java
Scanner scanner = new Scanner(System.in);
String homeTown = scanner.nextLine();
System.out.printf("I am from %s!", homeTown);
```

In this case the `%s` expression is replaced with the value of the variable `homeTown`. 

If we enter **"Sofia"**, the output will be as follows:
```
I am from Sofia!
```
[/slide]


[slide]
# Reading Integers
In order to read an **integer** (not a float) **number** from the console, we have to **declare a variable**, declare the **number type** and use the standard command for **reading a text line** from the system console `scanner.nextLine()` and after that **convert the text line into an integer number** using `Integer.parseInt(text)`:

```java
Scanner scanner = new Scanner(System.in);
int num = Integer.parseInt(scanner.nextLine());
```

The above line of Java code **reads an integer** from the first line on the console.

Try to write a wrong number, for example **"hello"**. 

You will get an error message during runtime (exception). This is normal. 

Later on, we will find out how we can catch these kinds of errors and make the user enter a number again.

# Example: Calculating a Square Area
This code demonstrates how we can calculate the square area by the given length of the side:
```java
Scanner scanner = new Scanner(System.in);
System.out.print("a = ");              
int a = Integer.parseInt(scanner.nextLine());
int area = a * a;
System.out.print("Square area = ");
System.out.println(area);
```

Here is how the program would work if we had a square with a side length equal to 3:

[image src="https://github.com/AtanasovAtanas/pb-interactive-java/blob/master/assets/expressions-and-statements-console-example-area.png"/]
[/slide]

[slide]
# Reading Floating-Point Numbers
To read a **floating-point number** (fractional number, non-integer) from the console use the following command:
```java
Scanner scanner = new Scanner(System.in);
double num = Double.parseDouble(scanner.nextLine());
```
The above Java code first reads a **text line** from the console, then converts (parses) it to a **floating-point number**.

# Example: Converting Inches into Centimeters
Let's write a program that reads a floating-point number in inches and converts it to centimeters:
```cs
Scanner scanner = new Scanner(System.in);
System.out.print("Inches = ");              
double inches = Double.parseDouble(scanner.nextLine());
double centimeters = inches * 2.54;
System.out.print("Centimeters = ");
System.out.println(centimeters);
```

Let's start the program and make sure that when a value in inches is entered, we obtain a correct output in centimeters:

[image src="https://github.com/AtanasovAtanas/pb-interactive-java/blob/master/assets/expressions-and-statements-console-example-2.png"/]

Note that if you enter and **invalid number**, e.g. **"asfd"**, the program will crash with an error message (exception). 

We will learn how to handle exceptions in later courses.
[/slide]

[slide]
# Problem: Greeting
[code-task title="Greeting" executionStrategy="java-code" requiresInput]
[code-editor language="java"]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      // write code here
  }
}
```
[/code-editor]
[task-description]
# Description
Write a **program**, which:
* Reads a user input - **name**, from the console
* Prints "Hello, \{name\}!", where \{name\} is the user input
# Example
## Input
- Peter
## Output
- Hello, Peter
[/task-description]
[tests]
[test]
[input]
John
[/input]
[output]
Hello, John
[/output]
[/test]
[test]
[input]
Marie
[/input]
[output]
Hello, Marie
[/output]
[/test]
[test]
[input]
asd
[/input]
[output]
Hello, asd
[/output]
[/test]
[test]
[input]
George
[/input]
[output]
Hello, George
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]


[slide]
# Solution: Greeting
[code-task title="Greeting" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    String name = scanner.nextLine();
    System.out.print("Hello, ");
    System.out.println(name);
  }
}
```
[/code-editor]
[task-description]
# Description
Write a **program**, which:

  * Reads a user input: **name**, from the console
  * Prints "Hello, \{name\}", where {**name**} is the **user input**
# Example
## Input
- Peter
## Output
- Hello, Peter
[/task-description]
[tests]
[test]
[input]
John
[/input]
[output]
Hello, John
[/output]
[/test]
[test]
[input]
Marie
[/input]
[output]
Hello, Marie
[/output]
[/test]
[test]
[input]
asd
[/input]
[output]
Hello, asd
[/output]
[/test]
[test]
[input]
George
[/input]
[output]
Hello, George
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide]
# Concatenating Text and Numbers
Besides for summing up numbers, the operator `+` is also used for **joining pieces of text** (concatenation of two strings one after another). 

In programming, joining two pieces of text is called **"concatenation"**. 

Here is how we can concatenate a text with a number by the `+` operator:

```java live
String firstName = "John";
String lastName = "Doe";
int age = 19;
String str = firstName + " " + lastName + " @ " + age;
System.out.println(str);  // John Doe @ 19
```

# Examples: Concatenating Text and Numbers
Here is another **example** of concatenating text and numbers:
```java live
double a = 1.5;
double b = 2.5;
String sum = "The sum is: " + a + b;
System.out.println(sum);  // The sum is: 1.52.5
```

Did you notice **something strange**? Maybe you expected the numbers `a` and `b` to be summed? 

Actually, the concatenation works from right to left and the result above is absolutely correct. 

If we want to sum the numbers, we have to use **brackets**, in order to change the order of execution of the operations:
```java live
double a = 1.5;
double b = 2.5;
String sum = "The sum is: " + (a + b);
System.out.println(sum);  // The sum is: 4
```
[/slide]