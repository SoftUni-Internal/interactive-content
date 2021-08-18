

[slide hideTitle]
# Error Handling

Errors happen at any time but what matters is the way we handle and rectify them to maintain.

Every programing language has a powerful mechanism to handle these errors and exceptions.

Effective exception handling makes our program more robust and easier to debug.

An exception is a problem that arises during the execution of a program it can occur for many different reasons for example:

- User has entered an invalid data 

- File that needs to be opened cannot be found 

- A network connection that has been lost in the middle of communications and many more

If we do not handle them it leads to a system failure.

So handing an exception is very important and that's where Java introduced an exception handling mechanism to handle the runtime errors.

That way the normal execution flow will not be interrupted.


## Error Handling Example

**Correct way** of handling an error:

[image assetsSrc="Java-Spring-Advanced-Error-Handling-2.png" /]

When an error occurs we should strive to show the user only a simple message, which says that an error occurs, and will be fixed.

Incorrect way of handling an error:

[image assetsSrc="Java-Spring-Advanced-Error-Handling-1.png" /]

The user does not need to know the entire stack trace of an error, thus it is important to not show the raw error message.

[/slide]

[slide hideTitle]
# Error Handling in Spring

Spring already comes with built-in support for error handling and that is where the annotations for the exception handling comes into the picture.

Depending on the option we can choose an option more suitable for our cases and circumstances:

- Response-annotated - custom exceptions
- Controller-based - they are methods into the controller, which can handler specific exception
- `@ControllerAdvise` annotated - it is used for global error handling


[/slide]

[slide hideTitle]
# Custom Error Page

When working with Thymeleaf we can create an `error.html` file and place it into the `resources/templates` directory, that way Spring framework by default will use this error page.

This way we can make errors more custom-looking and user-friendly. 

The custom error page in Spring looks like this: 


[image assetsSrc="Java-Spring-Advanced-Error-Handling-3.jpg" /]
[/slide]

[slide hideTitle]
# ErrorController Interface

Spring Boot maps `/error` to `BasicErrorController` which populates the model with error attributes and then returns "error" as the view name.

To replace `BasicErrorController` with our custom controller which can map to `/error`, we need to implement the `ErrorController` interface.


Example: 

```java
@Controller
public class MyErrorController implements ErrorController {
    @RequestMapping("/error")
    @ResponseBody
    public String handle(HttpServletRequest request){
        //Some code ...
    }
    @Override
    public String getErrorPath() {
        return "/error";
    }
}
```
This is an example of a custom error controller named `MyErrorController`, which implements `ErrorController`.
[/slide]



[slide hideTitle]
# HTTP Status Codes

A controller always returns a response, but when an exception occurs, the controller response is 500, which stands for internal server error.

When we create a costume exception we can set response status annotation, that way we have full control of what status code the controller will return.

Example: 

```java
@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Product was not found.")
public class ProductNotFoundException extends RuntimeException {
   // Exception definition
}
```

Here we have a regular runtime error, where we have set `@ResponseStatus`, and that way we control the returned status code.

## Controller Action, Throwing the Exception

```java
@GetMapping("/products/details/{id}")
public ModelAndView productDetails(@PathVariable String id, ModelAndView modelAndView) {
   Product product = this.productRepository.findProductById(id);

   if(product == null) throw new ProductNotFoundException(id);

   modelAndView.addObject("product", product);
   return this.view("product/details", modelAndView);
}
```

In this example we are trying to find a product by id, if the product is null, we throw product not found exception with a status code of 404:

[image assetsSrc="Java-Spring-Advanced-Error-Handling-4.png" /]
[/slide]