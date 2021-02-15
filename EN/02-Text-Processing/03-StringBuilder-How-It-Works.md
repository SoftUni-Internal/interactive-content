[slide hideTitle]
# StringBuilder: How It Works?
Just like the `String`, the `StringBuilder` is a **sequence of characters**. 

The main difference between them is that the `StringBuilder` is **mutable(can be modified).**

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

The `capacity()` is always **greater than or equal** to the `length()` of the string and automatically expands whenever necessary to add more text or symbols.

[image assetsSrc="StringBuilder-example(1).png" /]

[/slide]

[slide hideTitle]
# Initializing a StringBuilder

There are several ways to initialize a `StringBuilder`:

- `StringBuilder()` - Creates an **empty** **StringBuilder** with the **initial capacity of 16**

```java live
StringBuilder sb = new StringBuilder();

System.out.println(sb.capacity()); // 16   
```

- `StringBuilder(String str)` - Creates a **StringBuilder** with the **specified string**

```java live
StringBuilder sb = new StringBuilder("Hello,JAVA");

System.out.println(sb);

```

- `StringBuilder(int capacity)` - Creates an **empty** **StringBuilder** with the **specified capacity**

```java live
StringBuilder sb = new StringBuilder(25);

System.out.println(sb.capacity()); // 25 
```
[/slide]

















