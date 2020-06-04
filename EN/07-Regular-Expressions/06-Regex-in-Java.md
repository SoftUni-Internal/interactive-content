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

```java live
Pattern pattern = Pattern.compile("[A-Za-z]+");
Matcher matcher = pattern.matcher("Hello Java");

String result = matcher.replaceAll("hi");  

System.out.println(result);   // hi hi
```
- `replaceFirst()` - replaces the first matched subsequences in the input with the given string value and returns the result

```java live
Pattern pattern = Pattern.compile("[A-Za-z]+");
Matcher matcher = pattern.matcher("Hello Java");

String result = matcher.replaceFirst("hi"); // hi Java

System.out.println(result);
```

- `split(String pattern)` - splits the text by the pattern, returns `String[]`

```java live
String text = "1   2 3      4";
String pattern = "\\s+"; // one or more whitespaces

String[] tokens = text.split(pattern);

System.out.println(String.join(", ",tokens));
```
[/slide]



