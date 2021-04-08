[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/02.JS-Fundamentals-Arrays/EN/02.JS-Fundamentals-Arrays-27-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


## In this lesson you learned:

- Arrays are sequences of elements 

    - their elements are numbered from 0 to `length-1`

``` js live
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[numbers.length-1])
```

- We can create an array using this syntax
``` js 
let numbers = [1, 2, 3, 4, 5];
```
- We can access its elements by their index

``` js 
let numbers = [1, 2, 3, 4, 5];
```

- Elements can be iterated over with a standard loop or a "**for-of**" loop 

``` js live
let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}
```

## In the next lesson, you will learn:

- What is a Function?

- Declaring and invoking functions

- Nested functions

- Value and reference types

- Arrow functions

- Naming and best practices

# Teme Pentru Acasă
[slide hideTitle]
# O problemă cu soluție: Print Hello Java

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-36-37-Problem-and-solution-Print-Hello-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Print Hello Java" taskId="pb-java-introduction-print-hello-java" executionType="tests-execution" executionStrategy="java-code"]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Scrieți un program în limbajul Java care să execute următoarele:

Tipărește "**Hello Java**" pe consolă
[/task-description]
[code-io /]
[tests]
[test open]
[input]
[/input]
[output]
Hello Java
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[/slide]
