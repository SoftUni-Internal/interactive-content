[slide hideTitle]

# Summary

## In this lesson you learned:

- **HATEOAS** is an abbreviation of Hypermedia As the Engine of Application State​
  * it is a constraint of the REST application architecture ​
  * using hypermedia, it describes what future actions are ​available to the client​

```json
{ "id": 2, 
  "name": "Peter", 
  "age": 12, ​
  "_links": { ​
    "self": {"href":"http://localhost:8080/students/2"},​
    "delete": {"href":"http://localhost:8080/students/delete/2"},​
    "update": {"href":"http://localhost:8080/students/update/2"},​
    "orders": {"href":"http://localhost:8080/orders/allByStudentId/2"}​
  } ​
}​
```

- We can **implement HATEOAS in Spring Projects**​, starting with the dependency
  * if we extend the `RepresentationModel<T>` interface, we can add links directly to our entity

```xml
<dependency>​
  <groupId>org.springframework.hateoas</groupId>​
  <artifactId>spring-hateoas</artifactId>​
</dependency>​
```

- The **HAL Explorer** provides us with a user interface to explore our application's endpoints
  * we can view embedded resources and enter custom search criteria

## In the next lesson you will learn:

- How to **handle errors** in Spring
  * why error handling is essential
  * the `@ExceptionHandler` methods​
  * HTTP error response status codes
  * the `@ControllerAdvice` global handlers

[/slide]