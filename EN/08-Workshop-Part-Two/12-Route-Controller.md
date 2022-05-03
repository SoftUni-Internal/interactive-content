[slide hideTitle]

# Create Route Controller

First, let's create our **RouteController** in the **web** package.

[image assetsSrc="47-RouteController.png" /]

Be sure to add the **@Controller** and **@RequestMapping** annotations.

From the **constructor**, we will receive:

- **routeService**
- **userService**
- **modelMapper**

```java
@Controller
@RequestMapping("/routes")
public class RouteController {

    private final RouteService routeService;
    private final UserService userService;
    private final ModelMapper modelMapper;

    public RouteController(RouteService routeService, UserService userService, ModelMapper modelMapper)
    {
        this.userService = userService;
        this.routeService = routeService;
        this.modelMapper = modelMapper;
    }
}
```

[/slide]

[slide hideTitle]

# All Routes Method

Now let's add the logic for the **all routes** page. We will have a page, in which we have all the routes, with small information about them.

We will create **allRoutes()** method with an empty **@GetMapping**. That means that on the **localhost:8080/routes/** we will view the routes page.

```java
    @GetMapping()
    public String allRoutes(Model model)
    {
        model.addAttribute("routes", routeService.findAllRoutesView());
        return "routes";
    }
```

[/slide]

[slide hideTitle]

# All Routes View

In the **templates** directory, located in the **resources**, we can find the **routes.html** view.

With a **th:each** loop, we will iterate through the list of routes. This will repeat the section.

```html
<html lang="en" xmlns:th="http://www.thymeleaf.org">
  <head th:replace="fragments/commons::head"></head>
  <body>
    <div class="wrapper">
      <header th:replace="fragments/commons::header"></header>
      <section th:each="r : ${routes}" th:object="${r}" class="road">
        <img th:src="*{pictureUrl}" alt="Route image" />
        <div>
          <h2 th:text="*{name}"></h2>
          <p th:text="*{description}"></p>
          <a th:href="@{/routes/details/{id}(id = *{id})}" class="btn"
            >Learn More</a
          >
        </div>
      </section>
    </div>
  </body>
  <footer th:replace="fragments/commons::footer"></footer>
</html>
```

If we start our project, and go to the **localhost:8080/routes/**, we will see our routes:

[image assetsSrc="48-All-Routes.png" /]

If you are wondering how we have routes, it's because previously we have added them with the **database seed**.

[/slide]
