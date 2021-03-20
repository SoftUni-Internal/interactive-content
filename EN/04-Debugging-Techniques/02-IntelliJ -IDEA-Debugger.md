# IntelliJ IDEA Debugger

[slide hideTitle]

# How to Debug a Process

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-10-how-to-debug-a-process-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**IntelliJ IDEA** has a built-in debugging tool.

It is helpful because it allows us to:

- Add **breakpoints**
    - we add **breakpoints** when we want to stop the program on a specific line of code

- Visualize the **flow of the program**
    - this means to see, for example, how many times the **for-loop** will iterate

- Control the **execution flow**
    - this allows us to **control** step by step the **flow** of the **program execution**
- Track the **values** stored in the **variables**

[/slide]

[slide hideTitle]


# Starting a Process of Debugging


To run the debugger in **InteliJ IDEA** we have to press **Ctrl + Alt + F5**.

After that, a pop-up list will appear, from which we have to select the process we want.

Finally, we can debug our program.

We can run the debugger on a program which is not running.

Also, we can attach to a program, which is **not** directly available in **IntelliJ IDEA**.

[image assetsSrc="debugging-techniques-example(1).png" /]


[/slide]


[slide hideTitle]
# Debugging a Project 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-11-debugging-a-project-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To run the program in **debug mode**, we need to right click and choose the "**Debug** \{**the name of the class**\}**.main()**"

We have another way to run the program in **debug mode**.

There is a shortcut, which is - "**Shift + F9**.

The **debug mode** gives us control over the execution flow.

Also, it allows us to observe the values of the variables.


## Debug Windows

The **Debug Window** shows us the debugging session.

In the window, there is tab for the **console** and tab for the **debugger**.

In the console we can put the needed input.
 
The **Debugger** tab is shows the steps the program goes through.

There are different categories in the window that we can observe:

- Frames / Threads

- Variables

- Watches

## Debugging Toolbar

The **debug mode** of **InteliJ IDEA** allows us to control the program execution step-by-step.

We can do that from the toolbar or by shortcuts.

From the toolbar we can **skip**, **step over**, **step into**, etc.

Here are the shortcuts for the most used actions:

- **Step over** - "**F8**"
- **Step Out** - "**Shift + F8**"
- **Step into** - "**F7**"
- **Resume** - ⏯
- **Pause**: [image assetsSrc="debugging-techniques-example(5).png" /]

## Controlling Execution

By default, an app will run uninterrupted when it is in **debug mode**.

The behavior will change when we **pause** the program or a **breakpoint** is reached.

When we control the program execution, we can get a better view of the program **state**.

That allows us to see what exactly is happening in our program.

When we are examining the program state, we control the **execution flow** of the program.

That means that we use the **debugging toolbar**.

## Options and Settings

To use the debugger, we need to set a few things.

The first one is the **Data views** and the second one is the **Compiler**.

We can find these pages in the **Build, Execution and Deployment** section of the **Settings**.

The full paths for both setting are:
 
- "**Setting** \-\> **Build, Execution and Deployment** \-\> **Debugger** \-\> **Data Types** \-\> **Java**"

- "**Setting** \-\> **Build, Execution and Deployment** \-\> **Compiler** \-\> **Java Compiler**"

If we want to debug a project, we can change the **project structure**.

From the **Project Structure** option in the **File** menu, or by a shortcut - "**Ctrl + Shift + Alt + S**"

[/slide]

[slide hideTitle]

# Breakpoints

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-16-17-breakpoints-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **breakpoints** gives us the ability to stop the program on a specific action.

We can add **breakpoints** by clicking on the **left side** of the **source code window**.

Or we can use the "**Ctrl + F8**" shortcut when we are on the line where we want to add a breakpoint.

The **IntelliJ debugger** has many built-in features that we can take advantage of when using breakpoints.

For example, we can set specific options under which to stop the program.

Some of them are **Conditions**, **Filters**, **Remove once hit**, and many more.

To set these options, we need to access the **Breakpoint Window**.

We can do that by **right-clicking breakpoint** or by a **shortcut on the line** where the breakpoint is.

The shortcut is: "**Ctrl + Shift + F8**".

In the breakpoint window, we can not only **remove** or **disable** breakpoints, but we can **move** them.

[image assetsSrc="debugging-techniques-example(2).png" /]

[/slide]