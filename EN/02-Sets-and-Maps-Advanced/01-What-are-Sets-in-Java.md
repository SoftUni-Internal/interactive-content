# Sets

[slide hideTitle]
# What are Sets in Java?

The Java **Collection Framework** contains numerous **interfaces**, one of which is the **Set** Interface, that provides the features of the mathematical set in Java.

The **Set** extends the **Collection** interface.

**Interfaces** in Java represent **behavior**, without specifying any sort of **implementation**.

What the interface does is specify that **certain methods** with particular behavior exist and any class implements them.

**Interfaces** are not in the **scope of this course**, we are going to learn in-depth about Interfaces in the Java OOP course.

**There are three different types of Sets:**
- `HashSet<E>`
- `TreeSet<E>`
- `LinkedHashSet<E>`

**The main features of the Sets are:**
- Duplicate elements are not allowed.
- Elements are not stored in order.
- Offers very fast performance.
- Set can have **only a single null value** at most.
- Unlike List and arrays, Set does **NOT** support indexes or positions of its elements.

**Based on the features of the Sets, it is better to use them when:**
- You want to store elements distinctly without duplication, or unique elements.
- You want fast performance and don't care about the order of elements.

**For example**, you can use a Set:
-  to store **unique integer numbers**
-  to store **cards randomly in a card game**
-  to store **numbers in random order**, etc.

You can find out more about Interfaces [here](https://docs.oracle.com/javase/tutorial/java/concepts/interface.html#:~:text=Interfaces%20form%20a%20contract%20between,the%20class%20will%20successfully%20compile.).

[/slide]
