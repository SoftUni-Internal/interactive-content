# Event Loop

[slide]
# Don't Make the Thread Wait

_Download the resources needed for this lesson from here:_ [Mega.nz](https://mega.nz/file/6VAgTbqT#eTEsCGG6h0WErbhKN9PgO0S5NRk2NCSHhk5uoC-O4YU)

The **event loop** is the fundamental of how JavaSvipt function.

Mostly JavaScript is **executed in the browser.**

JavaScript is a s**ingle thread language**, it works only on **one thread.**

Besides that JavaScipt can work on **several tasks** at the same time, using a **callback**.

The callback is **one or more functions that can be invoked in the future**, that way it's possible to execute parallel operations.

The way JavaScript allows us to start an operation, then to **start another operation**, and in some time into the future to go back and collect the information from the first operation.

[/slide]

[slide]

# Stack Execution

In this example, we see the two types of memories that we have: The **stack** and The **heap.**

In the stack, everything is **organized in scopes.**

Each function in the stack **has its own scope.**

The function in the stack **can invoke another function.**

The second function **goes into the stack** as well with its own function scope.

That way each function with its **scope goes into the stack.** 

And yet we can invoke another function.

When we hit the `return` statement, we go back to the previous function.

When the function scope finishes its execution then t**here is no more reference.**

The function disappears and the program **goes back to the next function in the stack** and so on until there are no more functions in the stack.

This is the **synchronous function execution**, this is how we've been executing our programs so far.

[image assetsSrc="DOM-Manipulation.gif" /]

[/slide]

[slide]
# The Event Loop

In this example, **we have again a function**, which invokes another function.

But this time the function creates an **event into the event queue.**

We continue with the s**tandard synchronous operations** until the stack goes empty.

At some point, **the event creates a new function**, which is a **callback function**, which goes into the stack, and this function is executed.

This is a very **brief overview** of the asynchronous code execution.

[image assetsSrc="DOM-Manipulation(1).gif" /]

[/slide]