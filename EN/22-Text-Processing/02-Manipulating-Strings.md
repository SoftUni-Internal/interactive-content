# Manipulating Strings

[slide]
# Concatenating

- Using `+` or `+=` operators
```java 
String text = "Hello" + ", " + "SoftUni!";  // "Hello, SoftUni!"
```
- Using `concat()` method
```java live
String greet = "Hello, ";

String name = "SoftUni!";

String result = greet.concat(name);

System.out.println(result); // "Hello, SoftUni!"
```

[/slide]

[slide]

# Substring

- `substring(int startIndex)` - returns **new String** containing the substring of the given string from specified **startIndex** (**inclusive**)

```java live
String text = "My name is John";

String extractWord = text.substring(11);

System.out.println(extractWord); // John
```

- `substring(int startIndex, int endIndex)` - returns **new String** containing the substring of the given string from specified **startIndex** (inclusive) to **endIndex** (exclusive)

```java live
String fullName = "John Doe";

String firstName = fullName.substring(0, 4);

System.out.println(firstName); // John
```


[/slide]

[slide]

# Searching

[/slide]

[slide]

# Splitting

[/slide]

[slide]

# Replacing

[/slide]

[slide]

# Problem: Repeat Strings

[/slide]

[slide]

# Solution: Repeat Strings

[/slide]

[slide]

# Problem: Substring

[/slide]

[slide]

# Solution: Substring

[/slide]


[slide]

# Problem: Text Filter

[/slide]

[slide]

# Solution: Text Filter

[/slide]