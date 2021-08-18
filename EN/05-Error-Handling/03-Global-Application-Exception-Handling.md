# Global Application Exception Handling

[slide hideTitle]
# Global Exception Handling

In Spring MVC and Spring Boot application if **multiple controller classes** or classes throw the same kind of exception then we can **group them and handle them by the group**, and it can be called Global Exception Handling. 

It is preferable most of the time because it **removes a lot of repetitive code**, also, it gives us modularity.  

There is a way to achieve **global exception handling** in Spring which is done through the `@ControllerAdvise` annotation.

Any class annotated with `@ControllerAdvise` turns into an interceptor-like controller:

- Enables global exception handling
- Enables model enhancement methods

## Example

In `@ControllerAdvice` classes we still use `@ExceptionHandler`, but this time it refers to the whole application.

The error handling is not limited only to a specific controller.

```java
@ControllerAdvice
public class GlobalExceptionHandler {
  @ExceptionHandler({
    TransactionException.class,
    PersistenceException.class
  })
  public ModelAndView handleDatabaseErrors(DatabaseException e) {
    ModelAndView modelAndView = new ModelAndView("index");
    modelAndView.addObject("message", e.getMessage());
    modelAndView.addObject("stack", {
      ...
    } /* Formatted Stack Trace */ );

    return modelAndView;
  }
}
```
[/slide]

[slide hideTitle]
# Global Exception Handling (REST)

**RESTful** requests may also generate unexpected exceptions.

It is a good practice when **an error occurs** to use the [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

For example, if **a requested file is missing**, we return 404.

However, sometimes you might need **more than just a status**.

**Customized Error Object**, which can be presented to the client and limited information **returned** to the client.

We can customize the **Error Response** by introducing a class.

The Error Handler itself remains the same as in casual web application:

```java
public class ErrorInfo {
  public final String url;
  public final String ex;
  public ErrorInfo(String url, Exception ex) {
    this.url = url;
    this.ex = ex.getLocalizedMessage();
  }
}
```

In this example we **have a regular Java class**, with two fields, "URL" and "ex", and a **constructor** which sets the values to the properties.

## Example:

```java
@ControllerAdvice
public class GlobalRESTExceptionHandler {
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ExceptionHandler({
    TransactionException.class,
    PersistenceException.class
  })
  public @ResponseBody ErrorInfo handleRESTErrors(HttpServletRequest req, DbException e) {
    return new ErrorInfo(req.getRequestURL(), ex);
  }
}
```
In this example, we have a controller with `@ControllerAdvice`, which will catch `TransactionException` and `PersistenceException`.

If an exception occurs, the controller returns `@ResponseBody ErrorInfo`, and the error is handled, and as a result, a specific error info object is returned.

## HandlerExceptionResolver Interface

Also `HandlerExceptionResolver` class could be used, which is a type of interceptor, but they are rarely used.

[image assetsSrc="Java-Spring-Advanced-Error-Handling-6.png" /]

[/slide]