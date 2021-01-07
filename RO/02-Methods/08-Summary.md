# Summary


[slide]
# Summary


# In this lesson you learned:

- Method - **block of code** that can be reused multiple times

``` java
public static void printText(String text) { // Print text method
  System.out.println(text);
}
```

- Methods consist of **declaration** and **body**

``` java
public static void printHeader() {
  System.out.println("----------");
}
```
- Methods are invoked by their `name` + `()`

``` java
public static void main(String[] args) {
  printHeader();
}
```

- Methods can accept **parameters**

``` java
static void printNumbers(int start, int end) { // Method with parameters
  for (int i = start; i <= end; i++) {
    System.out.printf("%d ", i);
  }
}
```
- Methods can **return a value** or nothing - `void`




# In the next lesson, you will learn:

- What are **Lists** in Java?
- **List Manipulating**
- **Reading Lists** from the Console
- **Sorting Lists and Arrays**


[/slide]