[slide hideTitle]
# What is Coding

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-3-4-What-is-coding-and-demo-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


**To program** means to **give commands** to the computer, for example *"to play a sound"*, *"to print something on the screen"* or *"to multiply two numbers"*. 

Computer commands comprise **computer programs**. 

The text of a computer program is called **program code** (or **source code**, or just **code**).

Here is an example of a simple computer program:
```java live
System.out.println("I am coding");
```
[/slide]

[slide hideTitle]

# Example: Simple Commands

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-5-Commands-in-Java-and-demo-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[/slide]

[slide hideTitle]
# Computer Programs

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-7-compute-program-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Computer programs contain **sequences of commands** written in a certain **programming language**, like C#, Java, JavaScript, Python, C++, PHP, C, Ruby, Swift, Go to name a few.

Example:
```java live no-template
public class Main {
  public static void main(String[] args) {
    int size = 5;
    System.out.println("Size = " + size);
    System.out.println("Area = " + size * size);
  }
}
```

The above program defines a **class** `Main`, holding a **method** `main()`, which holds a sequence of **3 commands**:
- Declaring and assigning a **variable**: `int size = 5;`
- Calculating and **printing** an **expression**: `System.out.println("Size = " + size);`
- Calculating and **printing** an **expression**: `System.out.println("Area = " + size * size);`

The result (output) from the above program is as follows:
```
Size = 5
Area = 25
```
Defining a **class** and a `main()` **method** is a part of the logical structure in Java which is necessary in order for our program to function. 

The Java language requires all the code above in order to execute the sequence of commands.

In order to declare commands, we should know **the syntax and the semantics of the language** which we are working with, in our case - **Java**. 

In the next lessons of this course we will explore many examples of the basic code and logic structure in Java, starting with its most basic elements.

[/slide]

[slide hideTitle]

# Example: Complete Computer Program

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-8-complete-computer-program-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Algorithms

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-6-programming-and-algorithms-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Computer programs usually execute an algorithm. 

**An algorithm** is a **sequence of steps**, necessary for the completion of a certain task, something like a "recipe".

For example, if we want to fry some eggs, we will most probably use the following algorithm: 
- Heat up the oil in a pan
- Put the eggs in
- Wait for them to fry
- Move them away from the stove

For example, to arrange a sequence of numbers in an ascending order, an algorithm is needed, e.g. find the smallest number and print it out, then find the smallest number among the rest of the numbers and print it out. This will be repeated until there are no more numbers left.

When creating programs we usually use the help of an IDE, which stands for **Integrated Development Environment**, one example is **IntelliJ IDEA**. 

An IDE helps us easily run and debug our code avoiding syntax errors. Integrated Development Enviornments can containing a great number of additional tools according to their purpose.

[/slide]

[slide hideTitle]
# Example: Console-Based Java Program

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-9-console-based-java-program-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us create a simple piece of code that reads an amount of money (an Integer) in U.S. Dollars (USD) as user input, converts it into Euro (EUR) by dividing it using the exchange rate and prints out the obtained result. 

This will be a program of 3 consecutive commands:
```java 
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    
    Scanner scanner = new Scanner(System.in);
    int dollars = scanner.nextInt();
    double euro = dollars * 0.883795087;
    System.out.print("Euro: " + euro);
  }
}
```
[/slide]
