[slide hideTitle]

# HTTP Request

We already mentioned what is an **HTTP Request** but now let's have a look at it again in greater detail.

A Request message sent by the client consist of several things:

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

An example of an **HTTP GET** Request: 

GET /index.html HTTP/1.1    // HTTP request line​
Host: localhost​             // Http request headers
<CRLF>                      //Body, in this case the body is empty.

An example of an **HTTP POST** Request:

POST /login.html HTTP/1.1​                          //Request line
Host: localhost​                                    //Http Request headers
Content-Length: 59​                                 
Content-Type: application/x-www-form-urlencoded​
<CRLF>​                                             //Empty line to indicate beginning of the body.
username=mente&password=top*secret!​                //Http Request body.
<CRLF>                                             //Empty line to indicate the end of the requests.


[/slide]