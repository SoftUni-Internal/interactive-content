// sectionId: "Javascript::Programming-Basics::Introduction-to-Programming::VS-Code"

[slide hideTitle]
# Development Environments (IDE)

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-17-18-19-Integrated-Development-Environments-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To program, we need an **Integrated Development Environment** (IDE). 

An **Integrated Development Environment** (or IDE) is software for building applications that combines common developer tools.

In the development environment, we can **write code**, **compile**, and **execute programs**. 

Development environments usually integrate a **text editor**, a **programming language**, a **compiler** or an **interpreter**, and a runtime environment for **executing programs**.

They also may contain a **debugger** for tracking the program and seeking out errors, tools for **user interface design** or other utilities, and add-ons. 

Development environments are convenient, because they integrate **everything necessary for the development** of a program, in some cases, even without the need for external tools.

If we do not use an IDE, we would have to write the code in a **text editor**, compile it with a command on the console, run it with another console command, and eventually, include additional commands whenever needed, which is very time-consuming. 

For programming with **JavaScript**, the most commonly used IDE is [Visual Studio Code](https://code.visualstudio.com), which is developed and distributed freely by Microsoft.

Some of the **popular** alternatives to Visual Studio Code are: 

- [WebStorm](https://www.jetbrains.com/webstorm/download)
- [Atom](https://atom.io)
- [NetBeans](https://netbeans.org/downloads/)
- [Visual Studio](https://visualstudio.microsoft.com/downloads/)
- [Eclipse](https://www.eclipse.org/downloads/)

In this course, we will use **Visual Studio Code.** 

This is how Visual Studio Code looks like:

[image assetsSrc="intro-to-programming-6.png" /]

[/slide]

[slide hideTitle]
# Installing Node.js and Visual Studio Code

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-20-21-22-Installing-NodeJS-and-Visual-Studio-Code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We need **Node.js** so that we can execute JavaScript code outside of a browser.

* Server-side JS runtime

[image assetsSrc="intro-to-programming-3.png" /]

You can download [Node.js](https://nodejs.org/en/download/).

[image assetsSrc="intro-to-programming-install-nodejs-1.png" /]

Select your operating system and go on with installing.
[image assetsSrc="intro-to-programming-install-nodejs-2.png" /]

Let us continue with the installation of the integrated environment **Microsoft Visual Studio Code**.

Installing later versions of Visual Studio Code should be very similar.

[Visual Studio Code](https://code.visualstudio.com/download) (VS Code) is distributed freely by Microsoft.

The next lines describe in detail the steps for the installation of Visual Studio Code. 

After we download the installation file and start it, the following screen will appear:
[image assetsSrc="intro-to-programming-install-vscode-1.png" /]

We press the `[Next]` button and we will see the screen below:
[image assetsSrc="intro-to-programming-install-vscode-2.png" /]

We can choose a destination location or leave the default one. Then we press the `[Next]` button again.
[image assetsSrc="intro-to-programming-install-vscode-3.png" /]

Next, we have to specify a name for the program folder that will be created in the Start Menu. 

The next step is to put check marks on these tasks:
[image assetsSrc="intro-to-programming-install-vscode-4.png" /]

VS is now ready for installation. We press the `[Install]` button. This is everything.
[image assetsSrc="intro-to-programming-install-vscode-5.png" /]

Installation of Visual Studio begins, and a screen like the one below will appear:
[image assetsSrc="intro-to-programming-install-vscode-6.png" /]

After Visual Studio is installed, the following screen will appear. Press the `[Launch]` button to start VS.
[image assetsSrc="intro-to-programming-install-vscode-7.png" /]

Upon **starting Visual Studio Code**, the main view is displayed. 

[image assetsSrc="intro-to-programming-install-vscode-8.png" /]

We are ready to start using Visual Studio Code.
[/slide]

[slide hideTitle]
# Development Environments: Desktop and Online

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-23-Development-Environments-Desktop-And-Online-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

If we do not have Visual Studio Code installed, we can use an alternative IDE (online)

* JavaScript: directly use the browser console (press the \[F12\] key)
* [C#](https://dotnetfiddle.net)
* [Java](https://compilejava.net)
* [Python](https://repl.it)

[image assetsSrc="intro-to-programming-1.png" /]

[/slide]

[slide hideTitle]
# What Visual Studio Code is

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-25-What-is-Visual-Studio-Code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Visual Studio Code is an open-source code editor.

It can be used with programming languages like **Java**, **JavaScript**, **Go**, **Node.js**, and many more.

Visual Studio Code allows users to open one or more directories. 

This allows it to operate as a **cross-language** editor for any programming language.

We can browse and install **extensions** from within Visual Studio Code. 


[/slide]

[slide hideTitle]
# Running VSC and Recommended Extensions

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-27-28-Running-VSC-and-recommended-extensions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Visual Studio Code has many extensions that can make our working flow more pleasant.

- **Beautify** - formats files like HTML. The unformatted code in these files is converted into a formatted one
 
We must enable this setting in the VS Code preferences tab and it will automatically format all the code.

- **ESLint** - analyzes our JavaScript code and helps us to fix the errors

- **JSHint** -  requires  developers to use JavaScript coding conventions

It helps to detect potential bugs in JavaScript code.

We can use different extensions, depending on what type of project we are working on.



[/slide]

[slide hideTitle]
# Projects in VSC


[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-29-30-Projects-in-VSC-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The video above is showing how we can set up a basic project.

First, we need an empty folder. Then, we drag the folder into the Visual Studio Code.

The VS Code will create an empty project for us.

Next, we need to create a new file and name it.

Since Visual Studio Code must know what type of language to use, the **extension** `.js` is very important.

After we finished creating our program, we have to execute the code with **Note.js**.


[/slide]
