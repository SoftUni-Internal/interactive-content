# Filters and Interceptors

[slide hideTitle]
# Filters

The entire infrastructure for spring security and a web application, in general, reveals around the **filter's chain**.

It means that spring security comes with **different types of filters**, with certain responsibilities.

For example, there is a filter that will check whether **the username and password are valid**, or check for CSS token, etc.

Every HTTP request will **pass-through** one of those filters before going into the controller. 

## Filters Diagram

[image assetsSrc="Java-Spring-Advanced-Spring-Security-1.png" /]

When an HTTP request is sent, it could go **through different filters**, in this example, the first request goes through **filter one** and **filter two**, then it arrives into the web **controller**.

The controller returns a **response**, and again the response goes through **filter two** and **filters one**. 

Depending on the request, it could go through **only one filter**, in this example, the second request goes through the **second filter only**, and gain into the controller.

And also the response could pass **through filters**.

[/slide]

[slide hideTitle]
# Filter Examples

## Create Filter

To use a filter it has to be **set first**:

```java
// GreetingFilter.java

@Component
public class GreetingFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        request.getSession().setAttribute("name", "Peter");

        filterChain.doFilter(request, response);
    }
}
```
A `@Component` is created, which **implements** the filter interface, which has a `doFilter()` method that needs to be **overridden** and as arguments receive "**savletRequest**", "**savletResponse**" and "**filterChain**".

Then the request and the response are sent.

What this filter does is to **extract the session** from the request and set an attribute: `setAttribute("name", "Peter")`.

And at the end, the `filterChain.doFilter(request, response)` method is invoked, which changes the **current filter** to the rest of the filters.

## Controller

When the request goes through the filter, the controller receives the request:

```java
// HomeController.java

@Controller
public class HomeController {

    @GetMapping("/")
    public ModelAndView index(ModelAndView modelAndView, HttpSession session) {
        modelAndView.setViewName("index");
        modelAndView.addObject("name", session.getAttribute("name"));

        return modelAndView;
    }
}

```
This is a regular spring controller, where the **session is injected**, where we add the "**name**" attribute, added by the filter, to the view model, and return the view.


## View

When the view is rendered to the browser, "**Hello, Peter!**" is visualized as a final result.

```js
// index.html

<!DOCTYPE html>
<html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:th='http://www.thymeleaf.org'>
<head>
    <meta charset='UTF-8'>
    <title>Filter Demo</title>
</head>
<body>
    <h1 th:text='|Hello, ${name}!|'></h1>
</body>
</html>

```
[/slide]

[slide hideTitle]
# Interceptor

Just like filters interceptors have a similar model they **intercept requests**, but both the **request** and **response** just like we do a filter.

The difference between the two is interceptors have **been designed to manipulate the entities**, to manipulate the **input** and **output** streams.

This way it is different from filters in the sense that filters manipulate the **header information** or **metadata information** while interceptors manipulate the actual body of the request.

In the response there are two kinds of **interceptors**:

- **Reader interceptor**
- **Writer interceptor** 

We have one to read and one to write but what's different here is what's being read from and what's being written to.

In the case of filters, it is the **request information** and the responds information in the case of **interceptors** it is the request body and the response body.

## Interceptor Diagram

[image assetsSrc="Java-Spring-Advanced-Spring-Security-2.png" /]

The diagram shows what is the difference between filters and interceptors.

The application runs in a web container, when a **request** is sent, first, it goes through a **filter**, then the request continues into the **Spring MVC dispatcher** where the interceptors take over.

When the **request reaches its endpoint** (controller), the response is sent, which again goes through interceptors and filters.

[/slide]

[slide hideTitle]
# Interceptor Examples

```java
// LogingInterceptor

public class LogingInteceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,  FilterChain filterChain, Object handler) throws IOException, ServletException {
        //Log some information ...

        return true;
    }
}

```

The class "**LogingInteceptor**" implement "**HandlerInterceptor**" interface, where we have a method "preHan**dle", which receive "**request**", "**response**", "**filterChain**", "**handler**" as a parameters.

## Register Interceptor in Configuration

When creating interceptors it is important to **register** them into the Spring context:

```java
@Configuration
@EnableWebMvc
public class WebConfiguration implements WebMvcConfigurer {

    private final MyInterceptor myInterceptor;

    public WebConfiguration(MyInterceptor myInterceptor) {
        this.myInterceptor = myInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(myInterceptor);
    }
}
```

To register interceptor, MVC web configuration should be **set**, then the "**addInterceptors**" method should be **overridden**, which receives the `InterceptorRegistry` as an argument.

Into this "**registry**", the interceptor should be explicitly added.
[/slide]