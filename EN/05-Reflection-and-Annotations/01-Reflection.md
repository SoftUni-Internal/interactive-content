# Reflection

[slide hideTitle]

# Metaprogramming

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-3-5-6-7-reflection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metaprogramming is a **programming technique** that allows us to create software that modifies itself or other software using **metadata**.

Software can be designed to read, generate, transform or analyze our data.

**Java reflection** is a process of examining or modifying internal properties or behavior of a class at **runtime**.

## What is Reflection

Let us see a more **detailed explanation** of what reflection is.

All objects in Java have a `getClass()` method. 

This method allows us to determine the object's class even if we do not know it **when compiling**.

That might seem insignificant, but such a process is **not possible in less dynamic languages**, such as `C++`.

Reflection allows us to create programs that can aquire additional information at runtime. 

This makes computer code **dynamic**.

Many **frameworks** use reflection utilizing this effect. 

For example, if we need to create a framework that has to **interoperate** with **user-defined classes** and we do not know what the members will be, reflection will allow us to deal with any class without specifying it in advance.

However, we must know when to use **reflection** and when we should avoid it.

Let us see in what cases we **should not** use reflection.

- Reflection is significantly **slower** than calling methods directly by name because it has to **inspect** the metadata, instead of just using **precompiled addresses** and **constants**.

- By using reflection we can retrieve the definition of a `protected` or `final` member, remove the protection and manipulate it
    * this can be very dangerous for software security

[/slide]
