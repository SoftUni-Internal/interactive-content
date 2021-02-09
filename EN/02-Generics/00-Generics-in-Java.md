# Generics in Java

[slide]

# The Problem Before Java 5.0

Java Generics were introduced in Java 5.0 to provide compile-time type checking and removing the risk of `ClassCastException` that was common while working with collection classes.

It makes the code stable by detecting the bugs at compile time.

Before generics, we can store any type of objects in the collection, i.e., non-generic. 

Now generics force the java programmer to store a specific type of objects.

Let's see the following example:

```java live
List strings = new ArrayList();
strings.add("SoftUni");
strings.add(5);

System.out.println((String)strings.get(0));
// ClassCastException at runtime
System.out.println((String) strings.get(1));
```

The code above compiles fine but throws `ClassCastException` at **runtime** because we are trying to cast Object in the list to String whereas one of the element is of type Integer.

There is no contract that could guarantee that the **return type** of the list is a **String**. 

The defined list could **hold any object**. 

We only know that we are retrieving a list by inspecting the context. 

When looking at types, it can only guarantee that it is an Object, thus requires an explicit cast to ensure that the type is safe.

The cast can cause type-related **runtime errors** if a programmer makes a mistake with the explicit casting.


[/slide]

[slide]

# Generics - Type Safety

The core idea behind generics is that programmers can express their intention of using **specific types** and **the compiler can ensure the correctness of such type.**

The following example illustrates Generics using `ArrayList` but you can use any collection class such as `LinkedList`, `HashSet`, `TreeSet`, `HashMap`, `Comparator` etc:

```java
List<String> strings = new ArrayList<String>();
strings.add("SoftUni");

// Compile time error
strings.add(3); 
```
Let's explain what does the code above:

By adding the diamond operator `<>` containing the type, we narrow the specialization of this list only to String type i.e. we specify the type that will be held inside the list. 

The compiler can enforce the type at compile time.

In small programs, this might seem like a trivial addition, however, in larger programs, this can add significant robustness and makes the program easier to read.

The main features of Generics are:

- **Type-safety** - we can hold only a single type of objects in generics
- **Type casting is not required** - there is no need to typecast the object
- **Compile-Time Checking** - it is checked at compile time so problem will not occur at runtime

The good programming strategy says it is far better to **handle the problem at compile time** than runtime.

[/slide]