[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-36-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson, you learned:

- Maps hold {`key` -> `value`} pairs
    - `keyset` holds a set of unique keys
    - `values` holds a collection of values
    - iterating over a map takes the entries as `Map.Entry<K, V>`


```java
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<Key, Value> map = new HashMap<>();
    }
}
```

- Lambda expressions and Stream API help with processing collections

- You can use `map()` for manipulating elements in a collection:

```java
String[] words = {"abc", "def", "geh", "yyy"};
words = Arrays.stream(words)
            .map(w -> w + "yyy")
            .toArray(String[]::new);
for (String word : words) {
    System.out.println(word);
}
```



## In the next lesson, you will learn:

- Classes
    - Definition of Classes
    - Methods, Properties, Fields

- Objects
    - Definition
    - Values

- Built-in Classes

[/slide]
