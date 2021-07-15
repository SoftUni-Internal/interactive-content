[slide hideTitle]
# Nested Loops

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-21-nested-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **nested loop** is a construction that consists of placing a loop (inner loop) inside the body of another loop (outer loop).

We can nest both `for` and `while` loops.

We can not only nest `for` into `for` and `while` into `while`, but `for` into `while` and vice versa:
```java
// Outer Loop
while (condition) {
   // Inner Loop 
   for (variable initialization; condition; increment) {   
       // Statements
   }
}
```
On each iteration of the outer loop, the inner loop is executed. 

This happens the following way:
* **The outer loop starts** 
  * the controlling **variable** is initialized and its body is executed (until the exit conditions are not met)
* **The inner loop is executed**
  * the inner loop variable is initialized and its body is executed (until the exit conditions are not met)
* When reaching the specified **end value** the program goes back a step up and continues executing the outer loop
  * the outer loop variable goes one step forward; if the outer loop's exit condition is not met - the inner loop contained in its body is executed
* This is repeated until the outer loop reaches its exit condition
[/slide]

[slide hideTitle]
# Example: Rectangle of Stars

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-19-20-Nested-loops-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is an **example** to help us understand this concept. 

The aim is to print out a rectangle made of `n` * `n` stars in which the rows and columns making up the rectangle are rendered using two nested loops.

```java live
int n = 5;
for (int r = 1; r <= n; r++) {
    for (int c = 1; c <= n; c++) {
        System.out.print("*");
    }

    System.out.println();
}
```

Let us look at the example above. 

Upon initializing **the outer loop** its **body** (containing **the nested loop**) is executed.

This prints out one row containing an `n` number of stars. 

After **the inner** loop **finishes** running at the first iteration of the **outer loop** control is **transferred back to the outer loop**, i.e. it will print an empty row to the console. 

Afterwards, the variable of the **outer loop** will be **updated** and the **second loop** will be executed again. 

The inner loop will run as many times as the body of the outer loop runs, in this case - `n` number of times.
[/slide]

[slide hideTitle]

# Multiple Levels of Nested Loops

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-22-multiple-levels-of-nested-loops-and-demo -,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

It is possible to have more than one level of nested loops.

Note that loop variables must use different names on consecutive loop levels.

```java
for (int hour = 0; hour <= 23; hour++) {
  for (int minute = 0; minute < 59; minute++) {
    for (int second = 0; second < 59; second++) {
      
    }
  }
}
```

[/slide]
