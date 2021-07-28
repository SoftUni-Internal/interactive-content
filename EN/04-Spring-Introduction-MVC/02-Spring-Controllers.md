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

Controller's actions are regular Java methods, which have annotations called "**Request Mapping**".

The "**Request Mapping**" contains the route, that the current method is responsible for.

## Examples

``` java
@RequestMapping("/home")
public String home() {
return "home-view";
}
```
In this example, the method `home()` will be executed when the `/home` route is requested.

This method returns a string, which is the name of a view ("home-view").

``` java
@RequestMapping("/home")
public ModelAndView home(ModelAndView mav) {
mav.setViewName("home-view");
return mav;
}
```

Also, a model could be returned by the view.

In this example, the "home" method is an argument (`ModelAndView mav`), and this model could be passed to the view, so the information into the "mav" model could be rendered.

## Request Mapping Problem

The `@RequestMapping` annotation is able of handling all HTTP methods (GET, PUT, POST, DELETE, and PATCH).

The default behavior of `@RequestMapping` annotation is all requests are HTTP GET type.

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

By using get using `@GetMapping` we can create a GET request, which is the easier way to create GET request:

```java
@GetMapping("/home")
public String home() {
return "home-view";
}
```
It is recommended to use always shorter syntax when possible because a pearl of common wisdom is "less code equals fewer bugs". 

## Actions - Get Requests

Example of `@GetMapping` action:

```java
@Controller
public class CatController {

    @GetMapping("/cat")              // Request Mapping
    public String getHomeCatPage(){  // Action
        return "cat-page.html";      // View
    }
}
```
When a GET request is sent to `localhost:8080/cat` the method `getHomeCatPage()` will be triggered, and the name of the view will be returned as a result.

Result:

[image assetsSrc="Java-Spring-Fund-MVC-2.png" /]

## Controllers

```java
@Controller                          // Controller
public class DogController {

    @GetMapping("/dog")              // Request Mapping
    @ResponseBody                    // Print Text
    public String getDogHomePage(){  // Action
        return "I am a dog page";    // Text
```

When a GET request is sent to `localhost:8080/dog` the method `getDogHomePage()` will be triggered, and as a result, a text will be returned.

Notice the difference between the `CatController` where a view is returned and the `DogController` where we have `@ResponseBody` annotation and text is returned.

Result:

[image assetsSrc="Java-Spring-Fund-MVC-3.png" /]

[/slide]

[slide hideTitle]
# Post Mapping

Similar to the `GetMapping` there is also an alias for "**RequestMapping**" with method POST:

```java
@PostMapping("/register")
public String register() {
…
}
```

This method will be triggered only on a POST request, also there is existing annotation for all other HTTP requests (PUT, PATCH, DELETE).

## Actions - Post Requests 

```java
@Controller
@RequestMapping("/cat")      // Starting route
public class CatController {

    @GetMapping("")
    public String addCat(){
        return "new-cat.html";
    }
}
```
In this example, the `@RequestMapping` annotation is placed on the controller, which means that every action (method) in `CatController` will be triggered on `localhost:8080/cat`.

The `addCat()` action returns a input form:

[image assetsSrc="Java-Spring-Fund-MVC-4.png" /]

When the "**Add Cat**" button is pressed, the `addCatConfirm` action is triggered, which is located into the `CatController` too.

```java
@Controller
@RequestMapping("/cat")
public class CatController {

    @PostMapping("")
    public String addCatConfirm(@RequestParam String catName, @RequestParam int catAge){  // Request param
        System.out.println(String.format("Cat Name: %s, Cat Age: %d", catName, catAge));
        return "redirect:/cat"; // Redirect
    }
}
```
In this example `addCatConfirm` action receives two parameters "**catName**" and "**catAge**", wtih the help of `@RequestParam` Java Spring framework will extract the parameters from headers and pass them to the `addCatConfirm` action. 

Result:

[image assetsSrc="Java-Spring-Fund-MVC-5.png" /]

Then the `addCatConfirm` action return redirectiont to `localhost:8080/cat`, which is very common in POST actions, also known as [Post/Redirect/Get pattern](https://en.wikipedia.org/wiki/Post/Redirect/Get).

[/slide]


[slide hideTitle]
# Passing Attributes to View

## Passing a String 

An action located into a controller class can pass arguments to the view, where the value usually comes from a database.

```java
@GetMapping("/")
public String welcome(Model model) {
  model.addAttribute("name", "Peter");
  return "index";
}
```

In this example to the "model" object, the name "Peter" is attached by using the `addAttribute()` method.

When working with Thymeleaf, Java Spring saves this "model" to the context, and the object's information could be access by the view.

## Passing a ModelMap 

```java
@GetMapping("/")
public String welcome(ModelMap modelMap) {
  modelMap.addAttribute("name", "Peter");
  return "index";
}
```

The `ModelMap` object will be automatically passed to the view as context variables, and again this "**modelMap**" could be used in the view.

## Passing a ModelAndView 

```java
@GetMapping("/")
public ModelAndView welcome(ModelAndView model) {
  model.addObject("name", "Peter");
  model.setViewName("index")
  return model;
}
```
The `ModelAndView` object will be automatically passed to the view as context variables, and again this "**model**" could be used in the view.

[/slide]

[slide hideTitle]
# Models and Views


```java
@Controller
public class DogController {

    @GetMapping("/dog")
    public ModelAndView getDogHomePage(ModelAndView modelAndView){  // Model and View
        modelAndView.setViewName("dog-page.html");
        return modelAndView;
    }
}
```
In this example "modelAndView" is passed to the `getDogHomePage` route, that way it is possible to set the name of the view, in this case, is "**dog-page.html**", then the "**modelAndView**" is returned as a result.

That way the view resolver is able to extract the name of the view and the result is:

[image assetsSrc="Java-Spring-Fund-MVC-6.png" /]
[/slide]

[slide hideTitle]
# Request Parameters

Getting a parameter from the query string:

```java
@GetMapping("/details")
public String details(@RequestParam("id") Long id) {
  ...
}
```

By using `@RequestParam()` we can specify the parameter which we want to retrieve from the query string, in this case, is "id".

`@RequestParam`can also be used to get POST parameters:

```java
@PostMapping("/register")
public String register(@RequestParam("name") String name) {
  ...
}
```

## Request Parameters with Default Value

Getting a parameter from the query string:

```java
@GetMapping("/comment")
public String comment(@RequestParam(name="author", defaultValue = "Annonymous") String author) {
  ...
}
```

In this case, a default value of a parameter is set to "Annonymous", which means that if the parameter is null, a default value will be set.


It is possible to make a parameter optional:

```java
@GetMapping("/search")
public String search(@RequestParam(name="sort", 
required = false) String sort) {
  ...
}
```

## Path Variable

Getting a parameter from the path variable:

```java
@GetMapping("/details/{id}")
public String details(@PathVariable("id") Long id) {
  ...
}
```

In this example, the `@PathVariable` is used to bind the "**id**" parameter.

## Form Objects

By using `@ModelAttribute` is it possible to bind more than one parameter:

```java
@PostMapping("/register")
public String register(@ModelAttribute UserDTO userDto) {
  ...
}
```

In this example, a "userDto" is used, which is a plain all java object (POJO) with properties.

What Java Spring does is bind the "userDto" properties to the input field, by using reflection.

For successfully binding the input field names must be the same as the object field names.

[/slide]


[slide hideTitle]
# Redirecting

Redirecting after a POST request

```java
@PostMapping("/register")
public String register(@ModelAttribute UserDTO userDto) {
  ...
  return "redirect:/login";
}
```

In this example, we have POST mapping, and after successful registration, the user will be redirected to the login page.

## Redirecting with Parameters

It is possible to redirect with query string parameters:


```java
@PostMapping("/register")
public String register(@ModelAttribute UserDTO userDto,
RedirectAttributes redirectAttributes) {
  
  redirectAttributes.addAttribute("errorId", 3);
  return "redirect:/login";
}
```

When an error occurs during login, it is possible to add this attribute into redirect attributes in the GET request and can be retrieved again by using the request parameter.

## Redirecting with Attributes

It is possible to keep objects after redirect:

```java
@PostMapping("/register")
public String register(@ModelAttribute UserDTO userDto,
RedirectAttributes redirectAttributes) {
  ...
  redirectAttributes.addFlashAttribute("userDto", userDto);
  return "redirect:/register";
}
```
An object can be stored by using the `addFlashAttribute()` method.

[/slide]