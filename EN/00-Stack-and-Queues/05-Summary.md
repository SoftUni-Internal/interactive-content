[slide hideTitle]
# Summary


# In this lesson you learned:

- Calculating **algorithmic complexity** with Big O Notation.

- **Stacks** - Last In First Out (LIFO)

    - `push()`

    ```java
    ArrayDeque<Integer> stack = new ArrayDeque<>();
    stack.push(2);
    ```
    - `pop()`

    ```java
    ArrayDeque<Integer> stack = new ArrayDeque<>();
    stack.push(2);

    stack.pop();
    ```
    - `peek()`

    ```java
    ArrayDeque<Integer> stack = new ArrayDeque<>();
    stack.push(2);
    Integer element = stack.peek();
    ```

- **Queues** - First In First Out (FIFO)
    - `add()`

    ```java
    ArrayDeque<Integer> queue = new ArrayDeque<>();

    queue.offer(2);
    queue.add(5);
    ```

    - `poll()`

    ```java
    ArrayDeque<Integer> queue = new ArrayDeque<>();
    queue.add(5);

    queue.poll()
    ```
    - `peek()`
    
    ```java
    ArrayDeque<Integer> queue = new ArrayDeque<>();
    queue.add(5);

    queue.peek();
    ```

- **Priority Queue** - a special kind of queue where the elements are retrieved in their natural order unless a custom comparator is specified

```java 
PriorityQueue<Integer> numbers = new PriorityQueue<>();
```

## In the next lesson you will learn:

- Arrays
- Multidimensional arrays - declaring, creating, and initializing
- Accessing array elements
- Reading and printing a matrix

[/slide]
