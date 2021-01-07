# Nested Loops

[slide]
# Video

[vimeo-video startTimeInSeconds="1315" endTimeInSeconds="2900"]
[stream language="EN" videoId="345011935" default /]
[stream language="RO" videoId="393861306"  /]
[/vimeo-video]

[/slide]

[slide]
# Nested Loops
A **nested loop** is a construction where **in the body of one loop** (outer one) **stays another loop** (inner one). 

There are nested `for` and `while` loops.

You can not only nest `for` into `for` and `while` into `while`, but `for` into `while` and vice versa:
```java
// Outer Loop
while (condition) {
   // Inner Loop 
   for (variable initialization; condition; increment) {   
       // Statements
   }
}
```
In each iteration of the outer loop, **the whole** inner loop is executed. 

This happens the following way:
* When nested loops start executing, **the outer loop starts** first: 
  * the controlling **variable** is initialized and after a check for ending the loop the code in its body is executed
* After that, **the inner loop is executed**: 
  * the controlling variables start position is initialized, a check for ending the loop is made and the code in its body is executed.
* When reaching the specified value for **ending the loop**, the program goes back one step up and continues executing the previous (outer) loop:
  * the controlling variable of the outer loop changes with one step, a check is made to see if the condition for ending the loop is met and **a new execution of the nested (inner) loop is started**
* This is repeated until the variable of the outer loop meets the condition to **end the loop**
[/slide]

[slide]
# Nested Loops – Examples

Here is an **example** that illustrates nested loops. 

The aim is again to print a rectangle made of `n` * `n` stars, in which for each row a loop iterates from **1** to `n`, and for each column a nested loop is executed from **1** to * `n`:

```java live
int n = 5;
for (int r = 1; r <= n; r++) {
    for (int c = 1; c <= n; c++) {
        System.out.print("*");
    }

    System.out.println();
}
```

Let's look at the example above. 

After initializing **the first (outer) loop**, its **body**, which contains **the second (nested) loop** starts executing. 

By itself it prints on one row `n` number of stars. 

After **the inner** loop **finishes** executing at the first iteration of the outer one, **the first loop will continue**, i.e. it will print an empty row on the console. 

**After that**, the variable of **the first** loop will be **renewed** and the whole **second** loop will be executed again. 

The inner loop will execute as many times as the body of the outer loop executes, in this case `n` times.
[/slide]