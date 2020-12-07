# Debugging

[slide]
# Video
[vimeo-video startTimeInSeconds="4211" endTimeInSeconds="4582"]
[stream language="EN" videoId="341539841/456a08950e" default /]
[stream language="RO" videoId="387657941/b7f1ede8f0"  /]
[/vimeo-video]

[/slide]

[slide]
# Debugging
So far, we wrote a lot of code, and there were some mistakes in it, right? Now we will show a tool that can help us find mistakes more easily: **the debugger**.

# What is "Debugging"?
**Debugging** is the process of "**attaching**" to the program execution, which allows us to **track step by step the process**. 

We can track **line by line** what happens in our program, what path it follows, what are the values of defined variables at each step of debugging, and many other things that allow us to detect errors (**bugs**).

[image assetsSrc="conditional-statements-breakpoint.png" /]
[image assetsSrc="conditional-statements-variables-watch.png" /]

# Debugging in IntelliJ IDEA 
By pressing the `[Shift + F9]` button, we run the program in **debug mode**. We move to **the next line** with `[F7]`.

[image assetsSrc="conditional-statements-debug.png" /]

With `[Ctrl + F8]` we create the so-called breakpoints, that we can reach directly using `[Ctrl + F8]` when we start the program.
[/slide]