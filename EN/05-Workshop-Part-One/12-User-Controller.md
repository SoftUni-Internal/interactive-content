[slide hideTitle]

# Add User Controller

We need to add functionality for the User Controller.

```java
@Controller
@RequestMapping("/users")
public class UserController {
}
```

Be sure that the class has the **@Controller** and **@RequestMapping("/users")** annotations.

From the constructor we will get the references for the **UserService** and **ModelMapper**. We will bind them to variables.

```java
    private final UserService userService;
    private final ModelMapper modelMapper;

    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }
```

[/slide]

[slide hideTitle]

# Login and Register Routes

Each route **/users/register** and **/users/login** will have post and get requests.

```java
    @GetMapping("/register")
    public String registerGET(Model model){
        // ...
        return "register";
    }

    @PostMapping("/register")
    public String registerPOST(...){
        // ...
        return "redirect:login";
    }

    @GetMapping("/logout")
    public String logout(){
        userService.logout();
        return "redirect:/";
    }
```

- With the **registerGET** method, we will load the **view** for the route.
- With the **registerPOST** method, we will send infromation to the server with our credentials. This method will be invoked when we click on the **Register** button. On our view we bind the **userRegisterBM** with its validation. If there are no problems, the user will be saved in our database.
- With the **logout** method, we will log out the user and **redirect** him to the home page.
- For now the **login** page won't work and will only load the raw **HTML** of the page.

[/slide]

[slide hideTitle]

# User Controller Code

This is the full code for the **user controller**.

```java
package com.example.pathfinderproject.web;

import com.example.pathfinderproject.model.binding.UserLoginBM;
import com.example.pathfinderproject.model.binding.UserRegisterBM;
import com.example.pathfinderproject.model.service.UserServiceModel;
import com.example.pathfinderproject.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final ModelMapper modelMapper;

    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @ModelAttribute
    public UserRegisterBM userRegisterBM(){
        return new UserRegisterBM();
    }

    @GetMapping("/register")
    public String registerGET(Model model){
        return "register";
    }

    @PostMapping("/register")
    public String registerPOST(@Valid UserRegisterBM userRegisterBM,
                               BindingResult bindingResult, RedirectAttributes redirectAttributes) {
        if(bindingResult.hasErrors() ||  !userRegisterBM.getPassword().equals(userRegisterBM.getConfirmPassword()))
        {
            redirectAttributes
                    .addFlashAttribute("userRegisterBM", userRegisterBM);
            redirectAttributes
                    .addFlashAttribute("org.springframework.validation.BindingResult.userRegisterBM", bindingResult);

            return "redirect:register";
        }

        userService.registerUser(modelMapper
                .map(userRegisterBM, UserServiceModel.class));
        return "redirect:login";
    }

    @GetMapping("/logout")
    public String logout(){
        userService.logout();
        return "redirect:/";
    }

    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("isExists", true);
        return "login";
    }
}
```

[/slide]
