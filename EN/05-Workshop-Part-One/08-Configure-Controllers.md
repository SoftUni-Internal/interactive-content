[slide hideTitle]

# Create Controllers

To **visualize** our views, we need to write our controllers. In the **web** package, we will write our **controllers**. For now, we will add:

- **HomeController**
- **UserController**

[image assetsSrc="28-Add-Controllers.png" /]
[/slide]

[slide hideTitle]

# Setup Home Controller

For our **Home Controller** class, be sure that it has the **@Controller** annotation.

Inside it, we will only write one method, that will load the **index page**.

```java
package com.example.pathfinderproject.web;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index(){
        return "index";
    }
}
```

This method will load the **index** view on the **localhost:8080/** route. We can see the **index.html** file inside the **main/resources/templates** folder of your project.

Before we make any changes let's check if everything works. Start your project, and inside your browser go to **localhost:8080**

[image assetsSrc="29-Index-Page.png" /]

We can see that we have a lot of logic to implement.
[/slide]
