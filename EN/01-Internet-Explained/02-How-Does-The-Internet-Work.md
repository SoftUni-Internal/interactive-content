# How Does the Internet Work?

[slide hideTitle]

# Web Server Work Model

[video src="https://videos.softuni.org/hls/Java/Java-Spring-Fundamentals/EN/Internet-Explained/How does the internet works-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A web server is a piece of **software** operated by a computer.

It acts as a **link** between the **browser** and the **database**.

The flow of data retrieval encompasses three steps:

- The **client** demands a piece of information 
- The **web server** communicates with the **database**
- After retrieving the needed **resources**, the server sends a **response** to the **client**

The following image illustrates how web servers provide the connection between **browsers** and **databases**:

[image assetsSrc="Java-Web-Introduction-To-The-Internet-1.png" /]


## Important Definitions

To easily grasp how the Internet works, we must take a look at its underlying structure.

Here are some of the **basic definitions** needed to understand the Internet:

- `Client` - an **application** (typically a **browser**), stored on a **user's computer** that **communicates** over the Internet

- `Server` - a piece of software that connects the **client** to a database, stored **away** from the user's machine
    * for larger databases, this server typically runs on more powerful computers, stored in a data center

- `Network Protocol` - **Network protocols** define the rules for **data transfer** on the Internet
    * these rules ensure proper data transfer, regardless of differences between the client and server's software/hardware

- `Packets` - a **unit of data**, transferred through the Internet
    * transported using a **packet-switched** network
    * consists of control information (**header**) and a **payload** - the user data

- `TCP vs UDP` - **transfer protocols**
    * **UDP** is **more lightweight** but **less reliable** than **TCP**



## Servers and Clients

**Servers** and **clients** are the two sides of **Internet communication**.

**Clients** typically **request** and use different kinds of **data**.

**Servers** are responsible for locating the information in the database and presenting it to the client.

They provide services, like search engines, social media platforms, or e-learning platforms.

The whole **client-server** relationship is very similar to the **consumer-producer** one in the real world.

The **browsers**, like the **consumers**, always need something and make requests for different **services**.

The **servers**, like the **producers**, are the ones providing the **services** a browser needs.

For example, let us say you are trying to **visit** `google.com`.

When you **connect** to the site, Google's servers **handle** your request and return a **response**, in the form of a webpage.



## Network Protocol

As covered in a previous part of the lesson, **network protocols** set the rules for data transfer on the Internet.

A **network protocol** takes the whole **communication process** and divides it into smaller ones, each responsible for a different task.

They are a set of **rules**, conventions, and data structures that define how the data is transferred.

This **separation of tasks** is known as the **OSI** model and will be covered later in this lesson.

Some of the most widely known Internet protocols are:

- `HTTP` - the Hypertext Transfer Protocol is a **client-server** protocol that is used to retrieve web pages

- `UDP` - the User Datagram Protocol provides a mechanism to detect **corrupt data in packets**

- `IP` - the Internet Protocol provides **addressing** and **routing**

- `FTP` -  the File Transfer Protocol is used by **servers** to **transfer** files, like images and documents to the client

- `TCP` - the Transmission Control Protocol ensures **reliable** data transfer between hosts using the Internet Protocol (**IP**)

[/slide]
