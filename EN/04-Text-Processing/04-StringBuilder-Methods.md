# StringBuilder - methods

[slide]
# Video

[vimeo-video startTimeInSeconds="7976" endTimeInSeconds="8630"]
[stream language="EN" videoId="421802353" default /]
[stream language="RO" videoId="436008840"  /]
[/video-vimeo]

[/slide]

[slide]
# Add
- `append()` - **appends** a string value **to the end** of the current sequence of characters
```java live
StringBuilder sb = new StringBuilder();

sb.append("Hello, ");
sb.append("John! ");
sb.append("I sent you an email.");

System.out.println(sb.toString());
```
- `insert(int index, String str)` - **inserts** a string at the **specified** character **position**
```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.insert(11, " Smith");

System.out.println(sb.toString());
```


[/slide]
[slide]
# Length
- `length()` - returns the **length** of the **string** in the buffer
```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

System.out.println(sb.length()); // 25
```

- `setLength(int newLength)` - Sets the **length of the string**. If **newLength** is **less** than **length()**, the **last characters** in the string are **truncated**. 


```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.setLength(12);

System.out.println(sb.toString()); // Hello Peter,
```

If **newLength** is **greater** than **length()**, **null** characters are **added** at the end of the string.
```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.setLength(28);

System.out.println(sb.toString()); // Hello Peter, how are you?

System.out.println(sb.length()); // 28
```
[/slide]

[slide]
# Access

- `charAt(int index)` - returns char on the current index
```java live
StringBuilder sb = new StringBuilder();

sb.append("Hello Peter, how are you?");

System.out.println(sb.charAt(1)); // e
```

[/slide]

[slide]
# Replace

- `replace(int startIndex, int endIndex, String str)` - replaces the characters in a substring
```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.replace(6, 11, "George");

System.out.println(sb.toString()); // Hello George, how are you?
```

[/slide]

[slide]
# Convert to String

- `toString()` - **converts** the value of this instance **to a String**
```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

String text = sb.toString();
        
System.out.println(text); // Hello Peter, how are you? 
```

[/slide]
