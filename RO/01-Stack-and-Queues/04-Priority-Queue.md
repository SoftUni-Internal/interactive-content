# Priority Queue

[slide]
# Priority Queue

Unlike normal queues, **priority queue** elements are **retrieved in sorted order**.

Suppose, we want to **retrieve elements** in the **ascending order**.

In this case, **the head of the priority queue will be the smallest element**.

Once this element is retrieved, **the next smallest element will be the head of the queue**.

It is important to note that the elements of a priority queue **may not be sorted**.

However, elements are **always retrieved in sorted order**.

Let's see the following example:
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
As you can see, we retrieve numbers through ascending orders, despite their order of insertion.


[/slide]