[slide hideTitle]

# HTTP Basics

In the last lesson when we learned about the OSI Model, we mentioned HTTP and the fact that it works on the last **Application layer** of the protocol. 

HTTP is a text-based protocol that allows us to fetch resources such **HTML documents, pictures, and files** over the internet.

It stands for **Hypertext Transfer Protocol**, and it is used for transferring data and commands across the internet and is also applicable in IoT applications.

HTTP is implemented as a **request-response** protocol, which means that when a client wants to receive data from a given server it should ask, or **(request)** it first.

[image assetsSrc="02-Java-Spring-Fund-HTTP-img1.png" /]


Further, the server reads the **request**, gathers the required data, and sends a **Response** to the client containing the requested resource.

For instance, when we want to open a web page, a request is sent by the client (the browser), asking the server to send us the **HTML** for the page, the server will read our request and give us a **response** with the needed **HTML** to load the page.

An important thing to mention is that **HTTP** is **stateless**.

It does not keep track of who requested what and does not preserve any sort of state, and the server will not establish any relation between previous and future requests.
[/slide]

[slide hideTitle]

# Hyper Text Transfer Protocol

The below diagram shows the different layers in the **OSI Model** we previously covered and how they work together with the HTTP protocol. 

[image assetsSrc="02-Java-Spring-Fund-HTTP-v2.png" /]

Just as the model suggests, every time that the client wants to communicate with the server it sends an **HTTP Request**.

This request, following the different **OSI Model levels** reaches the server, using the same schema for translating back to human-readable **HTTP**.

The responses received by the client are in human-readable format with status codes attached to them.

[/slide]

[slide hideTitle]

# HTTP Request Methods

The protocol defines a set of **request methods** to indicate an action to be performed for a chosen resource.

These are also called request types or methods.

The basic methods are:

| **Method** | **Description** |
| --- | --- |
| **GET** | Used for retrieving data from the server |
| **POST** | Used when we send data to the server, for example, login information or a new user registration |
| **PUT** | Same as a post request but with the intention of replacing a resource |
| **DELETE** | Deletes a resource |
| **PATCH**  | When applying changes to a resource  |
| **HEAD**  | This is a GET request that only returns the headers without the actual content  |


Each method type has a different meaning, but they also share common features.

Let us see an example of a typical HTTP request and response situation:

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

`<CRLF>` stands for carriage return and line feed, it indicates a single blank line that is used to mark the end of a request or a response.

If you start exploring the different data we send through the network when we communicate with a given website you will learn the methods faster. 

You can explore how this works in your browser's developer tools, this will help you understand the methods faster.

You can do that by checking the **Developer's Tools** by pressing **F12 for most browsers** and choosing the **Network Tab**, which is where all the HTTP communication can be seen.

[/slide]
