[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/RO/04.JS-Fundamentals-Regular-Expressions-29-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Ce reprezintă expresiile regulate
- Cum să descrieți șablonele de căutare prin text
- Cum să definiți caracterele speciale și operatorii și cum să construiți un șablon complex
- Cum să utilizați caracterele de clase, grupuri, cuantificatori și multe altele

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
