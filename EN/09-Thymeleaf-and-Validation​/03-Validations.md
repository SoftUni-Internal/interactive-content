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

Another requirement is to activate the validation into the controller:

```java
// SomeController.java

@Controller
public class SomeController {

    @GetMapping("/add")
    public String getPage(Model model) {

        if (!model.containsAttribute("bindingModel") { // Adding a model to the view
                model.addAttribute("bindingModel",
                    new BindingModel());
            }

            return "add";
        }
    }
```

In this example, we have a controller with "add" HTML form, and a binding model is inserted which is going to be used in the post mapping, as a result, the "add" page is returned.


When the form successfully fields up and submitted, the model ("bindingModel") arrive into the controller:

```java
// SomeController.java

@PostMapping("/add")
public String add(@Valid @ModelAttribute("bindingModel") SomeModel bindingModel, BindingResult bindingResult, RedirectAttributes rAtt) { // Validate the model
    if (bindingResult.hasErrors()) {
        rAtt.addFlashAttribute("bindingModel", bindingModel);
        rAtt.addFlashAttribute("org.springframework.validation.BindingResult.SomeModel", bindingResult); // Validation Result
        return "redirect:/add";
    }

    this.someService.save(bindingModel);

    return "redirect:/home";
}

```

In this example, the Spring Framework automatically maps the "bindingModel", to the "SomeModel" class.

In order to check if the "bindingModel" contains valid data, we should use the `@Valid` attribute. 

If a validation error occurs it will be located into the "bindingResult" and by using `.hasErrors()` and validation error could be caught, add to a `.addFlashAttribute()` and for example displayed to the user.

Note that for `@Valid` attribute to work the following dependency should be used:

```js
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artificalId>spring-boot-starter-validation</artificalId>
</dependency>
```

## Error Rendering

The next step is error rendering into the thymeleaf template:

```js
// add.html

<div th:object="${productBindingModel}">  // Set Binding Model
    <div class="justify-content-center">
        <label for="name" class="h4 mb-2 text-white">Name</label>
    </div>
    <input th:field="*{name}" th:errorclass="bg-danger" type="text" class="form-control" id="name" name="name"/>  // Access Field
    <small th:if="${#fields.hasErrors('name')}" th:errors="*{name}" class="text-danger"> Name error</small> // Render Error

</div>
```
First, we access the field `th:field` and by using `th:errorclass`, a CSS class is attached for displaying the validation error to the user.

As a result, the user receives very descriptive error:

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-12.png" /]

## List All Errors

Very often more than one input field is used, then the necessity of displaying the list of errors occurs:

```js
// add.html

<ul th:if="${#fields.hasErrors('*')}">
  <li th:each="err : ${#fields.errors('*')}" th:text="${err}">
    Input is incorrect
  </li>
</ul>

```

We can use a condition `th:if="${#fields.hasErrors('*')}"`, which means if any error ecures, then a foreach loop is created `th:each="err : ${#fields.errors('*')}"`, which will display all errors to the user:

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-13.png" /]

It is possible to check for errors in a specific model:
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

We can also implement custom validation annotations, it is necessary due to complex validation functionality.

One case where custom validation annotation is useful is when a user tries to register with the same credentials as an existing user in the database.

Another example of custom validation annotation is to check if an input data is valid or not:

```java
// PresentOrFuture.java

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@Constraint(validatedBy = PresentOrFutureValidator.class)
public @interface PresentOrFuture {

    String message() default "Invalid Date";

    Class <<?> [] groups() default {};

    Class <<? extends Payload> [] payload() default {};
}
```
An interface is created, which has few properties.

It is very important to add `@Constraint()` annotation, which pinpoints the validator class.

Next, we have to create the validator class and implement a custom validator interface:

```js
// add.html

public class PresentOrFutureValidator
implements ConstraintValidator < PresentOrFuture, Date > {
    @Override
    public boolean isValid(Date date,
        ConstraintValidatorContext constraintValidatorContext) {
        Date today = new Date();
        return date.after(today); //True = No Error; False = Error
    }
}
```

The `isValid()` method should be overridden, which will return if the input data is valid or not.

[/slide]