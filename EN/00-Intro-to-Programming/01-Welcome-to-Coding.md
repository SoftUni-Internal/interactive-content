[slide hideTitle]
# What is Coding

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-3-4-What-is-coding-and-demo-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


**Programming** is the process of **declaring series computer commands** which generally aim to manipulate and process numbers and text.

**Computer programs** are sequences of such commands. 

All the **letters** and all the **symbols** that comprise any computer program are referred to as 
**computer code, source code or simply code.**

The following line of code is an example of a simple computer program.

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

Computer programs contain **sequences of commands** applicable in the context of a certain **programming language**. Some popular examples of programming languages are: C#, Java, JavaScript, Python, C++, PHP, C, Ruby, Swift and Go to name a few.

Here is a simple program which uses the Java syntax.
It calculates the area of a square and prints out the result:

```java live no-template
public class Main {
  public static void main(String[] args) {
    int size = 5;
    System.out.println("Size = " + size);
    System.out.println("Area = " + size * size);
  }
}
```

The above program defines a **class** `Main`, which holds a **method** `main()`. Inside it, there is a sequence of **3 commands**:
- The first command declares and initiates a **variable**: `int size = 5;`
- The second one **prints out** an **expression**: `System.out.println("Size = " + size);`
  * note that the **"Size"** string we declared in the double quotation marks is just a **text** representation. The "**size**" variable will hold the actual number inside.
- The third one **calculates and prints out** another **expression**: `System.out.println("Area = " + size * size);`
  * the same principle applies here. The **"Area"** string is just a text representation that will be printed to the console.

The result (output) from the above program is as follows:
```
Size = 5
Area = 25
```
Defining a **class** and a `main()` **method** is a part of the logical structure in Java which is necessary in order for a program to function. 

The Java language requires all the code above in order to execute any sequence of commands.

In order to declare commands, we should know **the syntax and the semantics of the language** which we are working with, in our case - **Java**. 

This course will explore many examples of the code structure used in Java, starting with its most basic elements.

[/slide]

[slide hideTitle]

# Example: Complete Computer Program

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-8-complete-computer-program-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Algorithms

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-6-programming-and-algorithms-Fixed-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Computer programs usually execute an algorithm. 

**An algorithm** is a **sequence of steps**, necessary for the completion of a certain task, essentially, it could be compared to "**recipe**".

For example, if we want to fry some eggs, we use an algorithm: 
- Heat oil in a pan
- Crack a couple of eggs
- Let the eggs cook for about 2 - 3 minutes
- Transfer the cooked eggs to a plate

For example, to arrange a sequence of numbers in ascending order, we are required to use an algorithm. The most basic one would repeat the same action: find the greatest number and move it to the last position in the sequence, then find the next one and place it before it, running until the algorithm has processed all of the numbers.

When creating programs we usually use the help of an IDE, which stands for **Integrated Development Environment**, one example is **IntelliJ IDEA**. 

An IDE helps us easily run and debug code avoiding syntax errors. Integrated Development Enviornments can contain a great number of additional tools according to their purpose.

[/slide]

[slide hideTitle]
# Example: Console-Based Java Program

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-9-console-based-java-program-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let’s create a simple piece of code that requires a number from the console (some amount of money, i.e. an **Integer**) in **$(USD)** as user input and converts it to a different currency - **€(EUR)**.
It does that by multiplying the initial input by a predetermined exchange rate and prints out the result.

This will be a program of 3 consecutive commands:
```java live no-template
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
