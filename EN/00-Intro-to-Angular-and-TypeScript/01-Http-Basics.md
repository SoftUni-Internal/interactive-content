# HTTP Basics

[slide hideTitle]

# What is HTTP?

**Hyper Text Transfer Protocol** or **HTTP**, is an application-level protocol for distributed, collaborative, hypermedia information systems, between a web client and a server.

**HTTP** is a text-based **client-server** protocol that can be used for transferring Web resources, like HTML files, images, query results, and more, by using a standardized way of communication. 

What makes HTTP a powerful protocol are the following features:

- Connectionless: The web browser and the server are not connected, when the web browser sends a request to the server the connection is created

The server is obligated to respond and after the response, it proceeds, the connection between both is terminated. 

The only time when web client and web server know about each other during current request and response only.

- Media independence: There is no restriction about what kind of data type can be sent by HTTP

If the web browser has specified a content type (MIME-type) and the webserver can handle such data content, the HTTP request will be handled successfully.

- Stateless: The web server and the web client are not aware of each other all the time, which means that
the connection is created only when a request is made

That way neither the client nor the browser retain information between requests, and often cookies are used to overcome this issue.



[/slide]

[slide hideTitle]

# Request-Response Model

When using HTTP protocol in the majority of the cases we have client program and server program, where:

- Client program is a web browser (Google Chrome, Mozilla Firefox, Safari, etc.) that can start the connection
- Server program is a web server, which is up and running, waiting for requests that could be written (created) using different programming languages, for example:
   - [ASP.Net Core](https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core) - CSharp
   - [Spring](https://spring.io/) - Java
   - [Node.js](https://nodejs.org/en/about/) - JavaScript
   - [Django](https://www.djangoproject.com/) - Python

For example:

[image assetsSrc="Angular-Introduction.png" /]

In this example a web server sends a "GET" request for a file named "index.html", using HTTP/2.0 protocol, which "2.0" is the latest version of the HTTP protocol.


And the server is obligated to return a response, and in this case, the server agrees to use the HTTP/2.0 protocol.

The actual response is "200 OK" which is self-explanatory and also a text is returned "Welcome to our Web site!".

[/slide]

[slide hideTitle]

# HTTP Request Examples

By default, when we sent a request, it will be **GET**.

We send **GET** requests when we want to obtain data from the server.

Here is an example request:

[image assetsSrc="Angular-Get-Request-Example.png" /]

On the first line is the **request type**, the **requested resource**, and the **protocol version**.

The **Host**, the **User-Agent**, and the **body** are on the following lines.

## HTTP Response

This response will look like this:

[image assetsSrc="Angular-Get-Responce-Example.png" /]

In the first line, we see the **protocol version** and the **status code**.

The next lines contain:

-  The date of the **response**

-  The **Server Type**

-  The **date** when the resource is **modified**

-  The **length** of the **content**

The **body** is after the **headers**.

[/slide]
