[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/RO/java-advanced-stacks-and-queues-42-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- **Stive** - Last In First Out (LIFO)

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


- **Cozi** - First In First Out (FIFO)

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
- **Coadă Prioritară** - un tip special de coadă în care elementele sunt preluate în ordinea lor naturală, dacă un comparator personalizat nu este specificat

```java 
PriorityQueue<Integer> numbers = new PriorityQueue<>();
```


## În lecția următoare veți învăța:

- Matrice
- Matrice multidimensionale: declarare, creare, inițializare
- Accesarea elementelor matricelor
- Citirea și tipărirea unei matrice



[/slide]
