# Sets

[slide hideTitle]
# What are Sets in Java?

The Java **Collection Framework** contains numerous **interfaces**, one of which is the **Set** Interface, that provides the features of the mathematical set in Java.

The **Set** interface extends the **Collection** interface.

**Interfaces** in Java represent a **behavior**, without specifying any sort of **implementations**.

The interface's job is to **specify the existence of certain methods**, with particular behavior, and any class can implement them.

**Interfaces** are not in the **scope of this course**, hence why we are going to learn more in-depth about them in the Java OOP course.

**There are three different types of Sets:**
- `HashSet<E>`
- `TreeSet<E>`
- `LinkedHashSet<E>`

**The main features of the Sets are:**
- Duplicate elements are not allowed
- Elements are not stored in order
- Offers very fast performance
- Can have only a single null value at most
- Unlike List and Arrays, Set does **NOT** support indexing or positioning of its elements

**Based on the features of the Sets, it is better to use them when:**
- You want to store elements distinctly, without duplication, or store unique elements
- You want a faster performance and don't care about the order of the elements

**For example**, you can use a Set to store:
- **Unique integer numbers**
- **Cards randomly in a card game**
- **Numbers in random order**, etc

You can find out more about Interfaces [here](https://docs.oracle.com/javase/tutorial/java/concepts/interface.html#:~:text=Interfaces%20form%20a%20contract%20between,the%20class%20will%20successfully%20compile.).

[/slide]
