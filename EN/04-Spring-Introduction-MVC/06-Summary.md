[slide hideTitle]

# Summary

## In this lesson you learned:

- Spring MVC - MVC framework that has three main components:
  - Controller - controls the application flow

```java
@Controller
public class HomeController {
  ...
}

```
  - View - presentation layer
  - Model - data component with the main logic

- Constructor injection - the best way for DI
```java
@Autowired
public ControllerA(ServiceA serviceA, ServiceB serviceB, ServiceC serviceC) {
  this.serviceA = serviceA;
  this.serviceB = serviceB;
  this.serviceC = serviceC;
}
```

- Splitting your application code into layers 

- Every component should be as "thin" as possible


## In the next lesson you will learn:

- An in-depth **workshop**
    * how to implement a real application

[/slide]
