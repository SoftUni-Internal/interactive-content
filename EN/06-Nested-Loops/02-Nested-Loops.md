[slide]
# Nested Loops

A nested loop is a construction with which one loop is placed inside \(inner\) the body of another one \(outer\). 

There can be both nested `for` and `while` loops. 

You can not only nest `for` in `for` and `while` in `while`, but also for in `while` and vice versa: 

```js
// Outer Loop
while (condition) {
   // Inner Loop 
   for (variable initialization; condition; increment) {   
       // Statements
   }
}
```
This happens the following way: 

* When nested loops start executing, the outer loop starts first: 

    * the controlling variable is initialized and after checking the loop condition, the code in its body is executed 

* After that, the inner loop is executed: 

    * the controlling variables start position is initialized, the loop condition is checked, the code in its body is executed. 

* When the specified value for **ending the loop is reached**, the program goes back one step up and continues executing the previous (outer) loop: 

    * the controlling variable of the outer loop changes with a step, a check is performed to see if the end condition is met, if not (inner) loop is repeated 

* This is repeated until the variable of the outer loop meets the condition, ending the loop 

[/slide]

[slide]
# Nested Loops – Examples

Here is an **example** that illustrates nested loops. 

The aim is again to print a rectangle made of `n` * `n` stars, in which for each row a loop iterates from **1** to `n`, and for each column a nested loop is executed from **1** to * `n`:

```js live
let n = 3;
let rowLine = '';
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    rowLine += ' *';
  }
  rowLine += '\n';
}
console.log(rowLine);
```

Let's look at the example above. 
After initializing **the first (outer) loop**, its **body**, which contains **the second (nested) loop** starts running. 

It prints an n number of stars on a row. 

After the **inner loop** finishes on the first iteration of the outer one, the outer loop will continue, i.e. an empty row will be printed out. 

After that, the variable of **the first** loop will get incremented and **the second** loop will be executed again. 

The inner loop will be repeated as many times as the body of the outer loop executes, in this case n times. 
[/slide]
