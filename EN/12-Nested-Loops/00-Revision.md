# Revision


[slide]
# Revision

# While / Do-While Loops
The while / do-while loops are repeated while a **condition is true**:

```java live
int n = 10;
int num = 1;
while (num <= n) {
   System.out.println(num++);
}
```

``` java live
int num = 1;
int count = 0;
do {
    count++;
    num = num * 2;
} while (num <= 10);
System.out.printf("2^%d = %d%n", count, num);
```

# While or For
**While** and **for** loops help to **repeat** block of **code**.

Use `for` when you know the **number of repetitions**.

Use `while` when you don't know when the **end condition** will be met.

# The break Statement.
If we have to **interrupt** the loop execution, we do it with the operator `break`:
``` java
Scanner scanner = new Scanner(System.in);
while (true) {
   int n = Integer.parseInt(scanner.nextLine());
   
   if (n % 2 == 0) {
      break; // even number -> exit from the loop
   }

   System.out.println("The number is not even.");
}

System.out.println("Even number entered: %d", n);
```
[/slide]