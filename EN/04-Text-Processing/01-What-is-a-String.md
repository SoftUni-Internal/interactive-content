# What Is a String?

[slide]
# Video

[vimeo-video startTimeInSeconds="81" endTimeInSeconds="1507"]
[stream language="EN" videoId="421802353" default /]
[stream language="RO" videoId="436008840"  /]
[/video-vimeo]

[/slide]

[slide]
# What Is a String?

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
Let's explain what does the code above:
- After assigning a new value in the variable **name** it appears a new address in memory - a **newString object is created**



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

[slide]
# Initializing a String

- Initializing using **String literal**
```java
String greeting = "Hello, SoftUni";
```

- Initializing using `new` - keyword

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