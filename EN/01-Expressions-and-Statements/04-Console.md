[slide hideTitle]
# Console (Terminal)

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-13-14-reading-user-input-and-formatting-output-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Generally, the **system console** represents a text terminal, which means that it accepts and visualizes just **text** without any graphical elements like buttons, menus, etc. 

It usually looks like a black colored window like this one:

[image assetsSrc="00.Console-example.png" /]

In most operating systems, the **console** is available as a standalone application on which we print console commands. 

It is called a **Command Prompt** in Windows, and a **Terminal** in Linux and Mac. 

The console runs console applications. They read text from the command line and print text on the console. We are going to learn programming mostly through creating **console applications**.

**IntelliJ IDEA** has its own console, which we are going to use to **read input** and **print output**:
[image assetsSrc="intro-to-programming-console.png" /]

[/slide]

[slide hideTitle]
# Printing and Formatting Text and Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-16-formatting-output-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[slide hideTitle]

# Example: Formatting Text and Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-16-formatting-output-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Reading User Input

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-15-reading-user-input-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[slide hideTitle]

# Example: Reading User Input

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-17-reading-user-input-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]


[slide hideTitle]
# Reading Integers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-18-reading-integers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In order to read an **integer** (not a float) **number** from the console, we have to **declare a variable**, declare the **number type** and use the standard command for **reading a text line** from the system console `scanner.nextLine()` and after that **convert the text line into an integer number** using `Integer.parseInt(text)`:

```java
Scanner scanner = new Scanner(System.in);
int num = Integer.parseInt(scanner.nextLine());
```

The above line of Java code **reads an integer** from the first line on the console.

Try to write a wrong number, for example **"hello"**. 

You will get an error message during runtime (exception). This is normal. 

Later on, we will find out how we can catch these kinds of errors and make the user enter a number again.
[/slide]

[slide hideTitle]
# Example: Calculating a Square Area

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-18-reading-integers-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[image assetsSrc="expressions-and-statements-console-example-area.png" /]
[/slide]

[slide hideTitle]
# Reading Floating-Point Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-19-reading-floating-point-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To read a **floating-point number** (fractional number, non-integer) from the console use the following command:
```java
Scanner scanner = new Scanner(System.in);
double num = Double.parseDouble(scanner.nextLine());
```
The above Java code first reads a **text line** from the console, then converts (parses) it to a **floating-point number**.

[/slide]

[slide hideTitle]
# Example: Converting Inches into Centimeters

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-19-reading-floating-point-numbers-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let's write a program that reads a floating-point number in inches and converts it to centimeters:
```java
Scanner scanner = new Scanner(System.in);
System.out.print("Inches = ");              
double inches = Double.parseDouble(scanner.nextLine());
double centimeters = inches * 2.54;
System.out.print("Centimeters = ");
System.out.println(centimeters);
```

Let's start the program and make sure that when a value in inches is entered, we obtain a correct output in centimeters:

[image assetsSrc="expressions-and-statements-console-example-2.png" /]

Note that if you enter and **invalid number**, e.g. **"asfd"**, the program will crash with an error message (exception). 

We will learn how to handle exceptions in later courses.
[/slide]

[slide hideTitle]
# Problem with Solution: Greeting

interactive-programming-basics-with-java-expressions-and-statements-20-problem-with-Solution-Greeting

[code-task title="Greeting" taskId="pb-java-expressions-greeting" executionStrategy="java-code" requiresInput]
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
# Example:

| **Input** | **Output** |
| --- | --- |
| Peter | Hello, Peter! |
|  |  |
[/task-description]
[tests]
[test open]
[input]
Peter
[/input]
[output]
Hello, Peter!
[/output]
[/test]
[test]
[input]
Marie
[/input]
[output]
Hello, Marie!
[/output]
[/test]
[test]
[input]
asd
[/input]
[output]
Hello, asd!
[/output]
[/test]
[test]
[input]
George
[/input]
[output]
Hello, George!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]


