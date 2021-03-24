[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-33-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Strings are immutable sequences of Unicode characters

- Methods to perform operations on strings:
    - `concat()`, `indexOf()`, `contains()`, `substring()`, `split()`, `replace()`, etc.

```java

String text = "Hello, I am John.";

// splits text by comma, whitespace or dot
String[] words = text.split("[, .]+");

System.out.println(String.join(", ",words));
```

```java
String greet = "Hello, ";

String name = "SoftUni!";

String result = greet.concat(name);

System.out.println(result); // "Hello, SoftUni!"
```

- What a StringBuilder is

- Useful methods provided by the StringBuilder class 

## In the next lesson, you will learn:

- What Regular Expressions are

- RegEx Syntax

- Quantifiers and Grouping

- Lookahead and Lookbehind

- Backreferences

- Regex in Java

[/slide]
