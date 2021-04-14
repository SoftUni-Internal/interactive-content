[slide hideTitle]
# Integrated Development Environments (IDE)

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-16-18-IDE-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To program we usually use an **Integrated Development Environment** (IDE). 

In the development environment, we can create code, compile and execute the programs. 

Development environments could contain any number of the following components: a code text editor, a programming language, a compiler or an interpreter, and a runtime environment to execute programs, a debugger used to indentify code errors, tools for user interface design. There can be a number of further tools and addons depending on which IDE is used.

**Integrated Development Environments** are convenient, because they integrate everything necessary for the development of a program, without the need to exit the environment. 

If we do not use an IDE, we will have to create the code in a text editor, compile it with a command using the console, run it with another console command, some additional input might be required for its proper execution. This can be very time-consuming. 

When programming with **Java** the most commonly used IDE is **IntelliJ IDEA**, which is developed and distributed freely by JetBrains and can be downloaded from [here](https://www.jetbrains.com/idea/download/)

Some alternatives are:
- [Eclipse](https://www.eclipse.org/downloads/)
- [NetBeans](https://netbeans.org/downloads/8.0.2/)

In this course, we are going to use the **IntelliJ IDEA** development environment. 

Here is a screenshot of the IntelliJ IDEA IDE for Java:

[image assetsSrc="intro-to-programming-hello-world.png" /]
[/slide]

[slide hideTitle]
# Installing IntelliJ IDEA

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-21-24-Installing-IntelliJ-IDEA-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us begin by installing **IntelliJ IDEA** (Community, version 2019.2.1, latest as of August 2019). 

Installing newer versions of IntelliJ IDEA (like IntelliJ IDEA 2020 and IntelliJ IDEA 2021) should be very similar.

The **Community** version of IntelliJ IDEA is distributed freely by Jetbrains and can be downloaded [here](https://www.jetbrains.com/idea/download/).

The installation is not at all complicated and can be completed by following some simple steps:

After we download the installation file and start it, the following screen appears:

[image assetsSrc="intro-to-programming-install-intelliJ-1.png" /]

Press the `[Next]` button and you will see the screen below:

[image assetsSrc="intro-to-programming-install-intelliJ-2.png" /]

A screen with the installation options for IntelliJ IDEA should appear.

Put a check mark on `[64-bit launcher]`, `[.java]`, `[.groovy]` and `[.kt]`, then press the `[Next]` button. 

[image assetsSrc="intro-to-programming-install-intelliJ-3.png" /]

After that, we have to select the Start Menu Folder `[JetBrains]` and click `[Install]`. 

[image assetsSrc="intro-to-programming-install-intelliJ-4.png" /]

The installation begins, a progress bar will appear:

[image assetsSrc="intro-to-programming-install-intelliJ-5.png" /]

After IntelliJ IDEA is installed, an information screen will appear. Put a checkmark on the `[Run]` button to start it and click `[Finish]`.

[image assetsSrc="intro-to-programming-install-intelliJ-6.png" /]

To continue, you have to choose whether you would like to import settings or not. 

Put a checkmark on the `[Do not import settings]` button, assuming that you are installing this IDE for the first time.

[image assetsSrc="intro-to-programming-install-intelliJ-7.png" /]

The next step is to choose **the color theme**, in which IntelliJ is visualized. 

You can choose the one that you find to your liking.

[image assetsSrc="intro-to-programming-install-intelliJ-8.png" /]

You can use the default configuration for all the following options.

Press the `[Start using IntelliJ IDEA]` button and the main screen of the program will be displayed:

[image assetsSrc="intro-to-programming-install-intelliJ-9.jpg" /]

That is all. 

You are ready to work with IntelliJ IDEA.
[/slide]

[slide hideTitle]
# Project Solutions and Projects in IntelliJ IDEA

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-25-Project-Solutions-and-Projects-in-IntelliJ-IDEA-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Before we start working with the IDE, it is necessary to get familiar with the concepts of an **IntelliJ IDEA Project** and **IntelliJ IDEA Modules**, which are an inevitable part of it.

[image assetsSrc="intro-to-programming-modules-and-projects.png" /]

An **IntelliJ IDEA Project** represents "the **project**" we are working on. 

In the beginning, we will place some simple console applications that help us learn the basic concepts here.

Moving forward these projects will evolve into the direction of desktop applications, web applications, and other forms of software development. 

A project in IntelliJ **logically groups multiple files** constructing a given application or a component. 

A **Java project** contains one or more **Java source files**, configuration files, and some other resources. 

In every Java source file, there are one or more definitions of types (classes or other definitions). 

In the classes, there are methods, which are blocks of code, using to logically separate code functionalities. 

It sounds complicated, but in bigger projects, a structure like this one is very convenient and allows for a better organization of all necessary files.

Also, an **IntelliJ IDEA Project** is a container, in which **a few modules are logically bound**. 

In IntelliJ IDEA, a module is an essential part of any project. 

Initial modules are created automatically depending on your project requirements. 

Projects can contain multiple modules - you can add new ones, group them, and remove the modules you do not need at the moment.

Modules consist of a content root and a module file. 

A content root is a folder where you store your code. 

Usually, it contains subfolders for source code, unit tests, resource files, and so on.

This hierarchical structure is convenient with more serious projects (let us say over 50 000 lines of code or more).

For **smaller projects** this structure may even **complicate the process**, rather than help but we should use it nevertheless, as it will help us when reaching to the more advanced levels.

[/slide]

[slide hideTitle]
# Development Environments: Desktop and Online

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/EN/Java-basics-introduction-to-programming-19-Development-Environments-Desktop-and-Online-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Install JetBrains IntelliJ IDEA Community

* [JetBrains](https://www.jetbrains.com/idea/download/)
* Always try to use the latest version of the software available.

Alternative IDEs (online)

* [Java](https://www.compilejava.net) [Repl](https://repl.it/languages/java)
* [C#](https://dotnetfiddle.net)
* [Python](https://repl.it)
* JavaScript: you can directly use the Web browser console (press \[F12\] key)

[image assetsSrc="intro-to-programming-rplit.png" /]
[/slide]
