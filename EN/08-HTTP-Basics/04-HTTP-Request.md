# HTTP Request

[slide]
# Video

[vimeo-video startTimeInSeconds="2444" endTimeInSeconds="3276"]
[stream language="EN" videoId="429002366" default /]
[stream language="RO" videoId="429006590"  /]
[/video-vimeo]

[/slide]

[slide]
# HTTP Request Methods

| **Method** | **Description** | 
| --- | --- | 
|`GET`| Retrieve a resource |
|`POST`| Create \/ store a resource | 
|`PUT`| Update (replace) a resource | 
|`DELETE`| Delete (remove) a resource | 
|`PATCH`| Update resource partially (modify) | 
|`HEAD`| Retrieve the resource\'s headers | 

HTTP defines methods to indicate the **desired** action to be performed on the identified resource.

The most often used HTTP methods are:

- `GET` method **retrieves** a specified resource.

It is used to download a Web page, CSS file, script, document, or another resource from a Web site.

GET can retrieve a list of resources, for example, all the news from the front page of a news Web site, or get a single resource, for example, a single news article.

- `POST` method is used to **create**, or **store** a resource at the Web server.

`POST` creates something new at the Web server. It modifies the state at the server-side.

- `PUT` is used to **update**, or **replace** an existing resource. 

The HTTP `PUT` method is used in some applications to replace an existing resource with a new version of this resource.

- `DELETE` is used to **delete**, or **remove** an existing resource.

- `PATCH` method **updates** an existing resource partially. 

It is used to modify a field of a given object.

- HTTP **HEAD** method retrieves the resource's headers, without the resource itself.

`HEAD` is used rarely, for example, to check for modifications at the server-sid

The four most important operations for most applications are `GET`, `POST`, `PUT` and `DELETE`, the so-called **CRUD operations**.

CRUD is an abbreviation from **create, read, update, delete**, and is usually implemented by apps and APIs, which manage persistent data.

Most applications support at least these four CRUD operations for the objects they store, edit, and manage.

HTTP support a few more methods:

- `CONNECT` is used to open a **two-way socket connection** to the remote Web server. 

A socket connection can overcome the limitations of the HTTP protocol and its request-response model through lower-level communication.

- `OPTIONS` method is used to **describe** the communication options for the specified resource.

- `TRACE` method is designed for diagnostic purposes during the development and is used very rarely.

[/slide]

[slide]
# HTTP GET Request – Example

```
GET /users/SoftUni-Tech-Module/repos HTTP/1.1
Host: api.github.com
Accept: */*
Accept-Language: en
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64)
 AppleWebKit/537.36 (KHTML, like Gecko)
 Chrome/54.0.2840.71 Safari/537.36
Connection: keep-alive
Cache-Control: no-cache
<CRLF>
```

HTTP requests consist of request **line**, request **headers** and request **body**.

The request starts with the `HTTP request line`.

This is the command we send to the server.

This line says what resources we want to get or process.

The request line starts:

- with the request method `GET`

- followed by the request-URI

- followed by the HTTP version string `HTTP/1.1`

- followed by a new line `<CRLF>`

Web browsers use `URLs`, but HTTP uses `URIs` to address the resources.

`URL` stands for **uniform resource locator** and it describes a full unique address for a resource on the Internet, which consists of protocol + host + resource path [For example](https://softuni.org/about).

`URL` is what we type in the browser's location bar.

`URI` stands for **uniform resource identifier** and it holds a full or relatively unique path to a resource, for example `/about`.

When we request a resource over HTTP, we specify the relative `URI` of the resource in the request line and we specify the hostname in the request headers.

Both relative `URI` and hostname come from the `URL` we want to access.

In the next few lines, the HTTP request **headers** are given.

**Headers** specify specific parameters about the requested resource.

An important header is the `Host` header, holding the requested resource.

If we have several Web sites at the same Web server, this `Host` header will tell the server which web site to access.

The other headers specify settings like:

- what kind of content the client can **accept** and **understands**

- what is the preferred **language** that the client wants to use

- what kind of compression the client understands

- what are the client Web browser's brand and version, encoded as the so-called `user agent` identifier

After the request headers, the request **body** comes.

It can hold anything, for example, **URL-encoded data**, **JSON object**, or **binary data**.

The request body can also be empty, which is typical for the HTTP GET requests.

[/slide]

[slide]
# HTTP POST Request – Example

```
POST /post HTTP/1.1
Host: postman-echo.com
Accept: */*
Accept-Encoding: gzip, deflate
Content-Type: application/json
Connection: keep-alive
Content-Length: 95
<CRLF>
{"title":"Found a bug",
 "body":"I'm having a problem with this.",
 "labels":["bug","minor"]}
<CRLF>
```

This is a sample HTTP `POST` request.
 
Our sample HTTP `POST` request holds a request line + headers + body.

The HTTP request line holds the method `POST` + the relative request-URI `/post` + `HTTP/1.1` the protocol version.

The headers specify the host which comes from the URL, also the content type, which is `application/json`, and a few other settings, like the size of the HTTP body in bytes the content-length header.

The request body holds a `JSON object`, which describes the new issue in a simplified form.

[/slide]