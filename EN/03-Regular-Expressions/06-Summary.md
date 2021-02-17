[slide]

# Summary

## In this lesson you learned:

- Regular Expressions (RegEx)
    - describe patterns for searching through text
    - define special characters, operators and constructs for building complex pattern
    - can utilize character classes, groups, quantifiers and more

```java live no-template
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {

        Pattern pattern = Pattern.compile("[A-Za-z]+");

        String text = "Regex was the topic of this lesson.";

        Matcher matcher = pattern.matcher(text);

        // check all occurrences
        while (matcher.find()) {
            System.out.println(matcher.group());
        }
    }
}
```

[/slide]