[slide hideTitle]

# Register View

The register view is located in the **resources directory** - **register.html**. We have inputs for:

- **username**
- **fullName**
- **age**
- **password**
- **confirm password**

For our form we need to specify what action and method it will send. We use the **RegisterBM**, so we can't send another information to the server.

```java
    <form
        th:object="${userRegisterBM}"
        th:action="@{/users/register}"
        th:method="POST">
        // ...
    </form>
```

Each input has an **error** validation, and it will display the appropriate message:

```java
<small id="usernameError" class="invalid-feedback bg-danger rounded">Username length must be more than 3 characters</small>
```

[/slide]

[slide hideTitle]

This is the full code for the **register.html**

```java
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head th:replace="fragments/commons::head"></head>

<body>
<main class="p-5 align-content-center bg-blur my-register-div">
    <h1 class="border-bottom">Register</h1>
    <div class="d-flex justify-content-center ">
        <div class="row g-3">
            <form
                    th:object="${userRegisterBM}"
                    th:action="@{/users/register}"
                    th:method="POST">
                <div>
                    <div class="col-auto">
                        <label for="inputUsername" class="col-form-label ">Username</label>
                    </div>
                    <div class="col-auto">
                        <input th:field="*{username}"
                               required minlength="5" maxlength="20" type="text" id="inputUsername"
                               class="form-control" aria-describedby="usernameHelpInline">
                        <small id="usernameError" class="invalid-feedback bg-danger rounded">Username length must be
                            more than 3 characters</small>

                        <small th:if="${false}" id="usernameUniqueError"
                               class=" bg-danger rounded">Username is already occupied</small>

                    </div>
                </div>

                <div>
                    <div class="col-auto">
                        <label for="inputFullName" class="col-form-label ">Full Name</label>
                    </div>
                    <div class="col-auto">
                        <input
                                th:field="*{fullName}"
                                required minlength="5" maxlength="20" type="text" id="inputFullName"
                                class="form-control" aria-describedby="fullNameHelpInline">
                        <small id="fullNameError" class="invalid-feedback  form-text bg-danger rounded">Full name length
                            must be more than 3 characters</small>
                    </div>
                </div>
                <div>
                    <div class="col-auto">
                        <label for="inputAge" class="col-form-label ">Age</label>
                    </div>
                    <div class="col-auto">
                        <input
                                th:field="*{age}"
                                required type="number" id="inputAge" class="form-control" min="16" max="90"
                                aria-describedby="ageHelpInline">
                        <small id="ageError" class="invalid-feedback  form-text bg-danger rounded">Must be valid
                            age</small>
                    </div>
                </div>
                <div>
                    <div class="col-auto">
                        <label for="inputPassword" class="col-form-label ">Password</label>
                    </div>
                    <div class="col-auto">
                        <input
                                th:field="*{password}"
                                required minlength="5" maxlength="20" type="password" id="inputPassword"
                                class="form-control" aria-describedby="passwordHelpInline">
                        <small id="passwordError" class="invalid-feedback  form-text bg-danger rounded">
                            Password length must be between 5 and 20 characters and passwords should match.
                        </small>
                    </div>
                </div>

                <div>
                    <div class="col-auto">
                        <label for="inputConfirmPassword" class="col-form-label ">Confirm Password</label>
                    </div>
                    <div class="col-auto">
                        <input
                                th:field="*{confirmPassword}"
                                required minlength="5" maxlength="20" type="password"
                                id="inputConfirmPassword" class="form-control"
                                aria-describedby="confirmPasswordHelpInline">
                        <small id="confirmPasswordError" class="invalid-feedback  form-text bg-danger rounded">
                            Password length must be between 5 and 20 characters and passwords should match.
                        </small>
                    </div>
                </div>

                <div class="d-flex justify-content-center mt-4">
                    <button class="btn btn-primary btn-block w-50" type="submit">Register</button>
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

# Register a User

We can try to register a **user**. Go to **localhost:8080/users/register** and fill the form. After clicking on the submit form, this should redirect you to the **login** form.

[image assetsSrc="33-Register-Form.png" /]

If we are not sure if we have **registered** a user, we can open our database. Inside the table **users** we will see our record.

[image assetsSrc="34-Register-DB.png" /]

**For now our password is not secured, but as the tutorial goes we will fix that.**

In the next workshop, we will be able to **authenticate** and store the logged user in our **session**. We will start working on the **routes** section that is the most important for this project.
[/slide]
