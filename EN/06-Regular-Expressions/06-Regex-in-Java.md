# Regex in Java

[slide]
# Video

[vimeo-video startTimeInSeconds="9433" endTimeInSeconds="11620"]
[stream language="EN" videoId="421806246" default /]
[stream language="RO" videoId="435070128"  /]
[/video-vimeo]

[/slide]

[slide]
# Built-In Regex Classes 
For advanced regular expressions the `java.util.regex.Pattern` and `java.util.regex.Matcher` classes are used.

```java live no-template
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
Let's explain what does the code above:
First, we create a **Pattern object** which **defines the regular expression**.
This Pattern object allows you to **create a Matcher object for a given string**.
This Matcher object then allows you to do **regex operations on a String**.

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
# Problem: Match Full Name
[code-task title="Match Full Name" taskId="53807843-8e22-4213-97af-c92f4903346c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.*;

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

[slide]
# Solution: Match Full Name
[code-task title="Match Full Name" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String listOfNames = scanner.nextLine();

        String regex = "\\b[A-Z][a-z]+ [A-Z][a-z]+";

        List<String> validNames = new ArrayList<>();

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(listOfNames);

        while (matcher.find()) {
            validNames.add(matcher.group());
        }

        System.out.println(String.join(" ", validNames));
    }
}
```
[/code-editor]
[task-description]
## Description
Write a Java Program to **match full names** from a list of names and **print** them on the console.

# Hints
First, write a regular expression to match a valid full name, according to these conditions:
- A valid full name has the following characteristics:
	- It consists of **two words**.
	- Each word **starts** with a **capital letter**.
	- After the first letter, it **only contains lowercase letters afterwards**.
	- **Each** of the **two words** should be **at least two letters long**.
	- The **two words** are **separated** by a **single space**.
    
To help you out, we've outlined several steps:
1.	Use an online regex tester like [https://regex101.com/](https://regex101.com/) 
2.	Check out how to use **character sets** (denoted with square brackets - "**[]**")
3.	Specify that you want **two words** with a space between them (the **space character** \' \', and **not** any whitespace symbol)
4.	For each word, specify that it should begin with an uppercase letter using a **character set**. The desired characters are in a range – **from ‘A’ to ‘Z’**.
5.	For each word, specify that what follows the first letter are only **lowercase letters**, one or more – use another character set and the correct **quantifier**.
6.	To prevent capturing of letters across new lines, put **"\b"** at the beginning and at the end of your regex. This will ensure that what precedes and what follows the match is a word boundary (like a new line).



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

[slide]
# Problem: Match Numbers
[code-task title="Match Numbers" taskId="8fc7f1de-7cb0-4ab4-b1d0-1de73de6efe3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a regular expression to match all numbers from a given string.

After you find all numbers, print them on the console, separated by space " ".

## Examples
| **Input** | **Output** |
| --- | --- |
| 1 -1 1s 123 s-s -123 \_55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5 | 1 -1 123 -123 123.456 -123.456 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 -1 1s 123 s-s -123 \_55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5
[/input]
[output]
1 -1 123 -123 123.456 -123.456
[/output]
[/test]
[test]
[input]
123Y Peter44 456 982 -873829 -_89
[/input]
[output]
456 982 -873829
[/output]
[/test]
[test]
[input]
123    89382- -09-09 - 8-8jid08  -92813 j8 -
[/input]
[output]
123 -92813
[/output]
[/test]
[test]
[input]
51542 41+1 4+10059 %0870_((\* 8098 jeoifjd9908
[/input]
[output]
51542 8098
[/output]
[/test]
[test]
[input]
891273hndjn 0912039 jjjjjj-12830 0-9=9 =---9 83127 328
[/input]
[output]
0912039 83127 328
[/output]
[/test]
[test]
[input]
13728 jd8j10 8498  j9 6698 -09 0
[/input]
[output]
13728 8498 6698 -09 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Match Numbers
[code-task title="Match Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.*;

public class Main {
    public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        String regex = "(^|(?<=\\s))-?\\d+(\\.\\d+)?($|(?=\\s))";

        List<String> matchedNumbers = new ArrayList<>();

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(input);

        while (matcher.find()) {
            matchedNumbers.add(matcher.group());
        }

        System.out.println(String.join(" ", matchedNumbers));
    }
}
```
[/code-editor]
[task-description]
## Description
Write a regular expression to match all numbers from a given string.

After you find all numbers, print them on the console, separated by space " ".

## Examples
| **Input** | **Output** |
| --- | --- |
| 1 -1 1s 123 s-s -123 \_55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5 | 1 -1 123 -123 123.456 -123.456 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 -1 1s 123 s-s -123 \_55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5
[/input]
[output]
1 -1 123 -123 123.456 -123.456
[/output]
[/test]
[test]
[input]
123Y Peter44 456 982 -873829 -_89
[/input]
[output]
456 982 -873829
[/output]
[/test]
[test]
[input]
123    89382- -09-09 - 8-8jid08  -92813 j8 -
[/input]
[output]
123 -92813
[/output]
[/test]
[test]
[input]
51542 41+1 4+10059 %0870_((\* 8098 jeoifjd9908
[/input]
[output]
51542 8098
[/output]
[/test]
[test]
[input]
891273hndjn 0912039 jjjjjj-12830 0-9=9 =---9 83127 328
[/input]
[output]
0912039 83127 328
[/output]
[/test]
[test]
[input]
13728 jd8j10 8498  j9 6698 -09 0
[/input]
[output]
13728 8498 6698 -09 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]