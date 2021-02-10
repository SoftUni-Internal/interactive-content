# Summary

[slide hideTitle]
# Summary

# In this lesson you learned:

- Methods - **blocks of code** that can be reused multiple times

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
- Methods can **return a value** or nothing - `void`


## In the next lesson, you will learn:

- What are **lists**
- **List** operations
- **Reading lists** from the console
- **Sorting lists and arrays**

[/slide]