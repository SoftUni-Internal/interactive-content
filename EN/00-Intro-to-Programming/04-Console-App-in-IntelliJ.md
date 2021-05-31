[slide hideTitle]
# Console App in IntelliJ IDEA

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-26-27-28-Console-app-in-IntelliJ-IDEA-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We already have IntelliJ IDEA, so let us start it.

Let us create new Console Application in IntelliJ IDEA: `[New Project]` \-\> `[Java]` \-\> `[Template Command Line App]` \-\> `[Finish]`

We should select **a descriptive name** for our program, for example `HelloJava`:

[image assetsSrc="intro-to-programming-name-hellojava.png" /]

The IDE is going to create **an empty Java program** for us, where we can place our code logic.

## Configuring JDK in IntelliJ IDEA
If JDK is still not configured on your system, you should configure it:

[image assetsSrc="intro-to-programming-4.png" /]

Click `[edit]` and locate your JDK installation:

[image assetsSrc="intro-to-programming-5.png" /]
[/slide]

[slide hideTitle]
# Writing the Program Code

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-29-writing-programming-code-in-intelliJ-IDEA-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The program code should be placed inside the `main(String[] args)`, between the opening and the closing braces `{ }`.

This is the main method, it is being executed when starting a Java program.

Press `[Enter]` after **the opening parentheses** `{` and **start typing**.

The code of the program is placed **inwards**, as this makes it easier to read and understand.

[image assetsSrc="intro-to-programming-inwards-example.png" /]

Type in the following command:
```java
System.out.println("Hello Java");
```

Here is how our program should look in IntelliJ IDEA:

[image assetsSrc="intro-to-programming-code-in-intellij.png" /]

The command `System.out.println("Hello Java")` in Java means to print (`System.out.println(…)`) the text message `Hello Java` to the console, which we should surround in quotation marks. 

This way the interpreter will recognize that we are referring to a piece of text.

We place `;` at the end of each command. 

This signifies that the command ends (it does not continue on the next line).

This command is very typical in programming: we say a given **object** should be found (in this case the console) and some **action** should be executed upon it (in this case - print out the specified text). 

From a technical point of view, `out` is a static member in the `System` class, being an instance of PrintStream. 

And **println** is a normal (overloaded) method of the PrintStream class. 

As a parameter to it, we pass in the text literal `"Hello Java"`.

[/slide]

[slide hideTitle]
# Starting the Program

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-30-Starting-the-program-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To start the program, press `[Ctrl + Shift + F10]`.

If there are no errors, the program will be executed. 

The result will appear on the console (terminal window):

[image assetsSrc="intro-to-programming-console.png" /]

Another way to start your program is by clicking the right mouse button and selecting **Run 'Main'**

[image assetsSrc="run-intellij-right-click.png" /]

The output of this program is the following text message:
```
Hello Java
```
[/slide]

