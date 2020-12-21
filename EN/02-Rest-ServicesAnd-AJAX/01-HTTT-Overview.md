# HTTP Protocol

[slide]

# HTTP Basics

**HTTP** which, means **Hyper Text Transfer Protocol**, is an application-layer protocol.

It is a text-based client-server protocol, used for transferring Web resources, like HTML files images and etc.

**HTTP** is **request-response** based.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX.png" /]

As we can see the **client** sends a **request** and the **server** sends a **response**.

[/slide]

[slide]

# HTTP Request Methods

**HTTP** has **methods** that give us the ability to indicate the desired action to be performed to a given source.

Here are the most used ones:

- **GET** - Retrieves or loads a resource.
- **POST** - Creates or stores a resource.
- **PUT** - Updates a resource.
- **DELETE** - Removes a resource.
- **PATCH** - Updates partially a resource.
- **HEAD** - Retrieves headers of a resource.
- **OPTIONS** - Returns the HTTP methods that the server supports for the specified URL

These methods are case sensitive.

If we write them in lowercase, they will not work.

They must be in uppercase.

[/slide]

[slide]

# HTTP Request Examples

By default, if we sent a request, it will be **GET**.

We use **GET** when we want to obtain data from the server.

Here is an example of a **GET** request:

```
GET /users/softuni/repos HTTP/1.1
Host: api.github.com
Accept: */*
Accept-Language: en
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36
Connection: Keep-Alive
Cache-Control: no-cache
<CRLF>
```

The first line, `GET /users/softuni/repos HTTP/1.1`, is the request line.

After it, we have the **headers** and the **body** `<CRLF>`, which is empty.

And here is an example of a **POST** request:

```
POST /repos/softuni/js-apps/issues HTTP/1.1
Host: api.github.com
Accept: */*
Accept-Language: en
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0 (compatible;MSIE 6.0; Windows NT 5.0)
Connection: Keep-Alive
Cache-Control: no-cache
<CRLF>
{"title":"Found a bug",
 "body":"I'm having a problem with this.",
 "labels":["bug","minor"]}
<CRLF>
```

Here we have the **request line**, **headers**, and **body**.

But this time, the **body** holds the submitted data.

We use **POST** when we want to store data on the server.

[/slide]

[slide]

# HTTP Response Example

After we sent the request, the server will return a **response**.

This response will look like this:

```
HTTP/1.1 200 OK
Date: Fri, 11 Nov 2016 16:09:18 GMT+2
Server: Apache/2.2.14 (Linux)
Accept-Ranges: bytes
Content-Length: 84
Content-Type: text/html
<CRLF>
<html>
  <head><title>Test</title></head>
  <body>Test HTML page.</body>
</html>
```

The first line, `HTTP/1.1 200 OK`, is the response status line.

It is the server response **status code**, which tells us if the request is completed.

After the **response line**, we have a **header**, which tells us information about the server.

And finally, we have the **body** it holds the data that we requested.

[/slide]

[slide]

# HTTP Response Status Codes

Every response has a **status code**, which can tell us if the request is successful or not.

Here are some of the codes:

| Status Code | Action | Description |
| :---:  | :---:  | :---:  |
| `200`         |      `OK`      | The resource is successfully retrieved. |
| `201`         |   `Created`    | The new resource is created. |
| `204`         |  `No Content`  | There is nothing to return. |
| `301 or 302`  |    `Moved`     | The resource is moved or redirected to another location. |
| `400`         | `Bad Request`  | The request is invalid or there is a syntax error. |
| `401 or 403`  | `Unauthorized` | Authentication failed or Access Denied. |
| `404`         |  `Not Found`   | The resource is not valid or not found. |
| `409`         |   `Conflict`   | There is a conflict in the request, for example: duplicated email. |
| `500 or 503`  | `Server Error` | There is an Internal server error or the service is unavailable. |

[/slide]

[slide]

# Content-Type and Disposition

Every request needs to have a field with **Content-Type** or **Content-Disposition**.

This field specifies the format of the request.

We can set the **Content-Type** to be **JSON-encoded**.

It will look like this: `Content-Type: application/json`.

We can also set **Content-Type** to be `Content-Type: text/html`

And if we want to download a pdf, we can set it to:

```
Content-Type: application/pdf
Content-Disposition: attachment;
filename="Example.pdf
```

[/slide]
