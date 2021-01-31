# Queue: First In First Out (FIFO)

[slide hideTitle]

# Queue Functionality

**Queues** are data structures similar to **stacks**. It keeps its elements in sorted order. Queue elements are ordered based on the **FIFO** principle - **First In First Out**. When you add an element, it is always placed **at the bottom** of the queue. Removing an element removes it from **the top** of the queue.

This data structure is modeled based on queues in real life, where the person who comes first is served before everyone else.

[/slide]

[slide hideTitle]

# Queue: Abstract Data Type


- Adding an element to the the end of the queue (the bottom of the queue)

[image assetsSrc="Java-Advanced-Stack-and-Queues-4.png" /]

- Removing the first element from the queue (the first element is the element at the top)

[image assetsSrc="Java-Advanced-Stack-and-Queues-5.png" /]

- Getting the first element of the queue without removing it

[image assetsSrc="Java-Advanced-Stack-and-Queues-6.png" /]


[/slide]

[slide hideTitle]

# Implementing Queue with ArrayDeque


- Queue Implementation using `ArrayDeque<E>`

```java
ArrayDeque<Integer> queue = new ArrayDeque<>();
```

- `offer(element)` and `add(element)` - both methods add elements to the end of the queue. The difference between them is that:

    - `add()` - throws **exception** if the queue is full

    - `offer()` - returns **false** if the queue is full





- `poll()` and `remove()` - both methods remove the first (the top) element from the queue:

    - `remove()` - throws **exception** if the queue is empty

    - `poll()` - **returns null** if the queue is empty, otherwise returns the removed element



- `peek()` - gets the value of the first element

[/slide]

[slide hideTitle]

# Add() / Offer()

Both functions are used for adding elements to the top of the queue.

```java live 
ArrayDeque<Integer> queue = new ArrayDeque<>();

queue.offer(2);
queue.add(5);
queue.offer(10);
        
System.out.println(queue);
```

They are used in different scenarios:

- if the queue has no size restriction (unlimited capacity queue) - then you can use either of the two functions

- if the queue is capacity-restricted, it is generally better to use `offer()` because if the function fails, it simply returns  **false**. If you use `add()` with a capacity-restricted queue and it failed, this would result in an **IllegalStateException** that has to be handled

[image assetsSrc="Java-Advanced-Stack-and-Queues-7.gif" /]


[/slide]

[slide hideTitle]

# Remove() / Poll()

Both functions remove the first/top element of the queue, removing it from the queue.

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
It does not matter if we use **remove** or **poll** here. Both would do exactly the same, because the queue contains some elements.

Things are different when working with an empty queue:

``java live
ArrayDeque<Integer> queue = new ArrayDeque<>();
System.out.println("The removed element is: " + queue.poll());
```

The above results in **null** but if you try using `remove()` in the same scenario, you end up with an error:

``java live
ArrayDeque<Integer> queue = new ArrayDeque<>();
System.out.println(queue.remove());
```

Running the last piece of code should result in a **NoSuchElementException**.


[image assetsSrc="Java-Advanced-Stack-and-Queues-8.gif" /]


[/slide]

[slide hideTitle]

# Peek()

This function returns the first element of the queue (the bottom element), without removing it.

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

- `size()` - returns the number of elements in the queue

```java live
ArrayDeque<String> queueOfCars = new ArrayDeque<>();
queueOfCars.add("Of Mice and Men");
queueOfCars.add("The Great Escape");
queueOfCars.add("A Guide in Lucid Dreaming");

System.out.println("The size of this queue is: " + queueOfCars.size());
```

- `toArray()` - converts the queue to an array

```java live
ArrayDeque<String> queueOfCars = new ArrayDeque<>();
queueOfCars.add("Rocket");
queueOfCars.add("Paper");
queueOfCars.add("Tank");

Integer[] arr = queueOfCars.toArray();

 for (String element: arr) {
        System.out.println(element);
    }
```

- `contains(element)` - checks if the queue contains the element or not. Returns **true** if the element is found and **false** if it is not found.

```java live
ArrayDeque<String> queueOfCars = new ArrayDeque<>();
queueOfCars.push("Plush Bear");
queueOfCars.push("Ridiculous Rabbit");
queueOfCars.push("Boiler");

System.out.println(queueOfCars.contains("BMW 7"));
```

[slide hideTitle]
# Overview of All Operations

The animation below illustrates all the queue operations that we can use for solving the upcoming programming problems.

[image assetsSrc="Java-Advanced-Stack-and-Queues-11.gif" /]

[/slide]

[slide hideTitle]
# Problem: Hot Potato
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
Hot potato is a game in which **kids form a circle and start passing a hot potato**.

The counting starts with the first kid.

**Every n-th toss, the kid left holding the potato leaves the game**.

When a kid leaves the game, it passes the potato forward.

This continues repeating **until there is only one kid left**.

Create a program that simulates the game of Hot Potato.

**Print the name of every kid that is removed from the circle**.

In the end, **print the name of the last kid**.

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
# Solution: Hot Potato
[code-task title="Hot Potato" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] kidren = scanner.nextLine().split("\\s+");
        int n = Integer.parseInt(scanner.nextLine());

        ArrayDeque<String> queue = new ArrayDeque<>();

        for (String kid : kidren) {
            queue.offer(kid);
        }
        while (queue.size() > 1) {
            for (int i = 1; i < n; i++) {
                queue.offer(queue.poll());
            }
            System.out.println("Removed " + queue.poll());
        }
        System.out.println("Last is " + queue.poll()); 
    }
}
```
[/code-editor]
[task-description]
## Description
Hot potato is a game in which **kids form a circle and start passing a hot potato**.

The counting starts with the first kid.

**Every n-th toss, the kid left holding the potato leaves the game**.

When a kid leaves the game, it passes the potato forward.

This continues repeating **until there is only one kid left**.

Create a program that simulates the game of Hot Potato.

**Print the name of every kid that is removed from the circle**.

In the end, **print the name of the last kid**.

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
# Problem: Math Potato
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
Rework the previous problem so that a **kid is removed only on a composite (not prime) cycle** (cycles start from 1).

If a **cycle is prime**, just **print the kid's name**.

As before, print the name of the last remaining kid.
 
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

[slide hideTitle]
# Solution: Math Potato
[code-task title="Math Potato" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] kidren = scanner.nextLine().split("\\s+");
        int n = Integer.parseInt(scanner.nextLine());

        ArrayDeque<String> queue = new ArrayDeque<>();

        for (String kid : kidren) {
            queue.offer(kid);
        }
        int cycle = 1;

        while (queue.size() > 1) {
            for (int i = 1; i < n; i++)
                queue.offer(queue.poll());

            if (isPrime(cycle))
                System.out.println("Prime " + queue.peek());
            else
                System.out.println("Removed " + queue.poll());

            cycle++;
        }
        System.out.println("Last is " + queue.poll()); 
    }
    private static boolean isPrime(int number) {
        if (number == 1) {return false;}

        for (int i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
```
[/code-editor]
[task-description]
## Description
Rework the previous problem so that a **kid is removed only on a composite (not prime) cycle** (cycles start from 1).

If a **cycle is prime**, just **print the kid's name**.

As before, print the name of the last remaining kid.


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
