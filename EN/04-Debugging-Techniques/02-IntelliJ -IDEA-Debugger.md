# IntelliJ IDEA Debugger

[slide]

# How to Debug a Process

**IntelliJ IDE** gives you a lot of tools to debug your application
- Adding **breakpoints**
- Visualize the **program flow**
- Control the **flow of execution**
- **Data tips**
- **Watch variables**
- Debugging **multithreaded programs**
- And many more…

## Starting a process of debugging

- Starting a process under the IntelliJ debugger
- Attaching to an already running process
    - Without a solution loaded you can still debug
    - Useful when solution isn't readily available
    - **Ctrl + Alt + F5**

[image assetsSrc="debugging-techniques-example(1).png" /]

## Debugging a Project

- Right click in **main** method, Debug `{class}.main()`
    - **Shift + F9** is a shortcut
- Easier access to the source code and symbols since its loaded in the solution
- Certain differences exist in comparison to debugging an already running process

**Debug Windows**

- Debug Windows are the means to introspect on the state of a process
- Opens a new window with the selected information in it
- Window categories
    - Frames / Threads
    - Variables
    - Watches
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

    - Debugger -> Data Views -> **Java**
    - Compiler -> **Java Compiler**
- **Project Structure** (Ctrl + Shift + Alt + S)


[/slide]

[slide]

# Breakpoints

Ability to stop execution based on certain criteria is key when debugging.
- When a function is hit
- When data changes
- When a specific thread hits a function
- Much more…

**IntelliJ's debugger** has a huge feature set when it comes to breakpoints.

- Stops execution at a specific instruction (line of code)
    - Can be set using:
      **Ctrl + F8** shortcut or 

      clicking on the **left most side** of the source code window

- By default, the breakpoint will hit every time execution reaches the line of the code
- Additional capabilities: condition, hit count, value changed, when hit, filters
- Managing breakpoint in the breakpoint window
    - Adding breakpoints
    - Removing or **disabling** breakpoints
    - Open Breakpoints window - **Ctrl + Shift + F8**

[image assetsSrc="debugging-techniques-example(2).png" /]
[/slide]