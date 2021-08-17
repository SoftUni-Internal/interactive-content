# Global Application Exception Handling

[slide hideTitle]
# Global Exception Handling

In Spring MVC and Spring Boot application if multiple controller classes or classes throw the same kind of exception then we can group them and handle them by the group, and it can be called Global Exception Handling. 

It is preferable most of the time because it removes a lot of repetitive code. Also, it gives us modularity.  

There is a way to achieve global exception handling in Spring which is done through the `@ControllerAdvise` annotation.

Any class annotated with `@ControllerAdvise` turns into an interceptor-like controller:

- Enables global exception handling
- Enables model enhancement methods

## Example

In `@ControllerAdvice` classes we still use `@ExceptionHandler`, but this time it refers to the whole application.

The error handling is not limited only to a specific controller.

```java
@ControllerAdvice
public class GlobalExceptionHandler {
   @ExceptionHandler({TransactionException.class, PersistenceException.class})
   public ModelAndView handleDatabaseErrors(DatabaseException e) {
      ModelAndView modelAndView = new ModelAndView("index");
      modelAndView.addObject("message", e.getMessage());
      modelAndView.addObject("stack", {...} /* Formatted Stack Trace */);

      return modelAndView;
  }}
```
[/slide]

[slide hideTitle]
# Global Exception Handling (REST)

RESTful requests may also generate unexpected exceptions.

HTTP Error response codes are a good choice.

However, sometimes you might need more than just a status.

Customized Error Object, which can be presented on the Client.

Limited Information returned to the Client


You can customize the Error Response by introducing a class.

The Error Handler itself remains the same as in casual web apps

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

```java
@ControllerAdvice
public class GlobalRESTExceptionHandler {    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
   @ExceptionHandler({TransactionException.class,
                PersistenceException.class})
   public @ResponseBody ErrorInfo handleRESTErrors(HttpServletRequest req,
                                 DbException e) {
      return new ErrorInfo(req.getRequestURL(), ex);   
   }
}
```

## HandlerExceptionResolver Interface

[image assetsSrc="Java-Spring-Advanced-Error-Handling-6.png" /]

[/slide]