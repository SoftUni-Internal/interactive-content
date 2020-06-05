# Regex in Java
[slide]
# Built-In Regex Classes 
For advanced regular expressions the `java.util.regex.Pattern` and `java.util.regex.Matcher` classes are used.

```java live
Pattern pattern = Pattern.compile("[a-z]+");

String text = "the quick brown fox jumps over the lazy dog";

Matcher matcher = pattern.matcher(text);

// check all occurrences
while (matcher.find()) {
    System.out.println(matcher.group());
}
```
Let's explain what does the code above:
First, we create a **Pattern object** which **defines the regular expression**. This Pattern object allows you to **create a Matcher object for a given string**. This Matcher object then allows you to do **regex operations on a String**.

[/slide]

[slide]
# Matcher methods

- `find()` - scans the input sequence looking for the next subsequence that matches the pattern

```java live no-template
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
    public static void main(String[] args) {
        Pattern pattern = Pattern.compile("[a-z]+");

        String text = "the quick brown fox jumps over the lazy dog";

        Matcher matcher = pattern.matcher(text);

// check all occurrences
        while (matcher.find()) {
            System.out.println(matcher.group());
        }
    }
} 
```

- `replaceAll()` - replaces all the matched subsequences in the input with the given string value and returns the result

```java live no-template
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class Main {

    public static void main(String[] args) {

        Pattern pattern = Pattern.compile("[A-Za-z]+");
        Matcher matcher = pattern.matcher("Hello Java");

        String result = matcher.replaceAll("hi");

        System.out.println(result);   // hi hi


    }
}
```
- `replaceFirst()` - replaces the first matched subsequences in the input with the given string value and returns the result

```java live no-template
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class Main {

    public static void main(String[] args) {

        Pattern pattern = Pattern.compile("[A-Za-z]+");
        Matcher matcher = pattern.matcher("Hello Java");

        String result = matcher.replaceFirst("hi"); // hi Java

        System.out.println(result);

    }
}
```

- `split(String pattern)` - splits the text by the pattern, returns `String[]`

```java live
String text = "1   2 3      4";
String pattern = "\\s+"; // one or more whitespaces

String[] tokens = text.split(pattern);

System.out.println(String.join(", ",tokens));
```
[/slide]


[slide]
# Match Full Name
[code-task title="Match Full Name" taskId="53807843-8e22-4213-97af-c92f4903346c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a Java Program to **match full names** from a list of names and **print** them on the console.

## Examples
| **Input** | **Output** |
| --- | --- |
| John Smith, John smith, john Smith, JOhn Smith, Alice White, John	Smith | John Smith Alice White |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Smith, John smith, john Smith, JOhn Smith, Alice White, John	Smith
[/input]
[output]
John Smith Alice White
[/output]
[/test]
[test]
[input]
gosho goshov-Xi Ban cc DD-e e gosho goshov gosho goshov-pesho ivanov-PESHO IVANOV-AA PESHO IVANOV A A aa Ivan Ivanov B B-d d EE-ivanivanov-D D Ivan Ivanov
[/input]
[output]
Xi Ban Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[test]
[input]
c c-PESHO IVANOV GOSHO GOSHOV-D D-GoshoGoshov goshogoshov-bb d d-CC d d A A-IvanIvanov A A-xiban gosho goshov-Xi Ban xi ban-BB-pesho petrov XiBan-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
GOSHO GOSHOV-peshopetrov-c c ivanivanov peshoivanov-PeshoPetrov-PeshoIvanov-DD-PeshoPetrov Xi Ban-D D-IvanIvanov-D D-dd-aa pesho petrov PeshoIvanov-XI BAN-cc-ivan ivanov-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
EE-e e pesho petrov-PeshoPetrov aa-gosho goshov-peshoivanov-B B EE-Pesho Petrov-Pesho Ivanov peshoivanov-BB Gosho Goshov GOSHO GOSHOV cc XiBan b b-ivanivanov CC
[/input]
[output]
Pesho Petrov Pesho Ivanov Gosho Goshov
[/output]
[/test]
[test]
[input]
d d gosho goshov XiBan pesho ivanov-Pesho Petrov-xiban-Pesho Ivanov pesho petrov-Pesho Petrov-IvanIvanov-Pesho Petrov-PESHO IVANOV-EE EE C C-Pesho Ivanov-peshoivanov-bb XiBan-aa
[/input]
[output]
Pesho Petrov Pesho Ivanov Pesho Petrov Pesho Petrov Pesho Ivanov
[/output]
[/test]
[test]
[input]
Xi Ban-GoshoGoshov B B-PeshoIvanov xiban B B aa C C-goshogoshov-IvanIvanov PeshoPetrov-PeshoIvanov C C ivan ivanov-Pesho Ivanov-IVAN IVANOV C C-PESHO IVANOV-PESHO IVANOV ivan ivanov
[/input]
[output]
Xi Ban Pesho Ivanov
[/output]
[/test]
[test]
[input]
A A-Xi Ban b b-C C ee XiBan-gosho goshov GoshoGoshov AA-IvanIvanov BB-cc-pesho petrov DD goshogoshov ivan ivanov IvanIvanov-pesho ivanov a a-gosho goshov-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
gosho goshov-aa-C C-PESHO IVANOV PESHO PETROV-A A xi ban A A aa-peshopetrov Gosho Goshov d d-E E DD XI BAN-bb-Gosho Goshov-aa-dd ivan ivanov-
[/input]
[output]
Gosho Goshov Gosho Goshov
[/output]
[/test]
[test]
[input]
Gosho Goshov a a C C-GoshoGoshov EE PeshoPetrov-a a xi ban D D bb b b-B B-c c EE-IvanIvanov DD pesho ivanov B B PESHO IVANOV IVAN IVANOV-
[/input]
[output]
Gosho Goshov
[/output]
[/test]
[test]
[input]
goshogoshov peshoivanov-c c-XiBan-cc-Ivan Ivanov-D D IVAN IVANOV xi ban BB-xiban-PESHO PETROV xiban Ivan Ivanov-XI BAN-cc-IVAN IVANOV EE c c e e
[/input]
[output]
Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
