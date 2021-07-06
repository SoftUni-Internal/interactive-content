# HTTP Basics

[slide hideTitle]

# What is HTTP?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-3-4-HTTP-Basics-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Hypertext Transfer Protocol** or **HTTP** is an application-level protocol for distributed, collaborative, hypermedia information systems, between a web client and a web server.

**HTTP** is a text-based **client-server** protocol that can be used for **transferring** Web resources, like **HTML** files, **images**, **query results**, and more, by using a **standardized** way of communication. 

What makes HTTP a powerful protocol are the **following features**:

- **Connectionless**: The web browser and the server are not **connected**, when the web browser sends a request to the server a **connection is established**

The server is **requested** to respond and after the response has been **sent**, the connection between them is **terminated**. 

The only time when a web client and a web server **can address each other** is during a "request-response" exchange.

- **Media independence**: There is no **restriction** on what kind of data type can be sent using HTTP


The web browser specifies the **content type** (MIME-type) and if the **webserver** can handle data of this type, the HTTP request will be handled.

- **Stateless**: The **web server** and the **web client** are not aware of each other all the time, which means that the **connection** is created only when a **request** is made

That way neither the client nor the browser **retain information between requests** cookies can be used to **resolve** this issue.

[/slide]

[slide hideTitle]

# Request-Response Model

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-5-6-HTTP-Request-Response-Protocol-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When using the HTTP protocol in the **majority** of the cases we have a **communication** between a **client** and a **server** :

- A client program is usually a **web browser** (Google Chrome, Mozilla Firefox, Safari, etc.). It can **start** the connection
- A server program is a **web server**, which is **constantly running** and waiting for **requests**

The **web server** cmay be nuilt using different **programming languages**,some possible options are:
   - [ASP.Net Core](https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core) - CSharp
   - [Spring](https://spring.io/) - Java
   - [Node.js](https://nodejs.org/en/about/) - JavaScript
   - [Django](https://www.djangoproject.com/) - Python

Example:

[image assetsSrc="Angular-Introduction.png" /]

In this example a web server sends a "**GET**" **request** referring to a file **named** "index.html", **using** HTTP/1.1 protocol, which "1.1" is the **current version** of the HTTP protocol.

The server **returns** a response, in this case the server **confirms** the use of the HTTP/1.1 protocol.

The **actual server response** is "200 OK" and also the text: "Welcome to our Web site!".

You can read more about status codes in [MDN Web Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

[/slide]

[slide hideTitle]

# HTTP Request Examples

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/Intro-to-Angular-and-Typescript/Intro-to-Angular-and-Typescript-7-Example - Hyper-Text-Transfer-Protocol-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We send **GET** requests when we want to **obtain data** from the server.

Here is an example:

```html
    GET /courses/about.aspx HTTP/1.1
    Host: www.softuni.com
    User-Agent: Mozilla/5.0
    <CRLF>
```

The first line contains the **request type**, the **requested resource** and the **protocol version**.

The **Host**, the **User-Agent** and the **body** are placed on the next lines.

## HTTP Response

This response will look like this:

```html
    HTTP/1.1 200 OK
    Date: Mon, 5 Jul 2019 13:09:03 GMT
    Server: Microsoft-HTTPAPI/2.0
    Last-Modified: Mon, 12 Jul 2010 15:33:23 GMT
    Content-Length: 54
    <CRLF>
    <html><title>Hello</title>Welcome to our site</html>
```

On the first line, we can see the **protocol version** and the **status code**.

The next lines contain:

-  The date of the **response**

-  The **Server Type**

-  The **date** when the resource was **modified**

-  The **length** of the **content**

The **body** is placed after the **headers**.

[/slide]
