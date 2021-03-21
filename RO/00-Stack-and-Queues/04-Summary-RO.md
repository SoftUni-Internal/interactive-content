[slide hideTitle]
# Rezumat


## În această lecție ai învățat:

- Complexitate algoritmică
- **Stacks** - Ultima în prima ieșire -**LIFO**

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


- **Queues** - Primul intrat primul iesit -**FIFO**

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
- **Coadă Prioritară**

```java 
PriorityQueue<Integer> numbers = new PriorityQueue<>();
```


## În lecția următoare, veți învăța:

- Matrice în Java
- Ce este matricea multidimensională?
- Declararea și crearea de tablouri multidimensionale
- Inițializarea tablourilor multidimensionale
- Accesarea elementelor
- Citirea și tipărirea unei matrice



[/slide]