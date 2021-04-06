# Type Erasure

[slide hideTitle]

# Type Erasure

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-16-17-Type-Erasure-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Another important term in Java generics is **type erasure**.

To implement generic behavior, the Java compiler applies type erasure. 

**Type erasure** is a process, in which the compiler **replaces** a generic parameter with an actual class or a bridge method.

With type erasure, the compiler ensures that no extra classes are created and there is no runtime overhead.

How type erasure works:

- Replaces type parameters in a generic type with their bound, if **bounded** type parameters are used.

- Replaces type parameters in a generic type with Object, if **unbounded** type parameters are used

- Inserts type casts to preserve type safety

- Generates bridge methods to keep polymorphism in extended generic types

Let us see the following **example**:

```java live 
List<String> strings = new ArrayList<>();

// True
System.out.println(strings instanceof List);

// Compile Time Error
System.out.println(strings instanceof List<String>);
```

After compilation, the compiler deletes all angle bracket syntax.

Because of that, the Compile Time Error occurs when we attempt to check whether the `strings` is an instanceOf `List<Strings>`.

The compiler adds type casts for us (in byte-code).


[/slide]
