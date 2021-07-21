# How Does the Internet Work?

[slide hideTitle]

# Web Server Work Model

A web server is a piece of **software** operated by a computer.

It acts as a **link** between the **browser** and the **database**.

The flow of data retrieval encompasses three steps:

- the **client** demands a piece of information 
- the **web server** communicates with the **database**
- after retrieving the needed **resources**, the server sends a **response** to the **client**

The following image illustrates how web servers provide the connection between **browsers** and **databases**:

[image assetsSrc="Java-Web-Introduction-To-The-Internet-1.png" /]

[/slide]

[slide hideTitle]

# Important Definitions

The **Internet** is a complex concept to grasp.

However, nothing is impossible with good **foundations**.

Here are some of the **basic definitions** needed to understand the Internet:

- `Client` - an **application** (typically a **browser**), stored on a **user's computer** that **communicates** over the Internet

- `Server` - a piece of software that connects the **client** to a database, stored **away** from the user's machine

- `Network Protocol` - **Network protocols** define the rules for **data transfer** on the Internet

- `Packets` - A packet is a simple **unit of data**, transferred through the Internet

- `TCP vs UDP` - **transfer protocols**
    * **UDP** is **more lightweight** but **less reliable** than **TCP**

[/slide]

[slide hideTitle]

# Servers and Clients

**Servers** and **clients** are the two sides of **Internet communication**.

**Clients** typically **request** and use different kinds of **data**.

**Servers** are responsible for locating the information in the database and presenting it to the client.

The whole **client-server** relationship is very similar to the **consumer-producer** one in the real world.

The **browsers**, like the **consumers**, always need something and make requests for different **services**.

The **servers**, like the **producers**, are the ones providing the **services** a browser needs.

[/slide]

[slide hideTitle]

# Network Protocol

As covered in a previous part of the lesson, **network protocols** set the rules for data transfer on the Internet.

A **network protocol** takes the whole **communication process** and divides it into smaller ones, each responsible for a different task.

They are a set of **rules**, conventions, and data structures that define how the data is transferred.

This **separation of tasks** is known as the **OSI** model and will be covered later in this lesson.

Some of the most widely known Internet protocols are:

- `HTTP` - the Hypertext Transfer Protocol is a **client-server** protocol that is used to retrieve web pages

- `UDP` - the User Datagram Protocol is used by **servers** to **communicate** with the **clients**

- `IP` - the Internet Protocol provides **addressing** and **routing**

- `FTP` -  the File Transfer Protocol is used by **clients** to **transfer** files, like images, documents, etc.

- `TCP` - the Transmission Control Protocol ensures **data integrity** and **reliability**

[/slide]