# Validatetion 

[slide hideTitle]
# Spring Validation and Thymeleaf

Validation is commonly used for validating user's input because we should be very careful what type of data is stored in the database.

To set validation we should use annotation, which comes from [JavaX](https://docs.oracle.com/javaee/7/tutorial/bean-validation001.htm) validation package.

It is also possible to create custom validation.

Setting validation in the model:

```java
// SomeModel.java

public class SomeModel {
@NotNull
@Size(min = 3, max = 10, message = "Invalid name")
private String name;
}

```

In this example, we use the `@NotNull` attribute, in which the "name" property can not be null, and give a minimum and maximum length.

If the user's input does not match the requirements, an appropriate error message will be sent.

Another requirement is to add a model to the view:

```java
// SomeController.java

@Controller
public class SomeController {

 @GetMapping("/add")
 public String getPage(Model model) {
  
   if(!model.containsAttribute("bindingModel"){  // Adding a model to the view
    model.addAttribute("bindingModel", 
            new BindingModel()); 
    }
       
     return "add";
    }
}

```

```java
// SomeController.java

@PostMapping("/add")
    public String add (@Valid @ModelAttribute("bindingModel") SomeModel bindingModel, BindingResult bindingResult, RedirectAttributes rAtt) {  // Validate the model
        if(bindingResult.hasErrors()){
                rAtt.addFlashAttribute("bindingModel", bindingModel);
        rAtt.addFlashAttribute("org.springframework.validation.BindingResult.SomeModel", bindingResult);  // Validation Result
        return "redirect:/add";
        }

        this.someService.save(bindingModel);

        return "redirect:/home";
    }

```

```java
// add.html

<div th:object="${productBindingModel}">  // Set Binding Model
    <div class="justify-content-center">
        <label for="name" class="h4 mb-2 text-white">Name</label>
    </div>
    <input th:field="*{name}" th:errorclass="bg-danger" type="text" class="form-control" id="name" name="name"/>  // Access Field
    <small th:if="${#fields.hasErrors('name')}" th:errors="*{name}" class="text-danger"> Name error</small> // Render Error

</div>

```

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-12.png" /]

## List All Errors

```js
// add.html

<ul th:if="${#fields.hasErrors('*')}">
  <li th:each="err : ${#fields.errors('*')}" th:text="${err}">
    Input is incorrect
  </li>
</ul>

```

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-13.png" /]

```js
// add.html

<ul th:if="${#fields.hasErrors('${someModel.*}')}">
  <li th:each="err : ${#fields.errors('${someModel.*}')}" th:text="${err}">
    Input is incorrect
  </li>
</ul>

```
[/slide]


[slide hideTitle]
# Custom Annotations 

You can also implement custom validation annotations
Sometimes it is necessary due to complex validation functionality

```java
// PresentOrFuture.java

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@Constraint(validatedBy = PresentOrFutureValidator.class)
public @interface PresentOrFuture {

    String message() default "Invalid Date";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
```

You will have to implement a custom validator too

```js
// add.html

public class PresentOrFutureValidator 
implements ConstraintValidator<PresentOrFuture, Date> {
    @Override
    public boolean isValid(Date date, 
                      ConstraintValidatorContext constraintValidatorContext) {
        Date today = new Date();
        return date.after(today); //True = No Error; False = Error
    }
}
```

[/slide]