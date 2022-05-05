[slide hideTitle]

# User Profile Request

In the **UserController**, we want to create a new **GET** method that will load the page.

Inside the **UserController** class we add the following method:

```java
 @GetMapping("/profile/{id}")
    private String profile(@PathVariable Long id, Model model)
    {
        model.addAttribute("user", modelMapper
                .map(userService.findById(id), UserVM.class));
        return "profile";
    }
```

That will get the **UserServiceModel** and map it as the **UserVM**. After that, the method will return the **profile.html**, located in the **resources** directory.

Be sure that the method has **@GetMapping** annotation.

[/slide]
