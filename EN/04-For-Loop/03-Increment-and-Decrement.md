# Increment and Decrement Operators

[slide]
# Video

[vimeo-video startTimeInSeconds="1179" endTimeInSeconds="1461"]
[stream language="EN" videoId="342471604" default /]
[stream language="RO" videoId="389927500"  /]
[/vimeo-video]

[/slide]

[slide]
# Increment and Decrement Operators
The unary increment operator `++` increments its operand by 1, while the unary decrement operator `--` decrements it by 1.

The increment and decrement operators are supported in two forms: 

* the postfix increment/decrement operator, `x++`/`x--` 
* the prefix increment/decrement operator, `++x`/`--x`

## Increment Operator

### Postfix Increment Operator
The result of `x++` is the value of `x` before the operation, as the following example shows:
```java live
int i = 3;
System.out.println(i);   // output: 3
System.out.println(i++); // output: 3
System.out.println(i);   // output: 4
```

### Prefix Increment Operator
The result of `++x` is the value of `x` after the operation, as the following example shows:
```java live
double a = 1.5;
System.out.println(a);   // output: 1.5
System.out.println(++a); // output: 2.5
System.out.println(a);   // output: 2.5
```

## Decrement Operator

### Postfix Decrement Operator
The result of `x--` is the value of `x` before the operation, as the following example shows:
```java live
int i = 3;
System.out.println(i);   // output: 3
System.out.println(i--); // output: 3
System.out.println(i);   // output: 2
```

### Prefix Decrement Operator
The result of `--x` is the value of `x` after the operation, as the following example shows:
```java live
double a = 1.5;
System.out.println(a);   // output: 1.5
System.out.println(--a); // output: 0.5
System.out.println(a);   // output: 0.5
```
[/slide]