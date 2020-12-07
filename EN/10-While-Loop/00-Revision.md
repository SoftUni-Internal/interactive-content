# Revision



[slide]
# Revision

## For-Loop
We can repeat a code block using a `for` loop:
```java live
for (int i = 1; i <= 10; i += 1) {
   System.out.println(i);
}
```

We can read a sequence of `n` numbers from the console this way:
```java
Scanner scanner = new Scanner(System.in);
int n = Integer.parseInt(scanner.nextLine());
for (int i = 1; i <= n; i += 1) {
   int num = Integer.parseInt(scanner.nextLine());
}
```

We can iterate over characters:
```java live
for (char ch = 'a'; ch <= 'z'; ch++) {
   System.out.println(ch);
}
```

## Increment and Decrement Operators
Increments or decrements its operand by 1.

Both operators are supported in two forms: the postfix increment operator, `x++`, `x--`, and the prefix increment operator, `++x`, `--x`.

Prefix operator means increment / decrement the value before using it, while the postfix operator means increment / decremenet the value after using it.

```java live
int i = 3;
System.out.println(i);   // output: 3
System.out.println(i++); // output: 3
System.out.println(i);   // output: 4
```

```java live
int i = 3;
System.out.println(i);   // output: 3
System.out.println(++i); // output: 4
System.out.println(i);   // output: 4
```
[/slide]