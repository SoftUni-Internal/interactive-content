[slide hideTitle]
# Summary


# In this lesson you learnt:

- Algorithmic Complexity

- Stack - Last In First Out - **LIFO**
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

- Queue - First In First Out - **FIFO**
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
    ```java live
    ArrayDeque<Integer> queue = new ArrayDeque<>();
    queue.add(5);

    queue.peek();
    ```

- Priority Queue


## In the next lesson you will learn:

- Arrays in Java
- What is Multidimensional Array?
- Declaring and Creating Multidimensional Arrays
- Initializing Multidimensional Arrays
- Accessing Elements
- Reading and Printing a Matrix



[/slide]