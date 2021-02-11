[slide hideTitle]
# Infinite Loops

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-30-31-32-infinite-loops-in-programming-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

So far, we were introduced to `for` loop, learning what structure it has and how it is applied. 

Now, we need to understand what an **infinite loop** is and when it occurs.

We call an **infinite loop** one that **repeats infinitely** the performance of its body. 

Infinite `for` occurs when there is **no condition to end the loop**.

Here is what a `for` loop with no end condition looks like:
```java live
for ( ; ; ) {
  System.out.println("Hello World");
}
```

Usually, it results from a programming error - for example, where the conditions for exit are incorrectly written. 

An infinite loop is not dangerous. It can, however, be annoying when it occurs.

So you have to be careful not to cause one by accident.
[/slide]

[slide hideTitle]

# Example: Infinite for Loop in Programming

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-32-infinite-loops-in-programming-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]