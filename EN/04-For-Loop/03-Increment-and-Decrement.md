[slide hideTitle]
# Increment and Decrement Operators

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-7-9-increment-and-decrement-oprator-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



The unary increment operator `++` increases its operand by 1, while the unary decrement operator `--` decreases it by 1.

The increment and decrement operators have two possible forms: 

* The postfix increment/decrement operator, `x++`/`x--` 
* The prefix increment/decrement operator, `++x`/`--x`

## Increment Operator

### Postfix Increment Operator
The current value of the expression `x++` is the value of `x` before the `++` operation, as the following example shows:
```java live no-template
int i = 3;
System.out.println(x);   // output: 3
System.out.println(x++); // output: 3
System.out.println(x);   // output: 4
```

### Prefix Increment Operator
The prefix incrementation`++x` is applied before the println statement comes into effect:
```java live
double a = 1.5;
System.out.println(x);   // output: 1.5
System.out.println(++x); // output: 2.5
System.out.println(x);   // output: 2.5
```

## Decrement Operator

### Postfix Decrement Operator
The result of `x--` is the value of `x` before the operation:
```java live
int i = 3;
System.out.println(x);   // output: 3
System.out.println(x--); // output: 3
System.out.println(x);   // output: 2
```

### Prefix Decrement Operator
The result of `--x` is the value of `x` after the operation:
```java live
double a = 1.5;
System.out.println(x);   // output: 1.5
System.out.println(--x); // output: 0.5
System.out.println(x);   // output: 0.5
```
[/slide]
