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

```java
@GetMapping("members/{id}")​
@ResponseStatus(HttpStatus.OK)​
public MemberInfo getInfo(@PathVariable Long id){​
  //MemberInfo memberInfo = homeService.getInfoById(id);​
  return memberInfo;​
}​
```

[/slide]

[slide hideTitle]

# HTTP Headers

```java
@GetMapping("/home")​
public String home(​
  @RequestHeader("some-header") String header) ​
    // some code that uses header variable​
    return "home";​
}​
```

```java
@GetMapping("/default")​
public String default(​
  @RequestHeader(value = "optional-header",​
  defaultValue = "1100") int defaultIntValue) {​
  //Some logic using defaultIntValue​
  return "stats";​
}​
```

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
