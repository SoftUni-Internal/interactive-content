[slide hideTitle]

# Add Login Methods

After we have a **Binding Model** for the **Login** process, we can go to the **UserController**.

Inside it from the previous part, we have already implemented method that loads the login page.

```java
@GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("isExists", true);
        return "login";
    }
```

Now we want to add a method, that will send a **POST** request with the **username** and **password** inputs of the user.

[/slide]

[slide hideTitle]

# Send Login Request

Beside the **POST** method, we will also add a **ModelAttribute**, that will hold the instance of the **UserLoginBM**.

```java

@ModelAttribute
public UserLoginBM userLoginBM(){
    return new UserLoginBM();
}

@PostMapping("/login")
    public String loginPOST(@Valid UserLoginBM userLoginBM,
                            BindingResult bindingResult, RedirectAttributes redirectAttributes) {
        if(bindingResult.hasErrors())
        {
            redirectAttributes
                    .addFlashAttribute("userLoginBM", userLoginBM)
                    .addFlashAttribute("org.springframework.validation.BindingResult.userLoginBM", bindingResult);

            return "redirect:login";
        }

        UserServiceModel user = userService
                .findByUsernameAndPassword(userLoginBM.getUsername(), userLoginBM.getPassword());

        if(user == null)
        {
            redirectAttributes
                    .addFlashAttribute("isExists", false)
                    .addFlashAttribute("userLoginBM", userLoginBM)
                    .addFlashAttribute("org.springframework.validation.BindingResult.userLoginBM", bindingResult);
            return "redirect:login";
        }

        userService.loginUser(user);

        return "redirect:/";
    }
```

- After we submit our form on the **login** page, the **loginPOST** method will be invoked. It will check whether, there are errors and if there is a user with that input.
- If there is a user with those credentials we will be **redirected** to the home page and **authenticated**.

[/slide]
