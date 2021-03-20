# Priority Queues

[slide hideTitle]

# PriorityQueue

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-41-Priority-Queue-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**PriorityQueue** is a special type of queue. Its elements are **retrieved in sorted order**. 

This is based on the natural order of the data type contained inside the queue. The smallest element will always be at the head of the queue when retrieved.

Imagine we want to remove an integer from a PriorityQueue filled with numbers. Each time we remove an element, **the smallest number** will be retrieved first and then the next one until the queue is empty.

It is important to note that the elements of a Priority Queue might not be stored in any particular order internally, but they will always be retrieved in sorted order.

```java live
PriorityQueue<Integer> numbers = new PriorityQueue<>();
        
    numbers.add(5);
    numbers.add(4);
    numbers.add(2);
    numbers.add(7);
    numbers.add(1);
    numbers.add(6);
    numbers.add(3);

    while (numbers.size() > 0){
        System.out.println(numbers.poll());
    }
```

As you can see, the numbers are retrieved in ascending order, despite their order of insertion.

## Custom Comparators

You can specify your own ordering by passing a **custom Comparator** to the Priority Queue. 

```java live
Comparator<Integer> integerComparator = (a, b) -> {
            if (a < b) {
                return 1;
            }
            return -1;
        };

PriorityQueue<Integer> numbers = new PriorityQueue<>(integerComparator);
        
    numbers.add(5);
    numbers.add(4);
    numbers.add(2);
    numbers.add(7);
    numbers.add(1);
    numbers.add(6);
    numbers.add(3);

    while (numbers.size() > 0){
        System.out.println(numbers.poll());
    }
```

This example receives the same numbers as the previous one, but they are now returned in **descending order** because we added our own Comparator.

Here is an example with strings:


```java live
PriorityQueue<String> strings = new PriorityQueue<>();
    strings.add("Anna");
    strings.add("T");
    strings.add("A");
    strings.add("George");

    while (strings.size() > 0){
        System.out.println(strings.poll());
    }
```

In the example above, the elements are removed based on the natural order of strings, which is **alphabetical order**. When two strings start with the same character, their lengths are compared and the shortest one is removed first.

[image assetsSrc="Java-Advanced-Stack-and-Queues-12.png" /]


[/slide]
