# Event Loop

[slide]
# Reduce a thread's waiting time with callbacks

_Download the resources needed for this lesson from here:_ [Mega.nz](https://mega.nz/file/6VAgTbqT#eTEsCGG6h0WErbhKN9PgO0S5NRk2NCSHhk5uoC-O4YU)

First of all, **JavaScript** is executed mostly **in the browser.**

The **event loop** is a fundamental concept in JavaScript asynchronous programming.

**JavaScript** executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading. 

JavaScript is an **event-driven** language. 

This means that instead of waiting for a response before moving on, **JavaScript** will keep executing while listening for other events, and that is why we need callbacks.

A **callback** function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.


[/slide]

[slide]

# Stack Execution

In this example, we can see the two types of memories: the **Stack** and the **Heap**.

**The Heap** is the place where objects are stored when we define variables.

**The Stacks** holds our function calls. 

On each new function call, it is pushed on top of the stack.

In the **Stack**, everything is **organized in scopes**, so that each function in the stack **has its own scope.**

**The Call stack** is a mechanism "JavaScript" uses to keep track of functions.

When we call a function, "JavaScript" will **add** that function to the **call stack**. 
 
If this function calls another function, "JavaScript" will add that function to the **call stack** as well, above the first function.

This process will repeat with any other function that will be called by the previous function. 

When one function is finished, "JavaScript" will **remove** that function from the **call stack**.

There is an example:


[image assetsSrc="DOM-Manipulation.gif" /]

[/slide]

[slide]
# The Event Loop

In this example, **we have a function**, which invokes another function, but this time the function creates an **event into the event queue**.

We continue with the standard **synchronous operations** until the Stack goes empty.

At some point, **the event creates a new function** that is a **callback function**, which goes into the Stack, where it is executed.

This is a **brief overview** of the asynchronous code execution.


[image assetsSrc="Dom-Manipulation(1).gif" /]

[/slide]