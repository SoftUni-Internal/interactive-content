[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-29-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- What regular expressions are
- How to describe patterns for searching through a given text
- How to define special characters and operators, and how to build more complex patterns
- How to utilize character classes, groups, quantifiers, and more

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
