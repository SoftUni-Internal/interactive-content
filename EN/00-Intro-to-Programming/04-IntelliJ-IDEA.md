# Integrated Development Environments

[slide]
# Video

[vimeo-video startTimeInSeconds="6481" endTimeInSeconds="7114"]
[stream language="EN" videoId="384741142" default /]
[stream language="RO" videoId="390421925"  /]
[/video-vimeo]

[/slide]

[slide]
# Integrated Development Environments (IDE)
In order to program we need an **Integrated Development Environment** (IDE). 

**An environment for development** (Integrated Development Environment – **IDE**) is a combination of traditional tools for development of software applications. 

In the development environment we write code, compile and execute the programs. Development environments integrate in them a text editor for writing code, a programming language, a compiler or an interpreter and a runtime environment for executing programs, a debugger for tracking the program and seeking out errors, tools for user interface design and other tools and add-ons.

**Environments for development** are convenient, because they integrate everything necessary for the development of the program, without the need to exit the environment. 

If we don't use an environment for development, we will have to write the code in a text editor, to compile it with a command on the console, to run it with another command on the console and to write more additional commands when needed, which is very time consuming. 

For programming with **the Java language** the most commonly used IDE is **IntelliJ IDEA**, which is developed and distributed freely by JetBrains and can be downloaded from: https://www.jetbrains.com/idea/download/.

Alternatives of Visual Studio are:
- Eclipse – https://www.eclipse.org/downloads/
- NetBeans – https://netbeans.org/downloads/8.0.2/

In this course, we are going to use the development environment **IntelliJ IDEA**. 

This an example how a development IDE may look (IntelliJ IDEA IDE for Java):

[image assetsSrc="intro-to-programming-hello-world.png" /]
[/slide]

[slide]
# Installing IntelliJ IDEA
We begin with the installation of the integrated environment **IntelliJ IDEA** (Community, version 2019.2.1, latest as of August 2019). 

Installing later versions of IntelliJ IDEA (like IntelliJ IDEA 2020 and IntelliJ IDEA 2021) should be very similar.

The **Community** version of IntelliJ IDEA is distributed freely by Jetbrains and can be downloaded from: https://www.jetbrains.com/idea/download/.

The installation is typical for Windows with `[Next]`, `[Next]` and `[Finish]`.

The next lines describe in detail the steps for the installation of IntelliJ IDEA (version Community 2019.2.1). 

After we download the installation file and start it, the following screen appears:
[image assetsSrc="intro-to-programming-install-intelliJ-1.png" /]

Press the `[Next]` button and you will see the screen bellow:
[image assetsSrc="intro-to-programming-install-intelliJ-2.png" /]

A screen with the installation options of IntelliJ IDEA is being loaded.

Put a check mark on `[64-bit launcher]`, `[.java]`, `[.groovy]` and `[.kt]`, then press the `[Next]` button. 
[image assetsSrc="intro-to-programming-install-intelliJ-3.png" /]

After that we have to select the Start Menu Folder `[JetBrains]` and click `[Install]`. Basically, this is everything.
[image assetsSrc="intro-to-programming-install-intelliJ-4.png" /]

Installation of IntelliJ IDEA begins, and a screen like the one bellow will appear:
[image assetsSrc="intro-to-programming-install-intelliJ-5.png" /]

After IntelliJ IDEA is installed, an informative screen will appear. Put a check mark on the `[Run]` button to start it and click `[Finish]`.
[image assetsSrc="intro-to-programming-install-intelliJ-6.png" /]

In order to continue you have to choose whether to import settings or not. Put a check mark on the `[Do not import settings]` button.
[image assetsSrc="intro-to-programming-install-intelliJ-7.png" /]

The next step is to choose **the color theme**, in which IntelliJ is visualized. The choice here lays completely on the preferences of the user and it doesn't matter which option will be chosen.
[image assetsSrc="intro-to-programming-install-intelliJ-8.png" /]

On the next configurations you can choose the default ones.

Press the `[Start using IntelliJ IDEA]` button and the main view of IntelliJ IDEA Community will be displayed:
[image assetsSrc="intro-to-programming-install-intelliJ-9.png" /]

That's all. You are ready to work with IntelliJ IDEA.
[/slide]

[slide]
# Project Solutions and Projects in IntelliJ IDEA
Before we start working with IntelliJ IDEA, it is necessary to get familiar with the concepts of a **IntelliJ IDEA Project** and a **IntelliJ IDEA Modules**, which are an inevitable part of it.

[image assetsSrc="intro-to-programming-modules-and-projects.png" /]

**IntelliJ IDEA Project** represents "the **project**" we are working on. In the beginning, these will be our console applications, which we are going to learn writing with the help of the current course and the training sessions.

With deeper learning, time and practice, these projects will move into the direction of desktop applications, web applications and other developments. 

A project in IntelliJ **logically groups multiple files** constructing a given application or a component. 

A **Java project** contains one or more **Java source files**, configuration files and other resources. In every Java source file, there is one or more definition of types (classes or other definitions). 

In the classes there are methods (actions), and they contain a sequence of commands. It sounds complicated, but with bigger projects a structure like this one is very convenient and allows good organization of the work files.

**IntelliJ IDEA Project** represents a container, in which **a few modules are logically bound**. 

In IntelliJ IDEA, a module is an essential part of any project – it's created automatically together with a project. 

Projects can contain multiple modules – you can add new modules, group them, and unload the modules you don't need at the moment.

Modules consist of a content root and a module file. A content root is a folder where you store your code. Usually, it contains subfolders for source code, unit tests, resource files, and so on.

The hierarchical organization is much more convenient with more serious projects (let's say over 50 000 lines of code).

For **smaller projects** IntelliJ Projects and IntelliJ Modules are **complicating the work**, rather than helping, but you will get used to it quickly.
[/slide]

[slide]
# Development Environments: Desktop and Online
Install JetBrains IntelliJ IDEA Community

* https://www.jetbrains.com/idea/download/
* You can use an older version, but better use the latest

Alternative IDE (online)

* Java: https://www.compilejava.net, https://repl.it/languages/java
* C#: https://dotnetfiddle.net
* Python: https://repl.it
* JavaScript: directly use the Web browser console (press \[F12\] key)

[image assetsSrc="intro-to-programming-rplit.png" /]
[/slide]