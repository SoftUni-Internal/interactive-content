[slide hideTitle]

# Add

There are **two** ways to add new string values to a `StringBuilder`:

- `append()` - **Appends** a string value **to the end** of the current sequence of characters"

```java live
StringBuilder sb = new StringBuilder();

sb.append("Hello, ");
sb.append("John! ");
sb.append("I sent you an email.");

System.out.println(sb.toString());
```

- `insert(int index, String str)` - **Inserts** a string at the **specified** character **position**

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.insert(11, " Smith");

System.out.println(sb.toString());
```

[/slide]

[slide hideTitle]

# Length

The length of a `StringBuilder` can be **accessed** and **modified**.

- `length()` - Returns the **length** of the **string** in the buffer

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

System.out.println(sb.length()); // 25
```

- `setLength(int newLength)` - Sets the **length of the string** and **truncates** the **last characters** if `newLength` is smaller than `length()` 

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

[slide hideTitle]
# Access

By using `charAt(int index)`, it is possible to access the `char` at the specified `index`.

```java live
StringBuilder sb = new StringBuilder();

sb.append("Hello Peter, how are you?");

System.out.println(sb.charAt(1)); // e
```

[/slide]

[slide hideTitle]
# Replace

The `replace(int startIndex, int endIndex, String str)` method replaces the characters in a substring.

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.replace(6, 11, "George");

System.out.println(sb.toString()); // Hello George, how are you?
```

[/slide]

[slide hideTitle]
# Convert to String

The `toString()` method **converts** the value of the current instance **to a String**.

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

String text = sb.toString();
        
System.out.println(text); // Hello Peter, how are you? 
```

[/slide]
