[slide hideTitle]
# Infinite While Loop

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-21-22-23-24-25-Infinite-While-Loop-and-Example-with-Break-operator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An `infinite` loop is an instruction sequence that loops endlessly when a terminating condition has not been set or cannot occur. 

This happens when the condition in the **while-loop** always evaluates to `true`.

## Example:
```java
while (true) {
  // Commands
}
```

## Example: Infinite While-Loop (Bug)
```java
String command = "Add";
while (command != "End") {
  System.out.println("Executing: " + command);
}
```

In this example, the condition will always be `true` because the value of the `command` variable will never be changed.

## Example: Finite Loop (Bug Fixed)
```java
Scanner scanner = new Scanner(System.in);
String command = "Add";
while (command != "End") {
  System.out.println("Executing: " + command);

  command = scanner.nextLine();
}
```

In this example, the value of the `command` variable will be changed at each iteration so that the loop will **not** be an **infinite** one.
[/slide]
