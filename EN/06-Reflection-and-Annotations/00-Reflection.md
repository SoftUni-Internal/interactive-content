[slide]

# What is Metaprogramming?

Hello there! Today we will learn about Reflection and Reflection API in Java.

Lets first take a look at what is "**Metaprogramming**".

Metaprogramming is a **programming technique** that allows us to write a software which modify itself or other software using **metadata**.

Software can be design to read, generate, transform or analyze our data.

Based on that we can tell that **Java Reflection** is a process of examine or modifying internal properties or behavior of a class at **runtime**.

Lets see now a little more **detailed explanation** of what Reflection is.

All objects in Java own `getClass()` method. This method allows us to determine the object's class even if we don't know it during **compile time**.

This might seem insignificant, but such reflection is not possible in less dynamic languages such as **C++**.

The importance here is that Reflection is allowing us to write programs that do not have to **know** everything at compile time. That makes them more dynamic.

Lots of **frameworks** use reflection because of that. 

For example, if we need to write a framework that has to **interoperate** with **user-defined classes** and we do not know what the members will be Reflection will allow us to deal with any class without knowing it in advance.

However, we must be aware when to use **Reflection** and when we try to avoid it.


Lets see in what cases we **don't** use Reflection.

- Reflection is significantly **slower** rather than calling methods by their name, because it has to **inspect** the metadata instead of just using **precompiled addresses** and **constants**.

- By using Reflection we can retrieve the definition of a `protected` or `final` member, remove the protection and manipulate it. This can be very dangerous for ur software security.



[/slide]