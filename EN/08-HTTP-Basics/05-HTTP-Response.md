# HTTP Response

[slide]
# Video

[vimeo-video startTimeInSeconds="3278" endTimeInSeconds="4465"]
[stream language="EN" videoId="429002366" default /]
[stream language="RO" videoId="429006590"  /]
[/video-vimeo]

[/slide]

[slide]
# HTTP Response – Example

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

HTTP response consists of 3 parts:

- Response `status line`

- Response `headers`

- response `body`

The **HTTP response status line** starts with:

- protocol version

- response status code

- human-readable text explanation of the status code

The status code tells the client whether the requested operation was **successful** or **not**.

It may report **success** with status code 200, or **error** with status code 400 or 500.

There are **many status codes**, specified in the HTTP standard.

After the HTTP status line, the HTTP **response** headers come.

Response headers **provide** metadata about:

- returned resource or the returned error

   - such as content-encoding

   - content size in bytes

   - content last-modify date and many others

After the response headers and the empty line separator, the HTTP response body comes.

This is the requested resource can be a text or a binary data or can be empty.

[/slide]

[slide]
# HTTP Response Status Codes

| **Status Code** | **Action** | **Description** |
| --- | --- | --- |
|`200`| OK |Successfully retrieved resource|
|`201`| Created | A new resource was created |
|`204`| No Content | Request has nothing to return |
|`301` \/ `302`| Moved | Moved to another location (redirect) |
|`400`| Bad Request | Invalid request \/ syntax error |
|`401` \/ `403`| Unauthorized | Authentication failed \/ Access denied |
|`404`| Not Found | Invalid resource was requested |
|`409`| Conflict | Conflict was detected, e.g. duplicated email |
|`500` \/ `503`| Server Error | Internal server error \/ Service unavailable |

HTTP status codes are 3-digit integer numbers. 

The first digit serves for grouping the status codes.

Status codes starting with 2 indicate a successful operation:

- Status code `200 OK`, which means that the requested resource has been **successfully** retrieved and returned.

This is what the server **returns** when you open a news article **successfully**.

- Status code `201 Created` means that a **new resource has been created successfully**.

- Status code `204 No content` means that the request was successful, but there is **nothing to return**.

Status codes starting with 3 are used for redirection to another URL:

- Status code `301 Moved Permanently` is used to **permanent** redirection to another URL.

- The status code `302 Found` is used to **temporarily** redirect to another URL.

- Status code `304 Not Modified` is returned after a conditional HTTP GET, which says:

   - _I have this resource from yesterday, please return it only if you have a newer version_.

This is a mechanism used by Web sites and Web browsers for caching images and multimedia content that rarely change.

Status codes starting with 4 indicate a client error, such as `bad request` or `not found`:

- Status code `400 Bad Request` means that the client has sent an **invalid request**.

- Status code `401 Unauthorized` is returned when the resource is **available** but can be accessed after **authentication** only.

- Status code `403 Forbidden` is returned when the resource is **restricted** for the current user.

- Status code `404 Not Found` means that the requested resource is **missing**.

This can happen when users type incorrect resource URI or after an existing resource is deleted from the server.

- Status code `409 Conflict` is returned when the requested operation cannot be performed due to **conflict**.

Status codes starting with 5 indicate a server error, such as `service unavailable`:

- Status code `500 Internal Server Error` means that **the server crashed while** processing your request.

   - This coul be caused either by a **bug of the software** at the server side, or by an incorrect invocation made by the client.

- Status code `501 Not Implemented` may be returned when certain functionality is not yet implemented by the server side software.

- Status code `503 Service Unavailable` may be returned when a component at the server side is not ready.

You can learn about the other status codes in the official `HTTP 1.1 standard: the RFC 7231`.

[/slide]

[slide]
# Content-Type and Disposition

```
Content-Type: application/json
```

The header `Content-Type: application/json` specifies a JSON-encoded data, a JSON object.

By default, the UTF-8 encoding is used.

```
Content-Type: text/html; charset=utf-8
```

The `Content-Type: text/html; charset=utf-8` specifies an HTML document with UTF-8 encoding.

The encoding specified in the HTTP headers has a **higher priority** than the encoding specified in the **header of the HTML document**.

```

Content-Type: application/pdf

Content-Disposition: attachment;

filename="Financial-Report-2020.pdf"

```

The `Content-Type` and the `Content-Disposition` headers in the HTTP response to inform the Web browser that the returned resource is a **PDF document**, which has a file name `Financial-Report-2020.pdf` and should be downloaded as an attachment.

In the HTTP requests, the `Content-Type` header specifies what kind of data the client **sends to the server**, for example, a JSON document or URL-encoded form data or a plain-text document or a JPEG image.

When the data is text-based, the `charset` encoding can also be specified and this is highly **recommended**, because **wrong** encoding may result in **broken** and unreadable text stored in the database.

The value of the `Content-Type` is a media type identifier like `text/html`, `application/json`, `image/jpeg` and many others.

The list of officially standardized media types and their officially assigned media type identifiers are maintained by the Internet organization [IANA](https://iana.org/assignments/media-types).

In the HTTP responses, the `Content-Type` header specifies what kind of data the server returns to the client, for example, an HTML document or a JPEG image.

When the data is text-based, the `charset` can also be specified. 

**Specifying explicitly the character encoding** is highly recommended and helps to visualize correctly the returned document.

When Web browsers open a Web site, by default it uses the character encoding from the `Content-Type` response header.


[/slide]

[slide]
# HTTP Conversation: Example

```
GET /trainings/courses HTTP/1.1
Host: softuni.org
User-Agent: Mozilla/5.0
<CRLF>
```

The HTTP request used the GET method to download the resource at URL `https://softuni.org/trainings/courses`.

The relative request URI is `/trainings/courses`.

The host comes from the URL and it is `softuni.org`.

The user agent (which is the Web browser identifier) is `Mozilla/5.0`.

```
HTTP/1.1 200 OK
Date: Tue, 16 May 2020 15:13:41 GMT
Server: Microsoft-HTTPAPI/2.0
Last-Modified: Tue, 16 Jan 2018 15:13:42 GMT
Content-Length: 18586
<CRLF>
<html><title>Get a Tech Degree from…
</title>
```

The HTTP response from the Web server returns:

- Status code `200 OK`, which means that the **requested resource is found** and will be returned in the response body.

- The `Date` header shows the **date and time** at the Web server at the time when the HTTP response is created.

- The `Server` header shows information about the server **software used to process the HTTP request**.

This is the Microsoft's Web server, used by the `ASP.NET` app behind the Web site `sofuni.org`.

- The `Last-Modified` header indicates the last modification date and time of the returned resource.

- The header `Content-Length` indicates the size of the returned resource (in bytes).

Using this value, the Web browser could visualize a download progress bar for large files or documents.

- After the headers, an empty line comes, and then the requested resource is returned in the HTTP response body.

[/slide]