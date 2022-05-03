[slide hideTitle]

# Create Route GET Method

To add the **create route** functionality, we will need to have 2 methods. One will load the **page** with the **form**, and the other for when we **submit the form**.

Before we add the two methods, we need to create a **model attribute** that will store the reference for the **Create Route Binding Model**. It is important to be **above** the next two methods because the **framework** will not know that it exists.

```java
    @ModelAttribute
    public RouteCreateBM routeCreateBM() {
        return new RouteCreateBM();
    }
```

In the **RouteController** we will have **addGET()** and **addPOST()** methods.

For the **addGET()** method, before we return the view, we will make a **validation** if the user is logged. Later we will change this with a **middleware** but for now, we want to make a simple check.

We need the validation because we want only **logged users** to add routes.

```java
    @GetMapping("/add")
    public String addGET()
    {
        if(!userService.isLogged())
        {
            return "redirect:/users/login";
        }

        return "add-route";
    }
```

When we go to the **localhost:8080/routes/add** the server will return the **add-route.html** file in the **resources** directory.
[/slide]

[slide hideTitle]

# Create Route POST Method

What we want to do next, is to create a method that will be called, when we press the submit button in the **localhost:8080/routes/add** page.

After we validate the input data, we will save it to the database with the **routeService**.

Here instead of saving the **.gpx** file that we will upload, we want to get only the parameters. We **convert** the **gpxCoordinate** to a string so we can save them as a **record** in the **database**.

After everything is done we are redirected to the **home page**.

```java
    @PostMapping("/add")
    public String addPOST(@Valid RouteCreateBM routeCreateBM, BindingResult bindingResult, RedirectAttributes redirectAttributes) throws IOException {
        if(bindingResult.hasErrors()){
            redirectAttributes.addFlashAttribute("routeCreateBM", routeCreateBM);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.routCreateBM", bindingResult);

            return "redirect:add";
        }

        RouteServiceModel routeServiceModel = modelMapper.map(routeCreateBM, RouteServiceModel.class);
        routeServiceModel.setGpxCoordinates(new String(routeCreateBM.getGpxCoordinates().getBytes()));

        routeService.addNewRoute(routeServiceModel);

        return "redirect:/";
    }
```

[/slide]

[slide hideTitle]

# Create Route View

The create **view** is located in the **resources** directory - **add-route.html**. Be sure that the **form** has the correct tags to call the specific **action** and **method**.

```java
<html lang="en" xmlns:th="http://www.thymeleaf.org">

<head th:replace="fragments/commons::head"></head>
<body>
<header th:replace="fragments/commons::header"></header>
<div class="row justify-content-center ">
    <form id="add-route-form" class="w-50 rounded text-white mt-5"
          th:action="@{/routes/add}"
          th:method="POST"
          th:object="${routeCreateBM}"
          enctype="multipart/form-data">

        <h3 class="border-left border-light pl-2">Add a new route</h3>
        <div>
            <div class="form-group">
                <label for="inputName" class="col-form-label ">Name</label>
            </div>
            <div class="form-group">
                <input th:field="*{name}"
                       th:errorclass="'is-invalid bg-danger text-white'"
                       required minlength="1" maxlength="20" type="text" id="inputName" class="form-control" aria-describedby="inputNameError">
                <small th:errors="*{name}" id="inputNameError" class="invalid-feedback rounded">Name length must be more than 3 characters</small>

            </div>
        </div>

        <div>
            <div class="form-group">
                <label for="inputDescription" class="col-form-label ">Description</label>
            </div>
            <div class="form-group">
                    <textarea th:field="*{description}"
                              th:errorclass="'is-invalid bg-danger text-white'"
                              required minlength="1" id="inputDescription" class="form-control" aria-describedby="inputDescriptionError"></textarea>
                <small th:errors="*{description}" id="inputDescriptionError" class="invalid-feedback form-text rounded">Description length must be more than 5
                    characters</small>
            </div>
        </div>

        <div>
            <div class="form-group">
                <label for="inputGpx" class="col-form-label ">GPX Coordinates</label>
            </div>
            <div class="form-group">
                <input type="file"
                       th:field="*{gpxCoordinates}"
                       th:errorclass="'is-invalid bg-danger text-white'"
                       required id="inputGpx" class="form-control-file" aria-describedby="inputGpxError">
                <small id="inputGpxError" class="invalid-feedback  form-text rounded">Must be valid GPX Coordinates</small>
            </div>
        </div>
        <div>
            <div class="form-group">
                <label for="level">Level</label>
                <select th:field="*{level}"
                        th:errroClass="'is-invalid bg-danger'"
                        id="level" class="custom-select">
                    <option value="" selected>Select level</option>
                    <option th:each="l : ${T( com.example.pathfinderproject.model.entity.enums.UserLevelEnum).values()}" th:value="${l}" th:text="${l}"></option>
                </select>
            </div>
        </div>
        <div>

            <div class="form-group">
                <label for="videoUrl">Video Url (only last eleven characters from Youtube)</label>
                <input th:field="*{videoUrl}"
                       id="videoUrl" type="text" class="form-control" placeholder="Video url">
            </div>
        </div>

        <div>
            <div class="form-group p-3">
                <label class="p-2" for="categories">Categories:</label>
                <input  th:each="c : ${T(com.example.pathfinderproject.model.entity.enums.CategoryNameEnum).values()}"
                        th:object="${c}"
                        th:text="${c}"
                        th:value="${c}"
                        class="m-3" type="checkbox" name="categories" id="categories" value="1" text="Category">
                <br>
            </div>
        </div>

        <div class="d-flex justify-content-center mt-4">
            <button class="btn btn-primary btn-block w-50" type="submit">Add Route</button>
        </div>

    </form>
</div>
<footer th:replace="fragments/commons::footer"></footer>
</body>

</html>
```

[/slide]
