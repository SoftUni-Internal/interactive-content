# Infinite While Loop

[slide]
# Video

[vimeo-video startTimeInSeconds="2951" endTimeInSeconds="3185"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]

[/slide]

[slide]
# Infinite While Loop
We call an infinite loop one that repeats infinitely the performance of its body. 

In `while` and `do-while` loops the end check is a conditional expression that always returns `true`. 

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