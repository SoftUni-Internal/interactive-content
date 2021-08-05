# Working with Http Sessions, Cookies, and Headers

[slide hideTitle]
# Working with the Session

The session will be **injected from the IoC** container when called:

```java
@GetMapping("/")
public String home(HttpSession httpSession) {
  …  
  httpSession.setAttribute("id", 2);
  …
}
```

In this example we add HTTP `#session` as of getting `GetMapping()`, then what Spring does is to auto-wire an instance into the `#session`.

As a result in the current HTTP `#session` we can **write** attributes as key-value pairs.

Later the session attributes can be accessed from Thymeleaf using the expression syntax and the `#session` object.


[/slide]

[slide hideTitle]
# Reading HTTP Cookie


```java
@GetMapping("/")
public String readCookie(@CookieValue(value = "username", defaultValue = "Guest") String username) {
        return "login";
}
```

In this example a `@CookieValue()` is set to extract the "**username**", if there is no logged-in user (the cookie is missing), the default value of the username will be "**Guest**".

## Setting HTTP Cookie

A cookie can be menually set into the action:

```java
@GetMapping("/change-username")
public String setCookie(HttpServletResponse response) {
        // Create a cookie
        Cookie cookie = new Cookie("username", "Peter");
        // Add cookie to response
        response.addCookie(cookie);
        return "index";
}
```


[/slide]

[slide hideTitle]
# HTTP Header

## RequestHeader

By using the annotation `@RequestHeader()` we can extract information from the HTTP headers:

```java
@GetMapping("/greeting")
public ResponseEntity<String> greeting(
@RequestHeader("accept-language") String language) {
        // Code that uses the language variable
        return new ResponseEntity<String>("greeting", HttpStatus.OK);
}
```
In this example the value of the "accept-language" header.

## ResponseStatus

We can specify the desired **HTTP status** of the response:

```java
@RequestMapping(method = RequestMethod.POST)
@ResponseStatus(HttpStatus.CREATED)
public void storeEmployee(@RequestBody Employee employee) {
    ...
}
```
[/slide]