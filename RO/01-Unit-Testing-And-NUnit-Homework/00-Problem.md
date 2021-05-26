# Unit Testing the CircularQueue\<T\> Class

[slide hideTitle]

# Unit Testing the CircularQueue\<T\> Class

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/14.circular-queue-tests-homework-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Please submit the homework a single **zip / rar / 7z** archive holding the source code and any other project assets.

Use the provided source code as starting point.

You are given a C# class `CircularQueue<T>`, which implements the data structure circular queue. Learn more [Here](https://en.wikipedia.org/wiki/Circular_buffer)

[image assetsSrc="Unit-Testing-NUnit-Homework.png" /]

The circular queue internally holds its elements in **array**, where the **start** and the **end** of the queue are **array** indexes. 

In the beginning, the **end index** goes after the **start index**:

[image assetsSrc="Unit-Testing-NUnit-Homework(1).png" /]

After several enqueue / deque operations are executed, the queue elements move right and can cross the array border and continue from its leftmost element. 

In this case the **end index** goes before the **start index**:

[image assetsSrc="Unit-Testing-NUnit-Homework(2).png" /]

The **border crossing** in the circular queue implementation is a little bit tricky and should be handled with care.

[/slide]

[slide hideTitle]

# Write Unit Tests

Your task is to write **unit tests** for the class `CircularQueue<T>`. 

Ensure that the **code coverage** is high and that all interesting cases are covered: test **all public methods**, test the **queue growing**, test the **range crossing** (when the end index comes before the start index) and any other special cases. 

Test the **private methods** indirectly, but especially designed invocations of the public methods.

[hints]
[hint]
Create a Visual Studio solution, holding two projects:

- **CircularQueue** – it will hold the `CircularQueue<T>` class, which should be unit tested

- **CircularQueue.Tests** – it will hold the **test classes**, which cover the circular queue functionality

You may implement the following **test cases**:

[image assetsSrc="Unit-Testing-NUnit-Homework(3).png" /]

[/hint]
[/hints]

[/slide]

[slide hideTitle]

# Testing the Constructor

As start, we can **test the default constructor** of the `CircularQueue<T>` class:

[image assetsSrc="Unit-Testing-NUnit-Homework(4).png" /]

Testing the **constructor with fixed initial capacity** is very similar.

[/slide]

[slide hideTitle]

# Testing Enqueue / Dequene / Peek

Next, we can **test the enqueue method**: create a queue, enqueue few elements and check whether the elements in the queue are as expected:

[image assetsSrc="Unit-Testing-NUnit-Homework(5).png" /]

Test the **enqueue with auto-grow:** enqueue enough elements for overflow the capacity. This will cause auto-grow.

Test the **dequeue** operation: with **non-empty** and with **empty queue**.

Test the **peek** operation: with **non-empty** and with **empty queue**.

[/slide]

[slide hideTitle]

# Testing ToArray() and ToString()

Test also the **ToArray()** and **ToString()** operations, which are quite similar. 

Just enqueue some data, invoke **ToArray() / ToString()** and assert the result is as expected:

[image assetsSrc="Unit-Testing-NUnit-Homework(6).png" /]


[/slide]


[slide hideTitle]

# Testing the Bounds Crossing

In the circular queue the most interesting moment is when **the end index crosses the bounds** of the internal buffer and comes behind the start index. 

This situation should be carefully tested. 

This is an example of test, which causes **range crossing** of the internals buffer bounds:.

[image assetsSrc="Unit-Testing-NUnit-Homework(7).png" /]


[/slide]

[slide hideTitle]

# Combined Test

To test the `CircularQueue<T>` class under heavy load with multiple enqueue / dequeue / peek / to string operations and multiple asserts, we can design a special test, which will repeat the following **300 times**:

- Enqueue 2 new elements
- Peek the first element
- Dequeue the first element
- Check the count of elements
- Check the elements, using **ToArray() / ToString()**

The above will ensure that the underlying circular buffer will auto-grow and overflow the borders multiple times. 

Such test will ensure with high confidence that the class behaves correctly.

This is an example how we can implement such a **complex test with multiple operations and assertions:**

[image assetsSrc="Unit-Testing-NUnit-Homework(8).png" /]

These are the **operations** and **assertions** we can perform at each iteration:

- Check the queue size:

[image assetsSrc="Unit-Testing-NUnit-Homework(9).png" /]

- Enqueue **2 new elements, peek** and **remove 1 element**. 

This will guarantee that the circular buffer will move to the right and will cross the bounds of its underlying array at some moment:

[image assetsSrc="Unit-Testing-NUnit-Homework(10).png" /]

- Check the queue content after each iteration:

[image assetsSrc="Unit-Testing-NUnit-Homework(11).png" /]

[/slide]

[slide hideTitle]

# Performance Test

Finally, we could implement a simple performance test, which **adds 1 million items** in the queue and **removes 0.5 million items** from it. 

It could look like this:

[image assetsSrc="Unit-Testing-NUnit-Homework(12).png" /]

This is an example how your unit tests may look like after successful execution:

[image assetsSrc="Unit-Testing-NUnit-Homework(13).png" /]

[/slide]
