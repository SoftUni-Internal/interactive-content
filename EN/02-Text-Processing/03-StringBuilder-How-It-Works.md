# Building and Modifying Strings

[slide hideTitle]
# StringBuilder: How It Works?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-24-25-stringbuilder-how-it-works-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Just like the `String`, the `StringBuilder` is a **sequence of characters**. 

The main difference between them is that the `StringBuilder` is **mutable (it can be modified).**

Unlike strings, every `StringBuilder` keeps a buffer space, allocated in advance.

```java
// creates an empty StringBuilder 
// by default, the initial capacity of empty StringBuilder is 16
StringBuilder sb = new StringBuilder();
        
// appends a string into StringBuilder
sb.append("Hello,JAVA");
        
// length() - the length of the string
System.out.println(sb.length());   // 10

// capacity() - the capacity of the StringBuilder
System.out.println(sb.capacity()); // 16   
```

The **capacity** is always **greater than or equal** to the **length** of the string and it automatically expands whenever it is necessary to add more text or symbols.

[image assetsSrc="StringBuilder-example(1).png" /]

[/slide]

[slide hideTitle]
# Using StringBuilder Class

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-26-using-stringbuilder-class-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are several ways to initialize a `StringBuilder`:

- `StringBuilder()` - Creates an **empty** **StringBuilder** with an **initial capacity of 16**

```java live
StringBuilder sb = new StringBuilder();

System.out.println(sb.capacity()); // 16   
```

- `StringBuilder(String str)` - Creates a **StringBuilder** initialized with the content of the **specified string**

```java live
StringBuilder sb = new StringBuilder("Hello, JAVA");

System.out.println(sb);

```

- `StringBuilder(int capacity)` - Creates an **empty** **StringBuilder** with the **specified capacity** as length

```java live
StringBuilder sb = new StringBuilder(25);

System.out.println(sb.capacity()); // 25 
```
[/slide]

[slide hideTitle]

# Concatenation vs StringBuilder

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-27-28-concatenation-vs-stringbuilder-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Concatenating** strings is a **slow** operation because each iteration creates a **new String**

String concatenation forms a **new string** that is a combination of multiple strings. 

Because of the fact that a new string is formed each time we concatenate two strings, concatenation is considered to be a **slow operation**. 

Copy the following code and run it locally:

```java
// Start time of program execution
System.out.println(new Date());

String text = "";
        
for (int i = 0; i < 1000000; i++){

    text += "a";
}
// End time 
System.out.println(new Date());
```

The above example code will take roughly 1 minute or more to execute which is very slow.

The same operation can be performed by using a `StringBuilder`:

```java
System.out.println(new Date());

StringBuilder text = new StringBuilder();

for (int i = 0; i < 1000000; i++){

     text.append("a");
}
System.out.println(new Date());
```

The time of the program execution is about 1 second, which is a lot faster than the concatenation.

[/slide]

[slide hideTitle]

# StringBuilder Methods

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-29-20-31-stringbuilder-methods-1-2-3-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here are some of the **StringBuilder** class methods:

`append()` - **Appends** a string value **to the end** of the current sequence of characters

```java live
StringBuilder sb = new StringBuilder();

sb.append("Hello, ");
sb.append("John! ");
sb.append("I sent you an email.");

System.out.println(sb.toString());
```

`insert(int index, String str)` - **Inserts** the given string at the **specified position**

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.insert(11, " Smith");

System.out.println(sb.toString());
```

`length()` - Returns the **length** of the **string**

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

System.out.println(sb.length()); // 25
```

`setLength(int newLength)` - Sets the **length of the string** to be equal to the **newLength** that is passed as an argument. If the **newLength** is less than the old length, the characters at the end of the string are truncated.

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.setLength(12);

System.out.println(sb.toString()); // Hello Peter,
```

If the **newLength** is greater than or equal to the old length, **null** characters are appended at the end of the string.

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.setLength(28);

System.out.println(sb.toString()); // Hello Peter, how are you?

System.out.println(sb.length()); // 28
```

`charAt(int index)` - Returns the character at the **specified index**

```java live
StringBuilder sb = new StringBuilder();

sb.append("Hello Peter, how are you?");

System.out.println(sb.charAt(1)); // e
```

`replace(int startIndex, int endIndex, String str)` - Replaces the substring from **startIndex** to **endIndex-1** with the specified string 

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.replace(6, 11, "George");

System.out.println(sb.toString()); // Hello George, how are you?
```

`toString()` - **Converts** the value of the current instance **into a String**

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

String text = sb.toString();
        
System.out.println(text); // Hello Peter, how are you? 
```

[/slide]

