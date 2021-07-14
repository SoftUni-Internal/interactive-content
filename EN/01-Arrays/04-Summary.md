
[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/EN/02-Java-Fundamentals-Arrays-24-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:
- Arrays hold a sequence of elements 
- Creating (allocating) an array

```java
int[] numbers = { 1, 1, 2, 4, 5 };
```
- Accessing array elements by index

```java
numbers[4] = numbers[2] + numbers[3];
System.out.println(numbers[4]);
```

- Reading arrays from the console

```java
for (int i = 0; i < n; i++) {
  arr[i] = Integer.parseInt(sc.nextLine()); //read array elements
}
```
- Printing array elements

```java
int[] numbers = { 1, 2, 3, 4, 5 };
for (int number : numbers) {
   System.out.println(number + " ");
}
```

- The for-each loop

```Java
int[] numbers = { 1, 2, 3, 4, 5 };
for (int number : numbers) {
   System.out.println(number + " ");
}
```

## In the next lesson you will learn:
- What a **method** is
- Naming conventions and best practices
- Declaring and **invoking methods**
  - void and return type methods
- Methods with parameters
- **Value types** vs. **reference types**
- **Overloading** methods
- Program execution flow
[/slide]


