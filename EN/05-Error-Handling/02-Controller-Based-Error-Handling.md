# Controller-Based Error Handling

[slide hideTitle]
# Controller-specific Exception

We can define Controller-specific Exception Handlers by using `@ExceptionHandler` annotation.

They work only for the Controller they are defined in.

They be annotated with `@ResponseStatus` to convert HTTP status and accept the caught exception as a parameter.

Then  ModelAndView or String (view name) return and multiple exception types could be catch. 


## Example

```java
@ExceptionHandler({PersistenceException.class, TransactionException.class})
public ModelAndView handleDbExceptions(DatabaseException e) {
   ModelAndView modelAndView = new ModelAndView("error");
   modelAndView.addObject("message", e.getMessage());
  
   return modelAndView;
}
```

This method catch two types of exception:

- Persistence exception
- Transaction exception

If one of the get annotation throw one of those types of exception the method `handleDbExceptions` will be triggered and `ModelAndView` is created.

If we want to render a specific type of view, we can pass it as an argument, then we can add a message.

View:

```js
<html>
<head>...</head>
<body>
   <h1>An error occurred while processing your request!</h1>
   <p th:text="|Error: ${message}|"></p>
</body>
</html>
```
When the view is rendered, the result will be: 

[image assetsSrc="Java-Spring-Advanced-Error-Handling-5.png" /]

[/slide]

[slide hideTitle]
# Handler Methods 

Handler methods have flexible signatures.

We can pass in servlet-related objects as parameters:
- HttpServletRequest
- HttpServletResponse
- HttpSession
- Principal

The **Model** or **ModelAndView** cannot be injected as a parameter, instead of passing it, we have to setup it inside the method.

Nevertheless, this is not an issue because the IoC container would have done the same (pass an empty instance).

It is not a good practice for full error stacktraces to be exposed.

Our users do not need to see ugly exception web-pages.

We may even have security policies which strictly forbid any public exception info.

We should Hide as much information as possible and present user-friendly error pages.

For testing purposes we may view details, which can be used on to an environment setup.

[/slide]