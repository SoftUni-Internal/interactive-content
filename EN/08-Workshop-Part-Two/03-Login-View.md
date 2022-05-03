[slide hideTitle]

# Setup Login View

Before we test it we have to fix our **login.html** in the **resources** directory.

The form will have similar logic to the **register** form. It will send a **POST** request with the correct route.

```java
    <form
        th:action="@{/users/login}"
        th:object="${userLoginBM}"
        method="POST">
        //..
    </form>
```

[/slide]

[slide hideTitle]

# Code for The Login View

The form will have input for the:

- **username**
- **password**

Here is the full code for the **login.html**.

```java
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head th:replace="fragments/commons::head"></head>

<body>
<main class="p-5 align-content-center bg-blur my-register-div">
    <h1 class="    border-bottom mb-5">Login</h1>
    <div class="d-flex justify-content-center">

        <div class="row g-3 align-items-center">
            <small th:if="${!isExists}" class="text-danger">Incorrect username or password</small>
            <form
                    th:object="${userLoginBM}"
                    th:action="@{/users/login}"
                    method="POST">
                <div>
                    <div class="col-auto">
                        <label for="inputUsername" class="col-form-label ">Username</label>
                    </div>
                    <div class="col-auto">
                        <input type="text"
                               th:field="*{username}"
                               th:errorClass="'is-invalid bg-danger text-white'"
                               required minlength="4" maxlength="20" id="inputUsername" class="form-control" aria-describedby="usernameHelpInline">
                    </div>
                    <small class="invalid-feedback">
                        <span class="bg-danger text-white">Username is not correct.</span>
                    </small>
                </div>
                <div>
                    <div class="col-auto">
                        <label for="inputPassword" class="col-form-label ">Password</label>
                    </div>
                    <div class="col-auto">
                        <input type="password"
                               th:field="*{password}"
                               required minlength="4" maxlength="20" id="inputPassword" class="form-control" aria-describedby="passwordHelpInline">
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-2">
                    <button class="btn btn-primary btn-block w-50" type="submit">Login</button>
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

# Login Form

Let's try to **log** to our site. Go to the **localhost:8080/users/login** and type the credentials, we have entered in the previous lesson.
If you don't remember them you can register again, or view them in the database.

[image assetsSrc="35-Login-Form.png" /]

After pressing the **submit** Login button, we should be redirected to the **Home** page. If everything is working fine, we should see the Logout button with the other buttons.

[image assetsSrc="36-Login-Success.png" /]

We can try to **logout** because we have added the logic in the previous workshop.

[/slide]
