# Introduction to Debugging

[slide hideTitle]

# What is Debugging?

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-3-4-what-is-debugging-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The process of locating an **error** (**bug**) and after that fixing it is called **Debugging**.

There are a few steps that we have to follow when we are **debugging** a program:

- Identifying the **problem**

- Isolating the **source** of the problem

- **Fixing** the problem

There are **Debugging tools** that help us to locate the bugs.

The **Debugging tools** are also called **debuggers**.

[/slide]

[slide hideTitle]

# Debugging vs. Testing

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-5-debugging-vs-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There is a difference between **Testing** and **Debugging**.

**Testing** is the process of confirming if the software has bugs.

We **test** the application to **make sure that it works** as it is supposed to work.

We **debug** the application **after it has failed**.

**Debugging** is done to fix the error found during the testing.

**Debugging** cannot be **automated**, unlike the **testing**, which can be **automated** or **manual**.

**Debugging** can only be **manual**.

**Testing** is done by a tester, while the **debugging** can be done by a programmer.

[/slide]

[slide hideTitle]

# Importance of Debugging

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-6-Importance-of-debugging-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Debugging** is one of the most important steps when developing an application.

Because there are factors that are not predictable or we cannot control.

In other words, there is **no such thing as "perfect code"**.

There are many legacy projects written many years ago.

In scenarios like this one, we have to orientate quickly.

Debugging will help to understand the project in depth.

**Interesting fact** is that, bugs cause about $60 Billion per year in economic losses.

An example is the [Cluster Spacecraft Failure](https://en.wikipedia.org/wiki/Cluster_(spacecraft)#Launch_failure).

[/slide]

[slide hideTitle]

# Debugging Philosophy

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-7-debugging-philosophy-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can imagine that **debugging** is a tree.

The different branches represent independent **theories**.

Every branch is a **potential error**.

The leaves on the branches are the potential causes of the bug.

When we traverse the tree, we process the information that it stores.

Every action consumes time but there is a way to reduce the time consumed. For example:

- Visualization

- Traverse the code carefully

- Using a [recognition pattern](https://en.wikipedia.org/wiki/Pattern_recognition)

[/slide]
