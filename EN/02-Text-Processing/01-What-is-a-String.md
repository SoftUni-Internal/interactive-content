# Strings

[slide hideTitle]
# What a String is?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-3-4-what-is-a-string-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **String** is an **object** that represents a **sequence of characters** - `char []`.

[image assetsSrc="String-example(1).png" /]

Since arrays are immutable, **Strings are immutable** as well.

Whenever a **change** to a String is made, an entirely **new object of type String is created**. 

```java live
String name = "SoftUni!";
return the memory address of the object
System.out.println(name.hashCode());

name = "Peter!";
System.out.println(name.hashCode());
```

After assigning a new value to the **name** variable in the previous example, it appears as a new address in the memory, because a **new object** of type String is created.

**Strings use Unicode** (can use most alphabets, e.g. Arabic) 

```java 
String greeting = "مرحبا";  // Hello in Arabic
```

The main **features** of **Strings** are:

- Strings represent a **sequence of characters**

- Strings are used for **storing text**

- The String class provides a lot of **methods** for **text processing**

- Strings are immutable

[/slide]

[slide hideTitle]

# Strings are Immutable

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-5-strings-are-immutable-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An object is considered to be **immutable** if its state cannot be altered after it is created.

This is also true for Strings in Java which are **immutable** but this does not mean that we cannot assign new values to String variables:

```java live
String movieTitle = "101 Dalmatians";

System.out.println(movieTitle);

movieTitle = "The Last Samurai";

System.out.println(movieTitle);
```

We were able to change the movie title in the example above so why do we say that Strings are immutable?

Strings are reference data types and as such the **movieTitle** variable will contain a reference to a memory location, it will not hold the actual data.

When you initialize a new String variable and assign some value to it, Java will create a String object and store it in a memory location, and only the reference to that location will be stored in your variable.

When you assign a new value to the same String variable, a new String object will be created and its memory location will be assigned as a value to your variable.

To summarize:
- The String object that is created is immutable (read-only)
- The String variable will hold only a reference to the current String object assigned to it

[/slide]

[slide hideTitle]
# Initializing a String

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-6-initializing-a-string-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are several ways to initialize a `String`:

- Initializing using a **String literal**

```java
String greeting = "Hello, SoftUni";
```

- Initializing using the `new` keyword

```java 
String greeting = new String ("Hello, SoftUni");
```

- Initializing using an array of characters (`char []`)

```java live
char [] charArr = new char[]{'H','e','l','l','o'};
String greeting = new String (charArr);

System.out.println(greeting);
```

[/slide]
