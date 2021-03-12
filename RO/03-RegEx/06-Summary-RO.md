
[slide hideTitle]
# Rezumat


# În această lecție ați învățat:

- Expresiile Regulate - RegEx
    - descrierea șablonelor de căutare prin text
    - definirea caracterelor speciale, operatorilor și construcțiilor pentru construirea unui șablon complex
    - utilizarea caracterelor de clase, grupurilor, cuantificatorilor și multe altele

```java live
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