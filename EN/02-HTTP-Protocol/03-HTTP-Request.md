[slide hideTitle]

# HTTP Request

[video src="https://videos.softuni.org/hls/Java/Java-Spring-Fundamentals/EN/HTTP-Protocol/12-http-request-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **Request** message sent by the client consist of several things:

1. **HTTP Request line**
    - Request method (GET / POST / PUT / DELETE / ...).
    - Resource URI (URL).
    - Protocol version.

2. **HTTP request headers**
    - Additional parameters.

3. **HTTP request body** 
    - optional data, e.g. posted forms fields.

**The format used**: 

```java
<method> <resource> HTTP/<version>​
<headers>​
(empty line)​
<body>
```

# HTTP Request Examples

An example of an **HTTP GET** Request: 

```java
GET /index.html HTTP/1.1    // HTTP request line​
Host: localhost​             // Http request headers
<CRLF>                      //Body, in this case the body is empty.
```

An example of an **HTTP POST** Request:

```java
POST /login.html HTTP/1.1​                          //Request line
Host: localhost​                                    //Http Request headers
Content-Length: 59​                                 
Content-Type: application/x-www-form-urlencoded​
<CRLF>​                                             //Empty line to indicate beginning of the body.
username=mente&password=top*secret!​                //Http Request body.
<CRLF>                                             //Empty line to indicate the end of the requests.
```

[/slide]
