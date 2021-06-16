# Event Loop

[slide hideTitle]

# The Event Loop

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/Intro-to-Node-JS/interactive-js-backend-nodejs-9-10-event-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The event loop in JavaScript **detects**, **collects** and **orders** events.

It is responsible for the **function execution order**.

As the **loop** name implies, it is **continuously looking** for new events to handle.

Once a function is called, or an event is detected, a function is placed **inside the stack**.

That function stays there **until execution.**

Here is a visual representation of how the event loop operates:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-4.png" /]

[/slide]

[slide hideTitle]

# Stack Calls

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/Intro-to-Node-JS/interactive-js-backend-nodejs-11-42-stack-calls-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

As mentioned above, functions are **added to the call stack** where they **start being executed**.

In the stack, functions are executed **top-to-bottom**. 

This means that **the most recently added function will be executed first**.

The following graphic illustrates the behavior of two functions that are called one after another:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-5.gif" /]

Functions can also be called **within each other**.

In that case, a function is completed **once every other function inside it has been executed**.

Events that have **event listeners** add messages to a message queue.

Every message has a **handler function**.

Here is how it happens:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-6.gif" /]
[/slide]
