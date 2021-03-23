[slide hideTitle]
# Console (Terminal)

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-13-14-reading-user-input-and-formatting-output-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **system console** is a text terminal, it can accept and visualize commands in the form of **text** without any complicated graphical elements such as buttons, menus, etc. 

Most often it is a black colored window like this one:

[image assetsSrc="00.Console-example.png" /]

In most operating systems, the **console** is available as a standalone application that we can use to run computer commands.

It is called **Command Prompt** in Windows, and **Terminal** in Linux and Mac. 

The console runs console applications. 

They accept text from the command line and can produce text as output. 

We are going to learn programming mostly through creating **console applications**.

**IntelliJ IDEA** has its own console, which we are going to use to **read input** and **print output**:

[image assetsSrc="intro-to-programming-console.png" /]

[/slide]

[slide hideTitle]
# Printing and Formatting Text and Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-16-formatting-output-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Using the "System.out.print(…)" and "System.out.println(…)" methods
Working with these methods is easy because they can print out all of the basic data types (string, numeric and primitive types).

Here are some examples of printing various types of data:
```java live
System.out.println("Hello World");
System.out.println(5);
System.out.println(3.14159265358979);
```

There are predefined versions of the `println(…)` method corresponding to each separate data type we might want to use. 

The difference between `print(…)` and `println(…)` is that the `print(…)` method outputs directly what is provided in the parentheses and does no further actions, while the `println(…)` method outputs the specified content on a **separate** line. 

The method does not actually print out a new line but simply uses a **"command" to move** the text cursor to the position where the new line starts (this command consists of the character `\r` followed by `\n`).

Here is an example, which illustrates the difference between `print(…)` and `println(…)`:
```java live
System.out.println("I love");
System.out.print("this ");
System.out.print("course!");
```

We notice that the output is printed on two lines, even though the code is positioned on three. 

This happens because on the first line of code we use `println(…)` which prints **"I love"** and then goes to a new line. 

The next two commands use the `print(…)` method, which does not include going to a new line and therefore the words **"this"** and **"course!"** are printed on the same one.

## Formatting
In Java, when printing text, numbers and other data to the console, **we can join them** by using **templates** such as `%s`, `%d`, `%f` 
* `%s` - implies **string** formatting
* `%d` - implies **integer** formatting
* `%f` - implies **floating-point numbers** formatting

In programming, these templates are called **placeholders**. Here is a simple example:
```java live
System.out.printf("%d + %d = %d", 3, 5, 3 + 5);
```

Placeholders are replaced by the expressions, specified after the text.

[/slide]

[slide hideTitle]

# Example: Formatting Text and Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-16-formatting-output-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Reading User Input

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-15-reading-user-input-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To read **text** (a string) from the console, we have to **declare a new variable** and use the standard **command for acquiring text from the console**:
```java 
Scanner scanner = new Scanner(System.in);
String name = scanner.nextLine();
```

By default, the `scanner.nextLine()` method produces a **text result** – a text line, read from the console.

- After you read text from the console, additionally, you can **parse the text** to an integer by `Integer.parseInt(…)` or a floating-point number by `Double.parseDouble(…)`

- If not parsed to a number **all input** is considered **text**, and we **are not able to perform** arithmetic operations with it

## Example: Home Town
Let us create a program that prompts the user to enter their home town and prints out the following text: `"I am from {homeTown}!"`.

```java
Scanner scanner = new Scanner(System.in);
String homeTown = scanner.nextLine();
System.out.printf("I am from %s!", homeTown);
```

In this case, the `%s` placeholder is replaced with the value of the `homeTown` variable. 

If we enter **"Bucharest"**, the output will be:
```
I am from Bucharest!
```
[/slide]

[slide hideTitle]

# Example: Reading User Input

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-17-reading-user-input-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]


[slide hideTitle]
# Reading Integers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-18-reading-integers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In order to read an **integer** (not a float) from the console, we have to **declare a variable**, specify its **data type** and use the standard command for **reading a line of text** from the system console `scanner.nextLine()`. 

After that we have to **convert the text into an integer** using `Integer.parseInt(text)`:

```java
Scanner scanner = new Scanner(System.in);
int num = Integer.parseInt(scanner.nextLine());
```

The line above **reads an integer** from the console.

If we try to input symbols that cannot be interpreted as numbers, for example, **"hello"**. 

We will get an error message during runtime (exception).

Later on, we will see how we can **"catch"** these kinds of errors and prompt the user to enter a number.
[/slide]

[slide hideTitle]
# Example: Calculating a Square Area

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-18-reading-integers-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This code demonstrates how we can calculate the area of a square with a side lenght of 5:
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
The code above reads a **text line** from the console, then converts (parses) it to a **floating-point number**.

[/slide]

[slide hideTitle]
# Example: Converting Inches into Centimeters

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-19-reading-floating-point-numbers-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us create a program that accepts a floating-point number in inches and converts it to centimeters:

```java
Scanner scanner = new Scanner(System.in);
System.out.print("Inches = ");              
double inches = Double.parseDouble(scanner.nextLine());
double centimeters = inches * 2.54;
System.out.print("Centimeters = ");
System.out.println(centimeters);
```

Let us start the program and make sure that when a value is entered in inches, we obtain a correct output in centimeters:

[image assetsSrc="expressions-and-statements-console-example-2.png" /]

Note that if you enter an **invalid data type**, e.g. **"someText"**, the program will crash displaying an error message (exception). 

[/slide]

[slide hideTitle]
# Problem with Solution: Greeting

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-20-21-problem-and-solution-greeting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

Create a **program**, which:
* Reads user input - a **name**, from the console
* Prints "**Hello**, \{**name**\}**!**", where "\{**name**\}" is the user input

## Example:

| **Input** | **Output** |
| --- | --- |
| Peter | Hello, Peter! |

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


