# Logical Expressions

[slide hideTitle]
# Comparison Operators

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-10-13-logical-expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In programming, we can compare values using the following operators:

|Operators|Designation|
|---------|-----------|
| Equal to |   **==** |
| Not Equal to |   **!=** |
| Greater than |   **>** |
| Greater than or equal to |   **>=** |
| Less than |   **<** |
| Less than or equal to |   **<=** |

When compared, the result is a Boolean value `true` or `false`, depending on whether the result of the comparison is `true` or `false`.
[/slide]

[slide hideTitle]

# Examples for Comparing Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-10-13-logical-expressions-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Examples of such an expression are as follows:
```java live
int a = 5;
int b = 10;
System.out.println(a < b);      // true
System.out.println(a > 100);    // false
System.out.println(a <= 5);     // true
System.out.println(b == 2 * a); // true
System.out.println(a != b);     // true
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

[slide hideTitle]
# String Comparison

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-10-13-logical-expressions-demo-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Comparing text using the `equals()` method.

Two string operands are equal when both of them are `null` or both string instances are of the same length and have identical characters in each character position:
```java live
String a = "Examplе";
String b = a;
System.out.println(a.equals(b)); // true
```

```java live
String a = "Examplе";
String b = "Examplе";
System.out.println(a == b);
```

```java live
String a = "hello";
String b = "hello";
System.out.println(a.equals(b)); // true
System.out.println(a < b); // error
```
A string is an object and every object has an instance, but this is a knowledge we will acquire later on throughout the course.
[/slide]