# HTTP Protocol

[slide hideTitle]

# HTTP Basics

[vimeo-video]
[stream language="EN" videoId="497191742/5d1c1190a0" default /]
[stream language="RO" videoId="497191742/5d1c1190a0" /]
[/video-vimeo]

**Hypertext Transfer Protocol** (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML.

**HTTP** ensures that the communication between the web browser and server.

HTTP follows a classical **client-server model**, where only the client, which is most often is a **web browser**, can send a request, and when the server receives the request it is mandatory to send back a **response**.

But the server reacts only **upon a request**, which means that the server cannot send any data without **receiving a request**.

Thus the server does not keep any data between two request, which make HTTP protocol a **stateless protocol**.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX.png" /]

As we can see, the **client** sends a **request**, and the **server** sends a **response**.

[/slide]

[slide hideTitle]

# HTTP Request Methods

[vimeo-video]
[stream language="EN" videoId="497191798/2db8518a74" default /]
[stream language="RO" videoId="497191798/2db8518a74" /]
[/video-vimeo]

**HTTP** has **methods**, to indicates the performed action of the identified resource.

The most used methods are:

-  **GET** retrieves or loads a resource.
-  **POST** creates or stores a resource.
-  **PUT** updates a resource.
-  **DELETE** removes a resource.
-  **PATCH** updates partially a resource.
-  **HEAD** retrieves headers of a resource.
-  **OPTIONS** returns the HTTP methods that the server supports for the specified URL

The HTTP methods are **case sensitive**.

If we write them in lowercase, they will not work.

They must be in uppercase.

[/slide]

[slide hideTitle]

# HTTP GET Request Examples

[vimeo-video]
[stream language="EN" videoId="497191844/041a07ddb5" default /]
[stream language="RO" videoId="497191844/041a07ddb5" /]
[/video-vimeo]

By default, if we sent a request, it will be **GET**.

We send a **GET** request when we want to obtain data from the server.

Here is an example:

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

The first line, `GET /users/softuni/repos HTTP/1.1`, is called a **request line**.

After it is the **headers** and the **body** `<CRLF>`.

[/slide]

[slide hideTitle]

# HTTP Post Request Examples

[vimeo-video]
[stream language="EN" videoId="497191883/abf5823850" default /]
[stream language="RO" videoId="497191883/abf5823850" /]
[/video-vimeo]

We send **POST** requests when we want to store data on the server.

Here is an example of a **POST** request:

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

Here we have the **request line**, the **headers**, and the **body**.

But this time, the **body** holds the submitted data.

[/slide]

[slide hideTitle]

# HTTP Response Example

[vimeo-video]
[stream language="EN" videoId="497191921/7bfe82a1b9" default /]
[stream language="RO" videoId="497191921/7bfe82a1b9" /]
[/video-vimeo]

After the request is sent, the server will return a **response**.

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
  <head><title>Example</title></head>
  <body>Example HTML page.</body>
</html>
```

The first line, `HTTP/1.1 200 OK`, is called a **response status line**.

It holds the server response **status code**, which tells us if the request is completed.

After the **response line** is the **header**, which holds information about the server.

And finally, we have the **body**, which holds the data that we have requested.

[/slide]

[slide hideTitle]

# HTTP Response Status Codes

[vimeo-video]
[stream language="EN" videoId="497191947/6cd7004d9e" default /]
[stream language="RO" videoId="497191947/6cd7004d9e" /]
[/video-vimeo]

Every response has a **status code**, from which we can know if the request is successful or not.

These are some of the codes:

| Status Code   | Action | Description   |
| :---:   |    :----: |   :---:     |
|`200`| `OK`| The resource is successfully retrieved. |
|`201`| `Created`| The new resource is created. |
|`204`| `No Content`| There is nothing to return. |
|`301` or `302`|`Moved`| The resource is moved or redirected to another location. |
|`400`| `Bad Request`| The request is invalid or there is a syntax error. |
|`401` or `403`| `Unauthorized`| Authentication failed or Access Denied. |
|`404`| `Not Found`| The resource is not valid or not found. |
|`409`| `Conflict`| There is a conflict in the request, for example, duplicated email. |
|`500` or `503`| `Server Error` | There is an Internal server error or the service is unavailable. |
[/slide]

[slide hideTitle]

# Content-Type and Disposition

[vimeo-video]
[stream language="EN" videoId="497191983/5228b6f5f4" default /]
[stream language="RO" videoId="497191983/5228b6f5f4" /]
[/video-vimeo]

Every request needs to have a field for **Content-Type** or **Content-Disposition**.

These fields specify the format of the request.

We can set the **Content-Type** to be **JSON-encoded**.

It will look like this: `Content-Type: application/json`.

We can also set the **Content-Type** to be `Content-Type: text/html`

If we want to download a pdf, we need to configure it like this:

```
Content-Type: application/pdf
Content-Disposition: attachment;
filename="Example.pdf
```

[/slide]
