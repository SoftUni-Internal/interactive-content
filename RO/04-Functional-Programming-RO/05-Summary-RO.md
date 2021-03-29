[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/05-Functional-Programming/RO/interactive-java-advanced-functional-programming-34-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


## În această lecție am învățat:

- Functions are pieces of code used to perform tasks
    - in Java we can create functions analogical to mathematical functions
    - they can be passed like **variables** to methods

- Lambda expressions are anonymous methods
    - they use the `(parameters) -> {body}` syntax

```java
(name) -> { System.out.println("Hello!" + name); }
() -> { System.out.println("How are you?"); }
```

- `Function<T,R>` este o funcție care returnează tipul R


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

- `Consumer<T>` este o funcție nulă

- `Supplier<T>` nu are parametri

- `Predicate<T>` evaluează o condiție

- `BiFunction<T, U, R>` acceptă doi parametri



[/slide]