# Nested Classes

[slide hideTitle]

# Nested Classes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/EN/interactive-java-advanced-iterators-and-comparators-9-10-11- Nested-Classes-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Java, it is also possible to **nest classes** (a class within a class).

The purpose of nested classes is to **group classes that belong together**, which makes the code more maintainable.

- **Example** of a nested class:

```java live no-template
public class OuterClass {
    int x = 10;

    class InnerClass {
        int y = 5;
    }

    public static void main(String[] args) {
        OuterClass myOuter = new OuterClass();
        OuterClass.InnerClass myInner = myOuter.new InnerClass();
        System.out.println(myInner.y + myOuter.x);
    }
}
``` 

[/slide]
