// sectionId: "Javascript::Programming-Basics::Introduction-to-Programming::Console-App-In-VS-Code"

[slide hideTitle]
# Console App in VS Code

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-30-31-Creating-a-console-application-in-VSC-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We already have Visual Studio Code installed, so we can open it. 

We create a folder for our project and we open it from VS Code:

`[File] -> [Open Folder]`

[image assetsSrc="intro-to-programming-4.png" /]

We create a file called **hello.js** that will hold our program's source code:

[image assetsSrc="intro-to-programming-5.png" /]

[/slide]

[slide hideTitle]
# Writing the Program Code

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-32-32-Demo-Writing-the-program-code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The source code of the JS program should be written inside a function, which we later invoke to run it. 

Press `[Enter]` after **the opening parentheses** `{` and **start writing**.

The code of the program is written inwards, as this is a part of shaping up the text for convenience during a review and/or debugging. 

Write the following command: 

```js
console.log("Hello, JavaScript!");
```

Here is how our program should look like in Visual Studio Code: 

[image assetsSrc="intro-to-programming-9.png" /]

The command `console.log('Hello JS')` in JavaScript means to print something out `log(…)` to the console `console`. In our case, it means to print the text message **Hello JS**, which we should surround by quotation marks to clarify that this is a text.

At the end of each command in the JavaScript language, the symbol `;` is being put, which means the current command ends (it does not continue on the next line).

[/slide]

[slide hideTitle]
# Starting the Program

[video src="https://videos.softuni.org/hls/javascript-basics/00.Introduction-to-Programming/EN/interactive-JS-PB-intorduction-to-programming-33-Starting-the-program-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To start the program, press `[Ctrl + F5]`

The result will appear in the `[Debug Console]` tab
[image assetsSrc="intro-to-programming-6.png" /]

As we can see, the output of the program is the following text message:
```
Hello, JavaScript!
```
In VS Code, by pressing `[F5]` or `[Ctrl+F5]`, we will run our earliest created `.js` file.

If we have multiple `.js` files in VS Code and if we want to run the current file with `[F5]` or `[Ctrl + F5]`, we need to edit the launch configuration.

[image assetsSrc="intro-to-programming-7.png" /]

Alternatively, use the "Code Runner" extension
[image assetsSrc="intro-to-programming-8.png" /]
[/slide]

