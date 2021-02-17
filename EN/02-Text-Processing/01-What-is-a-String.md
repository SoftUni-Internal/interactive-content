# Strings

[slide hideTitle]
# What is a String?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-3-4-what-is-a-string-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **String** is an **object** that represents a **sequence of characters** - `char []`.

[image assetsSrc="String-example(1).png" /]

Just like an array of chars, **Strings are immutable**.

Whenever a **change** to a String is made, an entirely **new String object is created**. 

```java live
String name = "SoftUni!";
// hashCode() - return the address of the object in memory
System.out.println(name.hashCode());

name = "Peter!";
System.out.println(name.hashCode());
```

After assigning a new value to the **name** variable in the previous example, it appears as a new address in memory - a **newString object is created**.

**Strings use Unicode** (can use most alphabets, e.g. Arabic) 

```java 
String greeting = "مرحبا";  // Hello in Arabic
```

The main **features** of **Strings** are:

- Strings represent a **sequence of characters**

- Strings are used to **store text**

- Java String class has a lot of **methods** for **text processing**

- Strings are immutable(**read-only**)

[/slide]

[slide hideTitle]

# Strings are Immutable

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-5-strings-are-immutable-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Initializing a String

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-6-initializing-a-string-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are several ways to initialize a `String`:

- Initializing using **String literal**

```java
String greeting = "Hello, SoftUni";
```

- Initializing using the `new` - keyword

```java 
String greeting = new String ("Hello, SoftUni");
```

- Initializing using `char []`

```java live
char [] charArr = new char[]{'H','e','l','l','o'};
String greeting = new String (charArr);

System.out.println(greeting);
```

[/slide]