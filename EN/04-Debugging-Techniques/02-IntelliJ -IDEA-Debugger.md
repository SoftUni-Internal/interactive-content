# IntelliJ IDEA Debugger

[slide hideTitle]

# How to Debug a Process

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-10-how-to-debug-a-process-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Almost every **IDE** has a integrated debugger.

The debugger itself is a tool, that allows you to execute your code in a **strictly** controlled environment.

**IntelliJ IDE** gives you a lot of tools to debug your application

- Adding **breakpoints**
  * click the gutter at the executable line of code where you want to set the breakpoint
  * alternatively, place the caret at the line and press Ctrl+F8
- Visualize the **program flow**
- Control the **flow of execution**
- **Data tips**
- **Watch variables**
- Debugging **multithreaded programs**
- And many more…



[/slide]

[slide hideTitle]

# Starting a Process of Debugging

Starting a session using the debugger is similar to the program in normal mode.

Since the debugger logic is encapsulated behind the scenes, you do not have to configure anything specific.

- Starting a process under the IntelliJ debugger
- Attaching to an already running process
    - without a solution loaded you can still debug
    - useful when solution isn't readily available
    - **Ctrl + Alt + F5**

[image assetsSrc="debugging-techniques-example(1).png" /]


[/slide]


[slide hideTitle]
# Debugging a Project

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-11-debugging-a-project-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


- Right click in **main** method, Debug `{class}.main()`
    - **Shift + F9** is a shortcut
- Easier access to the source code and symbols since its loaded in the solution
- Certain differences exist in comparison to debugging an already running process

**Debug Windows**

- Debug Windows are the means to introspect on the state of a process
- Opens a new window with the selected information in it
- Window categories
    - frames / threads
    - variables
    - watches
- Accessible from Debug window

**Debugging Toolbar**

- Convenient shortcut to common debugging tasks
    - **Step over** – F8
    - **Force Step Into** – through the method calls - Alt + Shift + F7
    - **Step Out** – Shift + F8
    - **Step into** – F7
    - **etc.**
    

**Controlling Execution**

- By default, an app will run uninterrupted (and stop on exception or breakpoint)
- Debugging is all about looking at the state of the process
- Controlling execution allows:
    - **Pausing execution**
    - **Resuming execution**

## Options and Settings

- IntelliJ offers quite a few knobs and tweaks in the debugging experience
- Options and settings are available via Settings/Preferences -> 

    Build, Execution and Deployment (Ctrl + Alt + S):

    - debugger -> data views -> **Java**
    - compiler -> **Java Compiler**
- **Project Structure** (Ctrl + Shift + Alt + S)


[/slide]

[slide hideTitle]

# Breakpoints

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-16-17-breakpoints-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Ability to stop execution based on certain criteria is key when debugging.
- When a function is hit
- When data changes
- When a specific thread hits a function
- Much more…

**IntelliJ's debugger** has a huge feature set when it comes to breakpoints.

- Stops execution at a specific instruction (line of code)
    - can be set using:
      **Ctrl + F8** shortcut or 

      clicking on the **left most side** of the source code window

- By default, the breakpoint will hit every time execution reaches the line of the code
- Additional capabilities: condition, hit count, value changed, when hit, filters
- Managing breakpoint in the breakpoint window
    - adding breakpoints
    - removing or **disabling** breakpoints
    - open Breakpoints window - **Ctrl + Shift + F8**

[image assetsSrc="debugging-techniques-example(2).png" /]

[/slide]