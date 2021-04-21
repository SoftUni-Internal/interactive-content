[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-55-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Methods are **blocks of code** that can be re-used multiple times

``` java
public static void printText(String text) {
  System.out.println(text);
}
```

- Methods consist of a **declaration** and a **body**

- Methods are invoked by their `name` + `()`

``` java
public static void main(String[] args) {
  printHeader();
}
```

- Methods can accept **parameters**

``` java
static void printNumbers(int start, int end) { 
  for (int i = start; i <= end; i++) {
    System.out.printf("%d ", i);
  }
}
```
- Methods could **return a value**, if they do not they are of type: `void`

- You can **overload** methods by declaring a method of the same name but different data types or number of parameters

- The **call stack** - stores information about the active methods and the point where execution should return to after a method finishes running

## In the next lesson you will learn:

- What **lists** are
- **List** operations
- **Reading lists** from the console
- **Sorting lists and arrays**

[/slide]
