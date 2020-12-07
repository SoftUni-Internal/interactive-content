# Comparison Operators

[slide]
# Video

[vimeo-video startTimeInSeconds="2756" endTimeInSeconds="2992"]
[stream language="EN" videoId="421764903" default /]
[stream language="RO" videoId="422795597"  /]
[/vimeo-video]

[/slide]

[slide]
# Comparison Operators
In programming, we can compare values using the following operators:

| Operator | Notation in Java |
|---------|-----------|
| Equal to |   **==** |
| Not Equal to |   **!=** |
| Greater than |   **>** |
| Greater than or equal to |   **>=** |
| Less than |   **<** |
| Less than or equal to |   **<=** |

When compared, the result is a Boolean value `true` or `false`, depending on whether the result of the comparison is `true` or `false`.

## Examples for Comparing Numbers
Examples of such an expression are as follows:
```java live
int a = 5;
int b = 10;
System.out.println(a < b); 
System.out.println(a > 0); 
System.out.println(a > 100);   
System.out.println(a < a); 
System.out.println(a <= 5); 
System.out.println(b == 2 * a); 
```

You can also compare numeric expressions. 

The expressions you compare can themselves be complex expressions, as in the following example.

```java
x / 45 * (y +17) >= Math.sqrt(z) / (p - (x * 16))
```

The preceding complex expression includes literals, variables, and function calls. 

The expressions on both sides of the comparison operator are evaluated, and the resulting values are then compared using the `>=` comparison operator. 

If the value of the expression on the left side is greater than or equal to the value of the expression on the right, the entire expression evaluates to `true`, otherwise, it evaluates to `false`.
[/slide]