# Clasele Imbricate 
[slide hideTitle]

# Clasele Imbricate 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/04-Iterators-and-Comparators/RO/interactive-java-advanced-iterators-and-comparators-9-10-11- Nested-Classes-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Java, este posibil să **nest classes** (o clasă din interiorul altei clase).

Scopul claselor imbricate este să **group classes that belong together**, care fac codul mai ușor de menținut.

- Exemple de Clase Imbricate:

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
