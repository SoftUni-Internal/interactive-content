# HTTP Basics

[slide]

# What is HTTP?

**HTTP** which, means **HyperText Transfer Protocol**, is an application-layer protocol.

It is a text\-based client\-server protocol used for transferring Web resources, like HTML files, images, and more.

The most important qualities that HTTP has are:

-  It is based on the **request-response** model.

-  It is a text\-based protocol.

-  It relies on a **URL**s.

-  It provides **metadata** \- data in the header.

-  Every request is individual, HTTP is **stateless**.

[/slide]

[slide]

# Request-Response Model

With the **request-response** model, we have client and server.

The client program is running at the **end-host**.

For example, in the **browser**, his main job is to **request** data.

While the server program is running on a **server**.

For example, on a **web server**.

And His main job is to provide the requested data.

Have a look at this picture:

[image assetsSrc="Angular-Introduction.png" /]

As we can see the client sends a request and the server sends a response.

[/slide]

[slide]

# HTTP Request Examples

By default, when we sent a request, it will be **GET**.

We send **GET** requests when we want to obtain data from the server.

Here is an example request:

```
GET /courses/about.aspx HTTP/1.1
Host: www.softuni.com
User-Agent: Mozilla/5.0
<CRLF>
```

The first line is for the **request type**, the requested resource, and the protocol version.

On the next lines are the **Host**, the **User-Agent**, and the **body**.

And this is how the response will look like:

```
HTTP/1.1 200 OK
Date: Mon, 5 Jul 2010 13:09:03 GMT
Server: Microsoft-HTTPAPI/2.0
Last-Modified: Mon, 12 Jul 2010 15:33:23 GMT
Content-Length: 54
<CRLF>
<html><title>Hello</title>Welcome to our site</html>
```

The first thing that we have is the **protocol version** and the **status code**.

On the next lines, we have:

-  The **response date**,

-  **Server Type**,

-  The **date** when the resource is **modified**,

-  The **length** of the **content**.

The **body** is after the **headers**.

[/slide]
