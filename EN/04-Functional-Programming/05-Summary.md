[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/05-Functional-Programming/EN/interactive-java-advanced-functional-programming-34-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Functions are pieces of code used to perform certain tasks
    - creating Java functions is similar to writing mathematical ones
    - they can be passed as **variables** to methods

- Lambda expressions are anonymous methods
    - they use the `(parameters) -> {body}` syntax
    - they can be used with zero, one, or more parameters

```java
(name) -> { System.out.println("Hello!" + name); }
() -> { System.out.println("How are you?"); }
```

- `Function<T,R>` is a function that returns a result of type `R`

```java
public class Main { 
    public static void main(String args[]) 
    { 
  
        // Function that takes in a number and multiplies it by two 
        Function<Integer, Double> multiplyByTwo = num -> num * 2.0; 
  
        // To get the result we have to use apply()
        System.out.println(multiplyByTwo.apply(20)); // The output will be 40
    } 
} 
```

- `Consumer<T>` is a void function

- `Supplier<T>` does not accept any parameters

- `Predicate<T>` evaluates a condition

- `BiFunction<T, U, R>` accepts two parameters and returns a result of type `R`


[/slide]
