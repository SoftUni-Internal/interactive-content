[slide hideTitle]
# The Break Statement

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-18-19-20-Break-operator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `break` statement terminates the loop immediately and the control of the program moves on to any code logic following the loop. 

This means that the current iteration of the loop will not be completed and the rest of the code in the body of the loop (if there is any) will not be executed.

It is important to note that the `break` statement terminates the innermost loop. 

In this example, the `break` statement will stop the execution of the loop when the input is an **odd** number:
```java
Scanner scanner = new Scanner(System.in);
while (true) {
  int number = Integer.parseInt(scanner.nextLine());
  
  if (number % 2 != 0) {
    break;
  }
}
```
When it comes to using **infinite** loops intentionally we can use the `break` statement to terminate the loop if a given condition is met. 
[/slide]
