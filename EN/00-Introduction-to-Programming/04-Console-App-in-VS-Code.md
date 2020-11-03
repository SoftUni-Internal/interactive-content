# Console App in VS Code

[slide]
# Console App in VS Code
We already have Visual Studio Code and we can start it. 

Create a folder for your project and open it from VS Code:

\[File\] -> \[Open Folder\]

[image src="https://github.com/AlenPaunov/pb-interactive-js/blob/master/assets/intro-to-programming-4.png"/]

Create a file hello.js to hold your program's source code:

[image src="https://github.com/AlenPaunov/pb-interactive-js/blob/master/assets/intro-to-programming-5.png"/]

[/slide]

[slide]
# Writing the Program Code
The source code of the JS program is written inside a function, which we later invoke.

Press `[Enter]` after **the opening parentheses** `{` and **start writing**.

The code of the program is written **inwards**, as this is a part of shaping up the text for convenience during a review and/or debugging.


Write the following command:
```js
console.log("Hello, JavaScript!");
```

Here is how our program should look like in Visual Studio Code:

[image src="https://github.com/AtanasovAtanas/pb-interactive-js/blob/master/assets/intro-to-programming-9.png"/]

The command `console.log("Hello JS")` in the JavaScript language means to execute printing (`log(…)`) on the console (`console`) and to print the text message `Hello JS`, which we should surround by quotation marks, in order to clarify that this is a text. In the end of each command in the JS language the symbol `;` is being put and it says that the command ends in that place (it doesn't continue on the next line).

This command is very typical in programming: we say a given **object** should be found (in this case the console) and some **action** should be executed upon it (in this case it is printing something that is given inside the brackets). 

[/slide]

[slide]
# Starting the Program
To start the program, press \[Ctrl + F5\]

The result will appear in the \[Debug Console\] tab

[image src="https://github.com/AlenPaunov/pb-interactive-js/blob/master/assets/intro-to-programming-6.png"/]

As you can see the output from the program is the following text message:
```
Hello, JavaScript!
```
In VS Code \[F5\] / \[Ctrl+F5\] keys runs your earliest created .js file

If you have multiple .js files in VS Code, you may want to start the current file with \[F5\] / \[Ctrl + F5\] -> edit the launch configuration

[image src="https://github.com/AlenPaunov/pb-interactive-js/blob/master/assets/intro-to-programming-7.png"/]

Alternatively, use the "Code Runner" extension

[image src="https://github.com/AlenPaunov/pb-interactive-js/blob/master/assets/intro-to-programming-8.png"/]
[/slide]