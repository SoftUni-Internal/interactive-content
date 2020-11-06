[slide]
# Revision

# While / Do-While Loops
The while / do-while loops are repeated while a **condition is true**:

```js live
let n = 10;
let num = 1;
while (num <= n) {
   console.log(num++);
}
```

``` js live
let num = 1;
let count = 0;
do {
    count++;
    num = num * 2;
} while (num <= 10);
console.log(`2^${count} = ${num}`);
```

# While or For
**While** and **for** loops help to **repeat** block of **code**.

Use `for` when you know the **number of repetitions**.

Use `while` when you don't know when the **end condition** will be met.

# The break Statement.
If we have to **interrupt** the loop execution, we do it with the operator `break`:
``` js
while (true) {
   let n = Number(input.shift());
   
   if (n % 2 == 0) {
      break; // even number -> exit from the loop
   }

   console.log("The number is not even.");
}

console.log(`Even number entered: ${n}`);
```
[/slide]
