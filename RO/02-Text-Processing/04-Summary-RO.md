[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-33-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

# În această lecție ați învățat:

- Șirurile sunt secvențe imuabile de caractere Unicode

- Metode de procesare a șirurilor:
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

- StringBuilder construiește și modifică șiruri în mod eficient


## În lecția următoare, veți învăța:

- Ce sunt expresiile regulate

- Sintaxa RegEx

- Cuantificatori și Grupare

- Lookahead și Lookbehind

- Backreferences

- Regex în Java

[/slide]