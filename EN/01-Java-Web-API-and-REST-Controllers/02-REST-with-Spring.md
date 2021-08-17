# REST with Spring

[slide hideTitle]

# Response Body On MVC Controller​

We use the `@ResponseBody` annotation to tell a controller class to return data directly, instead of serving up a UI template (often HTML). 

```java
@GetMapping("/info/{id}")​
@ResponseBody​
public Course getInfo(@PathVariable Long id){​
  
  // Find the course...

  return course;​
}​
```

As an added bonus, the default behavior for `@ResponseBody` is to return JSON.

It is then passed back into the HttpResponse object.

[/slide]

[slide hideTitle]

# REST Controller​s

When building an API with Spring, HTTP requests are handled by a controller componnent.

Such components are marked with the `@RestController` annotation.

It is a combination of `@Controller` and `@ResponseBody`.

```java
@RestController​
public class HomeController {​
  @GetMapping("members/{id}")​
  public MemberInfo getInfo(@PathVariable Long id){​
    // ...​
    return memberInfo;
  }​
}​
```

In this example we define a `HomeController`.

It handles GET requests for `members/{id}` by returning an instance of the `MemberInfo` class.

[/slide]

[slide hideTitle]

# Response Status

The `@ResponseStatus` annotation gives us control over the status of the returned reponse.

```java
@GetMapping("members/{id}")​
@ResponseStatus(HttpStatus.OK)​
public MemberInfo getInfo(@PathVariable Long id){​
  //MemberInfo memberInfo = homeService.getInfoById(id);​
  return memberInfo;​
}​
```

In this example, we return a status code of 200 (OK), along with information about a home member.

[/slide]

[slide hideTitle]

# HTTP Headers

To obtain a header, we can use the `@RequestHeader` annotation.

```java
@GetMapping("/home")​
public String home(​
  @RequestHeader("some-header") String header) ​
    // Code that uses header variable​...
    return "home";​
}​
```

Keep in mind that the method will return a 400 (Bad Request) error, if it does not find an `accept-language` header.

Often times, a header may not exist in a given request.

We can set a `defaultValue` of the header:

```java
@GetMapping("/default")​
public String default(​
  @RequestHeader(value = "optional-header",​
  defaultValue = "1100") int defaultIntValue) {​
  // Logic using defaultIntValue​...
  return "stats";​
}​
```

The `HTTPHeaders` object holds all HTTP headers, meaning that we can receive all headers by using both Map and HTTPHeaders:

```java
public ResponseEntity<String> home(​
    @RequestHeader Map<String, String> headers) {​
  return new ResponseEntity<String>(HttpStatus.OK);​
}​

public ResponseEntity<String> home(​
    @RequestHeader HttpHeaders headers) {​
  return new ResponseEntity<String>(HttpStatus.OK);​
}​
```

[/slide]

[slide hideTitle]

# Response Entity

The `ResponseEntity<>` class allows us to control the body, header, and status code of our response.

```java
@GetMapping("/home")​
ResponseEntity<String> home() {​
    return new ResponseEntity<>(​
      "Welcome to our platform! 👋", headers, HttpStatus.OK);​
}​
```

In this example, we return a new ResponseEntity, along with a `headers` object and and an HTTP status code of 200 (OK).

```java
@GetMapping("/customHeader")​
ResponseEntity<String> customHeader() {​
    return ResponseEntity.ok()​
        .header("accept-language", "eng")​
        .body("Welcome to our platform! 👋");​
}​
```

Here we define a `customHeader` route handler that returns an `accept-language` header parameter, and body with a welcome message.

[/slide]

[slide hideTitle]

# Spring Data REST

Spring Data REST is a part of Spring Data, responsible for building hypermedia-driven REST web services on top of repositories.

It can scan an application's domain model and provide a REST API, using JSON Hypertext Application Language (HAL) as a response format.

To start using it, include it as a Maven dependency:

```xml
<dependency>​
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-rest</artifactId>​
</dependency>​
```

[/slide]

[slide hideTitle]

# Configuring Repositories

The `@RepositoryRestResource` annotation allows us to modify a repository's settings:

```js
@RepositoryRestResource(path = 'gameIssues')​
public interface IssueRepository ​
    extends JpaRepository<Issue, Long> {​
  Issue getById(@Param('id') Long id);​
  List<Issue> getAllByOrderByDateDesc();​
}​​
```

All methods in the repository are exposed as filtering and manipulating endpoints.

[/slide]
