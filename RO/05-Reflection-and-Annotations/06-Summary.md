[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-47-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Reflection
    * the ability of a programming language to be its own metalanguage

- Reflection API
    * reflecting classes, constructors, methods, fields

```java
// Get class by its name
Class test = Class.forName("Cat");

// Get names of a given class
String nameClass = myCatClass.getName();
String nameClass = myCatClass.getSimpleName();
```

- Access Modifiers
  
```java
int modifiers = Cat.class.getModifiers();
Field field = Cat.class.getDeclaredField("name");
System.out.println(Modifier.isPrivate(field.getModifiers()));
```

- Annotations

```java
@Deprecated 
public void deprecatedMethod() {
  System.out.println("This method is deprecated!");
}
```

## In the next lesson you will learn:

- Unit Testing
  - JUnit



[/slide]