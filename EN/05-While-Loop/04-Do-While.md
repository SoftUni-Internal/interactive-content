[slide]
# Do-While Loop
The next type of loops we will get familiar with are the `do-while` loops. 

By structure, this type of loop resembles the while loop, but there is a significant difference between them.

[image assetsSrc="05-while-loop-use-case-do-while.png" /]

The following example shows the usage of the `do-while` loop:
```java live
int n = 0;
do {
    System.out.println(n);
    n++;
} while (n < 5);
```
It is that the `do-while` loop will execute its body at least once. Why is this happening? 

Notice that the conditional expression appears at the end of the loop, so the statement(s) in the loop executes once before the condition is tested.

In the do-while loop construction, **the condition** is always checked **after** the body. 

This way it is ensured that **the first loop iteration will execute** the code and **the check for the end of the loop** will be applied to each subsequent iteration of the `do-while`.

If the condition is true, the flow of control jumps back up to `do`, and the statement(s) in the loop executes again. 

This process repeats until the given condition becomes false.
[/slide]

[slide]
# Example: Calculating Factorial
For natural n number, calculate **n! = 1 * 2 * 3 * … * n**. 

For example, if **n = 5**, the result will be: **5! = 1 * 2 * 3 * 4 * 5 = 120**.

Here is how we can specifically calculate **factorial**:
- We create the variable `n` to which we assign an integer value taken from the console input
- We create another variable – a `fact` which initial value is 1. We will use it for the calculation and storage of the factorial
- For a loop **condition**, we will use `n > 1`, because each time we perform the calculations in the body of the loop, we will **decrease** the value of `n` by 1
- In the **body** of the loop:
    - We assign a **new value** to `fact` that is the result of **multiplying** the current `fact` value to the current value of `n`.
    - We **decrease** the value of `n` by -1.
- **Outside** the body of the loop, we print the final factorial value

This is a sample code, implementing the above described steps:
```java live
Scanner scanner = new Scanner(System.in);
int n = Integer.parseInt(scanner.nextLine());
int fact = 1;

do {
    fact = fact * n;
    n--;
} while(n > 1)

System.out.println(fact);
```
[/slide]