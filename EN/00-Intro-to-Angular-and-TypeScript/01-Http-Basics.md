# HTTP Basics

[slide hideTitle]

# What is HTTP?

**HTTP** means **Hyper Text Transfer Protocol**, it is an application-layer protocol.

**HTTP** is a text-based **client-server** protocol used for transferring Web resources, like HTML files or images.

It is **text-based** protocol working on a **request-response** model.

HTTP relies on a **URL**s and provides **metadata** in the headers.

Every request is individual, HTTP is **stateless**.

[/slide]

[slide hideTitle]

# Request-Response Model

With the **request-response** model, we have a client and a server.

The client program is running at the **end-host**.

For example, in the **browser**, his main job is to **request** data.

While the server program is running on a **server**.

For example, on a **web server**.

And His main job is to provide the requested data.

For example:

[image assetsSrc="Angular-Introduction.png" /]

As we can see, the client sends a **request**, and the server answers with a **response**.

[/slide]

[slide hideTitle]

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

On the first line is the **request type**, the **requested resource**, and the **protocol version**.

The **Host**, the **User-Agent**, and the **body** are on the following lines.

## HTTP Response

This response will look like this:

```
    HTTP/1.1 200 OK
    Date: Mon, 5 Jul 2010 13:09:03 GMT
    Server: Microsoft-HTTPAPI/2.0
    Last-Modified: Mon, 12 Jul 2010 15:33:23 GMT
    Content-Length: 54
    <CRLF>
    <html><title>Hello</title>Welcome to our site</html>
```

In the first line, we see the **protocol version** and the **status code**.

The next lines contain:

-  The date of the **response**

-  The **Server Type**

-  The **date** when the resource is **modified**

-  The **length** of the **content**

The **body** is after the **headers**.

[/slide]
