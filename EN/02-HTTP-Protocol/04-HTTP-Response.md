[slide hideTitle]

# HTTP Response

[video src="https://videos.softuni.org/hls/Java/Java-Spring-Fundamentals/EN/HTTP-Protocol/16-http-response-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let's examine the response as well. 

A reponse message has consists of: 

1. HTTP response **status line**
    - Protocol version
    - Status code
    - Status phrase

2. Response headers
    - Provide metadata about the returned resource.

3. Response body
    - The content of the HTTP Response(data).

The structure of a **HTTP Response** message:
```java
HTTP/<version> <status code> <status text>​
<headers>​
(empty line)​
<response body - the requested resource>
```

```java
An example of the **HTTP Response** from the Web Server.
HTTP/1.1 200 OK​                            //HTTP Response status line
Date: Fri, 17 Jul 2010 16:09:18 GMT+2      //HTTP Response headers​
Server: Apache/2.2.14 (Linux)​
Accept-Ranges: bytes​
Content-Length: 84​
Content-Type: text/html​                    //The content type/mime type
<CRLF>​                                     //Line indicating begining of the body
<html>​                                     //Body
  <head><title>Test</title></head>
  <body>Test HTML page.</body>
</html>
<CRLF>​                                     //Line indicating end of the body
```

[/slide]

[slide hideTitle]

# HTTP Response codes

1. **1xx**: infromation (e.g. "**100** Continue");
2. **2xx**: successful (e.g. "**200** OK", "**201** Created")
3. **3xx**: redirection (e.g. "**304** Not Modified", "**301** Moved Permanently", "**302** Found").
4. **4xx**: client error (e.g. "**400** Bad Request**, "**404** Not Found", "**401** Unauthorized", "**409** Conflict")
5. **5xx**: server error, (the worst for us as programmers) (e.g. "**500** Internal Server Error", "**503** Service Unavailable")

*You can get to know the rest of the HTTP Response status codes here: https://http.cat/*

An example of an **HTTP Response** with a status code that most of us will be familiar with.

```java
HTTP/1.1 404 Not Found​                         //HTTP Response status line.
Date: Fri, 17 Nov 2014 16:09:18 GMT+2​
Server: Apache/2.2.14 (Linux)​                  //HTTP Response headers.
Connection: close​
Content-Type: text/html​
<CRLF>
<html><head><title>404 Not Found</title></head>​    //HTTP reponse body.
<body>
<h1>Not Found</h1>
<p>The requested URL /img/logo.gif was not found on this server.</p> <hr><address>Apache/2.2.14 Server at Port 80</address>
</body></html>
<CRLF>
```
[/slide]

[slide hideTitle]

Browser redirection example. 

```java
- **HTTP GET** requesting a **moved** URL:
GET / HTTP/1.1​
Host: http://softuni.org
User-Agent: Gecko/20100115 Firefox/3.6​
<CRLF>
```

- The following HTTP response (**301 Moved Permanently**) tells the browser to request another URL:

```java
GET / HTTP/1.1​
Host: http://softuni.org​
User-Agent: Gecko/20100115 Firefox/3.6​
<CRLF>
HTTP/1.1 301 Moved Permanently​
Location: https://softuni.org​
…
```

[/slide]

[slide hideTitle]

# Content-Type and Disposition

One of the headers the HTTP Response sends is a header with specifics for how the output should be processed.

Examples:

```java
Content-Type: text/html; charset=utf-8  //The MIME Type suggests that an UTF-8 encoded HTML page. Will be shown in the browser.

Content-Type: application/pdf​
Content-Disposition: attachment; filename="Report-April-2020.pdf"​      //This will download a PDF file named "Report-April-2020.pdf"
```

[/slide]
