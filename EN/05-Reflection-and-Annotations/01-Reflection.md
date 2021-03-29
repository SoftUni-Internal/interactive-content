# Reflection

[slide hideTitle]

# Metaprogramming

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-3-5-reflection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metaprogramming is a **programming technique** that allows us to write software that modifies itself or other software using **metadata**.

The software can be designed to read, generate, transform or analyze our data.

Based on that we can tell that **Java reflection** is a process of examining or modifying internal properties or behavior of a class at **runtime**.

## What is Reflection

Let us see a little more **detailed explanation** of what reflection is.

All objects in Java own a `getClass()` method. 

This method allows us to determine the object's class even if we do not know it during **compile time**.

That might seem insignificant, but such a process is **not possible in less dynamic languages**, such as `C++`.

Reflection allows us to write programs that do not have to **know** everything at compile time. 

That makes them more **dynamic**.

Lots of **frameworks** use reflection because of that. 

For example, if we need to write a framework that has to **interoperate** with **user-defined classes** and we do not know what the members will be, reflection will allow us to deal with any class without knowing it in advance.

However, we must be aware of when to use **reflection** and when we have to avoid it.

Let us see in what cases we **do not** use reflection.

- Reflection is significantly **slower** than calling methods by their name because it has to **inspect** the metadata, instead of just using **precompiled addresses** and **constants**.

- By using reflection we can retrieve the definition of a `protected` or `final` member, remove the protection and manipulate it
    * this can be very dangerous for your software security

[/slide]
