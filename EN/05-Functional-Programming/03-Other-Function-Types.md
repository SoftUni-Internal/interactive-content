[slide]

# Special Functions

## Consumer\<T\> 

In Java `Consumer<T>` is a **functional interface** which accepts a single argument and returns nothing.

The functional method of **Consumer** is `accept(T t)`

We can use **Consumer** function with `.accept()`

``` java
import java.util.function.Consumer;

public class ConsumerAccept {
  public static void main(String[] args) {
    Consumer<String> nameConsumer = s -> System.out.println(s); 
    
    nameConsumer.accept("George");
    nameConsumer.accept("Peter");
  }
} 
```


## Supplier\<T\>

`Supplier<T>` is an in-built **functional interface** that represents the supplier of results.

Supplier interface does not take any parameters.

``` java
int genRandomInt() {
  Random rnd = new Random();
  return rnd.nextInt(51);
}

```

The functional method of a **Supplier<T>** interface is the `.get()` method.


``` java
Supplier<Integer> genRandomInt = 
			   () -> new Random().nextInt(51);
int rnd = genRandomInt.get();
```


## Predicate\<T\>

In Java `Predicate<T>` is a **functional interface** which represents a predicate (boolean-valued function) of one argument.

It is used to **evaluate** a condition.


```java
boolean isEven(int number) {
    return number % 2 == 0;
}
```

We use the Predicate with `.test()` method.

```java
Predicate<Integer> isEven = 
			    number -> number % 2 == 0;
System.out.println(isEven.test(6)); // true
```


[/slide]

[slide hideTitle]
# Problem: Count Uppercase Words
[code-task title="Problem: Count Uppercase Words" taskId="fbde4688-e77f-47bb-a44a-9a581f521b44" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Write a program that reads one line of **text** from the console. 

Print the **count** of words that start with a **Uppercase** letter, after that print all these **words** in the **same order**, like you found them in the text.

Use a **Predicate\<String\>**

## Hints
- Use a **Predicate\<String\>** like an **if-condition**



## Examples


| **Input** | **Output** |
| --- | --- |
| The following example shows how to use Predicate | 2
|  | The |  
|  | Predicate |
| Write a program that reads one line of text from console. 
Print count of words that start with Uppercase, after that print all those words in the same order like you find them in text. | 3 |
|  | Write |
|  | Print |
|  | Uppercase |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
The following example shows how to use Predicate
[/input]
[output]
2
The
Predicate
[/output]
[/test]
[test open]
[input]
Write a program that reads one line of text from console. Print count of words that start with Uppercase, after that print all those words in the same order like you find them in text.
[/input]
[output]
3
Write
Print
Uppercase,
[/output]
[/test]
[test]
[input]
Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,\[14\] and specifically designed to have as few implementation dependencies as possible.
[/input]
[output]
1
Java
[/output]
[/test]
[test]
[input]
The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.
[/input]
[output]
3
The
C
C++,
[/output]
[/test]
[test]
[input]
Sun generated revenue from Java through the selling of licenses for specialized products such as the Java Enterprise System.
[/input]
[output]
5
Sun
Java
Java
Enterprise
System.
[/output]
[/test]
[test]
[input]
Sun renamed new J2 versions as Java EE, Java ME, and Java SE, respectively.
[/input]
[output]
8
Sun
J2
Java
EE,
Java
ME,
Java
SE,
[/output]
[/test]
[test]
[input]
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
[/input]
[output]
4
The
Lorem
Ipsum
1500s
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Count Uppercase Words
[code-task title="Problem: Count Uppercase Words" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class CountUpperCaseWords {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        Predicate<String> startWithCapital = x -> x.toUpperCase().charAt(0) == x.charAt(0);

        String[] words = Arrays.stream(reader.readLine().split("\\s+")).filter(startWithCapital).toArray(String[]::new);

        System.out.println(words.length);

        Consumer<String> print = System.out::println;
        Arrays.stream(words).forEach(print);

    }
}
```
[/code-editor]
[task-description]
## Description

Write a program that reads one line of **text** from the console. 

Print the **count** of words that start with a **Uppercase** letter, after that print all these **words** in the **same order**, like you found them in the text.

Use a **Predicate\<String\>**

## Hints
- Use a **Predicate\<String\>** like an **if-condition**



## Examples


| **Input** | **Output** |
| --- | --- |
| The following example shows how to use Predicate | 2
|  | The |  
|  | Predicate |
| Write a program that reads one line of text from console. 
Print count of words that start with Uppercase, after that print all those words in the same order like you find them in text. | 3 |
|  | Write |
|  | Print |
|  | Uppercase |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
The following example shows how to use Predicate
[/input]
[output]
2
The
Predicate
[/output]
[/test]
[test open]
[input]
Write a program that reads one line of text from console. Print count of words that start with Uppercase, after that print all those words in the same order like you find them in text.
[/input]
[output]
3
Write
Print
Uppercase,
[/output]
[/test]
[test]
[input]
Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,\[14\] and specifically designed to have as few implementation dependencies as possible.
[/input]
[output]
1
Java
[/output]
[/test]
[test]
[input]
The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.
[/input]
[output]
3
The
C
C++,
[/output]
[/test]
[test]
[input]
Sun generated revenue from Java through the selling of licenses for specialized products such as the Java Enterprise System.
[/input]
[output]
5
Sun
Java
Java
Enterprise
System.
[/output]
[/test]
[test]
[input]
Sun renamed new J2 versions as Java EE, Java ME, and Java SE, respectively.
[/input]
[output]
8
Sun
J2
Java
EE,
Java
ME,
Java
SE,
[/output]
[/test]
[test]
[input]
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
[/input]
[output]
4
The
Lorem
Ipsum
1500s
[/output]
[/test]
[/tests]
[/code-task]
[/slide]