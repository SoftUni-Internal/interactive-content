[slide hideTitle]

# Update Login Functionality

Now our project has **Spring Security**. But in the **login** and **register** pages, we are still using our old logic.

First, we will update the **login** functionality. In the **UserController**, we will delete the **@Get** and **@PostMapping** login methods. We also delete the **@ModelAttribute** because we don't use it.

We remove:

```java

    @ModelAttribute
    public UserLoginBM userLoginBM(){
        return new UserLoginBM();
    }

    @GetMapping("/login")
    public String login(Model model) {
        //...
    }

    @PostMapping("/login")
    public String loginPOST(/*...*/) {
        //...
    }
```

[/slide]

[slide hideTitle]

# Create Login Controller

To do things correctly, we will create a separate controller called **UserLoginController**, in the **web** package.

Here we want to only specify the **GetMapping**. The post method will come automatically from **Spring Security**.

```java
package com.example.pathfinderproject.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/users")
public class UserLoginController {

    @GetMapping("/login")
    public String login() {
        return "login";
    }
}
```

[/slide]

[slide hideTitle]

# Update Login View

With the previous model, our **login.html** received User **Binding Model** and **isExisting** field. Now everything comes from the **Spring Security**. We simplify the form by deleting a lot of **attributes**.

This is how the **login** view will look like.

```html
<html lang="en" xmlns:th="http://www.thymeleaf.org">
  <head th:replace="fragments/commons::head"></head>

  <body>
    <main class="p-5 align-content-center bg-blur my-register-div">
      <h1 class="border-bottom mb-5">Login</h1>
      <div class="d-flex justify-content-center">
        <div class="row g-3 align-items-center">
          <form th:action="@{/users/login}" method="POST">
            <div>
              <div class="col-auto">
                <label for="username" class="col-form-label ">Username</label>
              </div>
              <div class="col-auto">
                <input
                  type="text"
                  name="username"
                  required
                  id="username"
                  class="form-control"
                />
              </div>
              <small class="invalid-feedback">
                <span class="bg-danger text-white"
                  >Username is not correct.</span
                >
              </small>
            </div>
            <div>
              <div class="col-auto">
                <label for="password" class="col-form-label ">Password</label>
              </div>
              <div class="col-auto">
                <input
                  type="password"
                  name="password"
                  required
                  id="password"
                  class="form-control"
                />
              </div>
            </div>
            <div class="d-flex justify-content-center mt-2">
              <button class="btn btn-primary btn-block w-50" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
    <footer th:replace="fragments/commons::footer"></footer>
  </body>
</html>
```

[/slide]

[slide hideTitle]

# Update Navigation Bar

In the **templates/fragments/commmons.html** is located the **navigation bar**.

We will replace the

```html
<th:block th:if="${@currentUser.id == null}"> ... </th:block>
```

with

```html
<th:block sec:authorize="!isAuthenticated()"> ...</th:block>
```

This is how the full **header** will look like:

```html
<header th:fragment="navigatioin">
  <nav class="main-nav">
    <ul>
      <th:block sec:authorize="!isAuthenticated()">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/users/login">Login</a>
        </li>
        <li>
          <a href="/users/register">Register</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </th:block>
      <th:block sec:authorize="isAuthenticated()">
        <li>
          <a href="/routes/add">Add new route</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <a href="/users/logout">Logout</a>
        </li>
      </th:block>
    </ul>
  </nav>
</header>
```

[/slide]
