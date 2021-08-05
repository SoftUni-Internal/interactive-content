# Additional Spring Functionalities

[slide hideTitle]
# ModelAttribute
When the annotation is used at the method level, it indicates the **purpose of that method**, which is to add one or more model attributes. 

Such methods support the same argument types as the "**request mapping**" methods, but they cannot be mapped directly to requests.

```java
@ModelAttribute
public void addAttributes(Model model) {
    model.addAttribute("message", "Welcome to SoftUni!");
}
```
This is an example of a method that **adds** an attribute, named "message", to all models that are defined in the **controller** class. 

The model attribute annotation refers to the **property** of the model object, and it is used to prepare the model data. 

This annotation binds a **method variable** or the **model object** to a named model attribute. 

The annotation accepts an **optional value** that indicates the name of the model attribute. 

If **no value** attribute is supplied, then the value would default to the **return type** name of the method.

When used as a method argument, the **model attribute** indicates the argument should be retrieved from the model. 

When not present, it should be first **instantiated**, and then added to the model.

Once present in the model, the arguments fields should be **populated** from all request parameters that have matching names. 

That is why it is very important to set the same names for the variables in the POJO file, as well as in the form. 

Otherwise, Тhymeleaf would not be able to populate the object properly.

## ModelAttribute Examples

```java
@RequestMapping(value = "/cars/add", 
    method = RequestMethod.POST)
public String submit(@ModelAttribute("car")Car car) {
// Some code ...
 return "carView";
}
```

In this controller, we are handling a post request with an endpoint. 

We have a method handler "**submit**", and we want to pass an object of type "**car**" to this method. 

The data in the object, however, comes directly from the user input and it is mapped to the "**car**" class properties, thanks to the model attribute annotation. 

In the parenthesis, we set the optional value of "**car**", which indicates the name of the model attribute.

In the body of the method, we could **manipulate** and **save** the object to the database and finally return the view. 

[/slide]


[slide hideTitle]
# CrossOrigin

By using "**CrossOrigin**" we can make HTTP requests to a **different domain** and Java Spring automatically adds needed headers so another domain can execute requests to this route. 

```java
@CrossOrigin
@RequestMapping("/hello")
public String hello() {
    return "Hello World!";
}
```

[/slide]

[slide hideTitle]
# Qualifier

The solution to the situation is when you create more than one bean of the same type and want to wire only one of them with a property. 

In this case, a `@Qualifier` annotation may be used, along with `@Autowired` to remove the confusion by specifying which exact bean will be wired. 

Example:

```java
@Component
@Qualifier("bike")
class Bike implements Vehicle {
   private String make;
   private String model;
}
```

```java
@Component
@Qualifier("car")
class Car implements Vehicle {
   private String make;
   private String model;
   private Integer seats;
}
```

If we want to get Bike, we need to specify it by adding the `@Qualifier("bike")` tag before injecting Vehicle:

```java
@Autowired
Biker(@Qualifier("bike") Vehicle vehicle) {
    this.vehicle = vehicle;
}
```

[/slide]

[slide hideTitle]
# Primary

We can use `@Primary` when having more than one instance of the bin.

For example, if Spring has made a configuration of a bin, and then we manually configure the same bin, it is uncertain which bin has the priority.

In this case, the `@Primary` annotation could be used for giving priority to certain configurations.

```java
@Component
@Primary
class Car implements Vehicle {}
```

```java
@Component
class Bike implements Vehicle {}
```

The example of the `@Primary` use case:


```java
@Component
class Driver{
    @Autowired
    Vehicle vehicle;
}
```

```java
@Component
class Bike{
    @Autowired
    @Quantifier("bike");
    Vehicle vehicle;
}
```
[/slide]