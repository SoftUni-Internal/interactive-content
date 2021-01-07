[slide]
# Console App in VS Code

[vimeo-video]
[stream language="EN" videoId="486835903/f8f0434f30" default /]
[stream language="RO" videoId="486835903/f8f0434f30"  /]
[/video-vimeo]

We already have Visual Studio Code and we can start it. 

Create a folder for your project and open it from VS Code:

\[File\] -> \[Open Folder\]

[image assetsSrc="intro-to-programming-4.png" /]

Create a file hello.js to hold your program's source code:

[image assetsSrc="intro-to-programming-5.png" /]

[/slide]

[slide]
# Writing the Program Code

[vimeo-video]
[stream language="EN" videoId="486835933/467020ce79" default /]
[stream language="RO" videoId="486835933/467020ce79"  /]
[/video-vimeo]

The source code of the JS program should be written inside a function, which we later invoke in order to run it. 

Press `[Enter]` after **the opening parentheses** `{` and **start writing**.

The code of the program is written inwards, as this is a part of shaping up the text for convenience during a review and/or debugging. 

Write the following command: 
```js
console.log("Hello, JavaScript!");
```
Here is how our program should look like in Visual Studio Code: 

[image assetsSrc="intro-to-programming-9.png" /]

The command `console.log("Hello JS")` in JavaScript means to print something out `log(…)` on the console `console` in our case to print the text message **Hello JS**, which we should surround by quotation marks.
 
In order to clarify that this is a text. 

In the end of each command in the JavaScript language the symbol `;` is being put and it says that the current command ends (it doesn't continue on the next line). 

This command is very typical in programming: we say a given **object** should be found (in this case the console) and some **action** should be executed in it (in this case it is printing the text in the brackets).

[/slide]

[slide]
# Starting the Program

[vimeo-video]
[stream language="EN" videoId="486836101/b0f9ba7bd8" default /]
[stream language="RO" videoId="486836101/b0f9ba7bd8"  /]
[/video-vimeo]

To start the program, press \[Ctrl + F5\]

The result will appear in the \[Debug Console\] tab
[image assetsSrc="intro-to-programming-6.png" /]

As you can see the output of the program is the following text message:
```
Hello, JavaScript!
```
In VS Code \[F5\] / \[Ctrl+F5\] keys runs your earliest created `.js` file

If you have multiple `.js` files in VS Code, you may want to start the current file with \[F5\] / \[Ctrl + F5\] \-\> edit the launch configuration
[image assetsSrc="intro-to-programming-7.png" /]

Alternatively, use the "Code Runner" extension
[image assetsSrc="intro-to-programming-8.png" /]
[/slide]

