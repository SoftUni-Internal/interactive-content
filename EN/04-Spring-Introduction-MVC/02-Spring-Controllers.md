# Spring Controllers

[slide hideTitle]
# Controller Creation

When a controller class is created, it should contain the `@Controller` annotation, which tells the compiler that this is a controller class.

```java
@Controller
public class HomeController {
  ...
}
```

Controllers should be **public**, otherwise, they will **not** be accessible from the client. 

Also, a controller could have **multiple** actions on **different** routes.

[/slide]

[slide hideTitle]
# Request Mapping

Controller's actions are regular Java methods, which have anotations called "**Request Mapping**".

The "**Request Mapping**" containst the route, that the current method is responsible.

## Examples

``` java
@RequestMapping("/home")
public String home() {
return "home-view";
}
```
In this example the method `home()` will be executed when the `/home` route is requested.

This method returns a string, which is the name of a vuew ("home-view").

``` java
@RequestMapping("/home")
public ModelAndView home(ModelAndView mav) {
mav.setViewName("home-view");
return mav;
}
```

Also a model could be returned by the view.

In this example the "home" method an agument (`ModelAndView mav`), and this model could be passed to the view, so the information into the "mav" model could be rendered.

## Request Mapping Problem

The `@RequestMapping` annotation is able of handling all HTTP methods (GET, PUT, POST, DELETE, and PATCH).

The default behaviur of `@RequestMapping` annotation is all requests are HTTP GET type.

To define a request mapping with a specific HTTP method, we need to declare the HTTP method in `@RequestMapping` by using the `method` element as follows:

```java
@RequestMapping(value="/home", method=RequestMethod.GET)
public String home() {
return "home-view";
}
```

[/slide]


[slide hideTitle]
# Get Mapping

[/slide]