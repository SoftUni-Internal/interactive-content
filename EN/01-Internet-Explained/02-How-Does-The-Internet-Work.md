# How does the Internet work?

[slide]

# Web Server Work Model

A web server is a piece of **software**, stored in a computer.

It acts as a **link** between the **browser** and the **database**.

When a **request** is sent from the **client**, it is **handled** by the **web server**, which communicates with the **database**.

After getting the needed **resources**, the server sends a **response** to the **client**.

The following image illustrates how web servers link **browsers** and **databases**:

[image assetsSrc="Java-Web-Introduction-To-The-Internet-1.png" /]

[/slide]

[slide]

# Important Definitions

The **internet** is a very difficult concept to learn.

Like everything else, however, nothing is impossible with good **foundations**.

Here are some of the **basic definitions**, needed to understand the internet:

- `Server and Client` - The **client(browser)** is an **application**, stored on a **user's computer** that **communicates** over the internet. The **server** is a software that connects the **client** to a database, stored **away** from the user's machine

- `Network Protocol` - **Network protocols** define the rules for **data transfer** on the internet

- `Packets` - A packet is a simple **unit of data**, transferred through the internet

- `TCP vs UDP` - Both of them are **transfer protocols**. **UDP**, however, is **lighter** and **less-reliable** than **TCP**

[/slide]

[slide]

# Servers and Clients

**Servers** and **clients** are the two sides of **internet communication**.

The **clients** are the ones, **requesting** and using different kinds of **data**.

The **servers** make sure to get that **data** from wherever it is stored and return it to the client.

The whole **client-server** relationship is very similar to the **consumer-producer** one in the real world.

The **consumers**, not unline **clients**, always need something and make requests for different **services**.

The **producers**, or **servers**, are the ones, providing every **service** a consumer needs.

[/slide]

[slide]

# Network Protocol

As covered in a previous part of the lesson, **network protocols** set the rules for data transfer on the internet.

A **network protocol** takes the large **communication process** and divides it into smaller ones, each responsible for a different task.

This **separation of tasks** is known as the **OSI** model and will be covered later on in the lesson.

Some of the most widely known internet protocols are:

- `HTTP` - Hypertext Transfer Protocol

- `UDP` - User Datagram Protocol

- `IP` - Internet Protocol

- `FTP` - File Transfer Protocol

- `TCP` - Transmission Control Protocol

[/slide]
