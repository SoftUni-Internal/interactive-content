

[slide]
# Summary


## In this lesson you learned:

- Strings are immutable sequences of Unicode characters
- String processing methods:
    - `concat()`, `indexOf()`, `contains()`, `substring()`, `split()`, `replace()`, etc.


```java live

String text = "Hello, I am John.";

// splits text by comma, whitespace or dot
String[] words = text.split("[, .]+");

System.out.println(String.join(", ",words));
```

```java live
String greet = "Hello, ";

String name = "SoftUni!";

String result = greet.concat(name);

System.out.println(result); // "Hello, SoftUni!"
```

- StringBuilder efficiently builds and modifies strings




## In the next lesson, you will learn:

- What are Regular Expressions?
- RegEx Syntax 
- Quantifiers and Grouping
- Lookahead and Lookbehind
- Backreferences
- Regex in Java


[/slide]