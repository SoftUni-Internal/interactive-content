[slide hideTitle]

# Hypertext Transfer Protocol

In the last lesson when we learned about the OSI Model, we mentioned HTTP and the fact that it works on the last **Application layer** of the protocol. 

Now let's expand our knowledge by having a closer look at the **HTTP - Hypertext Transfer Protocol** and try to understand why is so important for every developer to know how to work with this protocol in great detail.

The HTTP is a text-based protocol that allows us to fetch resources such **HTML Documents, Pictures, Files, etc**. over the internet.

It is the main way for internet communication today, we use it daily as programmers, and the reason for it is because as it is text-based and follows strict rules the **Hypertext Transfer Protocol** is easy to read both from computers and programmers.

Implemented as a **Request-Response** Protocol, which means that when a client wants to receive data from a given server it should Ask **(Request)** it first.

Further, the server reads the **Request** gathers the needed data, and sends a **Response** to the client containing the request's resource.

For instance, when we want to open a given page, the first request will be sent, asking the server to send us the **HTML** for the front page, the server will read our request and give us a **Response** with the needed **HTML** to load the page.

One thing that we will mention but we will not cover is that **HTTP** is **stateless** meaning it can not make a connection between two **Requests**, there is a way for solving this problem but we will look at it in our next lesson.

Let's have a look at this graphic and try to remind ourselves about the different layers in the **OSI Model** and how they work together. 

[image assetsSrc="02-Java-Spring-Fund-HTTP.png" /]

Can you notice is, just as the model suggests, every time that we want to communicate with the server as clients we send an **HTTP Request**, this request, following the different **OSI Model levels** reaches our server, using the same schema for translating back to human-readable **HTTP**.
[/slide]

[slide hideTitle]

# HTTP Request Methods

Now let's have a close look in **HTTP Requests** and learn what methods each **Request** can define.

The protocol defines a set of request methods to indicate the desired action to be performed for a chosen resource.

The basic methods can be:

| **Method** | **Description** |
| --- | --- |
| **GET** | Request using **GET** should only retrieve data. |
| **POST** | **POST** method is used when we send data to the server, just like a simple login form |
| **PUT** | **PUT** is used when we want to update a given resource. |
| **DELETE** | **DELETE** tells our server that we want to delete a given resource. |
|   |   |

Each method type implements a different meaning, but they also share common features.

Let's see an example of a typical HTTP Conversation:

```java
//HTTP REQUEST
GET /courses/javascript HTTP/1.1​
Host: www.softuni.org
User-Agent: Mozilla/5.0​
<CRLF> //The empty line denotes the end of the request header.

//HTTP RESPONSE
HTTP/1.1 200 OK​
Date: Mon, 5 Jul 2010 13:09:03 GMT​
Server: Microsoft-HTTPAPI/2.0​
Last-Modified: Mon, 12 Jul 2014 15:33:23 GMT​
Content-Length: 54​
<CRLF>​ //The empty line denotes the end of the request header.
<html><title>Hello</title>​
Welcome to our site</html>
```


We will explore the **Request** and **Response** in-depth in the next slides,

but you will get to know the methods faster if you start exploring the different data we send through the network when we communicate with a given website. 

You can do that by checking the **Developer's Toolbar** by pressing **F12 for the most browsers** and choosing the **Network Tab** this is where all the HTTP communication can be seen.

[/slide]
