# REST with Spring

[slide hideTitle]

# Response Body On MVC Controller​

The `@ResponseBody` annotation is used to inform a controller that the object returned is automatically serialized into JSON and passed back into the HttpResponse object:

```java
@GetMapping('/info/{id}')​
@ResponseBody​
public User getInfo(@PathVariable Long id){​
  
  // Find the user...

  return user;​
}​
```

[/slide]

[slide hideTitle]

# REST Controller​s



[/slide]

[slide hideTitle]

# Response Status



[/slide]

[slide hideTitle]

# HTTP Headers



[/slide]

[slide hideTitle]

# Response Entity



[/slide]

[slide hideTitle]

# Spring Data REST



[/slide]

[slide hideTitle]

# Configuring Repositories



[/slide]
