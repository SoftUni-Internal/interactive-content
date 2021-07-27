# Summary

[slide hideTitle]

# In this lesson we learned:

**HTTP**

- **HTML** Forms and Actions
    ```java
    <form action="home.html" method="POST">
    <input type="submit" value="Go to homepage"/>
    </form>
    ```
- **URLs**
    *Example*: **http://www.google.bg/search?sourceid=navclient&ie=UTF-8&rlz=1T4GGLL_enBG369BG369&q=http+get+vs+post**.
- **Request**
    *Example of HTTP GET:*

    ```java
    GET /index.html HTTP/1.1 
    Host: localhost​
    <CRLF>
    ```
- **Response**
    *Example:*

    ```java
    HTTP/1.1 404 Not Found​
    Date: Fri, 17 Nov 2014 16:09:18 GMT+2​
    Server: Apache/2.2.14 (Linux)​
    Connection: close​
    Content-Type: text/html​
    <CRLF>
    <html><head><title>404 Not Found</title></head>​
    <body>
    ```
**Web Server**

## The topic of the next lesson is:

**Hypertext Transfer Protocol**

- State Management in HTTP

- Cookies in an HTTP Server

- HTTP Session

- Session in an HTTP Server

[/slide]