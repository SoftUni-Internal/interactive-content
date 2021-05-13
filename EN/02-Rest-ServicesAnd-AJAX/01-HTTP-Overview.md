# HTTP Protocol

[slide hideTitle]

# HTTP Basics

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-3-4-http-basics-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Hypertext Transfer Protocol** (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML.

**HTTP** ensures the communication between the web browser and the server.

HTTP follows a classical **client-server model** where only the client, which most often is a **web browser**, can send a request, and when the server receives the request, it is mandatory to send a **response** back.

But the server reacts only **upon request**, which means that it cannot send any data before **receiving such**.

Therefore, the server does not keep any data between two requests, making HTTP a **stateless protocol**.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX.png" /]

As you can see, the **client** sends a **request**, and the **server** sends a **response**.

[/slide]

[slide hideTitle]

# HTTP Request Methods

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-5-http-request-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**HTTP** uses **methods** to indicate the performed action of the identified resource.

The most used methods are:

- **GET** - retrieves or loads a resource
- **POST** - creates or stores a resource
- **PUT** - updates a resource
- **DELETE** - removes a resource
- **PATCH** - updates partially a resource
- **HEAD** - retrieves headers of a resource
- **OPTIONS** - returns the HTTP methods that the server supports for the specified URL

All HTTP methods are **case-sensitive**.

If we write them in lowercase, they will not work.

They must be in **uppercase**.

[/slide]

[slide hideTitle]

# HTTP GET Request Examples

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-6-http-get-request-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We send a **GET** request when we want to obtain data from the server.

The **GET** request is used most often.

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

The next lines are the **headers** and the **body** - `<CRLF>`.

We use the `<CRLF>` sequence to separate the header from the body.

Since this is a **GET** request, the body is **empty**.

[/slide]

[slide hideTitle]

# HTTP Post Request Examples

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-7-http-post-request-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

This time, the **body** holds the submitted data.

[/slide]

[slide hideTitle]

# HTTP Response Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-8-http-response-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Once a request has been sent, the server has to return a **response**.

The response will look like this:

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

It holds the server response **status code**, which tells us if the request has been completed.

After the **response line** is the **header**, which holds information about the server.

Then we have the **body**, which holds the data that we have requested.

[/slide]

[slide hideTitle]

# HTTP Response Status Codes

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-9-http-response-status-codes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Every response has a **status code**, from which we understand if the request is successful or not.

These are some of the codes:

| Status Code   | Action | Description   |
| :---:   |    :----: |   :---:     |
|`200`| **OK**| The resource is successfully retrieved. |
|`201`| **Create**| The new resource is created. |
|`204`| **No Content**| There is nothing to return. |
|`301` or `302`|**Moved**| The resource is moved or redirected to another location. |
|`400`| **Bad Request**| The request is invalid, or there is a syntax error. |
|`401` or `403`| **Unauthorized**| Authentication failed or Access Denied. |
|`404`| **Not Found**| The resource is not valid or not found. |
|`409`| **Conflict**| There is a conflict in the request, for example, duplicated email. |
|`500` or `503`| **Server Error** | There is an Internal server error or the service is unavailable. |
[/slide]

[slide hideTitle]

# Content-Type and Disposition

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-10-content-type-and-disposition-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Every request needs to have a field for the **Content-Type** or the **Content-Disposition**.

These fields specify the format of the request.

We can set the **Content-Type** to be **JSON-encoded**.

It will look like this: `Content-Type: application/json`.

We can also set the **Content-Type** to be: `Content-Type: text/html`

If we want to download a **PDF** file, we need to configure it as follows:

```
Content-Type: application/pdf
Content-Disposition: attachment;
filename="Example.pdf"
```

[/slide]
