[slide hideTitle]

# HTML Forms

[video src="https://videos.softuni.org/hls/Java/Java-Spring-Fundamentals/EN/HTTP-Protocol/38-html-forms-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**HTML** has a special tag **form**.

This tag is used when we want to submit more sensitive data to the server.

## Action Attribute

The action attribute of the form defines where we want to send the data. 

In our example, we will send it to the home page.

The server will read the data and return us a response.

Example: 

```java
<form action="home.html" method="POST">
  <input type="submit" value="Go to homepage"/>
</form>
```
[/slide]

[slide hideTitle]

# Method Attribute

The method attribute defines the HTTP method used to send the form-data.

If we send data through the **HTTP GET** method we send our data in the **URL Query**.

Example:

```java
<form method="get">
  Name: <input type="text" name="name">
    <br>
  <input type="submit" value="Submit">
</form>
```

When we use forms we usually combine it with the **HTTP POST** method and our data instead of sending through the **URL-QUERY** is send through the Body of our **HTTP Request**.

Example:

```java
<form method="post">
    Name: <input type="text" name="name">
     <br>
  <input type="submit" value="Submit">
  </form>
```

If we send this Form with the post method the request will look like this: 

```java
POST http://localhost/index.html HTTP/1.1
Host: localhost
Content-Type: application/x-www-form-urlencoded
Content-Length: 10

name=George
```

[/slide]

[slide hideTitle]

# URL Encoded Form Data - Example

```java
<form method="post">
  Name: <input type="text" name="name"/> <br/>
  Age: <input type="text" name="age"/> <br/>
  <input type="submit" />
</form>
```

```java
POST http://localhost/cgi-bin/index.cgi HTTP/1.1
Host: localhost
Content-Type: application/x-www-form-urlencoded         // File uploads are  nto supported
Content-Length: 23

name=Maria+Smith&age=19
```

[/slide]
