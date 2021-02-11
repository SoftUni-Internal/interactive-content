[slide hideTitle]
# Infinite While Loop

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-21-22-23-24-25-Infinite-While-Loop-and-Example-with-Break-operator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We call an infinite loop one that repeats infinitely the performance of its body. 

In `while` loop the end check is a conditional expression that always returns `true`. 

```java
while (true) {
  // Commands
}
```

# Example: Infinite While Loop (Bug)
```java
String command = "Add";
while (command != "End") {
  System.out.println("Executing: " + command);
}
```

In the example above, the condition is always `true` because it is never changed.

# Example: Finite Loop (Bug Fixed)
```java
Scanner scanner = new Scanner(System.in);
String command = "Add";
while (command != "End") {
  System.out.println("Executing: " + command);

  command = scanner.nextLine();
}
```

Here, the value of the variable `command` is changed at each iteration and the **infinite loop** is avoided. 
[/slide]