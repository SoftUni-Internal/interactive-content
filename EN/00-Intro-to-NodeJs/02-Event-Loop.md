# Event Loop

[slide]

# The Event Loop

The event loop in JavaScript **detects**, **collects** and **orders** events.

It is responsible for the **function execution order**.

It is called a **loop** because it is **constantly looking** for new events to handle.

Once a function is called or an event is detected, a function is placed **inside the stack** where it **stays until execution.**

Here is a visual representation of how the event loop operates:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-4.gif" /]

[/slide]

[slide]

# Stack Calls

As mentioned above, functions are **added to the call stack** where they **start executing**.

In the stack, functions are executed **top-to-bottom**. This means that **the most recently added function will be executed first**.

This is the behavior for two functions called one after another:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-5.gif" /]

Functions can also be called **within each other**.

In this case, a function is completed **once every other function inside it has been executed**.

Events that have **event listeners** add messages to a message queue.

Every message has a **handler function**.

Here is how it happens:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-6.gif" /]
[/slide]
