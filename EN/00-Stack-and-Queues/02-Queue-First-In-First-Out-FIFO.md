# Queue: First In First Out (FIFO)

[slide hideTitle]

# Queues

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-26-27-Queue-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Queues** are data structures similar to **stacks**. 

Queue elements are ordered according to the **FIFO** principle - **First In First Out**. 

When you add an element, it is always placed **at the bottom** of the queue. 

Removing an element removes it from **the top** of the queue.

This data structure is modeled based on the concept of queues we are all familiar with, where the person who comes first is served before everyone else.

[/slide]

[slide hideTitle]

# Queue: Abstract Data Type

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-28-Queue-Abstract-Data-Type-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Adding an element to the end of the queue (the bottom of the queue):

[image assetsSrc="Java-Advanced-Stack-and-Queues-4.png" /]

- Removing the first element from the queue (the first element is the element at the top):

[image assetsSrc="Java-Advanced-Stack-and-Queues-5.png" /]

- Getting the first element of the queue without removing it:

[image assetsSrc="Java-Advanced-Stack-and-Queues-6.png" /]


[/slide]

[slide hideTitle]

# Implementing Queue with ArrayDeque

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-29-30-34-ArrayDeque-Java-Implementation-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Queue implementation using the `ArrayDeque<E>` class:

```java
ArrayDeque<Integer> queue = new ArrayDeque<>();
```

- `offer(element)` and `add(element)` - both methods add the element to the end of the queue. The difference between them is that

    - `add()` - throws an **exception** if the queue is full

    - `offer()` - returns **false** if the queue is full


- `poll()` and `remove()` - both methods remove the first (the top) element from the queue

    - `remove()` - throws an **exception** if the queue is empty

    - `poll()` - **returns null** if the queue is empty, otherwise returns the removed element


- `peek()` - returns the value of the first element (the one on the top)

[/slide]

[slide hideTitle]

# Queue Operations

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-31-33-Add-Remove-Peak-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Add() / Offer()

Both methods are used for adding elements to the top of the queue.

```java live 
ArrayDeque<Integer> queue = new ArrayDeque<>();

queue.offer(2);
queue.add(5);
queue.offer(10);
        
System.out.println(queue);
```

They are used in different scenarios:

- if the queue has **no size restriction** (unlimited capacity queue) - then you can use either of the two functions

- if the queue is **capacity-restricted**, it is generally better to use `offer()` because if the function fails, it simply returns **false** without throwing an exception

- if you use `add()` with a capacity-restricted queue and it fails, this would result in an **IllegalStateException** that has to be handled

[image assetsSrc="Java-Advanced-Stack-and-Queues-7.gif" /]


## Remove() / Poll()

Both functions remove the first (top) element from the queue.

The main difference between the two is that when used on an empty queue `poll()` returns **null**, while `remove()` throws a **NoSuchElementException**.

Here is an example with `poll()`:

```java live
ArrayDeque<Integer> queue = new ArrayDeque<>();

queue.offer(2);
queue.add(5);
queue.offer(10);

// remove
System.out.println("The removed element is: " + queue.poll());
queue.forEach(element -> System.out.print(element + " "));
```
It does not matter if we use **remove()** or **poll()** here. Both would do exactly the same because the queue is not empty.

Things are different when working with an empty queue:

```java live
ArrayDeque<Integer> queue = new ArrayDeque<>();
System.out.println("The removed element is: " + queue.poll());
```

The above result will be **null** but if you try using `remove()` in the same scenario, the method will throw an error:

```java live
ArrayDeque<Integer> queue = new ArrayDeque<>();
System.out.println(queue.remove());
```

Running the last piece of code will result in a **NoSuchElementException**.


[image assetsSrc="Java-Advanced-Stack-and-Queues-8.gif" /]


## Peek()

This function returns the first element of the queue (the bottom element) without removing it.

```java live
ArrayDeque<Integer> queue = new ArrayDeque<>();

queue.offer(2);
queue.add(5);
queue.offer(10);

System.out.println("The first element is: " + queue.peek());
queue.forEach(element -> System.out.print(element + " "));
```

[image assetsSrc="Java-Advanced-Stack-and-Queues-9.gif" /]

[/slide]


[slide hideTitle]
# Utility Methods

- `size()` - returns the number of elements in the queue:

```java live
ArrayDeque<String> queueOfBooks = new ArrayDeque<>();
queueOfBooks.add("Of Mice and Men");
queueOfBooks.add("The Great Escape");
queueOfBooks.add("A Guide in Lucid Dreaming");

System.out.println("The size of this queue is: " + queueOfBooks.size());
```

- `toArray()` - converts the queue to an array:

```java live
ArrayDeque<String> queueOfWords = new ArrayDeque<>();
queueOfWords.add("Rocket");
queueOfWords.add("Paper");
queueOfWords.add("Tank");

Object[] arr = queueOfWords.toArray();

for (int j = 0; j < arr.length; j++) {
    System.out.println(arr[j]); 
}
```

- `contains(element)` - checks if the queue contains the specified element. Returns **true** if the element is found and **false** if it is not:

```java live
ArrayDeque<String> queueOfWords = new ArrayDeque<>();
queueOfWords.push("Plush Bear");
queueOfWords.push("Ridiculous Rabbit");
queueOfWords.push("Boiler");

System.out.println(queueOfWords.contains("BMW 7"));
```

[/slide]

[slide hideTitle]
# Overview of All Operations

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-35-Queue-Overview-of-all-operations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Problem with Solution: Hot Potato

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queues-36-problem-hot-potato-solution-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Hot Potato" taskId="java-advanced-lab-stack-and-queue-Hot-Potato" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Hot Potato is a game, in which **kids form a circle and start passing a hot potato**.

The counting starts with the first kid.

**Every n-th toss, the kid holding the potato, leaves the game**.

When a kid leaves the game, it passes the potato to the next kid.

This continues repeating **until there is only one kid left**.

Create a program that simulates the game of Hot Potato.

**Print the name of every kid that is removed from the circle**.

In the end, **print the name of the last kid**.

## Input

- On the first line, you will receive the names of the kids separated by space

- On the second line, you will receive a number **n** representing the n-th toss of the potato. Remember, **every n-th toss, the kid holding the potato at that point, leaves the game**

## Output

- Each time a kid leaves the game, print a message in the format: `Removed {name}`.

- When the game ends, print the name of the winner: `Last is {name}`


## Examples
| **Input** | **Output** |
| --- | --- |
| Maria Peter Johny | Removed Peter |
| 2 | Removed Maria |
|  | Last is Johny |


| **Input** | **Output** |
| --- | --- |
| George Peter Michael Steven Christian | Removed Christian |
| 10 | Removed Peter |
|  | Removed Michael |
|  | Removed George |
|  | Last is Steven |


| **Input** | **Output** |
| --- | --- |
| George Peter Michael Steven Christian | Removed George |
| 1 | Removed Peter |
|  | Removed Michael |
|  | Removed Steven |
|  | Last is Christian |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Maria Peter Johny
2
[/input]
[output]
Removed Peter
Removed Maria
Last is Johny
[/output]
[/test]
[test open]
[input]
George Peter Michael Steven Christian
10
[/input]
[output]
Removed Christian
Removed Peter
Removed Michael
Removed George
Last is Steven
[/output]
[/test]
[test open]
[input]
George Peter Michael Steven Christian
1
[/input]
[output]
Removed George
Removed Peter
Removed Michael
Removed Steven
Last is Christian
[/output]
[/test]
[test]
[input]
A B C D E
100
[/input]
[output]
Removed E
Removed D
Removed A
Removed C
Last is B
[/output]
[/test]
[test]
[input]
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
26
[/input]
[output]
Removed Z
Removed A
Removed C
Removed F
Removed J
Removed O
Removed U
Removed E
Removed P
Removed B
Removed R
Removed K
Removed G
Removed D
Removed I
Removed Q
Removed Y
Removed W
Removed H
Removed T
Removed X
Removed L
Removed N
Removed V
Removed S
Last is M
[/output]
[/test]
[test]
[input]
A
1
[/input]
[output]
Last is A
[/output]
[/test]
[test]
[input]
A B
1
[/input]
[output]
Removed A
Last is B
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
999
[/input]
[output]
Removed 3
Removed 1
Removed 5
Removed 4
Removed 6
Last is 2
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: Math Potato

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queues-39-math-potato-problem-and-solution-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Math Potato" taskId="java-advanced-lab-stack-and-queue-Math-Potato" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Rework the previous solution so that a **kid is removed only on a composite (not prime) cycle** (cycles start from 1).

If a **cycle is prime**, **print the kid's name**.

Print the name of the last remaining kid.
 
## Examples
| **Input** | **Output** |
| --- | --- |
| Maria Peter Tom | Removed Peter |
| 2 | Prime Maria |
|  | Prime Tom |
|  | Removed Maria |
|  | Last is Tom |


| **Input** | **Output** |
| --- | --- |
| George Peter Michael Steven Christian | Removed Christian |
| 10 | Prime Peter |
|  | Prime Michael |
|  | Removed Steven |
|  | Prime George |
|  | Removed George |
|  | Prime Michael |
|  | Removed Peter |
|  | Last is Michael |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Maria Peter Tom
2
[/input]
[output]
Removed Peter
Prime Maria
Prime Tom
Removed Maria
Last is Tom
[/output]
[/test]
[test open]
[input]
George Peter Michael Steven Christian
10
[/input]
[output]
Removed Christian
Prime Peter
Prime Michael
Removed Steven
Prime George
Removed George
Prime Michael
Removed Peter
Last is Michael
[/output]
[/test]
[test]
[input]
A B C D E
100
[/input]
[output]
Removed E
Prime D
Prime C
Removed B
Prime C
Removed C
Prime A
Removed D
Last is A
[/output]
[/test]
[test]
[input]
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
26
[/input]
[output]
Removed Z
Prime A
Prime A
Removed A
Prime C
Removed D
Prime G
Removed I
Removed M
Removed R
Prime X
Removed F
Prime O
Removed V
Removed H
Removed T
Prime K
Removed X
Prime P
Removed J
Removed C
Removed B
Prime G
Removed K
Removed P
Removed E
Removed W
Removed G
Prime S
Removed N
Prime Q
Removed S
Removed U
Removed L
Removed Q
Removed O
Last is Y
[/output]
[/test]
[test]
[input]
A
1
[/input]
[output]
Last is A
[/output]
[/test]
[test]
[input]
A B
1
[/input]
[output]
Removed A
Last is B
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
999
[/input]
[output]
Removed 3
Prime 1
Prime 5
Removed 2
Prime 6
Removed 4
Prime 1
Removed 6
Removed 1
Last is 5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

